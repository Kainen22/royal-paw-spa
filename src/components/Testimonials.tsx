import { Icon } from '@/components/Icon'
import type { Testimonial } from '@/lib/types'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section container">
      <div className="section-head">
        <p className="eyebrow">Reviews</p>
        <h2>What pet parents say</h2>
      </div>
      <div className="grid-3">
        {testimonials.map((item) => (
          <figure key={item.id} className="card review">
            <div className="stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={16} filled />
              ))}
            </div>
            <blockquote>{item.quote}</blockquote>
            <figcaption>{item.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
