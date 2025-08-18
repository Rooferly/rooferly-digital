"use client"

import { useState, useEffect } from "react"
import { ComingSoonOverlay } from "./coming-soon-overlay"

interface ComingSoonWrapperProps {
  children: React.ReactNode
}

export function ComingSoonWrapper({ children }: ComingSoonWrapperProps) {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    // Show overlay after a short delay when page loads
    const timer = setTimeout(() => {
      // Check if user has already seen the overlay (using localStorage)
      const hasSeenOverlay = localStorage.getItem('rooferly-coming-soon-seen')
      
      if (!hasSeenOverlay) {
        setShowOverlay(true)
      }
    }, 2000) // 2 second delay

    return () => clearTimeout(timer)
  }, [])

  const handleCloseOverlay = () => {
    setShowOverlay(false)
    // Remember that user has seen the overlay
    localStorage.setItem('rooferly-coming-soon-seen', 'true')
  }

  return (
    <>
      {children}
      <ComingSoonOverlay 
        isVisible={showOverlay} 
        onClose={handleCloseOverlay}
      />
    </>
  )
}
