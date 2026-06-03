# Syed Rizwan A — Premium 3D Portfolio

Ultra-modern developer portfolio built with React, Vite, Three.js, GSAP, Framer Motion, and Lenis smooth scroll.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Three.js / React Three Fiber / Drei
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scroll
- EmailJS (contact form)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## EmailJS setup

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Copy `.env.example` to `.env` and fill in your keys:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

3. Ensure your template uses fields: `name`, `email`, `message`.

## Build

```bash
npm run build
npm run preview
```

## Customize

- Update social links in `src/data/social.ts`
- Edit projects in `src/data/projects.ts`
- Adjust experience in `src/data/experience.ts`

## Performance

3D scenes are lazy-loaded. For Lighthouse 95+, deploy with compression (Vercel/Netlify) and replace placeholder social URLs with real links.
