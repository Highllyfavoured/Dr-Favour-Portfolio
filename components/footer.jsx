import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Let's Work Together</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-foreground/70 hover:text-accent text-sm transition-colors flex items-center gap-2">
                <ExternalLink size={14} />
                About Me
              </a>
              <a href="#skills" className="text-foreground/70 hover:text-accent text-sm transition-colors flex items-center gap-2">
                <ExternalLink size={14} />
                Skills
              </a>
              <a href="#projects" className="text-foreground/70 hover:text-accent text-sm transition-colors flex items-center gap-2">
                <ExternalLink size={14} />
                Projects
              </a>
              <a href="#blog" className="text-foreground/70 hover:text-accent text-sm transition-colors flex items-center gap-2">
                <ExternalLink size={14} />
                Blog
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-xs">
            © 2025 Dr. Olaosebikan Favour. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
