import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Rooferly',
  description: 'Rooferly privacy policy explaining how we collect, use, and protect your personal information.',
  robots: { index: false, follow: false }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> December 2024
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            request an estimate, schedule service, or contact us for support.
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information (email, phone, address)</li>
            <li>Project details and property information</li>
            <li>Payment and billing information</li>
            <li>Communication preferences</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide estimates and schedule roofing services</li>
            <li>Process payments and manage your account</li>
            <li>Communicate with you about your project</li>
            <li>Improve our services and website</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>

          <h3>Service Providers</h3>
          <p>
            We may share your information with trusted service providers who assist us in operating 
            our website, conducting our business, or servicing you.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@rooferly.com<br/>
            <strong>Phone:</strong> (312) 555-ROOF<br/>
            <strong>Address:</strong> 123 Main St, Chicago, IL 60601
          </p>
        </div>
      </div>
    </div>
  )
}
