"use client"

import Script from 'next/script'

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

  if (!GA_MEASUREMENT_ID) {
    console.warn('GA4 Measurement ID not found. Please set NEXT_PUBLIC_GA4_MEASUREMENT_ID in your environment variables.')
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Enhanced tracking functions for roofing business
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

export const trackEstimateRequest = (address?: string) => {
  trackEvent('estimate_request', {
    event_category: 'engagement',
    event_label: 'roof_estimate',
    address: address || 'unknown'
  })
}

export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: 'contact_phone'
  })
}

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'engagement', 
    event_label: 'contact_email'
  })
}

export const trackServicePageView = (service: string) => {
  trackEvent('service_page_view', {
    event_category: 'content',
    event_label: service
  })
}

export const trackLocationPageView = (location: string) => {
  trackEvent('location_page_view', {
    event_category: 'content',
    event_label: location
  })
}
