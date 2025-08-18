import { Clock, Droplets, Wind, Shield, Star, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

const addOns = [
  {
    icon: Clock,
    name: "Priority Scheduling",
    description: "Skip the line with reserved crews and earlier start windows",
    price: 500,
    popular: true,
    features: [
      "Reserved crew allocation",
      "2-3 week earlier start",
      "Dedicated project manager",
      "Priority emergency service"
    ]
  },
  {
    icon: Droplets,
    name: "Gutter Upgrade",
    description: "6-inch seamless gutters with premium downspouts",
    price: 1500,
    popular: false,
    features: [
      "6-inch seamless aluminum",
      "Premium downspouts",
      "Leaf guards included",
      "Color matched to roof"
    ]
  },
  {
    icon: Wind,
    name: "Enhanced Ventilation",
    description: "Solar-powered ventilation system for maximum airflow",
    price: 800,
    popular: false,
    features: [
      "Solar-powered exhaust fans",
      "Ridge vent optimization",
      "Intake vent upgrades",
      "Energy efficiency boost"
    ]
  },
  {
    icon: Shield,
    name: "Ice & Water Shield Plus",
    description: "Extended ice dam protection for harsh winters",
    price: 600,
    popular: false,
    features: [
      "Full roof coverage",
      "Self-sealing membrane", 
      "Extreme weather rated",
      "25-year ice dam warranty"
    ]
  },
  {
    icon: Star,
    name: "Extended Warranty",
    description: "Extend workmanship warranty to 20 years",
    price: 400,
    popular: false,
    features: [
      "20-year workmanship coverage",
      "Transferable to new owner",
      "Annual inspection included",
      "Priority repair service"
    ]
  },
  {
    icon: Wrench,
    name: "Chimney & Flashing",
    description: "Complete chimney rebuild and premium flashing",
    price: 1200,
    popular: false,
    features: [
      "Chimney inspection & repair",
      "Premium step flashing",
      "Chimney crown sealing",
      "Metal cap replacement"
    ]
  }
]

export function AddOnsGrid() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Popular Add-Ons
          </h2>
          <p className="text-lg text-muted-foreground">
            Customize your roofing package with these popular upgrades. 
            Add any time before your installation starts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addOn) => {
            const Icon = addOn.icon
            return (
              <Card 
                key={addOn.name} 
                className={`relative transition-all hover:shadow-lg ${
                  addOn.popular ? 'border-primary shadow-md' : ''
                }`}
              >
                {addOn.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{addOn.name}</CardTitle>
                      <div className="text-2xl font-bold text-primary">
                        +{formatPrice(addOn.price)}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {addOn.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {addOn.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={addOn.popular ? "default" : "outline"} 
                    className="w-full"
                    size="sm"
                  >
                    Add to Estimate
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Add-ons can be included in your financing • No upfront costs required
          </p>
          <Button variant="outline" size="lg">
            View All Options
          </Button>
        </div>
      </div>
    </section>
  )
}
