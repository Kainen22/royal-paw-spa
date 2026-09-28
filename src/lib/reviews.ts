import type { Testimonial } from './types'

export const googleReviewsUrl =
  'https://www.google.com/maps?cid=1328461908822745393'

export const moegoReviewsUrl = 'https://booking.moego.pet/ol/landing?name=Royalpawspa'

export const googleRating = {
  score: '5.0',
  count: 74,
}

export const defaultTestimonials: Testimonial[] = [
  {
    id: 'google-tanya',
    source: 'google',
    author: 'Tanya Delfin',
    quote:
      'Tanae is amazing! She does an incredible job and my little guy is very comfortable with her which is a huge relief for me. You can see how happy he is with her too!',
  },
  {
    id: 'google-bailey',
    source: 'google',
    author: 'Bailey Lubken',
    quote:
      'Our groomer of 7 years moved states, and we have been through so many groomers since then and have not found the right one until Royal Paw Spa! Our dog was super comfortable with her, she was groomed in a timely matter, and looks great! I highly recommend!',
  },
  {
    id: 'google-alex',
    source: 'google',
    author: 'Alex Fleming',
    quote:
      'Tanae is a phenomenal groomer. She is able to help relax my crazy husky while grooming. He has been going to her ever since he was a puppy and I wouldn’t trust anyone else but Royal Paw and Spa. She is flexible, understanding, and all around an amazing groomer and person!',
  },
  {
    id: 'moego-julie',
    source: 'moego',
    author: 'Julie',
    quote:
      'Tanae is absolutely perfect. Our doggie loves her and always comes in with a smile on his face and a wag in his tail.',
  },
  {
    id: 'moego-andra',
    source: 'moego',
    author: 'Andra',
    quote:
      'We lost our last groomer to Texas and have been very hesitant to find a new one. Folks with double coated pups know what I mean. Could not be happier with the grooming!',
  },
  {
    id: 'moego-erin',
    source: 'moego',
    author: 'Erin',
    quote:
      'Thank you so much for accommodating us on such short notice. Bailey looks beautiful and she’s so happy to have all that heavy hair off her.',
  },
]
