import type { Metadata, Viewport } from 'next'
import { Fraunces, Source_Sans_3 } from 'next/font/google'
import { getSiteName } from '@/lib/site'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
})

const siteName = getSiteName()
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://royal-paw-spa.vercel.app'

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Mobile grooming in Colorado Springs`,
    template: `%s | ${siteName}`,
  },
  description:
    'Tanae’s mobile grooming van in Colorado Springs. Creative color, doodles, double coats, and cats — one pet at a time, in your driveway.',
  metadataBase: new URL(siteUrl),
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#f6efe3',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
