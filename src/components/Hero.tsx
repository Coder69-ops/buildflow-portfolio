import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Palette, Zap, Sparkles, Globe, Database, Server, Layers, Monitor, Settings, Cloud, GitBranch, Package, Figma, Cpu, FileCode, Braces, Hash, Smartphone, Workflow, Box, Shield, Terminal, Boxes, CircuitBoard, Flame, Compass, Activity, Hexagon, Layout, Component, Code2, Binary, Webhook, PenTool, Search, Gauge, Star, Rocket, Lock, Network, Container, Play, Atom, Store, Command, Layers3 } from 'lucide-react'

const Hero: React.FC = () => {
  // Memoize tech items with both icons and labels for accessibility
  const techItems = useMemo(() => [
    // Frontend Technologies
    { icon: Braces, label: "React", color: "text-blue-500" },
    { icon: FileCode, label: "TypeScript", color: "text-blue-600" },
    { icon: Hash, label: "JavaScript", color: "text-yellow-500" },
    { icon: Code, label: "Vue.js", color: "text-green-600" },
    { icon: Layout, label: "Angular", color: "text-red-500" },
    { icon: Monitor, label: "HTML5", color: "text-orange-500" },
    { icon: Palette, label: "CSS3", color: "text-blue-400" },
    { icon: Zap, label: "Tailwind", color: "text-cyan-400" },
    { icon: Settings, label: "Sass", color: "text-pink-500" },
    { icon: Component, label: "Material-UI", color: "text-blue-600" },
    { icon: Layers, label: "Bootstrap", color: "text-purple-500" },
    { icon: Smartphone, label: "React Native", color: "text-blue-500" },
    { icon: Play, label: "Flutter", color: "text-cyan-500" },
    { icon: Atom, label: "Svelte", color: "text-orange-500" },
    { icon: Code2, label: "Nuxt.js", color: "text-green-600" },
    
    // Backend Technologies
    { icon: Server, label: "Node.js", color: "text-green-500" },
    { icon: Layers, label: "Next.js", color: "text-gray-900 dark:text-white" },
    { icon: Code2, label: "Express.js", color: "text-gray-700 dark:text-gray-300" },
    { icon: Terminal, label: "Python", color: "text-yellow-600" },
    { icon: Cpu, label: "Django", color: "text-green-700" },
    { icon: Flame, label: "Flask", color: "text-red-600" },
    { icon: Code, label: "PHP", color: "text-indigo-500" },
    { icon: Server, label: "Laravel", color: "text-red-500" },
    { icon: Hash, label: "Java", color: "text-red-600" },
    { icon: Code, label: "Spring Boot", color: "text-green-600" },
    { icon: Terminal, label: "C#", color: "text-purple-600" },
    { icon: Server, label: ".NET", color: "text-blue-700" },
    { icon: Code, label: "Ruby", color: "text-red-500" },
    { icon: Server, label: "Rails", color: "text-red-600" },
    { icon: Code, label: "Go", color: "text-cyan-600" },
    { icon: Terminal, label: "Rust", color: "text-orange-600" },
    { icon: Code, label: "Kotlin", color: "text-purple-500" },
    { icon: Hash, label: "Swift", color: "text-orange-500" },
    { icon: Code, label: "Elixir", color: "text-purple-500" },
    { icon: Terminal, label: "Scala", color: "text-red-500" },
    
    // Databases
    { icon: Database, label: "MongoDB", color: "text-green-500" },
    { icon: Database, label: "PostgreSQL", color: "text-blue-700" },
    { icon: Database, label: "MySQL", color: "text-blue-600" },
    { icon: Database, label: "SQLite", color: "text-blue-500" },
    { icon: Database, label: "Redis", color: "text-red-500" },
    { icon: Database, label: "Elasticsearch", color: "text-yellow-600" },
    { icon: Database, label: "CouchDB", color: "text-red-600" },
    { icon: Database, label: "DynamoDB", color: "text-orange-600" },
    { icon: Database, label: "Cassandra", color: "text-blue-600" },
    { icon: Database, label: "Neo4j", color: "text-blue-500" },
    
    // Cloud & DevOps
    { icon: Cloud, label: "AWS", color: "text-orange-600" },
    { icon: Cloud, label: "Azure", color: "text-blue-600" },
    { icon: Cloud, label: "Google Cloud", color: "text-blue-500" },
    { icon: Cloud, label: "Firebase", color: "text-orange-400" },
    { icon: Cloud, label: "Vercel", color: "text-gray-900 dark:text-white" },
    { icon: Cloud, label: "Netlify", color: "text-cyan-500" },
    { icon: Cloud, label: "Heroku", color: "text-purple-600" },
    { icon: Package, label: "Docker", color: "text-blue-500" },
    { icon: Container, label: "Kubernetes", color: "text-blue-600" },
    { icon: GitBranch, label: "Git", color: "text-red-500" },
    { icon: Workflow, label: "GitHub Actions", color: "text-gray-900 dark:text-white" },
    { icon: Network, label: "Nginx", color: "text-green-600" },
    { icon: Server, label: "Apache", color: "text-red-600" },
    { icon: Workflow, label: "Jenkins", color: "text-blue-700" },
    { icon: Workflow, label: "CircleCI", color: "text-green-500" },
    { icon: Box, label: "Terraform", color: "text-purple-600" },
    
    // Tools & Frameworks
    { icon: Figma, label: "Figma", color: "text-purple-500" },
    { icon: PenTool, label: "Sketch", color: "text-orange-500" },
    { icon: Cpu, label: "GraphQL", color: "text-pink-600" },
    { icon: Webhook, label: "REST API", color: "text-blue-500" },
    { icon: Shield, label: "Auth0", color: "text-orange-500" },
    { icon: Lock, label: "OAuth", color: "text-green-600" },
    { icon: Search, label: "Algolia", color: "text-blue-500" },
    { icon: Gauge, label: "New Relic", color: "text-blue-600" },
    { icon: Activity, label: "Datadog", color: "text-purple-600" },
    { icon: Star, label: "Sentry", color: "text-purple-500" },
    { icon: Rocket, label: "Stripe", color: "text-blue-600" },
    { icon: Globe, label: "WordPress", color: "text-blue-800" },
    { icon: Store, label: "Shopify", color: "text-green-600" },
    { icon: Box, label: "Contentful", color: "text-blue-500" },
    { icon: Command, label: "Sanity", color: "text-red-500" },
    { icon: Layers3, label: "Strapi", color: "text-blue-500" },
    { icon: Binary, label: "Prisma", color: "text-gray-900 dark:text-white" },
    { icon: Atom, label: "Electron", color: "text-cyan-500" },
    { icon: Play, label: "Unity", color: "text-gray-900 dark:text-white" },
    { icon: Boxes, label: "Blender", color: "text-orange-500" },
    { icon: CircuitBoard, label: "Arduino", color: "text-cyan-600" },
    { icon: Cpu, label: "Raspberry Pi", color: "text-red-500" },
    { icon: Cpu, label: "TensorFlow", color: "text-orange-500" },
    { icon: Cpu, label: "PyTorch", color: "text-red-600" },
    { icon: Binary, label: "Pandas", color: "text-blue-600" },
    { icon: Activity, label: "NumPy", color: "text-blue-500" },
    { icon: Compass, label: "Matplotlib", color: "text-blue-500" },
    { icon: Hexagon, label: "Jupyter", color: "text-orange-500" },
    { icon: Code, label: "R", color: "text-blue-600" },
    { icon: Terminal, label: "Bash", color: "text-gray-700 dark:text-gray-300" },
    { icon: Terminal, label: "PowerShell", color: "text-blue-600" },
    { icon: Code, label: "Vim", color: "text-green-600" },
    { icon: Code, label: "Emacs", color: "text-purple-600" },
    { icon: Monitor, label: "VS Code", color: "text-blue-500" },
    { icon: Code, label: "IntelliJ", color: "text-red-500" },
    { icon: Terminal, label: "Sublime Text", color: "text-orange-500" },
    { icon: Code, label: "Atom", color: "text-green-500" },
    { icon: Hash, label: "Webpack", color: "text-blue-600" },
    { icon: Zap, label: "Vite", color: "text-purple-500" },
    { icon: Package, label: "npm", color: "text-red-500" },
    { icon: Package, label: "Yarn", color: "text-blue-600" },
    { icon: Package, label: "pnpm", color: "text-orange-500" },
    { icon: Code, label: "Babel", color: "text-yellow-600" },
    { icon: Settings, label: "ESLint", color: "text-purple-600" },
    { icon: Code, label: "Prettier", color: "text-blue-500" },
    { icon: Activity, label: "Jest", color: "text-red-500" },
    { icon: Code, label: "Cypress", color: "text-green-600" },
    { icon: Monitor, label: "Storybook", color: "text-pink-500" },
    { icon: Code, label: "Postman", color: "text-orange-500" },
    { icon: Activity, label: "Insomnia", color: "text-purple-600" },
    { icon: Workflow, label: "Swagger", color: "text-green-500" },
    { icon: Cloud, label: "Twilio", color: "text-red-500" },
    { icon: Cloud, label: "SendGrid", color: "text-blue-600" },
    { icon: Cloud, label: "Cloudflare", color: "text-orange-500" },
    { icon: Shield, label: "Okta", color: "text-blue-600" },
    { icon: Lock, label: "Keycloak", color: "text-red-500" },
    { icon: Database, label: "Supabase", color: "text-green-600" },
    { icon: Database, label: "PlanetScale", color: "text-black dark:text-white" },
    { icon: Cloud, label: "Railway", color: "text-purple-600" },
    { icon: Cloud, label: "Render", color: "text-green-500" },
    { icon: Cloud, label: "DigitalOcean", color: "text-blue-500" },
    { icon: Cloud, label: "Linode", color: "text-green-600" },
    { icon: Cloud, label: "Vultr", color: "text-blue-600" }
  ], [])

  return (
    <section id="home" className="relative bg-gradient-mesh section-padding overflow-hidden min-h-screen flex items-center">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Light mode background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary-300/30 to-accent-300/30 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-accent-300/30 to-primary-300/30 rounded-full blur-xl float-delayed"></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-gradient-to-r from-pink-300/30 to-blue-300/30 rounded-full blur-lg float"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-300/30 to-cyan-300/30 rounded-full blur-md float-slow"></div>
      </div>

      {/* Dark mode background elements - matching light mode layout */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-300/25 to-teal-300/25 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-300/25 to-indigo-300/25 rounded-full blur-xl float-delayed"></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-gradient-to-r from-emerald-300/25 to-cyan-300/25 rounded-full blur-lg float"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-violet-300/25 to-cyan-300/25 rounded-full blur-md float-slow"></div>
        
        {/* Additional dark mode ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-blue-950/20 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-900/5 to-transparent pointer-events-none"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Main Headline */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg dark:shadow-cyan-500/20">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-white">Building the Future of Web</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-cyan-400 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 leading-[0.9] tracking-tight">
              Building Digital{' '}
              <span className="relative">
                <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark animate-pulse-glow">Experiences</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-cyan-500/30 dark:to-blue-500/30 blur-xl"></div>
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
                One <span className="text-gradient-animated dark:text-gradient-animated-dark">Flow</span> at a Time
              </span>
            </h1>
          </div>

          {/* Enhanced Sub-headline */}
          <div className="animate-fade-in-up delay-200">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 sm:mb-16 leading-relaxed max-w-5xl mx-auto font-medium px-4 sm:px-0">
              Transform your business with seamless web solutions that flow perfectly. 
              From custom development to ready-made templates, we build digital experiences that convert and inspire.
            </p>
          </div>

          {/* Enhanced feature highlights */}
          <div className="animate-fade-in-up delay-300">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-sm sm:text-base md:text-lg">Modern Development</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-sm sm:text-base md:text-lg">Custom Design</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-sm sm:text-base md:text-lg">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-sm sm:text-base md:text-lg">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-fade-in-up delay-400">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Link
                to="/portfolio"
                className="btn-primary group inline-flex items-center justify-center text-base sm:text-lg hover-lift relative overflow-hidden dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400 dark:text-white dark:border-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50 w-full sm:w-auto"
                aria-label="Explore our portfolio of completed projects"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Work
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" aria-hidden="true" />
                </span>
              </Link>
              <Link
                to="/templates"
                className="btn-secondary group inline-flex items-center justify-center text-base sm:text-lg hover-lift magnetic dark:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50 w-full sm:w-auto"
                aria-label="Browse our collection of ready-made website templates"
              >
                <span className="flex items-center">
                  Browse Templates
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>

          {/* Enhanced Stats & Trust Section */}
          <div className="animate-fade-in-up delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-xs sm:text-sm">Projects Delivered</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-xs sm:text-sm">Client Satisfaction</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-xs sm:text-sm">Support Available</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-xs sm:text-sm">Countries Served</p>
                </div>
              </div>
            </div>
            
            {/* Technology We Master - Infinite Scrolling Carousel */}
            <div className="max-w-6xl mx-auto overflow-hidden px-4 sm:px-0">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white font-bold tracking-wide">
                  Technologies We Master
                </h3>
              </div>
              
              {/* Infinite Scrolling Container */}
              <div className="relative" role="region" aria-label="Technology showcase carousel">
                <div className="flex animate-scroll-infinite space-x-4 sm:space-x-6 md:space-x-8" aria-live="polite">
                  {/* First set of tech items */}
                  {techItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={`first-${index}`} className="flex-shrink-0 w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center hover:bg-white/90 dark:hover:bg-white/20 hover:border-white/60 dark:hover:border-white/40 hover:shadow-2xl dark:hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 group focus-within:ring-4 focus-within:ring-white/30 focus-within:outline-none" tabIndex={0} role="img" aria-label={`${item.label} technology`}>
                        <IconComponent 
                          className={`w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 ${item.color} group-hover:scale-110 transition-all duration-300`}
                          aria-hidden="true"
                        />
                        <span className="sr-only">{item.label}</span>
                      </div>
                    );
                  })}
                  
                  {/* Duplicate set for seamless loop */}
                  {techItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={`second-${index}`} className="flex-shrink-0 w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center hover:bg-white/90 dark:hover:bg-white/20 hover:border-white/60 dark:hover:border-white/40 hover:shadow-2xl dark:hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 group focus-within:ring-4 focus-within:ring-white/30 focus-within:outline-none" tabIndex={0} role="img" aria-label={`${item.label} technology (duplicate)`}>
                        <IconComponent 
                          className={`w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 ${item.color} group-hover:scale-110 transition-all duration-300`}
                          aria-hidden="true"
                        />
                        <span className="sr-only">{item.label} (duplicate for scrolling)</span>
                      </div>
                    );
                  })}
                </div>
                <span className="sr-only">Continuous showcase of technologies including React, Node.js, TypeScript, and more modern web development tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with magnetic effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 w-10 h-16 rounded-full flex flex-col items-center justify-center shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
          <div className="w-2 h-6 bg-gradient-to-b from-primary-600 to-accent-600 dark:from-cyan-400 dark:to-blue-400 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300"></div>
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
