'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Rooferly's GA4 Configuration
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_ROOFERLY_GA4_ID || 'G-G9CRPQTXKJ'

// Enhanced GA4 setup with roofing industry specific configuration
export default function RooferlyGA4Enhanced() {
  useEffect(() => {
    // Initialize enhanced measurement once GA4 loads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      setupRooferlyTracking()
    }
  }, [])

  return (
    <>
      {/* GA4 Global Site Tag */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
      />
      
      {/* GA4 Configuration Script */}
      <Script
        id="rooferly-ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced GA4 Configuration for Rooferly
            gtag('config', '${GA4_MEASUREMENT_ID}', {
              // Basic configuration
              page_title: document.title,
              page_location: window.location.href,
              
              // Enhanced measurement
              enhanced_measurement: {
                scrolls: true,
                outbound_clicks: true,
                site_search: true,
                video_engagement: true,
                file_downloads: true
              },
              
              // Custom parameters for roofing business
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'geographic_area', 
                'custom_parameter_3': 'lead_source',
                'custom_parameter_4': 'urgency_level',
                'custom_parameter_5': 'customer_type'
              },
              
              // Conversion linker for Google Ads
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
              
              // Cookie settings
              cookie_flags: 'SameSite=None;Secure',
              
              // Debug mode (remove in production)
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
            
            // Set default custom dimensions
            gtag('config', '${GA4_MEASUREMENT_ID}', {
              'service_type': 'roof_replacement',
              'customer_type': 'residential',
              'geographic_area': 'chicagoland'
            });
          `,
        }}
      />

      {/* Rooferly Business Schema for GA4 */}
      <Script
        id="rooferly-business-data"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Send business information to GA4
            gtag('set', {
              'business_name': 'Rooferly',
              'business_type': 'roofing_contractor',
              'service_area': 'chicago_illinois',
              'primary_service': 'roof_replacement',
              'secondary_services': 'roof_repair,roof_inspection'
            });
          `,
        }}
      />
    </>
  )
}

// Setup enhanced tracking for roofing business
function setupRooferlyTracking() {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  const gtag = (window as any).gtag

  // Track phone number clicks
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const href = target.getAttribute('href') || target.closest('a')?.getAttribute('href')
    
    if (href && href.startsWith('tel:')) {
      gtag('event', 'phone_call_click', {
        event_category: 'lead_generation',
        event_label: href.replace('tel:', ''),
        custom_parameter_1: 'phone_contact',
        custom_parameter_4: 'immediate'
      })
    }
  })

  // Track form submissions
  document.addEventListener('submit', (event) => {
    const form = event.target as HTMLFormElement
    const formId = form.id || form.className || 'unknown_form'
    
    gtag('event', 'form_submission', {
      event_category: 'lead_generation',
      event_label: formId,
      custom_parameter_1: 'contact_form',
      custom_parameter_4: 'planned'
    })
  })

  // Track scroll depth for engagement
  let scrollDepths = [25, 50, 75, 90]
  let trackedDepths: number[] = []

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    
    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
        trackedDepths.push(depth)
        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: `${depth}%`,
          value: depth
        })
      }
    })
  })

  // Track time on page
  let startTime = Date.now()
  let timeThresholds = [30, 60, 120, 300] // seconds
  let trackedTimes: number[] = []

  setInterval(() => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000)
    
    timeThresholds.forEach(threshold => {
      if (timeOnPage >= threshold && !trackedTimes.includes(threshold)) {
        trackedTimes.push(threshold)
        gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: `${threshold}_seconds`,
          value: threshold
        })
      }
    })
  }, 10000) // Check every 10 seconds
}

// Roofing-specific event tracking functions
export const RooferlyGA4Events = {
  // Lead generation events
  trackEstimateRequest: (serviceType: string, urgency: 'emergency' | 'planned' | 'research') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'estimate_request', {
        event_category: 'lead_generation',
        event_label: serviceType,
        custom_parameter_1: serviceType,
        custom_parameter_4: urgency,
        value: 1
      })
    }
  },

  trackServiceInquiry: (serviceType: string, location: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'service_inquiry', {
        event_category: 'lead_generation',
        event_label: `${serviceType}_${location}`,
        custom_parameter_1: serviceType,
        custom_parameter_2: location
      })
    }
  },

  // Website analyzer events
  trackAnalysisStart: (url: string, analysisType: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'website_analysis_start', {
        event_category: 'tool_usage',
        event_label: url,
        custom_parameter_1: analysisType,
        custom_parameter_2: 'analyzer_tool'
      })
    }
  },

  trackSEOInsights: (url: string, seoScore: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'seo_insights_view', {
        event_category: 'tool_usage',
        event_label: url,
        value: seoScore,
        custom_parameter_1: 'seo_analysis'
      })
    }
  },

  trackCompetitorAnalysis: (competitorUrl: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'competitor_research', {
        event_category: 'tool_usage',
        event_label: competitorUrl,
        custom_parameter_1: 'competitor_analysis'
      })
    }
  },

  // Content engagement events
  trackRoofVisualization: (roofStyle: string, viewTime: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'roof_visualization_view', {
        event_category: 'content_engagement',
        event_label: roofStyle,
        value: viewTime,
        custom_parameter_1: 'roof_visualization'
      })
    }
  },

  trackServicePageView: (serviceType: string, location?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'service_page_view', {
        event_category: 'content_engagement',
        event_label: serviceType,
        custom_parameter_1: serviceType,
        custom_parameter_2: location || 'general'
      })
    }
  },

  // Conversion events
  trackLead: (leadType: 'phone' | 'form' | 'chat', leadSource: string, leadValue?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: leadType,
        value: leadValue || 1,
        custom_parameter_1: leadType,
        custom_parameter_3: leadSource
      })
    }
  },

  trackEstimateComplete: (estimateValue: number, roofSize: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'estimate_complete', {
        event_category: 'conversion',
        currency: 'USD',
        value: estimateValue,
        custom_parameter_1: 'roof_replacement',
        roof_size_sqft: roofSize
      })
    }
  },

  // E-commerce events for roofing services
  trackServiceView: (serviceId: string, serviceName: string, servicePrice: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'view_item', {
        currency: 'USD',
        value: servicePrice,
        items: [{
          item_id: serviceId,
          item_name: serviceName,
          item_category: 'roofing_service',
          price: servicePrice,
          quantity: 1
        }]
      })
    }
  },

  trackServiceInterest: (serviceId: string, serviceName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'add_to_wishlist', {
        currency: 'USD',
        items: [{
          item_id: serviceId,
          item_name: serviceName,
          item_category: 'roofing_service'
        }]
      })
    }
  }
}
