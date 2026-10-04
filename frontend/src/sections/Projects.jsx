import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GitHubIcon } from '../components/SocialLinks';
import { projectsData } from '../data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section id="projects" className="py-14 md:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Featured Projects"
          actionText={showAll ? "Show Less" : "View All Projects"}
          onAction={() => setShowAll((prev) => !prev)}
        />

        {/* Projects Grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 md:grid-cols-2 ${showAll ? 'lg:grid-cols-3 max-w-6xl' : 'max-w-5xl'} gap-6 lg:gap-8 mx-auto transition-all duration-300`}
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-2xl border border-slate-100 shadow-subtle hover:shadow-card hover:-translate-y-1.5 hover:border-blue-100/80 transition-all duration-300 overflow-hidden flex flex-col group"
              >
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative h-36 sm:h-40 md:h-44 bg-slate-900 overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-bold backdrop-blur-xs shadow-md transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title, Subtitle & Action Icons */}
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-[11px] font-medium text-blue-600 mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    
                    {/* Action Links: GitHub & Live Demo */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 active:scale-95 transition-all duration-200 p-1.5 rounded-lg shadow-sm"
                        aria-label={`Open ${project.title} GitHub repository`}
                        title="Source Code"
                      >
                        <GitHubIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 active:scale-95 transition-all duration-200 p-1.5 rounded-lg shadow-sm"
                        aria-label={`Open ${project.title} live demo`}
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md border transition-all duration-200 hover:border-blue-200 ${tag.bg}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile/Bottom Toggle Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-900 hover:text-teal-800 font-bold text-xs border-2 border-teal-600 hover:border-teal-700 shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View All Projects (3)"}</span>
            <ArrowRight className={`w-4 h-4 text-teal-600 transition-transform duration-200 ${showAll ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 max-h-[88vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Reduced Banner Area Height */}
              <div className="relative h-40 sm:h-48 bg-slate-950 shrink-0 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 shadow-md backdrop-blur-xs transition-all active:scale-90 cursor-pointer group"
                  aria-label="Close modal"
                >
                  <X className="w-4.5 h-4.5 transition-transform duration-200 group-hover:rotate-90" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                      {selectedProject.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                {/* Key Features */}
                {selectedProject.features && (
                  <div className="mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                      <span>Key Features</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t.name}
                      className={`text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md border ${t.bg}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons - Pinned at bottom for guaranteed visibility */}
              <div className="p-4 sm:p-5 bg-slate-50/90 border-t border-slate-200/80 flex items-center gap-3 shrink-0">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
