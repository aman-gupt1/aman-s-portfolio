import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TechIcon } from '../components/TechIcon';
import { skillsData, modalSkillsData } from '../data/skills';

export const TechStack = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI', 'Programming', 'Tools'];
  const filteredSkills =
    activeTab === 'All'
      ? modalSkillsData
      : modalSkillsData.filter((s) => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="skills" className="py-14 md:py-18 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECH STACK"
          title="Technologies I Work With"
          actionText="View All Skills"
          onAction={() => setModalOpen(true)}
        />

        {/* 11 Skills Grid - Staggered scroll reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.04 },
            },
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 sm:gap-3.5"
        >
          {skillsData.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
              className="bg-white rounded-2xl p-3 sm:p-3.5 flex flex-col items-center justify-center border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-200 cursor-default group aspect-square"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center mb-2 transition-transform duration-200 group-hover:scale-110">
                <TechIcon name={tech.icon} className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 text-center tracking-tight group-hover:text-blue-600 transition-colors truncate max-w-full px-1">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* "View All Skills" Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with distinct background color & clearly visible close button */}
              <div className="bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-b border-slate-200/80 px-6 sm:px-8 py-6 sm:py-7 flex items-center justify-between shrink-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">Skills & Tech Stack</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Comprehensive overview of development competencies</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-xs active:scale-90 transition-all cursor-pointer group shrink-0 ml-3"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90 text-slate-700 group-hover:text-slate-950" />
                </button>
              </div>

              {/* Modal Body with toggle segmented control */}
              <div className="p-5 sm:p-7 overflow-y-auto flex-1">
                {/* Category Toggle Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {/* Category Toggle Buttons (Segmented Control style) */}
                  <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 shadow-inner">
                    {categories.map((cat) => {
                      const isActive = activeTab === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveTab(cat)}
                          className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeCategoryPill"
                              className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs"
                              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            />
                          )}
                          <span className="relative z-10">{cat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animated Skills Grid on Category Change */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                  >
                    {filteredSkills.map((tech, index) => (
                      <motion.div
                        key={`${tech.category}-${tech.name}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-200 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
                      >
                        <div className="w-8 h-8 flex items-center justify-center shrink-0">
                          <TechIcon name={tech.icon} className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                            {tech.name}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 font-medium">
                            {tech.category}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Modal Footer with Skill Count and Visible Close Button */}
              <div className="px-6 sm:px-8 py-3.5 bg-slate-50/90 border-t border-slate-200/80 flex items-center justify-between shrink-0">
                <span className="text-xs font-semibold text-slate-500">
                  Showing <span className="text-slate-900 font-bold">{filteredSkills.length}</span> {filteredSkills.length === 1 ? 'skill' : 'skills'}
                </span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:shadow active:scale-95 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
