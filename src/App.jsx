import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import AboutDetail from './components/AboutDetail'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import ResumeHighlights from './components/ResumeHighlights'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showAboutDetail, setShowAboutDetail] = useState(false)

  const handleMoreAbout = () => {
    setShowAboutDetail(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackHome = () => {
    setShowAboutDetail(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(180deg, #b8d4e8 0%, #c5dae8 25%, #d4e0e8 50%, #dde4e6 75%, #e8e4dc 100%)'
    }}>
      <Navbar onHomeClick={handleBackHome} showAboutDetail={showAboutDetail} />

      {showAboutDetail ? (
        <AboutDetail onBack={handleBackHome} />
      ) : (
        <>
          <section id="home"><Hero /></section>
          <section id="about"><AboutPreview onMoreClick={handleMoreAbout} /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="achievements"><Achievements /></section>
          <ResumeHighlights />
          <Education />
          <section id="contact"><Contact /></section>
        </>
      )}

      <Footer />
    </div>
  )
}

export default App
