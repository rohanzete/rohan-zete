import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id="hero"]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id
            setActive(id.charAt(0).toUpperCase() + id.slice(1))
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="logo">
        <span className="logo-icon">R</span>
        Rohan Zete
      </a>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className={active === l ? 'active' : ''}
              onClick={() => { setMenuOpen(false); setActive(l) }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
