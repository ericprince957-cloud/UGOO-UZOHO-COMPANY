import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          if (scrolled !== scrollRef.current) {
            scrollRef.current = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 gpu-accelerated ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <Link to="/" className="flex flex-col min-w-0">
            <span className="font-playfair text-lg sm:text-xl font-bold tracking-wide gold-gradient truncate">
              UGOO UZOHO & COMPANY
            </span>
            <span className="text-[10px] text-gold-400 tracking-widest uppercase hidden sm:block">
              Barristers and Solicitors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/#practice-areas"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Practice Areas
            </a>
            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Gallery
            </Link>
            <a
              href="/#contact"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://wa.me/2348033041489?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20NDA%20meeting."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm rounded hover:from-gold-400 hover:to-gold-500 transition-all duration-200"
            >
              NDA Meeting
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold-400 p-3 touch-target"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-gold-800/30 animate-slide-up">
            <nav className="flex flex-col px-4 py-4 space-y-1">
              <Link to="/" className="text-gray-300 hover:text-gold-400 py-3 px-2 rounded-lg hover:bg-gold-500/5 transition-colors touch-target flex items-center">Home</Link>
              <a href="/#about" className="text-gray-300 hover:text-gold-400 py-3 px-2 rounded-lg hover:bg-gold-500/5 transition-colors touch-target flex items-center">About</a>
              <a href="/#practice-areas" className="text-gray-300 hover:text-gold-400 py-3 px-2 rounded-lg hover:bg-gold-500/5 transition-colors touch-target flex items-center">Practice Areas</a>
              <Link to="/gallery" className="text-gray-300 hover:text-gold-400 py-3 px-2 rounded-lg hover:bg-gold-500/5 transition-colors touch-target flex items-center">Gallery</Link>
              <a href="/#contact" className="text-gray-300 hover:text-gold-400 py-3 px-2 rounded-lg hover:bg-gold-500/5 transition-colors touch-target flex items-center">Contact</a>
              <a
                href="https://wa.me/2348033041489?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20NDA%20meeting."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm rounded-lg text-center mt-2 touch-target flex items-center justify-center"
              >
                NDA Meeting
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
