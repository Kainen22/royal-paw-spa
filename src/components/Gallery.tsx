type GalleryProps = {
  photos: string[]
}

const alts = [
  'Finished groom with a bow tie',
  'Poodle with rainbow ears and tail',
  'Indoor rainbow poodle groom',
  'Blow-dry in the van',
  'Grooming a small dog on the table',
  'Tanae in the van doorway',
  'Tanae with shears',
  'Inside the grooming van',
  'Flower wall inside the van',
  'Royal Paw Spa van wrap',
]

export function Gallery({ photos }: GalleryProps) {
  if (photos.length === 0) return null

  return (
    <section className="gallery-band">
      <div className="container split-head">
        <h2>From the van</h2>
        <p className="lead">Color work, table time, and the spa that shows up at your house.</p>
      </div>
      <div className="gallery-editorial container">
        {photos.map((src, index) => (
          <figure key={src} className={index === 0 ? 'is-lead' : undefined}>
            <img src={src} alt={alts[index] ?? 'Royal Paw Spa groom'} loading={index === 0 ? 'eager' : 'lazy'} />
          </figure>
        ))}
      </div>
    </section>
  )
}
