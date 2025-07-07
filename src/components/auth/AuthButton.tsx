import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, ChevronDown, Settings, Heart, Package, LogOut } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import UserProfileModal from './UserProfileModal'

const AuthButton: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { currentUser, userProfile, logout } = useAuth()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (showDropdown) {
        const dropdown = document.querySelector('.auth-dropdown')
        const dropdownMenu = document.querySelector('.auth-dropdown-menu')
        if (dropdown && !dropdown.contains(event.target as Node) && 
            dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
          setShowDropdown(false)
        }
      }
    }

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [showDropdown])

  if (currentUser) {
    // Authenticated user
    return (
      <>
        <div className="relative auth-dropdown">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowDropdown(!showDropdown)
            }}
            className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-400 w-full justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium truncate">
                {currentUser.displayName || 'Account'}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 flex-shrink-0" />
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <>
              <div 
                className="fixed inset-0 z-40 md:hidden bg-black/20" 
                onClick={() => setShowDropdown(false)}
              />
              <div className={`
                auth-dropdown-menu
                ${isMobile 
                  ? 'fixed left-4 right-4 top-20 z-50 max-w-sm mx-auto' 
                  : 'absolute right-0 mt-2 w-64 z-50'
                }
                bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-cyan-500/20 overflow-hidden
              `}>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                    {currentUser.displayName || 'User'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {currentUser.email}
                  </p>
                </div>
                
                <div className="p-2 max-h-64 overflow-y-auto">
                  <Link
                    to="/dashboard"
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setShowDropdown(false)}
                  >
                    <Settings className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Dashboard</span>
                  </Link>
                  
                  <button
                    onClick={() => {
                      setShowDropdown(false)
                      setShowProfileModal(true)
                    }}
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Profile Settings</span>
                  </button>
                  
                  {userProfile?.savedTemplates && userProfile.savedTemplates.length > 0 && (
                    <Link 
                      to="/dashboard"
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                      onClick={() => setShowDropdown(false)}
                    >
                      <Heart className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Saved Templates ({userProfile.savedTemplates.length})</span>
                    </Link>
                  )}
                  
                  {userProfile?.purchasedTemplates && userProfile.purchasedTemplates.length > 0 && (
                    <Link 
                      to="/dashboard"
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
                      onClick={() => setShowDropdown(false)}
                    >
                      <Package className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">My Downloads ({userProfile.purchasedTemplates.length})</span>
                    </Link>
                  )}
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                    <button
                      onClick={async (e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setShowDropdown(false)
                        try {
                          await logout()
                        } catch (error) {
                          console.error('Logout error:', error)
                        }
                      }}
                      className="w-full text-left px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <UserProfileModal 
          isOpen={showProfileModal} 
          onClose={() => setShowProfileModal(false)} 
        />
      </>
    )
  }

  // Unauthenticated user
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
      <Link
        to="/signin"
        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium text-center py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className="btn-primary px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 text-center"
      >
        Get Started
      </Link>
    </div>
  )
}

export default AuthButton