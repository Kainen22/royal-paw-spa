import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'
import { routes } from '@/lib/routes'
import { getSiteName } from '@/lib/site'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Booking terms, cancellations, and vaccination requirements for Royal Paw Spa.',
}

export default async function TermsPage() {
  const { site } = await getPageContent()
  const siteName = getSiteName()

  return (
    <PageShell>
      <div className="container page page-narrow">
        <PageHeader
          kicker="Legal"
          title="Terms of Service"
          description="Draft booking terms for mobile grooming with Royal Paw Spa."
        />
        <div className="about-copy">
          <p>
            By using this website or booking a grooming appointment with {siteName}, you agree to these
            draft terms. They summarize our booking, payment, cancellation, and vaccination policies
            and may be updated from time to time.
          </p>
          <p>
            <strong>Services.</strong> We provide mobile dog (and, where offered, cat) grooming in our
            service area: {site.serviceArea}. Hours are typically {site.hours}. Actual availability,
            pricing, and service options are confirmed when you book.
          </p>
          <p>
            <strong>Booking.</strong> Appointments are scheduled through Moego, our online booking
            system, or by contacting us directly. You are responsible for providing accurate contact
            and pet information so we can reach you and prepare for the visit.
          </p>
          <p>
            <strong>Payment.</strong> {site.paymentIntro} Accepted methods: {site.paymentMethods} Card
            payments are processed securely through Moego; this website does not store your card
            numbers. See our{' '}
            <Link href={routes.payment}>Payment & policies</Link> page for a quick overview.
          </p>
          <p>
            <strong>Cancellation & rescheduling.</strong> {site.cancellationPolicy}
          </p>
          <p>
            <strong>Vaccinations.</strong> {site.vaccinationPolicy}
          </p>
          <p>
            <strong>Access & safety.</strong> You agree to provide safe, reasonable access for our
            mobile van (parking and, where needed, power) and to disclose known aggression, medical
            conditions, or other issues that could affect a safe groom. We may decline or stop a
            service if we believe continuing would be unsafe for your pet or our groomer.
          </p>
          <p>
            <strong>Website.</strong> Content on this site is for general information. Service details
            in Moego at the time of booking control over marketing copy if they differ.
          </p>
          <p>
            <strong>Contact.</strong> Questions? Call or text {site.contactPhone}. Related pages:{' '}
            <Link href={routes.faq}>FAQ</Link>, <Link href={routes.privacy}>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
