import { useEffect } from 'react'

export function useAnalytics() {
  useEffect(() => {
    // Track page visit
    const trackVisit = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_path: window.location.pathname,
            referrer: document.referrer || undefined,
          }),
        })
      } catch (error) {
        // Silent fail - analytics shouldn't break the app
        console.debug('Analytics tracking failed:', error)
      }
    }

    // Track initial visit
    trackVisit()

    // Track route changes (for SPA navigation)
    let currentPath = window.location.pathname
    const checkForPathChange = () => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname
        trackVisit()
      }
    }

    const interval = setInterval(checkForPathChange, 1000)
    
    return () => clearInterval(interval)
  }, [])
}
