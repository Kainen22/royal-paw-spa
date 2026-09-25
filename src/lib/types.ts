export type SiteContent = {
  heroKicker: string
  heroTitle: string
  heroSubtitle: string
  aboutTitle: string
  aboutBody: string
  contactEmail: string
  contactPhone: string
  serviceArea: string
  hours: string
  paymentIntro: string
  paymentMethods: string
  cancellationPolicy: string
  vaccinationPolicy: string
}

export type ServiceCategory = 'package' | 'addon'

export type Service = {
  id: string
  name: string
  description: string
  price: string
  duration: string
  featured: boolean
  category: ServiceCategory
  includes: string[]
  perfectFor: string[]
}

export type FAQ = {
  id: string
  question: string
  answer: string
  order: number
}

export type Testimonial = {
  id: string
  quote: string
  author: string
  pet?: string
  photo?: string
}

export type PageContent = {
  site: SiteContent
  services: Service[]
  faqs: FAQ[]
  notionConnected: boolean
}
