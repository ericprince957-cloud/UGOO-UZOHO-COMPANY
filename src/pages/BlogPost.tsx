import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostBySlug } from '../content/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) document.title = `${post.title} | UGOO UZOHO & COMPANY`;
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-playfair text-2xl sm:text-3xl font-bold gold-gradient mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you are looking for does not exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition-all duration-200 touch-target"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link to="/blog" className="text-gold-400 text-sm inline-flex items-center hover:text-gold-300 transition-colors mb-8 touch-target">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Insights
        </Link>

        {/* Article Header */}
        <time className="block text-gold-400 text-xs tracking-wider uppercase mb-3">{post.date}</time>
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8 pb-8 border-b border-gold-800/20">
          {post.excerpt}
        </p>

        {/* Article Body — semantic h2/h3/p/list markup */}
        <div className="space-y-6">
          {post.body.map((block, i) => {
            switch (block.type) {
              case 'h2':
                return (
                  <h2 key={i} className="font-playfair text-2xl sm:text-3xl font-bold text-gold-400 pt-4">
                    {block.text}
                  </h2>
                );
              case 'h3':
                return (
                  <h3 key={i} className="font-playfair text-xl font-bold text-gold-300 pt-2">
                    {block.text}
                  </h3>
                );
              case 'list':
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-gray-300 leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {block.text}
                  </p>
                );
            }
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-gold-800/20 text-center">
          <p className="text-gray-400 mb-6">Need advice on this or any other legal matter?</p>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold text-sm rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-200 touch-target"
          >
            Contact the Firm
          </a>
        </div>
      </article>
    </div>
  );
}
