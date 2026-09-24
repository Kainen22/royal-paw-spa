import { Client } from '@notionhq/client'
import { cache } from 'react'
import { defaultFaqs, defaultServices, defaultSiteContent } from './content'
import type { FAQ, PageContent, Service, SiteContent } from './types'

function getNotionClient() {
  const token = process.env.NOTION_TOKEN
  if (!token) return null
  return new Client({ auth: token })
}

function plainText(richText: Array<{ plain_text: string }> | undefined) {
  return richText?.map((t) => t.plain_text).join('') ?? ''
}

function getPropertyText(properties: Record<string, unknown>, key: string) {
  const prop = properties[key] as
    | { type: string; title?: Array<{ plain_text: string }>; rich_text?: Array<{ plain_text: string }> }
    | undefined

  if (!prop) return ''

  if (prop.type === 'title') return plainText(prop.title)
  if (prop.type === 'rich_text') return plainText(prop.rich_text)
  return ''
}

function getPropertyList(properties: Record<string, unknown>, key: string) {
  return getPropertyText(properties, key)
    .split('\n')
    .map((line) => line.replace(/^[-•*]\s*/, '').trim())
    .filter(Boolean)
}

function getPropertySelect(properties: Record<string, unknown>, key: string) {
  const prop = properties[key] as { type: string; select?: { name: string } | null } | undefined
  if (!prop || prop.type !== 'select') return ''
  return prop.select?.name ?? ''
}

function getPropertyNumber(properties: Record<string, unknown>, key: string) {
  const prop = properties[key] as { type: string; number?: number | null } | undefined
  if (!prop || prop.type !== 'number') return 0
  return prop.number ?? 0
}

function getPropertyCheckbox(properties: Record<string, unknown>, key: string) {
  const prop = properties[key] as { type: string; checkbox?: boolean } | undefined
  if (!prop || prop.type !== 'checkbox') return false
  return prop.checkbox ?? false
}

async function queryDatabase(notion: Client, databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
  })
  return response.results
}

async function fetchSiteContent(notion: Client): Promise<SiteContent | null> {
  const databaseId = process.env.NOTION_SITE_DATABASE_ID
  if (!databaseId) return null

  const pages = await queryDatabase(notion, databaseId)
  const page = pages[0]
  if (!page || !('properties' in page)) return null

  const props = page.properties as Record<string, unknown>
  const text = (key: string, fallback: string) => getPropertyText(props, key) || fallback

  return {
    heroKicker: text('Hero Kicker', defaultSiteContent.heroKicker),
    heroTitle: text('Hero Title', defaultSiteContent.heroTitle),
    heroSubtitle: text('Hero Subtitle', defaultSiteContent.heroSubtitle),
    aboutTitle: text('About Title', defaultSiteContent.aboutTitle),
    aboutBody: text('About Body', defaultSiteContent.aboutBody),
    contactEmail: text('Email', defaultSiteContent.contactEmail),
    contactPhone: text('Phone', defaultSiteContent.contactPhone),
    serviceArea: text('Service Area', defaultSiteContent.serviceArea),
    hours: text('Hours', defaultSiteContent.hours),
    paymentIntro: text('Payment Intro', defaultSiteContent.paymentIntro),
    paymentMethods: text('Payment Methods', defaultSiteContent.paymentMethods),
    cancellationPolicy: text('Cancellation Policy', defaultSiteContent.cancellationPolicy),
    vaccinationPolicy: text('Vaccination Policy', defaultSiteContent.vaccinationPolicy),
  }
}

async function fetchServices(notion: Client): Promise<Service[] | null> {
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID
  if (!databaseId) return null

  const pages = await queryDatabase(notion, databaseId)

  const services = pages
    .filter((page): page is typeof page & { properties: Record<string, unknown> } => 'properties' in page)
    .map((page): Service => ({
      id: page.id,
      name: getPropertyText(page.properties, 'Name'),
      description: getPropertyText(page.properties, 'Description'),
      price: getPropertyText(page.properties, 'Price'),
      duration: getPropertyText(page.properties, 'Duration'),
      featured: getPropertyCheckbox(page.properties, 'Featured'),
      category: getPropertySelect(page.properties, 'Category') === 'Add-on' ? 'addon' : 'package',
      includes: getPropertyList(page.properties, 'Includes'),
      perfectFor: getPropertyList(page.properties, 'Perfect For'),
    }))
    .filter((service) => service.name.length > 0)

  return services.length > 0 ? services : null
}

async function fetchFaqs(notion: Client): Promise<FAQ[] | null> {
  const databaseId = process.env.NOTION_FAQ_DATABASE_ID
  if (!databaseId) return null

  const pages = await queryDatabase(notion, databaseId)

  const faqs = pages
    .filter((page): page is typeof page & { properties: Record<string, unknown> } => 'properties' in page)
    .map((page) => ({
      id: page.id,
      question: getPropertyText(page.properties, 'Question'),
      answer: getPropertyText(page.properties, 'Answer'),
      order: getPropertyNumber(page.properties, 'Order'),
    }))
    .filter((faq) => faq.question.length > 0)
    .sort((a, b) => a.order - b.order)

  return faqs.length > 0 ? faqs : null
}

const fallbackContent: PageContent = {
  site: defaultSiteContent,
  services: defaultServices,
  faqs: defaultFaqs,
  notionConnected: false,
}

export const getPageContent = cache(async (): Promise<PageContent> => {
  const notion = getNotionClient()
  if (!notion) return fallbackContent

  try {
    const [site, services, faqs] = await Promise.all([
      fetchSiteContent(notion),
      fetchServices(notion),
      fetchFaqs(notion),
    ])

    return {
      site: site ?? defaultSiteContent,
      services: services ?? defaultServices,
      faqs: faqs ?? defaultFaqs,
      notionConnected: Boolean(site || services || faqs),
    }
  } catch (error) {
    console.error('Notion fetch failed, using defaults:', error)
    return fallbackContent
  }
})
