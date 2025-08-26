"use client"

import { useEffect } from "react"

export function useScrollAnimations() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Disable smooth scrolling for users who prefer reduced motion
      document.documentElement.style.scrollBehavior = 'auto'
      return
    }

    // Enhanced scroll animations for elements
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Once visible, we can stop observing this element
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
