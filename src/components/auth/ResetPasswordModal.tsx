import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { 
  Mail, 
  AlertCircle,
  X,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import Loading from '../ui/Loading'

const resetSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required')
})

interface ResetPasswordFormData {
  email: string
}

interface ResetPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const { resetPassword } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetSchema)
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true)
    setError('')
    
    try {
      await resetPassword(data.email)
      setSuccess(true)
    } catch (error: any) {
      setError(error.message || 'Failed to send reset email')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    reset()
    setError('')
    setSuccess(false)
    onClose()
  }

  const handleBackToLogin = () => {
    reset()
    setError('')
    setSuccess(false)
    onSwitchToLogin()
  }

  if (!isOpen) return null

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 999999 }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-2xl dark:shadow-cyan-500/20 max-w-md w-full p-8 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50"></div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          {success ? (
            // Success state
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Check Your Email
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We've sent a password reset link to your email address. Click the link in the email to reset your password.
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleBackToLogin}
                  className="w-full btn-primary py-3 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Login
                </button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </div>
            </div>
          ) : (
            // Form state
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gradient-vibrant dark:text-gradient-vibrant-dark mb-2">
                  Reset Password
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
                </div>
              )}

              {/* Reset form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-3 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <Loading variant="button" size="sm" message="Sending reset link..." />
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Send Reset Link
                    </>
                  )}
                </button>
              </form>

              {/* Back to login link */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleBackToLogin}
                  className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-blue-400 hover:text-primary-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default ResetPasswordModal
