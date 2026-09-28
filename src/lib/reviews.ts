import type { Testimonial } from './types'

export const googleReviewsUrl =
  'https://www.google.com/maps?cid=1328461908822745393'

export const moegoReviewsUrl = 'https://booking.moego.pet/ol/landing?name=Royalpawspa'

export const googleRating = {
  score: '5.0',
  count: 74,
}

export const allReviews: Testimonial[] = [
  {
    id: 'google-tanya-delfin',
    source: 'google',
    author: 'Tanya Delfin',
    quote:
      'Tanae is amazing! She does an incredible job and my little guy is very comfortable with her which is a huge relief for me. You can see how happy he is with her too!',
    photos: [
      '/reviews/tanya-delfin/01.jpg',
      '/reviews/tanya-delfin/02.jpg',
      '/reviews/tanya-delfin/03.jpg',
    ],
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
      'Tanae is a phenomenal groomer. She is able to help relax my crazy husky while grooming. He has been going to her ever since he was a puppy and I wouldn’t trust anyone else but Royal Paw and Spa. She is flexible, understanding, and all around an amazing groomer and person! My dog Oso loves his grooming times with Tanae!',
    photos: [
      '/reviews/alex-fleming/01.jpg',
      '/reviews/alex-fleming/02.jpg',
      '/reviews/alex-fleming/03.jpg',
      '/reviews/alex-fleming/04.jpg',
    ],
  },
  {
    id: 'google-amber',
    source: 'google',
    author: 'Amber Lynette',
    quote:
      'I can’t say enough amazing things about this mobile groomer! They were so gentle and patient with my little Cairn Terrier, and the results are beyond adorable. The faux hawk they gave him is seriously the cutest thing ever.',
    photos: [
      '/reviews/amber-lynette/01.jpg',
      '/reviews/amber-lynette/02.jpg',
      '/reviews/amber-lynette/03.jpg',
      '/reviews/amber-lynette/04.jpg',
    ],
  },
  {
    id: 'google-tanya-berven',
    source: 'google',
    author: 'Tanya Berven',
    quote:
      'Amazing!! My boys are best friends and she grooms them together. They always look and smell so good after. Also the de shedding has helped so much.',
    photos: ['/reviews/tanya-berven/01.jpg', '/reviews/tanya-berven/02.jpg'],
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

export const featuredTestimonials = allReviews.filter((review) =>
  ['google-tanya-delfin', 'google-amber', 'google-alex'].includes(review.id),
)
