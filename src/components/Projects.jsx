import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'Talkify',
    subtitle: 'Real Time Chat App',
    description: 'Full-stack real-time chat application using the MERN stack with Socket.io for instant messaging, JWT authentication, and optimized MongoDB schemas.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/rohanzete',
    live: null,
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    emoji: '💬',
  },
  {
    title: 'DiaryX',
    subtitle: 'Personal Travel Diary App',
    description: 'Full-stack travel diary app using MERN stack. Users can create, store, and manage personal travel experiences with JWT auth and Multer-based image upload.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Multer'],
    github: 'https://github.com/rohanzete',
    live: null,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    emoji: '✈️',
  },
  {
    title: 'KrishiAI',
    subtitle: 'Crop Recommendation & Price Prediction',
    description: 'Hack-Fusion Hackathon 2025 — AI-powered agriculture platform with a responsive UI displaying crop recommendations and price predictions using ML APIs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'ML APIs'],
    github: 'https://github.com/rohanzete',
    live: null,
    gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
    emoji: '🌾',
  },
]

export default function Projects() {
  return (
    <div id="work">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="project-top" style={{ background: p.gradient }}>
              <span className="project-emoji">{p.emoji}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="project-body">
              <p className="project-subtitle">{p.subtitle}</p>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
