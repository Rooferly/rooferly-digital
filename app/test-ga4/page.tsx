import RooferlyGA4Enhanced, { RooferlyGA4Events } from '@/components/analytics/RooferlyGA4Enhanced'

export default function TestGA4Page() {
  return (
    <>
      <RooferlyGA4Enhanced />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            GA4 Test Page
          </h1>
          <p className="text-gray-600 mb-6">
            Your GA4 is now properly configured with ID: <br/>
            <code className="bg-gray-100 px-2 py-1 rounded">G-G9CRPQTXKJ</code>
          </p>
          
          <button
            onClick={() => {
              RooferlyGA4Events.trackEstimateRequest('roof_replacement', 'planned')
              alert('Test event sent! Check GA4 Real-time reports.')
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Test GA4 Event
          </button>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Open GA4 Real-time reports and click the button above to test tracking.</p>
          </div>
        </div>
      </div>
    </>
  )
}
