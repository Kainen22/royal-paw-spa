type GalleryProps = {
  photos: string[]
}

export function Gallery({ photos }: GalleryProps) {
  if (photos.length === 0) return null

  return (
    <section className="section container">
      <div className="section-head">
        <p className="eyebrow">Fresh from the van</p>
        <h2>Recent grooms</h2>
      </div>
      <div className="gallery-grid">
        {photos.map((src) => (
          <img key={src} src={src} alt="A freshly groomed dog" loading="lazy" className="gallery-photo" />
        ))}
      </div>
    </section>
  )
}
