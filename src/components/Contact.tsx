export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-28 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-xs text-gold-400 tracking-wider uppercase">Visit Our Office</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient mb-4">
            CONTACT AND LOCATION
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Should you decide to discuss your legal and other needs with us? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div className="bg-[#111111] rounded-xl p-5 sm:p-6 border border-gold-800/20">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-gold-400 font-semibold mb-1 text-sm sm:text-base">Office Address</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    No. 244 Old Aba Road (Opp. Town Hall), Oyigbo, Port Harcourt, Rivers State, Nigeria.
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#111111] rounded-xl p-5 sm:p-6 border border-gold-800/20">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-gold-400 font-semibold mb-1 text-sm sm:text-base">Email</h3>
                  <a href="mailto:ugooouzoho@gmail.com" className="text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base">
                    ugooouzoho@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="bg-[#111111] rounded-xl p-5 sm:p-6 border border-gold-800/20">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-gold-400 font-semibold mb-1 text-sm sm:text-base">Phone / WhatsApp</h3>
                  <a href="tel:+2348033041489" className="text-gray-300 hover:text-gold-400 transition-colors block text-sm sm:text-base">
                    +234 803 304 1489
                  </a>
                  <a
                    href="https://wa.me/2348033041489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm mt-1 inline-flex items-center transition-colors touch-target"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#111111] rounded-xl p-5 sm:p-6 border border-gold-800/20">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-gold-400 font-semibold mb-1 text-sm sm:text-base">Office Hours</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-300 text-sm sm:text-base">Saturday: By Appointment</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative gpu-accelerated">
            <div className="bg-[#111111] rounded-xl overflow-hidden border border-gold-800/20 h-full min-h-[300px] sm:min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=V4FQ%2BMRP%2C%20Port%20Harcourt%20-%20Aba%20Old%20Rd%2C%20Oyigbo%2C%20Rivers%20State&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UGOO UZOHO & COMPANY Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* QR Code — links to office location on Google Maps */}
            <a
              href="https://maps.app.goo.gl/SNV5vJs5NsnXh3Vg8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 flex items-center bg-[#111111]/95 border border-gold-500/30 rounded-lg px-3 py-2 shadow-lg hover:border-gold-400 transition-colors touch-target"
              title="Scan to open our office location in Google Maps"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fmaps.app.goo.gl%2FSNV5vJs5NsnXh3Vg8"
                alt="QR code — office location on Google Maps"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="rounded"
              />
              <span className="ml-3 text-[11px] leading-tight text-gray-300">
                Scan to find us
                <span className="block text-gold-400 font-semibold">on Google Maps</span>
              </span>
            </a>
            <a
              href="https://maps.app.goo.gl/SNV5vJs5NsnXh3Vg8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 bg-gold-500 text-black font-semibold text-sm rounded-lg hover:bg-gold-400 transition-colors shadow-lg touch-target"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
