import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { recordPageView } from './lib/cms';
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

function PageViewTracker() {\n  const location = useLocation();\n  useEffect(() => { void recordPageView(location.pathname); }, [location.pathname]);\n  return null;\n}\n\nfunction App() {
  return (
    <Router>
      <Analytics />\n      <PageViewTracker />
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
