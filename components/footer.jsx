"use client"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus(`✅ ${data.message}`);
        setName('');
        setEmail('');
        setMessage('');
        
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`❌ ${data.message || 'Failed to submit.'}`);
        
        // Clear error message after 8 seconds
        setTimeout(() => setStatus(''), 8000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('❌ An unexpected error occurred. Please try again.');
      
      // Clear error message after 8 seconds
      setTimeout(() => setStatus(''), 8000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer id='footer' className="bg-card border-t border-border max-sm:w-full py-16 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Let's Work Together</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            <div className="flex gap-4 pt-4">
              <a href="mailto:favourolaosebikanf@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Highllyfavoured" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/olaosebikan-favour-218577184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/FavourOLAOSEBI1?t=-a6zJcKHKJLzDL5MY7tfXw&s=09" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent">
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

        <div>
          <h3 className="font-bold text-foreground text-lg mb-6">Contact Form</h3>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-accent rounded-2xl p-8"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors text-foreground"
                required
                disabled={isSubmitting}
                minLength={2}
                maxLength={100}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors text-foreground"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="w-full px-4 py-2 bg-background border border-border rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none text-foreground"
                required
                disabled={isSubmitting}
                minLength={10}
                maxLength={1000}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-2xl text-sm font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
          
          {status && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              status.includes('✅') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {status}
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-xs">
            © 2025 Dr. Olaosebikan Favour. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#footer" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}