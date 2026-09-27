import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Lock } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Domains', path: '/domains' },
  { name: 'Activities', path: '/activities' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resources', path: '/resources' },
  { name: 'Team', path: '/team' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 ${
      scrolled ? 'shadow-nav border-b border-shield-border' : ''
    }`}>
      {/* Top micro-bar with institute affiliation */}
      <div className="bg-navy-900 text-white text-[11px] py-1 px-4 sm:px-8 flex justify-between items-center border-b border-navy-700/50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="tracking-widest uppercase font-semibold text-gray-300">
            NIT Hamirpur · Official Student Cybersecurity Society
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-400 font-medium tracking-wider text-[10px]">
          <span>PEOPLE · IDEAS · A SAFER DIGITAL WORLD</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Lockup */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-navy-900 border border-shield-gold/40 flex items-center justify-center overflow-hidden p-0.5 shadow-sm group-hover:border-accent-blue transition-colors">
              <img src="/shield-logo.png" alt="SHIELD Cyber Society Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-2xl tracking-tight text-navy-800 group-hover:text-accent-blue transition-colors">
                  SHIELD
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-navy-800 text-shield-gold">
                  CYBER
                </span>
              </div>
              {/* Line under header treatment matching poster */}
              <div className="w-12 h-[2px] bg-shield-gold group-hover:w-full transition-all duration-300 my-0.5"></div>
              <span className="text-[9.5px] uppercase font-semibold tracking-wider text-shield-mutedText">
                NIT HAMIRPUR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-all rounded-md relative ${
                    isActive
                      ? 'text-accent-blue font-bold'
                      : 'text-shield-darkText hover:text-accent-blue hover:bg-shield-bgLight'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-accent-blue rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* "Join Us" button styled as filled navy pill on the right */}
            <Link
              to="/join"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Join Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-shield-gold" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/join"
              className="px-3.5 py-1.5 rounded-full bg-navy-800 text-white text-xs font-bold uppercase tracking-wider"
            >
              Join
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-navy-800 hover:bg-shield-bgLight focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-shield-border bg-white px-4 pt-3 pb-6 shadow-xl space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-accent-subtle text-accent-blue font-bold border-l-4 border-accent-blue'
                    : 'text-shield-darkText hover:bg-shield-bgLight'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-shield-border">
            <Link
              to="/join"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-navy-800 text-white font-bold text-sm tracking-wide text-center"
            >
              <span>Join SHIELD Society</span>
              <ChevronRight className="w-4 h-4 text-shield-gold" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
