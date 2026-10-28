import { useState } from 'react'
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">GK<span>.</span></span>
          <span className="brand-name">Gautam Kadam</span>
        </a>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-mobile-resume" href={profile.resume} download>Download resume <ArrowUpRight size={15} /></a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="button button-small button-outline nav-resume" href={profile.resume} download>Resume <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
