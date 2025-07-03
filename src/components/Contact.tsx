import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Github,
  Twitter,
  Clock,
  MessageCircle
} from 'lucide-react'

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

const ContactInfoCard: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  const CardContent = () => (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 group p-6 text-center hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-sm border border-primary-200/60 dark:border-gray-600/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm dark:shadow-cyan-500/10 group-hover:scale-110 group-hover:shadow-lg dark:group-hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="text-primary-600 dark:text-blue-400 group-hover:text-accent-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-700 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{content}</p>
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
      content: "contact@buildflow.dev",
      link: "mailto:contact@buildflow.dev"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "San Francisco, CA"
    },
    {
      icon: <Clock size={24} />,
      title: "Availability",
      content: "Mon-Fri 9AM-6PM PST"
    }
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

  const subjectOptions = [
    "General Inquiry",
    "Website Purchase",
    "Customization Service",
    "Technical Support",
    "Partnership Opportunity"
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Enhanced background elements - matching Hero */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Light mode background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
      </div>

      {/* Dark mode background elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create 
            something amazing together. I'm here to help you succeed.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} {...info} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-primary-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      aria-required="true"
                      aria-describedby="name-help"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                      placeholder="John Doe"
                    />
                    <span id="name-help" className="sr-only">Enter your full name</span>
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
                      aria-required="true"
                      aria-describedby="email-help"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                      placeholder="john@example.com"
                    />
                    <span id="email-help" className="sr-only">Enter your email address for replies</span>
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
                    aria-required="true"
                    aria-describedby="subject-help"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span id="subject-help" className="sr-only">Choose the category that best describes your inquiry</span>
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
                    aria-required="true"
                    aria-describedby="message-help"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-vertical hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                  <span id="message-help" className="sr-only">Provide details about your project or inquiry</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  aria-describedby={isSubmitting ? "submit-status" : undefined}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" aria-hidden="true"></div>
                      <span id="submit-status">Sending message, please wait...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium">
                    Thank you! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="space-y-8">
            {/* Why Contact Me */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark mb-6">Why Work With Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quick Response Time</h4>
                    <p className="text-gray-600 text-sm">I typically respond to all inquiries within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                    <p className="text-gray-600 text-sm">Initial project discussion and quote are completely free.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden costs or surprises.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">Continued support and maintenance after project completion.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:from-primary-100 hover:to-accent-100 hover:text-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Follow me on social media for web development tips, project updates, and industry insights.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark mb-6">Quick FAQ</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">How long does a typical project take?</h4>
                  <p className="text-gray-600 dark:text-gray-400">Most websites are completed within 2-4 weeks, depending on complexity.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Do you offer revisions?</h4>
                  <p className="text-gray-600 dark:text-gray-400">Yes, all projects include up to 3 rounds of revisions to ensure satisfaction.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What's included in the price?</h4>
                  <p className="text-gray-600 dark:text-gray-400">Design, development, basic SEO setup, mobile optimization, and documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
