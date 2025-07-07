import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../lib/utils'
import BuildFlowLogo from './BuildFlowLogo'
import { ThemeToggle } from './ui/theme-toggle'
import AuthButton from './auth/AuthButton'
import { Sparkles, Zap } from 'lucide-react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const header = document.querySelector('header')
        if (header && !header.contains(event.target as Node)) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { href: '/portfolio', label: 'Projects', icon: <Zap className="w-4 h-4" /> },
    { href: '/templates', label: 'Templates', icon: <Sparkles className="w-4 h-4" /> },
    { href: '/services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
    { href: '/about', label: 'About', icon: <Sparkles className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <Zap className="w-4 h-4" /> },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200/60 dark:border-gray-800/60 shadow-2xl shadow-primary-500/10 dark:shadow-cyan-500/20" 
        : "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg"
    )}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 via-white/20 to-accent-50/30 dark:from-gray-950/30 dark:via-gray-900/20 dark:to-gray-950/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1 left-1/4 w-2 h-2 bg-primary-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -top-1 right-1/3 w-1 h-1 bg-accent-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-1 left-1/3 w-1.5 h-1.5 bg-primary-300/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <BuildFlowLogo 
                  width={36} 
                  height={36} 
                  className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10" 
                />
                {/* Animated rings around logo */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-0 rounded-full border border-accent-400/40 animate-pulse opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.2s' }}></div>
              </div>
              
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
                  BuildFlow
                </span>
                {/* Sparkle effect */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative group px-4 py-2 font-medium transition-all duration-300 rounded-lg overflow-hidden",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-500/10 before:to-accent-500/10 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
                  "after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 group-hover:after:w-full",
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 shadow-inner"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-950/30"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center space-x-2 group-hover:scale-105 transition-transform duration-200">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:rotate-12">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </span>
                
                {/* Floating particles on hover */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <AuthButton />
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <ThemeToggle />
            </div>
          </div>

          {/* Enhanced Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <ThemeToggle />
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="relative group text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 hover:scale-105"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-6 h-6 relative z-10">
                <span className={cn(
                  "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 top-3 bg-gradient-to-r from-primary-500 to-accent-500" : "top-1"
                )}></span>
                <span className={cn(
                  "absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3",
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                )}></span>
                <span className={cn(
                  "absolute block w-6 h-0.5 bg-current transform transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 top-3 bg-gradient-to-r from-primary-500 to-accent-500" : "top-5"
                )}></span>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-0 right-0 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-500 ease-in-out relative',
            isMobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          {/* Mobile menu background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/80 to-accent-50/50 dark:from-gray-900/50 dark:via-gray-800/80 dark:to-gray-900/50 backdrop-blur-sm"></div>
          
          {/* Mobile menu border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></div>
          
          <div className="mobile-menu-content py-4 relative z-10">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "group relative block px-6 py-3 font-medium transition-all duration-300 rounded-lg mx-2 overflow-hidden",
                    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-500/10 before:to-accent-500/10 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
                    "after:absolute after:left-0 after:top-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:transition-all after:duration-300 after:transform after:-translate-y-1/2 group-hover:after:w-full",
                    isActive(link.href)
                      ? "text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 shadow-inner"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-950/30"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center space-x-3 group-hover:scale-105 transition-transform duration-200">
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:rotate-12">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-4 w-0.5 h-0.5 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
                </Link>
              ))}
            </nav>
            
            {/* Enhanced Mobile Auth - Simplified for mobile */}
            <div className="px-6 py-3 border-t border-gray-300/50 dark:border-gray-600/50 mt-4 pt-6 mx-2 relative z-50">
              <div className="mobile-auth-container relative">
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
