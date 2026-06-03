export const techStack = [
  'Flutter',
  'Dart',
  'Firebase',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'GSAP',
  'JavaScript',
  'TypeScript',
  'Git',
  'GitHub',
  'Figma',
  'Riverpod',
] as const

export type SkillFilter = 'Mobile' | 'Web' | 'Tooling' | 'Design'

export const skillFilters: { id: SkillFilter; skills: { name: string; level: number }[] }[] = [
  {
    id: 'Mobile',
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'Dart', level: 92 },
      { name: 'Riverpod', level: 88 },
      { name: 'Firebase', level: 90 },
    ],
  },
  {
    id: 'Web',
    skills: [
      { name: 'React', level: 93 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Node.js', level: 87 },
    ],
  },
  {
    id: 'Tooling',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 88 },
      { name: 'GSAP', level: 86 },
      { name: 'MongoDB', level: 84 },
      { name: 'Express.js', level: 85 },
    ],
  },
  {
    id: 'Design',
    skills: [
      { name: 'Figma', level: 91 },
      { name: 'UI Systems', level: 89 },
      { name: 'Prototyping', level: 87 },
      { name: 'Motion Design', level: 85 },
    ],
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years building' },
  { value: 24, suffix: '', label: 'Shipped projects' },
  { value: 16, suffix: '', label: 'Technologies' },
  { value: 1240, suffix: '', label: 'Cups of coffee' },
]
