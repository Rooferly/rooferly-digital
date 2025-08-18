import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Calculator, DollarSign, Home, Shield, Clock, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Cost Chicago 2024 | Instant Pricing | Rooferly',
  description: 'Get instant roof replacement cost estimates in Chicago. Transparent pricing for asphalt shingle roofs. No hidden fees, no sales visits. Licensed & insured contractors.',
  keywords: 'roof replacement cost Chicago, roof replacement price, asphalt shingle cost, roofing estimate Chicago, roof installation cost',
  openGraph: {
    title: 'Roof Replacement Cost Chicago 2024 | Instant Pricing | Rooferly',
    description: 'Get instant roof replacement cost estimates in Chicago. Transparent pricing for asphalt shingle roofs. No hidden fees, no sales visits.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Cost Chicago 2024 | Instant Pricing | Rooferly',
    description: 'Get instant roof replacement cost estimates in Chicago. Transparent pricing for asphalt shingle roofs.',
  },
}

export default function RoofReplacementCostPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Chicago Roof Replacement Cost Guide 2024
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
              Get instant, transparent pricing for your asphalt shingle roof replacement. 
              No hidden fees, no sales pressure - just honest estimates in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                <Link href="/estimate">Get My Instant Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                <Link href="#cost-factors">See Pricing Factors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Pricing Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Chicago Asphalt Shingle Roof Replacement Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Homes</h3>
                <p className="text-gray-600 mb-4">1,000 - 1,500 sq ft</p>
                <div className="text-3xl font-bold text-orange-600 mb-2">$8,000 - $15,000</div>
                <p className="text-sm text-gray-500">Typical 3-tab to architectural shingles</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center ring-2 ring-orange-600">
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Homes</h3>
                <p className="text-gray-600 mb-4">1,500 - 2,500 sq ft</p>
                <div className="text-3xl font-bold text-orange-600 mb-2">$12,000 - $25,000</div>
                <p className="text-sm text-gray-500">Most popular size in Chicago</p>
                <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full mt-2 inline-block">Most Common</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Large Homes</h3>
                <p className="text-gray-600 mb-4">2,500+ sq ft</p>
                <div className="text-3xl font-bold text-orange-600 mb-2">$20,000 - $40,000</div>
                <p className="text-sm text-gray-500">Premium materials and complex rooflines</p>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
              <Calculator className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want Your Exact Price?</h3>
              <p className="text-gray-700 mb-4">Get a personalized estimate based on your specific roof size, pitch, and material preferences.</p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                <Link href="/estimate">Calculate My Exact Cost</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors Section */}
      <section id="cost-factors" className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              What Affects Your Roof Replacement Cost?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <DollarSign className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Roof Size & Complexity</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Square footage:</strong> Primary cost driver</li>
                  <li>• <strong>Roof pitch:</strong> Steeper = more labor</li>
                  <li>• <strong>Roof lines:</strong> Dormers, valleys increase cost</li>
                  <li>• <strong>Height:</strong> Multi-story homes require more safety equipment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Shield className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Shingle Type & Quality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>3-Tab:</strong> $3.50-$5.50 per sq ft</li>
                  <li>• <strong>Architectural:</strong> $4.50-$7.50 per sq ft</li>
                  <li>• <strong>Luxury:</strong> $6.00-$12.00 per sq ft</li>
                  <li>• <strong>Brand:</strong> Premium brands cost 10-20% more</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Clock className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tear-Off & Disposal</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Single layer:</strong> Standard tear-off cost</li>
                  <li>• <strong>Multiple layers:</strong> 20-30% more expensive</li>
                  <li>• <strong>Disposal fees:</strong> $300-$800 in Chicago</li>
                  <li>• <strong>Deck repair:</strong> $2-$8 per sq ft if needed</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Home className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Components</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Gutters:</strong> $3-$8 per linear foot</li>
                  <li>• <strong>Ventilation:</strong> $150-$300 per vent</li>
                  <li>• <strong>Skylights:</strong> $500-$1,500 each</li>
                  <li>• <strong>Chimney work:</strong> $300-$1,200</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Affordable Financing Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">0% Interest Financing</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• 12 months same-as-cash</li>
                  <li>• No prepayment penalties</li>
                  <li>• Quick online approval</li>
                  <li>• Perfect for planned replacements</li>
                </ul>
                <div className="text-2xl font-bold text-orange-600">$0 Down</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Extended Payment Plans</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Up to 60 months available</li>
                  <li>• Fixed interest rates</li>
                  <li>• No hidden fees</li>
                  <li>• Payments as low as $200/month</li>
                </ul>
                <div className="text-2xl font-bold text-orange-600">Low Monthly</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Claims Welcome</h3>
              <p className="text-gray-700">
                We work directly with insurance companies to ensure you get the coverage you deserve. 
                Many homeowners pay only their deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Why Rooferly Offers Better Value
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Rooferly</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Contractors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Instant Pricing</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center text-gray-400">Wait days for estimates</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">No Sales Visits</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center text-gray-400">High-pressure sales</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Transparent Pricing</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center text-gray-400">Hidden markups</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Visual Roof Preview</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center text-gray-400">Guess how it looks</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Licensed & Insured</td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Costs Warning */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beware of Hidden Costs</h3>
                  <p className="text-gray-700 mb-4">
                    Many roofing companies quote low prices, then add unexpected charges during the project. 
                    Here's what to watch for:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• <strong>Permit fees</strong> not included in original quote</li>
                    <li>• <strong>Deck repair</strong> charged at inflated rates</li>
                    <li>• <strong>Change orders</strong> for "unforeseen" issues</li>
                    <li>• <strong>Disposal fees</strong> added after signing</li>
                    <li>• <strong>Material upgrades</strong> pushed during installation</li>
                  </ul>
                  <div className="bg-white border border-yellow-300 rounded-lg p-4">
                    <p className="text-gray-900 font-semibold">Rooferly Promise:</p>
                    <p className="text-gray-700">
                      Our quotes include ALL costs upfront. No surprises, no hidden fees, no last-minute add-ons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Get Your Exact Roof Replacement Cost Now
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              No sales visits, no waiting, no surprises. Just honest pricing in under 5 minutes.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 min-h-[48px]" asChild>
              <Link href="/estimate">
                Get My Free Instant Estimate
              </Link>
            </Button>
            <p className="text-orange-100 text-sm mt-4">
              Join 500+ Chicago homeowners who've gotten transparent pricing from Rooferly
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
