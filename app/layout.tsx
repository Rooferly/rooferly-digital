import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ComingSoonWrapper } from '@/components/coming-soon-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RooferLy - Roofing Made Simple',
  description: 'Get fast, transparent roofing estimates online. Professional crews, clear pricing, and easy scheduling.',
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