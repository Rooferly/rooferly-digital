import type { Metadata } from 'next'
import { EstimateForm } from "@/components/estimate-form"
import { LeadForm } from "@/components/lead-form"
import { Clock, Shield, Calculator, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Free Instant Roof Estimate - Get Pricing in Minutes',
  description: 'Get your free roofing estimate online in under 2 minutes. No phone calls required. Transparent pricing for Chicago area homes.',
  openGraph: {
    title: 'Free Instant Roof Estimate - Rooferly',
    description: 'Get your free roofing estimate online in under 2 minutes. No phone calls required.',
  },
}

const benefits = [
  {
    icon: Clock,
    title: "2-Minute Estimate",
    description: "Get real pricing instantly, no waiting for callbacks"
  },
  {
    icon: Calculator,
    title: "Accurate Pricing",
    description: "Satellite-verified measurements and local material costs"
  },
  {
    icon: Shield,
    title: "No Commitment",
    description: "Estimate is free with no obligation to purchase"
  },
  {
    icon: CheckCircle,
    title: "Guaranteed 30 Days",
    description: "Your estimate pricing is locked for 30 days"
  }
]

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4 md:mb-6">
              Get Your Free Instant Estimate
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Answer a few quick questions about your roof and get transparent pricing 
              in under 2 minutes. No phone number required, no sales pressure.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 mb-2 md:mb-3">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xs md:text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Estimate Form */}
          <EstimateForm />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Trust Our Estimates?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Satellite Verification</h4>
                      <p className="text-sm text-muted-foreground">
                        We use high-resolution satellite imagery to verify roof measurements and complexity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Local Market Data</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time material costs and labor rates specific to your area
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Proven Accuracy</h4>
                      <p className="text-sm text-muted-foreground">
                        Over 90% of our estimates are within 5% of final installation cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <LeadForm
                  title="Want a Detailed Quote?"
                  description="Get a comprehensive proposal with material specs, timeline, and warranty details"
                  projectType="replacement"
                  source="estimate-page"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
