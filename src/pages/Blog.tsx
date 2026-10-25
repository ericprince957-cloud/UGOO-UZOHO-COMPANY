import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../content/posts';

export default function Blog() {
  useEffect(() => {
    document.title = 'Insights | UGOO UZOHO & COMPANY';
    return () => { document.title = 'UGOO UZOHO & COMPANY | Barristers and Solicitors - Trusted Legal Excellence in Nigeria'; };
  }, []);

  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-xs text-gold-400 tracking-wider uppercase">Insights</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient mb-4">
            Legal Insights
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Legal articles, analysis and updates from UGOO UZOHO & COMPANY.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sorted.length === 0 ? (
          /* Empty state */
          <div className="text-center py-16 sm:py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold-500/30 bg-gold-500/5 mb-6">
              <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 15a2 2 0 01-2-2V5m2 15l2-2m-2 2h-4m-4-8h.01M9 12h.01M9 16h.01M13 12h4m-4 4h4" />
              </svg>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
              Insights Coming Soon
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Our legal articles and updates are being prepared. In the meantime, we are always available
              to discuss your legal needs directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-200 touch-target"
              >
                Contact Us
              </a>
              <Link
                to="/"
                className="px-6 py-3 border border-gold-500/40 text-gold-400 font-medium text-sm rounded-lg hover:bg-gold-500/10 transition-all duration-200 touch-target"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-[#111111] rounded-xl p-6 border border-gold-800/20 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 gpu-accelerated flex flex-col"
              >
                <time className="text-gold-400 text-xs tracking-wider uppercase mb-3">{post.date}</time>
                <h2 className="font-playfair text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <span className="text-gold-400 text-sm font-medium mt-4 inline-flex items-center">
                  Read Article
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
