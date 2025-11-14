export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['Generative AI', 'Python', 'NLP', 'TensorFlow'],
      icon: '🤖',
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'CSS'],
      icon: '🎨',
    },
    {
      title: 'Backend Development',
      skills: ['FastAPI', 'Python', 'MySQL', 'REST APIs'],
      icon: '⚙️',
    },
  ]

  return (
    <section id="skills" className="px-8 py-20 border-b border-border">
      <div className="space-y-12">
        <div>
          <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">SKILLS & EXPERTISE</h3>
          <div className="flex gap-1 items-center">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-accent font-bold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-8 border border-accent/20">
          <p className="text-foreground/80 text-sm leading-relaxed">
            <span className="text-accent font-mono">{'// '}</span>
            I'm continuously expanding my skill set and staying updated with the latest developments in AI, web technologies, and software engineering best practices.
          </p>
        </div>
      </div>
    </section>
  )
}
