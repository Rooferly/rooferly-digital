import type { Metadata } from 'next'
import { ScheduleGrid } from "@/components/schedule-grid"
import { LeadForm } from "@/components/lead-form"
import { Calendar, Clock, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: 'Schedule Your Roofing Installation - Book Online',
  description: 'Schedule your roofing installation online. Choose from available time slots, add Priority Scheduling, and get your project started.',
  openGraph: {
    title: 'Schedule Your Roofing Installation - Rooferly',
    description: 'Schedule your roofing installation online. Choose from available time slots and get your project started.',
  },
}

const scheduleFeatures = [
  {
    icon: Calendar,
    title: "Real-Time Availability",
    description: "See actual crew availability and pick what works for you"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Morning, afternoon, and weekend slots available"
  },
  {
    icon: Users,
    title: "Crew Assignment", 
    description: "Know which crew will handle your project in advance"
  },
  {
    icon: Shield,
    title: "Weather Protection",
    description: "Automatic rescheduling for severe weather at no charge"
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Schedule Your Installation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose a time that works for you. Our crews are available 6 days a week 
              with flexible morning and afternoon slots.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {scheduleFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="max-w-6xl mx-auto">
            <ScheduleGrid />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need Custom Scheduling?</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Don't see a time that works? We offer custom scheduling options for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Emergency repairs (24/7 availability)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Large commercial projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Multi-property scheduling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">Weekend and evening slots</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold text-primary mb-2">Emergency Service</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Storm damage or emergency repairs? We offer 24/7 emergency service with rapid response teams.
                    </p>
                    <a 
                      href="mailto:roof@rooferly.co?subject=EMERGENCY" 
                      className="text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      Email Emergency: roof@rooferly.co
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <LeadForm
                  title="Request Custom Scheduling"
                  description="Tell us your preferred dates and times, and we'll work with you to find a solution"
                  source="schedule-page"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
