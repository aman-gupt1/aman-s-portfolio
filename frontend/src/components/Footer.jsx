import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './SocialLinks';

const SOCIAL_LINKS = {
  github: 'https://github.com/aman-gupt1',
  linkedin: 'https://www.linkedin.com/in/amangupt1',
  leetcode: 'https://leetcode.com/u/amangupta3110/',
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="py-5 sm:py-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Left: Name | Role */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight select-none">
              Aman Kr. <span className="text-blue-600 font-extrabold">Gupta</span>
            </span>

            <span className="hidden sm:inline-block h-4 w-px bg-slate-200 select-none" />

            <span className="px-3 py-1 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/90 hover:border-blue-200 text-slate-600 hover:text-blue-600 text-xs sm:text-xs font-semibold tracking-wide shadow-2xs transition-all duration-200 cursor-default">
              MERN Stack Developer
            </span>
          </div>

          {/* Right: Buttons (GitHub, LinkedIn, LeetCode, Back to Top) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center sm:justify-end">
            {/* GitHub Button */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-900 border border-slate-200/90 hover:border-slate-900 text-slate-700 hover:text-white text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <GitHubIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-600 border border-slate-200/90 hover:border-blue-600 text-slate-700 hover:text-white text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <LinkedInIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>

            {/* LeetCode Button */}
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200/90 hover:border-amber-300 text-slate-700 hover:text-amber-900 text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>LeetCode</span>
            </a>

            {/* Back to Top Arrow Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/90 hover:border-blue-200 text-slate-600 hover:text-blue-600 active:scale-95 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
      </div>
    </motion.footer>
  );
};

