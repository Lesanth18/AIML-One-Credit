import { useState, useEffect } from 'react'

const roles = ['AI/ML Engineer', 'NLP Developer', 'Problem Solver', 'Code Crafter', 'Explorer']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsDeleting(false)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, roleIndex, isDeleting])

  return (
    <section
      data-section="home"
      className="min-h-screen pt-28 pb-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 245, 255, 0.05) 25%, rgba(0, 245, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 245, 255, 0.05) 75%, rgba(0, 245, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 245, 255, 0.05) 25%, rgba(0, 245, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 245, 255, 0.05) 75%, rgba(0, 245, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-6xl mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div>
          <h1
            className="text-6xl md:text-7xl font-heading font-bold mb-4 tracking-tight relative"
            style={{
              backgroundImage: 'linear-gradient(to right, white, white)',
              backgroundClip: 'text'
            }}
          >
            Lesanth N
          </h1>

          <div className="min-h-16 flex items-center mb-6">
            <div className="text-2xl md:text-3xl font-mono font-semibold text-accent-cyan">
              {displayText}
              <span className="animate-blink">|</span>
            </div>
          </div>

          <p className="text-dark-text-muted text-sm md:text-base mb-8 tracking-widest">
            Namakkal, Tamil Nadu
          </p>

          <div className="flex gap-4 mb-8 flex-wrap">
            <a
              href="#projects"
              className="btn btn-primary flex items-center gap-2 hover:-translate-y-0.5"
            >
              View Work <span>↓</span>
            </a>
            <a
              href="#contact"
              className="btn btn-secondary flex items-center gap-2 hover:text-accent-cyan hover:border-accent-cyan"
            >
              Say Hello <span>→</span>
            </a>
          </div>
        </div>

        {/* SVG Art */}
        <div className="hidden md:flex justify-center animate-float">
          <svg viewBox="0 0 400 400" className="w-80 h-80">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#9d00ff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="100" r="80" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.6" style={{ animation: 'rotate 20s linear infinite' }} />
            <polygon points="200,50 350,350 50,350" fill="none" stroke="#00f5ff" strokeWidth="2" opacity="0.4" style={{ animation: 'rotate 30s linear infinite reverse' }} />
            <rect x="100" y="150" width="200" height="200" fill="none" stroke="#9d00ff" strokeWidth="2" opacity="0.5" style={{ animation: 'rotate 10s linear infinite' }} />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.3" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          </svg>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-dark-text-muted text-sm">
        <span>Scroll to explore</span>
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple" />
      </div>
    </section>
  )
}
