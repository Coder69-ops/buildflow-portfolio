import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

const BuildFlowLogo: React.FC<LogoProps> = ({ className = "", width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 400" 
      className={`transition-all duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="text-primary-600" stopColor="currentColor" />
          <stop offset="100%" className="text-accent-600" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="text-primary-500" stopColor="currentColor" />
          <stop offset="100%" className="text-accent-500" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="text-primary-400" stopColor="currentColor" />
          <stop offset="100%" className="text-accent-400" stopColor="currentColor" />
        </linearGradient>
      </defs>
      
      {/* Flow waves with enhanced styling */}
      <path 
        d="M200 80 Q220 100 240 120 Q260 140 280 160 Q300 180 320 200 Q300 220 280 240 Q260 260 240 280 Q220 300 200 320" 
        stroke="url(#flowGradient1)" 
        strokeWidth="12" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDelay: '0s', animationDuration: '3s' }}
      />
      <path 
        d="M180 100 Q200 120 220 140 Q240 160 260 180 Q280 200 300 220 Q280 240 260 260 Q240 280 220 300 Q200 320 180 340" 
        stroke="url(#flowGradient2)" 
        strokeWidth="12" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDelay: '0.5s', animationDuration: '3s' }}
      />
      <path 
        d="M160 120 Q180 140 200 160 Q220 180 240 200 Q260 220 280 240 Q260 260 240 280 Q220 300 200 320 Q180 340 160 360" 
        stroke="url(#flowGradient3)" 
        strokeWidth="12" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDelay: '1s', animationDuration: '3s' }}
      />
    </svg>
  )
}

export default BuildFlowLogo
