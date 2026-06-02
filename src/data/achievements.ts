export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  issuer: string;
  year: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'dl-specialization',
    icon: '🧠',
    title: 'Deep Learning Specialization',
    description: 'Advanced deep learning, neural networks, and sequence models',
    issuer: 'DeepLearning.AI & Coursera',
    year: '2026',
  },
  {
    id: 'ds-bootcamp',
    icon: '📊',
    title: 'Data Science, ML, NLP & DL Bootcamp',
    description: 'Comprehensive bootcamp covering modern data science and AI algorithms',
    issuer: 'Udemy',
    year: '2026',
  },
  {
    id: 'unstop-fullstack',
    icon: '💻',
    title: 'Full Stack Development & Node.js Certifications',
    description: 'Professional certifications for backend development and MongoDB',
    issuer: 'Unstop',
    year: '2025',
  },
  {
    id: 'gssoc-2026',
    icon: '🌟',
    title: 'Contributor / Mentee',
    description: 'Selected as a contributor and mentee for open-source development',
    issuer: 'GirlScript Summer of Code',
    year: '2026',
  },
  {
    id: 'sih-2025',
    icon: '🥇',
    title: 'Smart India Hackathon 2025 — Qualified Round 2',
    description: 'National-level innovation challenge for real-world problem solving',
    issuer: 'Government of India',
    year: '2025',
  },
  {
    id: 'ey-techathon',
    icon: '🚀',
    title: 'EY Techathon 6.0 — Qualified Round 2',
    description: 'Technology innovation and business problem solving challenge',
    issuer: 'Ernst & Young',
    year: '2024',
  },
  {
    id: 'sports-gold',
    icon: '🏅',
    title: 'Gold Medalist',
    description: 'First place finish at the College Annual Sports Meet',
    issuer: 'VIIT Pune',
    year: '2025',
  },
];
