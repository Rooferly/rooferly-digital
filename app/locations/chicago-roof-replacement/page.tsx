import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, MapPin, Star, Phone, Clock, Home, Snowflake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chicago Roof Replacement Contractors | Licensed & Insured | Rooferly',
  description: 'Professional roof replacement in Chicago, IL. Asphalt shingle specialists serving all Chicago neighborhoods. Get instant estimates online. Licensed, insured, and locally owned.',
  keywords: 'Chicago roof replacement, roofing contractors Chicago, roof installation Chicago, Chicago roofers, asphalt shingle Chicago',
  openGraph: {
    title: 'Chicago Roof Replacement Contractors | Licensed & Insured | Rooferly',
    description: 'Professional roof replacement in Chicago, IL. Asphalt shingle specialists serving all Chicago neighborhoods. Get instant estimates online.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Roof Replacement Contractors | Licensed & Insured | Rooferly',
    description: 'Professional roof replacement in Chicago, IL. Asphalt shingle specialists serving all Chicago neighborhoods.',
  },
}

export default function ChicagoRoofReplacementPage() {
  const neighborhoods = [
    'Lincoln Park', 'Lakeview', 'Wicker Park', 'Bucktown', 'River North',
    'Gold Coast', 'Old Town', 'Logan Square', 'Ukrainian Village', 'West Town',
    'Near North Side', 'Loop', 'South Loop', 'Chinatown', 'Pilsen',
    'Little Village', 'Brighton Park', 'Back of the Yards', 'Bridgeport', 'McKinley Park'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-orange-600" />
              <span className="text-orange-600 font-semibold">Serving Chicago, Illinois</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Chicago's Premier Roof Replacement Specialists
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
              Trusted by Chicago homeowners for over a decade. Get instant estimates for asphalt shingle roof replacement 
              without the sales pressure. Licensed, insured, and built for Chicago weather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                <Link href="/estimate">Get Free Chicago Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                <Link href="tel:312-555-0123">
                  <Phone className="mr-2 h-5 w-5" />
                  (312) 555-0123
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago-Specific Benefits */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Why Chicago Homeowners Choose Rooferly
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Snowflake className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Built for Chicago Weather</h3>
                <p className="text-gray-700">
                  Our asphalt shingles are specifically chosen to withstand Chicago's harsh winters, 
                  heavy snow loads, and temperature extremes from -20°F to 100°F.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Shield className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">City Licensed & Insured</h3>
                <p className="text-gray-700">
                  Fully licensed by the City of Chicago, Cook County bonded, and carrying 
                  $2M in general liability insurance. All permits handled professionally.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Clock className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Sales Visits</h3>
                <p className="text-gray-700">
                  Skip the high-pressure in-home sales pitch. Get accurate pricing and 
                  schedule your roof replacement entirely online - perfect for busy Chicagoans.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Home className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  We understand Chicago's unique roofing challenges: ice dams, wind uplift, 
                  and the importance of proper ventilation in humid summers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Star className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Reviews</h3>
                <p className="text-gray-700">
                  Rated #1 roofing contractor in Chicago on Google, Yelp, and Angie's List. 
                  Over 500 satisfied customers across all neighborhoods.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <CheckCircle className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">25-Year Warranty</h3>
                <p className="text-gray-700">
                  Comprehensive warranty covering materials and workmanship. 
                  We stand behind every roof replacement with industry-leading protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Neighborhoods */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Serving All Chicago Neighborhoods
            </h2>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {neighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="text-center py-2">
                    <span className="text-gray-700 text-sm md:text-base">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Don't see your neighborhood? We serve the entire Chicago metropolitan area, 
                including all 77 official community areas.
              </p>
              <Button variant="outline" asChild>
                <Link href="/estimate">Check If We Serve Your Area</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Weather Challenges */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Chicago's Unique Roofing Challenges
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weather Extremes</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Harsh Winters:</strong> Heavy snow loads up to 25 lbs/sq ft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ice Dams:</strong> Common in Chicago's freeze-thaw cycles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Wind Storms:</strong> Gusts regularly exceed 60 mph</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hail Damage:</strong> Frequent severe thunderstorms</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Chicago Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Enhanced Ice & Water Shield:</strong> Extra protection in vulnerable areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Wind-Resistant Shingles:</strong> Rated for 130+ mph winds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Proper Ventilation:</strong> Prevents ice dams and moisture issues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Impact-Resistant Options:</strong> Class 4 hail protection available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Pricing */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Transparent Chicago Pricing
            </h2>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Chicago Home</h3>
                  <p className="text-gray-600 mb-2">1,800 sq ft</p>
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">$15,500</div>
                  <p className="text-sm text-gray-500">Architectural shingles</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bungalow/Cottage</h3>
                  <p className="text-gray-600 mb-2">1,200 sq ft</p>
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">$11,200</div>
                  <p className="text-sm text-gray-500">3-tab shingles</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Victorian</h3>
                  <p className="text-gray-600 mb-2">2,800 sq ft</p>
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">$24,800</div>
                  <p className="text-sm text-gray-500">Luxury shingles</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Prices include full tear-off, disposal, underlayment, shingles, and standard accessories. 
                  Chicago permit fees included.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/estimate">Get My Exact Chicago Price</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              What Chicago Homeowners Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Finally, a roofing company that doesn't send pushy salespeople to your door! 
                  Got a fair price online and the work was completed perfectly. Our Lincoln Park home 
                  looks amazing."
                </p>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Lincoln Park</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The ice dam protection they installed saved us this winter. Other contractors 
                  quoted 40% more for the same work. Professional crew, clean job site, 
                  great experience."
                </p>
                <div className="font-semibold text-gray-900">Michael R.</div>
                <div className="text-sm text-gray-600">Lakeview</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Loved being able to see exactly how the new shingles would look on our 
                  Bucktown brownstone before committing. The visualization tool was spot-on 
                  and the installation exceeded expectations."
                </p>
                <div className="font-semibold text-gray-900">Jennifer L.</div>
                <div className="text-sm text-gray-600">Bucktown</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Working with insurance was seamless. They handled everything and we only 
                  paid our deductible. The new roof has already survived a Chicago winter 
                  without any issues."
                </p>
                <div className="font-semibold text-gray-900">David K.</div>
                <div className="text-sm text-gray-600">Wicker Park</div>
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
              Ready to Replace Your Chicago Roof?
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              Join hundreds of satisfied Chicago homeowners. Get your instant estimate and 
              see your new roof before you buy - no sales visits required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 min-h-[48px]" asChild>
                <Link href="/estimate">Get Free Chicago Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 min-h-[48px]" asChild>
                <Link href="tel:312-555-0123">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (312) 555-0123
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
