import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useNotifications } from '../../contexts/NotificationContext'
import type { SavedTemplate, PurchasedTemplate } from '../../types'
import { 
  User, 
  Heart,
  Download,
  Package,
  Settings,
  LogOut,
  Edit3,
  Save,
  X,
  Clock,
  DollarSign,
  Eye,
  Trash2
} from 'lucide-react'
import Loading from '../ui/Loading'

interface DashboardProps {
  isOpen: boolean
  onClose: () => void
}

const UserDashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
  const { currentUser, userProfile, updateUserProfile, logout, getSavedTemplates, getPurchasedTemplates, unsaveTemplate } = useAuth()
  const { addNotification } = useNotifications()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [savedTemplates, setSavedTemplates] = useState<SavedTemplate[]>([])
  const [purchasedTemplates, setPurchasedTemplates] = useState<PurchasedTemplate[]>([])
  
  const [editData, setEditData] = useState({
    displayName: userProfile?.displayName || '',
    preferences: {
      theme: userProfile?.preferences?.theme || 'dark' as 'light' | 'dark' | 'system',
      emailNotifications: userProfile?.preferences?.emailNotifications ?? true,
      marketingEmails: userProfile?.preferences?.marketingEmails ?? false,
      language: userProfile?.preferences?.language || 'en',
      timezone: userProfile?.preferences?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  })

  // Load user data when dashboard opens
  useEffect(() => {
    if (isOpen && currentUser) {
      loadUserData()
    }
  }, [isOpen, currentUser])

  const loadUserData = async () => {
    setLoading(true)
    
    try {
      const [savedData, purchasedData] = await Promise.all([
        getSavedTemplates(),
        getPurchasedTemplates()
      ])
      
      setSavedTemplates(savedData)
      setPurchasedTemplates(purchasedData)
    } catch (err) {
      console.error('Error loading user data:', err)
      addNotification({
        type: 'error',
        title: 'Loading Failed',
        message: 'Failed to load your data. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen || !currentUser) return null

  const handleSave = async () => {
    try {
      setLoading(true)
      
      await updateUserProfile({
        displayName: editData.displayName,
        preferences: editData.preferences
      })
      
      setIsEditing(false)
      addNotification({
        type: 'success',
        title: 'Profile Updated!',
        message: 'Your profile has been successfully updated.'
      })
    } catch (error) {
      console.error('Error updating profile:', error)
      addNotification({
        type: 'error',
        title: 'Update Failed',
        message: 'Failed to update profile. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      onClose()
    } catch (error) {
      console.error('Error logging out:', error)
      addNotification({
        type: 'error',
        title: 'Logout Failed',
        message: 'Failed to log out. Please try again.'
      })
    }
  }

  const handleUnsaveTemplate = async (templateId: string) => {
    try {
      setLoading(true)
      await unsaveTemplate(templateId)
      // Refresh saved templates
      const updatedSaved = await getSavedTemplates()
      setSavedTemplates(updatedSaved)
      addNotification({
        type: 'success',
        title: 'Template Removed',
        message: 'Template has been removed from your saved list.'
      })
    } catch (error) {
      console.error('Error unsaving template:', error)
      addNotification({
        type: 'error',
        title: 'Remove Failed',
        message: 'Failed to remove template. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadTemplate = (downloadUrl: string, templateName: string) => {
    // In a real app, this would handle secure download
    if (downloadUrl && downloadUrl !== '#') {
      window.open(downloadUrl, '_blank')
      addNotification({
        type: 'success',
        title: 'Download Started',
        message: `${templateName} download has begun.`
      })
    } else {
      addNotification({
        type: 'error',
        title: 'Download Unavailable',
        message: 'Download link is not available for this template.'
      })
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'saved', label: 'Saved', icon: Heart },
    { id: 'purchased', label: 'Purchased', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflow: 'auto'
      }}
    >
      <div 
        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-2xl dark:shadow-cyan-500/20 w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 relative"
        style={{
          margin: '16px',
          maxHeight: '90vh',
          width: '100%',
          maxWidth: '1152px' // max-w-6xl equivalent
        }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/20 to-accent-50/50 dark:from-gray-800/50 dark:via-gray-700/20 dark:to-gray-800/50 rounded-2xl"></div>
        
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-3">
              <Loading variant="inline" size="sm" message="Loading..." />
            </div>
          </div>
        )}
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 z-10"
          aria-label="Close dashboard"
        >
          <X size={24} />
        </button>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Welcome back, {userProfile?.displayName || 'User'}!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your templates, purchases, and account settings
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Member since {userProfile?.createdAt && new Date(userProfile.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Mobile-responsive tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-1 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-primary-600 dark:text-blue-400 bg-primary-50 dark:bg-blue-900/20 border-b-2 border-primary-600 dark:border-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Saved Templates</p>
                      <p className="text-3xl font-bold">{savedTemplates.length}</p>
                    </div>
                    <Heart className="w-8 h-8 text-blue-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Purchased</p>
                      <p className="text-3xl font-bold">{purchasedTemplates.length}</p>
                    </div>
                    <Package className="w-8 h-8 text-green-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Total Spent</p>
                      <p className="text-3xl font-bold">
                        ${purchasedTemplates.reduce((sum, template) => sum + template.price, 0)}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-purple-200" />
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="md:col-span-2 lg:col-span-3 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {purchasedTemplates.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700 rounded-lg">
                        <img 
                          src={item.template?.imageUrl || 'https://placehold.co/48x48/6b7280/white?text=T'} 
                          alt={item.template?.name || 'Template'} 
                          className="w-12 h-12 rounded-lg object-cover" 
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {item.template?.name || 'Template'}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Purchased on {item.purchaseDate.toLocaleDateString()}
                          </p>
                        </div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">${item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Saved Templates Tab */}
            {activeTab === 'saved' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Saved Templates ({savedTemplates.length})
                  </h3>
                  <button
                    onClick={loadUserData}
                    className="mt-2 sm:mt-0 btn-secondary-sm"
                    disabled={loading}
                  >
                    {loading ? <Loading variant="button" size="sm" /> : 'Refresh'}
                  </button>
                </div>
                
                {savedTemplates.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      No saved templates yet
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Start exploring our template collection and save your favorites!
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-primary"
                    >
                      Browse Templates
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedTemplates.map((item) => (
                      <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                        <img 
                          src={item.template?.imageUrl || 'https://placehold.co/400x300/6b7280/white?text=Template'} 
                          alt={item.template?.name || 'Template'} 
                          className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                              {item.template?.name || 'Unnamed Template'}
                            </h4>
                            <button
                              onClick={() => handleUnsaveTemplate(item.templateId)}
                              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              title="Remove from saved"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {item.template?.description || 'No description available'}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              Saved {item.dateAdded.toLocaleDateString()}
                            </span>
                            <div className="flex gap-2">
                              {item.template?.demoUrl && (
                                <button 
                                  onClick={() => window.open(item.template?.demoUrl, '_blank')}
                                  className="btn-secondary-sm"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  Demo
                                </button>
                              )}
                              <button className="btn-primary-sm">
                                <DollarSign className="w-4 h-4 mr-1" />
                                ${item.template?.price || 0}
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
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Purchased Templates ({purchasedTemplates.length})
                  </h3>
                  <button
                    onClick={loadUserData}
                    className="mt-2 sm:mt-0 btn-secondary-sm"
                    disabled={loading}
                  >
                    {loading ? <Loading variant="button" size="sm" /> : 'Refresh'}
                  </button>
                </div>
                
                {purchasedTemplates.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      No purchases yet
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Purchase your first template to get started with premium designs!
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-primary"
                    >
                      Browse Templates
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purchasedTemplates.map((item) => (
                      <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                        <img 
                          src={item.template?.imageUrl || 'https://placehold.co/400x300/6b7280/white?text=Template'} 
                          alt={item.template?.name || 'Template'} 
                          className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                              {item.template?.name || 'Unnamed Template'}
                            </h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.status === 'active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {item.template?.description || 'No description available'}
                          </p>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">
                              ${item.price}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {item.purchaseDate.toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {item.template?.demoUrl && (
                              <button 
                                onClick={() => window.open(item.template?.demoUrl, '_blank')}
                                className="flex-1 btn-secondary-sm"
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Demo
                              </button>
                            )}
                            <button 
                              onClick={() => handleDownloadTemplate(item.downloadUrl, item.template?.name || 'Template')}
                              className="flex-1 btn-primary-sm"
                              disabled={item.status !== 'active'}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
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
              <div className="max-w-4xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Account Settings</h3>
                
                <div className="space-y-6">
                  {/* Profile Information */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Profile Information</h4>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="mt-2 sm:mt-0 btn-secondary-sm"
                      >
                        {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                        {isEditing ? 'Cancel' : 'Edit'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Display Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.displayName}
                            onChange={(e) => setEditData(prev => ({ ...prev, displayName: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                          />
                        ) : (
                          <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100">
                            {userProfile?.displayName || 'Not set'}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100">
                          {currentUser?.email}
                        </p>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button onClick={handleSave} className="btn-primary">
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </button>
                        <button onClick={() => setIsEditing(false)} className="btn-secondary">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Preferences */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Preferences</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Theme
                        </label>
                        <select
                          value={editData.preferences.theme}
                          onChange={(e) => setEditData(prev => ({ 
                            ...prev, 
                            preferences: { ...prev.preferences, theme: e.target.value as 'light' | 'dark' | 'system' }
                          }))}
                          className="w-full max-w-xs px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                        >
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                          <option value="system">System</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Language
                        </label>
                        <select
                          value={editData.preferences.language}
                          onChange={(e) => setEditData(prev => ({ 
                            ...prev, 
                            preferences: { ...prev.preferences, language: e.target.value }
                          }))}
                          className="w-full max-w-xs px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                          <option value="it">Italiano</option>
                          <option value="pt">Português</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Timezone
                        </label>
                        <select
                          value={editData.preferences.timezone}
                          onChange={(e) => setEditData(prev => ({ 
                            ...prev, 
                            preferences: { ...prev.preferences, timezone: e.target.value }
                          }))}
                          className="w-full max-w-xs px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                        >
                          <option value="UTC">UTC</option>
                          <option value="America/New_York">Eastern Time (US & Canada)</option>
                          <option value="America/Chicago">Central Time (US & Canada)</option>
                          <option value="America/Denver">Mountain Time (US & Canada)</option>
                          <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                          <option value="Europe/London">London</option>
                          <option value="Europe/Paris">Paris</option>
                          <option value="Europe/Berlin">Berlin</option>
                          <option value="Asia/Tokyo">Tokyo</option>
                          <option value="Asia/Shanghai">Shanghai</option>
                          <option value="Asia/Kolkata">Mumbai</option>
                          <option value="Australia/Sydney">Sydney</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">Email Notifications</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editData.preferences.emailNotifications}
                            onChange={(e) => setEditData(prev => ({ 
                              ...prev, 
                              preferences: { ...prev.preferences, emailNotifications: e.target.checked }
                            }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">Marketing Emails</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Receive promotional content and offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editData.preferences.marketingEmails}
                            onChange={(e) => setEditData(prev => ({ 
                              ...prev, 
                              preferences: { ...prev.preferences, marketingEmails: e.target.checked }
                            }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h4 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4">Danger Zone</h4>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default UserDashboard
