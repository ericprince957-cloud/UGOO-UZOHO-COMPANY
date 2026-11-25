import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Contact from './components/Contact';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageViewTracker from './components/PageViewTracker';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const Admin = lazy(() => import('./pages/Admin'));

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

function PublicLayout() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <Analytics />
      <PageViewTracker />
      <Routes>
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#080808] text-gold-400 flex items-center justify-center">Loading secure dashboard…</div>}>
              <Admin />
            </Suspense>
          }
        />
        <Route path="*" element={<PublicLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
