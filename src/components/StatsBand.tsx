import { businessStats } from '@/lib/stats'

export function StatsBand() {
  return (
    <section className="section container">
      <div className="stats-band">
        <div>
          <p className="eyebrow">The numbers</p>
          <h2>A spa people stay with</h2>
          <p className="stats-copy">
            Four years of one-on-one mobile grooming, 297 clients, and 429 pets through the purple van.
            More than half come back — the average family has been with us 2.4 years.
          </p>
        </div>
        <div className="stats-grid">
          {businessStats.map((stat) => (
            <article key={stat.label} className="card stat-card">
              <p className="stat-value">
                {stat.value}
                {stat.suffix ? <span className="stat-suffix">{stat.suffix}</span> : null}
              </p>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-note">{stat.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
