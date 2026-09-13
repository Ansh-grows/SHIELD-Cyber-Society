import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flag, 
  Terminal, 
  Trophy, 
  Cpu, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  Bell
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import InfoCard from '../components/InfoCard';
import { ACTIVITIES_CATEGORIES, UPCOMING_EVENTS } from '../data/activitiesData';

export default function Activities() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="relative">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="PRACTICE & ENGAGEMENT" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            Society Activities & Events
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-shield-mutedText max-w-2xl mx-auto leading-relaxed">
            From overnight Capture-The-Flag battles and defensive red-vs-blue scrims to weekend bootcamps, we provide students with hands-on technical rigor.
          </p>
        </div>
      </section>

      {/* 2. POSTER-STYLE UPCOMING EVENTS SECTION */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="SCHEDULE & RECRUITMENT" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Upcoming Flagship Events
            </h2>
            <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Official schedule for orientations, practical hack-labs, and competitive cyber leagues.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {UPCOMING_EVENTS.map((event, eventIdx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: eventIdx * 0.1 }}
                className={`bg-white rounded-2xl border-2 ${
                  event.highlight ? 'border-accent-blue/40 shadow-card-hover ring-1 ring-accent-blue/20' : 'border-shield-border shadow-card'
                } overflow-hidden`}
              >
                {/* Event header mirroring poster's header line */}
                <div className="p-6 sm:p-8 border-b border-shield-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-shield-gold inline-block"></span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-accent-blue">
                        EVENT 0{eventIdx + 1} · OFFICIAL SESSION
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-shield-mutedText mt-1 font-medium">
                      {event.tagline}
                    </p>
                  </div>
                  <span className={`self-start sm:self-auto px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 ${
                    event.highlight
                      ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
                      : 'bg-shield-bgLight text-navy-800 border-shield-border'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {event.status}
                  </span>
                </div>

                {/* Poster Info-Grid: Eligibility, Date & Time, Venue, Purpose */}
                <div className="p-6 sm:p-8 bg-shield-bgLight/40">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {event.infoGrid.map((item) => (
                      <InfoCard
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        value={item.value}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>

                {/* Event Footer CTA */}
                <div className="p-4 sm:px-8 sm:py-5 bg-white border-t border-shield-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-shield-mutedText flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free participation for all enrolled students of NIT Hamirpur</span>
                  </div>
                  <a
                    href={event.registrationLink}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <span>{event.buttonText}</span>
                    <ArrowRight className="w-4 h-4 text-shield-gold" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE ACTIVITY TYPES GRID */}
      <section className="py-20 bg-white border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow text="WHAT WE ORGANIZE" center={true} />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy-800 tracking-tight">
              Five Pillars of Action
            </h2>
            <div className="w-16 h-1 bg-shield-gold mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base text-shield-mutedText">
              Year-round programs engineered to transform theoretical understanding into battle-tested instinct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES_CATEGORIES.map((act, idx) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-white rounded-xl p-7 border border-shield-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-800/5 text-navy-800 group-hover:bg-accent-blue group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-shield-bgLight text-accent-blue border border-accent-blue/20">
                        {act.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-navy-800 mb-1">
                      {act.title}
                    </h3>
                    <div className="text-xs font-semibold text-accent-blue mb-3">
                      {act.subtitle}
                    </div>
                    <p className="text-sm text-shield-mutedText leading-relaxed mb-6">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-shield-border flex items-center justify-between text-xs">
                    <span className="font-semibold text-navy-800">{act.stats}</span>
                    <span className="text-shield-gold font-bold uppercase tracking-wider text-[11px]">Active Cycle</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. NOTIFICATION / MAILING TEASER */}
      <section className="py-14 bg-shield-bgLight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Bell className="w-3.5 h-3.5" />
            <span>Stay in the Loop</span>
          </div>
          <h3 className="text-2xl font-bold font-heading text-navy-800 mb-2">
            Never Miss a Workshop or CTF Release
          </h3>
          <p className="text-sm text-shield-mutedText max-w-xl mx-auto mb-6">
            Join the official SHIELD Discord community and WhatsApp announcement broadcast to get challenge flags, event notifications, and lab credentials.
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Join Community Channels</span>
            <ArrowRight className="w-4 h-4 text-shield-gold" />
          </a>
        </div>
      </section>

    </div>
  );
}
