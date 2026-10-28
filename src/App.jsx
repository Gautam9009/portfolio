import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionHeading from './components/SectionHeading'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function About() {
  return (
    <section className="section-shell section-block about-section" id="about">
      <div className="container about-grid">
        <div className="about-intro">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>I like solving problems<br />that <span className="gradient-text">matter.</span></>} />
        </div>
        <div className="about-content">
          <p className="about-lead">I'm a Computer Science student interested in the space where intelligent systems meet thoughtful product design.</p>
          <p>I enjoy exploring data, building web experiences, and turning concepts into working prototypes. My approach is to stay curious, learn the fundamentals, and keep improving through hands-on projects.</p>
          <div className="about-stats">
            <div><strong>AI + Web</strong><span>My intersection</span></div>
            <div><strong>Build → Learn</strong><span>My process</span></div>
            <div><strong>Team-first</strong><span>My mindset</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  return (
    <div className="app-root">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
