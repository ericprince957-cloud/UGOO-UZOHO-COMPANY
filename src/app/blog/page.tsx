import type { Metadata } from 'next';
import Blog from '@/pages/Blog';
export const metadata: Metadata = { title: 'Legal Insights', description: 'Legal articles, analysis and updates from UGOO UZOHO & COMPANY.' };
export default function BlogRoute() { return <Blog/>; }
