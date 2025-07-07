import React from 'react'
import { Sparkles, Zap, Code, Loader2 } from 'lucide-react'

interface LoadingProps {
  variant?: 'fullscreen' | 'section' | 'button' | 'inline' | 'card'
  message?: string
  size?: 'sm' | 'md' | 'lg'
  showMessage?: boolean
}

const Loading: React.FC<LoadingProps> = ({ 
  variant = 'fullscreen', 
  message = 'Loading...', 
  size = 'md',
  showMessage = true 
}) => {
  // Fullscreen loading (for page transitions)
  if (variant === 'fullscreen') {
    return (
      <div className="min-h-screen bg-gradient-mesh flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements - matching Hero */}
        <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
        
        {/* Light mode background elements */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary-300/30 to-accent-300/30 rounded-full blur-2xl float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-accent-300/30 to-primary-300/30 rounded-full blur-xl float-delayed"></div>
        </div>

        {/* Dark mode background elements */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl float animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-300/25 to-teal-300/25 rounded-full blur-2xl float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-300/25 to-indigo-300/25 rounded-full blur-xl float-delayed"></div>
          
          {/* Additional dark mode ambient lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-blue-950/20 pointer-events-none"></div>
        </div>

        {/* Loading content */}
        <div className="text-center relative z-10">
          {/* Enhanced loading indicator */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/60 rounded-2xl flex items-center justify-center mx-auto shadow-2xl dark:shadow-cyan-500/30">
              <div className="relative">
                {/* Spinning gradient border */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 rounded-full animate-spin"></div>
                <div className="absolute inset-1 w-14 h-14 bg-white dark:bg-gray-800 rounded-full"></div>
                
                {/* Center icon */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary-600 dark:text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 dark:from-purple-400 dark:to-blue-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 dark:from-blue-400 dark:to-purple-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>

          {showMessage && (
            <>
              {/* Loading text */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Loading BuildFlow
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {message}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-primary-600 dark:bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary-600 dark:bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary-600 dark:bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </>
          )}
        </div>

        {/* Subtle particle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary-400 dark:bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-400 dark:bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary-300 dark:bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    )
  }

  // Section loading (for content areas)
  if (variant === 'section') {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative mb-6">
          <div className={`${size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'} bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/60 rounded-xl flex items-center justify-center shadow-2xl dark:shadow-cyan-500/30`}>
            <div className="relative">
              <div className={`absolute inset-0 ${size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-18 h-18' : 'w-14 h-14'} bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 rounded-full animate-spin`}></div>
              <div className={`absolute inset-1 ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'} bg-white dark:bg-gray-800 rounded-full`}></div>
              <div className={`relative z-10 ${size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-18 h-18' : 'w-14 h-14'} flex items-center justify-center`}>
                <Code className={`${size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-9 h-9' : 'w-7 h-7'} text-primary-600 dark:text-cyan-400 animate-pulse`} />
              </div>
            </div>
          </div>
        </div>
        {showMessage && (
          <p className={`text-gray-600 dark:text-gray-300 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  // Button loading (for form buttons)
  if (variant === 'button') {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full animate-spin`}></div>
        </div>
        {showMessage && <span>{message}</span>}
      </div>
    )
  }

  // Inline loading (for small spaces)
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2">
        <Loader2 className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} text-primary-600 dark:text-cyan-400 animate-spin`} />
        {showMessage && (
          <span className={`text-gray-600 dark:text-gray-300 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
            {message}
          </span>
        )}
      </div>
    )
  }

  // Card loading (for dashboard cards)
  if (variant === 'card') {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/60 dark:border-gray-700/60 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg dark:shadow-cyan-500/20">
        <div className="relative mb-4">
          <div className={`${size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'} bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 rounded-full animate-spin opacity-20`}></div>
          <div className={`absolute inset-2 ${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center`}>
            <Code className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'} text-primary-600 dark:text-cyan-400 animate-pulse`} />
          </div>
        </div>
        {showMessage && (
          <p className={`text-gray-600 dark:text-gray-300 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'} text-center`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  // Default fallback
  return <Loading variant="inline" message={message} size={size} showMessage={showMessage} />
}

export default Loading
