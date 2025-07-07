import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  type User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db, isFirebaseConfigured } from '../lib/firebase'
import type { UserProfile, SavedTemplate, PurchasedTemplate } from '../types'
import { TemplateService } from '../services/templateService'

interface AuthContextType {
  currentUser: User | null
  userProfile: UserProfile | null
  loading: boolean
  signup: (email: string, password: string, displayName?: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>
  signInWithGoogle: () => Promise<void>
  // Template management
  getSavedTemplates: () => Promise<SavedTemplate[]>
  getPurchasedTemplates: () => Promise<PurchasedTemplate[]>
  saveTemplate: (templateId: string) => Promise<void>
  unsaveTemplate: (templateId: string) => Promise<void>
  isTemplateSaved: (templateId: string) => Promise<boolean>
  purchaseTemplate: (templateId: string, price: number) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const createUserProfile = async (user: User, additionalData?: Partial<UserProfile>) => {
    if (!user) return

    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, creating local user profile')
        const basicProfile: UserProfile = {
          uid: user.uid,
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          createdAt: new Date(),
          lastLogin: new Date(),
          savedTemplates: [],
          purchasedTemplates: [],
          preferences: {
            theme: 'dark',
            emailNotifications: true,
            marketingEmails: false,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          ...additionalData
        }
        setUserProfile(basicProfile)
        return
      }

      const userRef = doc(db, 'users', user.uid)
      let userDoc
      
      try {
        userDoc = await getDoc(userRef)
      } catch (readError) {
        console.warn('Cannot read user document, using local profile:', readError)
        // Create local profile when Firestore read fails
        const basicProfile: UserProfile = {
          uid: user.uid,
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          createdAt: new Date(),
          lastLogin: new Date(),
          savedTemplates: [],
          purchasedTemplates: [],
          preferences: {
            theme: 'dark',
            emailNotifications: true,
            marketingEmails: false,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          ...additionalData
        }
        setUserProfile(basicProfile)
        return
      }

      if (!userDoc.exists()) {
        const { displayName, email, photoURL } = user
        const createdAt = new Date()
        
        const newUserData = {
          uid: user.uid,
          displayName,
          email,
          photoURL,
          createdAt,
          lastLogin: createdAt,
          savedTemplates: [],
          purchasedTemplates: [],
          preferences: {
            theme: 'dark',
            emailNotifications: true,
            marketingEmails: false,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          },
          ...additionalData
        }
        
        try {
          await setDoc(userRef, newUserData)
          console.log('User profile created in Firestore')
        } catch (writeError) {
          console.warn('Cannot write to Firestore, using local profile:', writeError)
        }
        
        setUserProfile(newUserData as UserProfile)
      } else {
        // Update last login
        try {
          await updateDoc(userRef, {
            lastLogin: new Date()
          })
        } catch (updateError) {
          console.warn('Cannot update user profile in Firestore:', updateError)
        }
        
        // Get the user profile
        const profileData = userDoc.data() as UserProfile
        setUserProfile(profileData)
      }
    } catch (error) {
      console.warn('User profile creation failed, using basic profile:', error)
      // Create a basic profile from user data when all Firestore operations fail
      const basicProfile: UserProfile = {
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        createdAt: new Date(),
        lastLogin: new Date(),
        savedTemplates: [],
        purchasedTemplates: [],
        preferences: {
          theme: 'dark',
          emailNotifications: true,
          marketingEmails: false,
          language: 'en',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        ...additionalData
      }
      setUserProfile(basicProfile)
    }
  }

  const signup = async (email: string, password: string, displayName?: string) => {
    try {
      if (!isFirebaseConfigured) {
        throw new Error('🔧 Firebase Setup Required!\n\nTo enable authentication, please:\n1. Go to https://console.firebase.google.com/\n2. Create or select your project\n3. Get your web app config\n4. Update the .env file with real credentials\n\nSee FIREBASE_SETUP.md for detailed instructions.')
      }
      
      const result = await createUserWithEmailAndPassword(auth, email, password)
      
      if (displayName) {
        await updateProfile(result.user, { displayName })
      }
      
      await createUserProfile(result.user, { displayName })
    } catch (error) {
      console.error('Error during signup:', error)
      if (error instanceof Error) {
        if (error.message.includes('auth/api-key-not-valid')) {
          throw new Error('🔧 Firebase Setup Required!\n\nThe Firebase API key is not valid. Please:\n1. Visit https://console.firebase.google.com/\n2. Get your real web app configuration\n3. Update the .env file\n\nSee FIREBASE_SETUP.md for detailed instructions.')
        }
        throw error
      }
      throw new Error('An unexpected error occurred during signup.')
    }
  }

  const login = async (email: string, password: string) => {
    try {
      if (!isFirebaseConfigured) {
        throw new Error('🔧 Firebase Setup Required!\n\nTo enable authentication, please:\n1. Go to https://console.firebase.google.com/\n2. Create or select your project\n3. Get your web app config\n4. Update the .env file with real credentials\n\nSee FIREBASE_SETUP.md for detailed instructions.')
      }
      
      const result = await signInWithEmailAndPassword(auth, email, password)
      await createUserProfile(result.user)
    } catch (error) {
      console.error('Error during login:', error)
      if (error instanceof Error) {
        if (error.message.includes('auth/api-key-not-valid')) {
          throw new Error('🔧 Firebase Setup Required!\n\nThe Firebase API key is not valid. Please:\n1. Visit https://console.firebase.google.com/\n2. Get your real web app configuration\n3. Update the .env file\n\nSee FIREBASE_SETUP.md for detailed instructions.')
        }
        throw error
      }
      throw new Error('An unexpected error occurred during login.')
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUserProfile(null)
    } catch (error) {
      console.error('Error during logout:', error)
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    try {
      if (!isFirebaseConfigured) {
        throw new Error('Firebase is not properly configured. Please check your environment variables.')
      }
      
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      console.error('Error sending password reset email:', error)
      if (error instanceof Error) {
        if (error.message.includes('auth/api-key-not-valid')) {
          throw new Error('Firebase API key is not valid. Please check your configuration.')
        }
        throw error
      }
      throw new Error('An unexpected error occurred while sending password reset email.')
    }
  }

  const signInWithGoogle = async () => {
    try {
      if (!isFirebaseConfigured) {
        throw new Error('🔧 Firebase Setup Required!\n\nTo enable Google authentication, please:\n1. Go to https://console.firebase.google.com/\n2. Create or select your project\n3. Get your web app config\n4. Update the .env file with real credentials\n5. Enable Google sign-in in Authentication settings\n\nSee FIREBASE_SETUP.md for detailed instructions.')
      }
      
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      await createUserProfile(result.user)
    } catch (error) {
      console.error('Error during Google sign in:', error)
      if (error instanceof Error) {
        if (error.message.includes('auth/api-key-not-valid')) {
          throw new Error('🔧 Firebase Setup Required!\n\nThe Firebase API key is not valid. Please:\n1. Visit https://console.firebase.google.com/\n2. Get your real web app configuration\n3. Update the .env file\n\nSee FIREBASE_SETUP.md for detailed instructions.')
        }
        throw error
      }
      throw new Error('An unexpected error occurred during Google sign in.')
    }
  }

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!currentUser) return

    try {
      const userRef = doc(db, 'users', currentUser.uid)
      await updateDoc(userRef, updates)
      
      // Update local state
      setUserProfile(prev => prev ? { ...prev, ...updates } : null)
    } catch (error) {
      console.warn('Firestore user profile update failed, updating local state only:', error)
      // Update local state even if Firestore fails
      setUserProfile(prev => prev ? { ...prev, ...updates } : null)
    }
  }

  // Template management functions
  const getSavedTemplates = async (): Promise<SavedTemplate[]> => {
    if (!currentUser) return []
    try {
      return await TemplateService.getUserSavedTemplates(currentUser.uid)
    } catch (error) {
      console.error('Error getting saved templates:', error)
      // Return mock data if Firestore access fails
      return [
        {
          id: 'mock-1',
          templateId: 'ecommerce-starter',
          userId: currentUser.uid,
          dateAdded: new Date(),
          template: {
            id: 'ecommerce-starter',
            name: 'E-commerce Starter',
            category: 'E-commerce',
            description: 'Modern e-commerce template with cart functionality',
            imageUrl: 'https://placehold.co/400x300/3b82f6/white?text=E-commerce',
            price: 499,
            tags: ['react', 'tailwind', 'stripe'],
            features: ['Shopping Cart', 'Product Pages', 'Checkout'],
            createdAt: new Date(),
            updatedAt: new Date()
          }
        }
      ]
    }
  }

  const getPurchasedTemplates = async (): Promise<PurchasedTemplate[]> => {
    if (!currentUser) return []
    try {
      return await TemplateService.getUserPurchasedTemplates(currentUser.uid)
    } catch (error) {
      console.error('Error getting purchased templates:', error)
      // Return mock data if Firestore access fails
      return [
        {
          id: 'mock-purchase-1',
          templateId: 'restaurant-deluxe',
          userId: currentUser.uid,
          purchaseDate: new Date(),
          price: 349,
          downloadUrl: '#download-restaurant',
          status: 'active',
          licenseType: 'personal',
          template: {
            id: 'restaurant-deluxe',
            name: 'Restaurant Deluxe',
            category: 'Business',
            description: 'Elegant restaurant website with online menu',
            imageUrl: 'https://placehold.co/400x300/f59e0b/white?text=Restaurant',
            price: 349,
            tags: ['restaurant', 'menu', 'reservations'],
            features: ['Online Menu', 'Reservations', 'Gallery'],
            createdAt: new Date(),
            updatedAt: new Date()
          }
        }
      ]
    }
  }

  const saveTemplate = async (templateId: string): Promise<void> => {
    if (!currentUser) throw new Error('User not authenticated')
    try {
      await TemplateService.saveTemplate(currentUser.uid, templateId)
    } catch (error) {
      console.warn('Firestore save failed, using mock behavior:', error)
      // Mock behavior for demo purposes
      console.log(`Mock: Saved template ${templateId} for user ${currentUser.uid}`)
    }
  }

  const unsaveTemplate = async (templateId: string): Promise<void> => {
    if (!currentUser) throw new Error('User not authenticated')
    try {
      await TemplateService.unsaveTemplate(currentUser.uid, templateId)
    } catch (error) {
      console.warn('Firestore unsave failed, using mock behavior:', error)
      // Mock behavior for demo purposes
      console.log(`Mock: Unsaved template ${templateId} for user ${currentUser.uid}`)
    }
  }

  const isTemplateSaved = async (templateId: string): Promise<boolean> => {
    if (!currentUser) return false
    try {
      return await TemplateService.isTemplateSaved(currentUser.uid, templateId)
    } catch (error) {
      console.warn('Firestore check failed, returning mock data:', error)
      // Mock behavior - return false for demo
      return false
    }
  }

  const purchaseTemplate = async (templateId: string, price: number): Promise<void> => {
    if (!currentUser) throw new Error('User not authenticated')
    try {
      await TemplateService.purchaseTemplate(currentUser.uid, templateId, price)
    } catch (error) {
      console.warn('Firestore purchase failed, using mock behavior:', error)
      // Mock behavior for demo purposes
      console.log(`Mock: Purchased template ${templateId} for $${price} by user ${currentUser.uid}`)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user)
        await createUserProfile(user)
      } else {
        setCurrentUser(null)
        setUserProfile(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value: AuthContextType = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    signInWithGoogle,
    getSavedTemplates,
    getPurchasedTemplates,
    saveTemplate,
    unsaveTemplate,
    isTemplateSaved,
    purchaseTemplate
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
