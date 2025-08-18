import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Good",
    description: "Essential protection for your home",
    price: "$8,500",
    priceRange: "$8,500 - $12,000",
    popular: false,
    features: [
      "25-year architectural shingles",
      "Ice & water shield (valleys)",
      "New drip edge",
      "Ridge vent installation",
      "Basic cleanup",
      "5-year workmanship warranty"
    ]
  },
  {
    name: "Better",
    description: "Enhanced materials and coverage",
    price: "$11,500",
    priceRange: "$11,500 - $16,000",
    popular: true,
    features: [
      "30-year architectural shingles",
      "Full ice & water shield",
      "New drip edge & gutters",
      "Enhanced ridge vent system",
      "Upgraded underlayment",
      "Premium cleanup",
      "10-year workmanship warranty"
    ]
  },
  {
    name: "Best",
    description: "Premium materials and service",
    price: "$15,500",
    priceRange: "$15,500 - $22,000",
    popular: false,
    features: [
      "Lifetime architectural shingles",
      "Full ice & water shield",
      "6-inch seamless gutters",
      "Solar-ready ridge vents",
      "Premium synthetic underlayment",
      "White-glove cleanup",
      "15-year workmanship warranty",
      "Annual roof inspection"
    ]
  }
]

interface PricingTiersProps {
  showAll?: boolean
  className?: string
}

export function PricingTiers({ showAll = false, className }: PricingTiersProps) {
  const displayTiers = showAll ? tiers : tiers

  return (
    <section className={cn("py-16 lg:py-24 bg-background", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Clear, Fixed-Scope Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No surprises, no hidden fees. Choose the package that fits your needs and budget.
            All prices include materials, labor, and cleanup.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {displayTiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={cn(
                "relative transition-all duration-200 hover:shadow-lg",
                tier.popular && "border-primary shadow-md scale-105"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-xs text-muted-foreground mt-1">Range: {tier.priceRange}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className="w-full" 
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link href="/estimate">
                    {tier.popular && <Zap className="h-4 w-4 mr-2" />}
                    Get {tier.name} Estimate
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">Compare All Details</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              See add-ons, financing options, and detailed comparisons
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
