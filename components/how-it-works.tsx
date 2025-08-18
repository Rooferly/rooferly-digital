import { MapPin, Wrench, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    step: "01",
    icon: MapPin,
    title: "Tell us your address",
    description: "Enter your address and basic roof details. Our system will analyze your property and provide instant sizing estimates."
  },
  {
    step: "02", 
    icon: Wrench,
    title: "Customize your roof",
    description: "Choose from our Good, Better, or Best packages. Add options like priority scheduling, upgraded materials, or extended warranty."
  },
  {
    step: "03",
    icon: Calendar,
    title: "Book your slot",
    description: "Pick a time that works for you. Priority customers get earlier slots and dedicated crew assignments."
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get from estimate to installation in three simple steps. No sales visits, 
            no pressure—just clear, digital-first service.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-border">
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="text-center relative">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-bold mb-6">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8 mb-4">
                    <div className="w-0.5 h-8 bg-border"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="/estimate">Start Your Estimate Now</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Takes less than 2 minutes · No phone number required
          </p>
        </div>
      </div>
    </section>
  )
}
