import { Calculator, Clock, Users, CreditCard, MessageSquare } from "lucide-react"

const valueProps = [
  {
    icon: Calculator,
    title: "Instant Online Estimates",
    description: "Get a real estimate in minutes, not days. Just enter your address and roof details—no phone tag required."
  },
  {
    icon: Clock,
    title: "Priority Scheduling",
    description: "Need it done fast? Skip the line with Priority Scheduling—reserved crews and earlier start windows."
  },
  {
    icon: Users,
    title: "Licensed Pro Crews",
    description: "All our crews are licensed, insured, and warranty-backed. No subcontractors, just trained professionals."
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Clear packages with real inclusions. No hidden fees, no surprises—just honest pricing upfront."
  },
  {
    icon: MessageSquare,
    title: "Progress Updates",
    description: "Stay in the loop with text and email updates. You'll know exactly what's happening, when."
  }
]

export function ValueProps() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Why Choose Rooferly?
          </h2>
          <p className="text-lg text-muted-foreground">
            We've reimagined roofing for the digital age. Fast estimates, clear communication, 
            and professional service—without the runaround.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => {
            const Icon = prop.icon
            return (
              <div
                key={prop.title}
                className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {prop.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
