import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import WebsitesForSale from './components/WebsitesForSale'
import CustomizationServices from './components/CustomizationServices'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ui/theme-provider'
import { BuildFlowLampDemo } from './components/ui/buildflow-lamp-demo'
import { useDarkMode } from './hooks/useDarkMode'

function AppContent() {
  const isDark = useDarkMode()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30 relative overflow-hidden transition-colors duration-500">
      {/* Enhanced global background elements */}
      <div className="fixed inset-0 bg-noise opacity-[0.02] dark:opacity-[0.05] pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-400/5 dark:to-blue-400/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        {isDark ? <BuildFlowLampDemo /> : <Hero />}
        <Portfolio />
        <WebsitesForSale />
        <CustomizationServices />
        <About />
        <Contact />
      </main>
      <Footer />
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
