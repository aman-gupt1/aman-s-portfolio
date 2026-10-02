import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Mail,
  CheckCircle2,
  Lightbulb,
  Code2,
  Cpu,
  Rocket,
} from 'lucide-react';
import { personalInfo } from '../data/about';

const FEATURE_CARDS = [
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    description: 'Analytical thinking and structured approaches to solve complex challenges.',
    icon: Lightbulb,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: 'border-blue-100',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Developer',
    description: 'Building modern, scalable end-to-end web apps using the MERN stack.',
    icon: Code2,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: 'border-sky-100',
  },
  {
    id: 'ai-innovation',
    title: 'AI & Innovation',
    description: 'Integrating AI capabilities and smart features into real-world applications.',
    icon: Cpu,
    color: '#4F46E5',
    bg: '#EEF2FF',
    border: 'border-indigo-100',
  },
  {
    id: 'continuous-learner',
    title: 'Continuous Learner',
    description: 'Constantly exploring emerging technologies, frameworks, and modern tools.',
    icon: Rocket,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: 'border-teal-100',
  },
];

const PERSONAL_INFO_ITEMS = [
  {
    id: 'location',
    label: 'Location',
    value: personalInfo.location,
    icon: MapPin,
    isLink: false,
  },
  {
    id: 'education',
    label: 'Education',
    value: personalInfo.degree,
    icon: GraduationCap,
    isLink: false,
  },
  {
    id: 'email',
    label: 'Email',
    value: personalInfo.email,
    icon: Mail,
    isLink: true,
    href: `mailto:${personalInfo.email}`,
  },
  {
    id: 'availability',
    label: 'Availability',
    value: personalInfo.status,
    icon: CheckCircle2,
    isLink: false,
    isAvailable: true,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Bio & Personal Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Section Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-2 mb-2.5"
            >
              <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block" />
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                ABOUT ME
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Get to know me
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
              className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-7 font-normal"
            >
              {personalInfo.aboutBio}
            </motion.p>

            {/* Personal Information 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
            >
              {PERSONAL_INFO_ITEMS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-blue-200/70 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                        {item.label}
                      </span>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="text-xs sm:text-[12.5px] font-semibold text-slate-800 hover:text-blue-600 transition-colors block truncate"
                          title={item.value}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-[12.5px] font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                          {item.isAvailable && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                          )}
                          <span className="truncate" title={item.value}>
                            {item.value}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 2x2 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FEATURE_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.1 * idx, ease: 'easeOut' }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-subtle hover:shadow-card hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 flex flex-col justify-start group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: card.bg, color: card.color }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
