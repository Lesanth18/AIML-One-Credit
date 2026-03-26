const experiences = [
  {
    title: 'Generative AI Intern',
    company: 'Google Cloud × AICTE',
    date: 'Apr – Jun 2025',
    bullets: [
      'Worked with LLMs and cloud AI tools over 10 weeks',
      'Built real applications using Generative AI on GCP'
    ]
  },
  {
    title: 'AI Researcher',
    company: 'IITM PARVATAK',
    date: 'Jan – Dec 2025',
    bullets: [
      'MLM pipeline using RoBERTa & MPNet for contextual learning',
      'Rhetorical role-based summarization (Facts, Arguments, Statutes)',
      'Keyword extraction with PMI & YAKE for Q/A dataset generation'
    ]
  },
  {
    title: 'Web Dev Intern',
    company: 'Nexyuga Innovations',
    date: 'Sep – Dec 2025',
    bullets: [
      'Built responsive web apps with AI integration',
      'Implemented TTS & STT using HuggingFace LLMs'
    ]
  }
]

export default function Experience() {
  return (
    <section data-section="experience" className="py-20 md:py-32 px-4 fade-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          Experience
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        <div className="relative pl-8 md:pl-4">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent md:transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Marker */}
                <div className="absolute -left-6 md:absolute md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-dark-bg border-2 border-accent-cyan md:border-gradient-to-r md:border-accent-purple" />

                {/* Content */}
                <div className={`md:${idx % 2 === 0 ? 'mr-auto md:pr-12 md:w-5/12' : 'ml-auto md:pl-12 md:w-5/12'}`}>
                  <div className="card-glass p-6">
                    <p className="mono text-xs text-dark-text-muted mb-2">{exp.date}</p>
                    <h3 className="text-xl font-bold text-accent-cyan mb-1">{exp.title}</h3>
                    <p className="text-dark-text-muted text-sm mb-3">{exp.company}</p>
                    <ul className="space-y-1 text-sm text-dark-text">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent-purple flex-shrink-0">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
