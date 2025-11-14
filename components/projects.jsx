export default function Projects() {
  const projects = [
    {
      title: 'AI Content Generator',
      description: 'Generative AI application for automated content creation using advanced language models',
      tags: ['Python', 'FastAPI', 'React', 'MySQL'],
      url: 'https://react-js-six.vercel.app/'
    },
    {
      title: 'Smart Recommendation Engine',
      description: 'Machine learning-powered recommendation system with real-time personalization',
      tags: ['Python', 'TensorFlow', 'JavaScript', 'MySQL'],
      url: 'https://react-js-six.vercel.app/'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and insights',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'FastAPI'],
      url: 'https://react-js-six.vercel.app/'
    },
    {
      title: 'Natural Language Processor',
      description: 'NLP pipeline for text analysis, sentiment detection, and classification',
      tags: ['Python', 'NLP', 'FastAPI', 'React'],
      url: 'https://react-js-six.vercel.app/'
    },
  ]

  return (
    <section id="projects" className="px-8 py-20 border-b border-border">
      <div className="space-y-12">
        <div>
          <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">FEATURED WORK</h3>
          <div className="flex gap-1 items-center">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-3xl font-bold text-foreground">Projects & Portfolio</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="h-32 bg-accent/10 rounded-lg mb-6 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <span className="text-accent text-3xl font-mono">{'</>'}</span>
              </div>
              <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent/10 text-accent/80 rounded text-xs border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
                <a href={project.url} target="_blank">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
