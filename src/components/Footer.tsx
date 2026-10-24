import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-gold-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold gold-gradient mb-2">
              UGOO UZOHO + COMPANY
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
              <Link to="/" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors">Home</Link>
              <a href="/#about" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors">About</a>
              <a href="/#practice-areas" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors">Practice Areas</a>
              <Link to="/gallery" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors">Gallery</Link>
              <a href="/#contact" className="block text-gray-400 hover:text-gold-400 text-sm transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>No. 244 Old Aba Road (Town Hall),</p>
              <p>Oyigbo, Port Harcourt,</p>
              <p>Rivers State, Nigeria</p>
              <p className="pt-2">
                <a href="mailto:info@ugoouzoho.com.ng" className="hover:text-gold-400 transition-colors">
                  info@ugoouzoho.com.ng
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
        <div className="mt-12 pt-8 border-t border-gold-800/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} UGOO UZOHO + COMPANY. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Barristers and Solicitors | Est. 1993
          </p>
        </div>
      </div>
    </footer>
  );
}
