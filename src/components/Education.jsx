import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import './Education.css'

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'MET Institute of Engineering',
    location: 'Nashik, Maharashtra',
    period: '2022 – 2026',
    grade: '8.10 SGPA',
    status: 'Pursuing',
  },
]

export default function Education() {
  return (
    <div id="education">
      <h2 className="section-title">My <span>Education</span></h2>
      <div className="edu-list">
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-card glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="edu-icon-wrap">
              <FaGraduationCap />
            </div>
            <div className="edu-body">
              <div className="edu-top">
                <div>
                  <span className="edu-status">{e.status}</span>
                  <h3>{e.degree}</h3>
                  <p className="edu-field">{e.field}</p>
                </div>
                <div className="edu-right">
                  <span className="edu-period">{e.period}</span>
                  <span className="edu-grade"><FaStar /> {e.grade}</span>
                </div>
              </div>
              <div className="edu-footer">
                <span className="edu-inst">{e.institution}</span>
                <span className="edu-loc"><FaMapMarkerAlt /> {e.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
