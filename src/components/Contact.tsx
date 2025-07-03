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
    <div className="card group p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
        <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{content}</p>
    </div>
  )

  if (link) {
    return (
      <a href={link} className="block" target="_blank" rel="noopener noreferrer">
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30"></div>
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 bg-clip-text text-transparent mb-4 animate-gradient">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300 hover:shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300 hover:shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300 hover:shadow-sm"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical hover:border-primary-300 hover:shadow-sm"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
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
            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-6">Why Work With Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response Time</h4>
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
            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-6">Connect With Me</h3>
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
            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-6">Quick FAQ</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">How long does a typical project take?</h4>
                  <p className="text-gray-600">Most websites are completed within 2-4 weeks, depending on complexity.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Do you offer revisions?</h4>
                  <p className="text-gray-600">Yes, all projects include up to 3 rounds of revisions to ensure satisfaction.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What's included in the price?</h4>
                  <p className="text-gray-600">Design, development, basic SEO setup, mobile optimization, and documentation.</p>
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
