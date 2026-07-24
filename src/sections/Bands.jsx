import { useRef, useState } from 'react'
import { gsap } from '../lib/anim.js'
import { IcArrowL, IcArrowR } from '../components/icons.jsx'

const STEPS = [
  {
    t: 'Setup & configuration',
    d: 'We shape the platform around your metals, purities, rates, taxes and billing formats — before you touch a key.',
  },
  {
    t: 'Data migration',
    d: 'Your existing stock, khata balances and customer records move over intact, verified line by line.',
  },
  {
    t: 'Staff training',
    d: 'Counter staff, accountants and karigars each learn exactly the screens they will use daily.',
  },
  {
    t: 'Go live, backed 24/7',
    d: 'You open the shutters on the new system with our team a phone call — or a WhatsApp — away.',
  },
]

export function Process() {
  return (
    <section className="section" id="process">
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
        <div className="steps" data-reveal-group="tilt">
          {STEPS.map((s) => (
            <div className="step" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* NOTE: replace these with real client quotes when available —
   attributions are kept role-based on purpose. */
const QUOTES = [
  {
    q: 'The day-end tally used to take us an hour with two people. Now it is a printout — every gram reconciled before the lights go off.',
    who: 'Owner, retail jewellery house',
    where: 'Dubai, UAE',
  },
  {
    q: 'We run three warehouses and two hundred B2B accounts on it. Rate changes, tiered pricing, credit limits — nothing slips through anymore.',
    who: 'Director, wholesale jewellers',
    where: 'Ahmedabad, India',
  },
  {
    q: 'Loss tracking on the factory floor paid for the software in the first quarter. We finally know where every milligram goes.',
    who: 'Production head, manufacturing unit',
    where: 'Mumbai, India',
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const boxRef = useRef(null)

  const go = (dir) => {
    const box = boxRef.current
    gsap.to(box, {
      opacity: 0,
      y: 14,
      duration: 0.28,
      ease: 'power2.in',
      onComplete: () => {
        setIdx((i) => (i + dir + QUOTES.length) % QUOTES.length)
        gsap.fromTo(box, { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
      },
    })
  }

  const t = QUOTES[idx]

  return (
    <section className="section testi-band" id="testimonials">
      <div className="container">
        <p className="eyebrow" data-reveal="fade">
          <span className="index">07</span> What clients say
        </p>
        <div ref={boxRef} className="testi" style={{ marginTop: 34 }} data-reveal="up">
          <blockquote className="testi__quote">
            “{t.q}”
          </blockquote>
          <div className="testi__who">
            <span className="testi__avatar">”</span>
            <div>
              <b>{t.who}</b>
              <span>{t.where}</span>
            </div>
          </div>
        </div>
        <div className="testi__nav" data-reveal="fade">
          <button className="testi__btn" onClick={() => go(-1)} aria-label="Previous testimonial">
            <IcArrowL />
          </button>
          <button className="testi__btn" onClick={() => go(1)} aria-label="Next testimonial">
            <IcArrowR />
          </button>
          <span className="testi__count">
            {String(idx + 1).padStart(2, '0')} / {String(QUOTES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
