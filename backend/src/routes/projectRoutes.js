import express from 'express';

const router = express.Router();

const projectsData = [
  {
    id: 'tara-typing',
    title: 'Tara Typing',
    subtitle: 'AI-Powered Touch Typing & Learning Platform',
    description:
      'A full-stack typing and learning platform with real-time performance tracking, daily challenges, leaderboards, user profiles, structured lessons, and AI-powered personalized feedback.',
    liveUrl: 'https://tara-typing.vercel.app/',
    githubUrl: 'https://github.com/aman-gupt1/tara-typing',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'AI'],
    featured: true,
  },
  {
    id: 'shopnex',
    title: 'ShopNex',
    subtitle: 'Full-Stack MERN E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product browsing, search, cart management, JWT authentication, Razorpay payments, order processing, and an admin panel.',
    liveUrl: 'https://shop-nex-e-commerce-mern.vercel.app/',
    githubUrl: 'https://github.com/aman-gupt1/ShopNex-E-Commerce-MERN',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Razorpay'],
    featured: true,
  },
];

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: projectsData.length,
    data: projectsData,
  });
});

export default router;
