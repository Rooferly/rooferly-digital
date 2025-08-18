import { Shield, Award, CreditCard, Clock } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully bonded with comprehensive liability coverage"
  },
  {
    icon: Award,
    title: "25-Year Warranty",
    description: "Industry-leading warranty on materials and workmanship"
  },
  {
    icon: CreditCard,
    title: "Financing Available",
    description: "Flexible payment options with approved credit"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Emergency repairs within 24 hours"
  }
]

export function BadgeRow() {
  return (
    <section className="py-16 bg-primary/5 border-y">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
