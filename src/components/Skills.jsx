import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import {
  SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiExpress, SiMongodb, SiMysql, SiPostman, SiSocketdotio
} from 'react-icons/si'
import './Skills.css'

const TABS = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

const SKILLS = [
  { name: 'React.js',     icon: <FaReact />,       color: '#61dafb', bg: 'rgba(97,218,251,0.1)',   cat: 'Frontend' },
  { name: 'JavaScript',   icon: <SiJavascript />,  color: '#f7df1e', bg: 'rgba(247,223,30,0.1)',   cat: 'Frontend' },
  { name: 'HTML5',        icon: <SiHtml5 />,       color: '#e34f26', bg: 'rgba(227,79,38,0.1)',    cat: 'Frontend' },
  { name: 'CSS3',         icon: <SiCss />,         color: '#264de4', bg: 'rgba(38,77,228,0.1)',    cat: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',   cat: 'Frontend' },
  { name: 'Node.js',      icon: <FaNodeJs />,      color: '#68a063', bg: 'rgba(104,160,99,0.1)',   cat: 'Backend'  },
  { name: 'Express.js',   icon: <SiExpress />,     color: '#c0c0c0', bg: 'rgba(192,192,192,0.07)', cat: 'Backend'  },
  { name: 'Socket.io',    icon: <SiSocketdotio />, color: '#e0e0e0', bg: 'rgba(224,224,224,0.06)', cat: 'Backend'  },
  { name: 'Java',         icon: <FaJava />,        color: '#f89820', bg: 'rgba(248,152,32,0.1)',   cat: 'Backend'  },
  { name: 'REST APIs',    icon: <FaDatabase />,    color: '#a5b4fc', bg: 'rgba(165,180,252,0.1)',  cat: 'Backend'  },
  { name: 'MongoDB',      icon: <SiMongodb />,     color: '#4db33d', bg: 'rgba(77,179,61,0.1)',    cat: 'Database' },
  { name: 'MySQL',        icon: <SiMysql />,       color: '#00758f', bg: 'rgba(0,117,143,0.1)',    cat: 'Database' },
  { name: 'Git',          icon: <FaGitAlt />,      color: '#f05032', bg: 'rgba(240,80,50,0.1)',    cat: 'Tools'    },
  { name: 'GitHub',       icon: <FaGithub />,      color: '#e0e0e0', bg: 'rgba(224,224,224,0.07)', cat: 'Tools'    },
  { name: 'Postman',      icon: <SiPostman />,     color: '#ff6c37', bg: 'rgba(255,108,55,0.1)',   cat: 'Tools'    },
]

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.cat === active)

  return (
    <div id="skills">
      <h2 className="section-title">My <span>Skills</span></h2>

      {/* Tabs */}
      <div className="sk-tabs">
        {TABS.map(t => (
          <button
            key={t}
            className={`sk-tab ${active === t ? 'sk-tab-active' : ''}`}
            onClick={() => setActive(t)}
          >
            {active === t && <motion.span className="sk-tab-bg" layoutId="sk-bg" />}
            <span className="sk-tab-label">{t}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="sk-grid"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              className="sk-card"
              style={{ '--c': s.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
              whileHover={{ y: -8, transition: { duration: 0.15 } }}
            >
              <div className="sk-card-top-bar" style={{ background: s.color }} />
              <div className="sk-icon-box" style={{ background: s.bg }}>
                <span style={{ color: s.color }}>{s.icon}</span>
              </div>
              <p className="sk-label">{s.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
