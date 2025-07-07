export interface Template {
  id: string
  name: string
  category: string
  description: string
  imageUrl: string
  price: number
  tags: string[]
  features: string[]
  demoUrl?: string
  downloadUrl?: string
  createdAt: Date
  updatedAt: Date
  rating?: number
  reviews?: number
  isPopular?: boolean
  isFeatured?: boolean
}

export interface SavedTemplate {
  id: string
  templateId: string
  userId: string
  dateAdded: Date
  template?: Template
}

export interface PurchasedTemplate {
  id: string
  templateId: string
  userId: string
  purchaseDate: Date
  price: number
  downloadUrl: string
  status: 'active' | 'expired'
  licenseType: 'personal' | 'commercial'
  template?: Template
}

export interface UserProfile {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  createdAt: Date
  lastLogin: Date
  savedTemplates?: string[]
  purchasedTemplates?: string[]
  preferences?: {
    theme?: 'light' | 'dark' | 'system'
    emailNotifications?: boolean
    marketingEmails?: boolean
    language?: string
    timezone?: string
  }
  subscription?: {
    plan: 'free' | 'pro' | 'enterprise'
    startDate: Date
    endDate?: Date
    status: 'active' | 'cancelled' | 'expired'
  }
}

export interface NotificationItem {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  createdAt: Date
  read: boolean
  actionUrl?: string
}
