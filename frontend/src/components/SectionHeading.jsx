import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const SectionHeading = ({
  eyebrow,
  title,
  actionText,
  onAction,
  actionHref,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4 ${className}`}
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      {actionText && (
        <div className="sm:self-end">
          {actionHref ? (
            <a
              href={actionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-900 hover:text-teal-800 font-bold text-xs sm:text-sm border-2 border-teal-600 hover:border-teal-700 shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200 group cursor-pointer"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-teal-600 group-hover:text-teal-800 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </a>
          ) : (
            <button
              onClick={onAction}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-900 hover:text-teal-800 font-bold text-xs sm:text-sm border-2 border-teal-600 hover:border-teal-700 shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200 group cursor-pointer"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 text-teal-600 group-hover:text-teal-800 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};
