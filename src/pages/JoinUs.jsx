import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ExternalLink, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight,
  Award,
  Terminal
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import { FAQ_DATA } from '../data/faqData';

export default function JoinUs() {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    email: '',
    branchYear: 'B.Tech CSE - 1st Year',
    domainInterest: 'Web Application Security',
    priorExperience: 'Beginner (Eager to learn)',
    motivation: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whoCanJoinList = [
    'Students interested in cybersecurity and ethical hacking',
    'Beginners welcome — no prerequisite hacking experience required',
    'Developers interested in building secure software and APIs',
    'Students excited about competitive CTFs, wargames, and security research'
  ];

  const exploreDomains = [
    'Web Security',
    'Network Security',
    'Offensive Security',
    'Defensive Security',
    'Cryptography',
    'Cloud Security',
    'Digital Forensics',
    'AI Security'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="STUDENT RECRUITMENT 2026" center={true} />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            Interested in Cybersecurity?
          </h1>
          
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg sm:text-xl font-medium text-navy-700 max-w-2xl mx-auto leading-relaxed mb-4">
            "You don't need to know everything before joining. Learn with us, build with us and contribute to a safer digital world."
          </p>

          <p className="text-xs uppercase font-bold tracking-widest text-shield-gold">
            People · Ideas · A Safer Digital World
          </p>
        </div>
      </section>

      {/* 2. RECRUITMENT CORE INFO (Who can join & Domains) */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Who Can Join + Domains You Can Explore */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Who Can Join Block */}
              <div className="bg-white rounded-2xl p-8 border border-shield-border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-shield-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-shield-gold">
                      ELIGIBILITY CRITERIA
                    </span>
                    <h2 className="text-2xl font-bold font-heading text-navy-800">
                      Who Can Join?
                    </h2>
                  </div>
                </div>

                <div className="space-y-3.5 mt-6">
                  {whoCanJoinList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-shield-darkText">
                      <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-shield-bgLight border border-shield-border">
                  <p className="text-xs text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800">Note:</strong> All years (1st, 2nd, 3rd, and 4th) and all departments (CSE, ECE, EE, Mech, Civil, Architecture, Chemical, Material Science) are warmly encouraged to apply.
                  </p>
                </div>
              </div>

              {/* Domains You Can Explore */}
              <div className="bg-white rounded-2xl p-8 border border-shield-border shadow-card">
                <div className="text-[10px] font-bold uppercase tracking-widest text-shield-gold mb-1">
                  SPECIALIZATION PATHWAYS
                </div>
                <h3 className="text-xl font-bold font-heading text-navy-800 mb-4">
                  Domains You Can Explore
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {exploreDomains.map((dom) => (
                    <span
                      key={dom}
                      className="px-3.5 py-1.5 rounded-lg bg-navy-800/5 hover:bg-navy-800 hover:text-white transition-colors text-xs font-semibold text-navy-800 border border-shield-border cursor-default"
                    >
                      {dom}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Application Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border-2 border-accent-blue/30 shadow-card-hover relative">
                
                <div className="flex items-center justify-between border-b border-shield-border pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">
                      OFFICIAL APPLICATION FORM
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-navy-800">
                      Apply / Join SHIELD
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Cycle 2026 Open
                  </span>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-heading text-navy-800">
                      Application Submitted Successfully!
                    </h4>
                    <p className="text-sm text-shield-mutedText leading-relaxed">
                      Thank you for applying, <strong className="text-navy-800">{formData.fullName}</strong>. Our student coordinators will reach out via <strong className="text-navy-800">{formData.email}</strong> with your orientation invite and workshop lab credentials.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            fullName: '',
                            rollNo: '',
                            email: '',
                            branchYear: 'B.Tech CSE - 1st Year',
                            domainInterest: 'Web Application Security',
                            priorExperience: 'Beginner (Eager to learn)',
                            motivation: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded-full bg-navy-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-900 transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Rohit Kumar"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                          Roll Number *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.rollNo}
                          onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                          placeholder="e.g., 24BCSE042"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                          College Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rollno@nith.ac.in"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                          Branch & Year
                        </label>
                        <select
                          value={formData.branchYear}
                          onChange={(e) => setFormData({ ...formData, branchYear: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        >
                          <option>B.Tech CSE - 1st Year</option>
                          <option>B.Tech ECE - 1st Year</option>
                          <option>B.Tech Other - 1st Year</option>
                          <option>B.Tech CSE - 2nd Year</option>
                          <option>B.Tech Other - 2nd Year</option>
                          <option>B.Tech Pre-Final Year (3rd Year)</option>
                          <option>B.Tech Final Year (4th Year)</option>
                          <option>Dual Degree / M.Tech</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                        Primary Domain of Interest
                      </label>
                      <select
                        value={formData.domainInterest}
                        onChange={(e) => setFormData({ ...formData, domainInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      >
                        {exploreDomains.map(d => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                        Prior Experience
                      </label>
                      <select
                        value={formData.priorExperience}
                        onChange={(e) => setFormData({ ...formData, priorExperience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      >
                        <option>Complete Beginner (Curious & enthusiastic)</option>
                        <option>Novice (Basic Linux/Python/Networking)</option>
                        <option>Intermediate (Played picoCTF/OverTheWire)</option>
                        <option>Experienced (Active CTF player / Bug hunter)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-1">
                        Why do you want to join SHIELD? *
                      </label>
                      <textarea
                        required
                        rows="3"
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        placeholder="Tell us what excites you about cybersecurity or digital defense..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-shield-border text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5 text-shield-gold" />
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent-blue hover:text-navy-900 transition-colors underline"
                      >
                        <span>Or apply via official Google Form</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. RECRUITMENT FAQ ACCORDION */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Recruitment FAQs
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Everything you need to know about joining SHIELD as a fresher or lateral entrant.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-shield-bgLight rounded-xl border border-shield-border overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-heading font-bold text-navy-800 text-sm sm:text-base hover:text-accent-blue transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-accent-blue transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-shield-mutedText leading-relaxed border-t border-shield-border/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
