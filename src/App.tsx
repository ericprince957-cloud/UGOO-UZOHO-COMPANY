import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Contact from './components/Contact';
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
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Analytics />
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
