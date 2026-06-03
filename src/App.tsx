import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import { PageProgress } from './components/layout/PageProgress'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'
import { Background } from './components/three/bganimation'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useLenis()

  useEffect(() => {
    document.documentElement.classList.add('lenis')
    return () => document.documentElement.classList.remove('lenis')
  }, [])

  return (
    <>
      <Background />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <PageProgress />
      <Navbar />
      
      <main id="main-content" className="noise">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
