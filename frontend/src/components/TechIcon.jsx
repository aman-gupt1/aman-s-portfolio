import React from 'react';

export const TechIcon = ({ name, className = 'w-10 h-10' }) => {
  const n = (name || '').toLowerCase().trim();

  switch (n) {
    case 'react':
    case 'react.js':
      return (
        <svg viewBox="0 0 115.3 100" className={className}>
          <circle cx="57.65" cy="50" r="12" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="4" fill="none">
            <ellipse cx="57.65" cy="50" rx="54" ry="20.5" />
            <ellipse cx="57.65" cy="50" rx="54" ry="20.5" transform="rotate(60 57.65 50)" />
            <ellipse cx="57.65" cy="50" rx="54" ry="20.5" transform="rotate(120 57.65 50)" />
          </g>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <rect width="100" height="100" rx="12" fill="#F7DF1E" />
          <path d="M26 76l6.8-4.2c1.7 2.8 3.5 5.1 7.2 5.1 3.6 0 5.9-1.5 5.9-6.9V45h8.6v25.2c0 9.8-5.8 14-14.4 14-7.7 0-12.1-4-14.1-8.2zM59.3 74.4l6.9-4c2 3.2 4.6 5.8 8.9 5.8 3.8 0 6.2-1.8 6.2-4.5 0-3.1-2.5-4.3-8.1-6.7-7.8-3.3-12.8-7.5-12.8-15.1 0-7.5 5.8-13.4 15-13.4 6.5 0 11.2 2.3 14.7 8.3l-6.7 4.3c-1.8-3.1-3.7-4.4-8-4.4-3.7 0-5.8 1.8-5.8 4.1 0 2.8 2.2 3.9 7.4 6.1 8.8 3.7 13.5 7.6 13.5 15.7 0 8.7-6.8 13.9-16.1 13.9-8.9 0-14.4-4.5-17.1-9.9z" fill="#000000" />
        </svg>
      );

    case 'html5':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M12 6l7.3 82 30.7 8.5 30.7-8.5L88 6H12z" fill="#E44D26" />
          <path d="M50 13v77.2l24.7-6.8 6.2-70.4H50z" fill="#F16529" />
          <path d="M50 31.8h-16l1.1 12.3H50V31.8zm0 24.6h-7.7l-.5-6.2h-8.2l1 12.3H50v-6.1zm0 18.5l-.2.1-13.4-3.6-.9-9.8H27.3l1.7 19.3 21 5.8V74.9z" fill="#EBEBEB" />
          <path d="M50 31.8v12.3h14.9l-1.4 15.6-13.5 3.6v6.3l21-5.8 1.9-21.5.5-10.5H50zm0 30.5v-.1z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M12 6l7.3 82 30.7 8.5 30.7-8.5L88 6H12z" fill="#1572B6" />
          <path d="M50 13v77.2l24.7-6.8 6.2-70.4H50z" fill="#33A9DC" />
          <path d="M50 31.8h-16l1.1 12.3H50V31.8zm0 24.6h-7.7l-.5-6.2h-8.2l1 12.3H50v-6.1zm0 18.5l-.2.1-13.4-3.6-.9-9.8H27.3l1.7 19.3 21 5.8V74.9z" fill="#EBEBEB" />
          <path d="M50 31.8v12.3h14.9l-1.4 15.6-13.5 3.6v6.3l21-5.8 1.9-21.5.5-10.5H50zm0 30.5v-.1z" fill="#FFFFFF" />
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
      return (
        <svg viewBox="0 0 100 60" className={className}>
          <path d="M25 15c-11.7 0-18.3 5.8-20 17.5 4.2-5.8 9.2-8 15-6.6 3.3.8 5.7 3.2 8.3 5.8C32.6 36 37.3 40.8 47.5 40.8c11.7 0 18.3-5.8 20-17.5-4.2 5.8-9.2 8-15 6.6-3.3-.8-5.7-3.2-8.3-5.8C39.9 19.8 35.2 15 25 15zm27.5-15c-11.7 0-18.3 5.8-20 17.5 4.2-5.8 9.2-8 15-6.6 3.3.8 5.7 3.2 8.3 5.8C60.1 21 64.8 25.8 75 25.8c11.7 0 18.3-5.8 20-17.5-4.2 5.8-9.2 8-15 6.6-3.3-.8-5.7-3.2-8.3-5.8C67.4 4.8 62.7 0 52.5 0z" fill="#06B6D4" />
        </svg>
      );

    case 'context api':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="14" fill="#06B6D4" />
          <circle cx="20" cy="50" r="7" fill="#38BDF8" />
          <circle cx="80" cy="50" r="7" fill="#38BDF8" />
          <circle cx="50" cy="20" r="7" fill="#38BDF8" />
          <circle cx="50" cy="80" r="7" fill="#38BDF8" />
          <path d="M27 50h9M64 50h9M50 27v9M50 64v9" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'react router':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#CA4245" />
          <path d="M28 32h24a14 14 0 0 1 0 28H44v14" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M56 60l16 14" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    case 'nodejs':
    case 'node.js':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M50 10l36 20.8v41.6L50 93.2 14 72.4V30.8L50 10z" fill="#539E43" />
          <path d="M50 18l30 17.3v34.6L50 87.3 20 70V35.3L50 18z" fill="#333333" />
          <path d="M50 24l24 13.9v27.7L50 79.4 26 65.6V37.9L50 24z" fill="#539E43" />
          <circle cx="50" cy="51.6" r="8" fill="#FFFFFF" />
        </svg>
      );

    case 'express':
    case 'express.js':
      return (
        <div className={`flex items-center justify-center font-bold text-slate-800 text-2xl tracking-tighter ${className}`}>
          <span className="font-serif italic text-3xl">ex</span>
        </div>
      );

    case 'rest apis':
    case 'rest api':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#0284C7" />
          <path d="M22 50h56M62 36l16 14-16 14M38 64l-16-14 16-14" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
        </svg>
      );

    case 'jwt':
    case 'jwt authentication':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="46" fill="#000000" />
          <path d="M50 18a32 32 0 1 0 32 32A32 32 0 0 0 50 18zm0 54a22 22 0 1 1 22-22 22 22 0 0 1-22 22z" fill="#FB015B" />
          <path d="M50 28a22 22 0 0 0-22 22h44a22 22 0 0 0-22-22z" fill="#00B9F1" />
        </svg>
      );

    case 'role-based authorization':
    case 'authorization':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#4F46E5" />
          <path d="M50 20l24 9v20c0 16-10 27-24 31-14-4-24-15-24-31V29l24-9z" fill="#4338CA" stroke="#FFFFFF" strokeWidth="5" />
          <circle cx="50" cy="44" r="8" fill="#FFFFFF" />
          <path d="M38 64c0-6 5-10 12-10s12 4 12 10" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 100 120" className={className}>
          <path d="M49 118c-3-12-32-34-32-67 0-25 15-42 32-51 17 9 32 26 32 51 0 33-29 55-32 67z" fill="#47A248" />
          <path d="M49 118c0-12 1-34 1-67 0-25-1-42-1-51 17 9 32 26 32 51 0 33-29 55-32 67z" fill="#499D4A" />
          <path d="M50 1c-.3 0-.6 0-.9.1 0 0 .1 0 .2 0-1.7 4.2-3.1 9.3-4.2 15.3-2.6 13.9-3.2 30.6-2 45.4 1.3 16.3 4.8 30.7 8.2 41.5 2.1-7.8 4.5-17.5 5.5-28.9 1.1-12.8.5-26.6-1.5-38.4-1.8-10.7-3.9-209-5.3-35z" fill="#F8FAF7" opacity="0.4" />
        </svg>
      );

    case 'mongoose':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#880000" />
          <path d="M25 68V32l25 20 25-20v36" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M85 55c-2.8-8-8.2-14.8-15.2-19.4-4.2-2.8-9-4.8-14-5.8-2-.4-4-.6-6.1-.6-6.4 0-12.7 1.8-18 5.2-7.5 4.8-12.8 12.3-14.9 21-1.3 5.4-1.1 11 .6 16.3 2.1 6.5 6.4 12 12.1 15.6 4.4 2.8 9.5 4.3 14.7 4.3 5.7 0 11.3-1.9 15.8-5.4 6.4-5 10.4-12.3 11.2-20.4.4-4 .1-8-1.2-11.8z" fill="#00758F" />
          <path d="M48 22c-2.4 1.2-4.6 2.8-6.4 4.8-1.8 2-3.1 4.3-4 6.8-.9 2.5-1.2 5.1-1 7.7.2 2.6 1 5.1 2.3 7.3 1.3 2.2 3.1 4.1 5.2 5.5 2.1 1.4 4.5 2.3 7 2.7 2.5.4 5.1.3 7.6-.4 2.5-.7 4.8-1.9 6.8-3.5 2-1.6 3.6-3.6 4.6-5.9 1-2.3 1.5-4.8 1.4-7.4-.1-2.6-.8-5.1-2-7.4-1.2-2.3-2.9-4.3-5-5.8-2.1-1.5-4.5-2.5-7.1-3-3.1-.6-6.4-.3-9.4.7z" fill="#F29111" />
        </svg>
      );

    case 'sql':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#0369A1" />
          <ellipse cx="50" cy="30" rx="28" ry="10" fill="#38BDF8" />
          <path d="M22 30v20c0 5.5 12.5 10 28 10s28-4.5 28-10V30" stroke="#FFFFFF" strokeWidth="5" fill="none" />
          <path d="M22 50v20c0 5.5 12.5 10 28 10s28-4.5 28-10V50" stroke="#FFFFFF" strokeWidth="5" fill="none" />
        </svg>
      );

    case 'ai api integration':
    case 'ai':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#7C3AED" />
          <path d="M50 22l6 16 16 6-16 6-6 16-6-16-16-6 16-6 6-16z" fill="#FFFFFF" />
          <circle cx="72" cy="30" r="4" fill="#FDE047" />
          <circle cx="30" cy="68" r="4" fill="#FDE047" />
        </svg>
      );

    case 'user performance analysis':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#059669" />
          <path d="M24 74V26M24 74h52" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <path d="M34 62l14-18 12 10 16-22" stroke="#A7F3D0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="76" cy="32" r="5" fill="#FFFFFF" />
        </svg>
      );

    case 'personalized feedback':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#D97706" />
          <path d="M24 32h52a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H44l-12 10V68h-8a4 4 0 0 1-4-4V36a4 4 0 0 1 4-4z" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M50 42l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" fill="#FFFFFF" />
        </svg>
      );

    case 'c++':
    case 'cpp':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <path d="M50 6l38 22v44L50 94 12 72V28L50 6z" fill="#00599C" />
          <path d="M48 34c-9 0-16 7-16 16s7 16 16 16c6 0 11-3 14-8l-7-4c-2 3-4 4-7 4-5 0-9-4-9-8s4-8 9-8c3 0 5 1 7 4l7-4c-3-5-8-8-14-8z" fill="#FFFFFF" />
          <path d="M68 46v8M64 50h8M80 46v8M76 50h8" stroke="#659AD2" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'dsa':
    case 'data structures & algorithms':
    case 'data structures':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#2563EB" />
          <path
            d="M50 25L28 52M50 25L72 52M28 52L18 75M28 52L42 75M72 52L82 75"
            stroke="#93C5FD"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="25" r="9" fill="#FFFFFF" />
          <circle cx="28" cy="52" r="8" fill="#FFFFFF" />
          <circle cx="72" cy="52" r="8" fill="#FFFFFF" />
          <circle cx="18" cy="75" r="7" fill="#FFFFFF" />
          <circle cx="42" cy="75" r="7" fill="#FFFFFF" />
          <circle cx="82" cy="75" r="7" fill="#FFFFFF" />
          <circle cx="50" cy="25" r="4" fill="#2563EB" />
          <circle cx="28" cy="52" r="3.5" fill="#2563EB" />
          <circle cx="72" cy="52" r="3.5" fill="#2563EB" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M96.3 44.8L55.2 3.7c-3.6-3.6-9.5-3.6-13.1 0L30.9 14.8l16.5 16.5c3.9-1.3 8.3-.4 11.3 2.6 3 3 3.9 7.4 2.6 11.3l15.9 15.9c3.9-1.3 8.3-.4 11.3 2.6 4.3 4.3 4.3 11.2 0 15.5s-11.2 4.3-15.5 0c-3.3-3.3-4.1-8.2-2.3-12.3L56 46.6v23.2c1.7 1 3.2 2.5 4.1 4.3 2.8 5.4.6 12.1-4.8 14.9s-12.1.6-14.9-4.8c-2.8-5.4-.6-12.1 4.8-14.9 1.9-1 4.1-1.3 6.2-.9V45.2c-2.1.4-4.3.1-6.2-.9-3.5-1.8-5.7-5.3-5.9-9.2L22.6 18.4 3.7 37.3c-3.6 3.6-3.6 9.5 0 13.1l41.1 41.1c3.6 3.6 9.5 3.6 13.1 0l38.4-38.4c3.7-3.7 3.7-9.5 0-13.2z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M50 5C25.1 5 5 25.1 5 50c0 19.9 12.9 36.8 30.8 42.7 2.2.4 3.1-1 3.1-2.2 0-1.1-.1-4.8-.1-8.7-12.5 2.7-15.1-5.3-15.1-5.3-2-5.2-5-6.6-5-6.6-4.1-2.8.3-2.7.3-2.7 4.5.3 6.9 4.6 6.9 4.6 4 6.9 10.6 4.9 13.2 3.8.4-2.9 1.6-4.9 2.8-6.1-10-1.1-20.5-5-20.5-22.3 0-4.9 1.8-9 4.6-12.1-.5-1.1-2-5.7.4-12 0 0 3.8-1.2 12.4 4.6 3.6-1 7.5-1.5 11.3-1.5s7.7.5 11.3 1.5c8.6-5.8 12.4-4.6 12.4-4.6 2.4 6.2.9 10.8.4 12 2.9 3.2 4.6 7.2 4.6 12.1 0 17.3-10.5 21.1-20.6 22.2 1.6 1.4 3.1 4.2 3.1 8.5 0 6.1-.1 11-.1 12.5 0 1.2.8 2.6 3.1 2.2C82.1 86.8 95 69.9 95 50 95 25.1 74.9 5 50 5z" />
        </svg>
      );

    case 'vs code':
    case 'vscode':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <path d="M72 95a5 5 0 0 0 3-1l20-10a5 5 0 0 0 3-5V21a5 5 0 0 0-3-5L75 6a5 5 0 0 0-5 2L32 38 16 26a4 4 0 0 0-5 0L5 30a4 4 0 0 0 0 6l13 14L5 64a4 4 0 0 0 0 6l6 4a4 4 0 0 0 5 0l16-12 38 30a5 5 0 0 0 2 3z" fill="#007ACC" />
          <path d="M75 6l20 10v68L75 94V6z" fill="#1F9CF0" />
          <path d="M75 35L32 68l-16-12 16-12 43-9z" fill="#0065A9" opacity="0.6" />
          <path d="M75 65L32 32l-16 12 16 12 43 9z" fill="#0065A9" opacity="0.6" />
        </svg>
      );

    case 'postman':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="46" fill="#FF6C37" />
          <path d="M65 32c-3-3-8-4-12-2l-18 8a12 12 0 0 0-7 8c-1 4 0 8 3 11l4 4-2 7 7-2 4 4c3 3 7 4 11 3a12 12 0 0 0 8-7l8-18c2-4 1-9-2-12zm-8 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#FFFFFF" />
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#000000" />
          <path d="M50 22l28 48H22L50 22z" fill="#FFFFFF" />
        </svg>
      );

    case 'render':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#000000" />
          <path d="M30 65V35h20c11 0 18 6 18 15s-7 15-18 15H30zm16-10h4c5 0 8-2 8-5s-3-5-8-5h-4v10z" fill="#46E3B7" />
        </svg>
      );

    case 'cloudinary':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#3448C5" />
          <path d="M68 62H32a14 14 0 0 1-2-28 18 18 0 0 1 35-5 14 14 0 0 1 3 33z" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="6" fill="#3448C5" />
        </svg>
      );

    default:
      return null;
  }
};
