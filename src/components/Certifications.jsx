import { useState, useRef } from 'react'

const certifications = [
  {
    icon: '🎓',
    title: 'Generative AI Internship',
    issuer: 'ICT Academy / Google Cloud',
    year: '2025',
    color: 'hsl(200, 100%, 50%)'
  },
  {
    icon: '🏆',
    title: 'ICT Academy Hackathon',
    issuer: 'Participant',
    year: '2024',
    color: 'hsl(270, 100%, 50%)'
  },
  {
    icon: '🔢',
    title: 'Ramanujan Competition',
    issuer: 'National Level Mathematics',
    year: '2023',
    color: 'hsl(140, 100%, 50%)'
  },
  {
    icon: '🐍',
    title: 'Python Programming',
    issuer: 'Bhumi',
    year: '2024',
    color: 'hsl(30, 100%, 50%)'
  },
  {
    icon: '📖',
    title: 'Published Author',
    issuer: 'Anthology "Hope\'s Tapestry"',
    year: '2024',
    color: 'hsl(60, 100%, 50%)'
  },
  {
    icon: '☁️',
    title: 'AWS & DevOps Workshop',
    issuer: 'Greens Technologies',
    year: 'Aug 2025',
    color: 'hsl(320, 100%, 50%)'
  }
]

export default function Certifications() {
  const [scrollPos, setScrollPos] = useState(0)
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const cardWidth = 280 + 24
    const newPos = direction === 'next' ? scrollPos + cardWidth : Math.max(0, scrollPos - cardWidth)
    setScrollPos(newPos)
    if (trackRef.current) {
      trackRef.current.scrollLeft = newPos
    }
  }

  return (
    <section data-section="certifications" className="py-20 md:py-32 px-4 fade-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          Certifications
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        <div className="flex items-center gap-4">
          {/* Prev Button */}
          <button
            onClick={() => scroll('prev')}
            className="flex-shrink-0 w-10 h-10 border border-dark-text-muted rounded transition-all hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 flex items-center justify-center"
          >
            ‹
          </button>

          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex-1 overflow-x-auto scrollbar-hide flex gap-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 card-glass p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                style={{
                  borderLeftColor: cert.color,
                  borderLeftWidth: '4px'
                }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-dark-text mb-2">{cert.title}</h3>
                <p className="text-dark-text-muted text-sm mb-3">{cert.issuer}</p>
                <p className="mono text-xs text-dark-text-muted">{cert.year}</p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scroll('next')}
            className="flex-shrink-0 w-10 h-10 border border-dark-text-muted rounded transition-all hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
