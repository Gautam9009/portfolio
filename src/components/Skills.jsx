import { Code2, BrainCircuit, PanelsTopLeft, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data'

const icons = [Code2, BrainCircuit, PanelsTopLeft, Wrench]

export default function Skills() {
  return (
    <section className="section-shell section-block" id="skills">
      <div className="container">
        <SectionHeading eyebrow="MY TOOLKIT" title="Curiosity, meet capability." description="A growing toolkit for building useful applications, exploring data, and shipping reliable software." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <motion.div className="skill-card" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <div className={`skill-icon skill-icon-${index}`}><Icon size={21} /></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
