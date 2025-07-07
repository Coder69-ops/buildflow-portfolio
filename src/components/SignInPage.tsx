import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNotifications } from '../contexts/NotificationContext'
import GoogleIcon from './ui/GoogleIcon'
import BuildFlowLogo from './BuildFlowLogo'
import SEOHead from './SEOHead'
import Loading from './ui/Loading'

const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

type LoginFormData = yup.InferType<typeof loginSchema>

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, signInWithGoogle } = useAuth()
  const { addNotification } = useNotifications()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError('')
    
    try {
      await login(data.email, data.password)
      addNotification({
        type: 'success',
        title: 'Welcome back!',
        message: 'You have been signed in successfully.'
      })
      reset()
      navigate('/dashboard')
    } catch (error: any) {
      setError(error.message || 'Failed to sign in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      await signInWithGoogle()
      addNotification({
        type: 'success',
        title: 'Welcome!',
        message: 'You have been signed in with Google.'
      })
      navigate('/dashboard')
    } catch (error: any) {
      setError(error.message || 'Failed to sign in with Google')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-mesh section-padding overflow-hidden flex items-center justify-center">
      <SEOHead
        title="Sign In to BuildFlow"
        description="Access your BuildFlow dashboard by signing in with your email or Google account. Continue building amazing projects with our fast and secure platform."
        keywords="BuildFlow, sign in, login, dashboard, projects, email, Google, fast, secure"
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl float-slow"></div>
      </div>

      {/* Dark mode background elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="container relative z-10 max-w-md mx-auto">
        {/* Main Card */}
        <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-2xl dark:shadow-cyan-500/20 hover:shadow-3xl dark:hover:shadow-cyan-500/30 transition-all duration-500 p-8 sm:p-10">
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-200/30 to-transparent dark:via-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BuildFlowLogo className="text-primary-600" width={48} height={48} />
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-3">
                Welcome Back
                <span className="block text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  to BuildFlow
                </span>
              </h1>
              
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                Sign in to access your dashboard and continue building amazing projects
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg flex items-center space-x-3 animate-fade-in-up">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full mb-6 btn-glow bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 font-medium py-3 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
            >
              {isLoading ? (
                <Loading variant="button" size="sm" message="Signing in..." />
              ) : (
                <>
                  <GoogleIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with email</span>
              </div>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
                  </div>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="group">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200" />
                  </div>
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-primary-300 dark:hover:border-gray-500 hover:shadow-sm dark:hover:shadow-cyan-500/10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.password.message}</span>
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  to="/reset-password"
                  className="text-sm text-primary-600 dark:text-blue-400 hover:text-primary-500 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary btn-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
              >
                {isLoading ? (
                  <Loading variant="button" size="sm" message="Signing in..." />
                ) : (
                  <>
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-primary-600 dark:text-blue-400 hover:text-primary-500 dark:hover:text-blue-300 transition-colors duration-200 font-medium inline-flex items-center space-x-1 group"
                >
                  <span>Sign up now</span>
                  <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Secure', desc: 'Industry-standard security' },
            { icon: Zap, title: 'Fast', desc: 'Lightning-fast performance' },
            { icon: Sparkles, title: 'Modern', desc: 'Cutting-edge technology' }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignInPage
