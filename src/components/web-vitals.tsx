"use client"

import { useReportWebVitals } from 'next/web-vitals'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // console.log('Web Vitals:', metric)
    }

    // Send to analytics (you can integrate with Google Analytics, Vercel Analytics, etc.)
    // Example with Google Analytics 4:
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }

    // You can also send to other analytics services here
    // Example: Mixpanel, Amplitude, etc.
  })

  return null
}