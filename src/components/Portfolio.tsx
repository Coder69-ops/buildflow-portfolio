import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight, ShoppingCart, BarChart3, Globe, Smartphone, PenTool, Palette, Sparkles, Zap, Database, Shield, Code, Layers, Star, Users, TrendingUp, Calendar, MessageSquare, Search, Filter } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoLink?: string
  githubLink?: string
  category: 'ecommerce' | 'saas' | 'corporate' | 'mobile' | 'cms' | 'portfolio'
  size?: 'small' | 'medium' | 'large'
  featured?: boolean
  stats?: {
    users?: string
    rating?: number
    launched?: string
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  category,
  size = 'medium',
  featured = false,
  stats
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Category-specific styling and icons
  const categoryConfig = {
    ecommerce: {
      icon: ShoppingCart,
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      bgPattern: 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20',
      iconBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
      accent: 'text-pink-600 dark:text-pink-400',
      border: 'border-pink-200/50 dark:border-pink-800/50',
      decorIcons: [Users, TrendingUp, Star]
    },
    saas: {
      icon: BarChart3,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20',
      iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      accent: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      decorIcons: [Database, Shield, Layers]
    },
    corporate: {
      icon: Globe,
      gradient: 'from-gray-600 via-slate-600 to-zinc-600',
      bgPattern: 'bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 dark:from-gray-950/20 dark:via-slate-950/20 dark:to-zinc-950/20',
      iconBg: 'bg-gradient-to-r from-gray-600 to-slate-700',
      accent: 'text-gray-600 dark:text-gray-400',
      border: 'border-gray-200/50 dark:border-gray-800/50',
      decorIcons: [Search, Filter, Calendar]
    },
    mobile: {
      icon: Smartphone,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgPattern: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/20 dark:to-yellow-950/20',
      iconBg: 'bg-gradient-to-r from-orange-500 to-amber-600',
      accent: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200/50 dark:border-orange-800/50',
      decorIcons: [Zap, Code, Sparkles]
    },
    cms: {
      icon: PenTool,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgPattern: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20',
      iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      accent: 'text-green-600 dark:text-green-400',
      border: 'border-green-200/50 dark:border-green-800/50',
      decorIcons: [MessageSquare, Users, Calendar]
    },
    portfolio: {
      icon: Palette,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bgPattern: 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20',
      iconBg: 'bg-gradient-to-r from-violet-500 to-purple-600',
      accent: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200/50 dark:border-violet-800/50',
      decorIcons: [Star, Sparkles, Palette]
    }
  }

  const config = categoryConfig[category]
  const Icon = config.icon
  
  // Size configurations for bento grid
  const sizeClasses = {
    small: 'min-h-[24rem] h-auto',
    medium: 'min-h-[28rem] h-auto', 
    large: 'min-h-[32rem] h-auto'
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border ${config.border} ${config.bgPattern} ${sizeClasses[size]} ${
        featured ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/30' : ''
      } transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${config.gradient} rounded-full blur-3xl transform translate-x-32 -translate-y-32 transition-transform duration-700 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`}></div>
        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${config.gradient} rounded-full blur-2xl transform -translate-x-24 translate-y-24 transition-transform duration-700 ${isHovered ? 'scale-125 -rotate-12' : 'scale-100'}`}></div>
      </div>
      
      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden">
        {config.decorIcons.map((DecorIcon, i) => (
          <DecorIcon
            key={i}
            className={`absolute w-6 h-6 ${config.accent} opacity-10 transition-all duration-1000 ${isHovered ? 'opacity-20 animate-pulse' : ''}`}
            style={{
              left: `${20 + i * 25}%`,
              top: `${15 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              transform: isHovered ? `rotate(${i * 15}deg) scale(1.1)` : 'rotate(0deg) scale(1)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 ${config.iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 dark:shadow-black/20 transform transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {featured && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">Featured</span>
              </div>
            )}
            
            {stats?.rating && (
              <div className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{stats.rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-1 mb-6">
          <h3 className={`text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 ${isHovered ? config.accent : ''}`}>
            {title}
          </h3>
          <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base ${size === 'small' ? 'line-clamp-2' : size === 'medium' ? 'line-clamp-3' : 'line-clamp-4'}`}>
            {description}
          </p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="flex items-center gap-4 mb-6">
            {stats.users && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{stats.users}</span>
              </div>
            )}
            {stats.launched && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{stats.launched}</span>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, size === 'small' ? 3 : size === 'medium' ? 4 : 6).map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105 ${isHovered ? config.accent : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {technologies.length > (size === 'small' ? 3 : size === 'medium' ? 4 : 6) && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-lg">
              +{technologies.length - (size === 'small' ? 3 : size === 'medium' ? 4 : 6)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group/link flex-1 justify-center`}
            >
              <ExternalLink className="w-4 h-4 transition-transform group-hover/link:rotate-12" />
              <span>Live Demo</span>
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group/link"
            >
              <Github className="w-4 h-4 transition-transform group-hover/link:rotate-12" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-5' : ''}`}></div>
    </div>
  )
}

const Portfolio: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "BloomNGlow E-Commerce Platform",
      description: "A comprehensive beauty and wellness e-commerce platform featuring advanced product catalog, secure payment processing, customer reviews, and responsive design optimized for mobile shopping experiences.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "https://bloomnglow.aixplore.me/",
      category: "ecommerce",
      size: "large",
      featured: true,
      stats: {
        users: "10K+ Users",
        rating: 4.9,
        launched: "2024"
      }
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Modern analytics dashboard for SaaS applications with real-time data visualization, user management, and comprehensive reporting features with interactive charts and KPI tracking.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "PostgreSQL"],
      demoLink: "https://demo.example.com",
      category: "saas",
      size: "medium",
      stats: {
        users: "5K+ Users",
        rating: 4.8,
        launched: "2024"
      }
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, multi-language support, and optimized performance for international business presence.",
      technologies: ["WordPress", "PHP", "MySQL", "GSAP", "SEO"],
      demoLink: "https://demo.example.com",
      category: "corporate",
      size: "small",
      stats: {
        launched: "2023"
      }
    },
    {
      title: "Mobile App Landing",
      description: "Responsive landing page for mobile application with progressive web app features, push notifications, and app store integration designed for maximum conversion rates.",
      technologies: ["Vue.js", "PWA", "Firebase", "CSS3", "Animations"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
      category: "mobile",
      size: "medium",
      stats: {
        users: "25K+ Downloads",
        rating: 4.7,
        launched: "2024"
      }
    },
    {
      title: "Content Management Platform",
      description: "Custom blog and content management platform with markdown support, SEO optimization, comment system, and social media integration for modern content creators.",
      technologies: ["Gatsby", "GraphQL", "Netlify", "Markdown"],
      demoLink: "https://demo.example.com",
      category: "cms",
      size: "small",
      stats: {
        users: "2K+ Creators",
        launched: "2023"
      }
    },
    {
      title: "Creative Portfolio Website",
      description: "Stunning portfolio website for digital artists featuring interactive galleries, smooth animations, and immersive user experience with creative transitions.",
      technologies: ["React", "Framer Motion", "Three.js", "GSAP", "Tailwind"],
      demoLink: "https://demo.example.com",
      category: "portfolio",
      size: "medium",
      featured: true,
      stats: {
        rating: 4.9,
        launched: "2024"
      }
    }
  ]

  return (
    <section id="portfolio" className="relative bg-gradient-mesh py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20"></div>
      <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-accent-400/25 to-primary-400/25 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-slow"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest work showcasing innovative solutions, beautiful designs, and cutting-edge technology implementations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'md:col-span-1' : 
                'md:col-span-1'
              } ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with our expertise in modern web development and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
