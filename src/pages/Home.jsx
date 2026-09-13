import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  ArrowRight, 
  Terminal, 
  Globe2, 
  Cpu, 
  Layers, 
  CheckCircle, 
  Users, 
  Award,
  BookOpen,
  Lock,
  Sparkles
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import IconPill from '../components/IconPill';
import NetworkBackground from '../components/NetworkBackground';
import InfoCard from '../components/InfoCard';
import { UPCOMING_EVENTS } from '../data/activitiesData';

export default function Home() {
  const featuredEvent = UPCOMING_EVENTS[0];

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

  const stats = [
    { label: 'SPECIALIZED DOMAINS', value: '8', sub: 'Comprehensive Tracks' },
    { label: 'ACTIVE MEMBERS', value: '60+', sub: 'Across NIT Hamirpur' },
    { label: 'WORKSHOPS CONDUCTED', value: '15+', sub: 'Hands-on Bootcamps' },
    { label: 'CTFS & CHALLENGES', value: '10+', sub: 'Hosted & Competed' }
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

      {/* 3. WHAT WE DO PREVIEW STRIP */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
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

      {/* 4. STATS STRIP */}
      <section className="py-14 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-shield-border">
            {stats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`text-center ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="text-3xl sm:text-5xl font-black font-heading text-navy-800 tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-shield-mutedText">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POSTER-STYLE FEATURED EVENT CALLOUT */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border-2 border-accent-blue/30 rounded-2xl p-6 sm:p-10 shadow-card relative overflow-hidden">
            
            {/* Top poster header treatment */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-shield-border pb-6 mb-8">
              <div>
                <SectionEyebrow text="FEATURED INITIATIVE · NIT HAMIRPUR" />
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-800 tracking-tight">
                  {featuredEvent.title}
                </h3>
                <p className="text-sm text-accent-blue font-semibold mt-1">
                  {featuredEvent.tagline}
                </p>
              </div>
              <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {featuredEvent.status}
              </span>
            </div>

            {/* Poster Info-Grid (Eligibility, Date & Time, Venue, Purpose) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {featuredEvent.infoGrid.map((item) => (
                <InfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  description={item.description}
                />
              ))}
            </div>

            {/* CTA action bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-shield-border bg-shield-bgLight -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:px-10 rounded-b-2xl">
              <div className="text-xs sm:text-sm text-shield-mutedText">
                <strong className="text-navy-800">Recruitment open:</strong> Apply online or visit our orientation session.
              </div>
              <Link
                to={featuredEvent.registrationLink}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{featuredEvent.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-shield-gold" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ETHICAL SECURITY COMMITMENT BANNER */}
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
