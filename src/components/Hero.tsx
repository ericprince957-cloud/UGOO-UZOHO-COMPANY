import { useState } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-700/10 rounded-full blur-3xl" />
        </div>
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up gpu-accelerated">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse" />
              <span className="text-xs sm:text-sm text-gold-400 tracking-wider uppercase">
                Since 1993 — Trusted Legal Practice
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="gold-gradient">Trusted Legal Excellence.</span>
              <br />
              <span className="text-white">Justice Service Delivered</span>
              <br />
              <span className="text-gray-300">with Integrity.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Operating in Oyigbo, Port Harcourt, and indeed all over Nigeria... providing trusted legal services and representation since 1993.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-base sm:text-lg rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-200 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 touch-target gpu-accelerated"
            >
              <span>Set Up NDA Meeting</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs text-gold-400/60 tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </section>

      {/* NDA Modal */}
      {showModal && <NDAModal onClose={() => setShowModal(false)} />}
    </>
  );
}

function NDAModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lightbox-overlay" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#111111] border border-gold-500/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-gold-500/10 max-h-[90vh] overflow-y-auto gpu-accelerated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold-400 transition-colors touch-target"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-playfair text-2xl font-bold gold-gradient mb-2">Set Up NDA Meeting</h2>
        <p className="text-gray-400 text-sm mb-6">Choose your preferred method to schedule a confidential consultation.</p>

        <div className="space-y-4">
          {/* QR Code Option */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 sm:p-6 border border-gold-800/20">
            <h3 className="font-semibold text-gold-400 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              Scan QR Code
            </h3>
            <div className="flex flex-col items-center">
              <img
                src="https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/5ae59eba-7b3e-49c5-b5b0-e9382930a395.jpg"
                alt="QR Code for NDA Meeting"
                className="w-44 h-44 sm:w-48 sm:h-48 rounded-lg border border-gold-500/20 object-cover"
                loading="lazy"
                decoding="async"
              />
              <a
                href="https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/5ae59eba-7b3e-49c5-b5b0-e9382930a395.jpg"
                download="nda-meeting-qr.jpg"
                className="mt-3 text-xs text-gold-400 hover:text-gold-300 underline flex items-center touch-target"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download QR Code
              </a>
            </div>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 sm:p-6 border border-gold-800/20">
            <h3 className="font-semibold text-gold-400 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </h3>
            <p className="text-gray-400 text-sm mb-4">Chat directly with us on WhatsApp to schedule your NDA meeting.</p>
            <a
              href="https://wa.me/2348033041489?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20NDA%20meeting%20to%20discuss%20my%20legal%20needs.%20Please%20let%20me%20know%20your%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors duration-200 touch-target"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
