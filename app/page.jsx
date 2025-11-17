import Sidebar from '@/components/sidebar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <main className="flex flex-col overflow-auto max-sm:w-full">
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
