import RooferlyAnalyzerDashboard from '@/components/rooferly-analytics/RooferlyAnalyzerDashboard'
import RooferlyGoogleTagManager, { RooferlyGoogleTagManagerBody } from '@/components/rooferly-analytics/GoogleTagManager'
import RooferlyGoogleAnalytics from '@/components/rooferly-analytics/GoogleAnalytics'

export default function RooferlyAnalyzerPage() {
  return (
    <>
      {/* Google Analytics & Tag Manager for Rooferly */}
      <RooferlyGoogleTagManager />
      <RooferlyGoogleTagManagerBody />
      <RooferlyGoogleAnalytics />
      
      {/* Main Analyzer Dashboard */}
      <RooferlyAnalyzerDashboard defaultUrl="rooferly.co" />
    </>
  )
}
