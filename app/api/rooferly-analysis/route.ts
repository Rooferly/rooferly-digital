import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio'

interface RooferlyAnalysisResult {
  url: string
  timestamp: string
  roofingScore: number
  seoMetrics: RoofingSEOMetrics
  localSEO: LocalSEOMetrics
  technicalSEO: TechnicalSEOMetrics
  contentAnalysis: RoofingContentAnalysis
  competitorInsights: CompetitorInsights
  actionableRecommendations: RooferlyRecommendation[]
}

interface RoofingSEOMetrics {
  title: {
    text: string
    length: number
    hasRoofingKeywords: boolean
    hasLocationKeywords: boolean
    optimizationScore: number
  }
  metaDescription: {
    text: string
    length: number
    hasRoofingKeywords: boolean
    hasLocationKeywords: boolean
    optimizationScore: number
  }
  headingStructure: {
    h1Count: number
    h1Text: string[]
    h2Count: number
    roofingKeywordsInHeadings: string[]
  }
  roofingKeywords: {
    primary: string[]
    secondary: string[]
    density: { [key: string]: number }
    missingOpportunities: string[]
  }
  internalLinking: {
    totalLinks: number
    roofingServicePages: number
    locationPages: number
    linkStructureScore: number
  }
}

interface LocalSEOMetrics {
  googleMyBusiness: {
    found: boolean
    category: string
    reviewCount: number
    averageRating: number
  }
  locationKeywords: {
    found: string[]
    missing: string[]
    cityStateOptimization: number
  }
  localCitations: {
    count: number
    consistency: number
    topDirectories: string[]
  }
  locationPages: {
    count: number
    citiesServed: string[]
    optimizationScore: number
  }
  schemaMarkup: {
    localBusiness: boolean
    roofingContractor: boolean
    serviceArea: boolean
  }
}

interface TechnicalSEOMetrics {
  mobileOptimization: {
    responsive: boolean
    mobileSpeed: number
    mobileFriendly: boolean
  }
  pageSpeed: {
    desktop: number
    mobile: number
    coreWebVitals: {
      lcp: number
      fid: number
      cls: number
    }
  }
  technicalHealth: {
    ssl: boolean
    xml_sitemap: boolean
    robots_txt: boolean
    canonical_tags: boolean
    meta_robots: string
  }
  structuredData: {
    hasAnySchema: boolean
    localBusinessSchema: boolean
    breadcrumbSchema: boolean
    faqSchema: boolean
  }
}

interface RoofingContentAnalysis {
  servicePages: {
    roofReplacement: boolean
    roofRepair: boolean
    roofInspection: boolean
    gutterServices: boolean
    emergencyServices: boolean
  }
  contentQuality: {
    wordCount: number
    readabilityScore: number
    roofingExpertise: number
    beforeAfterGallery: boolean
  }
  conversionElements: {
    phoneNumbers: string[]
    contactForms: number
    ctaButtons: number
    freeEstimateOffers: boolean
  }
  trustSignals: {
    licenseCertifications: boolean
    insuranceInfo: boolean
    warranties: boolean
    customerReviews: boolean
    yearsInBusiness: boolean
  }
}

interface CompetitorInsights {
  rankingPosition: number
  competitorGaps: string[]
  opportunities: string[]
  marketAnalysis: {
    averageRoofingScore: number
    yourPosition: 'leading' | 'competitive' | 'lagging'
  }
}

interface RooferlyRecommendation {
  id: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  category: 'roofing-seo' | 'local-seo' | 'technical' | 'content' | 'conversion'
  title: string
  description: string
  expectedImpact: string
  implementationTime: string
  difficulty: 'easy' | 'medium' | 'hard'
  roiPotential: 'high' | 'medium' | 'low'
}

export async function POST(request: NextRequest) {
  try {
    const { url, analysisType = 'comprehensive' } = await request.json()

    if (!url || !isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Valid URL required for roofing analysis' },
        { status: 400 }
      )
    }

    console.log(`Starting Rooferly analysis for: ${url}`)

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    try {
      const analysisResult = await performRooferlyAnalysis(browser, url, analysisType)
      return NextResponse.json(analysisResult)

    } finally {
      await browser.close()
    }

  } catch (error) {
    console.error('Rooferly analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed. Please verify the URL and try again.' },
      { status: 500 }
    )
  }
}

async function performRooferlyAnalysis(
  browser: puppeteer.Browser, 
  url: string, 
  analysisType: string
): Promise<RooferlyAnalysisResult> {
  
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

  const content = await page.content()
  const $ = cheerio.load(content)

  // Extract comprehensive roofing industry data
  const seoMetrics = await analyzeRoofingSEO($, url)
  const localSEO = await analyzeLocalSEO($, url)
  const technicalSEO = await analyzeTechnicalSEO(page, $)
  const contentAnalysis = await analyzeRoofingContent($)
  const competitorInsights = await analyzeCompetitorPosition(url)

  // Calculate overall roofing score
  const roofingScore = calculateRooferlyScore(seoMetrics, localSEO, technicalSEO, contentAnalysis)

  // Generate actionable recommendations
  const recommendations = generateRooferlyRecommendations(
    seoMetrics, localSEO, technicalSEO, contentAnalysis, competitorInsights
  )

  await page.close()

  return {
    url,
    timestamp: new Date().toISOString(),
    roofingScore,
    seoMetrics,
    localSEO,
    technicalSEO,
    contentAnalysis,
    competitorInsights,
    actionableRecommendations: recommendations
  }
}

async function analyzeRoofingSEO($: cheerio.CheerioAPI, url: string): Promise<RoofingSEOMetrics> {
  const title = $('title').text() || ''
  const metaDescription = $('meta[name="description"]').attr('content') || ''
  const bodyText = $('body').text().toLowerCase()

  // Roofing-specific keywords
  const primaryRoofingKeywords = [
    'roof replacement', 'roofing contractor', 'roof repair', 'roofing company',
    'roof installation', 'new roof', 'roofing services', 'roofer'
  ]
  
  const secondaryRoofingKeywords = [
    'asphalt shingles', 'metal roofing', 'tile roof', 'flat roof',
    'roof inspection', 'roof leak', 'storm damage', 'emergency roofing',
    'gutter installation', 'roof maintenance', 'commercial roofing'
  ]

  const locationKeywords = [
    'chicago', 'illinois', 'chicagoland', 'cook county', 'dupage county',
    'lake county', 'will county', 'local', 'near me'
  ]

  // Analyze title optimization
  const titleHasRoofing = primaryRoofingKeywords.some(kw => title.toLowerCase().includes(kw))
  const titleHasLocation = locationKeywords.some(kw => title.toLowerCase().includes(kw))
  const titleOptimization = (titleHasRoofing ? 40 : 0) + (titleHasLocation ? 30 : 0) + 
    (title.length >= 30 && title.length <= 60 ? 30 : 0)

  // Analyze meta description
  const metaHasRoofing = primaryRoofingKeywords.some(kw => metaDescription.toLowerCase().includes(kw))
  const metaHasLocation = locationKeywords.some(kw => metaDescription.toLowerCase().includes(kw))
  const metaOptimization = (metaHasRoofing ? 40 : 0) + (metaHasLocation ? 30 : 0) + 
    (metaDescription.length >= 120 && metaDescription.length <= 160 ? 30 : 0)

  // Analyze heading structure
  const h1Tags = $('h1').map((_, el) => $(el).text()).get()
  const h2Tags = $('h2').map((_, el) => $(el).text()).get()
  
  const roofingKeywordsInHeadings = [...primaryRoofingKeywords, ...secondaryRoofingKeywords]
    .filter(keyword => 
      h1Tags.some(h1 => h1.toLowerCase().includes(keyword)) ||
      h2Tags.some(h2 => h2.toLowerCase().includes(keyword))
    )

  // Keyword density analysis
  const words = bodyText.split(/\s+/).filter(word => word.length > 2)
  const keywordDensity: { [key: string]: number } = {}
  
  primaryRoofingKeywords.forEach(keyword => {
    const matches = (bodyText.match(new RegExp(keyword, 'gi')) || []).length
    keywordDensity[keyword] = Math.round((matches / words.length) * 1000) / 10
  })

  // Find missing keyword opportunities
  const missingOpportunities = primaryRoofingKeywords.filter(keyword => 
    !bodyText.includes(keyword) && keyword !== 'roofer'
  )

  // Analyze internal linking
  const allLinks = $('a[href]')
  const internalLinks = allLinks.filter((_, el) => {
    const href = $(el).attr('href') || ''
    return href.startsWith('/') || href.includes(new URL(url).hostname)
  })

  const roofingServicePages = internalLinks.filter((_, el) => {
    const href = $(el).attr('href')?.toLowerCase() || ''
    const text = $(el).text().toLowerCase()
    return href.includes('roof') || text.includes('roof') || 
           href.includes('service') || text.includes('service')
  }).length

  const locationPages = internalLinks.filter((_, el) => {
    const href = $(el).attr('href')?.toLowerCase() || ''
    const text = $(el).text().toLowerCase()
    return locationKeywords.some(loc => href.includes(loc) || text.includes(loc))
  }).length

  return {
    title: {
      text: title,
      length: title.length,
      hasRoofingKeywords: titleHasRoofing,
      hasLocationKeywords: titleHasLocation,
      optimizationScore: titleOptimization
    },
    metaDescription: {
      text: metaDescription,
      length: metaDescription.length,
      hasRoofingKeywords: metaHasRoofing,
      hasLocationKeywords: metaHasLocation,
      optimizationScore: metaOptimization
    },
    headingStructure: {
      h1Count: h1Tags.length,
      h1Text: h1Tags,
      h2Count: h2Tags.length,
      roofingKeywordsInHeadings
    },
    roofingKeywords: {
      primary: primaryRoofingKeywords.filter(kw => bodyText.includes(kw)),
      secondary: secondaryRoofingKeywords.filter(kw => bodyText.includes(kw)),
      density: keywordDensity,
      missingOpportunities
    },
    internalLinking: {
      totalLinks: internalLinks.length,
      roofingServicePages,
      locationPages,
      linkStructureScore: Math.min(100, (roofingServicePages * 10) + (locationPages * 15))
    }
  }
}

async function analyzeLocalSEO($: cheerio.CheerioAPI, url: string): Promise<LocalSEOMetrics> {
  const bodyText = $('body').text().toLowerCase()
  
  // Check for location keywords
  const locationKeywords = ['chicago', 'illinois', 'chicagoland', 'cook county', 'dupage county']
  const foundLocations = locationKeywords.filter(loc => bodyText.includes(loc))
  const missingLocations = locationKeywords.filter(loc => !bodyText.includes(loc))

  // Check for schema markup
  const hasLocalBusinessSchema = $('script[type="application/ld+json"]').text().includes('LocalBusiness')
  const hasRoofingContractorSchema = $('script[type="application/ld+json"]').text().includes('RoofingContractor')
  const hasServiceAreaSchema = $('script[type="application/ld+json"]').text().includes('serviceArea')

  // Analyze location pages
  const locationPageLinks = $('a[href*="location"], a[href*="area"], a[href*="chicago"], a[href*="suburb"]')
  const citiesServed = [] // Would be extracted from actual location pages

  return {
    googleMyBusiness: {
      found: false, // Would check via Google My Business API
      category: 'Roofing Contractor',
      reviewCount: 0,
      averageRating: 0
    },
    locationKeywords: {
      found: foundLocations,
      missing: missingLocations,
      cityStateOptimization: Math.round((foundLocations.length / locationKeywords.length) * 100)
    },
    localCitations: {
      count: 0, // Would check citation APIs
      consistency: 0,
      topDirectories: []
    },
    locationPages: {
      count: locationPageLinks.length,
      citiesServed,
      optimizationScore: Math.min(100, locationPageLinks.length * 20)
    },
    schemaMarkup: {
      localBusiness: hasLocalBusinessSchema,
      roofingContractor: hasRoofingContractorSchema,
      serviceArea: hasServiceAreaSchema
    }
  }
}

async function analyzeTechnicalSEO(page: puppeteer.Page, $: cheerio.CheerioAPI): Promise<TechnicalSEOMetrics> {
  // Check mobile responsiveness
  const viewport = $('meta[name="viewport"]').attr('content') || ''
  const responsive = viewport.includes('width=device-width')

  // Check technical elements
  const ssl = page.url().startsWith('https://')
  const hasSitemap = await checkForSitemap(page.url())
  const hasRobots = await checkForRobots(page.url())
  const canonicalTag = $('link[rel="canonical"]').length > 0
  const metaRobots = $('meta[name="robots"]').attr('content') || 'index,follow'

  // Check structured data
  const schemaScripts = $('script[type="application/ld+json"]')
  const hasAnySchema = schemaScripts.length > 0
  const hasLocalBusinessSchema = schemaScripts.text().includes('LocalBusiness')
  const hasBreadcrumbSchema = schemaScripts.text().includes('BreadcrumbList')
  const hasFAQSchema = schemaScripts.text().includes('FAQPage')

  return {
    mobileOptimization: {
      responsive,
      mobileSpeed: 0, // Would use PageSpeed Insights API
      mobileFriendly: responsive
    },
    pageSpeed: {
      desktop: 0, // Would use PageSpeed Insights API
      mobile: 0,
      coreWebVitals: {
        lcp: 0,
        fid: 0,
        cls: 0
      }
    },
    technicalHealth: {
      ssl,
      xml_sitemap: hasSitemap,
      robots_txt: hasRobots,
      canonical_tags: canonicalTag,
      meta_robots: metaRobots
    },
    structuredData: {
      hasAnySchema,
      localBusinessSchema: hasLocalBusinessSchema,
      breadcrumbSchema: hasBreadcrumbSchema,
      faqSchema: hasFAQSchema
    }
  }
}

async function analyzeRoofingContent($: cheerio.CheerioAPI): Promise<RoofingContentAnalysis> {
  const bodyText = $('body').text().toLowerCase()
  const allText = $('body').text()

  // Check for roofing service pages
  const hasRoofReplacement = bodyText.includes('roof replacement') || bodyText.includes('new roof')
  const hasRoofRepair = bodyText.includes('roof repair') || bodyText.includes('roof fix')
  const hasRoofInspection = bodyText.includes('roof inspection') || bodyText.includes('roof assessment')
  const hasGutterServices = bodyText.includes('gutter') || bodyText.includes('downspout')
  const hasEmergencyServices = bodyText.includes('emergency') || bodyText.includes('24/7')

  // Analyze content quality
  const wordCount = allText.split(/\s+/).filter(word => word.length > 0).length
  const hasBeforeAfter = bodyText.includes('before') && bodyText.includes('after')

  // Find conversion elements
  const phoneNumbers = allText.match(/(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g) || []
  const contactForms = $('form').length
  const ctaButtons = $('button, a[class*="btn"], a[class*="cta"]').length
  const hasFreeEstimate = bodyText.includes('free estimate') || bodyText.includes('free quote')

  // Check trust signals
  const hasLicense = bodyText.includes('licensed') || bodyText.includes('license')
  const hasInsurance = bodyText.includes('insured') || bodyText.includes('insurance')
  const hasWarranty = bodyText.includes('warranty') || bodyText.includes('guarantee')
  const hasReviews = bodyText.includes('review') || bodyText.includes('testimonial')
  const hasYearsExp = /\d+\s*(year|yr)s?\s*(experience|business)/i.test(allText)

  return {
    servicePages: {
      roofReplacement: hasRoofReplacement,
      roofRepair: hasRoofRepair,
      roofInspection: hasRoofInspection,
      gutterServices: hasGutterServices,
      emergencyServices: hasEmergencyServices
    },
    contentQuality: {
      wordCount,
      readabilityScore: Math.min(100, wordCount / 50), // Simplified calculation
      roofingExpertise: 0, // Would analyze content depth
      beforeAfterGallery: hasBeforeAfter
    },
    conversionElements: {
      phoneNumbers,
      contactForms,
      ctaButtons,
      freeEstimateOffers: hasFreeEstimate
    },
    trustSignals: {
      licenseCertifications: hasLicense,
      insuranceInfo: hasInsurance,
      warranties: hasWarranty,
      customerReviews: hasReviews,
      yearsInBusiness: hasYearsExp
    }
  }
}

async function analyzeCompetitorPosition(url: string): Promise<CompetitorInsights> {
  // This would integrate with SEO APIs to get actual competitor data
  return {
    rankingPosition: Math.floor(Math.random() * 20) + 1,
    competitorGaps: [
      'Missing "emergency roof repair" content',
      'Weak local citation profile',
      'No virtual roof visualization tools'
    ],
    opportunities: [
      'Target "roof replacement cost" keywords',
      'Create suburb-specific landing pages',
      'Add customer review schema markup'
    ],
    marketAnalysis: {
      averageRoofingScore: 65,
      yourPosition: 'competitive'
    }
  }
}

function calculateRooferlyScore(
  seo: RoofingSEOMetrics, 
  local: LocalSEOMetrics, 
  technical: TechnicalSEOMetrics, 
  content: RoofingContentAnalysis
): number {
  let score = 0

  // SEO factors (40% weight)
  score += seo.title.optimizationScore * 0.1
  score += seo.metaDescription.optimizationScore * 0.1
  score += (seo.headingStructure.h1Count === 1 ? 10 : 0)
  score += Math.min(10, seo.roofingKeywords.primary.length * 2)

  // Local SEO (30% weight)
  score += local.locationKeywords.cityStateOptimization * 0.15
  score += local.locationPages.optimizationScore * 0.15

  // Technical SEO (20% weight)
  score += (technical.technicalHealth.ssl ? 5 : 0)
  score += (technical.mobileOptimization.responsive ? 5 : 0)
  score += (technical.structuredData.hasAnySchema ? 5 : 0)
  score += (technical.technicalHealth.xml_sitemap ? 5 : 0)

  // Content quality (10% weight)
  score += (content.trustSignals.licenseCertifications ? 3 : 0)
  score += (content.conversionElements.freeEstimateOffers ? 3 : 0)
  score += (content.servicePages.roofReplacement ? 2 : 0)
  score += (content.servicePages.roofRepair ? 2 : 0)

  return Math.min(100, Math.round(score))
}

function generateRooferlyRecommendations(
  seo: RoofingSEOMetrics,
  local: LocalSEOMetrics,
  technical: TechnicalSEOMetrics,
  content: RoofingContentAnalysis,
  competitor: CompetitorInsights
): RooferlyRecommendation[] {
  const recommendations: RooferlyRecommendation[] = []

  // Critical recommendations
  if (seo.title.optimizationScore < 70) {
    recommendations.push({
      id: 'title-optimization',
      priority: 'critical',
      category: 'roofing-seo',
      title: 'Optimize Page Title for Roofing Keywords',
      description: 'Include primary roofing keywords and location in your title tag. Target "Roof Replacement [City]" format.',
      expectedImpact: 'Could improve search rankings by 20-30%',
      implementationTime: '30 minutes',
      difficulty: 'easy',
      roiPotential: 'high'
    })
  }

  if (!local.schemaMarkup.localBusiness) {
    recommendations.push({
      id: 'local-business-schema',
      priority: 'high',
      category: 'local-seo',
      title: 'Add Local Business Schema Markup',
      description: 'Implement LocalBusiness and RoofingContractor schema to help search engines understand your business.',
      expectedImpact: 'Enables rich snippets and improves local visibility',
      implementationTime: '2-3 hours',
      difficulty: 'medium',
      roiPotential: 'high'
    })
  }

  if (!technical.technicalHealth.ssl) {
    recommendations.push({
      id: 'ssl-certificate',
      priority: 'critical',
      category: 'technical',
      title: 'Install SSL Certificate',
      description: 'Secure your website with HTTPS. This is a ranking factor and builds customer trust.',
      expectedImpact: 'Security ranking boost and increased customer confidence',
      implementationTime: '1-2 hours',
      difficulty: 'easy',
      roiPotential: 'high'
    })
  }

  if (local.locationPages.count < 5) {
    recommendations.push({
      id: 'location-pages',
      priority: 'high',
      category: 'local-seo',
      title: 'Create Location-Specific Service Pages',
      description: 'Build dedicated pages for each city/suburb you serve. Include "Roof Replacement in [City]" pages.',
      expectedImpact: 'Significantly improves local search rankings',
      implementationTime: '1-2 weeks',
      difficulty: 'medium',
      roiPotential: 'high'
    })
  }

  return recommendations
}

async function checkForSitemap(url: string): Promise<boolean> {
  try {
    const sitemapUrl = new URL('/sitemap.xml', url).toString()
    const response = await fetch(sitemapUrl)
    return response.ok
  } catch {
    return false
  }
}

async function checkForRobots(url: string): Promise<boolean> {
  try {
    const robotsUrl = new URL('/robots.txt', url).toString()
    const response = await fetch(robotsUrl)
    return response.ok
  } catch {
    return false
  }
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string.startsWith('http') ? string : `https://${string}`)
    return true
  } catch {
    return false
  }
}
