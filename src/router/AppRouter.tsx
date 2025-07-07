import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import LoadingFallback from '../components/LoadingFallback'

// Lazy load components for better performance
const Hero = lazy(() => import('../components/Hero'))
const Portfolio = lazy(() => import('../components/Portfolio'))
const WebsitesForSale = lazy(() => import('../components/WebsitesForSale'))
const CustomizationServices = lazy(() => import('../components/CustomizationServices'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))
const DashboardPageComponent = lazy(() => import('../components/DashboardPage'))
const NotFoundPage = lazy(() => import('../components/NotFoundPage'))
const SignInPage = lazy(() => import('../components/SignInPage'))
const SignUpPage = lazy(() => import('../components/SignUpPage'))
const TermsPage = lazy(() => import('../components/TermsPage'))
const PrivacyPage = lazy(() => import('../components/PrivacyPage'))

// Homepage component
const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="BuildFlow - Building Digital Experiences That Flow"
        description="Professional web development and ready-made website marketplace. Transform your vision into a powerful online presence with modern design and seamless user flows that convert."
        keywords="web development, buildflow, ready-made websites, custom web design, React, TypeScript, modern websites, user flows, website templates, e-commerce websites, portfolio websites, business websites, responsive design, professional web development, website marketplace, digital experiences"
        canonicalUrl="https://buildflow.aixplore.me/"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WebsitesForSale />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CustomizationServices />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}

// Templates page (just the WebsitesForSale component)
const TemplatesPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Ready-Made Website Templates - BuildFlow"
        description="Discover our collection of professionally designed, ready-made website templates. Perfect for businesses, portfolios, and e-commerce. Built with React, TypeScript, and modern web technologies."
        keywords="ready-made websites, website templates, React templates, TypeScript templates, business websites, portfolio templates, e-commerce templates, modern web design, professional templates"
        canonicalUrl="https://buildflow.aixplore.me/templates"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Templates", url: "https://buildflow.aixplore.me/templates" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <WebsitesForSale />
      </Suspense>
    </div>
  )
}

// Services page
const ServicesPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Custom Web Development Services - BuildFlow"
        description="Professional web development services including custom website design, React development, TypeScript applications, and website customization. Transform your digital presence with our expert team."
        keywords="web development services, custom web design, React development, TypeScript development, website customization, professional web development, digital transformation, web applications"
        canonicalUrl="https://buildflow.aixplore.me/services"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Services", url: "https://buildflow.aixplore.me/services" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <CustomizationServices />
      </Suspense>
    </div>
  )
}

// Portfolio page
const PortfolioPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Our Portfolio - BuildFlow"
        description="Explore our portfolio of successful web development projects. See how we've helped businesses transform their online presence with modern, responsive, and user-friendly websites."
        keywords="web development portfolio, React projects, TypeScript applications, modern websites, responsive design, business websites, portfolio showcase, web development examples"
        canonicalUrl="https://buildflow.aixplore.me/portfolio"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Portfolio", url: "https://buildflow.aixplore.me/portfolio" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
    </div>
  )
}

// About page
const AboutPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="About BuildFlow - Professional Web Development Team"
        description="Learn about BuildFlow, our mission to create exceptional digital experiences, and our expert team of web developers specializing in React, TypeScript, and modern web technologies."
        keywords="about buildflow, web development team, React developers, TypeScript experts, modern web development, professional team, digital experiences, web development company"
        canonicalUrl="https://buildflow.aixplore.me/about"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "About", url: "https://buildflow.aixplore.me/about" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
    </div>
  )
}

// Contact page
const ContactPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Contact BuildFlow - Get In Touch"
        description="Contact BuildFlow for professional web development services. Get a free consultation, discuss your project requirements, and discover how we can help transform your digital presence."
        keywords="contact buildflow, web development consultation, get in touch, project inquiry, web development services, free consultation, contact web developers"
        canonicalUrl="https://buildflow.aixplore.me/contact"
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Contact", url: "https://buildflow.aixplore.me/contact" }
        ]}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  )
}

// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}

// Dashboard page wrapper
const DashboardPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <SEOHead
          title="Dashboard - BuildFlow"
          description="Access your BuildFlow dashboard to manage your purchased templates, saved items, and account settings. Your personal hub for all BuildFlow services and products."
          keywords="buildflow dashboard, user dashboard, manage templates, saved items, account settings, user portal"
          canonicalUrl="https://buildflow.aixplore.me/dashboard"
          noIndex={true}
          breadcrumbs={[
            { name: "Home", url: "https://buildflow.aixplore.me/" },
            { name: "Dashboard", url: "https://buildflow.aixplore.me/dashboard" }
          ]}
        />
        <Suspense fallback={<LoadingFallback />}>
          <DashboardPageComponent />
        </Suspense>
      </div>
    </ProtectedRoute>
  )
}

// Main App Router
export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/templates" element={<TemplatesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  )
}
