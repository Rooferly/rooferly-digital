"use client"

import { useState } from "react"
import { X, Hammer, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ComingSoonOverlayProps {
  isVisible: boolean
  onClose: () => void
}

export function ComingSoonOverlay({ isVisible, onClose }: ComingSoonOverlayProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)
    
    // Simulate API call - replace with actual lead capture
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Construction Tape Border */}
      <div className="relative max-w-2xl mx-4">
        {/* Top Tape */}
        <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 transform -rotate-1 shadow-lg">
          <div className="h-full bg-repeating-stripes opacity-20"></div>
        </div>
        
        {/* Bottom Tape */}
        <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 transform rotate-1 shadow-lg">
          <div className="h-full bg-repeating-stripes opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="relative bg-white rounded-lg shadow-2xl p-8 border-4 border-yellow-400">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                  The world's first <strong>instant roofing platform</strong> is coming to Chicagoland. 
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
                  <div className="text-sm text-gray-600">Founder's discount</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Hammer className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Beta Testing</div>
                  <div className="text-sm text-gray-600">Shape the future</div>
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

                <p className="text-xs text-gray-500 text-center">
                  🔒 Your email is secure. No spam, just exclusive roofing updates.
                </p>
              </form>

              {/* Social Proof */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  ⭐⭐⭐⭐⭐ "Can't wait for this!" - Early beta testers
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                🎉 You're In!
              </h2>
              
              <p className="text-lg text-gray-600 mb-4">
                Welcome to the VIP list! You'll be among the first to experience the future of roofing.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-orange-800 font-medium">
                  📧 Check your email for exclusive updates and your founder's discount code!
                </p>
              </div>

              <Button
                onClick={onClose}
                variant="outline"
                className="border-2 border-gray-300 hover:bg-gray-50"
              >
                Continue Browsing
              </Button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .bg-repeating-stripes {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.1) 10px,
            rgba(0, 0, 0, 0.1) 20px
          );
        }
      `}</style>
    </div>
  )
}
