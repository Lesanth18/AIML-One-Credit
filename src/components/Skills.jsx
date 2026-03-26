const skillsData = [
  {
    label: 'Languages',
    hue: 200,
    skills: ['C', 'Python', 'Java', 'JavaScript', 'MySQL']
  },
  {
    label: 'ML & AI',
    hue: 270,
    skills: ['PyTorch', 'Scikit-learn', 'BERT', 'T5', 'HuggingFace', 'NLTK', 'LLMs']
  },
  {
    label: 'Data',
    hue: 140,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  },
  {
    label: 'BI & Visualization',
    hue: 30,
    skills: ['Tableau', 'Power BI', 'Looker', 'Excel']
  },
  {
    label: 'Tools',
    hue: 60,
    skills: ['VS Code', 'GitHub', 'Jupyter', 'Google Colab', 'Streamlit']
  }
]

export default function Skills() {
  return (
    <section data-section="skills" className="py-20 md:py-32 px-4 fade-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-12 relative pb-4">
          Skills
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </h2>

        <div className="space-y-8">
          {skillsData.map((group, idx) => (
            <div key={idx}>
              <label className="text-xs font-semibold uppercase tracking-widest text-dark-text-muted mb-3 block">
                {group.label}
              </label>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full border transition-all duration-300 cursor-default hover:shadow-lg"
                    style={{
                      borderColor: `hsl(${group.hue}, 80%, 50%)`,
                      color: `hsl(${group.hue}, 80%, 50%)`,
                      backgroundColor: `hsla(${group.hue}, 80%, 50%, 0.05)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px hsla(${group.hue}, 80%, 50%, 0.3)`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
