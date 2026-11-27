'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { recordClick, recordPageView } from '@/lib/cms';
export default function AnalyticsTracker() {
 const pathname = usePathname();
 useEffect(() => { void recordPageView(pathname || '/'); }, [pathname]);
 useEffect(() => {
  const handleClick = (event: MouseEvent) => {
   const target = event.target;
   if (!(target instanceof Element)) return;
   const clickable = target.closest('a, button, [role="button"]');
   if (!clickable) return;
   const elementText = (clickable.textContent || clickable.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 300);
   const elementHref = clickable instanceof HTMLAnchorElement ? clickable.href : '';
   void recordClick(pathname || '/', elementText, elementHref);
  };
  document.addEventListener('click', handleClick, true);
  return () => document.removeEventListener('click', handleClick, true);
 }, [pathname]);
 return <Analytics/>;
}
