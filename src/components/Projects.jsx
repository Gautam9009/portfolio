import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card accent-${project.accent}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
      <div className="project-topline"><span>{project.number} / FEATURED PROJECT</span><span className="project-symbol">{project.icon}</span></div>
      <div className="project-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-window-bar"><i /><i /><i /><span>{project.category}</span></div>
          <div className="art-content">
            <div className="art-chart"><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="art-side"><b /><b /><b /></div>
          </div>
        </div>
        <span className="art-orb" />
      </div>
      <div className="project-body">
        <div className="project-title-row"><h3>{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={18} /></a></div>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer"><Github size={15} /> View project <ArrowUpRight size={14} /></a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="section-shell section-block" id="projects">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose." description="A few things I've built or explored. Replace the demo links with your real repositories and live deployments." />
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
      </div>
    </section>
  )
}
