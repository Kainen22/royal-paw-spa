import type { FAQ, Service, SiteContent, Testimonial } from './types'

export const defaultSiteContent: SiteContent = {
  heroKicker: 'Luxury mobile grooming · We come to you',
  heroTitle: 'Where your pets become royalty',
  heroSubtitle:
    'Our fully equipped purple spa on wheels pulls up to your home, so your pup gets one-on-one care without the car ride, the kennel, or the wait.',
  aboutTitle: 'Meet Tanae',
  aboutBody: `Hey, friends!

My name is Tanae, and I’m the proud owner and solo groomer behind Royal Paw Spa! I specialize in grooming both cats and dogs, but my love for animals goes far beyond grooming. I’ve loved animals my entire life and today, I’m a proud dog mom to four of my own—and if I had the space, I’d probably have even more!

After experiencing the loss of my uncle and little brother while I was attending grooming academy, their love, encouragement, and passion for life and pets inspired me to stop putting my dreams on hold and build a career I truly love and a life they would be proud of.

I’ve now been grooming for almost 11 years, with nearly 5 years as an independent groomer and business owner. I take pride in being patient, compassionate, detail-oriented, and comfortable working with pets of all breeds, sizes, and personalities—including the nervous and challenging ones! I also LOVE creative grooms because I believe life is better with a little color!

Outside of grooming, I’m a proud mom to my 1-year-old son, who already loves animals just as much as I do. Watching him light up when he sees our pets with a new hairstyle is one of my favorite things.

Thank you for getting to know a little more about me and the heart behind Royal Paw Spa! Follow along for my latest creations, mobile grooming adventures, and all the adorable pets I’m lucky enough to work with. I can’t wait to pamper your fur baby like royalty!`,
  contactEmail: 'hello@royalpawspa.com',
  contactPhone: '(719) 291-4841',
  serviceArea: 'Your City and surrounding neighborhoods within 20 miles',
  hours: 'Daily 6:00 AM – 8:00 PM',
  paymentIntro:
    'You can pay securely online when you book through Moego, or pay your groomer when the appointment is finished.',
  paymentMethods: 'Visa, Mastercard, American Express, Discover, Apple Pay, and Google Pay.',
  cancellationPolicy:
    'Cancel or reschedule for free up to 24 hours before your appointment. Cancellations within 24 hours, or if we arrive and can’t reach you, are charged 50% of the expected service total.',
  vaccinationPolicy:
    'Current rabies, distemper, and parvovirus vaccinations are required. Please upload your vet records when you book or have them ready at your first appointment.',
}

export const defaultServices: Service[] = [
  {
    id: 'express',
    name: 'Express Refresh',
    description: 'A quick tidy-up between full grooms for pups who don’t need a bath.',
    price: 'From $45',
    duration: '30–45 min',
    featured: false,
    category: 'package',
    includes: ['Nail trim & grind', 'Ear cleaning', 'Light brush-out', 'Sanitary trim', 'Bandana or bow'],
    perfectFor: ['Between full grooms', 'Puppies & seniors', 'Anxious pups'],
  },
  {
    id: 'bath-brush',
    name: 'Bath & Brush',
    description: 'A full spa bath and blow-out to keep coats clean, fluffy, and shedding less.',
    price: 'From $75',
    duration: '1–1.5 hrs',
    featured: true,
    category: 'package',
    includes: [
      'Warm-water shampoo & conditioner',
      'Blow-dry & brush-out',
      'Nail trim & grind',
      'Ear cleaning',
      'Sanitary trim & paw pad tidy',
    ],
    perfectFor: ['Short coats', 'Heavy shedders', 'Between haircuts'],
  },
  {
    id: 'full-groom',
    name: 'Full Groom',
    description: 'Everything in Bath & Brush, plus a full haircut styled to your dog’s breed and lifestyle.',
    price: 'From $95',
    duration: '1.5–2.5 hrs',
    featured: true,
    category: 'package',
    includes: [
      'Everything in Bath & Brush',
      'Full haircut or breed style',
      'Face, feet & tail shaping',
      'Finishing spritz',
    ],
    perfectFor: ['Doodles & poodles', 'Long or curly coats', 'Seasonal cuts'],
  },
  {
    id: 'puppy',
    name: 'Puppy Intro',
    description: 'A gentle first groom for puppies under 6 months to build good grooming habits early.',
    price: 'From $55',
    duration: '45 min',
    featured: false,
    category: 'package',
    includes: ['Gentle bath & dry', 'Nail trim', 'Face & feet tidy', 'Lots of treats and patience'],
    perfectFor: ['Puppies under 6 months', 'First-time groomers'],
  },
  {
    id: 'teeth',
    name: 'Teeth Brushing',
    description: 'Pet-safe toothpaste for fresher breath.',
    price: '$10',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'deshed',
    name: 'De-Shedding Treatment',
    description: 'Special shampoo and undercoat tools to cut down on shedding.',
    price: 'From $20',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'facial',
    name: 'Blueberry Facial',
    description: 'Tear-free facial that helps brighten the face and reduce tear stains.',
    price: '$10',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'balm',
    name: 'Paw & Nose Balm',
    description: 'Moisturizing balm for dry or cracked paw pads and noses.',
    price: '$10',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'dematting',
    name: 'De-Matting',
    description: 'Gentle work on knots and tangles when it can be done safely.',
    price: '$1 / min',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'flea',
    name: 'Flea & Tick Bath',
    description: 'Medicated shampoo swapped in during the bath.',
    price: '$15',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
]

export const defaultFaqs: FAQ[] = [
  {
    id: 'power',
    question: 'Do you need my water or electricity?',
    answer:
      'No. Our van is fully self-contained with its own fresh water, warm-water tank, and power. We just need a place to park.',
    order: 1,
  },
  {
    id: 'parking',
    question: 'Where do you park?',
    answer:
      'In your driveway or on the street right in front of your home. We need about 30 feet of space. Let us know about any HOA or gate codes when you book.',
    order: 2,
  },
  {
    id: 'home',
    question: 'Do I need to be home?',
    answer:
      'Someone needs to hand off your dog at the start and pick them up at the end. In between, you’re free to work, relax, or run errands nearby.',
    order: 3,
  },
  {
    id: 'area',
    question: 'How do I know if you service my area?',
    answer:
      'Check the service area on our Contact page. If you’re close to the edge, give us a call. We can often make it work.',
    order: 4,
  },
  {
    id: 'vaccines',
    question: 'What vaccinations are required?',
    answer: 'Current rabies, distemper, and parvovirus. You can upload records when you book online.',
    order: 5,
  },
  {
    id: 'often',
    question: 'How often should my dog be groomed?',
    answer:
      'Most dogs do best every 4–8 weeks. Doodles, poodles, and long coats usually need every 4–6 weeks to stay mat-free.',
    order: 6,
  },
]

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Tanae is absolutely perfect. Our doggie loves her and always comes in with a smile on his face and a wag in his tail.',
    author: 'Julie',
  },
  {
    id: '2',
    quote:
      'We lost our last groomer to Texas and have been very hesitant to find a new one. Folks with double coated pups know what I mean. Could not be happier with the grooming!',
    author: 'Andra',
  },
  {
    id: '3',
    quote:
      'Thank you so much for accommodating us on such short notice. Bailey looks beautiful and she’s so happy to have all that heavy hair off her.',
    author: 'Erin',
  },
]
