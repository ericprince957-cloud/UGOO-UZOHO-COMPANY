export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28 bg-[#0a0a0a]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative gpu-accelerated">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/5">
              <img
                src="https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/2d0050d2-844e-433f-a78b-05f69bc01b32.jpg"
                alt="Ugochukwu Emeka Uzoho - Barrister and Solicitor"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-gold-500/40 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-gold-500/40 rounded-br-lg" />
          </div>

          {/* Bio Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
              <span className="text-xs text-gold-400 tracking-wider uppercase">About The Principal</span>
            </div>
            
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white mb-2">
              Ugochukwu Emeka Uzoho
            </h2>
            <p className="text-gold-400 text-sm mb-2 italic">(aka ugoo uzoho)</p>
            <p className="text-gold-300 text-sm font-medium mb-6 border-l-2 border-gold-500 pl-3">
              Called to Nigerian Bar in December 1993. Active and uninterrupted Law Practice since.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              At UGOO UZOHO + COMPANY, our mission is to provide trusted, comprehensive legal services that protect our clients' interests and uphold the highest standards of professional ethics. With over three decades of active practice, we bring unmatched experience and dedication to every matter we handle.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
              We are committed to delivering justice with integrity, ensuring that every client receives personalized attention and strategic legal counsel tailored to their unique needs.
            </p>

            {/* Metrics */}
            <div className="bg-[#111111] rounded-xl p-5 sm:p-6 border border-gold-800/20">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gold-400 font-semibold text-sm">Trusted Track Record</p>
                  <p className="text-gray-400 text-sm mt-1">Numerous diverse cases handled across jurisdictions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
