import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Terminal, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Milestone,
  HelpCircle,
  Compass
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import { RESOURCE_CATEGORIES, ROADMAP_STEPS } from '../data/resourcesData';

export default function Resources() {
  return (
    <div className="relative">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="LEARNING PATHWAYS" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            Curated Cybersecurity Resources
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-shield-mutedText max-w-2xl mx-auto leading-relaxed">
            A battle-tested curriculum designed by SHIELD mentors to guide students from their first Linux terminal command to competitive CTFs.
          </p>
        </div>
      </section>

      {/* 2. THREE-COLUMN SECTION: BEGINNER, INTERMEDIATE, PRACTICE */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESOURCE_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-shield-border shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="border-b border-shield-border pb-5 mb-6">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border inline-block mb-3 ${cat.badgeColor}`}>
                      {cat.levelBadge}
                    </span>
                    <h2 className="text-2xl font-bold font-heading text-navy-800 tracking-tight mb-2">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Resource Cards */}
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-xl bg-shield-bgLight/70 border border-shield-border/70 hover:border-accent-blue/40 transition-colors"
                      >
                        <h4 className="text-sm font-bold font-heading text-navy-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-shield-mutedText leading-relaxed mb-3">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.topics.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 rounded bg-white text-navy-800 font-medium border border-shield-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="text-[11px] font-bold text-accent-blue flex items-center gap-1">
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-shield-border text-center">
                  <a
                    href="/join"
                    className="text-xs font-bold text-navy-800 hover:text-accent-blue uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Request Mentor Lab Access</span>
                    <ArrowRight className="w-3.5 h-3.5 text-shield-gold" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HORIZONTAL ROADMAP GRAPHIC */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="LEARNER JOURNEY" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              The SHIELD Cyber Roadmap
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Follow this progression from foundational concepts to specialized domain mastery.
            </p>
          </div>

          {/* Desktop Horizontal Progression */}
          <div className="hidden lg:block relative mb-12">
            {/* Connecting line */}
            <div className="absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-navy-800 via-accent-blue to-emerald-500 rounded-full z-0" />

            <div className="grid grid-cols-7 gap-3 relative z-10">
              {ROADMAP_STEPS.map((item, idx) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  {/* Step bubble */}
                  <div className="w-10 h-10 rounded-full bg-navy-800 border-4 border-white shadow-md text-white flex items-center justify-center font-heading font-black text-xs mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xs font-bold font-heading text-navy-800 uppercase tracking-tight mb-1 h-8 flex items-center justify-center">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-shield-mutedText leading-snug mb-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-shield-bgLight text-gray-600 border border-shield-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Progression */}
          <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-accent-blue ml-4">
            {ROADMAP_STEPS.map((item) => (
              <div key={item.step} className="relative">
                <span className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-navy-800 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  {item.step}
                </span>
                <div className="bg-shield-bgLight p-4 rounded-xl border border-shield-border">
                  <h4 className="text-sm font-bold font-heading text-navy-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-shield-mutedText mb-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white text-navy-800 border border-shield-border font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LAB ACCESS BANNER */}
      <section className="py-14 bg-shield-bgLight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mx-auto mb-4 border border-accent-blue/20">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-navy-800 mb-2">
            Need Guidance on Choosing Your Track?
          </h3>
          <p className="text-sm text-shield-mutedText max-w-xl mx-auto mb-6">
            Attend our weekly Friday Open Hours at the NIT Hamirpur Computer Centre to test wargame machines and discuss personalized pathways with domain leads.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Connect with Mentors</span>
            <ArrowRight className="w-4 h-4 text-shield-gold" />
          </a>
        </div>
      </section>

    </div>
  );
}
