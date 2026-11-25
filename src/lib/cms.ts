import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Post, PostBlock } from '../content/posts';
import type { LegalQuote } from '../content/quotes';

export type PublishedGalleryImage = { src: string; alt: string };
function getCmsClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;
  if (!url || !key) return null;
  try { return createClient(url, key); } catch { return null; }
}

function bodyToBlocks(body: string): PostBlock[] {
  return body.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean).map((text) => ({ type: 'p' as const, text }));
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

export async function getPublishedBlogPosts(): Promise<Post[]> {
  const client = getCmsClient();
  if (!client) return [];
  try {
    const { data, error } = await client.from('blog_posts').select('slug,title,excerpt,body,published_at,created_at').eq('is_published', true).order('published_at', { ascending: false });
    if (error || !data) return [];
    return data.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, date: (item.published_at || item.created_at || '').slice(0, 10), body: bodyToBlocks(item.body || '') }));
  } catch { return []; }
}

export async function getPublishedBlogPostBySlug(slug: string): Promise<Post | undefined> {
  const client = getCmsClient();
  if (!client) return undefined;
  try {
    const { data, error } = await client.from('blog_posts').select('slug,title,excerpt,body,published_at,created_at').eq('slug', slug).eq('is_published', true).maybeSingle();
    if (error || !data) return undefined;
    return { slug: data.slug, title: data.title, excerpt: data.excerpt, date: (data.published_at || data.created_at || '').slice(0, 10), body: bodyToBlocks(data.body || '') };
  } catch { return undefined; }
}

export async function getPublishedLegalQuotes(): Promise<LegalQuote[]> {
  const client = getCmsClient();
  if (!client) return [];
  try {
    const { data, error } = await client.from('legal_quotes').select('quote,source,citation,note').eq('is_published', true).order('sort_order', { ascending: true });
    if (error || !data) return [];
    return data;
  } catch { return []; }
}


export async function getSiteContent<T extends object>(contentKey: string): Promise<Partial<T> | null> {
  const client = getCmsClient();
  if (!client) return null;
  try {
    const { data, error } = await client.from('site_content').select('content_value').eq('content_key', contentKey).maybeSingle();
    if (error || !data || !data.content_value || typeof data.content_value !== 'object' || Array.isArray(data.content_value)) return null;
    return data.content_value as Partial<T>;
  } catch { return null; }
}

export async function recordPageView(pagePath: string): Promise<void> {
  const client = getCmsClient();
  if (!client || typeof window === 'undefined') return;
  try {
    const storageKey = 'ugoo-analytics-visitor';
    let visitorId = window.sessionStorage.getItem(storageKey);
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      window.sessionStorage.setItem(storageKey, visitorId);
    }
    const referrer = document.referrer ? new URL(document.referrer).origin : '';
    await client.from('analytics_events').insert({
      visitor_id: visitorId,
      page_path: pagePath.slice(0, 500),
      referrer: referrer.slice(0, 2000),
    });
  } catch { /* Analytics must never interrupt public page rendering. */ }
}
