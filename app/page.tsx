'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  MagnifyingGlassIcon,
  SparklesIcon,
  TrophyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import AnalysisForm from '@/components/AnalysisForm'
import MetricsOverview from '@/components/MetricsOverview'
import SEOInsights from '@/components/SEOInsights'
import TrafficAnalytics from '@/components/TrafficAnalytics'
import RecommendationsPanel from '@/components/RecommendationsPanel'

export default function Dashboard() {
  const [currentUrl, setCurrentUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisData, setAnalysisData] = useState(null)

  const handleAnalysis = async (url: string) => {
    setCurrentUrl(url)
    setIsAnalyzing(true)
    
    try {
      // Call our analysis API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      
      const data = await response.json()
      setAnalysisData(data)
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <RocketLaunchIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SEO Analyzer Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional website analysis tool with Google integrations. 
              Get actionable insights to boost your SEO rankings and conversion rates.
            </p>
            
            <div className="flex justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <ChartBarIcon className="h-6 w-6 mr-2" />
                <span>Traffic Analytics</span>
              </div>
              <div className="flex items-center">
                <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
                <span>SEO Insights</span>
              </div>
              <div className="flex items-center">
                <TrophyIcon className="h-6 w-6 mr-2" />
                <span>Top 10 Rankings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnalysisForm 
              onAnalyze={handleAnalysis} 
              isLoading={isAnalyzing}
            />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {analysisData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Analysis Results for {currentUrl}
              </h2>
              <p className="text-gray-600">
                Comprehensive SEO and performance analysis with actionable recommendations
              </p>
            </div>

            {/* Metrics Overview */}
            <div className="mb-8">
              <MetricsOverview data={analysisData} />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <SEOInsights data={analysisData.seo} />
              <TrafficAnalytics data={analysisData.traffic} />
            </div>

            {/* Recommendations */}
            <RecommendationsPanel recommendations={analysisData.recommendations} />
          </div>
        </motion.div>
      )}

      {/* Loading State */}
      {isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="animate-spin h-12 w-12 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Analyzing Your Website
              </h3>
              <p className="text-gray-600">
                Running comprehensive SEO audit, performance tests, and competitive analysis...
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Features Section */}
      {!analysisData && !isAnalyzing && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Analysis Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to dominate search rankings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MagnifyingGlassIcon,
                  title: 'SEO Audit',
                  description: 'Complete technical SEO analysis with meta tags, headers, and content optimization recommendations.'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Traffic Analytics',
                  description: 'Google Analytics integration with traffic sources, user behavior, and conversion tracking.'
                },
                {
                  icon: GlobeAltIcon,
                  title: 'Performance Metrics',
                  description: 'Core Web Vitals, page speed analysis, and mobile responsiveness testing.'
                },
                {
                  icon: TrophyIcon,
                  title: 'Competitive Analysis',
                  description: 'Compare against competitors and identify ranking opportunities.'
                },
                {
                  icon: SparklesIcon,
                  title: 'AI Recommendations',
                  description: 'Smart suggestions powered by machine learning for maximum impact.'
                },
                {
                  icon: RocketLaunchIcon,
                  title: 'Action Plans',
                  description: 'Step-by-step roadmaps to achieve top 10 search rankings.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-md transition-shadow duration-200"
                >
                  <feature.icon className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}