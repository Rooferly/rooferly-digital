import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Upload, Eye, Calculator, Calendar, Wrench, Shield, Clock, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Rooferly Works | Digital Roof Replacement Process | Chicago',
  description: 'Learn how Rooferly makes roof replacement simple. Upload photos, get instant pricing, visualize your new roof, and book installation online. No sales visits required.',
  keywords: 'roof replacement process, how roof replacement works, digital roofing, online roof estimate, Chicago roof installation',
  openGraph: {
    title: 'How Rooferly Works | Digital Roof Replacement Process | Chicago',
    description: 'Learn how Rooferly makes roof replacement simple. Upload photos, get instant pricing, visualize your new roof, and book installation online.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Rooferly Works | Digital Roof Replacement Process | Chicago',
    description: 'Learn how Rooferly makes roof replacement simple. Upload photos, get instant pricing, visualize your new roof, and book installation online.',
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Roof Replacement Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
              No more waiting for salespeople or dealing with high-pressure tactics. 
              Get accurate pricing, see your new roof, and schedule installation entirely online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                <Link href="/estimate">Start My Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                <Link href="#step1">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-16">
              4 Simple Steps to Your New Roof
            </h2>
            
            {/* Step 1 */}
            <div id="step1" className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">1</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Upload Photos of Your Roof</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Using our guided photo tool, simply take pictures of your roof from your yard. 
                    Our app walks you through exactly what angles we need - no ladder required, 
                    no waiting for an inspector to visit.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Takes 5-10 minutes from your yard</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Works on any smartphone</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Guided instructions for best results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Safe - no climbing on roofs</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white rounded-lg p-8 shadow-lg border">
                    <Upload className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Photo Upload Interface</h4>
                      <p className="text-gray-600 text-sm">User-friendly guided photo capture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="bg-white rounded-lg p-8 shadow-lg border">
                    <Calculator className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h4>
                      <p className="text-gray-600 text-sm">Instant measurements and pricing</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">2</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Get Instant Pricing</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Our AI analyzes your roof photos to calculate exact square footage, measure pitch, 
                    and identify complexity factors. You'll receive accurate pricing for different 
                    shingle options in minutes, not days.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Accurate measurements using AI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Multiple shingle options with pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">All costs included upfront</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">No hidden fees or surprises</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">3</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Visualize Your New Roof</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    See exactly how different asphalt shingle colors and styles will look on your home 
                    before you decide. Our visualization technology shows realistic renderings of 
                    your house with new roofing materials.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Photorealistic renderings</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Try different colors instantly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Compare styles side-by-side</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Share with family for input</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white rounded-lg p-8 shadow-lg border">
                    <Eye className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Roof Visualization</h4>
                      <p className="text-gray-600 text-sm">See your new roof before you buy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="bg-white rounded-lg p-8 shadow-lg border">
                    <Calendar className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Online Scheduling</h4>
                      <p className="text-gray-600 text-sm">Book your installation date</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">4</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Schedule Installation</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Once you're happy with your selection and pricing, book your installation date 
                    online. Choose a time that works for your schedule and complete your purchase 
                    with transparent financing options.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Real-time scheduling calendar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Flexible payment options</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Licensed & insured crews</span>
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
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Professional Installation Day
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 1: Tear-Off</h3>
                <p className="text-gray-700 text-sm">Complete removal of old shingles and inspection of roof deck</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 1-2: Protection</h3>
                <p className="text-gray-700 text-sm">Installation of underlayment and ice & water shield</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 2: Shingles</h3>
                <p className="text-gray-700 text-sm">Professional installation of your chosen asphalt shingles</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 2: Cleanup</h3>
                <p className="text-gray-700 text-sm">Complete cleanup and final inspection with homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Better */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Why Our Digital Process Works Better
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Traditional Roofing Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Wait days or weeks for sales appointment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High-pressure 2-3 hour sales presentation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Inflated prices with fake "today only" discounts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hidden costs revealed during installation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">No way to see how materials will look</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Rooferly's Digital Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Get accurate pricing in minutes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">No sales pressure or manipulation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fair, transparent pricing always</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All costs included upfront, no surprises</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">See exactly how your new roof will look</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "I was dreading the roof replacement process after hearing horror stories from neighbors. 
                Rooferly made it incredibly simple - I got accurate pricing online, saw exactly how the new 
                shingles would look, and scheduled everything without a single sales visit. The installation 
                was professional and exactly as promised."
              </blockquote>
              <div className="font-semibold text-gray-900">Maria Rodriguez</div>
              <div className="text-gray-600">Chicago Homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Experience Roof Replacement Done Right
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              Join hundreds of Chicago homeowners who've chosen the smarter way to replace their roof. 
              Get started with your instant estimate today.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 min-h-[48px]" asChild>
              <Link href="/estimate">
                Start My Roof Estimate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
