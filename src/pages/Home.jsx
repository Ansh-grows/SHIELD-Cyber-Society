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
  Compass,
  ShieldCheck,
  CheckCircle2
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
      linkText: 'Register for Workshop'
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
                <span>Register for Workshop</span>
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

      {/* 3. WHO WE ARE, MISSION & VISION (EXPANDED SECTIONS WITH SIDE-BY-SIDE IMAGES) */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Section Heading Banner */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <SectionEyebrow text="FOUNDATION & PURPOSE" center={true} badge="SHIELD OVERVIEW" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-navy-800 tracking-tight">
              Defending the Digital Realm Through Community & Code
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed">
              Discover who we are, what fuels our dedication, and our collective horizon as the premier cybersecurity society of NIT Hamirpur.
            </p>
          </div>

          {/* ITEM 1: WHO WE ARE (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-wider w-fit mb-3">
                <School className="w-3.5 h-3.5" />
                <span>About Our Society</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy-800 tracking-tight mb-4">
                Who We Are
              </h3>
              <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed mb-6">
                SHIELD (Society for Hacking Intelligence and Ethical Learning and Defense) is the premier, official student cybersecurity community at National Institute of Technology Hamirpur. Founded by passionate technologists and supported by faculty mentors, our society serves as an institutional crucible where students from all engineering disciplines converge to demystify complex systems, research security vulnerabilities, and build resilient defensive infrastructure. We cultivate an inclusive, collaborative culture that transforms raw curiosity into cutting-edge ethical hacking expertise and industrial-grade security engineering.
              </p>
              
              {/* Structured Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Student Mentorship:</strong> A structured peer-to-peer mentoring network connecting experienced seniors and alumni with beginners across all academic branches.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Ethical Hacking Practice:</strong> Dedicated safe sandboxes and virtual ranges to dissect real-world vulnerabilities and master white-hat tradecraft.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Collaborative Research:</strong> Interdisciplinary research pods analyzing cryptography, cloud protocols, network defense, and emerging threat vectors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Real-World Project Development:</strong> Building production-ready open-source security scanners, monitoring daemons, and defensive automation tools.
                  </span>
                </li>
              </ul>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-shield-gold" />
                </Link>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-shield-border shadow-xl group">
                <img
                  src="/who-we-are.jpg"
                  alt="SHIELD Cyber Society community collaborating in lab at NIT Hamirpur"
                  className="w-full h-80 sm:h-96 md:h-[430px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/20 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 text-shield-gold flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-800">NIT Hamirpur Community</p>
                    <p className="text-[11px] text-shield-mutedText">Student-led cybersecurity lab & collaborative research</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ITEM 2: OUR MISSION (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column (First on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-accent-blue/30 shadow-xl group">
                <img
                  src="/our-mission.jpg"
                  alt="Practical cybersecurity programming, CTF wargames, and ethical hacking"
                  className="w-full h-80 sm:h-96 md:h-[430px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-navy-900/95 backdrop-blur-md rounded-xl p-3.5 border border-navy-700 shadow-lg flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue text-white flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Ethical Hacking & Defense</p>
                    <p className="text-[11px] text-gray-300">Hands-on wargames & CTF tournaments</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column (Second on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 md:order-2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shield-gold/15 border border-shield-gold/30 text-navy-800 text-xs font-bold uppercase tracking-wider w-fit mb-3">
                <Target className="w-3.5 h-3.5 text-shield-gold" />
                <span>Core Purpose & Directive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy-800 tracking-tight mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed mb-6">
                Our mission is to empower the next generation of engineers by bridging abstract academic theory with frontline cyber warfare defense. We replace passive slide lectures with intensive hands-on wargames, practical malware analysis clinics, and collaborative capture-the-flag environments. Above all, we instill an uncompromising commitment to white-hat ethics, responsible vulnerability disclosure, and institutional security governance to safeguard digital infrastructure.
              </p>

              {/* Structured Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-shield-gold/20 text-shield-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Defensive & Offensive Training:</strong> Providing rigorous, step-by-step tracks covering penetration testing, threat hunting, reverse engineering, and digital forensics.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-shield-gold/20 text-shield-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Hands-On Workshops:</strong> Hosting frequent interactive bootcamps, secure coding workshops, and system defense labs open to students of all skill tiers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-shield-gold/20 text-shield-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">National CTF Competitions:</strong> Training and fielding high-performing collegiate squads to represent NIT Hamirpur in national and global CTF leagues.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-shield-gold/20 text-shield-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Campus Cyber Awareness:</strong> Spearheading cybersecurity seminars, social engineering defense guides, and digital privacy campaigns across campus.
                  </span>
                </li>
              </ul>

              <div>
                <Link
                  to="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-blue hover:bg-accent-hover text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Explore Our Activities</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ITEM 3: OUR VISION (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider w-fit mb-3">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span>Future Outlook & Horizons</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy-800 tracking-tight mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed mb-6">
                Our vision is to firmly establish NIT Hamirpur as a premier national center of excellence in cybersecurity research, ethical vulnerability assessment, and defense innovation. As adversaries embrace machine learning, quantum cryptographic disruptions, and distributed cloud vulnerabilities, SHIELD prepares students to not only anticipate future vectors but pioneer novel security architectures that safeguard society's critical infrastructure.
              </p>

              {/* Structured Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Building an Industry-Ready Workforce:</strong> Equipping students with end-to-end operational knowledge, threat-hunting acumen, and portfolios demanded by top tech firms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Ethically Responsible Innovation:</strong> Ensuring ethical integrity, responsible disclosure, and privacy-by-design form the foundation of every tool we create.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Fostering Technical Excellence:</strong> Expanding exploratory research across 8 specialized domains, from AI/LLM safety to binary exploitation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-shield-mutedText leading-relaxed">
                    <strong className="text-navy-800 font-semibold">Creating Top Security Professionals:</strong> Nurturing visionary alumni who lead Security Operations Centers (SOCs), defense research teams, and cybersecurity startups globally.
                  </span>
                </li>
              </ul>

              <div>
                <Link
                  to="/domains"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Discover Our 8 Domains</span>
                  <ArrowRight className="w-4 h-4 text-shield-gold" />
                </Link>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-shield-border shadow-xl group">
                <img
                  src="/our-vision.jpg"
                  alt="Futuristic cyber defense operations and technology infrastructure"
                  className="w-full h-80 sm:h-96 md:h-[430px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/20 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-800">Technological Leadership</p>
                    <p className="text-[11px] text-shield-mutedText">Excellence in research, defense, & innovation</p>
                  </div>
                </div>
              </div>
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
