import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { PageShell } from '@/components/PageShell'
import { getPageContent } from '@/lib/notion'
import { getSiteName } from '@/lib/site'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Royal Paw Spa collects and uses information on this website and through booking.',
}

export default async function PrivacyPage() {
  const { site } = await getPageContent()
  const siteName = getSiteName()

  return (
    <PageShell>
      <div className="container page page-narrow">
        <PageHeader
          kicker="Legal"
          title="Privacy Policy"
          description="Draft policy describing how we handle information on this site and through booking."
        />
        <div className="about-copy">
          <p>
            This Privacy Policy explains how {siteName} (“we”, “us”) handles information when you visit
            our website, contact us, or book a mobile grooming appointment. This is a draft summary for
            our marketing site and may be updated as our practices evolve.
          </p>
          <p>
            <strong>Site contact.</strong> If you call, text, or email us (including {site.contactPhone}
            {site.contactEmail ? ` or ${site.contactEmail}` : ''}), we use the details you share to
            respond to your request, schedule service, and follow up about your pet’s appointment.
          </p>
          <p>
            <strong>Booking & payments (Moego).</strong> Online booking and card payments are handled
            by Moego, our third-party booking and payment provider. When you book or pay through the
            Moego experience embedded on this site (or on Moego’s booking page), Moego collects the
            information needed to schedule and process your appointment—such as your name, contact
            details, pet information, and payment data—under Moego’s own terms and privacy practices.
          </p>
          <p>
            <strong>No card data stored on this site.</strong> {siteName} does not store credit or debit
            card numbers on this website. Payment card data is processed by Moego (and its payment
            processors), not by our marketing site’s own servers.
          </p>
          <p>
            <strong>Vaccine & vet records.</strong> {site.vaccinationPolicy} Records you upload or share
            for booking are used only to confirm vaccination requirements and provide safe grooming
            care. Please do not send unnecessary medical or personal information beyond what booking
            requires.
          </p>
          <p>
            <strong>Technical data.</strong> Like most websites, our hosting provider may automatically
            receive standard request data (such as IP address, browser type, and pages visited) for
            security, reliability, and basic analytics. We do not sell your personal information.
          </p>
          <p>
            <strong>Contact.</strong> Questions about this policy? Call or text {site.contactPhone}
            during {site.hours}. Service area: {site.serviceArea}.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
