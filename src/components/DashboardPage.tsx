import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNotifications } from '../contexts/NotificationContext'
import type { SavedTemplate, PurchasedTemplate } from '../types'
import { 
  User, 
  Heart,
  Download,
  Package,
  Settings,
  Edit3,
  Save,
  DollarSign,
  Eye,
  Trash2,
  Calendar,
  TrendingUp,
  Award,
  Bell,
  Shield,
  Mail,
  Globe,
  Zap,
  Star,
  ChevronRight,
  ExternalLink,
  Crown,
  Activity,
  BarChart3,
  Clock,
  Check,
  Filter,
  Search,
  MoreHorizontal
} from 'lucide-react'
import BuildFlowLogo from './BuildFlowLogo'
import Loading from './ui/Loading'

const DashboardPage: React.FC = () => {
  const { currentUser, userProfile, updateUserProfile, getSavedTemplates, getPurchasedTemplates, unsaveTemplate } = useAuth()
  const { addNotification } = useNotifications()
  const [activeTab, setActiveTab] = useState<'overview' | 'saved' | 'purchased' | 'settings'>('overview')
  const [savedTemplates, setSavedTemplates] = useState<SavedTemplate[]>([])
  const [purchasedTemplates, setPurchasedTemplates] = useState<PurchasedTemplate[]>([])
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editForm, setEditForm] = useState({
    displayName: userProfile?.displayName || '',
    email: userProfile?.email || ''
  })
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'recent' | 'popular'>('all')

  useEffect(() => {
    if (currentUser) {
      loadDashboardData()
    }
  }, [currentUser])

  useEffect(() => {
    if (userProfile) {
      setEditForm({
        displayName: userProfile.displayName || '',
        email: userProfile.email || ''
      })
    }
  }, [userProfile])

  const loadDashboardData = async () => {
    setLoading(true)
    try {
      const [saved, purchased] = await Promise.all([
        getSavedTemplates(),
        getPurchasedTemplates()
      ])
      setSavedTemplates(saved)
      setPurchasedTemplates(purchased)
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      addNotification({
        type: 'error',
        title: 'Loading Error',
        message: 'Failed to load some dashboard data. Please refresh the page.'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleProfileUpdate = async () => {
    try {
      await updateUserProfile({
        displayName: editForm.displayName,
        email: editForm.email
      })
      
      setIsEditingProfile(false)
      addNotification({
        type: 'success',
        title: 'Profile Updated',
        message: 'Your profile has been updated successfully.'
      })
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Update Failed',
        message: 'Failed to update profile. Please try again.'
      })
    }
  }

  const handleRemoveFromSaved = async (templateId: string) => {
    try {
      if (currentUser) {
        await unsaveTemplate(templateId)
        setSavedTemplates(prev => prev.filter(item => item.template?.id !== templateId))
        addNotification({
          type: 'success',
          title: 'Removed',
          message: 'Template removed from saved templates'
        })
      }
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to remove template from saved'
      })
    }
  }

  const handleDownloadTemplate = async (templateId: string, templateName: string) => {
    try {
      // Create a mock download link
      const downloadUrl = `#download-${templateId}`
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `${templateName.replace(/\s+/g, '-').toLowerCase()}.zip`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      addNotification({
        type: 'success',
        title: 'Download Started',
        message: `Downloading ${templateName}...`
      })
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Download Failed',
        message: 'Failed to download template. Please try again.'
      })
    }
  }

  const handlePreviewTemplate = (templateId: string, templateName: string) => {
    // Open preview in a new tab
    const previewUrl = `#preview-${templateId}`
    window.open(previewUrl, '_blank')
    
    addNotification({
      type: 'info',
      title: 'Preview',
      message: `Opening preview for ${templateName}`
    })
  }

  // Filter templates based on search query and filter type
  const filteredSavedTemplates = savedTemplates.filter(saved => {
    const matchesSearch = !searchQuery || 
      saved.template?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      saved.template?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = filterType === 'all' || 
      (filterType === 'recent' && new Date(saved.dateAdded).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000) ||
      (filterType === 'popular' && (saved.template?.rating || 0) >= 4.5)
    
    return matchesSearch && matchesFilter
  })

  const filteredPurchasedTemplates = purchasedTemplates.filter(purchase => {
    const matchesSearch = !searchQuery || 
      purchase.template?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      purchase.template?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = filterType === 'all' || 
      (filterType === 'recent' && new Date(purchase.purchaseDate).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000) ||
      (filterType === 'popular' && (purchase.template?.rating || 0) >= 4.5)
    
    return matchesSearch && matchesFilter
  })

  const tabs = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: TrendingUp,
      description: 'Dashboard overview',
      gradient: 'from-blue-500 to-purple-600',
      count: null
    },
    { 
      id: 'saved', 
      label: 'Saved Templates', 
      icon: Heart,
      description: 'Your favorites',
      gradient: 'from-pink-500 to-red-600',
      count: savedTemplates.length
    },
    { 
      id: 'purchased', 
      label: 'My Downloads', 
      icon: Package,
      description: 'Purchased templates',
      gradient: 'from-green-500 to-emerald-600',
      count: purchasedTemplates.length
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings,
      description: 'Account preferences',
      gradient: 'from-gray-500 to-slate-600',
      count: null
    },
  ]

  // Empty state components
  const EmptyState = ({ 
    icon: Icon, 
    title, 
    description, 
    actionLabel, 
    onAction, 
    gradient = "from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" 
  }: {
    icon: any
    title: string
    description: string
    actionLabel?: string
    onAction?: () => void
    gradient?: string
  }) => (
    <div className="text-center py-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
      <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <Icon className="w-10 h-10 text-gray-500 dark:text-gray-400" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center p-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md w-full">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <Shield className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Please log in to access your personalized dashboard and manage your templates.
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/signin'}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
            <button 
              onClick={() => window.location.href = '/signup'}
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Light mode background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      {/* Dark mode background elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-300/25 to-teal-300/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-300/25 to-indigo-300/25 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* User Profile Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <BuildFlowLogo className="text-white" width={48} height={48} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                {purchasedTemplates.length > 2 && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Welcome back, <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{currentUser.displayName || currentUser.email?.split('@')[0] || 'User'}</span>!
                </h1>
                <p className="text-blue-100 dark:text-purple-100 text-base sm:text-lg mb-3">
                  Manage your templates, downloads, and account settings.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-200" />
                    <span className="text-blue-200">Member since {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'recently'}</span>
                  </div>
                  {(purchasedTemplates.length > 0 || savedTemplates.length > 5) && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-300" />
                      <span className="text-blue-200">Active Member</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-300" />
                    <span className="text-blue-200">Online now</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <div className="group flex-1 min-w-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{savedTemplates.length + purchasedTemplates.length}</div>
                    <div className="text-blue-200 text-sm">Total Templates</div>
                  </div>
                </div>
              </div>
              
              <div className="group flex-1 min-w-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">${purchasedTemplates.reduce((total, item) => total + (item.price || 0), 0)}</div>
                    <div className="text-blue-200 text-sm">Total Spent</div>
                  </div>
                </div>
              </div>
              
              <div className="group flex-1 min-w-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{savedTemplates.length}</div>
                    <div className="text-blue-200 text-sm">Saved Items</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`group relative flex-1 min-w-[120px] px-4 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-[1.02]`
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`relative p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'}`}>
                      <Icon size={20} className={isActive ? 'text-white' : ''} />
                      {tab.count !== null && tab.count > 0 && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                          {tab.count > 99 ? '99+' : tab.count}
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className={`font-semibold text-sm ${isActive ? 'text-white' : ''}`}>{tab.label}</div>
                      <div className={`text-xs opacity-75 ${isActive ? 'text-white' : ''}`}>{tab.description}</div>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
        {loading ? (
          <Loading variant="section" message="Loading your dashboard..." />
        ) : (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {savedTemplates.length}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Saved Templates</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Your favorite designs</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {purchasedTemplates.length}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Downloads</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Purchased templates</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${purchasedTemplates.reduce((total, item) => total + (item.price || 0), 0)}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Spent</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Lifetime investment</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {savedTemplates.length + purchasedTemplates.length > 0 
                            ? `${Math.min(100, Math.round(((savedTemplates.length + purchasedTemplates.length) / 20) * 100))}%`
                            : '0%'
                          }
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Collection Progress</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {savedTemplates.length + purchasedTemplates.length === 0 
                          ? 'Start your collection'
                          : savedTemplates.length + purchasedTemplates.length >= 20
                            ? 'Amazing collection!'
                            : `${20 - (savedTemplates.length + purchasedTemplates.length)} to go`
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Boost your workflow</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button 
                      onClick={() => window.location.href = '/templates'}
                      className="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Search className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900 dark:text-white">Browse Templates</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Discover new designs</div>
                      </div>
                    </button>
                    
                    {purchasedTemplates.length > 0 && (
                      <button 
                        onClick={() => {
                          // TODO: Implement bulk download functionality
                          addNotification({
                            type: 'info',
                            title: 'Download Starting',
                            message: 'Preparing your templates for download...'
                          })
                        }}
                        className="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/50 dark:hover:to-emerald-900/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">Download All</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{purchasedTemplates.length} templates</div>
                        </div>
                      </button>
                    )}
                    
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className="group flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl hover:from-orange-100 hover:to-red-100 dark:hover:from-orange-900/50 dark:hover:to-red-900/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900 dark:text-white">Account Settings</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Manage preferences</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</span>
                    </div>
                  </div>
                  
                  {savedTemplates.length === 0 && purchasedTemplates.length === 0 ? (
                    <EmptyState 
                      icon={Activity}
                      title="No activity yet"
                      description="Start exploring our templates to see your activity here!"
                      actionLabel="Browse Templates"
                      onAction={() => window.location.href = '/templates'}
                      gradient="from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                    />
                  ) : (
                    <div className="space-y-4">
                      {[...savedTemplates.slice(0, 3), ...purchasedTemplates.slice(0, 3)]
                        .sort((a, b) => {
                          const aDate = 'dateAdded' in a ? a.dateAdded : a.purchaseDate
                          const bDate = 'dateAdded' in b ? b.dateAdded : b.purchaseDate
                          return new Date(bDate || '').getTime() - new Date(aDate || '').getTime()
                        })
                        .slice(0, 5)
                        .map((item, index) => (
                          <div key={index} className="group flex items-center justify-between p-4 bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-600/50 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${'dateAdded' in item ? 'bg-gradient-to-r from-pink-500 to-red-600' : 'bg-gradient-to-r from-green-500 to-emerald-600'}`}>
                                {'dateAdded' in item ? (
                                  <Heart className="w-5 h-5 text-white" />
                                ) : (
                                  <Download className="w-5 h-5 text-white" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {item.template?.name || 'Unknown Template'}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {'dateAdded' in item ? 'Saved' : 'Purchased'} • {
                                    new Date(
                                      'dateAdded' in item ? item.dateAdded || '' : item.purchaseDate || ''
                                    ).toLocaleDateString()
                                  }
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {'price' in item && (
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                  ${item.price}
                                </span>
                              )}
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Saved Templates Tab */}
            {activeTab === 'saved' && (
              <div className="space-y-6">
                {/* Header with Search and Filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Saved Templates ({filteredSavedTemplates.length})
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">Your favorite template collection</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="relative">
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value as any)}
                        className="pl-4 pr-8 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 appearance-none"
                      >
                        <option value="all">All Templates</option>
                        <option value="recent">Recently Added</option>
                        <option value="popular">Most Popular</option>
                      </select>
                      <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {filteredSavedTemplates.length === 0 ? (
                  <EmptyState 
                    icon={Heart}
                    title="No saved templates yet"
                    description="Start exploring our template marketplace and save your favorites to build your personal collection!"
                    actionLabel="Browse Templates"
                    onAction={() => window.location.href = '/templates'}
                    gradient="from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30"
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSavedTemplates.map((saved) => (
                      <div key={saved.id} className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                          <img 
                            src={saved.template?.imageUrl || 'https://placehold.co/400x300/gray/white?text=No+Image'} 
                            alt={saved.template?.name} 
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 flex gap-2">
                            <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                              <Heart className="w-4 h-4 fill-current" />
                            </button>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-2">
                              <button className="flex-1 bg-white/20 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                                <Eye className="w-4 h-4" />
                                Preview
                              </button>
                              <button className="flex-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Purchase
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {saved.template?.name}
                            </h4>
                            {saved.template?.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-500 dark:text-gray-400">{saved.template.rating}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Saved on {new Date(saved.dateAdded).toLocaleDateString()}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              ${saved.template?.price}
                            </span>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handlePreviewTemplate(saved.template?.id || '', saved.template?.name || '')}
                                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleRemoveFromSaved(saved.template?.id || '')}
                                className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Purchased Templates Tab */}
            {activeTab === 'purchased' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      My Downloads ({filteredPurchasedTemplates.length})
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">Templates you've purchased and own</p>
                  </div>
                  
                  {purchasedTemplates.length > 0 && (
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => {
                          // TODO: Implement bulk download functionality
                          addNotification({
                            type: 'info',
                            title: 'Bulk Download',
                            message: `Preparing ${purchasedTemplates.length} templates for download...`
                          })
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        Download All
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        <Filter className="w-4 h-4" />
                        Filter
                      </button>
                    </div>
                  )}
                </div>

                {filteredPurchasedTemplates.length === 0 ? (
                  <EmptyState 
                    icon={Package}
                    title="No downloads yet"
                    description="Purchase templates to access download links and start building amazing projects!"
                    actionLabel="Browse Templates"
                    onAction={() => window.location.href = '/templates'}
                    gradient="from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
                  />
                ) : (
                  <div className="space-y-4">
                    {filteredPurchasedTemplates.map((purchase) => (
                      <div key={purchase.id} className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="relative overflow-hidden rounded-xl shadow-md">
                              <img 
                                src={purchase.template?.imageUrl || 'https://placehold.co/120x90/gray/white?text=No+Image'} 
                                alt={purchase.template?.name} 
                                className="w-24 h-18 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {purchase.template?.name}
                                </h4>
                                <div className="flex items-center gap-2 ml-4">
                                  <div className="flex items-center gap-1">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Licensed</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>Purchased on {new Date(purchase.purchaseDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  <span className="font-semibold text-green-600 dark:text-green-400">${purchase.price}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Shield className="w-4 h-4" />
                                  <span className="capitalize">{purchase.licenseType} license</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                {purchase.template?.rating && (
                                  <>
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{purchase.template.rating} ({purchase.template.reviews || 0} reviews)</span>
                                    <span className="text-gray-300 dark:text-gray-600">•</span>
                                  </>
                                )}
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {purchase.template?.updatedAt 
                                    ? `Updated ${new Date(purchase.template.updatedAt).toLocaleDateString()}`
                                    : 'Template available'
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 w-full lg:w-auto">
                            <button 
                              onClick={() => handleDownloadTemplate(purchase.template?.id || '', purchase.template?.name || '')}
                              className="flex-1 lg:flex-none bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                            
                            <button 
                              onClick={() => handlePreviewTemplate(purchase.template?.id || '', purchase.template?.name || '')}
                              className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                              <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                            
                            <button className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105">
                              <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                            
                            <button className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105">
                              <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                {/* Profile Settings */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Profile Information
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your personal details</p>
                      </div>
                    </div>
                    {!isEditingProfile && (
                      <button
                        onClick={() => setIsEditingProfile(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      >
                        <Edit3 className="w-4 h-4" />
                        Edit Profile
                      </button>
                    )}
                  </div>

                  {isEditingProfile ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Display Name
                          </label>
                          <input
                            type="text"
                            value={editForm.displayName}
                            onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                            className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                            placeholder="Enter your display name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-4">
                        <button
                          onClick={handleProfileUpdate}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Save className="w-4 h-4" />
                          Save Changes
                        </button>
                        <button
                          onClick={() => {
                            setIsEditingProfile(false)
                            setEditForm({
                              displayName: userProfile?.displayName || '',
                              email: userProfile?.email || ''
                            })
                          }}
                          className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Display Name
                          </label>
                          <p className="text-lg font-medium text-gray-900 dark:text-white">
                            {userProfile?.displayName || 'Not set'}
                          </p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Email Address
                          </label>
                          <p className="text-lg font-medium text-gray-900 dark:text-white">
                            {userProfile?.email || 'Not set'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Member Since
                          </label>
                          <p className="text-lg font-medium text-gray-900 dark:text-white">
                            {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'Unknown'}
                          </p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Account Status
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-lg font-medium text-green-600 dark:text-green-400">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Account Preferences */}
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Account Preferences
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Customize your experience</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Bell className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about new templates and features</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={userProfile?.preferences?.emailNotifications ?? true}
                          onChange={(e) => {
                            // TODO: Implement preference update
                            addNotification({
                              type: 'info',
                              title: 'Settings Updated',
                              message: `Email notifications ${e.target.checked ? 'enabled' : 'disabled'}`
                            })
                          }}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Marketing Emails</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive promotional offers and newsletters</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={userProfile?.preferences?.marketingEmails ?? false}
                          onChange={(e) => {
                            // TODO: Implement preference update
                            addNotification({
                              type: 'info',
                              title: 'Settings Updated',
                              message: `Marketing emails ${e.target.checked ? 'enabled' : 'disabled'}`
                            })
                          }}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Public Profile</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Make your profile visible to other users</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={false}
                          onChange={(e) => {
                            // TODO: Implement preference update
                            addNotification({
                              type: 'info',
                              title: 'Settings Updated',
                              message: `Public profile ${e.target.checked ? 'enabled' : 'disabled'}`
                            })
                          }}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                        Danger Zone
                      </h3>
                      <p className="text-sm text-red-600 dark:text-red-400">Irreversible actions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-red-900/30 rounded-xl border border-red-200/50 dark:border-red-800/50">
                      <div>
                        <h4 className="font-medium text-red-900 dark:text-red-100">Delete Account</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Permanently delete your account and all associated data</p>
                      </div>
                      <button 
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                            // TODO: Implement account deletion
                            addNotification({
                              type: 'error',
                              title: 'Account Deletion',
                              message: 'Account deletion is not yet implemented. Please contact support.'
                            })
                          }
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      >
                        Delete
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-red-900/30 rounded-xl border border-red-200/50 dark:border-red-800/50">
                      <div>
                        <h4 className="font-medium text-red-900 dark:text-red-100">Clear All Data</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Remove all saved templates and purchase history</p>
                      </div>
                      <button 
                        onClick={() => {
                          if (window.confirm('Are you sure you want to clear all your data? This will remove all saved templates and purchase history.')) {
                            // TODO: Implement data clearing
                            addNotification({
                              type: 'warning',
                              title: 'Data Clearing',
                              message: 'Data clearing is not yet implemented. Please contact support.'
                            })
                          }
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
