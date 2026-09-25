import type { Testimonial } from '@/lib/types'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [featured, ...rest] = testimonials
  if (!featured) return null

  return (
    <section className="section">
      <div className="container split-head">
        <h2>What people tell me after a visit</h2>
      </div>
      <div className="review-layout container">
        <figure className="review-feature">
          {featured.photo && <img src={featured.photo} alt="" />}
          <blockquote>
            <p>{featured.quote}</p>
            <figcaption>— {featured.author}</figcaption>
          </blockquote>
        </figure>
        <div className="review-stack">
          {rest.map((item) => (
            <blockquote key={item.id} className="review-plain">
              <p>{item.quote}</p>
              <footer>
                — {item.author}
                {item.pet ? `, ${item.pet}’s person` : ''}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
