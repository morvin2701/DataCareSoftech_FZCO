import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, reducedMotion } from '../lib/anim.js'
import {
  IcCheck,
  IcPin,
  IcPhone,
  IcClock,
  IcShield,
  IcSpark,
  IcHandshake,
  IcHeart,
  IcUsers,
  IcPen,
  IcGlobe,
  IcDiamond,
} from '../components/icons.jsx'

const VALUES = [
  {
    n: 'I.',
    icon: IcShield,
    t: 'Integrity',
    d: 'Weights, rates and ledgers leave no room for "roughly". Honest software, honest numbers, honest support.',
  },
  {
    n: 'II.',
    icon: IcSpark,
    t: 'Innovation',
    d: 'RFID stock takes, WhatsApp-native workflows, live bullion rates — we ship what the trade needs before it asks.',
  },
  {
    n: 'III.',
    icon: IcHandshake,
    t: 'Collaboration',
    d: 'Every feature began as a conversation with a jeweller. We build with our clients, not just for them.',
  },
  {
    n: 'IV.',
    icon: IcHeart,
    t: 'Passion',
    d: 'Sixteen years in one industry is not an accident. We genuinely love the business of jewellery.',
  },
]

const MILESTONES = [
  {
    y: '2010',
    icon: IcPen,
    t: 'The first ledger goes digital',
    d: 'A small technology team starts building accounting software for jewellers in Gujarat — one shop, one counter, one very patient first client.',
  },
  {
    y: '2012',
    icon: IcUsers,
    t: 'The team grows with the trade',
    d: 'Word travels between showrooms. We expand the team and the product beyond billing into stock, khata and scheme management.',
  },
  {
    y: '2022',
    icon: IcSpark,
    t: 'Recognised for innovation',
    d: 'RFID stock-taking, WhatsApp workflows and the mobile app earn the platform recognition — and thousands of new counters.',
  },
  {
    y: '2023',
    icon: IcGlobe,
    t: 'Datacare goes international',
    d: 'Datacare Softech FZCO opens in Dubai Silicon Oasis, bringing on-ground support to the UAE and the Gulf jewellery trade.',
  },
  {
    y: '2025',
    icon: IcDiamond,
    t: '6,500 clients and counting',
    d: 'The platform now balances the books of jewellery businesses across five-plus countries, from single showrooms to factory floors.',
  },
]

/* origin panel — filled with real substance: year, stat tiles, route strip */
function OriginPanel() {
  return (
    <div className="origin" data-reveal="left">
      <div className="origin__head">
        <div>
          <span className="origin__since">Est.</span>
          <b className="origin__year">2010</b>
        </div>
        <p className="origin__tag">
          Built alongside jewellers,
          <br />
          one counter at a time.
        </p>
      </div>

      <div className="origin__stats">
        <div className="origin-stat">
          <b>
            <span data-counter="15">0</span>
            <i>+</i>
          </b>
          <span>Years in the trade</span>
        </div>
        <div className="origin-stat">
          <b>
            <span data-counter="6500">0</span>
            <i>+</i>
          </b>
          <span>Jewellers served</span>
        </div>
        <div className="origin-stat">
          <b>
            <span data-counter="5">0</span>
            <i>+</i>
          </b>
          <span>Countries reached</span>
        </div>
      </div>

      <div className="origin__route">
        <svg viewBox="0 0 400 64" aria-hidden="true">
          <path
            id="dc-route"
            d="M16 50 C 110 8, 290 8, 384 50"
            fill="none"
            stroke="rgba(138,106,48,.5)"
            strokeWidth="1.4"
            strokeDasharray="1 7"
            strokeLinecap="round"
          />
          <circle cx="16" cy="50" r="4.5" fill="#b08c48" />
          <circle cx="16" cy="50" r="10" fill="none" stroke="rgba(176,140,72,.4)" />
          <circle cx="384" cy="50" r="4.5" fill="#b08c48" />
          <circle cx="384" cy="50" r="10" fill="none" stroke="rgba(176,140,72,.4)" />
          {/* arrow rides the route, nose aligned to the curve */}
          <path
            d="M -6 -3.6 L 6.5 0 L -6 3.6 L -3.2 0 Z"
            fill="#8a6a30"
            transform={reducedMotion() ? 'translate(200 18.5)' : undefined}
          >
            {!reducedMotion() && (
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.45 0 0.55 1"
              >
                <mpath href="#dc-route" />
              </animateMotion>
            )}
          </path>
        </svg>
        <div className="origin__cities">
          <span className="origin__city">
            <IcPin /> Dubai Silicon Oasis, UAE
          </span>
          <span className="origin__city">
            <IcPin /> Ahmedabad, Gujarat, India
          </span>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const tlRef = useRef(null)

  /* gold spine draws with scroll; each node lights up as the line reaches it */
  useEffect(() => {
    const items = tlRef.current.querySelectorAll('.tl2')
    if (reducedMotion()) {
      items.forEach((el) => el.classList.add('is-active'))
      return
    }
    const ctx = gsap.context(() => {
      /* one shared playhead: the line at 62% of the viewport.
         The spine tip is drawn to it, and each node lights the moment
         its dot crosses it — so tip and nodes always meet exactly. */
      const spine = tlRef.current.querySelector('.timeline2')
      gsap.fromTo(
        '.timeline2__progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: '50% 0%',
          scrollTrigger: {
            trigger: spine,
            start: 'top 62%',
            end: 'bottom 62%',
            scrub: true,
          },
        }
      )
      const mobile = window.innerWidth <= 880
      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          // the node sits at the card's centre on desktop, 38px down on mobile
          start: mobile ? 'top+=38 62%' : 'center 62%',
          onEnter: () => item.classList.add('is-active'),
          onLeaveBack: () => item.classList.remove('is-active'),
        })
      })
    }, tlRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="split split--top">
          <OriginPanel />
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">01</span> About Datacare
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20, marginBottom: 24 }}>
              Built in the trade, <em>for the trade.</em>
            </h2>
            <p className="lead" data-reveal="up">
              Datacare Softech began in 2010 as a small team writing software for jewellers we
              knew by name. Sixteen years later, the same platform balances the books of
              6,500+ jewellery businesses across five countries — from single showrooms to
              multi-warehouse wholesale houses — run from our offices in Dubai and India.
            </p>
            <ul className="checklist" data-reveal-group>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Our mission</strong> — give every jeweller technology that streamlines
                  operations, lifts productivity and funds sustainable growth.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Our vision</strong> — become the world's most trusted partner for
                  jewellery digital transformation, and set the standard doing it.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Our promise</strong> — accuracy to the milligram, support around the
                  clock, and software that never makes you wait.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <figure className="about-quote" data-reveal="scale">
          {/* Animated Water / Liquid Flow Background */}
          <div className="about-quote__water-bg" aria-hidden="true">
            <div className="water-wave wave-1" />
            <div className="water-wave wave-2" />
            <div className="water-wave wave-3" />
            <svg className="water-caustics" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waterGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(212, 175, 106, 0.22)" />
                  <stop offset="100%" stopColor="rgba(138, 106, 48, 0.04)" />
                </linearGradient>
                <linearGradient id="waterGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(244, 238, 225, 0.12)" />
                  <stop offset="100%" stopColor="rgba(212, 175, 106, 0.18)" />
                </linearGradient>
              </defs>
              <path
                className="wave-path-1"
                d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,150,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              <path
                className="wave-path-2"
                d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,149.3C672,128,768,128,864,144C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

          <blockquote>
            “A jeweller's ledger is a <em>promise</em> — to customers, to partners, to family.
            Our job is making sure that promise is kept, to the last milligram.”
          </blockquote>
          <figcaption>Founding team — Datacare Softech FZCO</figcaption>
        </figure>

        <div className="values-grid" data-reveal-group="tilt">
          {VALUES.map((v) => (
            <div className="value-card" key={v.n}>
              <div className="value-card__top">
                <span className="fcard__icon"><v.icon /></span>
                <i className="num">{v.n}</i>
              </div>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>

        <div className="offices" data-reveal-group>
          <div className="office-card">
            <div className="office-card__head">
              <span className="cinfo__icon"><IcPin /></span>
              <div>
                <b>Dubai — headquarters</b>
                <small>Datacare Softech FZCO</small>
              </div>
            </div>
            <p>Dubai Silicon Oasis, DDP, Dubai, United Arab Emirates</p>
            <span className="office-card__partner">
              <IcUsers /> 1 founding partner on the ground
            </span>
            <div className="office-card__meta">
              <a href="tel:+971551760454" className="office-card__tel">
                <IcPhone /> +971 55 176 0454
              </a>
              <span className="office-card__hours">
                <IcClock /> Mon – Sat · 10 AM – 7 PM
              </span>
            </div>
          </div>
          <div className="office-card">
            <div className="office-card__head">
              <span className="cinfo__icon"><IcPin /></span>
              <div>
                <b>Ahmedabad — development & support</b>
                <small>Datacare Softech · India</small>
              </div>
            </div>
            <p>Ahmedabad, Gujarat, India</p>
            <span className="office-card__partner">
              <IcUsers /> 2 founding partners on the ground
            </span>
            <div className="office-card__meta">
              <a href="tel:+918758111027" className="office-card__tel">
                <IcPhone /> +91 87581 11027
              </a>
              <a href="tel:+919558602244" className="office-card__tel">
                <IcPhone /> +91 95586 02244
              </a>
              <span className="office-card__hours">
                <IcClock /> Mon – Sat · 10 AM – 7 PM
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(72px, 9vw, 130px)' }} ref={tlRef}>
          <div className="section-head">
            <p className="eyebrow" data-reveal="fade">Our journey</p>
            <h2 className="title-md" data-split>
              Fifteen years, <em>one obsession.</em>
            </h2>
          </div>
          <div className="timeline2">
            <span className="timeline2__line" aria-hidden="true">
              <i className="timeline2__progress" />
            </span>
            {MILESTONES.map((m, i) => (
              <div
                className={`tl2 ${i % 2 ? 'tl2--right' : 'tl2--left'}`}
                data-reveal={i % 2 ? 'right' : 'left'}
                key={m.y}
              >
                <span className="tl2__node" aria-hidden="true">
                  <i />
                </span>
                <span className="tl2__ghost" aria-hidden="true">
                  {m.y}
                </span>
                <article className="tl2__card">
                  <div className="tl2__head">
                    <span className="tl2__ic">
                      <m.icon />
                    </span>
                    <span className="tl2__year">{m.y}</span>
                  </div>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
