export default function Projects() {
  const projects = [
    {
      image: "/Screenshot 2025-11-14 005320.png",
      title: 'Expense Tracker',
      description: 'A simple, elegant, and functional Expense Tracker App built with React.js, designed to help users manage and analyze their daily spending efficiently. ',
      tags: ['Javascript', 'CSS', 'HTML'],
      url: 'https://react-js-six.vercel.app/'
    },
    {
      image: "/Screenshot 2025-11-14 011146.png",
      title: 'Portfolio Website',
      description: 'Portfolio website that give information of about, skills, projects, contact etc',
      tags: ['Javascript', 'HTML', 'CSS', 'Typescript'],
      url: 'https://dr-favour-portfolio.vercel.app/'
    },
    {
      image: "Screenshot 2025-11-14 023050.png",
      title: 'Animal Blog',
      description: 'Exploring the animal world',
      tags: ['Javascript', 'HTML', 'CSS'],
      url: 'http://dr-favour-portfolio-evm2.vercel.app/'
    },
    {
      image: "Screenshot 2025-11-14 013702.png",
      title: 'Expense Tracker APIr',
      description: 'The Expense Tracker API is a backend service built with FastAPI, designed to help users manage their expenses securely and efficiently.',
      tags: ['Python', 'MySQL', 'JWT', 'JWT'],
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
              <div className="h-64 bg-accent/10 rounded-lg mb-6 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <img className="w-full h-full object-cover" src={project.image} alt="" />
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
                <a className="px-2 py-1 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors" href={project.url} target="_blank">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
