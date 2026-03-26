import { useState } from 'react'

export default function Contact({ setToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setToast({ message: 'Please fill in all fields', duration: 3000 })
      return
    }

    const subject = `Message from ${formData.name}`
    const body = `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:lesanthnagarajan34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
    setToast({ message: 'Redirecting to email client...', duration: 2000 })
  }

  return (
    <section data-section="contact" className="py-20 md:py-32 px-4 fade-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          Let's build<br />something.
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <a
              href="mailto:lesanthnagarajan34@gmail.com"
              className="text-xl text-accent-cyan hover:underline mb-8 block transition-all"
            >
              lesanthnagarajan34@gmail.com
            </a>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/lesanth-n-601907321/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-dark-text-muted rounded transition-all hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 flex items-center justify-center group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Lesanth18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-dark-text-muted rounded transition-all hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:lesanthnagarajan34@gmail.com"
                className="w-12 h-12 border border-dark-text-muted rounded transition-all hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full card-glass px-4 py-3 rounded text-dark-text placeholder-dark-text-muted transition-all focus:outline-none focus:border-accent-cyan focus:shadow-lg focus:shadow-accent-cyan/10"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full card-glass px-4 py-3 rounded text-dark-text placeholder-dark-text-muted transition-all focus:outline-none focus:border-accent-cyan focus:shadow-lg focus:shadow-accent-cyan/10"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full card-glass px-4 py-3 rounded text-dark-text placeholder-dark-text-muted transition-all focus:outline-none focus:border-accent-cyan focus:shadow-lg focus:shadow-accent-cyan/10 resize-none"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto animate-pulse-button hover:animate-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
