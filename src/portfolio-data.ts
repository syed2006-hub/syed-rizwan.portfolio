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
  { label: "Shipped projects", value: 15, suffix: "+" },
  { label: "Technologies", value: 16, suffix: "" }, 
];

export const TIMELINE = [
  {
    year: "2023",
    title: "First lines of code",
    body: "Discovered programming through a curiosity for design systems and product craft.",
  },
  {
    year: "2024",
    title: "Flutter & Firebase",
    body: "Shipped my first cross-platform apps. Fell in love with declarative UI and motion.",
  },
  {
    year: "2025",
    title: "Full-stack with MERN",
    body: "Expanded into the web — React, Node, Mongo. Built real products end-to-end.",
  },
  {
    year: "2025 -2026",
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
