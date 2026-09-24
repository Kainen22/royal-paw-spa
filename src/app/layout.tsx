import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { getSiteName } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteName = getSiteName()
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Mobile Dog Grooming`,
    template: `%s | ${siteName}`,
  },
  description:
    'Mobile dog grooming at your door. Baths, haircuts, nail trims, and spa add-ons in a fully equipped van. Book online.',
  metadataBase: new URL(siteUrl),
  icons: { icon: '/favicon.svg' },
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
      <body>{children}</body>
    </html>
  )
}
