import React, { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  ArrowUp,
  Heart,
  Facebook,
  Coffee,
  Zap,
  Sparkles,
  Target,
  Crown,
  Star
} from 'lucide-react'
import BuildFlowLogo from './BuildFlowLogo'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [isHovered, setIsHovered] = useState(false)
  const [animationStep, setAnimationStep] = useState(0)

  // Animated progress for donation goal
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Websites for Sale', to: '/for-sale' },
    { label: 'Customization', to: '/customization' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Refund Policy', to: '/refund' },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/ovejit-das-826987354/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/Coder69-ops",
      color: "hover:text-gray-300"
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: "https://www.facebook.com/profile.php?id=61578027062376",
      color: "hover:text-blue-300"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900/30"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Creative Donation Section - "Support the Flow" */}
      <div className="relative z-20 border-b border-slate-800/50">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div 
                className={`relative transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative">
                  <Coffee className="w-16 h-16 text-blue-400 drop-shadow-lg" />
                  <Sparkles className={`w-6 h-6 absolute -top-2 -right-2 text-purple-400 transition-all duration-300 ${
                    animationStep % 2 === 0 ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                  }`} />
                  <Zap className={`w-4 h-4 absolute -bottom-1 -left-1 text-yellow-400 transition-all duration-300 ${
                    animationStep % 3 === 0 ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                  }`} />
                </div>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Support the Flow ⚡
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              Love the creativity and craftsmanship? Your support fuels more innovative projects, 
              advanced features, and keeps the creative flow alive. Every contribution makes a difference! 
            </p>
          </div>

          {/* Donation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              { 
                title: "Fuel the Code", 
                amount: 10, 
                icon: Coffee, 
                color: "from-amber-500 to-orange-500",
                description: "Buy me a coffee",
                popular: false
              },
              { 
                title: "Power Boost", 
                amount: 25, 
                icon: Zap, 
                color: "from-blue-500 to-purple-500",
                description: "Accelerate development",
                popular: true
              },
              { 
                title: "Pro Support", 
                amount: 50, 
                icon: Star, 
                color: "from-purple-500 to-pink-500",
                description: "Premium features",
                popular: false
              },
              { 
                title: "Flow Master", 
                amount: 100, 
                icon: Crown, 
                color: "from-yellow-500 to-orange-500",
                description: "Ultimate supporter",
                popular: false
              }
            ].map((tier) => {
              const Icon = tier.icon
              return (
                <div key={tier.title} className="relative group">
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div 
                    className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer
                      ${selectedAmount === tier.amount 
                        ? 'border-purple-500 bg-slate-800/70 shadow-lg shadow-purple-500/20' 
                        : 'border-slate-700/50 hover:border-slate-600'
                      } 
                      group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/10`}
                    onClick={() => setSelectedAmount(tier.amount)}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{tier.title}</h4>
                      <div className="text-2xl font-bold text-white mb-2">${tier.amount}</div>
                      <p className="text-gray-400 text-sm">{tier.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto">
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Support with ${selectedAmount}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <Target className="w-4 h-4" />
              <span>Goal: $1,000 • Raised: $347</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>34.7%</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: '34.7%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Social Proof & Benefits */}
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-300 text-sm ml-2">24 supporters already joined</span>
            </div>
            <p className="text-gray-400 text-xs max-w-lg mx-auto">
              Your support helps maintain servers, develop new features, and keep everything free for the community. 
              Together, we build better digital experiences! 🚀
            </p>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 sm:-top-8 lg:-top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
        aria-label="Back to top"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
      </button>

      <div className="container pt-12 sm:pt-16 pb-6 sm:pb-8 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 group">
                <BuildFlowLogo width={32} height={32} className="sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">BuildFlow</h3>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base mx-auto sm:mx-0">
                Building exceptional digital experiences through innovative web development, 
                modern design, and seamless user flows. Transform your vision 
                into a powerful online presence that converts.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 group">
                <Mail size={14} className="sm:w-4 sm:h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <a href="mailto:support@buildflow.aixplore.me" className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  support@buildflow.aixplore.me
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 group">
                <Phone size={14} className="sm:w-4 sm:h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <a href="tel:+8801611126819" className="hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                  +(880)1611-126819
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-300 group">
                <MapPin size={14} className="sm:w-4 sm:h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">Khulna, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6 sm:mt-8">
              <h5 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Stay Updated</h5>
              <div className="flex group max-w-sm mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-2 sm:px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-xs sm:text-sm transition-all duration-300 focus:bg-slate-800"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3 sm:px-4 py-2 rounded-r-lg transition-all duration-300 hover:scale-105 text-white">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center group">
              <span className="group-hover:text-gray-300 transition-colors duration-300">© {currentYear} BuildFlow. Made with</span>
              <div className="flex items-center sm:mx-1">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1 fill-current group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="group-hover:text-gray-300 transition-colors duration-300">and seamless flows.</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-xs sm:text-sm">Follow me:</span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-800/50">
            <div className="text-center text-gray-400 text-xs">
              <p className="mb-2 hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                This website showcases web development capabilities and ready-made solutions. 
                All trademarks and copyrights belong to their respective owners.
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                Professional web development services available worldwide. 
                Fast delivery, modern technologies, exceptional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
