import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PawCursor } from '@/components/PawCursor'
import { getSiteName } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteName = getSiteName()
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://royal-paw-spa.vercel.app'

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Mobile Dog Grooming`,
    template: `%s | ${siteName}`,
  },
  description:
    'Mobile dog grooming at your door. Baths, haircuts, nail trims, and spa add-ons in a fully equipped van. Book online.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <PawCursor />
        {children}
      </body>
    </html>
  )
}
