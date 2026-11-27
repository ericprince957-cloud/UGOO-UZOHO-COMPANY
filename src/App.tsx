import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { recordClick, recordPageView } from './lib/cms';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Contact from './components/Contact';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <QuoteOfTheDay />
      <Contact />
    </>
  );
}

function PageViewTracker() {
  const location = useLocation();
  useEffect(() => { void recordPageView(location.pathname); }, [location.pathname]);
  return null;
}

function ClickTracker() {
  const location = useLocation();
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const clickable = target.closest('a, button, [role="button"]');
      if (!clickable) return;
      const elementText = (clickable.textContent || clickable.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 300);
      const elementHref = clickable instanceof HTMLAnchorElement ? clickable.href : '';
      void recordClick(location.pathname, elementText, elementHref);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <Analytics />
      <PageViewTracker />
      <ClickTracker />
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
