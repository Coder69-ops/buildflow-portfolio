import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, Eye, Star, Heart, ShoppingCart, Code, Palette, Zap, Globe, Layers, Sparkles, Monitor, Layout, Briefcase, Users, Store, Award, ChevronRight } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNotifications } from '../contexts/NotificationContext'
import { useAuthUI } from '../contexts/AuthUIContext'
import { TemplateService } from '../services/templateService'
import { AuthPromptModal } from './auth/AuthPromptModal'
import Loading from './ui/Loading'
import type { Template } from '../types'

interface WebsiteCardProps extends Template {
  onAuthPrompt?: (action: 'save' | 'purchase' | 'access' | 'general', title?: string, message?: string) => void
  size?: 'small' | 'medium' | 'large'
  featured?: boolean
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ 
  onAuthPrompt, 
  size = 'medium', 
  featured = false, 
  ...template 
}) => {
  const { currentUser, saveTemplate, unsaveTemplate, isTemplateSaved, purchaseTemplate } = useAuth()
  const { addNotification } = useNotifications()
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Category configuration for context-aware design
  const categoryConfig = {
    'business': {
      icon: Briefcase,
      gradient: 'from-blue-500 to-indigo-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
      iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      accent: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      decorIcons: [Globe, Users, Award]
    },
    'ecommerce': {
      icon: Store,
      gradient: 'from-emerald-500 to-green-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
      iconBg: 'bg-gradient-to-r from-emerald-500 to-green-600',
      accent: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200/50 dark:border-emerald-800/50',
      decorIcons: [ShoppingCart, Star, Award]
    },
    'portfolio': {
      icon: Layout,
      gradient: 'from-purple-500 to-pink-600',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
      accent: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200/50 dark:border-purple-800/50',
      decorIcons: [Palette, Sparkles, Code]
    },
    'landing': {
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
      iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
      accent: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200/50 dark:border-orange-800/50',
      decorIcons: [Zap, Star, ChevronRight]
    },
    'blog': {
      icon: Monitor,
      gradient: 'from-teal-500 to-cyan-600',
      bgPattern: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30',
      iconBg: 'bg-gradient-to-r from-teal-500 to-cyan-600',
      accent: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-200/50 dark:border-teal-800/50',
      decorIcons: [Globe, Code, Layers]
    },
    'restaurant': {
      icon: Users,
      gradient: 'from-amber-500 to-orange-600',
      bgPattern: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
      iconBg: 'bg-gradient-to-r from-amber-500 to-orange-600',
      accent: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200/50 dark:border-amber-800/50',
      decorIcons: [Users, Star, Heart]
    },
    'agency': {
      icon: Layers,
      gradient: 'from-violet-500 to-purple-600',
      bgPattern: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30',
      iconBg: 'bg-gradient-to-r from-violet-500 to-purple-600',
      accent: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200/50 dark:border-violet-800/50',
      decorIcons: [Star, Sparkles, Palette]
    }
  }

  const category = template.category?.toLowerCase() as keyof typeof categoryConfig
  const config = categoryConfig[category] || categoryConfig['business']
  const Icon = config.icon
  
  // Size configurations for enhanced bento grid
  const sizeClasses = {
    small: 'min-h-[18rem] h-full',
    medium: 'min-h-[22rem] h-full', 
    large: 'min-h-[26rem] h-full'
  }

  useEffect(() => {
    if (currentUser) {
      checkIfSaved()
    }
  }, [currentUser, template.id])

  const checkIfSaved = async () => {
    try {
      const saved = await isTemplateSaved(template.id)
      setIsSaved(saved)
    } catch (error) {
      console.error('Error checking if template is saved:', error)
    }
  }

  const handleSaveTemplate = async () => {
    if (!currentUser) {
      if (onAuthPrompt) {
        onAuthPrompt('save', 'Save Template', `Sign in to save "${template.name}" to your favorites.`)
      }
      return
    }

    setIsLoading(true)
    try {
      if (isSaved) {
        await unsaveTemplate(template.id) // unsave
        setIsSaved(false)
        addNotification({
          type: 'success',
          title: 'Template Removed',
          message: `${template.name} has been removed from your saved templates.`
        })
      } else {
        await saveTemplate(template.id) // save
        setIsSaved(true)
        addNotification({
          type: 'success',
          title: 'Template Saved',
          message: `${template.name} has been saved to your collection.`
        })
      }
    } catch (error) {
      console.error('Error saving template:', error)
      addNotification({
        type: 'error',
        title: 'Save Failed',
        message: 'Failed to save template. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePurchaseTemplate = async () => {
    if (!currentUser) {
      if (onAuthPrompt) {
        onAuthPrompt('purchase', 'Purchase Template', `Sign in to purchase "${template.name}" for $${template.price}.`)
      }
      return
    }

    setIsLoading(true)
    try {
      await purchaseTemplate(template.id, template.price)
      addNotification({
        type: 'success',
        title: 'Purchase Successful',
        message: `${template.name} has been added to your purchases. Check your dashboard for download links.`
      })
    } catch (error) {
      console.error('Error purchasing template:', error)
      addNotification({
        type: 'error',
        title: 'Purchase Failed',
        message: 'Failed to purchase template. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border ${config.border} ${config.bgPattern} ${sizeClasses[size]} ${
        featured ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/30' : ''
      } transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${config.gradient} rounded-full blur-3xl transform translate-x-32 -translate-y-32 transition-transform duration-700 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`}></div>
        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${config.gradient} rounded-full blur-2xl transform -translate-x-24 translate-y-24 transition-transform duration-700 ${isHovered ? 'scale-125 -rotate-12' : 'scale-100'}`}></div>
      </div>
      
      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden">
        {config.decorIcons.map((DecorIcon, i) => (
          <DecorIcon
            key={i}
            className={`absolute w-6 h-6 ${config.accent} opacity-10 transition-all duration-1000 ${isHovered ? 'opacity-20 animate-pulse' : ''}`}
            style={{
              left: `${20 + i * 25}%`,
              top: `${15 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              transform: isHovered ? `rotate(${i * 15}deg) scale(1.1)` : 'rotate(0deg) scale(1)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 ${config.iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-black/10 dark:shadow-black/20 transform transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {featured && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">Featured</span>
              </div>
            )}
            
            {template.rating && (
              <div className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{template.rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-grow">
          <h3 className={`font-bold text-gray-900 dark:text-white mb-2 lg:mb-3 leading-tight ${
            size === 'large' ? 'text-xl lg:text-2xl' : 
            size === 'medium' ? 'text-lg lg:text-xl' : 
            'text-base lg:text-lg'
          }`}>
            {template.name}
          </h3>
          
          <p className={`text-gray-600 dark:text-gray-300 mb-3 lg:mb-4 leading-relaxed ${
            size === 'large' ? 'text-sm lg:text-base' : 
            size === 'medium' ? 'text-sm' : 
            'text-xs lg:text-sm'
          }`}>
            {size === 'small' ? 
              template.description.substring(0, 80) + (template.description.length > 80 ? '...' : '') : 
              template.description
            }
          </p>

          {/* Category Badge */}
          <div className={`inline-flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1 rounded-full font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm ${config.accent} border ${config.border} mb-3 lg:mb-4 ${
            size === 'large' ? 'text-sm' : 'text-xs'
          }`}>
            <div className={`w-2 h-2 rounded-full ${config.iconBg}`}></div>
            {template.category}
          </div>

          {/* Features Grid - Adaptive based on size */}
          <div className={`grid gap-1 lg:gap-2 mb-4 lg:mb-6 ${
            size === 'large' ? 'grid-cols-2' : 
            size === 'medium' ? 'grid-cols-1' : 
            'grid-cols-1'
          }`}>
            {template.features.slice(0, size === 'large' ? 6 : size === 'medium' ? 4 : 3).map((feature, index) => (
              <div key={index} className={`flex items-center gap-1 lg:gap-2 text-gray-600 dark:text-gray-300 ${
                size === 'large' ? 'text-sm' : 'text-xs'
              }`}>
                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Tags - Show only for larger cards */}
          {size !== 'small' && template.tags && template.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4 lg:mb-6">
              {template.tags.slice(0, size === 'large' ? 4 : 3).map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full ${
                    size === 'large' ? 'text-xs' : 'text-xs'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price and Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <div className="flex items-center gap-2">
              <span className={`font-black text-gray-900 dark:text-white ${
                size === 'large' ? 'text-2xl lg:text-3xl' : 
                size === 'medium' ? 'text-xl lg:text-2xl' : 
                'text-lg lg:text-xl'
              }`}>
                ${template.price}
              </span>
              {template.reviews && size !== 'small' && (
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
                  <span>({template.reviews})</span>
                </div>
              )}
            </div>
            
            {template.demoUrl && size !== 'small' && (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                {size === 'large' ? 'Preview' : 'View'}
              </a>
            )}
          </div>
          
          <div className={`flex gap-2 ${size === 'small' ? 'flex-col' : 'flex-row'}`}>
            <button
              onClick={handleSaveTemplate}
              disabled={isLoading}
              className={`${size === 'small' ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-1 lg:gap-2 py-2 px-3 lg:px-4 rounded-xl font-medium transition-all duration-300 ${
                isSaved
                  ? 'bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50'
              } hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${
                size === 'large' ? 'text-sm' : 'text-xs'
              }`}
            >
              {isLoading ? (
                <Loading variant="button" size="sm" showMessage={false} />
              ) : (
                <Heart className={`w-3 h-3 lg:w-4 lg:h-4 ${isSaved ? 'fill-current' : ''}`} />
              )}
              {size === 'large' ? (isSaved ? 'Saved' : 'Save') : '♥'}
            </button>
            
            <button
              onClick={handlePurchaseTemplate}
              disabled={isLoading}
              className={`${size === 'small' ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-1 lg:gap-2 py-2 px-3 lg:px-4 rounded-xl font-medium bg-gradient-to-r ${config.gradient} text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${
                size === 'large' ? 'text-sm' : 'text-xs'
              }`}
            >
              {isLoading ? (
                <Loading variant="button" size="sm" showMessage={false} />
              ) : (
                <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4" />
              )}
              {size === 'large' ? 'Buy Now' : 'Buy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const WebsitesForSale: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authPrompt, setAuthPrompt] = useState<{
    isOpen: boolean
    action: 'save' | 'purchase' | 'access' | 'general'
    title?: string
    message?: string
  }>({ isOpen: false, action: 'general' })
  const { addNotification } = useNotifications()
  const { openModal } = useAuthUI()

  const showAuthPrompt = (action: 'save' | 'purchase' | 'access' | 'general', title?: string, message?: string) => {
    setAuthPrompt({ isOpen: true, action, title, message })
  }

  const handleSignup = () => {
    setAuthPrompt({ isOpen: false, action: 'general' })
    openModal('signup')
  }

  const handleLogin = () => {
    setAuthPrompt({ isOpen: false, action: 'general' })
    openModal('login')
  }

  useEffect(() => {
    loadTemplates()
  }, [])

  const loadTemplates = async () => {
    try {
      setLoading(true)
      setError(null)
      const templatesData = await TemplateService.getTemplates()
      setTemplates(templatesData)
      
      if (templatesData.length === 0) {
        addNotification({
          type: 'info',
          title: 'No Templates Found',
          message: 'No templates are currently available. Please check back later.'
        })
      }
    } catch (err) {
      console.error('Error loading templates:', err)
      setError('Failed to load templates. Please try again.')
      addNotification({
        type: 'error',
        title: 'Loading Error',
        message: 'Failed to load templates. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="for-sale" className="relative bg-gradient-mesh section-padding overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20"></div>
        <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-accent-400/25 to-primary-400/25 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-slow"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 leading-tight px-2">
              Ready-Made{' '}
              <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Templates</span>
            </h2>
          </div>
          
          <Loading variant="section" message="Loading templates..." size="lg" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="for-sale" className="relative bg-gradient-mesh section-padding overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20"></div>
        <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-accent-400/25 to-primary-400/25 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-slow"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 leading-tight px-2">
              Ready-Made{' '}
              <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Templates</span>
            </h2>
          </div>
          
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-4">
                <p className="text-red-700 dark:text-red-300 font-semibold">{error}</p>
              </div>
              <button
                onClick={loadTemplates}
                className="btn-primary hover-lift magnetic"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="for-sale" className="relative bg-gradient-mesh section-padding overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20"></div>
      <div className="absolute top-32 left-16 w-72 h-72 bg-gradient-to-r from-accent-400/25 to-primary-400/25 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl float-slow"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-primary-400/25 to-accent-400/25 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl float"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 glass-card dark:dark-glass">
              <span className="w-2 h-2 bg-accent-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Premium Templates</span>
              <span className="w-2 h-2 bg-primary-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 leading-tight px-2">
              Ready-Made{' '}
              <span className="text-gradient-vibrant dark:text-gradient-vibrant-dark">Templates</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Launch your business faster with our professionally designed, fully functional templates. 
              Each template is customizable and comes with comprehensive documentation and lifetime support.
            </p>
          </div>
        </div>

        {templates.length > 0 ? (
          <>
            {/* Enhanced Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 mb-16 sm:mb-20 auto-rows-fr">
              {templates.map((template, index) => {
                // Create sophisticated bento grid patterns for better visual balance
                const getGridClasses = (idx: number) => {
                  const pattern = idx % 16
                  switch (pattern) {
                    // Row 1 - Hero section
                    case 0: return 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-2' // Large hero card
                    case 1: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 2: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 3: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-2' // Tall card
                    
                    // Row 2 - Continuation
                    case 4: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 5: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 6: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    
                    // Row 3 - Mixed layout
                    case 7: return 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-1' // Wide card
                    case 8: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-2' // Tall card
                    case 9: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 10: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    
                    // Row 4 - Balanced finish
                    case 11: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 12: return 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:row-span-1' // Wide card
                    case 13: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 14: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Standard card
                    case 15: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-2' // Tall card
                    
                    default: return 'lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:row-span-1' // Default standard
                  }
                }
                
                const getCardSize = (idx: number) => {
                  const pattern = idx % 16
                  switch (pattern) {
                    case 0: return 'large' as const  // Hero cards
                    case 3: case 8: case 15: return 'medium' as const  // Tall cards
                    case 7: case 12: return 'medium' as const  // Wide cards
                    default: return 'small' as const  // Standard cards
                  }
                }
                
                const gridClasses = getGridClasses(index)
                const size = getCardSize(index)
                const featured = index === 0 || index === 7 || index === 12 // Strategic featured cards
                
                return (
                  <div 
                    key={template.id}
                    className={`animate-fade-in-up hover-scale ${gridClasses}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <WebsiteCard 
                      {...template} 
                      onAuthPrompt={showAuthPrompt}
                      size={size}
                      featured={featured}
                    />
                  </div>
                )
              })}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
              <div className="text-center p-6 lg:p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/30">
                <div className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
                  {templates.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Premium Templates
                </div>
              </div>
              
              <div className="text-center p-6 lg:p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/30">
                <div className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Support Included
                </div>
              </div>
              
              <div className="text-center p-6 lg:p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 dark:border-gray-700/30">
                <div className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Customizable
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 max-w-md mx-auto border border-white/20 dark:border-gray-700/30">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                No Templates Available
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're working on adding new templates. Check back soon!
              </p>
              <button
                onClick={loadTemplates}
                className="btn-primary hover-lift magnetic"
              >
                Refresh
              </button>
            </div>
          </div>
        )}

        <div className="text-center animate-fade-in-up delay-600">
          <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto hover-lift border border-white/20 dark:border-gray-700/30">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-gradient-vibrant dark:text-gradient-vibrant-dark">
              Need Something Custom?
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed px-2">
              Don't see exactly what you're looking for? Let's create a custom solution tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/contact" className="btn-primary hover-lift text-lg sm:text-xl magnetic">
                Request Custom Quote
              </Link>
              <Link to="/services" className="btn-secondary hover-lift text-lg sm:text-xl magnetic">
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Prompt Modal */}
      <AuthPromptModal
        isOpen={authPrompt.isOpen}
        onClose={() => setAuthPrompt({ ...authPrompt, isOpen: false })}
        onSignup={handleSignup}
        onLogin={handleLogin}
        action={authPrompt.action}
        title={authPrompt.title}
        message={authPrompt.message}
      />
    </section>
  )
}

export default WebsitesForSale
