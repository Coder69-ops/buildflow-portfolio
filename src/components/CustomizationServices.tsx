import React from 'react'
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card group p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
        <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{description}</p>
    </div>
  )
}

interface ProcessStepProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, isLast }) => {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
          {step}
        </div>
        {!isLast && (
          <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-gray-200 ml-6 mt-4 group-hover:from-primary-300 group-hover:to-accent-300 transition-colors duration-300"></div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{description}</p>
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
    <section id="customization" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30"></div>
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 bg-clip-text text-transparent mb-4 animate-gradient">
            Customization Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform any ready-made website template into a unique, branded experience that perfectly 
            matches your business needs and vision.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50/50 rounded-2xl p-8 md:p-12 mb-20 border border-primary-100/50 hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-6">
                Why Choose Our Customization Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">Expert Development Team</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Experienced developers who understand modern web technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">Fast Turnaround</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Quick delivery without compromising on quality, typically within 1-2 weeks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">Ongoing Support</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Continued maintenance and support to keep your website running smoothly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">Affordable Pricing</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Competitive rates that deliver exceptional value for your investment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <img 
                src="https://placehold.co/500x400/3b82f6/ffffff?text=Customization+Process" 
                alt="Customization Process" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-4">
              Our Simple 4-Step Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From initial consultation to final launch, we guide you through every step 
              of the customization journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-transparent to-accent-400/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Website?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your customization needs and create a website that truly represents your brand.
              </p>
              <a 
                href="#contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center group"
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizationServices
