import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="availability"><span className="status-dot" /> Open to internship opportunities</div>
          <p className="hero-kicker">HELLO, I'M GAUTAM KADAM</p>
          <h1>Building intelligent<br />solutions for a <span className="gradient-text">better tomorrow.</span></h1>
          <p className="hero-description">I am a <strong>Python Developer</strong> and <strong>Full-Stack Developer</strong> passionate about building scalable web applications, developing efficient backend systems, and creating responsive, user-friendly digital experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href="#contact">Let's connect</a>
          </div>
          <div className="social-row">
            <span>Find me on</span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
            <span className="social-location">↳ {profile.location}</span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="neural-art" aria-hidden="true">
            <div className="neural-core"><Sparkles size={34} /></div>
            {Array.from({ length: 18 }, (_, i) => <span key={i} className={`neural-node node-${i + 1}`} />)}
            <svg className="neural-lines" viewBox="0 0 440 390" role="presentation">
              <path d="M60 95 L130 145 L185 75 L250 135 L325 78 L375 145 M75 250 L130 145 L205 245 L250 135 L315 260 L375 145 M130 145 L130 320 L205 245 L315 260 L355 330 M185 75 L205 245 M250 135 L355 330" />
            </svg>
          </div>
          <div className="floating-label label-model"><span className="label-icon purple">✳</span><span><b>Model Development</b><small>Learning from data</small></span></div>
          <div className="floating-label label-data"><span className="label-icon blue">⌁</span><span><b>Data Analytics</b><small>Insights to action</small></span></div>
          <div className="floating-label label-code"><span className="label-icon teal">{'</>'}</span><span><b>Full-Stack</b><small>Ideas into products</small></span></div>
          <div className="visual-caption"><span className="caption-pulse" /> Curious mind. Practical builder.</div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  )
}
