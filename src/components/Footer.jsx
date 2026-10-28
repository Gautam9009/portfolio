import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">GK<span>.</span></span><span className="brand-name">Gautam Kadam</span></a>
        <p>Designed with curiosity. Built with purpose.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Gautam Kadam</span>
      </div>
    </footer>
  )
}
