import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Globe2, 
  Cpu, 
  Users, 
  Lock,
  School,
  Target,
  Compass
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import IconPill from '../components/IconPill';
import NetworkBackground from '../components/NetworkBackground';

export default function Home() {
  const whatWeDoCards = [
    {
      icon: Globe2,
      title: '8 Specialized Domains',
      desc: 'From Web & Cloud to AI Security and Digital Forensics, build comprehensive expertise across modern security disciplines.',
      link: '/domains',
      linkText: 'Explore All Domains'
    },
    {
      icon: Terminal,
      title: 'Practical CTFs & Workshops',
      desc: 'Get hands-on in sandboxed environments, solve real-world vulnerabilities, and participate in collegiate cybersecurity leagues.',
      link: '/activities',
      linkText: 'View Activities'
    },
    {
      icon: Cpu,
      title: 'Real-World Tool Development',
      desc: 'Build open-source security tools, detection daemons, and defensive scripts that solve real engineering challenges.',
      link: '/projects',
      linkText: 'Discover Projects'
    },
    {
      icon: Users,
      title: 'Recruitment & Community',
      desc: 'Join a tight-knit community of curious technologists, ethical hackers, and defensive engineers at NIT Hamirpur.',
      link: '/join',
      linkText: 'Join the Society'
    }
  ];



  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Poster Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <span className="w-6 h-[2px] bg-shield-gold inline-block"></span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-accent-blue font-heading">
                NIT HAMIRPUR · SHIELD CYBER SOCIETY
              </span>
              <span className="w-6 h-[2px] bg-shield-gold inline-block"></span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tighter text-navy-800 leading-[1.08] mb-4"
            >
              SHIELD <span className="text-accent-blue">CYBER</span> SOCIETY
            </motion.h1>

            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-navy-800/5 border border-navy-800/10 mb-6"
            >
              <p className="text-sm sm:text-base font-semibold text-navy-700 tracking-wide">
                Society for Hacking Intelligence and Ethical Learning and Defense
              </p>
            </motion.div>

            {/* Poster Sub-line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm uppercase tracking-widest font-bold text-shield-gold mb-5"
            >
              People · Ideas · A Safer Digital World
            </motion.div>

            {/* Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-shield-mutedText leading-relaxed max-w-2xl mx-auto mb-10"
            >
              A cybersecurity community at NIT Hamirpur focused on learning, ethical security research, practical problem solving and building a safer digital world.
            </motion.p>

            {/* Two CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/join"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Join the Society</span>
                <ArrowRight className="w-4 h-4 text-shield-gold" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-shield-bgLight text-navy-800 border-2 border-navy-800 font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Explore SHIELD</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FOUR-ICON ROW DIRECTLY BELOW HERO */}
      <section className="relative -mt-8 sm:-mt-10 z-20 px-4 sm:px-6 lg:px-8">
        <IconPill variant="row" />
      </section>

      {/* 3. WHO WE ARE, MISSION & VISION */}
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

      {/* 4. WHAT WE DO PREVIEW STRIP */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="CORE MISSION" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              What We Do at SHIELD
            </h2>
            <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Bridging academic concepts with industrial cyber defense through continuous hands-on practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-shield-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-navy-800/5 text-navy-800 group-hover:bg-accent-blue group-hover:text-white transition-colors flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-navy-800 mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-shield-mutedText leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:text-navy-800 transition-colors uppercase tracking-wider"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. ETHICAL SECURITY COMMITMENT BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-shield-gold/10 text-shield-gold flex items-center justify-center mx-auto mb-4 border border-shield-gold/30">
            <Lock className="w-6 h-6 text-navy-800" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-800 mb-2">
            Committed to Ethical Practice & Responsible Research
          </h3>
          <p className="text-sm text-shield-mutedText leading-relaxed max-w-2xl mx-auto mb-6">
            At SHIELD, every member adheres strictly to ethical disclosure guidelines, institutional governance, and authorized educational environments. We cultivate the mindset of true defenders.
          </p>
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-accent-blue">
            <span>Learn</span>
            <span>·</span>
            <span>Build</span>
            <span>·</span>
            <span>Collaborate</span>
            <span>·</span>
            <span>Defend</span>
          </div>
        </div>
      </section>

    </div>
  );
}
