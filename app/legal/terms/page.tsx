import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Rooferly',
  description: 'Rooferly terms of service outlining the conditions for using our website and roofing services.',
  robots: { index: false, follow: false }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> December 2024
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h2>Services</h2>
          <p>
            Rooferly provides residential and commercial roofing services including but not limited to:
          </p>
          <ul>
            <li>Roof inspections and estimates</li>
            <li>Roof repairs and replacements</li>
            <li>Emergency roofing services</li>
            <li>Maintenance and consulting</li>
          </ul>

          <h2>Estimates and Pricing</h2>
          <p>
            Online estimates are provided for informational purposes and may vary from final pricing. 
            Final pricing is determined after on-site inspection and confirmed before work begins.
          </p>

          <h3>Estimate Validity</h3>
          <ul>
            <li>Online estimates are valid for 30 days</li>
            <li>Pricing subject to material cost changes</li>
            <li>Additional work may require separate estimates</li>
          </ul>

          <h2>Scheduling and Cancellation</h2>
          <p>
            Service appointments can be scheduled online or by phone. Cancellation policies:
          </p>
          <ul>
            <li>48+ hours notice: No charge</li>
            <li>24-48 hours notice: $100 cancellation fee</li>
            <li>Less than 24 hours: $200 cancellation fee</li>
            <li>Emergency situations: Fees may be waived</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Payment is due according to the terms specified in your service contract. 
            We accept cash, check, and major credit cards.
          </p>

          <h2>Warranties</h2>
          <p>
            All work is backed by our workmanship warranty as specified in your service agreement. 
            Material warranties are provided by manufacturers.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Rooferly's liability is limited to the cost of the services provided. We are not liable 
            for consequential, incidental, or punitive damages.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Illinois. Any disputes will be 
            resolved in the courts of Cook County, Illinois.
          </p>

          <h2>Contact Information</h2>
          <p>
            Questions about these Terms of Service should be directed to:
          </p>
          <p>
            <strong>Email:</strong> legal@rooferly.com<br/>
            <strong>Phone:</strong> (312) 555-ROOF<br/>
            <strong>Address:</strong> 123 Main St, Chicago, IL 60601
          </p>
        </div>
      </div>
    </div>
  )
}
