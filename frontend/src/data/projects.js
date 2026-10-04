import taraTypingImg from '../assets/tara-typing.png';
import shopnexImg from '../assets/shopnex.png';
import expenseTrackerImg from '../assets/expense-tracker.png';

export const projectsData = [
  {
    id: 'tara-typing',
    title: 'Tara Typing',
    subtitle: 'AI-Powered Touch Typing & Learning Platform',
    description:
      'A full-stack typing and learning platform with real-time performance tracking, daily challenges, leaderboards, user profiles, structured lessons, and AI-powered personalized feedback.',
    image: taraTypingImg,
    tags: [
      { name: 'React', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      { name: 'Node.js', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { name: 'Express.js', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
      { name: 'MongoDB', bg: 'bg-green-50 text-green-700 border-green-200' },
      { name: 'Tailwind CSS', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
      { name: 'JWT', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
      { name: 'AI', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    ],
    features: [
      'Typing Tests',
      'Real-time Analytics',
      'Daily Challenges',
      'Leaderboards',
      'User Profiles',
      'AI-powered Feedback',
    ],
    liveUrl: 'https://tara-typing.vercel.app/',
    githubUrl: 'https://github.com/aman-gupt1/tara-typing',
    featured: true,
  },
  {
    id: 'shopnex',
    title: 'ShopNex',
    subtitle: 'Full-Stack MERN E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product browsing, search, cart management, JWT authentication, Razorpay payments, order processing, and an admin panel.',
    image: shopnexImg,
    tags: [
      { name: 'React', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      { name: 'Node.js', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { name: 'Express.js', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
      { name: 'MongoDB', bg: 'bg-green-50 text-green-700 border-green-200' },
      { name: 'Tailwind CSS', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
      { name: 'JWT', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
      { name: 'Razorpay', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
    ],
    features: [
      'Product Browsing',
      'Search',
      'Cart Management',
      'Authentication',
      'Razorpay Payments',
      'Admin Panel',
      'Order Management',
    ],
    liveUrl: 'https://shop-nex-e-commerce-mern.vercel.app/',
    githubUrl: 'https://github.com/aman-gupt1/ShopNex-E-Commerce-MERN',
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'ExpenseTracker',
    subtitle: 'Modern SaaS Personal Finance & Wealth Analytics',
    description:
      'A high-performance financial command center built with the MERN stack. Features real-time cashflow visibility, dynamic Recharts donut HUD, budget threshold alerts, multi-currency engine ($, ₹, €, £), one-click Excel (.xlsx) export, and a zero-friction guest sandbox.',
    image: expenseTrackerImg,
    tags: [
      { name: 'React 19', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      { name: 'Node.js', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      { name: 'Express.js', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
      { name: 'MongoDB', bg: 'bg-green-50 text-green-700 border-green-200' },
      { name: 'Tailwind CSS', bg: 'bg-sky-50 text-sky-700 border-sky-200' },
      { name: 'Recharts', bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { name: 'Framer Motion', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
      { name: 'JWT Auth', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
      { name: 'ExcelJS', bg: 'bg-teal-50 text-teal-700 border-teal-200' },
    ],
    features: [
      'Executive Dashboard & Donut HUD',
      'Real-Time Cash Velocity & Analytics',
      'Budget Utilization Meters & Alerts',
      'Global Multi-Currency ($, ₹, €, £)',
      'One-Click Excel (.xlsx) Export',
      'Interactive Calendar & Presets',
      'Secure JWT Auth & Guest Sandbox',
    ],
    liveUrl: 'https://aman-expensetracker.vercel.app/',
    githubUrl: 'https://github.com/aman-gupt1/Expense-Tracker',
    featured: true,
  },
];
