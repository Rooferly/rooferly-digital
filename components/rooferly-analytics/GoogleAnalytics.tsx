'use client'

import Script from 'next/script'

// Rooferly's Google Analytics 4 Measurement ID
const ROOFERLY_GA4_ID = process.env.NEXT_PUBLIC_ROOFERLY_GA4_ID || 'G-XXXXXXXXXX'

export default function RooferlyGoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ROOFERLY_GA4_ID}`}
      />
      <Script
        id="rooferly-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ROOFERLY_GA4_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'roofing_analysis_type',
                'custom_parameter_2': 'roof_replacement_interest'
              }
            });
          `,
        }}
      />
    </>
  )
}

// Enhanced event tracking for roofing industry
export const trackRooferlyEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number,
  customParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      // Roofing-specific custom parameters
      roofing_analysis_type: customParams?.analysisType,
      roof_replacement_interest: customParams?.replacementInterest,
      website_type: customParams?.websiteType,
      competitor_analysis: customParams?.competitorAnalysis,
      ...customParams
    })
  }
}

// Roofing industry specific event helpers
export const RooferlyAnalytics = {
  // Track website analysis events
  trackWebsiteAnalysis: (domain: string, analysisType: 'comprehensive' | 'competitor' | 'quick') => {
    trackRooferlyEvent('analyze_website', 'Website Analysis', domain, undefined, {
      analysisType,
      websiteType: domain.includes('roof') ? 'roofing' : 'unknown'
    })
  },

  // Track SEO insights viewed
  trackSEOInsights: (domain: string, seoScore: number) => {
    trackRooferlyEvent('view_seo_insights', 'SEO Analysis', domain, seoScore, {
      seo_performance: seoScore >= 80 ? 'excellent' : seoScore >= 60 ? 'good' : 'needs_improvement'
    })
  },

  // Track competitive analysis
  trackCompetitorAnalysis: (competitorDomain: string, comparisonType: string) => {
    trackRooferlyEvent('competitor_analysis', 'Competitive Research', competitorDomain, undefined, {
      competitorAnalysis: true,
      comparisonType
    })
  },

  // Track roofing keyword analysis
  trackRoofingKeywords: (domain: string, topKeywords: string[]) => {
    trackRooferlyEvent('roofing_keywords_analyzed', 'Keyword Research', domain, topKeywords.length, {
      roofing_keywords: topKeywords.join(','),
      keyword_count: topKeywords.length
    })
  },

  // Track recommendations viewed
  trackRecommendations: (domain: string, recommendationType: 'seo' | 'performance' | 'content') => {
    trackRooferlyEvent('view_recommendations', 'User Engagement', domain, undefined, {
      recommendation_type: recommendationType
    })
  }
}
