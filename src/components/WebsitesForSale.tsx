import React from 'react'
import { Check, Eye, MessageCircle, Star } from 'lucide-react'

interface WebsiteCardProps {
  name: string
  type: string
  description: string
  image: string
  features: string[]
  price: string
  rating?: number
  demoLink?: string
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  name,
  type,
  description,
  image,
  features,
  price,
  rating = 5,
  demoLink,
}) => {
  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg dark:shadow-cyan-500/20 hover:shadow-xl dark:hover:shadow-cyan-500/30 transition-all duration-300 p-0 h-full flex flex-col hover-lift hover-glow overflow-hidden group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={`Preview of ${name} - ${type} template showing the main layout and design`}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
          width="400"
          height="256"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Enhanced badges */}
        <div className="absolute top-6 left-6 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 px-4 py-2 rounded-2xl shadow-lg dark:shadow-cyan-500/20">
          <span className="text-sm font-bold text-gray-700 dark:text-blue-300 drop-shadow-sm">{type}</span>
        </div>
        {rating && (
          <div className="absolute top-6 right-6 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 px-4 py-2 rounded-2xl shadow-lg dark:shadow-cyan-500/20 flex items-center space-x-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{rating}</span>
          </div>
        )}
        
        {/* Enhanced overlay preview button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 px-8 py-4 rounded-2xl shadow-lg dark:shadow-cyan-500/20 flex items-center space-x-3 hover:bg-white/90 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 transition-all duration-300 magnetic transform translate-y-4 group-hover:translate-y-0"
              aria-label={`Preview ${name} template live demo`}
            >
              <Eye className="w-6 h-6 text-gray-800 dark:text-white drop-shadow-lg" />
              <span className="text-gray-800 dark:text-white font-bold text-lg drop-shadow-lg">Preview</span>
            </a>
          )}
        </div>
      </div>
      
      <div className="flex-grow p-8">
        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gradient-vibrant dark:group-hover:text-gradient-vibrant-dark transition-all duration-300">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">{description}</p>
        
        <div className="space-y-4 mb-10">
          <h4 className="font-black text-gray-900 dark:text-gray-100 flex items-center text-lg">
            <Check className="w-6 h-6 text-green-500 dark:text-green-400 mr-3" />
            Key Features:
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200/60 dark:border-gray-600/60 p-8 mt-auto bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-4xl font-black text-gradient-vibrant dark:text-gradient-vibrant-dark drop-shadow-sm">{price}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-3 font-bold">one-time</span>
          </div>
        </div>
        
        <div className="flex space-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center py-4 text-lg inline-flex items-center justify-center hover-lift magnetic"
            >
              <Eye className="w-5 h-5 mr-3" />
              View Demo
            </a>
          )}
          <a
            href="#contact"
            className="flex-1 btn-primary text-center py-4 text-lg inline-flex items-center justify-center hover-lift magnetic relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <MessageCircle className="w-5 h-5 mr-3" />
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </div>
  )
}

const WebsitesForSale: React.FC = () => {
  const websites: WebsiteCardProps[] = [
    {
      name: "E-Commerce Starter",
      type: "Online Store",
      description: "Complete e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard. Perfect for starting your online business.",
      image: "https://placehold.co/400x300/3b82f6/ffffff?text=E-Commerce+Starter",
      features: [
        "Responsive design for all devices",
        "Payment gateway integration",
        "Product catalog management",
        "Order tracking system",
        "SEO optimized structure"
      ],
      price: "$499",
      rating: 4.9,
      demoLink: "https://demo.example.com/ecommerce",
    },
    {
      name: "SaaS Landing Pro",
      type: "Landing Page",
      description: "High-converting landing page template designed specifically for SaaS products with pricing tables, feature highlights, and customer testimonials.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=SaaS+Landing",
      features: [
        "Conversion-optimized layout",
        "Pricing table components",
        "Customer testimonials section",
        "Integration-ready forms",
        "Mobile-first design"
      ],
      price: "$299",
      rating: 4.8,
      demoLink: "https://demo.example.com/saas",
    },
    {
      name: "Blogger Pro",
      type: "Blog Platform",
      description: "Professional blogging platform with content management system, comment functionality, newsletter integration, and social media sharing.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Blogger+Pro",
      features: [
        "Content management system",
        "Comment and discussion system",
        "Newsletter signup integration",
        "Social media sharing",
        "Search functionality"
      ],
      price: "$399",
      rating: 4.7,
      demoLink: "https://demo.example.com/blog",
    },
    {
      name: "Restaurant Deluxe",
      type: "Restaurant Site",
      description: "Elegant restaurant website with online menu, reservation system, gallery showcase, and location information. Perfect for hospitality businesses.",
      image: "https://placehold.co/400x300/f59e0b/ffffff?text=Restaurant+Site",
      features: [
        "Online menu display",
        "Table reservation system",
        "Photo gallery showcase",
        "Location and hours info",
        "Contact and review forms"
      ],
      price: "$349",
      rating: 4.9,
      demoLink: "https://demo.example.com/restaurant",
    },
  ]

  return (
    <section id="for-sale" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20"></div>
      <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-accent-400/25 to-primary-400/25 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-slow"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/30 rounded-full px-6 py-3 mb-8 glass-card dark:dark-glass">
              <span className="w-2 h-2 bg-accent-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Premium Templates</span>
              <span className="w-2 h-2 bg-primary-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight">
              Ready-Made{' '}
              <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Templates</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Launch your business faster with our professionally designed, fully functional templates. 
              Each template is customizable and comes with comprehensive documentation and lifetime support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {websites.map((website, index) => (
            <div 
              key={index}
              className="animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <WebsiteCard {...website} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-600">
          <div className="glass-card dark:dark-glass rounded-3xl p-12 max-w-4xl mx-auto hover-lift hover-glow dark:dark-glow-blue">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-8 text-gradient-vibrant dark:text-gradient-vibrant-dark">
              Need Something Custom?
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Don't see exactly what you're looking for? Let's create a custom solution tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="btn-primary hover-lift text-xl magnetic">
                Request Custom Quote
              </a>
              <a href="#customization" className="btn-secondary hover-lift text-xl magnetic">
                Learn About Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsitesForSale
