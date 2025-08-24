import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RooferlyGoogleTagManager, { RooferlyGoogleTagManagerBody } from '@/components/rooferly-analytics/GoogleTagManager'
import RooferlyGA4Enhanced from '@/components/analytics/RooferlyGA4Enhanced'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rooferly Analytics - Advanced Roofing Website Intelligence',
  description: 'Professional SEO and website analysis tool specifically designed for the roofing industry. Analyze rooferly.co and competitor sites.',
  keywords: 'roofing SEO, website analysis, roofing contractor analytics, roof replacement SEO, local roofing search',
  authors: [{ name: 'Rooferly Development Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <RooferlyGoogleTagManager />
      </head>
      <body className={inter.className}>
        <RooferlyGoogleTagManagerBody />
        <RooferlyGA4Enhanced />
        {children}
      </body>
    </html>
  )
}