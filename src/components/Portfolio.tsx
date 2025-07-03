import React from 'react'
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink?: string
  githubLink?: string
  showLivePreview?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  showLivePreview = false,
}) => {
  const [showPreview, setShowPreview] = React.useState(false)

  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-0 group hover-glow overflow-hidden relative">
      <div className="relative overflow-hidden rounded-t-xl">
        {showLivePreview && showPreview && demoLink ? (
          <div className="relative w-full h-72">
            <iframe
              src={demoLink}
              className="w-full h-full border-0 rounded-t-xl"
              title={`Live preview of ${title}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setShowPreview(false)}
                className="bg-black/80 hover:bg-black text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Close live preview"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              src={image}
              alt={`Screenshot of ${title} project showing the main interface and features`}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="400"
              height="288"
            />
            {showLivePreview && demoLink && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setShowPreview(true)}
                  className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
                  aria-label={`View live preview of ${title}`}
                >
                  <Eye size={20} />
                  <span>Live Preview</span>
                </button>
              </div>
            )}
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 dark:from-cyan-500/20 dark:to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Enhanced floating action buttons */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex space-x-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 p-3 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:bg-white/90 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 transition-all duration-300 magnetic hover-glow"
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink size={20} className="text-gray-800 dark:text-white drop-shadow-lg" />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 p-3 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:bg-white/90 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 transition-all duration-300 magnetic hover-glow"
                aria-label={`View source code for ${title} on GitHub`}
              >
                <Github size={20} className="text-gray-800 dark:text-white drop-shadow-lg" />
              </a>
            )}
          </div>
        </div>
        
        {/* Project category badge */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <span className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 px-4 py-2 rounded-full text-gray-800 dark:text-white text-sm font-bold shadow-lg dark:shadow-cyan-500/20">
            Featured Project
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gradient-vibrant dark:group-hover:text-gradient-vibrant-dark transition-all duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed text-lg">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 text-gray-700 dark:text-blue-300 text-sm font-bold rounded-2xl shadow-sm dark:shadow-cyan-500/10 hover:scale-110 hover:rotate-1 hover:shadow-md dark:hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-6">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-primary-600 dark:text-blue-400 hover:text-primary-700 dark:hover:text-blue-300 font-bold transition-all duration-300 group/link magnetic"
            >
              <ExternalLink size={18} className="transition-transform group-hover/link:scale-125 group-hover/link:rotate-12" />
              <span className="text-lg">View Project</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-bold transition-all duration-300 group/link magnetic"
            >
              <Github size={18} className="transition-transform group-hover/link:scale-125 group-hover/link:rotate-12" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Portfolio: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "BloomNGlow E-Commerce Platform",
      description: "A comprehensive beauty and wellness e-commerce platform featuring advanced product catalog, secure payment processing, customer reviews, and responsive design optimized for mobile shopping experiences.",
      image: "https://placehold.co/400x300/ff69b4/ffffff?text=Bloom%26Glow+Beauty",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "https://www.bloomnglow.aixplore.me/",
      showLivePreview: true,
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Modern analytics dashboard for SaaS applications with real-time data visualization, user management, and comprehensive reporting features with interactive charts and KPI tracking.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=SaaS+Dashboard",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "PostgreSQL"],
      demoLink: "https://demo.example.com",
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, multi-language support, and optimized performance for international business presence with modern design aesthetics.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Corporate+Site",
      technologies: ["WordPress", "PHP", "MySQL", "GSAP", "SEO"],
      demoLink: "https://demo.example.com",
    },
    {
      title: "Mobile App Landing",
      description: "Responsive landing page for mobile application with progressive web app features, push notifications, and app store integration designed for maximum conversion rates.",
      image: "https://placehold.co/400x300/f59e0b/ffffff?text=Mobile+Landing",
      technologies: ["Vue.js", "PWA", "Firebase", "CSS3", "Animations"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
    },
    {
      title: "Content Management Platform",
      description: "Custom blog and content management platform with markdown support, SEO optimization, comment system, and social media integration for modern content creators.",
      image: "https://placehold.co/400x300/ef4444/ffffff?text=Blog+Platform",
      technologies: ["Gatsby", "GraphQL", "Netlify", "Markdown"],
      demoLink: "https://demo.example.com",
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website for digital artists featuring image galleries, contact forms, and client testimonials with smooth animations.",
      image: "https://placehold.co/400x300/06b6d4/ffffff?text=Portfolio+Site",
      technologies: ["React", "Framer Motion", "Sanity", "Vercel"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-400/20 to-accent-400/20 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-400/20 to-primary-400/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-delayed"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/30 rounded-full px-6 py-3 mb-8 glass-card dark:dark-glass">
              <span className="w-2 h-2 bg-primary-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Featured Work</span>
              <span className="w-2 h-2 bg-accent-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight">
              Our Project{' '}
              <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Flow</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Explore our curated collection of live web development projects including e-commerce platforms, 
              SaaS dashboards, and innovative digital solutions that drive exceptional business results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-800">
          <div className="glass-card dark:dark-glass rounded-3xl p-12 max-w-3xl mx-auto hover-lift hover-glow dark:dark-glow-blue">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-6 text-gradient-vibrant dark:text-gradient-vibrant-dark">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Let's build something amazing together. From concept to launch, we'll guide you through every step of the flow.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center hover-lift text-xl magnetic group"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
