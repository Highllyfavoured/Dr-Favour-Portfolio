export default function Hero() {
  return (
    <section className="px-8 py-20 border-b border-border">
      <div className="space-y-8">
        <div className="flex flex-row gap-5 justify-center items-center">
          <img
           src="WhatsApp Image 2025-11-13 at 22.46.26_25f1b8e0.jpg"
           alt="Favoured"
            className="w-80 h-80 object-cover rounded-full"
          />
          <div> 
          <p className="text-accent font-mono text-sm mb-4">{'// Welcome to my portfolio'}</p>
          <h2 className="text-5xl font-bold text-foreground mb-6 text-pretty">
            Generative AI Developer
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            I'm Dr. Olaosebikan Favour, a passionate AI developer specializing in building intelligent systems with Python, JavaScript, and modern web technologies. I transform ideas into powerful applications.
          </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors">
            Explore My Work
          </button>
          <button className="px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
