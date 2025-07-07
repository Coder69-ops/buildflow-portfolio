import React from 'react'
import { createPortal } from 'react-dom'
import { X, Lock, Sparkles, Star, Heart, ShoppingCart } from 'lucide-react'

interface AuthPromptModalProps {
  isOpen: boolean
  onClose: () => void
  onSignup: () => void
  onLogin: () => void
  title?: string
  message?: string
  action?: 'save' | 'purchase' | 'access' | 'general'
}

export const AuthPromptModal: React.FC<AuthPromptModalProps> = ({
  isOpen,
  onClose,
  onSignup,
  onLogin,
  title,
  message,
  action = 'general'
}) => {
  if (!isOpen) return null

  const actionConfig = {
    save: {
      icon: Heart,
      title: 'Save Your Favorites',
      message: 'Create an account to save templates and access them anytime, anywhere.',
      gradient: 'from-pink-500 to-rose-500',
      benefits: ['Save unlimited templates', 'Access from any device', 'Get personalized recommendations']
    },
    purchase: {
      icon: ShoppingCart,
      title: 'Complete Your Purchase',
      message: 'Sign in to purchase templates and start building amazing websites.',
      gradient: 'from-blue-500 to-purple-500',
      benefits: ['Instant download access', 'Lifetime updates', 'Premium support']
    },
    access: {
      icon: Lock,
      title: 'Access Your Dashboard',
      message: 'Sign in to view your saved templates, purchases, and account settings.',
      gradient: 'from-indigo-500 to-purple-500',
      benefits: ['View saved templates', 'Download purchases', 'Manage your account']
    },
    general: {
      icon: Sparkles,
      title: 'Join BuildFlow Community',
      message: 'Create an account to unlock the full potential of our platform.',
      gradient: 'from-cyan-500 to-blue-500',
      benefits: ['Save your favorites', 'Purchase templates', 'Get exclusive content']
    }
  }

  const config = actionConfig[action]
  const Icon = config.icon

  return createPortal(
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999999] p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${config.gradient} p-6 rounded-t-2xl text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/20 rounded-full"
          >
            <X size={20} />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center mb-3">
              <div className="p-3 bg-white/20 rounded-full mr-3">
                <Icon size={24} />
              </div>
              <h2 className="text-2xl font-bold">{title || config.title}</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              {message || config.message}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              What you'll get:
            </h3>
            <ul className="space-y-2">
              {config.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={onSignup}
              className={`w-full bg-gradient-to-r ${config.gradient} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}
            >
              <Sparkles size={18} />
              <span>Create Free Account</span>
            </button>
            
            <button
              onClick={onLogin}
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Already have an account? Sign In
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              <br />
              <span className="text-blue-600 dark:text-blue-400">100% free to get started!</span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
