import React from 'react'
import { 
  Star, 
  Quote,
  Award,
  Users,
  Calendar,
  Coffee
} from 'lucide-react'

interface SkillTagProps {
  name: string
  level?: number
}

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium hover:from-primary-100 hover:to-accent-100 transition-all duration-300 hover:scale-105 hover:shadow-md border border-primary-100/50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10">{name}</span>
    </div>
  )
}

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
    <div className="card group p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center mb-4">
        <Quote className="w-8 h-8 text-primary-600 mr-3 group-hover:text-accent-600 transition-colors duration-300" />
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed">"{content}"</p>
      <div className="flex items-center">
        <div className="relative">
          <img 
            src={avatar} 
            alt={name}
            className="w-12 h-12 rounded-full mr-4 ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all duration-300"
          />
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{name}</h4>
          <p className="text-sm text-gray-600">{position} at {company}</p>
        </div>
      </div>
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
    <div className="text-center group">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
        <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-2 group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">{number}</div>
      <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{label}</div>
    </div>
  )
}

const About: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "Vue.js", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS", "SASS", "Bootstrap", "Figma",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Vercel",
    "Git", "Docker", "REST APIs", "GraphQL", "Stripe", "WordPress"
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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 via-transparent to-accent-900/5"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary-800 to-accent-800 bg-clip-text text-transparent mb-4 animate-gradient">
            About BuildFlow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating exceptional digital experiences 
            that drive business growth and user engagement through seamless flows.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="group">
            <div className="relative">
              <img 
                src="https://placehold.co/500x600/3b82f6/ffffff?text=Developer+Photo" 
                alt="Developer" 
                className="rounded-2xl shadow-xl w-full group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg group-hover:shadow-xl group-hover:-bottom-8 group-hover:-right-8 transition-all duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-transparent to-accent-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-6">
              Building Digital Flows Since 2019
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="hover:text-gray-700 transition-colors duration-300">
                At BuildFlow, we believe that great websites should flow naturally from concept to conversion. 
                Our team combines technical expertise with design thinking to create digital experiences 
                that not only look beautiful but also drive real business results.
              </p>
              <p className="hover:text-gray-700 transition-colors duration-300">
                We specialize in building modern, responsive websites and web applications using the latest 
                technologies. Whether you need a custom solution built from scratch or want to customize 
                one of our ready-made templates, we ensure every project flows seamlessly.
              </p>
              <p className="hover:text-gray-700 transition-colors duration-300">
                Our approach focuses on understanding your business goals, your users' needs, and creating 
                the perfect flow that connects them. From initial consultation to final deployment, 
                we're with you every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-4">
              Our Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Proficient in modern web technologies and frameworks, constantly evolving 
              with the latest industry standards to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <SkillTag key={index} name={skill} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-800 bg-clip-text text-transparent mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it - here's what some of our satisfied clients 
              have to say about working with BuildFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
