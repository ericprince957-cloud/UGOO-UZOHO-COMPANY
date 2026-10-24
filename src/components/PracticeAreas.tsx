import { useState } from 'react';

const practiceAreas = [
  "Company And Corporate Matters",
  "Civil Litigations And Criminal Actions",
  "Labour And Trade Dispute Matters",
  "Human Resource Development",
  "Pleadings Work",
  "Contract Drafting (Conveyances, Leases, Sales And Hire Agreements)",
  "Affidavits",
  "Demands And Collection Letters",
  "Contract Review",
  "Credit And Collection Management",
  "Land Dispute Management",
  "Human Rights Defense And Enforcement",
  "Business Negotiations",
  "Real Estate And Management Of Properties",
  "Crisis Management",
  "Legal Research",
  "Negotiations, Mediation And Lobbying",
  "Appellate Actions",
  "Incorporation (Companies, Associations, Clubs, Churches And Foundations)",
  "Updates On New Laws, Circulars, And Advisories Affecting The Business",
  "Legal Opinions",
  "Executive Errands",
];

export default function PracticeAreas() {
  const [showAll, setShowAll] = useState(false);
  const displayedAreas = showAll ? practiceAreas : practiceAreas.slice(0, 12);

  return (
    <section id="practice-areas" className="relative py-20 sm:py-28 bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-xs text-gold-400 tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient mb-4">
            Practice Areas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal services across all major practice areas, backed by decades of experience and an unwavering commitment to our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-[#111111] rounded-xl p-5 border border-gold-800/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 hover:-translate-y-1 gpu-accelerated"
            >
              <div className="flex items-start">
                <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-gold-400 font-playfair text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-200 group-hover:text-gold-400 transition-colors leading-snug">
                  {area}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && practiceAreas.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition-all duration-200 touch-target"
            >
              <span>Show All {practiceAreas.length} Practice Areas</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
