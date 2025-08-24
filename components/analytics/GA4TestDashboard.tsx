'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  PlayIcon,
  ClockIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { RooferlyGA4Events } from './RooferlyGA4Enhanced'

export default function GA4TestDashboard() {
  const [testResults, setTestResults] = useState<{[key: string]: 'pending' | 'success' | 'error'}>({})
  const [isTestingAll, setIsTestingAll] = useState(false)

  const testGA4Event = async (eventName: string, eventFunction: () => void) => {
    setTestResults(prev => ({ ...prev, [eventName]: 'pending' }))
    
    try {
      // Execute the event
      eventFunction()
      
      // Simulate verification delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setTestResults(prev => ({ ...prev, [eventName]: 'success' }))
    } catch (error) {
      setTestResults(prev => ({ ...prev, [eventName]: 'error' }))
    }
  }

  const runAllTests = async () => {
    setIsTestingAll(true)
    
    const tests = [
      {
        name: 'estimate_request',
        action: () => RooferlyGA4Events.trackEstimateRequest('roof_replacement', 'planned')
      },
      {
        name: 'service_inquiry',
        action: () => RooferlyGA4Events.trackServiceInquiry('roof_repair', 'chicago')
      },
      {
        name: 'website_analysis',
        action: () => RooferlyGA4Events.trackAnalysisStart('rooferly.co', 'comprehensive')
      },
      {
        name: 'seo_insights',
        action: () => RooferlyGA4Events.trackSEOInsights('rooferly.co', 85)
      },
      {
        name: 'competitor_analysis',
        action: () => RooferlyGA4Events.trackCompetitorAnalysis('competitor.com')
      },
      {
        name: 'lead_generation',
        action: () => RooferlyGA4Events.trackLead('form', 'website', 100)
      }
    ]

    for (const test of tests) {
      await testGA4Event(test.name, test.action)
      await new Promise(resolve => setTimeout(resolve, 500)) // Delay between tests
    }
    
    setIsTestingAll(false)
  }

  const testEvents = [
    {
      id: 'estimate_request',
      title: 'Estimate Request',
      description: 'Test roof replacement estimate tracking',
      action: () => RooferlyGA4Events.trackEstimateRequest('roof_replacement', 'planned'),
      category: 'Lead Generation'
    },
    {
      id: 'service_inquiry',
      title: 'Service Inquiry',
      description: 'Test service inquiry form tracking',
      action: () => RooferlyGA4Events.trackServiceInquiry('roof_repair', 'chicago'),
      category: 'Lead Generation'
    },
    {
      id: 'website_analysis',
      title: 'Website Analysis',
      description: 'Test analyzer tool usage tracking',
      action: () => RooferlyGA4Events.trackAnalysisStart('rooferly.co', 'comprehensive'),
      category: 'Tool Usage'
    },
    {
      id: 'seo_insights',
      title: 'SEO Insights View',
      description: 'Test SEO analysis results tracking',
      action: () => RooferlyGA4Events.trackSEOInsights('rooferly.co', 85),
      category: 'Tool Usage'
    },
    {
      id: 'competitor_analysis',
      title: 'Competitor Research',
      description: 'Test competitor analysis tracking',
      action: () => RooferlyGA4Events.trackCompetitorAnalysis('competitor.com'),
      category: 'Tool Usage'
    },
    {
      id: 'roof_visualization',
      title: 'Roof Visualization',
      description: 'Test virtual roof viewer tracking',
      action: () => RooferlyGA4Events.trackRoofVisualization('architectural_shingle', 45),
      category: 'Content Engagement'
    },
    {
      id: 'lead_generation',
      title: 'Lead Conversion',
      description: 'Test lead generation tracking',
      action: () => RooferlyGA4Events.trackLead('form', 'website', 100),
      category: 'Conversion'
    },
    {
      id: 'service_view',
      title: 'Service Page View',
      description: 'Test service page engagement',
      action: () => RooferlyGA4Events.trackServiceView('roof-replacement-chicago', 'Roof Replacement Chicago', 15000),
      category: 'E-commerce'
    }
  ]

  const getStatusIcon = (status: 'pending' | 'success' | 'error' | undefined) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500 animate-spin" />
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'error':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
      default:
        return <PlayIcon className="h-5 w-5 text-gray-400" />
    }
  }

  const groupedEvents = testEvents.reduce((groups, event) => {
    const category = event.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(event)
    return groups
  }, {} as {[key: string]: typeof testEvents})

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <ChartBarIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            GA4 Event Testing Dashboard
          </h2>
          <p className="text-gray-600">
            Test your Google Analytics 4 events for Rooferly's roofing business tracking
          </p>
        </div>

        {/* Quick Setup Check */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">📋 Before Testing:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Make sure you have your GA4 Measurement ID set in environment variables</li>
            <li>• Open your GA4 Real-time reports in another tab</li>
            <li>• Enable DebugView in GA4 for detailed event inspection</li>
            <li>• Use Chrome DevTools Network tab to see gtag requests</li>
          </ul>
        </div>

        {/* Run All Tests Button */}
        <div className="text-center mb-8">
          <motion.button
            onClick={runAllTests}
            disabled={isTestingAll}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              isTestingAll 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isTestingAll ? (
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 animate-spin" />
                Running All Tests...
              </div>
            ) : (
              'Run All Tests'
            )}
          </motion.button>
        </div>

        {/* Event Test Categories */}
        {Object.entries(groupedEvents).map(([category, events]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {event.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      {getStatusIcon(testResults[event.id])}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => testGA4Event(event.id, event.action)}
                    disabled={testResults[event.id] === 'pending'}
                    className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors duration-200 disabled:opacity-50"
                  >
                    {testResults[event.id] === 'pending' ? 'Testing...' : 'Test Event'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Verification Instructions */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">🔍 How to Verify Events:</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <strong>1. Real-time Reports:</strong> Go to GA4 → Reports → Real-time → Events. You should see your test events appearing within seconds.
            </div>
            <div>
              <strong>2. DebugView:</strong> GA4 → Configure → DebugView. Enable debug mode for detailed event parameters.
            </div>
            <div>
              <strong>3. Chrome DevTools:</strong> Network tab → Filter by "collect" to see gtag requests being sent.
            </div>
            <div>
              <strong>4. GA4 Stream Debugger:</strong> Data Streams → Web → View tag details → Debug events.
            </div>
          </div>
        </div>

        {/* Environment Check */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <h4 className="font-medium text-yellow-900 mb-2">⚙️ Current Configuration:</h4>
          <div className="text-sm text-yellow-800">
            <div>GA4 Measurement ID: {process.env.NEXT_PUBLIC_ROOFERLY_GA4_ID || 'Not Set'}</div>
            <div>Environment: {process.env.NODE_ENV}</div>
            <div>Debug Mode: {process.env.NODE_ENV === 'development' ? 'Enabled' : 'Disabled'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
