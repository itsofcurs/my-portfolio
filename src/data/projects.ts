export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  year: string;
  featured: boolean;
  image?: string;
  link?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'multilingual-ai-call-analytics',
    title: 'Multilingual AI Call Analytics & Compliance System',
    description:
      'Built a privacy-compliant multilingual call analytics platform supporting Hindi & Tamil using Whisper transcription, NLP pipelines, and LLM-based summarization. Developed REST APIs for real-time transcription, SOP compliance validation, sensitive payment data categorization, and automated reporting. Integrated real-time audio processing and analytics dashboards while ensuring regulatory data privacy and audit readiness.',
    tags: ['Python', 'Whisper', 'NLP', 'LLMs', 'REST APIs'],
    category: 'AI',
    year: '2024',
    featured: true,
    github: 'https://github.com/itsofcurs',
    image: '/projects/call-analytics.png',
  },
  {
    id: 'ai-emergency-response',
    title: 'AI-Enabled Emergency Response System',
    description:
      'Engineered a real-time coordination platform using React.js, Node.js, PostgreSQL, Redis & Socket.IO for ambulance tracking and multi-agency collaboration. Implemented secure data flows, authentication, and event-driven architecture for handling sensitive incident information. Designed scalable backend ensuring low-latency response in critical, high-stakes environments.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.IO'],
    category: 'FULL STACK',
    year: '2024',
    featured: true,
    github: 'https://github.com/itsofcurs',
    image: '/projects/emergency-response.png',
  },
  {
    id: 'talent-ai',
    title: 'TalentAI – Semantic Recruitment Intelligence Platform',
    description:
      'Developed an AI-powered ATS resume analyzer using NLP and Generative AI (LLM orchestration) for intelligent scoring, skill-gap analysis, and candidate ranking. Implemented multi-step agentic workflows for generating role-specific interview questions and personalized feedback using Python & LLM APIs. Built responsive full-stack dashboards enabling real-time resume analysis and insights.',
    tags: ['Python', 'LLMs', 'NLP', 'Generative AI', 'React'],
    category: 'AI',
    year: '2024',
    featured: true,
    github: 'https://github.com/itsofcurs',
    image: 'https://placehold.co/800x600/131313/4dffdf?text=TalentAI',
  },
  {
    id: 'quantum-traffic-optimization',
    title: 'Quantum Traffic Signal Optimization Dashboard',
    description:
      "Built an industry-level dashboard for optimizing urban traffic flow using Quantum Grover's Algorithm. Developed a FastAPI backend leveraging Qiskit to run amplitude amplification simulations, achieving quadratic speedup over classical search for signal timing allocation. Integrated interactive real-time traffic density sliders and a dynamic React-based visualization interface demonstrating quantum state phase interference and probability amplification.",
    tags: ['Python', 'FastAPI', 'Qiskit', 'React'],
    category: 'QUANTUM COMPUTING',
    year: '2024',
    featured: false,
    github: 'https://github.com/itsofcurs/Qc-project'
  }
];

export const categories = ['ALL', 'AI', 'FULL STACK', 'DATA', 'ML', 'QUANTUM COMPUTING'] as const;
export type Category = (typeof categories)[number];
