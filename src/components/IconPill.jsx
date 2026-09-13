import React from 'react';
import { Lightbulb, Code2, Users2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const PILL_DATA = [
  {
    id: 'learn',
    title: 'LEARN',
    sub: 'Foundations & Concepts',
    description: 'Master core networking, operating system security, cryptographic protocols, and security auditing from scratch.',
    icon: Lightbulb,
    color: 'text-amber-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20'
  },
  {
    id: 'build',
    title: 'BUILD',
    sub: 'Tools & Systems',
    description: 'Develop security scanners, secure backend APIs, defensive monitoring bots, and custom detection algorithms.',
    icon: Code2,
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20'
  },
  {
    id: 'collaborate',
    title: 'COLLABORATE',
    sub: 'Community & Red/Blue Teams',
    description: 'Solve Capture-the-Flag (CTF) challenges together, peer-review architectures, and organize knowledge sessions.',
    icon: Users2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    id: 'defend',
    title: 'DEFEND',
    sub: 'Resilience & Protection',
    description: 'Harden real-world digital infrastructure, detect zero-day exploits, and enforce sound ethical principles.',
    icon: ShieldCheck,
    color: 'text-navy-800',
    bg: 'bg-navy-800/10',
    border: 'border-navy-800/20'
  }
];

export default function IconPill({ variant = 'row' }) {
  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILL_DATA.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-shield-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}>
                <Icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div className="text-[11px] font-bold tracking-widest text-shield-gold uppercase mb-1">
                Pillar {idx + 1}
              </div>
              <h3 className="text-xl font-bold font-heading text-navy-800 tracking-tight mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-accent-blue mb-3">
                {item.sub}
              </p>
              <p className="text-sm text-shield-mutedText leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Default 'row' variant for Home hero bottom strip
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-shield-border shadow-card p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-shield-border">
          {PILL_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`flex flex-col items-center text-center group ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-4' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full ${item.bg} border ${item.border} flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-xs font-bold tracking-widest font-heading text-navy-800 uppercase">
                  {item.title}
                </span>
                <span className="text-[11px] text-shield-mutedText mt-0.5">
                  {item.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
