'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-background border-r border-border flex flex-col">
      <div className="p-8 border-b border-border">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground font-mono tracking-wider">{'</> Dr. Olaosebikan'}</p>
          <h1 className="text-2xl font-bold text-accent">Favour</h1>
          <p className="text-xs text-muted-foreground mt-2">AI Developer</p>
        </div>
      </div>

      <nav className="flex-1 px-6 py-8 space-y-8">
        <div>
          <h2 className="text-xs font-bold text-accent tracking-widest mb-4">NAVIGATION</h2>
          <ul className="space-y-4">
            <li>
              <a href="#about" className="text-sm text-foreground hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-sm text-foreground hover:text-accent transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm text-foreground hover:text-accent transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm text-foreground hover:text-accent transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="p-6 border-t border-border">
        <p className="text-xs text-muted-foreground mb-4 font-mono">CONNECT</p>
        <div className="flex gap-4">
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </aside>
  )
}
