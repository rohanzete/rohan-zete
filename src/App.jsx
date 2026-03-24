import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-wrap" id="about-wrap">
        <div className="section-inner"><About /></div>
      </div>
      <div className="section-wrap alt" id="skills-wrap">
        <div className="section-inner"><Skills /></div>
      </div>
      <div className="section-wrap" id="edu-wrap">
        <div className="section-inner"><Education /></div>
      </div>
      <div className="section-wrap alt" id="work-wrap">
        <div className="section-inner"><Projects /></div>
      </div>
      <div className="section-wrap" id="exp-wrap">
        <div className="section-inner"><Experience /></div>
      </div>
      <div className="section-wrap alt" id="contact-wrap">
        <div className="section-inner"><Contact /></div>
      </div>
    </>
  )
}

export default App
