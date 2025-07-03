import React from 'react'
import { ArrowRight, Code, Palette, Zap, Sparkles, Globe } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-mesh section-padding overflow-hidden min-h-screen flex items-center">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary-300/30 to-accent-300/30 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-accent-300/30 to-primary-300/30 rounded-full blur-xl float-delayed"></div>
        <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-gradient-to-r from-pink-300/30 to-blue-300/30 rounded-full blur-lg float"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-300/30 to-cyan-300/30 rounded-full blur-md float-slow"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Main Headline */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 glass-card">
              <Sparkles className="w-5 h-5 text-primary-600 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Building the Future of Web</span>
              <Sparkles className="w-5 h-5 text-primary-600 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
              Building Digital{' '}
              <span className="relative">
                <span className="text-gradient-vibrant animate-pulse-glow">Experiences</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 blur-xl"></div>
              </span>
              <br />
              <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                One <span className="text-gradient-animated">Flow</span> at a Time
              </span>
            </h1>
          </div>

          {/* Enhanced Sub-headline */}
          <div className="animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto font-medium">
              Transform your business with seamless web solutions that flow perfectly. 
              From custom development to ready-made templates, we build digital experiences that convert and inspire.
            </p>
          </div>

          {/* Enhanced feature highlights */}
          <div className="animate-fade-in-up delay-300">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-3 text-gray-700 glass-card px-8 py-4 rounded-2xl hover-glow magnetic group">
                <Code className="w-7 h-7 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Modern Development</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 glass-card px-8 py-4 rounded-2xl hover-glow magnetic group">
                <Palette className="w-7 h-7 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Custom Design</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 glass-card px-8 py-4 rounded-2xl hover-glow magnetic group">
                <Zap className="w-7 h-7 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 glass-card px-8 py-4 rounded-2xl hover-glow magnetic group">
                <Globe className="w-7 h-7 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-lg">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-fade-in-up delay-400">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#portfolio"
                className="btn-primary group inline-flex items-center justify-center text-lg hover-lift relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Work
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="#for-sale"
                className="btn-secondary group inline-flex items-center justify-center text-lg hover-lift magnetic"
              >
                <span className="flex items-center">
                  Browse Templates
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:rotate-12 duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Enhanced Stats & Trust Section */}
          <div className="animate-fade-in-up delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center group">
                <div className="glass-card rounded-3xl p-6 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <p className="text-gray-600 font-bold text-sm">Projects Delivered</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-card rounded-3xl p-6 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <p className="text-gray-600 font-bold text-sm">Client Satisfaction</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-card rounded-3xl p-6 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <p className="text-gray-600 font-bold text-sm">Support Available</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-card rounded-3xl p-6 hover-lift hover-glow">
                  <div className="text-4xl md:text-5xl font-black text-gradient-vibrant mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <p className="text-gray-600 font-bold text-sm">Countries Served</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-3xl">
              <p className="text-sm text-gray-500 mb-6 font-bold">Trusted by 100+ businesses worldwide</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover-scale magnetic">
                  <span className="text-gray-500 font-bold text-lg">TechCorp</span>
                </div>
                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover-scale magnetic">
                  <span className="text-gray-500 font-bold text-lg">StartupXYZ</span>
                </div>
                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover-scale magnetic">
                  <span className="text-gray-500 font-bold text-lg">Enterprise</span>
                </div>
                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover-scale magnetic">
                  <span className="text-gray-500 font-bold text-lg">Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with magnetic effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="glass-card w-10 h-16 rounded-full flex flex-col items-center justify-center hover-glow magnetic group">
          <div className="w-2 h-6 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-300"></div>
          <div className="mt-2 text-xs text-gray-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
