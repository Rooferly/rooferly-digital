import GA4TestDashboard from '@/components/analytics/GA4TestDashboard'
import RooferlyGA4Enhanced from '@/components/analytics/RooferlyGA4Enhanced'

export default function GA4TestingPage() {
  return (
    <>
      {/* Include GA4 tracking */}
      <RooferlyGA4Enhanced />
      
      {/* Testing dashboard */}
      <div className="min-h-screen bg-gray-50 py-8">
        <GA4TestDashboard />
      </div>
    </>
  )
}

export const metadata = {
  title: 'GA4 Testing Dashboard - Rooferly Analytics',
  description: 'Test Google Analytics 4 event tracking for Rooferly roofing business',
  robots: 'noindex, nofollow' // Don't index the testing page
}
