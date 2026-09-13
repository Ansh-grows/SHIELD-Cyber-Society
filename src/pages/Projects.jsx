import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Users, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  X,
  Code2,
  Cpu
} from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';
import { PROJECTS_DATA } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domainOptions = ['All', 'AI Security', 'Network Security', 'Web & Offensive Security', 'Cloud Security'];

  const filteredProjects = selectedDomain === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.domain.toLowerCase().includes(selectedDomain.toLowerCase()));

  return (
    <div className="relative">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-shield-border overflow-hidden">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionEyebrow text="ENGINEERING & TOOLS" center={true} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-navy-800 mb-4">
            Security Projects & Research
          </h1>
          <div className="w-16 h-1 bg-shield-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-shield-mutedText max-w-2xl mx-auto leading-relaxed mb-8">
            Student-engineered defensive tools, security monitors, and capture-the-flag infrastructure developed at NIT Hamirpur.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {domainOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedDomain(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedDomain === cat
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-shield-bgLight text-shield-mutedText hover:text-navy-800 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROJECT CARDS GRID */}
      <section className="py-20 bg-shield-bgLight border-b border-shield-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-shield-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top: Domain tag & Status badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                      {project.domain}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                      project.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-700'
                        : 'bg-amber-500/10 text-amber-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-ping'
                      }`}></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-navy-800 tracking-tight mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-shield-mutedText leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Team & Technologies */}
                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-shield-bgLight/70 border border-shield-border/60">
                    <div className="flex items-center gap-2 text-xs text-navy-800 font-semibold">
                      <Users className="w-3.5 h-3.5 text-accent-blue" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-shield-darkText border border-shield-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-shield-border flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-shield-mutedText hover:text-navy-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue hover:text-navy-800 uppercase tracking-wider transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-shield-border relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-shield-bgLight hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-navy-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase font-bold tracking-widest text-shield-gold">
                  {selectedProject.domain}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-bold">
                  {selectedProject.status}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-800 mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-sm sm:text-base text-shield-mutedText leading-relaxed mb-6">
                {selectedProject.fullDesc}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-800 mb-3">
                  Key Technical Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map(feat => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-shield-darkText">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-navy-800 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer */}
              <div className="pt-4 border-t border-shield-border flex items-center justify-between">
                <span className="text-xs text-shield-mutedText">Led by {selectedProject.team}</span>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
