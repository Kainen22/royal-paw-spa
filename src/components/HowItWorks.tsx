import { Icon, type IconName } from '@/components/Icon'

const steps: Array<{ icon: IconName; title: string; body: string }> = [
  {
    icon: 'calendar',
    title: 'Book online',
    body: 'Pick your service and a time that works. It takes about two minutes, day or night.',
  },
  {
    icon: 'truck',
    title: 'We pull up',
    body: 'Our self-contained van parks at your home. No water or power needed from you.',
  },
  {
    icon: 'heart',
    title: 'Happy pup, back at your door',
    body: 'One groomer, one dog, zero kennel time. We hand them back fresh and calm.',
  },
]

export function HowItWorks() {
  return (
    <section className="section container">
      <div className="section-head">
        <p className="eyebrow">How it works</p>
        <h2>Grooming without leaving home</h2>
      </div>
      <ol className="steps">
        {steps.map((step, index) => (
          <li key={step.title} className="card step">
            <span className="step-icon">
              <Icon name={step.icon} size={22} />
            </span>
            <span className="step-number">Step {index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
