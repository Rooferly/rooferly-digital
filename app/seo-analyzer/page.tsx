"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Globe, 
  TrendingUp, 
  Target, 
  Zap, 
  Eye,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react'

interface SEOAnalysis {
  url: string
  title: string
  metaDescription: string
  loadTime: number
  mobileScore: number
  seoScore: number
  keywords: { keyword: string; density: number; rank?: number }[]
  recommendations: {
    priority: 'high' | 'medium' | 'low'
    category: string
    title: string
    description: string
    impact: string
  }[]
  competitors: {
    url: string
    title: string
    ranking: number
    strengths: string[]
  }[]
}

export default function SEOAnalyzerPage() {
  const [url, setUrl] = useState('https://rooferly.co')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  const handleAnalyze = async () => {
    setIsAnalyzing(true)
    try {
      const response = await fetch('/api/seo-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      
      if (response.ok) {
        const data = await response.json()
        setAnalysis(data)
        setActiveTab('overview')
      } else {
        console.error('Analysis failed')
      }
    } catch (error) {
      console.error('Error analyzing:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'default'
      case 'low': return 'secondary'
      default: return 'default'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Rooferly SEO Intelligence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced website analysis and competitor intelligence for roofing industry dominance
          </p>
        </div>

        {/* URL Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Website Analysis
            </CardTitle>
            <CardDescription>
              Enter a website URL to perform comprehensive SEO analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !url}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Analyze Site
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {analysis && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">SEO Score</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${getScoreColor(analysis.seoScore)}`}>
                      {analysis.seoScore}/100
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Overall SEO performance
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Load Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${analysis.loadTime < 3 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {analysis.loadTime.toFixed(2)}s
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Page load speed
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Mobile Score</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${getScoreColor(analysis.mobileScore)}`}>
                      {analysis.mobileScore}/100
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Mobile optimization
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Page Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Title</label>
                    <p className="text-gray-900">{analysis.title}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Meta Description</label>
                    <p className="text-gray-600">{analysis.metaDescription}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Keywords Tab */}
            <TabsContent value="keywords" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Keyword Analysis
                  </CardTitle>
                  <CardDescription>
                    Keyword density and ranking analysis for roofing terms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.keywords.map((kw, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <span className="font-medium">{kw.keyword}</span>
                          <div className="text-sm text-gray-500">
                            Density: {kw.density}%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {kw.rank && (
                            <Badge variant="outline">
                              Rank #{kw.rank}
                            </Badge>
                          )}
                          <div className={`w-16 h-2 rounded-full ${
                            kw.density > 2 ? 'bg-emerald-500' : 
                            kw.density > 1 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    SEO Recommendations
                  </CardTitle>
                  <CardDescription>
                    AI-powered recommendations to improve your search rankings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {rec.priority === 'high' ? (
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                            ) : rec.priority === 'medium' ? (
                              <Clock className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                            <h3 className="font-semibold">{rec.title}</h3>
                          </div>
                          <Badge variant={getPriorityColor(rec.priority) as any}>
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{rec.description}</p>
                        <div className="text-sm text-gray-500">
                          <strong>Expected Impact:</strong> {rec.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Competitors Tab */}
            <TabsContent value="competitors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Competitor Analysis
                  </CardTitle>
                  <CardDescription>
                    See how you stack up against Chicago roofing competitors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.competitors.map((comp, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{comp.title}</h3>
                            <p className="text-sm text-gray-500">{comp.url}</p>
                          </div>
                          <Badge variant="outline">
                            Rank #{comp.ranking}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {comp.strengths.map((strength, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Content Strategy
                  </CardTitle>
                  <CardDescription>
                    AI-generated content recommendations for roofing keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Content generation coming soon...</p>
                    <p className="text-sm">AI-powered content strategy and generation tools</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Demo Data Button */}
        {!analysis && !isAnalyzing && (
          <Card className="text-center">
            <CardContent className="py-8">
              <h3 className="text-lg font-semibold mb-2">Try the Demo</h3>
              <p className="text-gray-600 mb-4">
                See how the SEO analyzer works with sample data
              </p>
              <Button 
                onClick={() => {
                  setAnalysis({
                    url: 'https://rooferly.co',
                    title: 'Roof Replacement Chicago | Asphalt Shingles | Rooferly',
                    metaDescription: 'Professional roof replacement in Chicago. Get instant estimates, virtual visualization, and transparent pricing. Licensed and insured roofing contractors.',
                    loadTime: 2.3,
                    mobileScore: 85,
                    seoScore: 78,
                    keywords: [
                      { keyword: 'roof replacement', density: 2.4, rank: 12 },
                      { keyword: 'chicago roofing', density: 1.8, rank: 8 },
                      { keyword: 'asphalt shingles', density: 1.2, rank: 15 },
                      { keyword: 'roofing contractor', density: 0.9, rank: 22 }
                    ],
                    recommendations: [
                      {
                        priority: 'high',
                        category: 'content',
                        title: 'Add location-specific landing pages',
                        description: 'Create dedicated pages for Chicago suburbs like Naperville, Aurora, and Schaumburg to capture local search traffic.',
                        impact: 'Could increase local traffic by 40%'
                      },
                      {
                        priority: 'medium',
                        category: 'technical',
                        title: 'Improve page load speed',
                        description: 'Optimize images and implement lazy loading to reduce load time from 2.3s to under 2s.',
                        impact: 'Better user experience and SEO ranking'
                      },
                      {
                        priority: 'low',
                        category: 'content',
                        title: 'Add FAQ schema markup',
                        description: 'Implement structured data for FAQ sections to enhance search result appearance.',
                        impact: 'Increased click-through rates'
                      }
                    ],
                    competitors: [
                      {
                        url: 'https://chicagoroofing.com',
                        title: 'Chicago Roofing Company',
                        ranking: 3,
                        strengths: ['Local SEO', 'Reviews', 'Long-form content']
                      },
                      {
                        url: 'https://napervilleroofing.com',
                        title: 'Naperville Roofing Experts',
                        ranking: 7,
                        strengths: ['Location targeting', 'Service pages', 'Mobile optimization']
                      }
                    ]
                  })
                  setActiveTab('overview')
                }}
                variant="outline"
              >
                Load Demo Data
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
