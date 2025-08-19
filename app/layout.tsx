import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ComingSoonWrapper } from '@/components/coming-soon-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Force Vercel rebuild - SEO metadata update
  title: 'Roof Replacement Chicago | Asphalt Shingles | Rooferly',
  description: 'Get instant roof replacement estimates in Chicago. Asphalt shingle specialists. Licensed, insured, transparent pricing. No sales visits required.',
  keywords: 'roof replacement chicago, asphalt shingle roofing chicago, chicago roof replacement, roofing contractors chicago',
  openGraph: {
    title: 'Chicago Roof Replacement | Buy Your Roof Online | Rooferly',
    description: 'Revolutionary online roof replacement in Chicago. See your new asphalt shingle roof before you buy. Licensed, insured, stress-free.',
    type: 'website',
    url: 'https://rooferly.co',
    siteName: 'Rooferly',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Roof Replacement | Rooferly',
    description: 'Buy your roof online in Chicago. Instant estimates, virtual visualization, licensed contractors.',
    site: '@rooferly',
  },
  alternates: {
    canonical: 'https://rooferly.co',
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
      </head>
      <body className={inter.className}>
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