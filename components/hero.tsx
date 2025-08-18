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
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Roofing Made Simple
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Get a fast, transparent estimate online—then pick a time that actually works for you. 
                No phone tag, no surprises, just quality roofing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
              <Button size="lg" asChild className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto min-h-[48px]">
                <Link href="/estimate" className="flex items-center justify-center space-x-2">
                  <span>Get an Instant Estimate</span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto min-h-[48px]">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm md:text-base text-muted-foreground">4.9/5 Rating</span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Licensed & Insured
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
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
        <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-2 md:p-3">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
