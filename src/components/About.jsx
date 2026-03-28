import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap,
         FaDownload, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import './About.css'

const info = [
  { icon: <FaGraduationCap />, label: 'Degree',   value: 'B.E. Computer Engineering' },
  { icon: <FaMapMarkerAlt />,  label: 'Location',  value: 'Nashik, Maharashtra' },
  { icon: <FaEnvelope />,      label: 'Email',     value: 'rohanazete@gmail.com' },
  { icon: <FaPhone />,         label: 'Phone',     value: '+91 7666094647' },
]

const highlights = [
  { icon: <FaCode />,       title: 'Clean Code',   desc: 'Writing readable, maintainable code following best practices and design patterns.' },
  { icon: <FaLaptopCode />, title: 'Full Stack',    desc: 'End-to-end development from UI to database using the MERN stack.' },
  { icon: <FaRocket />,     title: 'Fast Learner',  desc: 'Quickly adapting to new technologies, frameworks and problem domains.' },
]

const tags = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Java', 'Tailwind CSS', 'Git', 'DSA']

export default function About() {
  return (
    <div id="about">
      <h2 className="section-title">About <span>Me</span></h2>

      <div className="about-wrapper">

        {/* ── LEFT: bio + highlights ── */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-eyebrow">Who I Am</span>
          <h3 className="about-heading">
            Passionate Developer &<br />Problem Solver
          </h3>
          <p className="about-para">
            I'm a final-year <span className="hl">Computer Engineering</span> student at MET
            Institute of Engineering, Nashik, with hands-on experience building full-stack
            web applications using the <span className="hl">MERN stack</span>.
          </p>
          <p className="about-para">
            I have a solid understanding of <span className="hl">Data Structures & Algorithms</span> and
            enjoy turning complex problems into clean, scalable solutions. I'm actively seeking an
            entry-level software development role where I can contribute and grow.
          </p>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <p className="highlight-title">{h.title}</p>
                  <p className="highlight-desc">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: info card + tags + resume ── */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Info card */}
          <div className="about-info-card">
            <div className="about-info-header">
              <div className="about-avatar-initials">RZ</div>
              <div>
                <p className="about-name-text">Rohan Zete</p>
                <a
                  className="about-status"
                  href={`mailto:rohanazete@gmail.com?subject=Job%20Opportunity%20%7C%20Software%20Developer%20Role&body=Hi%20Rohan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20software%20development%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20quick%20call.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
                >
                  <span className="status-dot" /> Available for hire
                </a>
              </div>
            </div>

            <div className="about-info-list">
              {info.map(item => (
                <div key={item.label} className="about-info-row">
                  <span className="about-info-icon">{item.icon}</span>
                  <div>
                    <p className="about-info-label">{item.label}</p>
                    <p className="about-info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div className="about-tags-wrap">
            <p className="about-tags-title">Tech Stack</p>
            <div className="about-tags">
              {tags.map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1meXM6j0_WfS0wqrNMNSMAOutt_Ivd2ab/view?usp=drive_link"
            target="_blank" rel="noreferrer"
            className="about-resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  )
}
