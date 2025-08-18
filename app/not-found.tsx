import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Looks like this page took a detour. Don't worry, our roofing services are still here!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-slate-600 text-slate-700 hover:bg-slate-50">
            <Link href="/estimate">
              Get Your Estimate
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>Need help? Contact us at <a href="mailto:roof@rooferly.co" className="text-orange-600 hover:text-orange-700">roof@rooferly.co</a></p>
        </div>
      </div>
    </div>
  )
}
