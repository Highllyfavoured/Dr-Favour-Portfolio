export default function Hero() {
  return (
    <section className="px-8 py-20 border-b border-border">
      <div className="space-y-8">
        <div className="flex flex-row max-sm:flex-wrap gap-5 justify-center items-center">
          <img
           src="WhatsApp Image 2025-11-13 at 22.46.26_25f1b8e0.jpg"
           alt="Favoured"
            className="w-full max-w-80 aspect-square object-cover rounded-[50%]"
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
          <a className="px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors" href="#projects">Explore my work</a>

          <a className="px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors" href="#footer">Get in touch</a>
          
          <a
            href="https://portfolio-eta-flax-91.vercel.app/Olaosebikan Favour .docx"
            className="flex items-center gap-2 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:text-blue-700 transition"
          >
           <FaRegEye />
            View CV
          </a>

      <a
            href="/Olaosebikan Favour .docx"
            download
            className="flex items-center gap-2 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:text-blue-700 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
