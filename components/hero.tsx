import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Clock, Shield } from "lucide-react"

const stats = [
  { label: "5-Star Reviews", value: "500+", icon: Star },
  { label: "Homes Served", value: "2,000+", icon: Users },
  { label: "Avg Response Time", value: "< 2hrs", icon: Clock },
  { label: "Warranty Years", value: "25", icon: Shield },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Roofing Made Simple
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get a fast, transparent estimate online—then pick a time that actually works for you. 
                No phone tag, no surprises, just quality roofing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/estimate" className="flex items-center space-x-2">
                  <span>Get an Instant Estimate</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Licensed & Insured
              </div>
              <div className="text-sm text-muted-foreground">
                25-Year Warranty
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/placeholder-hero-roof.jpg"
                alt="Professional roof installation by Rooferly crew"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-2xl text-sm font-semibold">
                ✓ Licensed & Insured
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
