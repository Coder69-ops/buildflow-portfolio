import React, { useState } from 'react'
import { cn } from '../lib/utils'
import BuildFlowLogo from './BuildFlowLogo'
import { ThemeToggle } from './ui/theme-toggle'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#for-sale', label: 'Templates' },
    { href: '#customization', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50 shadow-2xl glass-card transition-colors duration-300">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-3 group magnetic">
              <div className="relative">
                <BuildFlowLogo width={42} height={42} className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-accent-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow"></div>
              </div>
              <span className="text-3xl font-black text-gradient-vibrant group-hover:scale-105 transition-transform duration-300">BuildFlow</span>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-bold transition-all duration-500 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 group magnetic overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 group-hover:w-3/4 transition-all duration-500 rounded-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none p-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all duration-500 magnetic group"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-7 h-7">
                  <span className={cn(
                    "absolute block w-7 h-1 bg-current transform transition-all duration-500 rounded-full",
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : "translate-y-1"
                  )}></span>
                  <span className={cn(
                    "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "translate-y-2.5"
                  )}></span>
                  <span className={cn(
                    "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                    isMobileMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-4"
                  )}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-500 ease-in-out overflow-hidden',
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="space-y-1 mt-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="px-4 py-3">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
