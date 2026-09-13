import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, ChevronDown, CheckCircle2, School } from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import { TEAM_HIERARCHY, CORE_MEMBERS } from '../data/teamData';

export default function Team() {
  return (
    <div className="relative">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="LEADERSHIP & GOVERNANCE" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            Society Leadership & Team
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-shield-mutedText max-w-2xl mx-auto leading-relaxed">
            The student officers and faculty advisors steering cybersecurity education, research ethics, and competitive CTF squads at NIT Hamirpur.
          </p>
        </div>
      </section>

      {/* 2. ORGANIZATIONAL HIERARCHY TREE */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="ORGANIZATIONAL STRUCTURE" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Operational Hierarchy
            </h2>
            <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Structured delegation connecting institutional faculty governance to student sub-teams.
            </p>
          </div>

          {/* Desktop & Mobile Responsive Hierarchy Tree */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Tier 1: Faculty Coordinator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-white border-2 border-shield-gold rounded-2xl p-6 text-center shadow-card relative"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-shield-gold/15 text-shield-gold border border-shield-gold/30">
                Institutional Patron
              </span>
              <h3 className="text-xl font-bold font-heading text-navy-800 mt-2">
                {TEAM_HIERARCHY.facultyCoordinator.name}
              </h3>
              <p className="text-xs font-semibold text-accent-blue mt-0.5">
                {TEAM_HIERARCHY.facultyCoordinator.role}
              </p>
              <p className="text-[11px] text-shield-mutedText mt-1">
                {TEAM_HIERARCHY.facultyCoordinator.dept}
              </p>
            </motion.div>

            {/* Connecting line */}
            <div className="w-[2px] h-8 bg-shield-border my-1"></div>

            {/* Tier 2: President */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-white border-2 border-navy-800 rounded-2xl p-6 text-center shadow-card relative"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-navy-800 text-white">
                Executive Head
              </span>
              <h3 className="text-xl font-bold font-heading text-navy-800 mt-2">
                {TEAM_HIERARCHY.president.name}
              </h3>
              <p className="text-xs font-semibold text-accent-blue mt-0.5">
                {TEAM_HIERARCHY.president.role}
              </p>
              <p className="text-[11px] text-shield-mutedText mt-1">
                {TEAM_HIERARCHY.president.year} · {TEAM_HIERARCHY.president.domain}
              </p>
            </motion.div>

            {/* Connecting line */}
            <div className="w-[2px] h-8 bg-shield-border my-1"></div>

            {/* Tier 3: Vice President & Technical Head (Split Row) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-accent-blue/40 rounded-2xl p-6 text-center shadow-card"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-accent-subtle text-accent-blue border border-accent-blue/20">
                  Operations & Outreach
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-800 mt-2">
                  {TEAM_HIERARCHY.vicePresident.name}
                </h3>
                <p className="text-xs font-semibold text-accent-blue mt-0.5">
                  {TEAM_HIERARCHY.vicePresident.role}
                </p>
                <p className="text-[11px] text-shield-mutedText mt-1">
                  {TEAM_HIERARCHY.vicePresident.year} · {TEAM_HIERARCHY.vicePresident.domain}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-accent-blue/40 rounded-2xl p-6 text-center shadow-card"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full bg-accent-subtle text-accent-blue border border-accent-blue/20">
                  Technical Architecture
                </span>
                <h3 className="text-lg font-bold font-heading text-navy-800 mt-2">
                  {TEAM_HIERARCHY.technicalHead.name}
                </h3>
                <p className="text-xs font-semibold text-accent-blue mt-0.5">
                  {TEAM_HIERARCHY.technicalHead.role}
                </p>
                <p className="text-[11px] text-shield-mutedText mt-1">
                  {TEAM_HIERARCHY.technicalHead.year} · {TEAM_HIERARCHY.technicalHead.domain}
                </p>
              </motion.div>

            </div>

            {/* Connecting line to sub-teams */}
            <div className="w-[2px] h-8 bg-shield-border my-1"></div>

            {/* Tier 4: Three Core Sub-Teams (Web Security / Network / Offensive) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
              {TEAM_HIERARCHY.subTeams.map((sub, idx) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-shield-border rounded-xl p-5 text-center shadow-card"
                >
                  <div className="text-[10px] uppercase font-bold tracking-widest text-shield-gold mb-1">
                    SUB-TEAM 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold font-heading text-navy-800">
                    {sub.name}
                  </h4>
                  <p className="text-xs font-semibold text-accent-blue mt-1">
                    Lead: {sub.lead}
                  </p>
                  <p className="text-[11px] text-shield-mutedText mt-0.5">
                    {sub.domain}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. MINIMAL MEMBER CARDS GRID */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="OFFICERS & SPECIALISTS" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Member Directory
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Minimal directory showcasing the dedicated leads driving student workshops and research tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 border border-shield-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-navy-800/5 text-navy-800 font-heading font-bold text-base flex items-center justify-center mb-4 border border-navy-800/10">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-shield-bgLight text-accent-blue border border-shield-border">
                      {member.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-navy-800 mt-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-accent-blue mt-0.5">
                    {member.role}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-shield-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                    Domain
                  </span>
                  <span className="text-xs text-shield-mutedText font-medium">
                    {member.domain}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
