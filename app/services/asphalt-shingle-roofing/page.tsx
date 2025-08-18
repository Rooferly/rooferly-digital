import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, Clock, DollarSign, Star, ArrowRight, Home, Wrench, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roof Replacement Chicago | Rooferly',
  description: 'Professional asphalt shingle roof replacement in Chicago. Get instant online estimates, see your new roof before you buy. Licensed & insured. No sales visits required.',
  keywords: 'asphalt shingle roof replacement, Chicago roofing, roof replacement cost, shingle roof installation, roofing contractors Chicago',
  openGraph: {
    title: 'Asphalt Shingle Roof Replacement Chicago | Rooferly',
    description: 'Professional asphalt shingle roof replacement in Chicago. Get instant online estimates, see your new roof before you buy. Licensed & insured.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asphalt Shingle Roof Replacement Chicago | Rooferly',
    description: 'Professional asphalt shingle roof replacement in Chicago. Get instant online estimates, see your new roof before you buy.',
  },
}

export default function AsphaltShingleRoofingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Chicago's #1 Asphalt Shingle Roof Replacement Specialists
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
              Get instant pricing and see your new asphalt shingle roof before you buy. 
              100% online process, no sales visits required. Licensed, insured, and trusted by Chicago homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                <Link href="/estimate">Get Instant Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                <Link href="#why-asphalt-shingles">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Asphalt Shingles Section */}
      <section id="why-asphalt-shingles" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Why Choose Asphalt Shingles for Your Chicago Home?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <DollarSign className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
                <p className="text-gray-700">
                  Asphalt shingles offer the best value for money, providing excellent protection 
                  at a fraction of the cost of premium materials like metal or slate.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Shield className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Resistant</h3>
                <p className="text-gray-700">
                  Engineered to withstand Chicago's harsh winters, heavy snow loads, and summer storms. 
                  Class A fire rating and wind resistance up to 130 mph.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Clock className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Installation</h3>
                <p className="text-gray-700">
                  Most asphalt shingle roof replacements can be completed in 1-2 days, 
                  minimizing disruption to your daily routine.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Palette className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Style Options</h3>
                <p className="text-gray-700">
                  Choose from dozens of colors and styles to match your home's architecture. 
                  From traditional 3-tab to premium architectural shingles.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Home className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Performance</h3>
                <p className="text-gray-700">
                  Over 80% of Chicago homes use asphalt shingles. Proven track record 
                  of 20-30 year lifespan with proper installation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Wrench className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Maintenance</h3>
                <p className="text-gray-700">
                  Simple to maintain and repair if needed. Replacement shingles are 
                  readily available and affordable for future touch-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Our Digital-First Asphalt Shingle Installation Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Photos Online</h3>
                    <p className="text-gray-700">Take photos of your roof using our guided app. No need to wait for an inspector.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Instant Estimate</h3>
                    <p className="text-gray-700">Our AI analyzes your roof and provides accurate pricing in minutes, not days.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visualize Your New Roof</h3>
                    <p className="text-gray-700">See exactly how different asphalt shingle colors and styles will look on your home.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Installation Online</h3>
                    <p className="text-gray-700">Choose your preferred dates and confirm your order entirely online. No sales pressure.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Homeowners Love Our Approach</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">No high-pressure sales visits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Transparent, upfront pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">See your roof before you buy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">Licensed & insured professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">25-year warranty included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Shingle Options */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Popular Asphalt Shingle Options in Chicago
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Architectural Shingles</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">Most Popular</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Dimensional, layered look</li>
                  <li>• 25-30 year lifespan</li>
                  <li>• Enhanced curb appeal</li>
                  <li>• Wind resistant to 110 mph</li>
                  <li>• Available in 20+ colors</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/estimate">Get Pricing</Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3-Tab Shingles</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">Budget-Friendly</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Clean, uniform appearance</li>
                  <li>• 20-25 year lifespan</li>
                  <li>• Lightweight design</li>
                  <li>• Cost-effective option</li>
                  <li>• Classic Chicago style</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/estimate">Get Pricing</Link>
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Shingles</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">Premium Choice</div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Slate or wood shake look</li>
                  <li>• 30+ year lifespan</li>
                  <li>• Maximum curb appeal</li>
                  <li>• Superior weather protection</li>
                  <li>• Enhanced warranty</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/estimate">Get Pricing</Link>
                </Button>
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
              Ready for Your New Asphalt Shingle Roof?
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              Join hundreds of Chicago homeowners who've chosen Rooferly for their roof replacement. 
              Get your instant estimate in under 5 minutes.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 min-h-[48px]" asChild>
              <Link href="/estimate">
                Start Your Estimate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
