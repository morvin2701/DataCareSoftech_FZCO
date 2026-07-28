import { IcWrench, IcLayers, IcUsers, IcSpark } from '../components/icons.jsx'
import { useInView } from '../lib/useInView.js'

const STEPS = [
  {
    no: '01',
    t: 'Setup & configuration',
    d: 'We shape the platform around your metals, purities, rates, taxes and billing formats — before you touch a key.',
    Icon: IcWrench,
  },
  {
    no: '02',
    t: 'Data migration',
    d: 'Your existing stock, khata balances and customer records move over intact, verified line by line.',
    Icon: IcLayers,
  },
  {
    no: '03',
    t: 'Staff training',
    d: 'Counter staff, accountants and karigars each learn exactly the screens they will use daily.',
    Icon: IcUsers,
  },
  {
    no: '04',
    t: 'Go live, backed 24/7',
    d: 'You open the shutters on the new system with our team a phone call — or a WhatsApp — away.',
    Icon: IcSpark,
  },
]

export function Process() {
  const [trackRef, inView] = useInView()

  return (
    <section className="section proc" id="process">
      <span className="proc__aura" aria-hidden="true" />

      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">05</span> Onboarding
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Live in four steps. <em>Not four months.</em>
            </h2>
          </div>
          <p className="lead" data-reveal="up">
            Switching software mid-season feels risky — so we've made the path boringly
            predictable. Most businesses are fully live within days.
          </p>
        </div>

        <div className={`proc-track ${inView ? 'is-in' : ''}`} ref={trackRef}>
          {STEPS.map((s, i) => (
            <article className="proc-step" key={s.t} style={{ '--i': i }}>
              <span className="proc-step__medal">
                <s.Icon />
                <em>{s.no}</em>
              </span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
