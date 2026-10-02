import express from 'express';

const router = express.Router();

const skillsData = [
  // FRONTEND
  { name: 'React.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Context API', category: 'Frontend' },
  { name: 'React Router', category: 'Frontend' },

  // BACKEND
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Backend' },
  { name: 'Role-Based Authorization', category: 'Backend' },

  // DATABASE
  { name: 'MongoDB', category: 'Database' },
  { name: 'Mongoose', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQL', category: 'Database' },

  // AI
  { name: 'AI API Integration', category: 'AI' },
  { name: 'User Performance Analysis', category: 'AI' },
  { name: 'Personalized Feedback', category: 'AI' },

  // PROGRAMMING
  { name: 'C++', category: 'Programming' },
  { name: 'DSA', category: 'Programming' },

  // TOOLS
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'Render', category: 'Tools' },
  { name: 'Cloudinary', category: 'Tools' },
];

router.get('/', (req, res) => {
  const { category } = req.query;
  const filtered = category
    ? skillsData.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    : skillsData;

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
});

export default router;
