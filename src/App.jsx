import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Toast from './components/Toast'

function App() {
  const [toast, setToast] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Easter egg
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'l') {
        setToast({ message: "hey, that's me 👋", duration: 2000 })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <CustomCursor />
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact setToast={setToast} />
      <Footer />
      {toast && <Toast message={toast.message} duration={toast.duration} onClose={() => setToast(null)} />}
    </div>
  )
}

export default App
