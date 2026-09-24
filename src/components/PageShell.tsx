import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getPageContent } from '@/lib/notion'

type PageShellProps = {
  children: ReactNode
}

export async function PageShell({ children }: PageShellProps) {
  const content = await getPageContent()

  return (
    <>
      <Header phone={content.site.contactPhone} />
      <main className="site-main">{children}</main>
      <Footer site={content.site} notionConnected={content.notionConnected} />
    </>
  )
}
