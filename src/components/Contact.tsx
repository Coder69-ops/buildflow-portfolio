import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Send,
  Linkedin,
  Github,
  MessageCircle,
  MapPin,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Star,
  Clock,
  Facebook
} from 'lucide-react'
import Loading from './ui/Loading'

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

const ContactInfoCard: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  const CardContent = () => (
    <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/40 transition-all duration-500 p-6 text-center hover:-translate-y-2 hover:scale-[1.02]">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {/* Pulse ring */}
          <div className="absolute inset-0 w-14 h-14 rounded-xl border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
          
          <div className="text-white relative z-10">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
          {content}
        </p>
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  )

  if (link) {
    return (
      <a href={link} className="block focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-xl transition-all duration-200" target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  const contactInfo: ContactInfoProps[] = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "support@buildflow.aixplore.me",
      link: "mailto:support@buildflow.aixplore.me"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+(880)1611-126819",
      link: "tel:+8801611126819"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      content: "+(880)1611-126819",
      link: "https://wa.me/8801611126819"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Khulna, Bangladesh",
      link: "https://maps.google.com/?q=Khulna,Bangladesh"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/ovejit-das-826987354/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Coder69-ops",
      color: "hover:text-gray-900"
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/profile.php?id=61578027062376",
      color: "hover:text-blue-400"
    }
  ]

  const subjectOptions = [
    "General Inquiry",
    "Website Purchase",
    "Customization Service",
    "Technical Support",
    "Partnership Opportunity"
  ]

  return (
    <section id="contact" className="relative bg-gradient-mesh section-padding overflow-hidden">
      {/* Enhanced animated background elements - matching About page */}
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
        {/* Enhanced Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 shadow-lg dark:shadow-cyan-500/20">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Get In Touch</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-animated dark:text-gradient-animated-dark mb-4 sm:mb-6 px-2">
            Let's Build Something
            <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-2">
            Ready to bring your vision to life? I'm here to help you create exceptional digital experiences 
            that drive results and exceed expectations.
          </p>
        </div>

        {/* Enhanced Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} {...info} />
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 shadow-lg dark:shadow-cyan-500/20">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600 dark:text-purple-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Why Choose Us</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-animated dark:text-gradient-animated-dark mb-4">
              Trusted by Clients Worldwide
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <CheckCircle size={24} />, number: "100+", label: "Projects Completed" },
              { icon: <Users size={24} />, number: "50+", label: "Happy Clients" },
              { icon: <Clock size={24} />, number: "24h", label: "Response Time" },
              { icon: <Star size={24} />, number: "4.9", label: "Client Rating" }
            ].map((stat, index) => (
              <div key={index} className="group relative text-center">
                <div className="relative w-20 h-20 bg-gradient-to-br from-white/90 via-primary-50/80 to-accent-50/80 dark:from-gray-800/90 dark:via-gray-700/80 dark:to-gray-600/80 backdrop-blur-md border border-primary-200/60 dark:border-gray-600/60 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg dark:shadow-cyan-500/20 group-hover:scale-110 group-hover:shadow-2xl dark:group-hover:shadow-cyan-500/40 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-accent-400/10 to-primary-400/20 dark:from-blue-400/30 dark:via-purple-400/15 dark:to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10 text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-blue-400 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-vertical hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loading variant="button" size="sm" message="Sending Message..." />
                  ) : submitStatus === 'success' ? (
                    '✓ Message Sent Successfully!'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 dark:text-green-400 text-center font-medium bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    Thank you! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Enhanced Why Work With Me Section */}
            <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/40 transition-all duration-500 p-8 hover:-translate-y-2 hover:scale-[1.02]">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-12 h-12 rounded-lg border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
                    <Shield className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">Why Choose BuildFlow?</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: <Zap className="w-5 h-5" />, title: "Lightning Fast Response", desc: "Get replies within 24 hours, often much sooner" },
                    { icon: <CheckCircle className="w-5 h-5" />, title: "Free Consultation", desc: "Initial project discussion and quote are completely free" },
                    { icon: <Shield className="w-5 h-5" />, title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden costs" },
                    { icon: <Users className="w-5 h-5" />, title: "Ongoing Support", desc: "Continued support and maintenance after completion" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="relative w-8 h-8 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <div className="text-primary-600 dark:text-blue-400 group-hover/item:text-accent-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm group-hover/item:text-gray-700 dark:group-hover/item:text-gray-200 transition-colors duration-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Enhanced Social Links */}
            <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/40 transition-all duration-500 p-8 hover:-translate-y-2 hover:scale-[1.02]">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-12 h-12 rounded-lg border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
                    <Linkedin className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">Connect With Me</h3>
                </div>
                
                <div className="flex space-x-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social relative w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.name}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Pulse ring */}
                      <div className="absolute inset-0 w-14 h-14 rounded-xl border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover/social:opacity-100 group-hover/social:scale-125 transition-all duration-500 animate-pulse"></div>
                      <div className="relative z-10">{social.icon}</div>
                    </a>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Follow for web development tips, project updates, and industry insights.
                </p>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Enhanced Quick FAQ */}
            <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-2xl dark:hover:shadow-cyan-500/40 transition-all duration-500 p-8 hover:-translate-y-2 hover:scale-[1.02]">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-12 h-12 rounded-lg border-2 border-primary-300/50 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
                    <MessageCircle className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors duration-300">Quick FAQ</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { q: "How long does a typical project take?", a: "Most websites are completed within 2-4 weeks, depending on complexity and requirements." },
                    { q: "Do you offer revisions?", a: "Yes, all projects include up to 3 rounds of revisions to ensure your complete satisfaction." },
                    { q: "What's included in the price?", a: "Design, development, basic SEO setup, mobile optimization, and comprehensive documentation." }
                  ].map((faq, index) => (
                    <div key={index} className="group/faq border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover/faq:text-primary-600 dark:group-hover/faq:text-blue-400 transition-colors duration-300 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 group-hover/faq:scale-125 transition-transform duration-300"></div>
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm ml-5 group-hover/faq:text-gray-700 dark:group-hover/faq:text-gray-200 transition-colors duration-300 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-accent-400 to-primary-400 dark:from-purple-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
