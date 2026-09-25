import type { FAQ, Service, SiteContent, Testimonial } from './types'

export const defaultSiteContent: SiteContent = {
  heroKicker: 'Tanae · Royal Paw Spa · Colorado Springs',
  heroTitle: 'Rainbow ears, double coats, and a purple spa that parks in your driveway',
  heroSubtitle:
    'I’m Tanae — owner, solo groomer, and the person who will actually be in the van with your dog. Eleven years of grooming, five running this business. I do creative color, doodles, double coats, cats, and the nervous ones other salons turn away.',
  aboutTitle: 'Meet Tanae',
  aboutBody: `Hey, friends!

My name is Tanae, and I’m the proud owner and solo groomer behind Royal Paw Spa! I specialize in grooming both cats and dogs, but my love for animals goes far beyond grooming. I’ve loved animals my entire life and today, I’m a proud dog mom to four of my own—and if I had the space, I’d probably have even more!

After experiencing the loss of my uncle and little brother while I was attending grooming academy, their love, encouragement, and passion for life and pets inspired me to stop putting my dreams on hold and build a career I truly love and a life they would be proud of.

I’ve now been grooming for almost 11 years, with nearly 5 years as an independent groomer and business owner. I take pride in being patient, compassionate, detail-oriented, and comfortable working with pets of all breeds, sizes, and personalities—including the nervous and challenging ones! I also LOVE creative grooms because I believe life is better with a little color!

Outside of grooming, I’m a proud mom to my 1-year-old son, who already loves animals just as much as I do. Watching him light up when he sees our pets with a new hairstyle is one of my favorite things.

Thank you for getting to know a little more about me and the heart behind Royal Paw Spa! Follow along for my latest creations, mobile grooming adventures, and all the adorable pets I’m lucky enough to work with. I can’t wait to pamper your fur baby like royalty!`,
  contactEmail: 'hello@royalpawspa.com',
  contactPhone: '(719) 291-4841',
  serviceArea: 'Colorado Springs and nearby neighborhoods. Enter your address when you book to confirm we cover you.',
  hours: 'Daily 6:00 AM – 8:00 PM',
  paymentIntro:
    'Pay securely through Moego when you book, or pay Tanae when the appointment is finished.',
  paymentMethods: 'Credit cards, Apple Pay, and Android Pay.',
  cancellationPolicy:
    'Cancel or reschedule for free up to 24 hours before your appointment. Cancellations within 24 hours, or if we arrive and can’t reach you, are charged 50% of the expected service total.',
  vaccinationPolicy:
    'Current rabies, distemper, and parvovirus vaccinations are required. Please upload your vet records when you book or have them ready at your first appointment.',
}

export const defaultServices: Service[] = [
  {
    id: 'doodle-makeover',
    name: 'Royal Doodle Makeover',
    description:
      'Bath, brush, and a haircut of your choice — the doodle package for curly and fleece coats that mat if you wait too long.',
    price: 'From $130',
    duration: '2–3 hrs',
    featured: true,
    category: 'package',
    includes: ['Bath & brush-out', 'Haircut of your choice', 'Nail trim', 'Ear cleaning'],
    perfectFor: ['Doodles', 'Poodles', 'Curly coats'],
  },
  {
    id: 'pup-cut',
    name: 'Royal Pup-Cut',
    description: 'Full groom for everyone else: bath, brush, the haircut you want, nails, and ears.',
    price: 'From $100',
    duration: '1.5–2.5 hrs',
    featured: true,
    category: 'package',
    includes: ['Bath & brush-out', 'Haircut of your choice', 'Nail trim', 'Ear cleaning'],
    perfectFor: ['Most breeds', 'Style changes', 'Regular 4–6 week cuts'],
  },
  {
    id: 'doodle-treatment',
    name: 'Royal Doodle Treatment',
    description: 'Deep bath and brush for doodles who don’t need a cut this visit.',
    price: 'From $90',
    duration: '1.5–2 hrs',
    featured: false,
    category: 'package',
    includes: ['Thorough bath & brush', 'Nail trim', 'Ear cleaning'],
    perfectFor: ['Between haircuts', 'Heavy undercoat'],
  },
  {
    id: 'pamper',
    name: 'Royal Pamper',
    description: 'Bath and brush with nails and ears — no haircut.',
    price: 'From $80',
    duration: '1–1.5 hrs',
    featured: false,
    category: 'package',
    includes: ['Thorough bath & brush', 'Nail trim', 'Ear cleaning'],
    perfectFor: ['Short coats', 'Between cuts'],
  },
  {
    id: 'cat-cut',
    name: 'Royal Cat Cut',
    description: 'Bath, brush, and a haircut if your kitty allows a blow-out. Nails and ears included.',
    price: 'From $175',
    duration: '1.5–2 hrs',
    featured: false,
    category: 'package',
    includes: ['Bath or waterless option', 'Haircut', 'Nails & ears', 'Blow-out only if the cat allows it'],
    perfectFor: ['Long-haired cats', 'Lion cuts'],
  },
  {
    id: 'cat-bath',
    name: 'Royal Cat',
    description: 'Waterless or water bath, nails, and ears. Blow-out only if your kitty allows it.',
    price: 'From $120',
    duration: '1 hr',
    featured: false,
    category: 'package',
    includes: ['Water or waterless bath', 'Nail trim', 'Ear cleaning'],
    perfectFor: ['Cats who hate the salon'],
  },
  {
    id: 'color',
    name: 'Creative color',
    description: 'Pet-safe color on ears, tails, or a full rainbow — the grooms Tanae is known for.',
    price: 'Ask when you book',
    duration: '',
    featured: false,
    category: 'addon',
    includes: [],
    perfectFor: [],
  },
  {
    id: 'deshed',
    name: 'De-shedding',
    description: 'Extra undercoat work for double-coated dogs.',
    price: 'Ask when you book',
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
      'No. The van is self-contained — fresh water, warm water, and power. I just need a place to park.',
    order: 1,
  },
  {
    id: 'parking',
    question: 'Where do you park?',
    answer:
      'In your driveway or on the street in front of your home. About 30 feet of space. Send HOA or gate codes when you book.',
    order: 2,
  },
  {
    id: 'home',
    question: 'Do I need to be home?',
    answer:
      'Someone needs to hand your pet off and take them back. In between, you’re free to work or run a nearby errand.',
    order: 3,
  },
  {
    id: 'area',
    question: 'Do you come to my neighborhood?',
    answer:
      'I cover Colorado Springs and nearby neighborhoods. Enter your address in the booking flow — if you’re on the edge, call me at (719) 291-4841.',
    order: 4,
  },
  {
    id: 'vaccines',
    question: 'What vaccinations are required?',
    answer: 'Current rabies, distemper, and parvovirus. Upload records when you book.',
    order: 5,
  },
  {
    id: 'color',
    question: 'Do you do colorful creative grooms?',
    answer:
      'Yes — that’s one of my favorite things. Pet-safe color on ears, tails, or a full rainbow. Mention it when you book.',
    order: 6,
  },
]

export const defaultTestimonials: Testimonial[] = [
  {
    id: 'andra',
    quote:
      'We lost our last groomer to Texas and have been very hesitant to find a new one. Folks with double coated pups know what I mean. Could not be happier with the grooming!',
    author: 'Andra',
    photo: '/photos/gallery/01-bowtie-groom.jpg',
  },
  {
    id: 'julie',
    quote:
      'Tanae is absolutely perfect. Our doggie loves her and always comes in with a smile on his face and a wag in his tail.',
    author: 'Julie',
    photo: '/photos/gallery/02-rainbow-poodle.jpg',
  },
  {
    id: 'erin',
    quote:
      'Thank you so much for accommodating us on such short notice. Bailey looks beautiful and she’s so happy to have all that heavy hair off her.',
    author: 'Erin',
    pet: 'Bailey',
    photo: '/photos/gallery/05-grooming.jpg',
  },
]
