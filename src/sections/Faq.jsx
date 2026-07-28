import { useState } from 'react'
import { company } from '../data/products.js'
import { IcWhatsApp, IcPhone } from '../components/icons.jsx'
import { useInView } from '../lib/useInView.js'

const FAQS = [
  {
    q: 'How long does it take to go live?',
    a: 'Most single-store businesses are live within a few days; multi-branch and manufacturing setups typically take one to two weeks including data migration and staff training. You get a clear day-by-day plan before we start.',
  },
  {
    q: 'Will my existing data move over?',
    a: 'Yes — our team migrates your current stock, customer khata balances, supplier accounts and scheme records, then verifies them with you line by line before go-live. You never start from an empty ledger.',
  },
  {
    q: 'Does it handle multiple stores or warehouses?',
    a: 'Multi-store and multi-warehouse operation is built in: centralised stock control, inter-branch transfers, consolidated reporting and per-location performance, all in real time.',
  },
  {
    q: 'Is there a mobile app for owners?',
    a: 'Yes — the Datacare app for Android and iOS shows live sales, stock in hand, outstanding dues and gold/silver rates, and lets you approve discounts and transfers from anywhere.',
  },
  {
    q: 'Is HUID and tax compliance covered?',
    a: 'Tag-wise HUID tracking, hallmarking records and compliance reports are standard, and invoicing is fully GST/VAT-ready for both India and the UAE.',
  },
  {
    q: 'What support do we get after go-live?',
    a: 'Around-the-clock support by phone, WhatsApp and remote session from our Dubai and India teams, plus regular product updates driven by what jewellers ask for.',
  },
]

const pad = (n) => String(n).padStart(2, '0')

export default function Faq() {
  const [open, setOpen] = useState(0)
  const [listRef, inView] = useInView()

  return (
    <section className="section section--soft faq-sec" id="faq">
      <span className="faq-sec__aura" aria-hidden="true" />

      <div className="container">
        <div className="faq-grid">
          {/* ── sticky aside ─────────────────────────────────── */}
          <aside className="faq-aside">
            <p className="eyebrow" data-reveal="fade">
              <span className="index">07</span> Common questions
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Asked at every demo. <em>Answered here.</em>
            </h2>
            <p className="lead" data-reveal="up" style={{ marginTop: 24 }}>
              Migration, compliance, multi-branch, support — the things every owner weighs
              up before switching. If your question isn't here, ask us directly.
            </p>

            <div className="faq-help" data-reveal="up" data-delay="0.12">
              <span className="faq-help__glow" aria-hidden="true" />
              <p className="faq-help__label">Still deciding?</p>
              <p className="faq-help__text">
                Our Dubai and India teams answer by phone, WhatsApp or remote session —
                around the clock.
              </p>
              <div className="faq-help__actions">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--gold"
                >
                  <IcWhatsApp /> Ask on WhatsApp
                </a>
                <a href={`tel:${company.phoneUAE.replace(/\s/g, '')}`} className="faq-help__tel">
                  <IcPhone />
                  {company.phoneUAE}
                </a>
              </div>
            </div>
          </aside>

          {/* ── accordion ────────────────────────────────────── */}
          <div className={`faq-list ${inView ? 'is-in' : ''}`} ref={listRef}>
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <div
                  className={`faq ${isOpen ? 'is-open' : ''}`}
                  key={f.q}
                  style={{ '--i': i }}
                >
                  <button
                    className="faq__q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <em className="faq__no">{pad(i + 1)}</em>
                    <span className="faq__label">{f.q}</span>
                    <span className="faq__x" aria-hidden="true" />
                  </button>
                  <div className="faq__a">
                    <div className="faq__a-inner">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
