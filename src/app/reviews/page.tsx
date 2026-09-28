import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { ReviewBoard } from '@/components/ReviewBoard'
import { getPageContent } from '@/lib/notion'
import {
  allReviews,
  googleRating,
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
          title="Google and Moego, in one place"
          description={`${googleRating.score} stars from ${googleRating.count} Google reviews, plus client notes from Moego booking. Filter by channel or read them all.`}
        />
        <p className="review-source-links">
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            Open Google reviews
          </a>
          <a href={moegoReviewsUrl} target="_blank" rel="noopener noreferrer">
            Open Moego reviews
          </a>
        </p>
        <ReviewBoard reviews={allReviews} />
      </div>
      <CtaBand
        phone={site.contactPhone}
        title="Ready to book?"
        body="Join the pups who already trust the purple van."
      />
    </PageShell>
  )
}
