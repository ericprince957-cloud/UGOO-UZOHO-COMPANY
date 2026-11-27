import type { Metadata } from 'next';
import Gallery from '@/pages/Gallery';
export const metadata: Metadata = { title: 'Gallery', description: 'A glimpse into UGOO UZOHO & COMPANY, our firm and our work.' };
export default function GalleryRoute() { return <Gallery/>; }
