import { ThemeProvider } from './components/ui/theme-provider'
import { AuthProvider } from './contexts/AuthContext'
import { AuthUIProvider } from './contexts/AuthUIContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { AppRouter } from './router/AppRouter'
import { usePerformanceOptimization, useImageOptimization, useAnimationOptimization } from './hooks/usePerformanceOptimization'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  // Initialize performance optimizations
  usePerformanceOptimization()
  useImageOptimization()
  useAnimationOptimization()

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <AuthUIProvider>
            <NotificationProvider>
              <AppRouter />
            </NotificationProvider>
          </AuthUIProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
