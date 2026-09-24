type PageHeaderProps = {
  kicker?: string
  title: string
  description?: string
}

export function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      {kicker ? <p className="eyebrow">{kicker}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="lead">{description}</p> : null}
    </header>
  )
}
