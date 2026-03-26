export default function About() {
  return (
    <section data-section="about" className="py-20 md:py-32 px-4 fade-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          About
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              I build things that think. Currently pursuing B.E in AI & ML at K.S.Rangasamy College of Technology (CGPA 8.2 | 2023–2027), I spend most of my time training models, breaking them, and figuring out why.
            </p>
            <p className="text-dark-text-muted leading-relaxed mb-4">
              My fascination lies in natural language processing, transformer architectures, and making intelligent systems accessible. When I'm not coding, I'm probably overthinking an algorithm or reading papers that'll take me three weeks to understand.
            </p>
          </div>

          {/* Terminal Education Card */}
          <div className="card-glass p-6 font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2">
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">degree:</span> <span className="text-dark-text">B.E Computer Science (AI & ML)</span></div>
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">college:</span> <span className="text-dark-text">K.S.Rangasamy Col. of Tech.</span></div>
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">cgpa:</span> <span className="text-dark-text">8.2 / 10</span></div>
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">period:</span> <span className="text-dark-text">2023 – 2027</span></div>
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">school:</span> <span className="text-dark-text">Sri Vidya Mandir MHSS</span></div>
              <div><span className="text-accent-purple">→</span> <span className="text-accent-cyan">graduated:</span> <span className="text-dark-text">March 2023</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
