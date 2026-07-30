export interface Skill {
  name: string;
}

export interface Domain {
  id: string;
  label: string;
  fullName: string;
  skills: Skill[];
  position: { x: number; y: number }; // Percentage-based positioning
}

export interface Connection {
  from: string;
  to: string;
}

export const domains: Domain[] = [
  {
    id: 'languages',
    label: 'LANGUAGES',
    fullName: 'Programming Languages',
    position: { x: 20, y: 18 },
    skills: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'C++' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'ai-agents',
    label: 'AI / AGENTS',
    fullName: 'AI/ML & Agents',
    position: { x: 75, y: 15 },
    skills: [
      { name: 'LangChain' },
      { name: 'LLM Orchestration' },
      { name: 'Generative AI' },
      { name: 'NLP' },
      { name: 'Deepgram Nova-2' },
      { name: 'RAG' },
      { name: 'Multi-Agent Workflows' },
    ],
  },
  {
    id: 'frontend',
    label: 'FRONTEND',
    fullName: 'Frontend Development',
    position: { x: 18, y: 52 },
    skills: [
      { name: 'React.js' },
      { name: 'TailwindCSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    fullName: 'Backend & APIs',
    position: { x: 72, y: 48 },
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
      { name: 'Event-Driven Arch' },
    ],
  },
  {
    id: 'databases-realtime',
    label: 'DATA / REALTIME',
    fullName: 'Databases & Real-Time',
    position: { x: 25, y: 84 },
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'WebSockets' },
      { name: 'Socket.IO' },
    ],
  },
  {
    id: 'privacy',
    label: 'PRIVACY',
    fullName: 'Privacy & Security',
    position: { x: 73, y: 82 },
    skills: [
      { name: 'Data Privacy' },
      { name: 'Compliance Systems' },
      { name: 'SOP Validation' },
      { name: 'Sensitive Data' },
      { name: 'Audit Workflows' },
    ],
  },
];

// Connections between related clusters (for SVG lines)
export const connections: Connection[] = [
  { from: 'languages', to: 'ai-agents' },
  { from: 'languages', to: 'backend' },
  { from: 'frontend', to: 'backend' },
  { from: 'backend', to: 'databases-realtime' },
  { from: 'ai-agents', to: 'privacy' },
  { from: 'backend', to: 'privacy' },
  { from: 'databases-realtime', to: 'privacy' },
];
