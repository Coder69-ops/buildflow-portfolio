import { collection, doc, addDoc, deleteDoc, getDocs, query, where, orderBy, getDoc, Timestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'
import type { Template, SavedTemplate, PurchasedTemplate } from '../types'

export class TemplateService {
  // Local storage keys for offline data
  private static STORAGE_KEYS = {
    TEMPLATES: 'buildflow_templates',
    SAVED_TEMPLATES: 'buildflow_saved_templates',
    PURCHASED_TEMPLATES: 'buildflow_purchased_templates'
  }

  // Check if Firestore is available and has proper permissions
  private static async isFirestoreAvailable(): Promise<boolean> {
    if (!isFirebaseConfigured) {
      console.log('Firebase not configured, using mock data')
      return false
    }
    
    try {
      // Try to read from templates collection to test permissions
      const templatesRef = collection(db, 'templates')
      const q = query(templatesRef, orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      
      console.log(`Found ${querySnapshot.size} templates in Firestore`)
      return querySnapshot.size > 0
    } catch (error) {
      console.warn('Firestore read failed, using mock data:', error)
      return false
    }
  }

  // Initialize template data in Firestore (only if we have write permissions)
  static async initializeTemplateData(): Promise<void> {
    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, skipping template initialization')
        return
      }
      
      const templatesRef = collection(db, 'templates')
      
      // First, try to read existing templates
      try {
        const snapshot = await getDocs(templatesRef)
        if (snapshot.size > 0) {
          console.log(`Found ${snapshot.size} templates in Firestore, skipping initialization`)
          return
        }
      } catch (error) {
        console.warn('Cannot read templates collection, will use mock data:', error)
        return
      }
      
      // Only try to initialize if we can read and the collection is empty
      console.log('Attempting to initialize template data in Firestore...')
      const mockTemplates = this.getMockTemplates()
      
      // Try to add one template first to test permissions
      try {
        await addDoc(templatesRef, {
          ...mockTemplates[0],
          createdAt: Timestamp.fromDate(mockTemplates[0].createdAt),
          updatedAt: Timestamp.fromDate(mockTemplates[0].updatedAt)
        })
        
        console.log('First template added successfully, adding remaining templates...')
        
        // Add remaining templates
        for (let i = 1; i < mockTemplates.length; i++) {
          await addDoc(templatesRef, {
            ...mockTemplates[i],
            createdAt: Timestamp.fromDate(mockTemplates[i].createdAt),
            updatedAt: Timestamp.fromDate(mockTemplates[i].updatedAt)
          })
        }
        
        console.log('All template data initialized successfully')
      } catch (writeError) {
        console.warn('Cannot write to Firestore, app will work with mock data:', writeError)
      }
    } catch (error) {
      console.warn('Template initialization failed, app will work with mock data:', error)
    }
  }

  // Get all available templates
  static async getTemplates(): Promise<Template[]> {
    try {
      const firestoreAvailable = await this.isFirestoreAvailable()
      
      if (!firestoreAvailable) {
        console.log('Using mock template data')
        return this.getMockTemplates()
      }

      const templatesRef = collection(db, 'templates')
      const q = query(templatesRef, orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const templates = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as Template[]
      
      console.log(`Loaded ${templates.length} templates from Firestore`)
      return templates
    } catch (error) {
      console.error('Error getting templates, falling back to mock data:', error)
      return this.getMockTemplates()
    }
  }

  // Get user's saved templates
  static async getUserSavedTemplates(userId: string): Promise<SavedTemplate[]> {
    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, using mock saved templates data')
        return this.getMockSavedTemplates(userId)
      }

      const savedRef = collection(db, 'savedTemplates')
      const q = query(savedRef, where('userId', '==', userId), orderBy('dateAdded', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const savedTemplates: SavedTemplate[] = []
      for (const docSnapshot of querySnapshot.docs) {
        const data = docSnapshot.data()
        const template = await this.getTemplateById(data.templateId)
        if (template) {
          savedTemplates.push({
            id: docSnapshot.id,
            userId: data.userId,
            templateId: data.templateId,
            dateAdded: data.dateAdded?.toDate() || new Date(),
            template
          } as SavedTemplate)
        }
      }
      
      console.log(`Loaded ${savedTemplates.length} saved templates for user ${userId}`)
      return savedTemplates
    } catch (error) {
      console.error('Error getting saved templates, using mock data:', error)
      return this.getMockSavedTemplates(userId)
    }
  }

  // Get user's purchased templates
  static async getUserPurchasedTemplates(userId: string): Promise<PurchasedTemplate[]> {
    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, using mock purchased templates data')
        return this.getMockPurchasedTemplates(userId)
      }

      const purchasedRef = collection(db, 'purchasedTemplates')
      const q = query(purchasedRef, where('userId', '==', userId), orderBy('purchaseDate', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const purchasedTemplates: PurchasedTemplate[] = []
      for (const docSnapshot of querySnapshot.docs) {
        const data = docSnapshot.data()
        const template = await this.getTemplateById(data.templateId)
        if (template) {
          purchasedTemplates.push({
            id: docSnapshot.id,
            userId: data.userId,
            templateId: data.templateId,
            purchaseDate: data.purchaseDate?.toDate() || new Date(),
            price: data.price,
            downloadUrl: data.downloadUrl,
            status: data.status,
            licenseType: data.licenseType,
            template
          } as PurchasedTemplate)
        }
      }
      
      console.log(`Loaded ${purchasedTemplates.length} purchased templates for user ${userId}`)
      return purchasedTemplates
    } catch (error) {
      console.error('Error getting purchased templates, using mock data:', error)
      return this.getMockPurchasedTemplates(userId)
    }
  }

  // Get template by ID
  static async getTemplateById(templateId: string): Promise<Template | null> {
    try {
      const templateRef = doc(db, 'templates', templateId)
      const templateDoc = await getDoc(templateRef)
      
      if (templateDoc.exists()) {
        const data = templateDoc.data()
        return {
          id: templateDoc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as Template
      }
      return null
    } catch (error) {
      console.error('Error getting template:', error)
      return null
    }
  }

  // Enhanced save template function
  static async saveTemplate(userId: string, templateId: string): Promise<void> {
    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, using local storage')
        this.saveToLocalStorage(userId, templateId, 'saved')
        return
      }

      const savedRef = collection(db, 'savedTemplates')
      await addDoc(savedRef, {
        userId,
        templateId,
        dateAdded: Timestamp.now()
      })
      
      console.log(`Template ${templateId} saved for user ${userId}`)
    } catch (error) {
      console.error('Error saving template:', error)
      // Fallback to local storage
      this.saveToLocalStorage(userId, templateId, 'saved')
    }
  }

  // Remove a saved template
  static async unsaveTemplate(userId: string, templateId: string): Promise<void> {
    try {
      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, using local storage')
        this.removeFromLocalStorage(userId, templateId, 'saved')
        return
      }

      const savedRef = collection(db, 'savedTemplates')
      const q = query(savedRef, where('userId', '==', userId), where('templateId', '==', templateId))
      const querySnapshot = await getDocs(q)
      
      for (const doc of querySnapshot.docs) {
        await deleteDoc(doc.ref)
      }
      
      console.log(`Template ${templateId} unsaved for user ${userId}`)
    } catch (error) {
      console.error('Error unsaving template:', error)
      // Fallback to local storage
      this.removeFromLocalStorage(userId, templateId, 'saved')
    }
  }

  // Enhanced check if template is saved
  static async isTemplateSaved(userId: string, templateId: string): Promise<boolean> {
    try {
      if (!isFirebaseConfigured) {
        return this.isInLocalStorage(userId, templateId, 'saved')
      }

      const savedRef = collection(db, 'savedTemplates')
      const q = query(savedRef, where('userId', '==', userId), where('templateId', '==', templateId))
      const querySnapshot = await getDocs(q)
      
      return !querySnapshot.empty
    } catch (error) {
      console.error('Error checking if template is saved:', error)
      return this.isInLocalStorage(userId, templateId, 'saved')
    }
  }

  // Purchase a template
  static async purchaseTemplate(userId: string, templateId: string, price: number): Promise<void> {
    try {
      const template = await this.getTemplateById(templateId)
      if (!template) {
        throw new Error('Template not found')
      }

      if (!isFirebaseConfigured) {
        console.log('Firebase not configured, using local storage')
        this.saveToLocalStorage(userId, templateId, 'purchased', {
          price,
          downloadUrl: `#download-${templateId}`,
          licenseType: 'personal',
          status: 'active',
          purchaseDate: new Date().toISOString()
        })
        return
      }

      const purchasedRef = collection(db, 'purchasedTemplates')
      await addDoc(purchasedRef, {
        userId,
        templateId,
        purchaseDate: Timestamp.now(),
        price,
        downloadUrl: `#download-${templateId}`,
        status: 'active',
        licenseType: 'personal'
      })
      
      console.log(`Template ${templateId} purchased for $${price} by user ${userId}`)
    } catch (error) {
      console.error('Error purchasing template:', error)
      throw error
    }
  }

  // Get mock templates for demo purposes
  static getMockTemplates(): Template[] {
    return [
      {
        id: '1',
        name: 'E-commerce Store',
        category: 'E-commerce',
        description: 'Modern e-commerce template with cart functionality, product pages, and checkout flow',
        imageUrl: 'https://placehold.co/400x300/3b82f6/white?text=E-commerce+Store',
        price: 49,
        tags: ['react', 'tailwind', 'stripe', 'responsive'],
        features: ['Shopping Cart', 'Product Pages', 'Checkout', 'Admin Dashboard', 'Mobile Responsive'],
        demoUrl: 'https://demo.example.com/ecommerce',
        createdAt: new Date(2024, 11, 15),
        updatedAt: new Date(2024, 11, 15),
        rating: 4.8,
        reviews: 127,
        isPopular: true,
        isFeatured: true
      },
      {
        id: '2',
        name: 'Portfolio Website',
        category: 'Portfolio',
        description: 'Clean portfolio template for creatives, designers, and developers',
        imageUrl: 'https://placehold.co/400x300/8b5cf6/white?text=Portfolio+Site',
        price: 29,
        tags: ['react', 'portfolio', 'animations', 'dark-mode'],
        features: ['Dark Mode', 'Animations', 'Contact Form', 'Project Gallery', 'Resume Download'],
        demoUrl: 'https://demo.example.com/portfolio',
        createdAt: new Date(2024, 11, 10),
        updatedAt: new Date(2024, 11, 10),
        rating: 4.9,
        reviews: 89,
        isPopular: false,
        isFeatured: false
      },
      {
        id: '3',
        name: 'Restaurant Website',
        category: 'Business',
        description: 'Beautiful restaurant website with menu, reservations, and online ordering',
        imageUrl: 'https://placehold.co/400x300/10b981/white?text=Restaurant+Site',
        price: 39,
        tags: ['react', 'restaurant', 'menu', 'reservations'],
        features: ['Menu Display', 'Online Reservations', 'Photo Gallery', 'Contact Info', 'Mobile Optimized'],
        demoUrl: 'https://demo.example.com/restaurant',
        createdAt: new Date(2024, 11, 5),
        updatedAt: new Date(2024, 11, 5),
        rating: 4.7,
        reviews: 156,
        isPopular: true,
        isFeatured: false
      },
      {
        id: '4',
        name: 'SaaS Landing Page',
        category: 'SaaS',
        description: 'High-converting SaaS landing page with pricing, features, and testimonials',
        imageUrl: 'https://placehold.co/400x300/f59e0b/white?text=SaaS+Landing',
        price: 59,
        tags: ['react', 'saas', 'landing', 'conversion'],
        features: ['Pricing Tables', 'Feature Showcase', 'Testimonials', 'FAQ Section', 'CTA Buttons'],
        demoUrl: 'https://demo.example.com/saas',
        createdAt: new Date(2024, 11, 1),
        updatedAt: new Date(2024, 11, 1),
        rating: 4.6,
        reviews: 203,
        isPopular: false,
        isFeatured: true
      },
      {
        id: '5',
        name: 'Real Estate Platform',
        category: 'Real Estate',
        description: 'Complete real estate platform with property listings, search, and agent profiles',
        imageUrl: 'https://placehold.co/400x300/ef4444/white?text=Real+Estate',
        price: 79,
        tags: ['react', 'real-estate', 'search', 'maps'],
        features: ['Property Search', 'Map Integration', 'Agent Profiles', 'Mortgage Calculator', 'Saved Searches'],
        demoUrl: 'https://demo.example.com/realestate',
        createdAt: new Date(2024, 10, 28),
        updatedAt: new Date(2024, 10, 28),
        rating: 4.5,
        reviews: 94,
        isPopular: true,
        isFeatured: false
      },
      {
        id: '6',
        name: 'Blog & Magazine',
        category: 'Blog',
        description: 'Modern blog and magazine template with article management and social features',
        imageUrl: 'https://placehold.co/400x300/8b5cf6/white?text=Blog+Magazine',
        price: 34,
        tags: ['react', 'blog', 'cms', 'social'],
        features: ['Article Management', 'Social Sharing', 'Comments', 'Newsletter', 'Search'],
        demoUrl: 'https://demo.example.com/blog',
        createdAt: new Date(2024, 10, 25),
        updatedAt: new Date(2024, 10, 25),
        rating: 4.4,
        reviews: 67,
        isPopular: false,
        isFeatured: false
      }
    ]
  }

  // Get mock saved templates for demo purposes
  static getMockSavedTemplates(userId: string): SavedTemplate[] {
    const mockTemplates = this.getMockTemplates()
    return [
      {
        id: `saved-${userId}-1`,
        userId,
        templateId: '2',
        dateAdded: new Date(2024, 11, 20),
        template: mockTemplates[1] // Portfolio Website
      },
      {
        id: `saved-${userId}-2`,
        userId,
        templateId: '4',
        dateAdded: new Date(2024, 11, 18),
        template: mockTemplates[3] // SaaS Landing Page
      },
      {
        id: `saved-${userId}-3`,
        userId,
        templateId: '1',
        dateAdded: new Date(2024, 11, 15),
        template: mockTemplates[0] // E-commerce Store
      }
    ]
  }

  // Get mock purchased templates for demo purposes
  static getMockPurchasedTemplates(userId: string): PurchasedTemplate[] {
    const mockTemplates = this.getMockTemplates()
    return [
      {
        id: `purchased-${userId}-1`,
        userId,
        templateId: '3',
        purchaseDate: new Date(2024, 11, 10),
        price: 39,
        downloadUrl: '#download-restaurant',
        status: 'active',
        licenseType: 'personal',
        template: mockTemplates[2] // Restaurant Website
      },
      {
        id: `purchased-${userId}-2`,
        userId,
        templateId: '6',
        purchaseDate: new Date(2024, 11, 5),
        price: 34,
        downloadUrl: '#download-blog',
        status: 'active',
        licenseType: 'personal',
        template: mockTemplates[5] // Blog & Magazine
      }
    ]
  }

  // Local storage utilities
  private static saveToLocalStorage(userId: string, templateId: string, type: 'saved' | 'purchased', additionalData?: any): void {
    const key = type === 'saved' ? this.STORAGE_KEYS.SAVED_TEMPLATES : this.STORAGE_KEYS.PURCHASED_TEMPLATES
    const stored = JSON.parse(localStorage.getItem(key) || '[]')
    const entry = {
      id: `local-${Date.now()}`,
      userId,
      templateId,
      dateAdded: new Date().toISOString(),
      ...additionalData
    }
    stored.push(entry)
    localStorage.setItem(key, JSON.stringify(stored))
  }

  private static removeFromLocalStorage(userId: string, templateId: string, type: 'saved' | 'purchased'): void {
    const key = type === 'saved' ? this.STORAGE_KEYS.SAVED_TEMPLATES : this.STORAGE_KEYS.PURCHASED_TEMPLATES
    const stored = JSON.parse(localStorage.getItem(key) || '[]')
    const filtered = stored.filter((item: any) => !(item.userId === userId && item.templateId === templateId))
    localStorage.setItem(key, JSON.stringify(filtered))
  }

  private static isInLocalStorage(userId: string, templateId: string, type: 'saved' | 'purchased'): boolean {
    const key = type === 'saved' ? this.STORAGE_KEYS.SAVED_TEMPLATES : this.STORAGE_KEYS.PURCHASED_TEMPLATES
    const stored = JSON.parse(localStorage.getItem(key) || '[]')
    return stored.some((item: any) => item.userId === userId && item.templateId === templateId)
  }
}
