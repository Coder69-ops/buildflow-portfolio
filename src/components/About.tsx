import React from 'react'
import { 
  Star, 
  Quote,
  Award,
  Users,
  Calendar,
  Coffee,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react'

interface TestimonialProps {
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, 
  position, 
  company, 
  content, 
  avatar, 
  rating 
}) => {
  return (
    <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/40 transition-all duration-500 p-8 hover:-translate-y-2 hover:scale-[1.02]">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Quote and rating */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <Quote className="w-10 h-10 text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform duration-300" 
              style={{ transitionDelay: `${i * 100}ms` }} 
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <p className="relative z-10 text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
        "{content}"
      </p>
      
      {/* Author info */}
      <div className="relative z-10 flex items-center">
        <div className="relative">
          <img 
            src={avatar} 
            alt={name}
            className="w-14 h-14 rounded-full mr-4 ring-2 ring-primary-100 dark:ring-gray-600 group-hover:ring-primary-300 dark:group-hover:ring-blue-400 transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 dark:from-blue-400/30 dark:to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Pulse ring */}
          <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-700 dark:group-hover:text-blue-300 transition-colors duration-300 text-lg">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{position} at {company}</p>
        </div>
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  number: string
  label: string
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <div className="group relative text-center">
      {/* Icon container with enhanced styling */}
      <div className="relative w-20 h-20 bg-gradient-to-br from-white/90 via-primary-50/80 to-accent-50/80 dark:from-gray-800/90 dark:via-gray-700/80 dark:to-gray-600/80 backdrop-blur-md border border-primary-200/60 dark:border-gray-600/60 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg dark:shadow-cyan-500/20 group-hover:scale-110 group-hover:shadow-2xl dark:group-hover:shadow-cyan-500/40 transition-all duration-500 group-hover:-translate-y-2">
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-accent-400/10 to-primary-400/20 dark:from-blue-400/30 dark:via-purple-400/15 dark:to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Icon */}
        <div className="relative z-10 text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
        
        {/* Sparkle effect */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      </div>
      
      {/* Number with enhanced gradient */}
      <div className="text-4xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark mb-3 group-hover:scale-110 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:via-accent-600 group-hover:to-primary-600 group-hover:bg-clip-text">
        {number}
      </div>
      
      {/* Label */}
      <div className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 font-medium">
        {label}
      </div>
    </div>
  )
}

const About: React.FC = () => {
  // Partner/Client logos for the animated carousel
  const partnerLogos = [
    "https://placehold.co/120x60/3b82f6/ffffff?text=TechCorp",
    "https://placehold.co/120x60/10b981/ffffff?text=StartupXYZ", 
    "https://placehold.co/120x60/8b5cf6/ffffff?text=InnovateLab",
    "https://placehold.co/120x60/ef4444/ffffff?text=DigitalFlow",
    "https://placehold.co/120x60/f59e0b/ffffff?text=CloudVision",
    "https://placehold.co/120x60/06b6d4/ffffff?text=DataSync",
    "https://placehold.co/120x60/84cc16/ffffff?text=WebForge",
    "https://placehold.co/120x60/ec4899/ffffff?text=AppCraft",
    "https://placehold.co/120x60/6366f1/ffffff?text=CodeLabs",
    "https://placehold.co/120x60/14b8a6/ffffff?text=TechSuite",
    "https://placehold.co/120x60/f97316/ffffff?text=DevHub",
    "https://placehold.co/120x60/a855f7/ffffff?text=SystemPro",
    "https://placehold.co/120x60/22c55e/ffffff?text=WebMaster",
    "https://placehold.co/120x60/3b82f6/ffffff?text=CloudTech",
    "https://placehold.co/120x60/ef4444/ffffff?text=DataFlow",
    "https://placehold.co/120x60/8b5cf6/ffffff?text=CodeWave",
    "https://placehold.co/120x60/10b981/ffffff?text=TechBridge",
    "https://placehold.co/120x60/f59e0b/ffffff?text=DigitalArk",
    "https://placehold.co/120x60/06b6d4/ffffff?text=WebStream",
    "https://placehold.co/120x60/84cc16/ffffff?text=AppFlow"
  ]

  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc",
      content: "Exceptional work quality and attention to detail. The website delivered exceeded our expectations and significantly improved our conversion rates.",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Digital Solutions",
      content: "BuildFlow delivered our e-commerce platform on time and within budget. Their attention to user flow and conversion optimization exceeded our expectations. Highly recommended!",
      avatar: "https://placehold.co/100x100/10b981/ffffff?text=MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Agency",
      content: "Outstanding communication and technical expertise. They transformed our vision into a beautiful, functional website that our clients love.",
      avatar: "https://placehold.co/100x100/8b5cf6/ffffff?text=ER",
      rating: 5
    }
  ]

  const stats: StatCardProps[] = [
    {
      icon: <Users size={24} />,
      number: "100+",
      label: "Happy Clients"
    },
    {
      icon: <Award size={24} />,
      number: "150+",
      label: "Projects Completed"
    },
    {
      icon: <Calendar size={24} />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Coffee size={24} />,
      number: "1000+",
      label: "Cups of Coffee"
    }
  ]

  return (
    <section id="about" className="relative bg-gradient-mesh section-padding overflow-hidden">
      {/* Enhanced animated background elements - matching Hero */}
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
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-6 py-2 mb-6 shadow-lg dark:shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-primary-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About BuildFlow</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-animated dark:text-gradient-animated-dark mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            We're passionate about creating exceptional digital experiences 
            that drive business growth and user engagement through seamless flows.
          </p>
        </div>

        {/* Enhanced Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Enhanced image with multiple effects */}
              <img 
                src="https://ik.imagekit.io/nltb2bcz4/founder.jpg?updatedAt=1750125627342" 
                alt="Professional headshot of the developer" 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                loading="eager"
                decoding="async"
                width="600"
                height="700"
                fetchPriority="high"
              />
              
              {/* Enhanced gradient overlay with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-accent-400/25 dark:from-blue-400/30 dark:to-purple-400/35 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Animated particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-400 dark:bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-300 dark:bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent-300 dark:bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Subtle geometric patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute inset-0 border border-primary-300 dark:border-blue-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border border-accent-300 dark:border-purple-300 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>
              
              {/* Bottom corner accent */}
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/40 to-transparent dark:from-blue-400/50 rounded-tr-full"></div>
              </div>
              
              {/* Enhanced animated border with multiple layers */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary-400/40 via-accent-400/40 to-primary-400/40 dark:from-blue-400/50 dark:via-purple-400/50 dark:to-blue-400/50 animate-pulse" style={{ 
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                  maskComposite: 'exclude',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor'
                }}></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-primary-400/20 dark:from-blue-400/30 dark:via-purple-400/30 dark:to-blue-400/30 blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-700"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-4 py-2 shadow-lg dark:shadow-cyan-500/20">
              <Zap className="w-4 h-4 text-accent-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Story</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-animated dark:text-gradient-animated-dark leading-tight">
              Building Digital Flows Since 2019
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
                At BuildFlow, we believe that great websites should flow naturally from concept to conversion. 
                Our team combines technical expertise with design thinking to create digital experiences 
                that not only look beautiful but also drive real business results.
              </p>
              <p className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
                We specialize in building modern, responsive websites and web applications using the latest 
                technologies. Whether you need a custom solution built from scratch or want to customize 
                one of our ready-made templates, we ensure every project flows seamlessly.
              </p>
              <p className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
                Our approach focuses on understanding your business goals, your users' needs, and creating 
                the perfect flow that connects them. From initial consultation to final deployment, 
                we're with you every step of the way.
              </p>
            </div>
            
            {/* Enhanced key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Shield className="w-5 h-5" />, title: "Quality Assured", desc: "Rigorous testing & optimization" },
                { icon: <Zap className="w-5 h-5" />, title: "Fast Delivery", desc: "Quick turnaround times" },
                { icon: <Users className="w-5 h-5" />, title: "Client Focused", desc: "Your success is our priority" },
                { icon: <Sparkles className="w-5 h-5" />, title: "Innovation", desc: "Cutting-edge solutions" }
              ].map((benefit, index) => (
                <div key={index} className="group flex items-center gap-3 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/40 rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-lg dark:hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{benefit.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-6 py-2 mb-6 shadow-lg dark:shadow-cyan-500/20">
              <Award className="w-5 h-5 text-primary-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Impact</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Enhanced Skills Section with Client Partners */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-6 py-2 mb-6 shadow-lg dark:shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-accent-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Network</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-animated dark:text-gradient-animated-dark mb-6">
              Trusted Partners & Clients
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders and innovative startups to deliver exceptional 
              digital solutions across various sectors and business scales.
            </p>
          </div>
          
          {/* Client/Partner Logos - Infinite Scrolling like Hero */}
          <div className="mb-16 max-w-6xl mx-auto overflow-hidden">
            <div className="text-center mb-8">
              <h4 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-bold">
                Companies We've Worked With
              </h4>
            </div>
            
            {/* Infinite Scrolling Container */}
            <div className="relative">
              <div className="flex animate-scroll-infinite space-x-8">
                {/* First set of logos */}
                {partnerLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-20 md:w-24 h-20 md:h-24 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-2xl flex items-center justify-center hover:bg-white/60 dark:hover:bg-gray-700/60 hover:border-gray-300/80 dark:hover:border-gray-600/80 hover:shadow-xl dark:hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-500 group">
                    <img 
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="w-16 md:w-20 h-8 md:h-10 object-contain hover:filter hover:grayscale transition-all duration-300"
                    />
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-20 md:w-24 h-20 md:h-24 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-2xl flex items-center justify-center hover:bg-white/60 dark:hover:bg-gray-700/60 hover:border-gray-300/80 dark:hover:border-gray-600/80 hover:shadow-xl dark:hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-500 group">
                    <img 
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="w-16 md:w-20 h-8 md:h-10 object-contain hover:filter hover:grayscale transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-6 py-2 mb-6 shadow-lg dark:shadow-cyan-500/20">
              <Quote className="w-5 h-5 text-primary-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Client Testimonials</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-animated dark:text-gradient-animated-dark mb-6">
              What Our Clients Say
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - here's what some of our satisfied clients 
              have to say about working with BuildFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
