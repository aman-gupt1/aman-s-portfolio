import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);

    const scrollToSection = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 70;
        const bodyTop = document.body.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementTop - bodyTop - navOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        setActiveSection(targetId);
      }
    };

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none py-3 lg:py-5 border-b lg:border-b-0 border-slate-100'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo: AG Monogram Only */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Aman Gupta Portfolio Home"
            className="group cursor-pointer shrink-0 transition-transform active:scale-95"
          >
            {/* Stylish Monogram Logo Badge */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm sm:text-base tracking-wider shadow-sm shadow-blue-500/25 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-500/35 transition-all duration-200 select-none">
              AG
            </div>
          </a>

          {/* Desktop Nav Links (Visible on >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium transition-all duration-200 py-1 hover:-translate-y-0.5 ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume CTA Button (Visible on >= 1024px) */}
          <div className="hidden lg:flex items-center">
            <a
              href="/aman-gupta-resume.pdf"
              download="Aman_Gupta_Resume.pdf"
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Mobile & Tablet Actions (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="/aman-gupta-resume.pdf"
              download="Aman_Gupta_Resume.pdf"
              className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 active:scale-95 rounded-lg transition-all"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 px-3">
                <a
                  href="/aman-gupta-resume.pdf"
                  download="Aman_Gupta_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
