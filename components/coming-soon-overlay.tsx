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
    // Always show overlay for pre-launch phase
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000) // Show after 1 second
    return () => clearTimeout(timer)
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
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xqaloonv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'coming-soon-overlay',
          timestamp: new Date().toISOString(),
          message: `Pre-launch signup from ${email}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Track the event for analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'pre_launch_signup', {
            email: email,
            source: 'coming-soon-overlay'
          })
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      setError("Failed to submit. Please try again.")
      console.error("Formspree submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 md:p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-2xl p-4 md:p-8 lg:p-10 border-2 md:border-4 border-yellow-400 overflow-y-auto overlay-scroll">
        {/* Construction Tape Borders */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-4 md:h-8 bg-yellow-400 transform -skew-y-3 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-4 md:h-8 bg-yellow-400 transform -skew-y-3 origin-bottom-right"></div>
        </div>

        {/* Close button removed - permanent overlay until launch */}

        {!isSubmitted ? (
          <div className="relative z-10 pt-4 md:pt-6 pb-4 md:pb-6">
            {/* Rooferly Logo */}
            <div className="flex justify-center mb-4 md:mb-6">
              <img
                src="/logos/LOGO TRANSPARENT DARK.png"
                alt="Rooferly Logo"
                className="h-10 md:h-16 w-auto"
              />
            </div>

            {/* Headline */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                🚧 Coming Soon to Chicagoland
                <span className="block text-orange-600">Revolutionary Roofing</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-lg mx-auto px-2">
                The world's first <strong>"BUY NOW"</strong> roofing platform. 
                Reserve your spot for exclusive early access and special pricing.
              </p>
              
              {/* TODO: Add countdown timer here before launch */}
              {/* <div className="mt-6">
                <CountdownTimer targetDate="2024-XX-XX" />
              </div> */}
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-sm md:text-base text-gray-900">Early Access</div>
                <div className="text-xs md:text-sm text-gray-600">Skip the waitlist</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-sm md:text-base text-gray-900">Exclusive Pricing</div>
                <div className="text-xs md:text-sm text-gray-600">15% off first 20 roofs</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                <Hammer className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-sm md:text-base text-gray-900">First to Market</div>
                <div className="text-xs md:text-sm text-gray-600">Revolutionary experience</div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="text-center mb-3 md:mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  🔥 Lock In Your VIP Spot
                </h3>
                <p className="text-sm md:text-base text-gray-600 px-2">
                  Join <strong>500+</strong> Chicagoland homeowners getting exclusive early access
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-10 md:h-12 text-base md:text-lg border-2 border-gray-300 focus:border-orange-500 min-h-[44px]"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-lg bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all min-h-[44px] whitespace-nowrap"
                >
                  {isLoading ? "Reserving..." : "RESERVE MY SPOT"}
                </Button>
              </div>

              {error && <p className="text-red-500 text-center text-xs md:text-sm">{error}</p>}

              <p className="text-xs text-gray-500 text-center px-2 pb-2">
                🔒 Your email is secure. No spam, just exclusive roofing updates.
              </p>
            </form>
          </div>
        ) : (
          <div className="relative z-10 text-center py-8 md:py-12">
            <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-emerald-500 mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              You're On The VIP List!
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 px-2">
              Check your inbox in the next few minutes for your exclusive welcome package including:
            </p>
            
            <div className="space-y-3 mb-4 md:mb-6">
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-700">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Special early-bird discount code</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-700">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Complete Rooferly company profile</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-700">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Our revolutionary process overview</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-700">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Exclusive pre-launch pricing details</span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 md:p-4">
              <p className="text-orange-800 font-semibold text-sm md:text-base">🎉 Launch Date: Spring 2024</p>
              <p className="text-orange-700 text-xs md:text-sm mt-1">Be the first to experience Chicago's most advanced roofing platform!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}