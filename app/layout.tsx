import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ComingSoonWrapper } from '@/components/coming-soon-wrapper'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics/GoogleTagManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roof Replacement Chicago | Asphalt Shingles | Rooferly',
  description: 'Get instant roof replacement estimates in Chicago. Asphalt shingle specialists. Licensed, insured, transparent pricing. No sales visits required.',
  keywords: 'roof replacement chicago, asphalt shingle roofing chicago, chicago roof replacement, roofing contractors chicago',
  openGraph: {
    title: 'Roof Replacement Chicago | Rooferly',
    description: 'Digital-first roof replacement with instant estimates and virtual visualization. Serving all of Chicagoland.',
    url: 'https://rooferly.co',
    siteName: 'Rooferly',
    images: [
      {
        url: 'https://rooferly.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rooferly - Chicago Roof Replacement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Chicago | Rooferly',
    description: 'Digital-first roof replacement with instant estimates and virtual visualization.',
    images: ['https://rooferly.co/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        <ComingSoonWrapper>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ComingSoonWrapper>
      </body>
    </html>
  )
}