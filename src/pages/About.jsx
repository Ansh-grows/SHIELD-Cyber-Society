import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Compass, Award, CheckCircle2, FileText, Lock, Users, School } from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import IconPill from '../components/IconPill';
import NetworkBackground from '../components/NetworkBackground';

export default function About() {
  const values = [
    {
      title: 'Integrity First',
      desc: 'Security research must always serve the public good. We hold every member accountable to white-hat ethics and responsible disclosure.',
      icon: Lock
    },
    {
      title: 'Peer-to-Peer Mentorship',
      desc: 'Seniors and domain leads actively guide beginners through guided workshops, code reviews, and structured roadmaps.',
      icon: Users
    },
    {
      title: 'Hands-on Pragmatism',
      desc: 'We place real terminal sessions, capture-the-flag problem solving, and tool building above passive lecture learning.',
      icon: Target
    },
    {
      title: 'Continuous Innovation',
      desc: 'As adversary tactics evolve, our research spans from classical network protocols to modern LLM security and cloud defenses.',
      icon: Compass
    }
  ];

  return (
    <div className="relative">
      
      {/* 1. HERO / HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="DISCOVER OUR STORY" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            About SHIELD Cyber Society
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-accent-blue font-semibold max-w-3xl mx-auto mb-4">
            Society for Hacking Intelligence and Ethical Learning and Defense
          </p>
          <p className="text-base text-shield-mutedText max-w-2xl mx-auto leading-relaxed">
            The premier cybersecurity society of National Institute of Technology Hamirpur, dedicated to cultivating skilled, ethically driven defenders of the digital realm.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE, MISSION & VISION */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-shield-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-6">
                <School className="w-6 h-6 text-shield-gold" />
              </div>
              <div className="text-[11px] font-bold tracking-widest text-accent-blue uppercase mb-1">
                ORGANIZATION
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy-800 mb-4">
                Who We Are
              </h2>
              <p className="text-sm text-shield-mutedText leading-relaxed">
                SHIELD is a cybersecurity society of NIT Hamirpur focused on cybersecurity education, ethical hacking, security research, practical projects, CTFs, workshops, and collaboration. We bring together students from all disciplines who share a hunger to understand how computer systems work, how they can be exploited, and how to defend them against modern threats.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-accent-blue/30 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold tracking-widest text-shield-gold uppercase mb-1">
                OUR PURPOSE
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy-800 mb-4">
                Our Mission
              </h2>
              <p className="text-sm text-shield-mutedText leading-relaxed">
                To create a community where students can learn cybersecurity, experiment ethically, build security-focused solutions, and develop skills to defend digital systems. We strive to demystify complex security concepts through structured hands-on wargames and open-source contributions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-shield-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-1">
                THE FUTURE
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy-800 mb-4">
                Our Vision
              </h2>
              <p className="text-sm text-shield-mutedText leading-relaxed">
                Building technically skilled and ethically responsible cybersecurity professionals who excel in industry, security research, and national cyber defense frameworks while representing NIT Hamirpur on prestigious national and global platforms.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. FOUR PILLARS EXPANDED CARDS */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="THE FOUR PILLARS" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Learn · Build · Collaborate · Defend
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              The core tenets that guide every event, workshop, and research track organized under SHIELD.
            </p>
          </div>

          <IconPill variant="cards" />

        </div>
      </section>

      {/* 4. SOCIETY VALUES GRID */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="ETHOS & PRINCIPLES" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Our Guiding Values
            </h2>
            <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 mb-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-white p-6 rounded-xl border border-shield-border shadow-card">
                  <div className="w-10 h-10 rounded-lg bg-navy-800/5 text-accent-blue flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-navy-800 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. ETHICAL CHARTER */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-navy-700 shadow-xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-800 border border-shield-gold flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-shield-gold" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-shield-gold">
                  INSTITUTIONAL CODE OF ETHICS
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-3">
                  The SHIELD Ethical Hacking Pledge
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Cybersecurity tools and knowledge are potent double-edged swords. At SHIELD, we mandate that every member abides by standard ethical disclosure frameworks and national cybersecurity regulations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Authorized testing only in controlled lab sandboxes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Strict prohibition of unauthorized network probing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Responsible disclosure to affected vendors/parties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Fostering a culture of privacy protection and defense</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
