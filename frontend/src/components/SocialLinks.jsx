import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/about';

export const LeetCodeIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.762-1.823.762s-1.357-.295-1.822-.76l-5.114-5.116a2.571 2.571 0 0 1 0-3.645l5.114-5.116c.465-.466 1.11-.761 1.822-.761s1.357.295 1.823.761l2.697 2.607"
      stroke="#FFA116"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 12h9.5"
      stroke="#1E293B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
  </svg>
);

export const GitHubIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const SocialLinks = ({ variant = 'hero', className = '' }) => {
  const { socials } = personalInfo;

  if (variant === 'hero') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-sm hover:shadow-md"
        >
          <LinkedInIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-sm hover:shadow-md"
        >
          <GitHubIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
        </a>
        <a
          href={socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          title="LeetCode Profile"
          className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-sm hover:shadow-md"
        >
          <LeetCodeIcon className="w-4 h-4" />
        </a>
        <a
          href="/aman-gupta-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
          className="h-9 px-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-sm hover:shadow-md text-xs font-semibold group cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5 text-blue-600 transition-transform duration-200 group-hover:scale-110" />
          <span>View Resume</span>
        </a>
      </div>
    );
  }

  // Footer / Contact variant
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <LinkedInIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <GitHubIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
        className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <LeetCodeIcon className="w-4 h-4" />
      </a>
      <a
        href={socials.email}
        aria-label="Email"
        className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
};
