import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function getVisitorId() {
  const key = 'ugoo_analytics_session';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!supabase || location.pathname.startsWith('/admin')) return;

    let referrer = '';
    try {
      if (document.referrer) {
        const url = new URL(document.referrer);
        referrer = url.origin + url.pathname;
      }
    } catch {
      referrer = '';
    }

    supabase.from('analytics_events').insert({
      visitor_id: getVisitorId(),
      page_path: location.pathname,
      referrer,
    }).then(({ error }) => {
      if (error && import.meta.env.DEV) console.warn('Analytics event was not recorded:', error.message);
    });
  }, [location.pathname]);

  return null;
}
