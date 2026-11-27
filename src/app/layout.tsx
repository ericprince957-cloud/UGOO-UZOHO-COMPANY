import type { Metadata, Viewport } from 'next';
import './globals.css';
import '../index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnalyticsTracker from '@/components/AnalyticsTracker';
export const metadata: Metadata = {
 metadataBase: new URL('https://ugoouzoho.com.ng'),
 title: { default: 'UGOO UZOHO & COMPANY | Barristers and Solicitors', template: '%s | UGOO UZOHO & COMPANY' },
 description: 'Trusted legal excellence delivered with integrity. UGOO UZOHO & COMPANY serves Oyigbo, Port Harcourt and clients across Nigeria.',
 keywords: ['law firm','barristers','solicitors','Nigeria','Port Harcourt','Oyigbo','legal services','Ugoo Uzoho'],
 alternates: { canonical: '/' },
 openGraph: { type: 'website', title: 'UGOO UZOHO & COMPANY | Barristers and Solicitors', description: 'Trusted Legal Excellence. Justice Service Delivered with Integrity.', url: 'https://ugoouzoho.com.ng', images: ['https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/0f43f163-1874-47a7-b777-212967e9c8ae.png'] },
 icons: { icon: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/0f43f163-1874-47a7-b777-212967e9c8ae.png' }
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0a0a0a' };
const legalService = { '@context': 'https://schema.org', '@type': 'LegalService', name: 'UGOO UZOHO & COMPANY', alternateName: 'Ugoo Uzoho & Company', description: 'Barristers and Solicitors. Trusted legal excellence delivered with integrity since 1993. Serving Oyigbo, Port Harcourt, and all over Nigeria.', url: 'https://ugoouzoho.com.ng', telephone: '+2348033041489', email: 'ugooouzoho@gmail.com', foundingDate: '1993', hasMap: 'https://maps.app.goo.gl/SNV5vJs5NsnXh3Vg8', address: { '@type': 'PostalAddress', streetAddress: 'No. 244 Old Aba Road (Opp. Town Hall)', addressLocality: 'Oyigbo, Port Harcourt', addressRegion: 'Rivers State', addressCountry: 'NG' }, openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' }, knowsAbout: ['Company And Corporate Matters','Civil Litigations And Criminal Actions','Labour And Trade Dispute Matters','Contract Drafting','Contract Review','Land Dispute Management','Human Rights Defense And Enforcement','Real Estate And Management Of Properties','Incorporation','Appellate Actions','Legal Opinions'] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(legalService)}}/></head><body><AnalyticsTracker/><div className="min-h-screen bg-[#0a0a0a] text-white"><Header/>{children}<Footer/><WhatsAppButton/></div></body></html>;
}
