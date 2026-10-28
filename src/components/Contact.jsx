import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [ready, setReady] = useState(false)

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
    setReady(false)
  }

  function submit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all three fields.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setReady(true)
  }

  return (
    <section className="section-shell section-block contact-section" id="contact">
      <div className="container">
        <SectionHeading eyebrow="GET IN TOUCH" title="Have an idea? Let's talk." description="Interested in collaborating, building something useful, or discussing an opportunity? Send me a message." />
        <div className="contact-grid">
          <motion.div className="contact-copy" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="contact-highlight"><span className="contact-highlight-icon"><Mail size={20} /></span><div><small>EMAIL ME AT</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div><ArrowUpRight size={17} /></div>
            <div className="contact-detail"><MapPin size={18} /><span>{profile.location}</span></div>
            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            </div>
            <div className="contact-note"><span className="note-spark">✳</span><p>Good conversations often lead to great projects. I'm always happy to connect with curious people.</p></div>
          </motion.div>
          <motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="form-heading"><h3>Send a message</h3><span>I'll get back to you soon.</span></div>
            <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" autoComplete="name" /></label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@example.com" autoComplete="email" /></label>
            <label>What would you like to discuss?<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Tell me a little about your idea..." /></label>
            {error && <p className="form-error">{error}</p>}
            {ready && <p className="form-success"><CheckCircle2 size={16} /> Your email app should open with the message drafted.</p>}
            <button className="button button-primary form-submit" type="submit">Prepare email <Send size={16} /></button>
            <p className="form-footnote">This form opens your default email app; it does not send data to a server.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
