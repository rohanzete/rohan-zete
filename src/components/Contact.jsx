import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import './Contact.css'

const contactInfo = [
  { icon: <FaEnvelope />,     label: 'Email',    value: 'rohanazete@gmail.com',   href: 'mailto:rohanazete@gmail.com' },
  { icon: <FaPhone />,        label: 'Phone',    value: '+91 7666094647',          href: 'tel:+917666094647' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Nashik, Maharashtra',     href: null },
]

const socialLinks = [
  { icon: <FaLinkedin />,      label: 'LinkedIn', href: 'https://linkedin.com/in/rohanzete/',                            color: '#0077b5' },
  { icon: <FaGithub />,        label: 'GitHub',   href: 'https://github.com/rohanzete',                                  color: '#fff' },
  { icon: <SiLeetcode />,      label: 'LeetCode', href: 'https://leetcode.com/u/rohan_zete/',                            color: '#ffa116' },
  { icon: <SiGeeksforgeeks />, label: 'GFG',      href: 'https://www.geeksforgeeks.org/profile/rohanaeqfx?tab=activity', color: '#2f8d46' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <motion.div
        className="contact-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left */}
        <div className="contact-left">
          <div className="contact-intro glass-card">
            <h3>Let's work together</h3>
            <p>Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
            <div className="contact-info-list">
              {contactInfo.map(c => (
                <div key={c.label} className="contact-info-item">
                  <span className="contact-info-icon">{c.icon}</span>
                  <div>
                    <p className="ci-label">{c.label}</p>
                    {c.href
                      ? <a href={c.href} className="ci-value">{c.value}</a>
                      : <p className="ci-value">{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-socials">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label} className="contact-social-btn"
                  style={{ '--sc': s.color }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right glass-card">
          {sent ? (
            <div className="sent-msg">
              <span className="sent-icon">🎉</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Rohan Zete" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          )}
        </div>
      </motion.div>

      <p className="footer-text">
        Designed & Built with ❤️ by <span>Rohan Zete</span> · {new Date().getFullYear()}
      </p>
    </div>
  )
}
