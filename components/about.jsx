export default function About() {
  return (
    <section id="about" className="px-8 py-20 border-b border-border">
      <div className="space-y-8">
        <div>
          <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">ABOUT ME</h3>
          <div className="flex gap-1 items-center mb-6">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-3xl font-bold text-foreground">Who I Am</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-foreground/80 text-base leading-relaxed">
            <p>
              I'm a Generative AI developer with a passion for creating intelligent solutions that solve real-world problems. My expertise spans across machine learning, natural language processing, and full-stack development.
            </p>
            <p>
              With proficiency in Python, JavaScript, React.js, FastAPI, and MySQL, I build scalable applications that combine cutting-edge AI with intuitive user experiences. I believe in writing clean, maintainable code and staying at the forefront of technology trends.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <h4 className="font-bold text-accent mb-4">Quick Facts</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">→</span>
                <span>Specialized in Generative AI and Machine Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">→</span>
                <span>Full-stack developer with modern web technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">→</span>
                <span>Passionate about open-source contributions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">→</span>
                <span>Committed to continuous learning and growth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
