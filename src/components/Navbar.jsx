import { useState, useEffect } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certs', 'Contact']

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]')
      let current = 'home'
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('data-section')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50
        ? 'backdrop-blur-md bg-dark-bg/70 border-b border-accent-cyan/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-heading font-bold">
          <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
            LN
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-accent-cyan after:to-accent-purple after:transition-all after:duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-accent-cyan after:w-full'
                    : 'text-dark-text-muted hover:text-accent-cyan after:w-0 hover:after:w-full'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-5 h-0.5 bg-dark-text transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
          <span className={`w-5 h-0.5 bg-dark-text transition-all ${isOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-5 h-0.5 bg-dark-text transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md border-b border-accent-cyan/10 p-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-dark-text-muted hover:text-accent-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
