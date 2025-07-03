import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react'
import BuildFlowLogo from './BuildFlowLogo'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Websites for Sale', href: '#for-sale' },
    { label: 'Customization', href: '#customization' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Refund Policy', href: '#refund' },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/company/buildflow",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/buildflow",
      color: "hover:text-gray-900"
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com/buildflow_dev",
      color: "hover:text-blue-400"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-500 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-20"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4 group">
                <BuildFlowLogo width={40} height={40} className="group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">BuildFlow</h3>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Building exceptional digital experiences through innovative web development, 
                modern design, and seamless user flows. Transform your vision 
                into a powerful online presence that converts.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail size={16} className="group-hover:text-primary-400 transition-colors duration-300" />
                <a href="mailto:contact@buildflow.dev" className="hover:text-primary-400 transition-colors duration-300">
                  contact@buildflow.dev
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Phone size={16} className="group-hover:text-primary-400 transition-colors duration-300" />
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <MapPin size={16} className="group-hover:text-primary-400 transition-colors duration-300" />
                <span className="group-hover:text-gray-200 transition-colors duration-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-white">Stay Updated</h5>
              <div className="flex group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm transition-all duration-300 focus:bg-gray-800"
                />
                <button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 px-4 py-2 rounded-r-lg transition-all duration-300 hover:scale-105">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center group">
              <span className="group-hover:text-gray-300 transition-colors duration-300">© {currentYear} BuildFlow. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-gray-300 transition-colors duration-300">and seamless flows.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
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

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800/50">
            <div className="text-center text-gray-400 text-xs">
              <p className="mb-2 hover:text-gray-300 transition-colors duration-300">
                This website showcases web development capabilities and ready-made solutions. 
                All trademarks and copyrights belong to their respective owners.
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300">
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
