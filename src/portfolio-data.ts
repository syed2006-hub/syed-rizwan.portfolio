export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", handle: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", handle: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/", handle: "x" },
  { label: "Email", href: "mailto:hello@syedrizwan.dev", handle: "mail" },
];

export const ROLES = [
  "Flutter Developer",
  "MERN Stack Developer",
  "UI / UX Designer",
];

export const STATS = [
  { label: "Years building", value: 3, suffix: "+" },
  { label: "Shipped projects", value: 24, suffix: "" },
  { label: "Technologies", value: 16, suffix: "" },
  { label: "Cups of coffee", value: 1240, suffix: "" },
];

export const TIMELINE = [
  {
    year: "2022",
    title: "First lines of code",
    body: "Discovered programming through a curiosity for design systems and product craft.",
  },
  {
    year: "2023",
    title: "Flutter & Firebase",
    body: "Shipped my first cross-platform apps. Fell in love with declarative UI and motion.",
  },
  {
    year: "2024",
    title: "Full-stack with MERN",
    body: "Expanded into the web — React, Node, Mongo. Built real products end-to-end.",
  },
  {
    year: "2025",
    title: "Internships & hackathons",
    body: "Joined IBM and Altruisty as an intern; won recognition at national hackathons.",
  },
];

export const EXPERIENCE = [
  {
    company: "IBM",
    role: "Software Engineer Intern",
    period: "2025",
    summary:
      "Successfully built a Zoho-style Payroll Management System using the MERN stack, delivering a complete full-stack solution with enterprise-level features.",
    tags: ["React", "JavaScript", "Deployment"],
    certificate:
      "https://res.cloudinary.com/dzg4kohus/image/upload/v1773336449/IBM_sirxkd.png",
  },
  {
    company: "Altruisty",
    role: "Full-Stack Intern",
    period: "2024",
    summary:
      "Learned MERN stack development and created multiple MERN projects, gaining hands-on experience with full-stack web applications.",
    tags: ["MERN", "MongoDB", "Express"],
    certificate:
      "https://res.cloudinary.com/dzg4kohus/image/upload/v1773336646/altruisty_o1plqq.jpg",
  },
  {
    company: "National Hackathon",
    role: "Finalist · Product Track",
    period: "2024",
    summary:
      'Developed the "Career Clarity Companion" using Flutter and Firebase, achieving 3rd prize by building an AI-driven career guidance tool.',
    tags: ["Flutter", "Firebase", "Team Lead"],
    certificate:
      "https://res.cloudinary.com/dzg4kohus/image/upload/v1773336768/imapactathon_ht7hhr.jpg",
  },
];

 
export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: string;
  gradient: string;
  accent: string;
  live?: string;
  code?: string;
  stats: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    name: "Club Zen",
    tagline: "Mindful community app",
    description:
      "A serene social space for meditation groups — sessions, journals, and quiet check-ins.",
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    category: "Mobile",
    gradient: "linear-gradient(135deg,#1a1a1a,#3a3a3a 60%,#0a0a0a)",
    accent: "#e8e4dd",
    stats: [
      { label: "Users", value: "2.4k" },
      { label: "Rating", value: "4.8" },
    ],
  },
  {
    name: "PayrollPro",
    tagline: "Payroll, simplified",
    description:
      "An end-to-end payroll platform with payslip generation, tax math, and audit history.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: "Web · SaaS",
    gradient: "linear-gradient(135deg,#0f1b3d,#1e3a5f 55%,#0a1530)",
    accent: "#cfe0ff",
    stats: [
      { label: "Companies", value: "38" },
      { label: "Payslips", value: "12k+" },
    ],
  },
  {
    name: "C Cube",
    tagline: "Learn C, visually",
    description:
      "Interactive lessons that animate memory, pointers and recursion as you scroll.",
    stack: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    category: "Edu · Web",
    gradient: "linear-gradient(135deg,#2b1a0d,#5c3a1c 60%,#1a0f06)",
    accent: "#f1c98b",
    stats: [
      { label: "Lessons", value: "42" },
      { label: "Learners", value: "5k" },
    ],
  },
  {
    name: "Trendera",
    tagline: "Fashion discovery",
    description:
      "A fashion discovery feed with personalised drops and editorial storytelling.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg,#3a0d1f,#7a2244 60%,#1a0510)",
    accent: "#ffd1de",
    stats: [
      { label: "Brands", value: "120" },
      { label: "Drops/wk", value: "30" },
    ],
  },
  {
    name: "Logo Studio",
    tagline: "AI-assisted brand marks",
    description:
      "A canvas-based studio for crafting refined logo lockups with smart spacing and grids.",
    stack: ["Next.js", "TypeScript", "Canvas", "Tailwind"],
    category: "Design · Tool",
    gradient: "linear-gradient(135deg,#0d2b2a,#1f5a55 60%,#06181a)",
    accent: "#aef2e6",
    stats: [
      { label: "Marks", value: "780" },
      { label: "Studios", value: "12" },
    ],
  },
  {
    name: "Vibrant Dance Studio",
    tagline: "Studio + class booking",
    description:
      "A cinematic site for a dance studio with class schedules, reels, and online enrolment.",
    stack: ["React", "Firebase", "Framer Motion"],
    category: "Marketing · Web",
    gradient: "linear-gradient(135deg,#2d0a3a,#7c2bc4 55%,#11041a)",
    accent: "#e8c7ff",
    stats: [
      { label: "Classes", value: "60+" },
      { label: "Bookings", value: "3.1k" },
    ],
  },
  {
    name: "SkyCast",
    tagline: "Weather, beautifully",
    description:
      "A minimalist weather app with depth-based glass cards and ambient gradients.",
    stack: ["Flutter", "Dart", "OpenWeather API"],
    category: "Mobile",
    gradient: "linear-gradient(135deg,#0a1b2b,#1d4b7a 60%,#04101c)",
    accent: "#bde2ff",
    stats: [
      { label: "Cities", value: "200+" },
      { label: "Updates/h", value: "60" },
    ],
  },
  {
    name: "Tic Tac Toe",
    tagline: "AI opponent · Pure JS",
    description:
      "A polished take on a classic — minimax AI, haptic feedback, and elegant motion.",
    stack: ["JavaScript", "HTML", "CSS"],
    category: "Game · Web",
    gradient: "linear-gradient(135deg,#1c1c1c,#3a3a3a 60%,#0a0a0a)",
    accent: "#f1efea",
    stats: [
      { label: "Win rate", value: "72%" },
      { label: "Modes", value: "3" },
    ],
  },
];

export type Skill = { name: string; category: "Mobile" | "Web" | "Tooling" | "DevOps" | "Design"; level: number };

export const SKILLS: Skill[] = [
  { name: "Flutter", category: "Mobile", level: 92 },
  { name: "Dart", category: "Mobile", level: 90 },
  { name: "Firebase", category: "Mobile", level: 85 },
  { name: "Riverpod", category: "Mobile", level: 80 },
  { name: "React", category: "Web", level: 92 }, 
  { name: "Node.js", category: "Web", level: 84 },
  { name: "Express.js", category: "Web", level: 82 },
  { name: "MongoDB", category: "Web", level: 80 },
  { name: "Tailwind CSS", category: "Web", level: 94 }, 
  { name: "JavaScript", category: "Web", level: 92 },
  { name: "GSAP", category: "Tooling", level: 82 },
  { name: "Git", category: "Tooling", level: 90 },
  { name: "GitHub", category: "Tooling", level: 90 },
    { name: "Vercel", category: "DevOps", level: 94 },
  { name: "GitHub Pages", category: "DevOps", level: 88 },
  { name: "TanStack", category: "DevOps", level: 83 },
  { name: "Render", category: "DevOps", level: 85 },
  { name: "Figma", category: "Design", level: 88 },
];
