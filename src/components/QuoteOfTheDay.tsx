import { quotes } from '../content/quotes';

export default function QuoteOfTheDay() {
  // Rotate one quote per calendar day so the homepage is never static
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const quote = quotes[dayOfYear % quotes.length];

  if (!quote) return null;

  return (
    <section id="quote-of-the-day" className="relative py-16 sm:py-20 bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#111111] rounded-2xl border border-gold-800/20 p-6 sm:p-10 overflow-hidden">
          {/* Decorative quote mark */}
          <span className="absolute -top-6 -left-2 font-playfair text-[120px] sm:text-[160px] leading-none text-gold-500/10 select-none pointer-events-none">
            &ldquo;
          </span>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Label */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-6">
            <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse" />
            <span className="text-xs text-gold-400 tracking-wider uppercase">Legal Quote of the Day</span>
          </div>

          {/* Quote */}
          <blockquote className="relative z-10">
            <p className="font-playfair text-lg sm:text-2xl text-gray-100 leading-relaxed mb-6">
              &ldquo;{quote.quote}&rdquo;
            </p>
            <footer>
              <p className="text-gold-400 font-semibold text-sm sm:text-base">{quote.source}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{quote.citation}</p>
              {quote.note && (
                <p className="text-gray-600 text-xs sm:text-sm mt-2">{quote.note}</p>
              )}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
