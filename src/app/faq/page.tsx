import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { FAQSection } from '@/components/FAQSection'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about mobile dog grooming: parking, power, vaccines, and more.',
}

export default async function FAQPage() {
  const { site, faqs } = await getPageContent()

  return (
    <PageShell>
      <div className="container page page-narrow">
        <PageHeader
          title="Before I pull up"
          description="Water, parking, vaccines, and whether I do the rainbow ears."
        />
        <FAQSection faqs={faqs} />
      </div>
      <CtaBand phone={site.contactPhone} title="Still have a question?" body="Give us a call. We’re happy to help." />
    </PageShell>
  )
}
