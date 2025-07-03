import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { ThemeProvider } from './components/ui/theme-provider'
import { SectionSkeleton } from './components/ui/skeleton'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

// Lazy load non-critical components for better initial performance
const Portfolio = lazy(() => import('./components/Portfolio'))
const WebsitesForSale = lazy(() => import('./components/WebsitesForSale'))
const CustomizationServices = lazy(() => import('./components/CustomizationServices'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Component wrapper that loads content when visible
const LazySection: React.FC<{ 
  children: React.ReactNode
  fallback?: React.ReactNode
}> = ({ children, fallback = <SectionSkeleton /> }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  })

  return (
    <div ref={targetRef}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        
        <LazySection>
          <Portfolio />
        </LazySection>
        
        <LazySection>
          <WebsitesForSale />
        </LazySection>
        
        <LazySection>
          <CustomizationServices />
        </LazySection>
        
        <LazySection>
          <About />
        </LazySection>
        
        <LazySection>
          <Contact />
        </LazySection>
        
        <LazySection>
          <Footer />
        </LazySection>
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="buildflow-ui-theme">
      <AppContent />
    </ThemeProvider>
  )
}

export default App
