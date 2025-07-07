import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { TemplateService } from './services/templateService'

// Register service worker for better caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// Initialize application data
const initializeApp = async () => {
  try {
    // Initialize template data in Firestore if Firebase is configured and has permissions
    await TemplateService.initializeTemplateData()
    console.log('Application initialized successfully')
  } catch (error) {
    console.warn('Application initialization completed with warnings:', error)
    console.log('App will continue to work with mock data')
  }
}

// Call initialization on app start (non-blocking)
initializeApp().catch((error) => {
  console.warn('Non-critical initialization error:', error)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
