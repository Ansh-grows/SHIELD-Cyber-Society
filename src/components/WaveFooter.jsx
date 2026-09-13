import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function WaveFooter() {
  return (
    <footer className="relative bg-navy-900 text-white mt-auto overflow-hidden">
      
      {/* SVG Wave Divider Transitioning from page background into Dark Navy */}
      <div className="w-full overflow-hidden leading-none -mt-1 pointer-events-none">
        <svg
          className="relative block w-full h-14 sm:h-20 md:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Faint secondary wave contour */}
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,150 900,10 1200,45 L1200,120 L0,120 Z"
            fill="#101E38"
            fillOpacity="0.4"
          />
          {/* Main wave curve matching the poster base */}
          <path
            d="M0,30 C200,110 420,-10 650,55 C880,120 1020,30 1200,60 L1200,120 L0,120 Z"
            fill="#0B1528"
          />
        </svg>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-700/60">
          
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-navy-800 border-2 border-shield-gold flex items-center justify-center">
                <Shield className="w-7 h-7 text-shield-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-2xl tracking-tight text-white">
                    SHIELD
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-accent-blue text-white">
                    CYBER SOCIETY
                  </span>
                </div>
                <div className="w-16 h-[2px] bg-shield-gold my-0.5"></div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                  NIT HAMIRPUR · HIMACHAL PRADESH
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm pt-1">
              Society for Hacking Intelligence and Ethical Learning and Defense. Advancing practical cybersecurity, research, and responsible digital security across campus and beyond.
            </p>

            {/* Poster Taglines */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-widest text-shield-gold">
                Learn | Build | Defend
              </div>
              <div className="text-xs italic text-gray-400 mt-0.5">
                "People | Ideas | A Safer Digital World"
              </div>
            </div>

            {/* Contact quick links */}
            <div className="pt-2 space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-shield-gold flex-shrink-0" />
                <span>Department of CSE / Computer Centre, NIT Hamirpur (HP) - 177005</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-shield-gold flex-shrink-0" />
                <a href="mailto:shield@nith.ac.in" className="hover:text-accent-blue transition-colors">
                  shield@nith.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-shield-gold pb-1 border-b border-navy-700/40">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  About SHIELD
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  8 Focus Domains
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  Activities & CTFs
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  Society Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                  Team Hierarchy
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Domains */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-shield-gold pb-1 border-b border-navy-700/40">
              Core Tracks
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  Web App Security
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  Network Security
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  Offensive Security & Pentesting
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  Defensive & SIEM
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  Cloud & Cryptography
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-accent-light transition-colors">
                  AI & LLM Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Corner Badge Stack from the Poster */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-shield-gold pb-1 border-b border-navy-700/40">
              Pillars of Practice
            </h4>
            
            {/* Poster Corner Stack: SECURE / LEARN / EMPOWER / LEAD */}
            <div className="bg-navy-800/90 border border-navy-700 rounded-xl p-4 space-y-2 text-center">
              <div className="text-[10px] uppercase font-bold tracking-ultra text-gray-400">
                OFFICIAL VALUES
              </div>
              <div className="space-y-1 font-heading font-black tracking-widest text-xs text-white">
                <div className="text-accent-light">SECURE</div>
                <div className="text-white">LEARN</div>
                <div className="text-shield-gold">EMPOWER</div>
                <div className="text-gray-200">LEAD</div>
              </div>
              <div className="pt-2">
                <Link 
                  to="/join"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-shield-gold hover:text-white transition-colors"
                >
                  <span>Recruitment Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-accent-blue transition-colors"
                aria-label="SHIELD GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-accent-blue transition-colors"
                aria-label="SHIELD LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-accent-blue transition-colors"
                aria-label="SHIELD Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} SHIELD Cyber Society, NIT Hamirpur. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Ethical Hacking · Education · Defense</span>
            <span className="w-1 h-1 rounded-full bg-shield-gold"></span>
            <span className="text-gray-400">NIT Hamirpur, HP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
