const projects = [
  {
    label: 'Analytics',
    title: 'Amazon Sales Analysis',
    description: 'Comprehensive sales trend analysis and business insights using data visualization techniques.',
    tags: ['Excel', 'Tableau', 'Analytics'],
    large: true
  },
  {
    label: 'Machine Learning',
    title: 'Breast Cancer Predictor',
    description: 'XGBoost classification model achieving 97.78% accuracy for early disease detection.',
    tags: ['Python', 'ML', 'Healthcare'],
    large: true
  },
  {
    label: 'Deployment',
    title: 'Disease Prediction',
    description: 'Streamlit web app for real-time disease outbreak predictions.',
    tags: ['Streamlit', 'SVM'],
    large: false
  },
  {
    label: 'NLP',
    title: 'Masked Language Model',
    description: 'RoBERTa & MPNet fine-tuning for contextual embeddings.',
    tags: ['NLP', 'Transformers'],
    large: false
  }
]

export default function Projects() {
  return (
    <section data-section="projects" className="py-20 md:py-32 px-4 fade-section relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          Projects
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        {/* Watermark */}
        <div className="absolute -top-20 -right-32 text-9xl md:text-[15rem] font-heading font-black text-accent-cyan/5 pointer-events-none">
          WORK
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 relative z-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`card-glass p-6 rounded-lg overflow-hidden group hover:border-accent-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20 ${
                project.large ? 'col-span-1' : 'col-span-1'
              } hover:-translate-y-2`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-purple">
                  {project.label}
                </span>
                <span className="text-lg text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-dark-text">{project.title}</h3>
              <p className="text-dark-text-muted text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
