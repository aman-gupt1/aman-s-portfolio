import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { SocialLinks, LinkedInIcon, GitHubIcon, LeetCodeIcon } from '../components/SocialLinks';
import { personalInfo } from '../data/about';
import { sendContactMessage } from '../services/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [showInlineForm, setShowInlineForm] = useState(true);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject.trim() || 'Portfolio Inquiry',
        message: formData.message,
      };
      const res = await sendContactMessage(payload);
      if (res.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory confetti
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: res.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Network error. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#FAFBFC] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
              CONTACT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
            I'm always open to discussing new opportunities, interesting projects or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact Content: 2-Column Inline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Individual Info Cards (Left Column - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5"
          >
            {/* 1. Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white rounded-2xl p-4.5 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/80 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* 2. Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="bg-white rounded-2xl p-4.5 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/80 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  {personalInfo.phone}
                </div>
              </div>
            </a>

            {/* 3. Location Card */}
            <div className="bg-white rounded-2xl p-4.5 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/80 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-xs">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Location</div>
                <div className="text-sm font-semibold text-slate-900 truncate">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* 4. Social Links Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-200 group">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 text-xs font-semibold shadow-2xs hover:shadow-xs group/btn cursor-pointer"
                >
                  <LinkedInIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                  <span className="truncate">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100/90 border border-slate-200/90 text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 text-xs font-semibold shadow-2xs hover:shadow-xs group/btn cursor-pointer"
                >
                  <GitHubIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                  <span className="truncate">GitHub</span>
                </a>

                {/* LeetCode */}
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 hover:bg-amber-100 hover:border-amber-400 transition-all duration-200 text-xs font-semibold shadow-2xs hover:shadow-xs group/btn cursor-pointer"
                >
                  <LeetCodeIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                  <span className="truncate">LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Real Functional MERN Contact Form (Right Column - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Send a Message</h3>
            </div>

            {/* Status Alert */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-3 rounded-xl mb-3 text-xs sm:text-sm flex items-center gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
              {/* Row 1: Name & Email Inline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-0.5">
                    Your Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-3 py-1.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none ${
                      formErrors.name
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                        : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-rose-500 mt-0.5">{formErrors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-0.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@example.com"
                    className={`w-full px-3 py-1.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none ${
                      formErrors.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                        : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-500 mt-0.5">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Subject Starts on New Line */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-0.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject ..."
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all duration-200 focus:outline-none"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-0.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Drop msg here..."
                  className={`w-full px-3.5 py-1.5 rounded-xl border text-sm transition-all duration-200 focus:outline-none resize-none h-[56px] sm:h-[60px] ${
                    formErrors.message
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-500 mt-0.5">{formErrors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-0.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
