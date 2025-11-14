export default function Blog() {
  const posts = [
    {
      title: 'Getting Started with Generative AI in Python',
      excerpt: 'A comprehensive guide to building your first generative AI application using Python and modern frameworks.',
      date: 'Nov 12, 2024',
      readTime: '8 min read',
      category: 'Tutorial',
    },
    {
      title: 'Full-Stack Development with React and FastAPI',
      excerpt: 'Learn how to build scalable full-stack applications combining React frontend with FastAPI backend.',
      date: 'Nov 8, 2024',
      readTime: '12 min read',
      category: 'Development',
    },
    {
      title: 'Best Practices for Machine Learning in Production',
      excerpt: 'Exploring strategies and tools for deploying machine learning models safely and efficiently.',
      date: 'Oct 30, 2024',
      readTime: '10 min read',
      category: 'Best Practices',
    },
  ]

  return (
    <section id="blog" className="px-8 py-20 border-b border-border">
      <div className="space-y-12">
        <div>
          <h3 className="text-accent font-mono text-sm mb-4 font-bold tracking-widest">INSIGHTS & KNOWLEDGE</h3>
          <div className="flex gap-1 items-center">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-3xl font-bold text-foreground">Latest Blog Posts</h2>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-accent transition-colors text-pretty">
                    {post.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-foreground/60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded border border-accent/30">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block px-6 py-2 border border-accent text-accent rounded-lg font-medium text-sm hover:bg-accent/10 transition-colors">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
