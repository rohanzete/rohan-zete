import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Hack-Fusion Hackathon 2025',
    period: '2025',
    type: 'Hackathon',
    points: [
      'Built KrishiAI — an AI-powered agriculture platform as part of a hackathon team.',
      'Designed a responsive UI to display crop recommendation and price prediction results.',
      'Integrated frontend with Node.js and Express.js APIs consuming ML model outputs.',
      'Enabled farmers to make data-driven decisions through clear data visualizations.',
    ],
  },
]

export default function Experience() {
  return (
    <div id="experience">
      <h2 className="section-title">My <span>Experience</span></h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="timeline-line" />
            <div className="timeline-dot">
              <FaTrophy />
            </div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <div>
                  <span className="exp-type">{exp.type}</span>
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <ul>
                {exp.points.map((p, j) => (
                  <li key={j}>
                    <span className="li-dot" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
