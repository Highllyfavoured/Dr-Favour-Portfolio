import Sidebar from '@/components/sidebar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 max-w-5xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Footer />
      </main>
    </div>
  )
}
