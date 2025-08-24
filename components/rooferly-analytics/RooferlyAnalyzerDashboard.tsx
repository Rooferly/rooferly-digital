'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { RooferlyAnalytics } from './GoogleAnalytics'

interface RooferlyAnalyzerProps {
  defaultUrl?: string
}

interface AnalysisData {
  url: string
  roofingScore: number
  seoMetrics: {
    title: string
    metaDescription: string
    roofingKeywords: string[]
    localSEO: {
      hasGoogleMyBusiness: boolean
      hasLocalKeywords: boolean
      hasLocationPages: boolean
      citationsFound: number
    }
    technicalSEO: {
      mobileResponsive: boolean
      pageSpeed: number
      structuredData: boolean
      sslEnabled: boolean
    }
  }
  competitorAnalysis: {
    ranking: number
    competitorGaps: string[]
    opportunities: string[]
  }
  recommendations: {
    priority: 'high' | 'medium' | 'low'
    category: 'roofing-seo' | 'local-seo' | 'technical' | 'content'
    title: string
    description: string
    impact: string
  }[]
}

export default function RooferlyAnalyzerDashboard({ defaultUrl = 'rooferly.co' }: RooferlyAnalyzerProps) {
  const [analysisUrl, setAnalysisUrl] = useState(defaultUrl)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null)
  const [selectedTab, setSelectedTab] = useState<'overview' | 'seo' | 'local' | 'competitors' | 'recommendations'>('overview')

  // Rooferly brand colors from brand guide
  const brandColors = {
    primary: '#4A5568', // Steel Grey
    secondary: '#D97706', // Burnt Orange
    white: '#FFFFFF',
    lightGray: '#F6F6F6',
    charcoal: '#2D2D2D'
  }

  const handleAnalysis = async () => {
    if (!analysisUrl.trim()) return

    setIsAnalyzing(true)
    
    // Track analysis event
    RooferlyAnalytics.trackWebsiteAnalysis(analysisUrl, 'comprehensive')

    try {
      // Simulate API call - replace with actual roofing analysis API
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock data - replace with real analysis
      const mockData: AnalysisData = {
        url: analysisUrl,
        roofingScore: Math.floor(Math.random() * 40) + 60, // 60-100
        seoMetrics: {
          title: 'Roof Replacement Chicago | Licensed Roofing Contractors',
          metaDescription: 'Professional roof replacement services in Chicago. Get instant estimates, virtual visualization, and transparent pricing. Licensed & insured.',
          roofingKeywords: ['roof replacement', 'roofing contractor', 'chicago roofing', 'asphalt shingles', 'roof repair'],
          localSEO: {
            hasGoogleMyBusiness: true,
            hasLocalKeywords: true,
            hasLocationPages: true,
            citationsFound: 15
          },
          technicalSEO: {
            mobileResponsive: true,
            pageSpeed: Math.floor(Math.random() * 30) + 70,
            structuredData: true,
            sslEnabled: true
          }
        },
        competitorAnalysis: {
          ranking: Math.floor(Math.random() * 20) + 1,
          competitorGaps: ['Missing roofing service pages', 'Weak local citations', 'No virtual roof visualization'],
          opportunities: ['Target "emergency roof repair" keywords', 'Add more location-specific pages', 'Improve Core Web Vitals']
        },
        recommendations: [
          {
            priority: 'high',
            category: 'roofing-seo',
            title: 'Optimize for "Roof Replacement [City]" Keywords',
            description: 'Create location-specific landing pages targeting high-volume roofing keywords in your service areas.',
            impact: 'Could increase organic traffic by 40%'
          },
          {
            priority: 'high',
            category: 'local-seo',
            title: 'Enhance Google My Business Profile',
            description: 'Add roofing service categories, upload before/after photos, and encourage customer reviews.',
            impact: 'Improves local search visibility by 60%'
          },
          {
            priority: 'medium',
            category: 'technical',
            title: 'Implement Roofing Schema Markup',
            description: 'Add LocalBusiness and Service schema to help search engines understand your roofing services.',
            impact: 'Enables rich snippets in search results'
          }
        ]
      }

      setAnalysisData(mockData)
      
      // Track insights viewed
      RooferlyAnalytics.trackSEOInsights(analysisUrl, mockData.roofingScore)
      
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'seo', label: 'SEO Analysis', icon: MagnifyingGlassIcon },
    { id: 'local', label: 'Local SEO', icon: MapPinIcon },
    { id: 'competitors', label: 'Competitors', icon: BuildingOfficeIcon },
    { id: 'recommendations', label: 'Action Plan', icon: RocketLaunchIcon }
  ] as const

  return (
    <div className="min-h-screen" style={{ backgroundColor: brandColors.lightGray }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div 
                className="p-2 rounded-lg mr-3"
                style={{ backgroundColor: brandColors.primary }}
              >
                <HomeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: brandColors.charcoal }}>
                  Rooferly Analytics
                </h1>
                <p className="text-xs" style={{ color: brandColors.primary }}>
                  Roofing Industry Website Analyzer
                </p>
              </div>
            </motion.div>
            
            <div className="text-sm" style={{ color: brandColors.primary }}>
              Roofing Made Simple
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-16"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.charcoal} 100%)` 
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div 
                className="p-4 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <ChartBarIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Roofing Website Intelligence
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Advanced SEO analysis specifically designed for roofing contractors. 
              Analyze rooferly.co and competitor sites to dominate local search results.
            </p>
            
            {/* Analysis Input */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="url"
                    value={analysisUrl}
                    onChange={(e) => setAnalysisUrl(e.target.value)}
                    placeholder="Enter roofing website URL (e.g., rooferly.co)"
                    className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <motion.button
                  onClick={handleAnalysis}
                  disabled={isAnalyzing || !analysisUrl.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-50"
                  style={{ 
                    backgroundColor: brandColors.secondary,
                    opacity: isAnalyzing || !analysisUrl.trim() ? 0.5 : 1
                  }}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center">
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                      Analyzing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                      Analyze Website
                    </div>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <AnimatePresence>
        {analysisData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="py-12"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Results Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold" style={{ color: brandColors.charcoal }}>
                  Analysis Results for {analysisData.url}
                </h2>
                <div className="mt-4">
                  <div 
                    className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold"
                    style={{ backgroundColor: brandColors.secondary }}
                  >
                    <TrophyIcon className="h-6 w-6 mr-2" />
                    Roofing SEO Score: {analysisData.roofingScore}/100
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg p-1 shadow-sm">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setSelectedTab(tab.id)
                        RooferlyAnalytics.trackRecommendations(analysisData.url, tab.id as any)
                      }}
                      className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedTab === tab.id
                          ? 'text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      style={{
                        backgroundColor: selectedTab === tab.id ? brandColors.primary : 'transparent'
                      }}
                    >
                      <tab.icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedTab === 'overview' && (
                      <RooferlyOverview data={analysisData} brandColors={brandColors} />
                    )}
                    {selectedTab === 'seo' && (
                      <RooferlySEOAnalysis data={analysisData.seoMetrics} brandColors={brandColors} />
                    )}
                    {selectedTab === 'local' && (
                      <RooferlyLocalSEO data={analysisData.seoMetrics.localSEO} brandColors={brandColors} />
                    )}
                    {selectedTab === 'competitors' && (
                      <RooferlyCompetitorAnalysis data={analysisData.competitorAnalysis} brandColors={brandColors} />
                    )}
                    {selectedTab === 'recommendations' && (
                      <RooferlyRecommendations data={analysisData.recommendations} brandColors={brandColors} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      {isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div 
                className="animate-spin h-12 w-12 border-4 border-t-transparent rounded-full mx-auto mb-4"
                style={{ borderColor: `${brandColors.primary} transparent transparent transparent` }}
              ></div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.charcoal }}>
                Analyzing Roofing Website
              </h3>
              <p style={{ color: brandColors.primary }}>
                Running comprehensive roofing industry SEO analysis, local search optimization, and competitor research...
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Component placeholders - these will be implemented next
function RooferlyOverview({ data, brandColors }: { data: AnalysisData, brandColors: any }) {
  return <div>Overview content will go here</div>
}

function RooferlySEOAnalysis({ data, brandColors }: { data: any, brandColors: any }) {
  return <div>SEO Analysis content will go here</div>
}

function RooferlyLocalSEO({ data, brandColors }: { data: any, brandColors: any }) {
  return <div>Local SEO content will go here</div>
}

function RooferlyCompetitorAnalysis({ data, brandColors }: { data: any, brandColors: any }) {
  return <div>Competitor Analysis content will go here</div>
}

function RooferlyRecommendations({ data, brandColors }: { data: any, brandColors: any }) {
  return <div>Recommendations content will go here</div>
}
