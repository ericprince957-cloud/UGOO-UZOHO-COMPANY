import { useState } from 'react';

const practiceAreas = [
  { title: "Company And Corporate Matters", icon: "🏢" },
  { title: "Civil Litigations And Criminal Actions", icon: "⚖️" },
  { title: "Labour And Trade Dispute Matters", icon: "🤝" },
  { title: "Human Resource Development", icon: "👥" },
  { title: "Pleadings Work", icon: "📋" },
  { title: "Contract Drafting (Conveyances, Leases, Sales And Hire Agreements)", icon: "📝" },
  { title: "Affidavits", icon: "📄" },
  { title: "Demands And Collection Letters", icon: "✉️" },
  { title: "Contract Review", icon: "🔍" },
  { title: "Credit And Collection Management", icon: "💰" },
  { title: "Land Dispute Management", icon: "🏠" },
  { title: "Human Rights Defense And Enforcement", icon: "🛡️" },
  { title: "Business Negotiations", icon: "💼" },
  { title: "Real Estate And Management Of Properties", icon: "🏗️" },
  { title: "Crisis Management", icon: "🚨" },
  { title: "Legal Research", icon: "📚" },
  { title: "Negotiations, Mediation And Lobbying", icon: "🗣️" },
  { title: "Appellate Actions", icon: "📜" },
  { title: "Incorporation (Companies, Associations, Clubs, Churches And Foundations)", icon: "🏛️" },
  { title: "Updates On New Laws, Circulars, And Advisories Affecting The Business", icon: "📢" },
  { title: "Legal Opinions", icon: "💡" },
  { title: "Executive Errands", icon: "🎯" },
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
              className="group bg-[#111111] rounded-xl p-5 border border-gold-800/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">{area.icon}</div>
              <h3 className="text-sm font-medium text-gray-200 group-hover:text-gold-400 transition-colors leading-snug">
                {area.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && practiceAreas.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/10 transition-all duration-200"
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
