import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowRight, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiMongodb, SiExpress } from 'react-icons/si'
import './Hero.css'
import profileImg from '../assets/Rohan_Picture.jpeg'

const socials = [
  { icon: <FaLinkedin />,      href: 'https://linkedin.com/in/rohanzete/',                            label: 'LinkedIn' },
  { icon: <FaGithub />,        href: 'https://github.com/rohanzete',                                  label: 'GitHub'   },
  { icon: <SiLeetcode />,      href: 'https://leetcode.com/u/rohan_zete/',                            label: 'LeetCode' },
  { icon: <SiGeeksforgeeks />, href: 'https://www.geeksforgeeks.org/profile/rohanaeqfx?tab=activity', label: 'GFG'      },
  { icon: <FaEnvelope />,      href: 'mailto:rohanazete@gmail.com',                                   label: 'Email'    },
]

const stats = [
  { value: '3+',  label: 'Projects'   },
  { value: '8.1', label: 'SGPA'       },
  { value: '2026',label: 'Graduating' },
]

const chips = [
  { icon: <FaReact />,    label: 'React',   cls: 'chip-1', color: '#61dafb', delay: 0   },
  { icon: <FaNodeJs />,   label: 'Node.js', cls: 'chip-2', color: '#68a063', delay: 0.5 },
  { icon: <SiMongodb />,  label: 'MongoDB', cls: 'chip-3', color: '#4db33d', delay: 1   },
  { icon: <SiExpress />,  label: 'MERN',    cls: 'chip-4', color: '#4070f4', delay: 0.3 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function Hero() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <div id="hero" className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 130, enable: true, opacity: 0.08, width: 1 },
            move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
            number: { value: 80, density: { enable: true } },
            opacity: { value: 0.15 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-content">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <motion.a
            className="hero-badge"
            href="https://mail.google.com/mail/?view=cm&to=rohanazete@gmail.com&su=Job%20Opportunity%20%7C%20Software%20Developer%20Role&body=Hi%20Rohan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20software%20development%20opportunity%20with%20you.%0A%0ACould%20you%20please%20share%20your%20availability%20for%20a%20quick%20call%20or%20interview%3F%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C%0A%5BYour%20Name%5D%0A%5BCompany%20Name%5D"
            target="_blank"
            rel="noreferrer"
            {...fadeUp(0.1)}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.a>

          <motion.p className="hero-greeting" {...fadeUp(0.2)}>
            Hi There 👋, I'm
          </motion.p>

          <motion.h1 className="hero-name" {...fadeUp(0.3)}>
            Rohan <span className="name-gradient">Zete</span>
          </motion.h1>

          <motion.div className="hero-role" {...fadeUp(0.4)}>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer', 2000,
                'React.js Developer',   2000,
                'Full Stack Developer', 2000,
                'Problem Solver',       2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p className="hero-bio" {...fadeUp(0.5)}>
            Final-year Computer Engineering student passionate about building
            scalable full-stack web apps with clean code and great user experiences.
          </motion.p>

          <motion.div className="hero-cta" {...fadeUp(0.6)}>
            <a href="#work" className="cta-primary">
              View My Work <FaArrowRight className="cta-icon" />
            </a>
            <a href="https://drive.google.com/file/d/10wzioKfsWRaDzledWGL8KJRD4fEVwUuL/view?usp=drive_link" target="_blank" rel="noreferrer" className="cta-secondary">
              <FaDownload /> Resume
            </a>
          </motion.div>

          {/* Icon-only social pills */}
          <motion.div className="hero-socials" {...fadeUp(0.7)}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                aria-label={s.label} className="social-pill">
                {s.icon}
              </a>
            ))}
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.8)}>
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 80 }}
        >
          <div className="profile-wrapper">
            <div className="profile-glow" />
            <div className="orbit orbit-1"><div className="orbit-dot" /></div>
            <div className="orbit orbit-2"><div className="orbit-dot" /></div>

            <div className="profile-circle">
              <img src={profileImg} alt="Rohan Zete" />
            </div>

            {chips.map(c => (
              <motion.div
                key={c.label}
                className={`chip ${c.cls}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
              >
                <span className="chip-icon" style={{ color: c.color }}>{c.icon}</span>
                {c.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <div className="mouse"><div className="mouse-wheel" /></div>
        <span>Scroll down</span>
      </motion.div>
    </div>
  )
}
