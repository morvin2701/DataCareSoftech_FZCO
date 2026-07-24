import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../lib/anim.js'
import {
  IcCheck,
  IcMobile,
  IcWhatsApp,
  IcReceipt,
} from '../components/icons.jsx'

export default function AppShowcase() {
  const visualRef = useRef(null)

  useEffect(() => {
    const root = visualRef.current
    if (reducedMotion()) return

    const ctx = gsap.context(() => {
      const imgFrame = root.querySelector('.showcase-visual-wrapper')
      const badge = root.querySelector('.showcase-badge-floating')

      gsap.fromTo(
        imgFrame,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root, start: 'top 75%', once: true },
        }
      )

      if (badge) {
        gsap.to(badge, {
          y: -6,
          duration: 2.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section section--soft" id="app">
      <div className="container">
        <div className="split" style={{ alignItems: 'center' }}>
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">04</span> Software &amp; Mobile Suite
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20, marginBottom: 24 }}>
              Complete ERP, Reports <em>&amp; Mobile App.</em>
            </h2>
            <p className="lead" data-reveal="up">
              Datacare Softech provides a complete jewellery management suite — desktop ERP for multi-counter billing &amp; inventory, live gold &amp; silver rate boards, GST report summary ledgers, and Jwelly AI mobile app.
            </p>
            <ul className="checklist" data-reveal-group>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Desktop &amp; Mobile Sync</strong> — Sale/Purchase summary ledgers, account statements, and live inventory synced real-time.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Jwelly AI Mobile Ledger</strong> — Voice-enabled AI queries, live gold rate thresholds, and instant customer ledger lookups.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>WhatsApp &amp; GST Invoicing</strong> — One-click WhatsApp invoice sharing, due reminders, and ITC GST summary exports.
                </span>
              </li>
              <li>
                <i className="tick"><IcCheck /></i>
                <span>
                  <strong>Multi-Branch Approvals</strong> — Sanction discounts, rate overrides, and karigar issues directly from your laptop or phone.
                </span>
              </li>
            </ul>

            <div className="app-badges" data-reveal="up" style={{ marginTop: 28, flexWrap: 'wrap', gap: 14 }}>
              <span className="app-badge">
                <IcMobile /> Android &amp; iOS
              </span>
              <span className="app-badge">
                <IcWhatsApp /> WhatsApp-native
              </span>
              <a
                href="/software-images.zip"
                download="software-images.zip"
                className="btn--zip"
                title="Download software images ZIP"
              >
                <span className="zip-icon">↓</span>
                <span>Download Software Images (.ZIP)</span>
              </a>
            </div>
          </div>

          <div className="showcase-wrap" data-reveal="scale" ref={visualRef} style={{ width: '100%' }}>
            <div className="showcase-visual-wrapper">
              <div className="showcase-badge-floating">
                <i className="pulse" /> Live Software Interface
              </div>
              <div className="showcase-img-frame">
                <img
                  src="/software-showcase.png"
                  alt="Datacare Software Interface — Desktop ERP, Mobile App and Customer Reports"
                  className="showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

