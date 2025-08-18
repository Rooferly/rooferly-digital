import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Clock, Shield, Star, Calculator, MapPin, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'Roof Replacement Chicago | Asphalt Shingle Specialists | Rooferly',
  description: 'Complete asphalt shingle roof replacement in Chicago. 100% online process, instant estimates, virtual visualization. No sales visits required. Get started today.',
  openGraph: {
    title: 'Roof Replacement Chicago | Asphalt Shingle Specialists',
    description: 'Complete asphalt shingle roof replacement in Chicago. 100% online process, instant estimates, virtual visualization.',
    url: 'https://rooferly.com/services/roof-replacement',
    siteName: 'Rooferly',
    images: [
      {
        url: '/og-roof-replacement.jpg',
        width: 1200,
        height: 630,
        alt: 'Chicago Roof Replacement - Asphalt Shingle Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Chicago | Asphalt Shingle Specialists',
    description: 'Complete asphalt shingle roof replacement in Chicago. 100% online process, no sales visits required.',
  },
}

const benefits = [
  {
    icon: Calculator,
    title: "Instant Estimates",
    description: "Get accurate pricing in under 2 minutes using satellite technology - no waiting for appointments"
  },
  {
    icon: Zap,
    title: "100% Online Process", 
    description: "Complete your entire roof replacement purchase online - no sales visits or pressure tactics"
  },
  {
    icon: Award,
    title: "Asphalt Shingle Specialists",
    description: "We focus exclusively on premium asphalt shingle installation - our specialty, our expertise"
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Industry-leading warranty coverage on materials and labor - your investment is protected"
  }
]

const process = [
  {
    step: 1,
    title: "Enter Your Address",
    description: "Type your Chicago address and our satellite technology instantly measures your roof dimensions",
    icon: MapPin
  },
  {
    step: 2,
    title: "Choose Your Style",
    description: "Select from premium asphalt shingle colors and styles that complement your home's architecture",
    icon: Zap
  },
  {
    step: 3,
    title: "See Your New Roof",
    description: "Use our virtual visualization to see exactly how your new roof will look before you buy",
    icon: Award
  },
  {
    step: 4,
    title: "Complete Purchase",
    description: "Get instant pricing and schedule installation - all online, no sales appointments needed",
    icon: CheckCircle
  }
]

const features = [
  "Premium architectural asphalt shingles",
  "Satellite-verified measurements", 
  "Virtual roof visualization",
  "Fixed, transparent pricing",
  "Licensed & insured crews",
  "25-year manufacturer warranty",
  "Complete debris removal", 
  "100% online process"
]

export default function RoofReplacementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              Chicago's #1 Digital-First Roof Replacement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Complete <span className="text-orange-600">Asphalt Shingle</span> Roof Replacement
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Get instant estimates, virtual visualization, and complete your roof replacement 
              purchase online. No sales visits, no pressure tactics, no overwhelming choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 min-h-[48px]" asChild>
                <Link href="/estimate" className="flex items-center justify-center space-x-2">
                  <span>Get Instant Estimate</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-600 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4 min-h-[48px]" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why Choose Rooferly for Your Roof Replacement?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We've revolutionized roof replacement by focusing on what matters most: 
                quality installation, transparent pricing, and a stress-free experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Simple 4-Step Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Replace your roof completely online in under 30 minutes. 
                No sales appointments, no pushy tactics, no overwhelming choices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-orange-500 rounded-full mb-4">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4" asChild>
                <Link href="/estimate">Start Your Roof Replacement Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Complete Roof Replacement <span className="text-orange-600">Includes Everything</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our asphalt shingle roof replacement service includes everything you need 
                  for a complete roof transformation. No hidden costs, no surprise add-ons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" variant="outline" className="border-2 border-slate-600 text-slate-700 hover:bg-slate-50" asChild>
                    <Link href="/pricing">See Complete Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <Award className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Premium Asphalt Shingle Installation</p>
                    <p className="text-sm">Professional results, guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your New Asphalt Shingle Roof?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of satisfied Chicago homeowners who chose the modern way to replace their roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4" asChild>
                <Link href="/estimate">Get Your Instant Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800" asChild>
                <Link href="/contact">Have Questions? Contact Us</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>25-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
