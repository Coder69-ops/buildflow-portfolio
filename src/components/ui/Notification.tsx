import React, { useEffect } from 'react'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

interface NotificationProps {
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const Notification: React.FC<NotificationProps> = ({ 
  type, 
  message, 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getIconAndColors = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircle className="w-5 h-5" />,
          bgColor: 'bg-green-500',
          textColor: 'text-white'
        }
      case 'error':
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          bgColor: 'bg-red-500',
          textColor: 'text-white'
        }
      case 'warning':
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          bgColor: 'bg-yellow-500',
          textColor: 'text-white'
        }
      default:
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          bgColor: 'bg-blue-500',
          textColor: 'text-white'
        }
    }
  }

  const { icon, bgColor, textColor } = getIconAndColors()

  return (
    <div className="fixed top-4 right-4 z-[9999] pointer-events-auto">
      <div className={`${bgColor} ${textColor} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 max-w-md animate-in slide-in-from-right duration-300`}>
        {icon}
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Notification
