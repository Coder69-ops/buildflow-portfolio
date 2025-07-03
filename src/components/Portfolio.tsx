import React from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink?: string
  githubLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="card p-0 group hover-lift hover-glow overflow-hidden relative bg-gradient-card">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Enhanced floating action buttons */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex space-x-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-2xl hover:bg-white/30 transition-all duration-300 magnetic hover-glow"
              >
                <ExternalLink size={20} className="text-white drop-shadow-lg" />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-2xl hover:bg-white/30 transition-all duration-300 magnetic hover-glow"
              >
                <Github size={20} className="text-white drop-shadow-lg" />
              </a>
            )}
          </div>
        </div>
        
        {/* Project category badge */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <span className="glass-card px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-xl">
            Featured Project
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gradient-vibrant dark:group-hover:dark-gradient-text transition-all duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed text-lg">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-primary-800 dark:text-blue-300 text-sm font-bold rounded-2xl hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-default shadow-md hover:shadow-lg dark:shadow-glow"
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
              className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 font-bold transition-all duration-300 group/link magnetic"
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
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 font-bold transition-all duration-300 group/link magnetic"
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
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "https://placehold.co/400x300/3b82f6/ffffff?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern analytics dashboard for SaaS applications with real-time data visualization, user management, and comprehensive reporting features.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=SaaS+Dashboard",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
      demoLink: "https://demo.example.com",
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, multi-language support, and optimized performance for international business presence.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Corporate+Site",
      technologies: ["WordPress", "PHP", "MySQL", "GSAP"],
      demoLink: "https://demo.example.com",
    },
    {
      title: "Mobile App Landing",
      description: "Responsive landing page for mobile application with progressive web app features, push notifications, and app store integration.",
      image: "https://placehold.co/400x300/f59e0b/ffffff?text=Mobile+Landing",
      technologies: ["Vue.js", "PWA", "Firebase", "CSS3"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
    },
    {
      title: "Blog Platform",
      description: "Custom blog platform with markdown support, SEO optimization, comment system, and social media integration for content creators.",
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
    <section id="portfolio" className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl float-delayed"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 glass-card">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-700">Featured Work</span>
              <span className="w-2 h-2 bg-accent-600 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Our Project{' '}
              <span className="text-gradient-vibrant">Flow</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Explore our curated collection of web development projects showcasing modern technologies, 
              innovative design, and seamless user flows that drive exceptional results.
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
          <div className="glass-card rounded-3xl p-12 max-w-3xl mx-auto hover-lift hover-glow">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-gradient-vibrant">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
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
