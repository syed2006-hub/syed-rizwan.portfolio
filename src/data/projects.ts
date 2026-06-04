export interface Project {
  id: string
  title: string
  description: string
  desc: string
  stack: string[]
  stats: { label: string; value: string }[]
  gradient: string
  accent: string

  img: string
  url: string
  type: 'web' | 'download'
  isVideo?: boolean
}

export const projects: Project[] = [
  {
    id: 'club-zen',
    title: 'Club Zen',
    description:
      'Campus club & event management platform for seamless student engagement.',
    desc: `Club Zen is a comprehensive campus engagement and event management platform built using Flutter and Firebase. It enables students to discover, register, and participate in events seamlessly.

The platform includes secure authentication, real-time notifications, digital ticketing, and role-based admin controls for managing events and registrations efficiently.`,
    stack: ['Flutter', 'Firebase', 'Riverpod'],
    stats: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Features', value: '20+' },
    ],
        gradient: 'from-violet-950 via-purple-900 to-fuchsia-950',

    accent: '#eea5ff',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1773344449/7_g9x1su.png',
    url: 'https://drive.usercontent.google.com/download?id=1Gun4GVRHYNiQ0gq3VJk8tTKChnirlwCe&export=download&authuser=0',
    type: 'download',
  },

  {
    id: 'c-cube',
    title: 'C Cube',
    description:
      'AI-powered career guidance platform with personalized learning paths.',
    desc: `C Cube is an AI-powered career guidance platform built using Flutter, Firebase, and RapidAPI. It helps students choose career paths by offering personalized recommendations for courses, internships, and projects.

It includes Google authentication, domain-based access control, and leaderboard systems for engagement.`,
    stack: ['Flutter', 'Firebase', 'RapidAPI'],
    stats: [ 
      
      { label: 'Integration', value: 'AI' },
      { label: 'Prize', value: '3rd' },
    ],
gradient: "from-[#2a1a14] via-[#6b4a3a] to-[#d2a679]",
    accent: '#8b5cf6',
    img: 'https://res.cloudinary.com/dzg4kohus/video/upload/v1768329811/c_cube_model_vedio_whqda9.mp4',
    url: 'https://drive.google.com/uc?export=download&id=1jUnoRFTb3iUhQhTC5kdgZS8E9CuCMD15',
    type: 'download',
    isVideo: true,
  },

  {
    id: 'trendera',
    title: 'Trendera',
    description:
      'AI-powered fashion eCommerce app with smart product discovery.',
    desc: `Trendera is a full-stack eCommerce application built using Flutter and Firebase. It integrates AI-based image search using Gemini API for smarter product discovery.

The app includes authentication, role-based access, and a complete shopping experience.`,
    stack: ['Flutter', 'Firebase', 'Gemini AI'],
    stats: [
      
      { label: 'Search', value: 'Image Based' },
      { label: 'Templates', value: '30+' }, 
    ],
  gradient: "from-[#06261f] via-[#0f4c4c] to-[#6ee7d2]",
    accent: '#f43f5e',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1768329789/2_cav9yf.png',
    url: 'https://drive.google.com/uc?export=download&id=1Myk57JQdz9AY3VfLom74Mtp-mD5qMIoy',
    type: 'download',
  },

  {
    id: 'payrollpro',
    title: 'PayrollPro',
    description:
      'Enterprise payroll system with automation and secure dashboards.',
    desc: `PayrollPro is an enterprise-grade payroll management system with automated salary processing, compliance handling, and employee dashboards.

It supports role-based access, payroll analytics, PF/ESI automation, and secure document handling.`,
    stack: ['React', 'Node.js', 'MongoDB'],
    stats: [
      { label: 'Modules', value: '12+' },
      { label: 'Uptime', value: '99.9%' },
    ],
gradient: "from-[#050b1a] via-[#0f2a4a] to-[#38bdf8]",
    accent: '#3b82f6',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1773336399/payroll_uheged.png',
    url: 'https://payrollpro-eight.vercel.app/',
    type: 'web',
  },

  {
    id: 'logo-studio',
    title: 'Logo Studio',
    description:
      'AI logo design and originality detection platform.',
    desc: `Logo Studio is a web-based branding tool that allows users to create logos and verify originality using pixel-based analysis.

It also includes a dashboard for user activity tracking and design management.`,
    stack: ['React', 'GSAP', 'Tailwind'],
    stats: [
      { label: 'Logo Detection', value: '100+' },
      { label: 'Time Reduction', value: '10%' },
    ],
    gradient: 'from-amber-950 via-orange-900 to-yellow-950',
    accent: '#f59e0b',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1768329791/5_htuidl.png',
    url: 'https://syed2006-hub.github.io/logo_studio_app/',
    type: 'web',
  },

  {
    id: 'vibrant-dance',
    title: 'Vibrant Dance Studio',
    description:
      'Professional dance academy website with booking and showcase system.',
    desc: `A client-based website for a dance academy showcasing classes, instructors, and choreography.

It includes enquiry management and social integration for better engagement.`,
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    stats: [
      { label: 'Classes', value: '30+' },
      { label: 'Instructors', value: '12' },
    ],
    gradient: 'from-indigo-950 via-violet-900 to-blue-950',
    accent: '#d946ef',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1768329791/4_pow0xu.png',
    url: 'https://syed2006-hub.github.io/vibrant_dance_academy/',
    type: 'web',
  },

  {
    id: 'skycast',
    title: 'SkyCast',
    description:
      'Modern weather forecasting app with real-time updates.',
    desc: `SkyCast is a Flutter weather application using OpenWeather API to provide real-time forecasts, location-based weather, and detailed analytics.

It focuses on clean UI and accurate weather reporting.`,
    stack: ['Flutter', 'OpenWeather', 'Dart'],
    stats: [
      { label: 'Cities', value: 'Global' },
      { label: 'Features', value: '7-day forecast' },
    ],
gradient: "from-[#050505] via-[#1a1a1a] to-[#6b6b6b]",    accent: '#0ea5e9',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1768329791/3_bexmsl.png',
    url: 'https://drive.usercontent.google.com/u/0/uc?id=1-PPtJo9Vf8eiDiJc8erf9ZWKx4_Hr7V0&export=download',
    type: 'download',
  },

  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description:
      'Advanced Flutter game with AI and animations.',
    desc: `A Flutter-based game featuring AI opponent, score tracking, and smooth animations.

Built with clean state management and optimized game logic.`,
    stack: ['Flutter', 'Dart'],
    stats: [
      { label: 'Recogonization', value: 'Pattern' },
      { label: 'Modes', value: '3' },
    ],
        gradient: 'from-fuchsia-950 via-pink-900 to-rose-950',

    accent: '#6366f1',
    img: 'https://res.cloudinary.com/dzg4kohus/image/upload/v1768329796/1_w0hdor.png',
    url: 'https://drive.google.com/uc?export=download&id=12P1wkMAvSnJuC-VKKG2QzlKubjOu6e8-',
    type: 'download',
  },
]