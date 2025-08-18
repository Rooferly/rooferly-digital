"use client"

import * as React from "react"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const comparisonData = {
  tiers: ["Good", "Better", "Best"],
  categories: [
    {
      name: "Materials",
      features: [
        {
          name: "Shingle Type",
          values: ["25-year architectural", "30-year architectural", "Lifetime architectural"]
        },
        {
          name: "Ice & Water Shield",
          values: ["Valleys only", "Full coverage", "Full coverage"]
        },
        {
          name: "Underlayment",
          values: ["Standard felt", "Synthetic", "Premium synthetic"]
        },
        {
          name: "Drip Edge",
          values: [true, true, true]
        },
        {
          name: "Ridge Vent",
          values: ["Basic", "Enhanced", "Solar-ready"]
        }
      ]
    },
    {
      name: "Installation",
      features: [
        {
          name: "Gutter Replacement",
          values: [false, "5-inch standard", "6-inch seamless"]
        },
        {
          name: "Ventilation Upgrade",
          values: [false, "Standard", "Premium system"]
        },
        {
          name: "Cleanup Level",
          values: ["Basic", "Premium", "White-glove"]
        },
        {
          name: "Project Manager",
          values: [false, true, true]
        }
      ]
    },
    {
      name: "Warranty & Service",
      features: [
        {
          name: "Workmanship Warranty",
          values: ["5 years", "10 years", "15 years"]
        },
        {
          name: "Annual Inspection",
          values: [false, false, true]
        },
        {
          name: "Emergency Service",
          values: ["Standard", "Priority", "VIP"]
        },
        {
          name: "Transferable Warranty",
          values: [false, true, true]
        }
      ]
    }
  ]
}

export function PricingComparison() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Detailed Package Comparison
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly what's included in each package. No hidden fees, no surprises.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="col-span-1"></div>
              {comparisonData.tiers.map((tier, index) => (
                <Card key={tier} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{tier}</CardTitle>
                    {index === 1 && (
                      <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Categories */}
            {comparisonData.categories.map((category) => (
              <div key={category.name} className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.name}
                </h3>
                
                {category.features.map((feature) => (
                  <div key={feature.name} className="grid grid-cols-4 gap-4 py-3 border-b border-border">
                    <div className="font-medium text-muted-foreground">
                      {feature.name}
                    </div>
                    {feature.values.map((value, index) => (
                      <div key={index} className="text-center">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-foreground">{value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="col-span-1"></div>
              {comparisonData.tiers.map((tier, index) => (
                <div key={tier} className="text-center">
                  <Button 
                    className="w-full" 
                    variant={index === 1 ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/estimate">
                      Choose {tier}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
