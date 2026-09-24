import type { FAQ } from '@/lib/types'

type FAQSectionProps = {
  faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.id} className="card faq-item">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
