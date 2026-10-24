import { useState } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  "https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/1ed1e5f0-6c25-4153-b438-2ea6fcee624c.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/985c8681-04c3-4353-afab-e9432e731483.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/b7100f93-fb75-4d12-87e2-6f301ae07931.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/c8914bc6-aa4c-4083-9674-66891f500168.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/45cd810b-e7c5-4ba3-bf0d-0e3db01cd295.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/dab0e5ea-2674-4dfd-9640-2addcb08f34c.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/064c413a-557b-4c9b-9540-d6e731eb6137.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/bd50d0a4-3912-41c7-9380-0d17b634e60a.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/4978de45-955e-4321-a40f-7ce932ac6629.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/190b557d-225c-4017-b2ec-7d4817970c77.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/10a83f3c-fecd-42e9-aea4-ffce22541fcd.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/4918eecd-c375-47da-b990-3af0adc274c5.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/61a658fd-3f6a-4e51-9432-3d8123c9a664.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/0de80129-3182-45cd-bff6-52b935f7654f.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/81364f6e-1155-42ab-bb2a-f88384a58ace.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/b0fad9c0-f8ff-4375-9c86-f38a787aa615.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/19b1b17b-1d51-4596-b71b-402359f01108.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/501425bd-dfb6-4a58-8571-6b61b02cd93f.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/b637f07b-6045-42cf-ae44-550443634895.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/86106bc1-4f77-4825-b01b-66a1e5d9b935.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/bd7e31d5-418c-4117-bbb0-59c90610750d.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/d15ed220-4065-4935-b429-5688b3f9a002.jpg",
  "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/bcf1bbe4-dd14-4575-96fc-e4bb24e366b1.jpg",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-xs text-gold-400 tracking-wider uppercase">Our Gallery</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient mb-4">
            Gallery
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into our firm, our work, and the moments that define our practice.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="masonry-grid">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="masonry-item cursor-pointer group gpu-accelerated"
              onClick={() => openLightbox(index)}
            >
              <div className="relative rounded-lg overflow-hidden border border-gold-800/20 hover:border-gold-500/40 transition-all duration-300">
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay" onClick={closeLightbox}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-gold-400 transition-colors p-2 touch-target"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-10 text-white/80 hover:text-gold-400 transition-colors p-3 bg-black/50 rounded-full touch-target"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-10 text-white/80 hover:text-gold-400 transition-colors p-3 bg-black/50 rounded-full touch-target"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg gpu-accelerated"
              decoding="async"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
              <span className="text-white text-sm">{lightboxIndex + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition-all duration-200 touch-target"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
