import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart2 } from 'lucide-react';
import heroImg from '../assets/hero-person.png';
import { SocialLinks, GitHubIcon } from '../components/SocialLinks';
import { personalInfo } from '../data/about';

export const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const offset = 70;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-x-clip bg-gradient-to-b from-[#FAFBFC] via-white to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center z-10">
            {/* Greeting pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-100 text-blue-700 text-xs font-semibold mb-4 shadow-2xs hover:bg-blue-100/70 transition-colors"
            >
              <span className="text-sm">👋</span>
              <span>Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-1.5"
            >
              Aman Kumar <span className="text-blue-600">Gupta</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26, ease: 'easeOut' }}
              className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-5"
            >
              MERN Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34, ease: 'easeOut' }}
              className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-xl mb-6 sm:mb-7 font-normal"
            >
              {personalInfo.heroBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-6 sm:mb-7"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <GitHubIcon className="w-4 h-4 text-slate-900 transition-transform duration-200 group-hover:scale-110 shrink-0" />
                <span>GitHub</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: 'easeOut' }}
            >
              <SocialLinks variant="hero" />
            </motion.div>
          </div>

          {/* Right Column: Hero Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center pt-8 sm:pt-6 lg:pt-0 max-w-full"
          >
            {/* Background Organic Light Blue Blob & Soft Glow */}
            <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] bg-gradient-to-tr from-[#E0F2FE]/80 via-[#EFF6FF]/60 to-[#EEF2FF]/40 rounded-[48%_52%_62%_38%/45%_55%_45%_55%] -z-10 transform -rotate-6" />
            <div className="absolute w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px] bg-[#EFF6FF]/90 rounded-full -z-10 blur-2xl" />

            {/* Doodle Handwritten Script: "Building Web Experiences that Matter" */}
            <div className="absolute -top-3 left-2 sm:-left-6 md:left-0 z-20 pointer-events-none select-none scale-85 sm:scale-100 origin-top-left">
              <div className="font-handwriting text-slate-800 text-xl sm:text-3xl leading-[1.05] font-bold transform -rotate-6">
                <div>Building</div>
                <div className="text-slate-800">Web Experiences</div>
                <div className="text-slate-800">that Matter</div>
              </div>

              {/* Doodle curved arrow pointing from text to photo */}
              <svg className="w-9 h-9 sm:w-12 sm:h-12 text-blue-500 ml-10 sm:ml-16 -mt-1" viewBox="0 0 60 50" fill="none">
                <path
                  d="M10 5 C 18 22, 32 28, 48 34"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 32 L 48 34 L 46 25"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Doodle Sparkle / Burst Rays Top Right */}
            <div className="absolute top-2 right-4 sm:right-8 z-10 pointer-events-none select-none">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-blue-500" viewBox="0 0 40 40" fill="none">
                <path d="M12 28 L 4 36" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M22 20 L 30 10" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26 30 L 36 34" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Doodle Left Accent */}
            <div className="absolute top-24 left-2 sm:left-2 z-10 pointer-events-none select-none">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" viewBox="0 0 30 30" fill="none">
                <path
                  d="M8 8 C 5 14, 6 22, 12 24 C 18 26, 20 20, 16 16"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Profile Cutout Image: Aman Kumar Gupta */}
            <div className="relative z-10 w-[240px] sm:w-[340px] lg:w-[380px] h-[300px] sm:h-[410px] lg:h-[440px] flex items-end justify-center">
              <img
                src={heroImg}
                alt="Aman Kumar Gupta - MERN Stack Developer"
                className="w-full h-full object-contain object-bottom select-none drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
              />
            </div>

            {/* Floating Card 1: Bottom-Left (MERN Stack Developer) */}
            <div className="absolute -bottom-2 left-1 sm:-left-6 z-20 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-900/10 border border-slate-200/90 flex items-center gap-2.5 sm:gap-3.5 animate-float-slow transition-all hover:shadow-xl hover:border-slate-300 max-w-[220px] sm:max-w-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="pr-1">
                <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight">
                  MERN Stack
                </div>
                <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight mb-1">
                  Developer
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Right Mid-Height (Clean UI / Scalable Code / Real Impact) */}
            <div className="absolute top-14 sm:top-20 right-1 sm:-right-6 z-20 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg shadow-slate-900/10 border border-slate-200/90 flex flex-col gap-1 sm:gap-1.5 animate-float-delayed transition-all hover:shadow-xl hover:border-slate-300">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-0.5 shadow-xs">
                <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                Clean UI
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                Scalable Code
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                Real Impact
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
