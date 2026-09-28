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
      '/reviews/amber-lynette/05.jpg',
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
    id: 'google-kathy',
    source: 'google',
    author: 'Kathy Harvey',
    quote:
      'She is so good with Chloe and she looks so beautiful after she has been groomed! We have been working on her ears and they are looking so much better with her help. I definitely recommend her and appreciate her communication as well as love for our baby.',
    photos: ['/reviews/kathy-harvey/01.jpg'],
  },
  {
    id: 'google-angela',
    source: 'google',
    author: 'Angela Gillings',
    quote:
      'Tanae does such a great job grooming my wiener dogs! She always gives them cute little bows and they are always so happy to see her! Tanae is super professional, talented, and easy to talk to! I wouldn’t recommend anyone else!',
    photos: ['/reviews/angela-gillings/01.jpg'],
  },
  {
    id: 'google-theresa',
    source: 'google',
    author: 'Theresa Sherry',
    quote: 'Royal Paw Spa is very good with my guy who is fearful of grooming and the hairdryer.',
    photos: ['/reviews/theresa-sherry/01.jpg'],
  },
  {
    id: 'google-erin-edwards',
    source: 'google',
    author: 'Erin Edwards',
    quote:
      'GREAT GROOMING EXPERIENCE!! Tanae is super sweet and super professional! The communication back and forth was on point. She’s mobile which is convenient and was on time for our appointment.',
    photos: ['/reviews/erin-edwards/01.jpg'],
  },
  {
    id: 'google-zayy',
    source: 'google',
    author: 'Zayy Simon',
    quote:
      'Tanae was amazing from start to finish — great communication and amazing service. My pup was groomed in a timely manner and I love his upgraded chain she offers! I recommend her to all my friends and family!',
    photos: ['/reviews/zayy-simon/01.jpg'],
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

export const photoReviews = allReviews.filter((review) => (review.photos?.length ?? 0) > 0)
