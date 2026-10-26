import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-gold-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-playfair text-lg sm:text-xl font-bold gold-gradient mb-2">
              UGOO UZOHO & COMPANY
            </h3>
            <p className="text-gold-400 text-xs tracking-widest uppercase mb-4">
              Barristers and Solicitors
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Trusted legal excellence delivered with integrity. Operating in Oyigbo, Port Harcourt, and all over Nigeria since 1993.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors py-1 touch-target flex items-center">Home</Link>
              <a href="/#about" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors py-1 touch-target flex items-center">About</a>
              <a href="/#practice-areas" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors py-1 touch-target flex items-center">Practice Areas</a>
              <Link to="/gallery" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors py-1 touch-target flex items-center">Gallery</Link>
              <a href="/#contact" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors py-1 touch-target flex items-center">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>No. 244 Old Aba Road (Opp. Town Hall),</p>
              <p>Oyigbo, Port Harcourt,</p>
              <p>Rivers State, Nigeria</p>
              <p className="pt-2">
                <a href="mailto:ugooouzoho@gmail.com" className="hover:text-gold-400 transition-colors">
                  ugooouzoho@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+2348033041489" className="hover:text-gold-400 transition-colors">
                  +234 803 304 1489
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-gold-800/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} UGOO UZOHO & COMPANY. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Barristers and Solicitors | Est. 1993
          </p>
          <a
            href="https://wa.me/2347084547988?text=Hello%20Vector%20Codes%2C%20I%20saw%20your%20work%20on%20the%20UGOO%20UZOHO%20%26%20COMPANY%20website.%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition-all duration-200 touch-target"
            title="Chat with Vector Codes on WhatsApp"
          >
            <span className="text-gray-400 text-xs">Made by <span className="text-gold-400 font-semibold">Vector Codes</span></span>
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
