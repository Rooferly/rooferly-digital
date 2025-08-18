"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Calculator, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function CTAStickyBar() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't show on estimate or schedule pages since user is already in funnel
  const shouldHide = pathname === "/estimate" || pathname === "/schedule"

  if (!isVisible || shouldHide || isMinimized) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              Ready to get started?
            </p>
            <p className="text-xs text-muted-foreground">
              Get your instant estimate in under 2 minutes
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/estimate" className="flex items-center space-x-2">
                <Calculator className="h-4 w-4" />
                <span className="hidden sm:inline">Get Estimate</span>
                <span className="sm:hidden">Estimate</span>
              </Link>
            </Button>
            
            <Button size="sm" asChild>
              <Link href="/schedule" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsMinimized(true)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
