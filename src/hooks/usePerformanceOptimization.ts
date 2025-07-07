import { useEffect } from 'react'

/**
 * Hook to preload critical resources for better performance
 */
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/buildflow-logo.svg',
      '/buildflow-preview.jpg',
      '/favicon.png'
    ]

    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Prefetch likely navigation routes
    const likelyRoutes = ['/templates', '/services', '/portfolio', '/about', '/contact']
    
    likelyRoutes.forEach(route => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = route
      document.head.appendChild(link)
    })

    // Optimize third-party scripts
    const optimizeThirdParty = () => {
      // Delay non-critical scripts
      setTimeout(() => {
        // Load analytics or other non-critical scripts here
        // Example: Google Analytics, Facebook Pixel, etc.
      }, 3000)
    }

    // Run optimization after initial page load
    if (document.readyState === 'complete') {
      optimizeThirdParty()
    } else {
      window.addEventListener('load', optimizeThirdParty)
    }

    return () => {
      window.removeEventListener('load', optimizeThirdParty)
    }
  }, [])
}

/**
 * Hook to optimize images with lazy loading and proper sizing
 */
export const useImageOptimization = () => {
  useEffect(() => {
    // Enable native lazy loading for images
    const images = document.querySelectorAll('img[data-src]')
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.dataset.src
            if (src) {
              img.src = src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))

      return () => {
        images.forEach(img => imageObserver.unobserve(img))
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        const htmlImg = img as HTMLImageElement
        const src = htmlImg.dataset.src
        if (src) {
          htmlImg.src = src
          htmlImg.removeAttribute('data-src')
        }
      })
    }
  }, [])
}

/**
 * Hook to optimize animations and reduce motion for accessibility
 */
export const useAnimationOptimization = () => {
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleMotionPreference = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--theme-transition', 'none')
      } else {
        document.documentElement.style.setProperty('--theme-transition', 'colors 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out')
      }
    }

    if (prefersReducedMotion.matches) {
      handleMotionPreference({ matches: true } as MediaQueryListEvent)
    }

    prefersReducedMotion.addEventListener('change', handleMotionPreference)

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreference)
    }
  }, [])
}
