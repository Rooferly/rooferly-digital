import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Analytics tracking helper
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // TODO: Replace with real analytics (Google Analytics, Mixpanel, etc.)
  console.log('Analytics Event:', eventName, properties)
}

// Form validation helpers
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePhone(phone: string): boolean {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return re.test(phone)
}

// Pricing calculations
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

// Lead capture helper
export async function submitLead(leadData: any) {
  // TODO: Replace with real API call to CRM (HubSpot, Zoho, etc.)
  console.log('Lead Submitted:', leadData)
  
  // Simulate API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, id: Math.random().toString(36).substr(2, 9) })
    }, 1000)
  })
}
