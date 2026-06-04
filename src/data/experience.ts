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

 