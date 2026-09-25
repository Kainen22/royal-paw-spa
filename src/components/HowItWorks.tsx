const steps = [
  {
    n: '01',
    title: 'Book the van',
    body: 'Pick a service and a window. Mention color, a doodle coat, or a nervous pet so I can plan the visit.',
  },
  {
    n: '02',
    title: 'I pull into your driveway',
    body: 'The van has its own water and power. You hand your pet to me — no kennel, no other barking dogs.',
  },
  {
    n: '03',
    title: 'One groomer. One pet.',
    body: 'I do the bath, the cut, the color if you asked for it. Then I walk them back to your door.',
  },
]

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container split-head">
        <h2>How a Royal Paw visit works</h2>
        <p className="lead">No drop-off. No waiting room. The salon is the purple van with the jeweled paw on the side.</p>
      </div>
      <ol className="steps-line container">
        {steps.map((step) => (
          <li key={step.n}>
            <span className="step-n">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
