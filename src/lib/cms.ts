import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { LegalQuote } from '../content/quotes';

export type PublishedGalleryImage = { src: string; alt: string };

function getCmsClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;
  if (!url || !key) return null;
  try { return createClient(url, key); } catch { return null; }
}

function getVisitorId(): string {
  const storageKey = 'ugoo-analytics-visitor';
  let visitorId = window.sessionStorage.getItem(storageKey);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    window.sessionStorage.setItem(storageKey, visitorId);
  }
  return visitorId;
}

export async function getPublishedGalleryImages(): Promise<PublishedGalleryImage[]> {
  const client = getCmsClient();
  if (!client) return [];
  try {
    const { data, error } = await client.from('gallery_images').select('storage_path,alt_text').eq('is_published', true).order('sort_order', { ascending: true });
    if (error || !data) return [];
    return data.map((item) => ({ src: client.storage.from('law-firm-gallery').getPublicUrl(item.storage_path).data.publicUrl, alt: item.alt_text || 'Law firm gallery image' }));
  } catch { return []; }
}

export async function getPublishedLegalQuotes(): Promise<LegalQuote[]> {
  const client = getCmsClient();
  if (!client) return [];
  try {
    const { data, error } = await client.from('legal_quotes').select('quote,source,citation,note').eq('is_published', true).order('sort_order', { ascending: true });
    if (error || !data) return [];
    return data as LegalQuote[];
  } catch { return []; }
}

export async function recordPageView(pagePath: string): Promise<void> {
  const client = getCmsClient();
  if (!client || typeof window === 'undefined') return;
  try {
    const referrer = document.referrer ? new URL(document.referrer).origin : '';
    await client.from('analytics_events').insert({
      visitor_id: getVisitorId(),
      page_path: pagePath.slice(0, 500),
      referrer: referrer.slice(0, 2000),
      event_type: 'page_view',
    });
  } catch { /* Analytics must never interrupt public page rendering. */ }
}

export async function recordClick(pagePath: string, elementText: string, elementHref: string): Promise<void> {
  const client = getCmsClient();
  if (!client || typeof window === 'undefined') return;
  try {
    let safeHref = '';
    if (elementHref) {
      try {
        const parsed = new URL(elementHref, window.location.origin);
        safeHref = `${parsed.origin}${parsed.pathname}`.slice(0, 2000);
      } catch { safeHref = ''; }
    }
    await client.from('analytics_events').insert({
      visitor_id: getVisitorId(),
      page_path: pagePath.slice(0, 500),
      referrer: '',
      event_type: 'click',
      element_text: elementText.slice(0, 300),
      element_href: safeHref,
    });
  } catch { /* Click analytics must never interrupt public page rendering. */ }
}
