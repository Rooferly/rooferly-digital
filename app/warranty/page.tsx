import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield, Clock, FileText, Phone, AlertCircle, Award, Umbrella } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Warranty | 25-Year Protection | Rooferly Chicago',
  description: 'Comprehensive 25-year warranty on all roof replacements. Covers materials, workmanship, and storm damage. Licensed & insured with industry-leading protection.',
  keywords: 'roof warranty, roofing warranty Chicago, roof replacement guarantee, workmanship warranty, materials warranty',
  openGraph: {
    title: 'Roof Replacement Warranty | 25-Year Protection | Rooferly Chicago',
    description: 'Comprehensive 25-year warranty on all roof replacements. Covers materials, workmanship, and storm damage.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Warranty | 25-Year Protection | Rooferly Chicago',
    description: 'Comprehensive 25-year warranty on all roof replacements. Covers materials, workmanship, and storm damage.',
  },
}

export default function WarrantyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-orange-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Industry-Leading Roof Warranty Protection
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
              Every Rooferly roof replacement comes with comprehensive warranty coverage. 
              We stand behind our work with 25 years of protection for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                <Link href="/estimate">Get Protected Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]" asChild>
                <Link href="#warranty-details">View Warranty Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Complete Protection for Your Investment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Workmanship Warranty</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">10 Years</div>
                <p className="text-gray-700">Coverage for installation defects and labor issues</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center ring-2 ring-orange-600">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Materials Warranty</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">25 Years</div>
                <p className="text-gray-700">Manufacturer coverage for shingle defects</p>
                <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full mt-2 inline-block">Industry Leading</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border text-center">
                <Umbrella className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Storm Damage</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">Covered</div>
                <p className="text-gray-700">Wind and hail damage protection included</p>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transferable Warranty</h3>
              <p className="text-gray-700">
                Our warranty can be transferred to new homeowners, adding value to your property 
                and providing continued protection for future owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Warranty Coverage */}
      <section id="warranty-details" className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              What's Covered Under Your Warranty
            </h2>
            
            <div className="space-y-8">
              {/* Workmanship Warranty */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-orange-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">10-Year Workmanship Warranty</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We guarantee our installation work for 10 full years. This covers any issues related to 
                  improper installation, labor defects, or workmanship problems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Covered Issues:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Improper shingle installation</li>
                      <li>• Flashing installation defects</li>
                      <li>• Nail placement errors</li>
                      <li>• Ventilation installation issues</li>
                      <li>• Underlayment problems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What We'll Do:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Free repair of affected areas</li>
                      <li>• Replace defective materials at no cost</li>
                      <li>• Complete re-installation if necessary</li>
                      <li>• 24/7 emergency response for leaks</li>
                      <li>• Full documentation of all work</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Materials Warranty */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">25-Year Materials Warranty</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  All asphalt shingles come with manufacturer warranties of up to 25 years. We help you 
                  navigate warranty claims and ensure you get the coverage you deserve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shingle Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Manufacturing defects</li>
                      <li>• Premature granule loss</li>
                      <li>• Cracking or splitting</li>
                      <li>• Color fading (limited coverage)</li>
                      <li>• Blow-off in normal winds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Additional Materials:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Underlayment: 10-15 years</li>
                      <li>• Flashing: 10 years</li>
                      <li>• Vents: 10 years</li>
                      <li>• Ridge caps: 25 years</li>
                      <li>• Gutters: 5-10 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Storm Damage Coverage */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border">
                <div className="flex items-center mb-6">
                  <Umbrella className="h-8 w-8 text-orange-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Storm Damage Protection</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Chicago weather can be unpredictable. Our warranty includes specific protection against 
                  storm-related damage that goes beyond normal wear and tear.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Storm Coverage:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Hail damage assessment</li>
                      <li>• Wind damage up to 130 mph</li>
                      <li>• Ice dam damage</li>
                      <li>• Tree branch impact</li>
                      <li>• Emergency leak repair</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Process:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Free storm damage inspection</li>
                      <li>• Insurance claim assistance</li>
                      <li>• Emergency tarping if needed</li>
                      <li>• Expedited repair scheduling</li>
                      <li>• Quality restoration work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Claims Process */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Simple Warranty Claims Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Contact Us</h3>
                <p className="text-gray-700 text-sm">Call our warranty hotline or submit online claim</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Documentation</h3>
                <p className="text-gray-700 text-sm">We review your warranty and document the issue</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Assessment</h3>
                <p className="text-gray-700 text-sm">Free inspection to determine warranty coverage</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Resolution</h3>
                <p className="text-gray-700 text-sm">Quick repair or replacement at no cost to you</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Response</h3>
              <p className="text-gray-700 mb-4">
                For emergency leaks or storm damage, call our hotline anytime. We'll provide temporary 
                protection and schedule permanent repairs as quickly as possible.
              </p>
              <div className="text-xl font-bold text-blue-600">1-800-ROOFERLY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Exclusions */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Important Warranty Information
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty Exclusions</h3>
                  <p className="text-gray-700 mb-4">
                    To maintain your warranty coverage, please be aware of these exclusions:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• <strong>Normal wear and tear</strong> after the expected lifespan</li>
                    <li>• <strong>Damage from foot traffic</strong> or improper maintenance</li>
                    <li>• <strong>Acts of nature</strong> beyond normal weather (tornadoes, earthquakes)</li>
                    <li>• <strong>Modifications by others</strong> without our approval</li>
                    <li>• <strong>Lack of maintenance</strong> such as clogged gutters</li>
                    <li>• <strong>Building settling</strong> or structural movement</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Maintaining Your Warranty:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Schedule annual roof inspections</li>
                    <li>• Keep gutters clean and properly maintained</li>
                    <li>• Report any issues promptly</li>
                    <li>• Use only approved contractors for any roof work</li>
                    <li>• Maintain proper attic ventilation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Questions About Your Warranty?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our warranty team is here to help. Contact us for clarification on coverage, 
              to file a claim, or for emergency repairs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <Phone className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty Hotline</h3>
                <p className="text-gray-700 mb-3">24/7 emergency response available</p>
                <div className="text-xl font-bold text-orange-600">1-800-ROOFERLY</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border">
                <FileText className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Claims</h3>
                <p className="text-gray-700 mb-4">Submit warranty claims online for non-emergency issues</p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/warranty-claim">File Claim Online</Link>
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
              Get Industry-Leading Warranty Protection
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              Every Rooferly roof replacement includes comprehensive warranty coverage. 
              Protect your investment with our 25-year protection plan.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 min-h-[48px]" asChild>
              <Link href="/estimate">Get Protected Estimate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
