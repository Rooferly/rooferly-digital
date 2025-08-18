"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar, CheckCircle, Hammer } from "lucide-react"
import { validateEmail, submitLead, trackEvent } from "@/lib/utils"

export function ComingSoonOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const hasSeenOverlay = localStorage.getItem("hasSeenComingSoonOverlay")
    if (!hasSeenOverlay) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // Show after 2 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setIsLoading(true)
    try {
      await submitLead({ email, source: "coming-soon-overlay" })
      setIsSubmitted(true)
      localStorage.setItem("hasSeenComingSoonOverlay", "true")
      trackEvent("coming_soon_signup", { email })
    } catch (err) {
      setError("Failed to submit. Please try again.")
      console.error("Lead submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl p-8 md:p-10 border-4 border-yellow-400 overflow-hidden">
        {/* Construction Tape Borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-8 bg-yellow-400 transform -skew-y-3 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-8 bg-yellow-400 transform -skew-y-3 origin-bottom-right"></div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Rooferly Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/logos/LOGO TRANSPARENT DARK.png"
                alt="Rooferly Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Headline */}
            <div className="text-center mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                🚧 We're Building Something
                <span className="block text-orange-600">Revolutionary</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto">
                The world's first <strong>"BUY NOW"</strong> roofing platform is coming to Chicagoland.
                Be among the first to experience roofing made simple.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Early Access</div>
                <div className="text-sm text-gray-600">Skip the waitlist</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Exclusive Pricing</div>
                <div className="text-sm text-gray-600">15% off first 20 roofs</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Hammer className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">First to Market</div>
                <div className="text-sm text-gray-600">Revolutionary experience</div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  🔥 Lock In Your VIP Spot
                </h3>
                <p className="text-gray-600">
                  Join <strong>500+</strong> Chicagoland homeowners getting exclusive early access
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 border-gray-300 focus:border-orange-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="h-12 px-8 text-lg bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all"
                >
                  {isLoading ? "Reserving..." : "RESERVE MY SPOT"}
                </Button>
              </div>

              {error && <p className="text-red-500 text-center text-sm">{error}</p>}

              <p className="text-xs text-gray-500 text-center">
                🔒 Your email is secure. No spam, just exclusive roofing updates.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <CheckCircle className="h-20 w-20 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              You're On The List!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Thanks for joining the Rooferly revolution. We'll notify you when we launch!
            </p>
            <Button onClick={() => setIsOpen(false)} className="bg-orange-600 hover:bg-orange-700 text-white">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}