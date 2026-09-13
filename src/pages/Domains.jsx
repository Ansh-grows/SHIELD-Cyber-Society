import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  AlertTriangle, 
  X, 
  ExternalLink, 
  Check, 
  Wrench, 
  Terminal, 
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import { DOMAINS_DATA } from '../data/domainsData';

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = DOMAINS_DATA.filter(d => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
    d.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="SPECIALIZED DISCIPLINES" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            8 Focus Domains
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-shield-mutedText max-w-2xl mx-auto leading-relaxed mb-8">
            From low-level network packet analysis and red-teaming to modern cloud infrastructure and AI defenses, our society is organized into 8 deep-dive tracks.
          </p>

          {/* Search bar for quick discovery */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search topics (e.g., XSS, SIEM, DNS, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-shield-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue shadow-sm transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy-800"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. DOMAIN CARDS GRID */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredDomains.map((domain, idx) => {
              const Icon = domain.icon;
              const isOffensive = domain.id === 'offensive-security';

              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`bg-white rounded-2xl p-7 border ${
                    isOffensive 
                      ? 'border-red-300 shadow-md ring-1 ring-red-100' 
                      : 'border-shield-border shadow-card'
                  } hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    {/* Top row: Icon + Title + Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isOffensive 
                            ? 'bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white' 
                            : 'bg-navy-800/5 text-navy-800 group-hover:bg-accent-blue group-hover:text-white'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-shield-gold">
                            TRACK 0{idx + 1}
                          </span>
                          <h3 className="text-xl font-bold font-heading text-navy-800 tracking-tight">
                            {domain.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${
                        isOffensive
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-shield-bgLight text-accent-blue border-accent-blue/20'
                      }`}>
                        {domain.badge}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-shield-mutedText leading-relaxed mb-5">
                      {domain.shortDesc}
                    </p>

                    {/* Prominent Disclaimer for Offensive Security as requested */}
                    {domain.disclaimer && (
                      <div className="mb-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-amber-900 leading-snug italic">
                          "{domain.disclaimer}"
                        </p>
                      </div>
                    )}

                    {/* Topic Tags */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                        Key Focus Areas
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2.5 py-1 rounded-md bg-shield-bgLight text-shield-darkText border border-shield-border font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-4 border-t border-shield-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-shield-mutedText">
                      <Wrench className="w-3.5 h-3.5 text-shield-gold" />
                      <span>{domain.tools.slice(0, 3).join(', ')}...</span>
                    </div>
                    <button
                      onClick={() => setSelectedDomain(domain)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue hover:text-navy-900 transition-colors uppercase tracking-wider group-hover:underline"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredDomains.length === 0 && (
            <div className="text-center py-16">
              <p className="text-base text-shield-mutedText">No domains found matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-accent-blue underline uppercase tracking-wider"
              >
                Clear Search Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. MODAL FOR EXPANDED DOMAIN DETAIL */}
      <AnimatePresence>
        {selectedDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-shield-border relative"
            >
              <button
                onClick={() => setSelectedDomain(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-shield-bgLight hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-navy-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase font-bold tracking-widest text-shield-gold">
                  Domain Overview
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue font-bold">
                  {selectedDomain.badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-800 mb-3">
                {selectedDomain.title}
              </h2>

              <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed mb-6">
                {selectedDomain.shortDesc}
              </p>

              {selectedDomain.disclaimer && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-amber-900 leading-snug">
                    {selectedDomain.disclaimer}
                  </p>
                </div>
              )}

              {/* Practical Scope */}
              <div className="mb-6 p-5 rounded-xl bg-shield-bgLight border border-shield-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-800 mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent-blue" />
                  <span>Practical Scope & Hands-on Labs</span>
                </h4>
                <p className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                  {selectedDomain.practicalScope}
                </p>
              </div>

              {/* Tools & Frameworks */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Industry Standard Tools & Utilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-navy-800 text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Syllabus / Topics */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Covered Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDomain.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-shield-darkText">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer action */}
              <div className="pt-4 border-t border-shield-border flex items-center justify-between">
                <span className="text-xs text-shield-mutedText">Interested in this domain?</span>
                <a
                  href="/join"
                  className="px-5 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Apply for this Track
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
