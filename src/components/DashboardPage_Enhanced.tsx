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
  Loader2,
  Calendar,
  TrendingUp,
  Award,
  Bell,
  Shield,
  Palette,
  Mail,
  Globe,
  Sparkles,
  Zap,
  Star,
  ChevronRight,
  ExternalLink,
  Monitor,
  Sun,
  Moon,
  Check
} from 'lucide-react'

const DashboardPage: React.FC = () => {
  const { currentUser, userProfile, updateUserProfile, getSavedTemplates, getPurchasedTemplates } = useAuth()
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
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    marketingEmails: false,
    theme: 'system' as 'light' | 'dark' | 'system'
  })

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

  const tabs = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: TrendingUp,
      description: 'Dashboard overview',
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      id: 'saved', 
      label: 'Saved Templates', 
      icon: Heart,
      description: 'Your favorites',
      gradient: 'from-pink-500 to-red-600'
    },
    { 
      id: 'purchased', 
      label: 'My Downloads', 
      icon: Package,
      description: 'Purchased templates',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings,
      description: 'Account preferences',
      gradient: 'from-gray-500 to-slate-600'
    },
  ]

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
          </div>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Please log in to access your personalized dashboard and manage your templates.
          </p>
          
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Sign In
            </button>
            <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              Create Account
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 lg:mb-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Welcome back, <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{currentUser.displayName || 'User'}</span>!
                </h1>
                <p className="text-blue-100 dark:text-purple-100 text-base lg:text-lg">
                  Manage your templates, downloads, and account settings.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-200" />
                    <span className="text-blue-200 text-sm">Member since {userProfile?.createdAt ? new Date(userProfile.createdAt).getFullYear() : 'recently'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-300" />
                    <span className="text-blue-200 text-sm">Pro Member</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-row lg:flex-col xl:flex-row items-center space-x-4 lg:space-x-0 lg:space-y-4 xl:space-y-0 xl:space-x-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex-1 lg:flex-none">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">{savedTemplates.length + purchasedTemplates.length}</div>
                  <div className="text-blue-200 text-xs lg:text-sm">Total Templates</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex-1 lg:flex-none">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">${purchasedTemplates.reduce((total, item) => total + (item.price || 0), 0)}</div>
                  <div className="text-blue-200 text-xs lg:text-sm">Total Spent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-6 lg:mb-8">
          <div className="grid grid-cols-2 lg:flex gap-1 lg:gap-2 p-1 lg:p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`group relative lg:flex-1 min-w-[120px] px-2 lg:px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-[1.02]`
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1 lg:space-y-2">
                    <div className={`p-1.5 lg:p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'}`}>
                      <Icon size={16} className={`lg:w-[18px] lg:h-[18px] ${isActive ? 'text-white' : ''}`} />
                    </div>
                    <div className="text-center">
                      <div className={`font-semibold text-xs lg:text-sm ${isActive ? 'text-white' : ''}`}>{tab.label}</div>
                      <div className={`text-xs opacity-75 hidden lg:block ${isActive ? 'text-white' : ''}`}>{tab.description}</div>
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
        <div className="min-h-[600px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <Loader2 className="absolute inset-0 m-auto animate-spin h-8 w-8 text-white" />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 p-4 lg:p-6 xl:p-8 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                      <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3 lg:mb-4">
                          <Heart className="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10 text-pink-200" />
                          <Sparkles className="h-4 lg:h-5 xl:h-6 w-4 lg:w-5 xl:w-6 text-yellow-200 opacity-75" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2">{savedTemplates.length}</h3>
                        <p className="text-blue-100 font-medium text-sm lg:text-base">Saved Templates</p>
                        <div className="mt-3 lg:mt-4 flex items-center text-blue-200">
                          <TrendingUp className="w-3 lg:w-4 h-3 lg:h-4 mr-2" />
                          <span className="text-xs lg:text-sm">+2 this week</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-4 lg:p-6 xl:p-8 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                      <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3 lg:mb-4">
                          <Package className="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10 text-green-200" />
                          <Download className="h-4 lg:h-5 xl:h-6 w-4 lg:w-5 xl:w-6 text-green-200 opacity-75" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2">{purchasedTemplates.length}</h3>
                        <p className="text-green-100 font-medium text-sm lg:text-base">Downloaded Templates</p>
                        <div className="mt-3 lg:mt-4 flex items-center text-green-200">
                          <Award className="w-3 lg:w-4 h-3 lg:h-4 mr-2" />
                          <span className="text-xs lg:text-sm">Premium access</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-4 lg:p-6 xl:p-8 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                      <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3 lg:mb-4">
                          <DollarSign className="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10 text-yellow-200" />
                          <Star className="h-4 lg:h-5 xl:h-6 w-4 lg:w-5 xl:w-6 text-yellow-200 opacity-75" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2">
                          ${purchasedTemplates.reduce((total, item) => total + (item.price || 0), 0)}
                        </h3>
                        <p className="text-orange-100 font-medium text-sm lg:text-base">Total Spent</p>
                        <div className="mt-3 lg:mt-4 flex items-center text-orange-200">
                          <TrendingUp className="w-3 lg:w-4 h-3 lg:h-4 mr-2" />
                          <span className="text-xs lg:text-sm">Great investment!</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Zap className="w-5 lg:w-6 h-5 lg:h-6 mr-3 text-blue-500" />
                        Recent Activity
                      </h3>
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center text-sm lg:text-base">
                        View All <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    
                    {savedTemplates.length === 0 && purchasedTemplates.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="w-20 lg:w-24 h-20 lg:h-24 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Sparkles className="w-10 lg:w-12 h-10 lg:h-12 text-blue-500" />
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Ready to get started?
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto text-sm lg:text-base">
                          Explore our amazing collection of templates and start building your dream website today!
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 lg:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                          Browse Templates
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {[
                          { template: { name: 'Restaurant Website' }, price: 39, purchaseDate: '2024-12-10' },
                          { template: { name: 'Blog & Magazine' }, price: 34, purchaseDate: '2024-12-05' }
                        ].map((item, index) => (
                          <div key={index} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 lg:p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Download className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">
                                  {item.template?.name}
                                </h4>
                                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                                  Purchased • ${item.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                                ${item.price}
                              </span>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800">
                                <ExternalLink className="w-4 h-4 text-gray-500" />
                              </button>
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
                <div className="animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                      Saved Templates ({savedTemplates.length})
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      View All Favorites
                    </button>
                  </div>
                  
                  {savedTemplates.length === 0 ? (
                    <div className="text-center py-16 lg:py-24 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                      <Heart className="h-16 lg:h-20 w-16 lg:w-20 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        No saved templates yet
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto text-sm lg:text-base">
                        Start exploring our template marketplace and save your favorites!
                      </p>
                      <button className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 lg:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Browse Templates
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {savedTemplates.map((saved) => (
                        <div key={saved.id} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02]">
                          <div className="relative overflow-hidden">
                            <img 
                              src={saved.template?.imageUrl || 'https://placehold.co/400x300/6366f1/white?text=Template'} 
                              alt={saved.template?.name} 
                              className="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                              <Heart className="w-4 h-4 fill-current" />
                            </button>
                          </div>
                          <div className="p-6">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                              {saved.template?.name || 'Template Name'}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                              Saved on {saved.dateAdded ? new Date(saved.dateAdded).toLocaleDateString() : 'Recently'}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                ${saved.template?.price || 'Free'}
                              </span>
                              <div className="flex space-x-2">
                                <button className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                                  <Trash2 className="w-4 h-4" />
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
                <div className="animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                      My Downloads ({purchasedTemplates.length})
                    </h3>
                    <button className="text-green-600 hover:text-green-700 dark:text-green-400 font-medium flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Download Manager
                    </button>
                  </div>
                  
                  {purchasedTemplates.length === 0 ? (
                    <div className="text-center py-16 lg:py-24 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                      <Package className="h-16 lg:h-20 w-16 lg:w-20 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        No downloads yet
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto text-sm lg:text-base">
                        Purchase templates to access download links and start building!
                      </p>
                      <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 lg:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Shop Templates
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {[
                        { id: 1, template: { name: 'Restaurant Website', imageUrl: 'https://placehold.co/400x300/10b981/white?text=Restaurant' }, price: 39, purchaseDate: '2024-12-10' },
                        { id: 2, template: { name: 'Blog & Magazine', imageUrl: 'https://placehold.co/400x300/f59e0b/white?text=Blog' }, price: 34, purchaseDate: '2024-12-05' }
                      ].map((purchase) => (
                        <div key={purchase.id} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                              <img 
                                src={purchase.template?.imageUrl || 'https://placehold.co/120x90/6366f1/white?text=Template'} 
                                alt={purchase.template?.name} 
                                className="w-full sm:w-24 lg:w-32 h-20 lg:h-24 object-cover rounded-xl"
                              />
                              <div>
                                <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2">
                                  {purchase.template?.name}
                                </h4>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Purchased on {new Date(purchase.purchaseDate || '').toLocaleDateString()}
                                  </span>
                                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                    ${purchase.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-3 w-full lg:w-auto">
                              <button className="flex-1 lg:flex-none bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium">
                                <Download size={18} />
                                <span>Download</span>
                              </button>
                              <button className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                <ExternalLink size={18} />
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
                <div className="space-y-8 animate-fade-in">
                  {/* Profile Settings */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white flex items-center mb-4 sm:mb-0">
                        <User className="w-5 lg:w-6 h-5 lg:h-6 mr-3 text-blue-500" />
                        Profile Information
                      </h3>
                      {!isEditingProfile && (
                        <button
                          onClick={() => setIsEditingProfile(true)}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                        >
                          <Edit3 size={16} />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>

                    {isEditingProfile ? (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={editForm.displayName}
                            onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                          <button
                            onClick={handleProfileUpdate}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <Save size={18} />
                            <span>Save Changes</span>
                          </button>
                          <button
                            onClick={() => setIsEditingProfile(false)}
                            className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <User className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {userProfile?.displayName || currentUser?.displayName || 'User'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {userProfile?.email || currentUser?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'Invalid Date'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Award className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                                Pro Member
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Preferences */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Settings className="w-5 lg:w-6 h-5 lg:h-6 mr-3 text-blue-500" />
                      Preferences
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Theme Preference */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Palette className="w-4 h-4 mr-2" />
                          Theme Preference
                        </h4>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'light', label: 'Light', icon: Sun },
                            { id: 'dark', label: 'Dark', icon: Moon },
                            { id: 'system', label: 'System', icon: Monitor }
                          ].map((theme) => {
                            const Icon = theme.icon
                            const isSelected = preferences.theme === theme.id
                            return (
                              <button
                                key={theme.id}
                                onClick={() => setPreferences({ ...preferences, theme: theme.id as any })}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                  isSelected
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                                }`}
                              >
                                <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
                                <p className={`text-sm font-medium ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
                                  {theme.label}
                                </p>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Notifications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Bell className="w-4 h-4 mr-2" />
                          Notifications
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about your account</p>
                            </div>
                            <button
                              onClick={() => setPreferences({ ...preferences, emailNotifications: !preferences.emailNotifications })}
                              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                                preferences.emailNotifications ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            >
                              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                                preferences.emailNotifications ? 'translate-x-6' : 'translate-x-0'
                              }`}>
                                {preferences.emailNotifications && (
                                  <Check className="w-3 h-3 text-blue-500 absolute inset-0 m-auto" />
                                )}
                              </div>
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">Marketing Emails</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Receive promotional content and offers</p>
                            </div>
                            <button
                              onClick={() => setPreferences({ ...preferences, marketingEmails: !preferences.marketingEmails })}
                              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                                preferences.marketingEmails ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            >
                              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                                preferences.marketingEmails ? 'translate-x-6' : 'translate-x-0'
                              }`}>
                                {preferences.marketingEmails && (
                                  <Check className="w-3 h-3 text-blue-500 absolute inset-0 m-auto" />
                                )}
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Account Activity */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          Account Activity
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{savedTemplates.length}</p>
                                <p className="text-sm text-pink-800 dark:text-pink-300">Saved</p>
                              </div>
                              <Heart className="w-8 h-8 text-pink-500" />
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{purchasedTemplates.length}</p>
                                <p className="text-sm text-blue-800 dark:text-blue-300">Purchased</p>
                              </div>
                              <Package className="w-8 h-8 text-blue-500" />
                            </div>
                          </div>
                        </div>
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
