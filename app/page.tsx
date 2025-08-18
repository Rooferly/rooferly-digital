import Link from "next/link"
import { MapPin, CheckCircle, Palette, Camera, CreditCard, ArrowRight, Star, Shield, Clock, ChevronDown, Ban, Eye, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    step: 1,
    icon: MapPin,
    title: "Enter Your Address",
    description: "Type your address and we'll instantly find your property. Our satellite technology does the measuring for you."
  },
  {
    step: 2,
    icon: CheckCircle,
    title: "Confirm Your Details", 
    description: "Review your roof measurements and property info. Everything's calculated automatically from our aerial view."
  },
  {
    step: 3,
    icon: Palette,
    title: "Pick Your Style",
    description: "Choose from premium shingle colors and styles. See exactly how each option looks on your actual home."
  },
  {
    step: 4,
    icon: Camera,
    title: "Preview Your New Roof",
    description: "Use our 3D visualization to see your new roof before you buy. No surprises, just confidence."
  },
  {
    step: 5,
    icon: CreditCard,
    title: "Buy Now",
    description: "Get instant pricing and schedule installation. Fast, transparent, and stress-free."
  }
]

const trustIndicators = [
  {
    icon: Ban,
    text: "Stress-Free Process",
    subtext: "No pressure sales"
  },
  {
    icon: Eye,
    text: "See What You're Buying", 
    subtext: "Virtual visualization"
  },
  {
    icon: BookOpen,
    text: "Know Before You Buy",
    subtext: "Transparent pricing"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-orange-50 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
                Buy Your Roof Like You Buy Your Coffee
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Simple, fast, and exactly what you ordered. No sales pressure. No surprises. Roofing made simple.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 max-w-lg mx-auto">
                <Button size="lg" className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 h-auto bg-orange-600 hover:bg-orange-700 text-white min-h-[48px]" asChild>
                  <Link href="/estimate">GET INSTANT ESTIMATE</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 h-auto border-2 border-slate-600 text-slate-700 hover:bg-slate-50 min-h-[48px]" asChild>
                  <Link href="/pricing">SEE HOW IT WORKS</Link>
                </Button>
              </div>

              <div className="flex justify-center">
                <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-gray-400 animate-bounce" />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-600 to-orange-500 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div className="font-semibold text-base md:text-lg text-gray-900">{indicator.text}</div>
                    <div className="text-sm md:text-base text-gray-600">{indicator.subtext}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Wherever you need us section (now a transition) */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <p className="text-base md:text-lg text-gray-600 font-medium">Simple, fast, and stress-free</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Point. Click. Roof. Simple.</h2>
            <p className="text-base md:text-lg text-gray-600">Five simple steps to transform your home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.slice(0, 3).map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.step} className="group hover:shadow-xl transition-all duration-300 border-2 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {processSteps.slice(3, 5).map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.step} className="group hover:shadow-xl transition-all duration-300 border-2 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg md:text-xl px-6 md:px-8 py-4 min-h-[48px]" asChild>
              <Link href="/estimate">GET YOUR INSTANT ESTIMATE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Need help now section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <p className="text-base md:text-lg text-gray-600 font-medium">Have questions about your roofing project?</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">We're here to help you succeed</h2>
            <div className="mt-4">
              <a
                href="mailto:roof@rooferly.co"
                className="text-xl md:text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors break-all"
              >
                roof@rooferly.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}