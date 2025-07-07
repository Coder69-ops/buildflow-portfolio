import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Check if Firebase credentials are properly configured
const hasFirebaseCredentials = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
  return apiKey && 
         apiKey !== "your-actual-api-key" &&
         apiKey !== "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" &&
         apiKey !== "your-web-api-key-here"
}

// Use demo configuration if real credentials aren't available
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:demo"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Export helper to check if Firebase is properly configured
export const isFirebaseConfigured = hasFirebaseCredentials()

// Log configuration status
console.log('Firebase Configuration Status:', {
  configured: isFirebaseConfigured,
  apiKey: firebaseConfig.apiKey.substring(0, 10) + '...',
  projectId: firebaseConfig.projectId
})

export default app
