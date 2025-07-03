import React, { useMemo } from 'react'
import { ArrowRight, Code, Palette, Zap, Sparkles, Globe } from 'lucide-react'

const Hero: React.FC = () => {
  // Memoize tech logos to prevent recreating array on every render
  const techLogos = useMemo(() => [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
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
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg dark:shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-primary-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 dark:text-white">Building the Future of Web</span>
              <Sparkles className="w-5 h-5 text-primary-600 dark:text-cyan-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-gray-900 dark:text-white mb-8 leading-[0.9] tracking-tight">
              Building Digital{' '}
              <span className="relative">
                <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark animate-pulse-glow">Experiences</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-cyan-500/30 dark:to-blue-500/30 blur-xl"></div>
              </span>
              <br />
              <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                One <span className="text-gradient-animated dark:text-gradient-animated-dark">Flow</span> at a Time
              </span>
            </h1>
          </div>

          {/* Enhanced Sub-headline */}
          <div className="animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16 leading-relaxed max-w-5xl mx-auto font-medium">
              Transform your business with seamless web solutions that flow perfectly. 
              From custom development to ready-made templates, we build digital experiences that convert and inspire.
            </p>
          </div>

          {/* Enhanced feature highlights */}
          <div className="animate-fade-in-up delay-300">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Code className="w-7 h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Modern Development</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Palette className="w-7 h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Custom Design</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Zap className="w-7 h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover-glow magnetic group">
                <Globe className="w-7 h-7 text-primary-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-fade-in-up delay-400">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#portfolio"
                className="btn-primary group inline-flex items-center justify-center text-lg hover-lift relative overflow-hidden dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400 dark:text-white dark:border-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                aria-label="Explore our portfolio of completed projects"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Work
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" aria-hidden="true" />
                </span>
              </a>
              <a
                href="#for-sale"
                className="btn-secondary group inline-flex items-center justify-center text-lg hover-lift magnetic dark:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                aria-label="Browse our collection of ready-made website templates"
              >
                <span className="flex items-center">
                  Browse Templates
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          {/* Enhanced Stats & Trust Section */}
          <div className="animate-fade-in-up delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-3xl p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">Projects Delivered</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-3xl p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">Client Satisfaction</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-3xl p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">Support Available</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-3xl p-6 shadow-lg dark:shadow-cyan-500/20 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">Countries Served</p>
                </div>
              </div>
            </div>
            
            {/* Technology We Master - Infinite Scrolling Carousel */}
            <div className="max-w-6xl mx-auto overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl text-white/90 dark:text-white font-bold tracking-wide">
                  Technologies We Master
                </h3>
              </div>
              
              {/* Infinite Scrolling Container */}
              <div className="relative" role="region" aria-label="Technology showcase carousel">
                <div className="flex animate-scroll-infinite space-x-8" aria-live="polite">
                  {/* First set of logos */}
                  {techLogos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 w-16 md:w-20 h-16 md:h-20 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/15 hover:border-white/40 dark:hover:border-white/30 hover:shadow-2xl dark:hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 group focus-within:ring-4 focus-within:ring-white/30 focus-within:outline-none" tabIndex={0} role="img" aria-label={`Technology ${index + 1}`}>
                      <img 
                        src={logo}
                        alt={`Technology logo ${index + 1}`}
                        className="w-10 md:w-12 h-10 md:h-12 object-contain hover:filter hover:grayscale transition-all duration-300"
                        loading={index < 5 ? "eager" : "lazy"}
                        decoding="async"
                        width="48"
                        height="48"
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {techLogos.map((logo, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 w-16 md:w-20 h-16 md:h-20 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/15 hover:border-white/40 dark:hover:border-white/30 hover:shadow-2xl dark:hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 group focus-within:ring-4 focus-within:ring-white/30 focus-within:outline-none" tabIndex={0} role="img" aria-label={`Technology ${index + 1} (duplicate)`}>
                      <img 
                        src={logo}
                        alt={`Technology logo ${index + 1} (duplicate for scrolling)`}
                        className="w-10 md:w-12 h-10 md:h-12 object-contain hover:filter hover:grayscale transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                      />
                    </div>
                  ))}
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
