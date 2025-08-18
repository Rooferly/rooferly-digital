"use client"

import * as React from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Naperville, IL",
    rating: 5,
    text: "Finally, a roofing company that actually makes sense. Got my estimate online in 5 minutes, scheduled for the next week, and the crew was amazing. No sales pressure, just professional service.",
    service: "Full Roof Replacement"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Schaumburg, IL",
    rating: 5,
    text: "The Priority Scheduling was worth every penny. Had storm damage and needed it fixed fast. Rooferly had a crew out within 3 days while other companies were booking weeks out.",
    service: "Storm Damage Repair"
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    location: "Oak Park, IL",
    rating: 5,
    text: "Love the text updates! I knew exactly when they'd arrive, what they were doing, and when they finished each day. Felt like having a project manager in my pocket.",
    service: "Roof Replacement + Gutters"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Evanston, IL",
    rating: 5,
    text: "As a real estate investor, I need reliable service at fair prices. Rooferly delivers both. I've used them on 4 properties now and the consistency is impressive.",
    service: "Investment Property Roofing"
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    location: "Wheaton, IL",
    rating: 5,
    text: "The financing options made this so much easier. Instead of waiting to save up, we got our roof done now and the payments fit our budget perfectly. Zero hassle.",
    service: "Roof Replacement (Financed)"
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real customers across Chicagoland
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                handleInteraction()
                prevTestimonial()
              }}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleInteraction()
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                handleInteraction()
                nextTestimonial()
              }}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">2,000+</div>
            <div className="text-sm text-muted-foreground">Roofs Completed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
