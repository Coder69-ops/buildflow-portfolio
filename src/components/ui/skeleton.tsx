import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangle' | 'circle'
  width?: string | number
  height?: string | number
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangle',
  width,
  height 
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700'
  
  const variantClasses = {
    text: 'rounded h-4',
    rectangle: 'rounded-lg',
    circle: 'rounded-full'
  }
  
  const style = {
    width: width || undefined,
    height: height || undefined
  }
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export const SectionSkeleton: React.FC = () => (
  <div className="w-full py-20 px-4 animate-pulse">
    <div className="container mx-auto">
      {/* Section header skeleton */}
      <div className="text-center mb-16">
        <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-20 mx-auto mb-6"></div>
        <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded w-96 max-w-full mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full max-w-3xl mx-auto mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 max-w-2xl mx-auto"></div>
      </div>
      
      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-lg overflow-hidden">
            {/* Image placeholder */}
            <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
            
            {/* Content placeholder */}
            <div className="p-6">
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
              </div>
              
              {/* Tech tags skeleton */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                ))}
              </div>
              
              {/* Buttons skeleton */}
              <div className="flex space-x-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
