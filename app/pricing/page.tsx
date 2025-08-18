import type { Metadata } from 'next'
import { PricingTiers } from "@/components/pricing-tiers"
import { PricingComparison } from "@/components/pricing-comparison" 
import { AddOnsGrid } from "@/components/add-ons-grid"
import { FAQ } from "@/components/faq"
import { CTABand } from "@/components/cta-band"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'Pricing - Transparent Roofing Packages',
  description: 'Clear, fixed-scope roofing packages starting at $8,500. Good, Better, Best options with no hidden fees. View add-ons, financing, and detailed comparisons.',
  openGraph: {
    title: 'Rooferly Pricing - Transparent Roofing Packages',
    description: 'Clear, fixed-scope roofing packages starting at $8,500. Good, Better, Best options with no hidden fees.',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No surprises, no hidden fees. Choose from our Good, Better, or Best packages, 
            all with clear inclusions and fixed-scope pricing.
          </p>
          
          {/* Roof Type Selector */}
          <div className="max-w-md mx-auto">
            <Tabs defaultValue="asphalt" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="asphalt">Asphalt</TabsTrigger>
                <TabsTrigger value="metal">Metal</TabsTrigger>
                <TabsTrigger value="flat">Flat Roof</TabsTrigger>
              </TabsList>
              <TabsContent value="asphalt" className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Pricing shown for architectural asphalt shingles on typical suburban home (1,500-2,500 sq ft)
                </p>
              </TabsContent>
              <TabsContent value="metal" className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Metal roofing starts at 40% premium over asphalt. Premium materials with 50+ year lifespan.
                </p>
              </TabsContent>
              <TabsContent value="flat" className="mt-8">
                <p className="text-sm text-muted-foreground">
                  TPO and EPDM flat roofing systems. Commercial-grade materials for residential applications.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <PricingTiers showAll={true} />

      {/* Add-ons */}
      <AddOnsGrid />

      {/* Detailed Comparison */}
      <PricingComparison />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTABand />
    </div>
  )
}
