export interface ExperienceItem {
  id: string
  org: string
  role: string
  year: string
  initials: string
  description: string
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'ibm',
    org: 'IBM',
    role: 'Software Engineer Intern',
    year: '2024',
    initials: 'IB',
    description:
      'Contributed to enterprise tooling in agile sprints — production features, code reviews, and CI pipelines.',
    tags: ['React', 'TypeScript', 'Cloud'],
  },
  {
    id: 'altruisty',
    org: 'Altruisty',
    role: 'Full Stack Developer Intern',
    year: '2023',
    initials: 'AL',
    description:
      'Built MERN applications with REST APIs and optimized MongoDB queries for client dashboards.',
    tags: ['MERN', 'MongoDB', 'Express'],
  },
  {
    id: 'hackathon',
    org: 'Hackathon',
    role: 'Winner — Regional Tech',
    year: '2023',
    initials: 'HK',
    description:
      'Led a team to ship a working prototype in 24 hours — top prize for innovation and execution.',
    tags: ['Leadership', 'Prototyping', 'Pitch'],
  },
]

export const certificates = [
  { id: 'ibm-cert', title: 'IBM Professional Certificate', issuer: 'IBM', year: '2024' },
  { id: 'flutter-cert', title: 'Flutter Development', issuer: 'Google', year: '2023' },
  { id: 'mern-cert', title: 'MERN Stack Specialization', issuer: 'Coursera', year: '2023' },
  { id: 'ui-cert', title: 'UI/UX Design Fundamentals', issuer: 'Figma', year: '2023' },
]
