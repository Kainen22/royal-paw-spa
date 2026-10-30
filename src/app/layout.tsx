import type { Metadata, Viewport } from 'next'
import { Figtree, Syne } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Apartments for challenged credit`,
    template: `%s | ${site.name}`,
  },
  description:
    'Free matching for Denver metro renters with thin credit, no credit, or other qualification barriers — connected to communities willing to consider your application.',
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#152019',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  )
}
