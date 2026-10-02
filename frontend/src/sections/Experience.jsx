import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Briefcase, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';

export const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="experience" className="py-14 md:py-18 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Work Experience"
          actionText="View All Experience"
          onAction={() => setModalOpen(true)}
        />

        {/* 2-Column Side-by-Side Cards Grid - Staggered reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                {index === 0 ? (
                  <Building2 className="w-6 h-6" />
                ) : (
                  <Briefcase className="w-6 h-6" />
                )}
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-700 mb-3">
                  {exp.company}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* "View All Experience" Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Career Timeline</h3>
                  <p className="text-xs text-slate-500">Summary of internships and practical industry experience</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                      <span className="text-xs text-slate-500">{exp.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mt-0.5">{exp.company}</div>
                    <p className="text-xs text-slate-600 mt-2">
                      Focused on modern responsive architectures, state management, component engineering, and scalable MERN stack integrations.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer"
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
