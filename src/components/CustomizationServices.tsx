import React from 'react'
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  DollarSign,
  Users,
  Zap,
  Star
} from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative" role="article" aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-blue-600 dark:to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
      <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-500 p-8 text-center hover:-translate-y-2 overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 dark:focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:focus-within:ring-offset-gray-800">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-sm border border-primary-200/60 dark:border-gray-600/60 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg dark:shadow-cyan-500/10 group-hover:scale-110 group-hover:shadow-xl dark:group-hover:shadow-cyan-500/30 group-hover:rotate-3 transition-all duration-500" role="img" aria-hidden="true">
            <div className="text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
          
          <h3 id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gradient-vibrant dark:group-hover:text-gradient-vibrant-dark transition-all duration-300">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-base">{description}</p>
          
          <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <button 
              className="inline-flex items-center text-primary-600 dark:text-blue-400 font-semibold text-sm hover:text-primary-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 rounded-lg px-2 py-1 transition-all duration-300"
              aria-label={`Learn more about ${title} service`}
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CustomizationServices: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Palette size={24} />,
      title: "Branding Integration",
      description: "Seamlessly integrate your brand colors, fonts, logos, and visual identity to create a cohesive brand experience across your website."
    },
    {
      icon: <Code size={24} />,
      title: "Feature Development",
      description: "Add custom functionality, integrate third-party APIs, implement advanced features to enhance your website's capabilities."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Optimization",
      description: "Ensure your website performs flawlessly across all devices with responsive design and mobile-first optimization."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings with technical SEO, meta optimization, and performance enhancements."
    }
  ]

  const processSteps = [
    {
      title: "Consultation",
      description: "We discuss your needs, requirements, and vision for the website customization project."
    },
    {
      title: "Design",
      description: "Create mockups and designs that align with your brand and user experience goals."
    },
    {
      title: "Development",
      description: "Implement the customizations using modern technologies and best practices."
    },
    {
      title: "Launch",
      description: "Deploy your customized website and provide ongoing support and maintenance."
    }
  ]

  return (
    <section id="customization" className="relative bg-gradient-mesh section-padding overflow-hidden">
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
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/30 rounded-full px-6 py-3 mb-8 glass-card dark:dark-glass">
            <span className="w-2 h-2 bg-primary-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Professional Services</span>
            <span className="w-2 h-2 bg-accent-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight">
            <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Customization</span> Services
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform any ready-made website template into a unique, branded experience that perfectly 
            matches your business needs and vision with our expert customization services.
          </p>
        </div>

        {/* Service Cards - Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Benefits Section - Enhanced */}
        <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-primary-600/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-blue-600/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-xl dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/30 transition-all duration-500 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-bl-full opacity-50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-100/80 dark:bg-blue-900/40 backdrop-blur-md border border-primary-200/60 dark:border-blue-700/60 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-primary-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-primary-700 dark:text-blue-300">Premium Services</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight">
                  Why Choose Our <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Customization</span> Services?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                      <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors duration-300">Expert Development Team</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Experienced developers who understand modern web technologies and best practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                      <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">Fast Turnaround</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Quick delivery without compromising on quality, typically within 1-2 weeks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                      <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">Ongoing Support</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Continued maintenance and support to keep your website running smoothly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                      <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover/item:text-orange-600 dark:group-hover/item:text-orange-400 transition-colors duration-300">Affordable Pricing</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Competitive rates that deliver exceptional value for your investment.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center group/image">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-2xl blur-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-8 shadow-xl dark:shadow-cyan-500/20 group-hover/image:shadow-2xl dark:group-hover/image:shadow-cyan-500/40 transition-all duration-500 group-hover/image:scale-105">
                    <div className="text-white text-center">
                      <h4 className="text-2xl md:text-3xl font-bold mb-4">Customization Process</h4>
                      <div className="space-y-4 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <span className="text-blue-100">Consultation & Planning</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <span className="text-blue-100">Design & Development</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <span className="text-blue-100">Testing & Optimization</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <span className="text-blue-100">Launch & Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-100/80 dark:bg-purple-900/40 backdrop-blur-md border border-accent-200/60 dark:border-purple-700/60 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-accent-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-accent-700 dark:text-purple-300">Simple Process</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Our Simple <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">4-Step Process</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final launch, we guide you through every step 
              of the customization journey with transparency and expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-500 p-8 group-hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 dark:from-blue-600 dark:to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl transition-all duration-500">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-gradient-vibrant dark:group-hover:text-gradient-vibrant-dark transition-all duration-300">{step.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Enhanced */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 dark:from-blue-600 dark:via-purple-600 dark:to-blue-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 dark:from-blue-600 dark:via-blue-700 dark:to-purple-600 rounded-3xl p-12 md:p-16 text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-transparent to-accent-400/20 dark:from-blue-400/20 dark:via-transparent dark:to-purple-400/20"></div>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                  <Zap className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">Ready to Start?</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Ready to Transform <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">Your Website?</span>
                </h3>
                
                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss your customization needs and create a website that truly represents your brand. 
                  Get started today with a free consultation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#contact" 
                    className="group/btn bg-white text-primary-600 dark:text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center text-lg"
                  >
                    Get a Custom Quote
                    <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <div className="text-blue-100 text-sm">
                    <span className="inline-flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Free consultation included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizationServices
