import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../lib/anim.js'
import {
  IcCheck,
  IcMobile,
  IcWhatsApp,
  IcChart,
  IcBarcode,
  IcUsers,
  IcStore,
  IcReceipt,
} from '../components/icons.jsx'

const fmt = (n, dec = 0) =>
  n.toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec })

export default function AppShowcase() {
  const visualRef = useRef(null)

  /* screen comes alive when scrolled into view: chart draws, numbers count,
     then notifications keep "arriving" on a loop */
  useEffect(() => {
    const root = visualRef.current
    const reduce = reducedMotion()

    const ctx = gsap.context(() => {
      const line = root.querySelector('.app-line')
      const fill = root.querySelector('.app-fill')
      const nums = root.querySelectorAll('[data-anum]')
      const notifs = root.querySelectorAll('.app-notif')

      const render = (el, v) => {
        el.textContent =
          (el.dataset.prefix || '') + fmt(v, +(el.dataset.decimals || 0)) + (el.dataset.suffix || '')
      }

      if (reduce) {
        nums.forEach((el) => render(el, +el.dataset.anum))
        return
      }

      gsap.set(line, { strokeDasharray: 1, strokeDashoffset: 1 })
      gsap.set(fill, { opacity: 0 })
      gsap.set(notifs, { opacity: 0, y: 22, scale: 0.88 })
      nums.forEach((el) => render(el, 0))

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: root, start: 'top 72%', once: true },
      })
      tl.to(line, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' }, 0.2)
        .to(fill, { opacity: 1, duration: 0.7 }, 1.2)
        .to(notifs, { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'back.out(1.7)', stagger: 0.3 }, 0.5)
      nums.forEach((el) => {
        const state = { v: 0 }
        tl.to(
          state,
          { v: +el.dataset.anum, duration: 1.5, ease: 'power2.out', onUpdate: () => render(el, state.v) },
          0.55
        )
      })

      /* notifications keep landing — a gentle nudge every few seconds */
      const loop = gsap.timeline({ repeat: -1, repeatDelay: 3.4, delay: 4 })
      notifs.forEach((n, i) => {
        loop.to(
          n,
          { y: -6, scale: 1.04, duration: 0.32, yoyo: true, repeat: 1, ease: 'power2.out' },
          i * 1.9
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--soft" id="app">
      <div className="container">
        <div className="split">
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">04</span> Mobile app
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20, marginBottom: 24 }}>
              Your whole business, <em>in your pocket.</em>
            </h2>
            <p className="lead" data-reveal="up">
              The Datacare app for Android and iOS keeps owners in command away from the
              counter — live gold and silver rates, the day's sales, stock in hand and
              pending dues, updated the moment they change.
            </p>
            <ul className="checklist" data-reveal-group>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Live dashboard</strong> — sales, stock value and outstanding at a
                  glance, per store or across all branches.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Rate alerts</strong> — set gold and silver thresholds and get
                  notified the moment the market moves.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>WhatsApp sharing</strong> — send invoices, due reminders and scheme
                  receipts to customers without leaving the app.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Approvals on the go</strong> — sanction discounts, rate overrides and
                  stock transfers from anywhere.
                </span>
              </li>
            </ul>
            <div className="app-badges" data-reveal="up">
              <span className="app-badge">
                <IcMobile /> Android &amp; iOS
              </span>
              <span className="app-badge">
                <IcWhatsApp /> WhatsApp-native
              </span>
            </div>
          </div>

          <div className="phone-wrap" data-reveal="scale" ref={visualRef}>
            <div className="phone-glow" aria-hidden="true" />
            <div className="phone-orbit" data-parallax="6" aria-hidden="true" />

            <div className="phone" data-3d-scroll="12">
              <span className="phone__notch" aria-hidden="true" />
              <div className="phone__screen">
                <div className="phone__status" aria-hidden="true">
                  <span>10:04</span>
                  <span className="phone__signal">
                    <i /><i /><i /><i />
                  </span>
                </div>
                <div className="phone__bar">
                  <b>Datacare</b>
                  <span className="phone__live">
                    <i className="pulse" /> Live
                  </span>
                </div>
                <div className="phone__rates">
                  <div className="phone__rate">
                    <span>Gold 24K / 10g</span>
                    <b data-anum="104350" data-prefix="₹ ">₹ 0</b> <i>▲ 0.4%</i>
                  </div>
                  <div className="phone__rate">
                    <span>Silver / kg</span>
                    <b data-anum="118900" data-prefix="₹ ">₹ 0</b> <i>▲ 0.2%</i>
                  </div>
                </div>
                <div className="phone__spark">
                  <svg viewBox="0 0 260 54" preserveAspectRatio="none" aria-hidden="true">
                    <path
                      className="app-fill"
                      d="M0 42 C 22 40, 34 28, 52 30 S 86 44, 104 38 S 138 16, 158 20 S 196 34, 214 26 S 246 8, 260 10 L 260 54 L 0 54 Z"
                      fill="rgba(176,140,72,.12)"
                      stroke="none"
                    />
                    <path
                      className="app-line"
                      d="M0 42 C 22 40, 34 28, 52 30 S 86 44, 104 38 S 138 16, 158 20 S 196 34, 214 26 S 246 8, 260 10"
                      fill="none"
                      stroke="#b08c48"
                      strokeWidth="2"
                      pathLength="1"
                    />
                  </svg>
                </div>
                <div className="phone__row">
                  <span>Today's sales</span>
                  <b data-anum="842600" data-prefix="₹ ">₹ 0</b>
                </div>
                <div className="phone__row">
                  <span>Stock in hand</span>
                  <b data-anum="12.48" data-decimals="2" data-suffix=" kg">0</b>
                </div>
                <div className="phone__row">
                  <span>Dues collected</span>
                  <span className="up" data-anum="110500" data-prefix="▲ ₹ ">▲ ₹ 0</span>
                </div>
                <div className="phone__row">
                  <span>Orders due this week</span>
                  <b data-anum="14">0</b>
                </div>
                <div className="phone__tabs" aria-hidden="true">
                  <span className="phone__tab is-on">
                    <IcChart /> Home
                  </span>
                  <span className="phone__tab">
                    <IcStore /> Stores
                  </span>
                  <span className="phone__tab">
                    <IcBarcode /> Scan
                  </span>
                  <span className="phone__tab">
                    <IcUsers /> Khata
                  </span>
                </div>
              </div>
            </div>

            <div className="app-notif app-notif--wa" aria-hidden="true">
              <span className="app-notif__ic app-notif__ic--wa">
                <IcWhatsApp />
              </span>
              <span>
                <b>Invoice sent on WhatsApp</b>
                <small>INV-2481 · delivered ✓✓</small>
              </span>
            </div>
            <div className="app-notif app-notif--rate" aria-hidden="true">
              <span className="app-notif__ic">
                <IcReceipt />
              </span>
              <span>
                <b>Rate alert</b>
                <small>Gold crossed ₹ 10,435 / g</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
