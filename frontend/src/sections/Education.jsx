import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-14 md:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EDUCATION"
          title="My Academic Background"
        />

        {/* 3-Column Academic Background Cards Grid - Staggered scroll reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 flex items-start gap-4 group"
            >
              {/* Graduation Cap Badge */}
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Education Content */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {edu.degree}
                </h3>
                <div className="text-xs text-slate-500 font-medium mb-2">
                  {edu.period}
                </div>
                <div className="text-xs font-semibold text-slate-700 mb-1">
                  {edu.score}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {edu.institution}
                </div>
                {edu.location && (
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {edu.location}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
