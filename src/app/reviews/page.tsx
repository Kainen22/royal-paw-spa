import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { ReviewBoard } from '@/components/ReviewBoard'
import { ReviewCarousel } from '@/components/ReviewCarousel'
import { getPageContent } from '@/lib/notion'
import {
  allReviews,
  googleRating,
  googleReviews,
  googleReviewsUrl,
  moegoReviewsUrl,
} from '@/lib/reviews'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Google and Moego reviews for Royal Paw Spa mobile dog grooming. Read what pet parents say about Tanae’s care.',
}

export default async function ReviewsPage() {
  const { site } = await getPageContent()

  return (
    <PageShell>
      <div className="container page">
        <PageHeader
          kicker="Reviews"
          title="Google reviews"
          description={`${googleRating.score} stars from ${googleRating.count} Google reviews. Every written Google review we can show is here — swipe through them all, or open Google for the full list.`}
        />
        <p className="review-source-links">
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            Open Google reviews
          </a>
          <a href={moegoReviewsUrl} target="_blank" rel="noopener noreferrer">
            Open Moego reviews
          </a>
        </p>
        <ReviewCarousel reviews={googleReviews} />
        <h2 className="review-all-heading">All Google reviews</h2>
        <ReviewBoard reviews={allReviews} defaultFilter="google" />
      </div>
      <CtaBand
        phone={site.contactPhone}
        title="Ready to book?"
        body="Join the pups who already trust the purple van."
      />
    </PageShell>
  )
}
