import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, experience } from '../data'

export default function Journey() {
  return (
    <section className="section-shell section-block" id="journey">
      <div className="container">
        <SectionHeading eyebrow="THE JOURNEY" title="Learning by doing." description="My academic foundation and the experiences that are shaping how I build." />
        <div className="journey-grid">
          <div className="journey-column">
            <h3 className="journey-label"><span><BriefcaseBusiness size={18} /></span> Experience</h3>
            {experience.map((item, index) => (
              <article className="timeline-card" key={`${item.role}-${index}`}>
                <span className="timeline-period">{item.period}</span>
                <h4>{item.role}</h4><p className="timeline-org">{item.organization}</p><p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="journey-column">
            <h3 className="journey-label"><span><GraduationCap size={18} /></span> Education</h3>
            {education.map((item, index) => (
              <article className="timeline-card" key={`${item.qualification}-${index}`}>
                <span className="timeline-period">{item.period}</span>
                <h4>{item.qualification}</h4><p className="timeline-org">{item.institution}</p><p>{item.detail}</p>
              </article>
            ))}
            <div className="learning-note"><span>✦</span><p><b>Always learning</b><br />Currently exploring better ways to connect intelligent systems with practical user experiences.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
