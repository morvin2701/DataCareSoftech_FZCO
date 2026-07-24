import { useEffect, useRef } from 'react'
import {
  IcBarcode,
  IcBox,
  IcUsers,
  IcCart,
  IcHandCoin,
  IcCalendar,
  IcMobile,
  IcWhatsApp,
} from '../components/icons.jsx'

const FEATURES = [
  {
    icon: IcBarcode,
    t: 'Barcode, purchasing & invoicing',
    d: 'Print tags, scan at the counter and raise GST-ready invoices in seconds — purchase to sale on one screen.',
  },
  {
    icon: IcBox,
    t: 'Stock management',
    d: 'Gram-accurate inventory across metals, purities and designs, with live valuation at today’s rate.',
  },
  {
    icon: IcUsers,
    t: 'Customer outstanding',
    d: 'Every khata balanced automatically — dues, advances and metal accounts tracked per customer.',
  },
  {
    icon: IcCart,
    t: 'Order management',
    d: 'Custom orders from advance to delivery, with karigar assignment and promised-date alerts.',
  },
  {
    icon: IcHandCoin,
    t: 'Money lending',
    d: 'Girvi and lending records with interest schedules, pledged-item photos and release workflows.',
  },
  {
    icon: IcCalendar,
    t: 'Scheme management',
    d: 'Gold-savings schemes run on autopilot — instalments, bonuses and maturity payouts handled.',
  },
  {
    icon: IcMobile,
    t: 'Android & iOS app',
    d: 'Your whole business in your pocket — live sales, stock and rates wherever you are.',
  },
  {
    icon: IcWhatsApp,
    t: 'WhatsApp integration',
    d: 'Invoices, dues reminders and scheme receipts sent straight to your customers’ WhatsApp.',
  },
]

export default function Features() {
  const gridRef = useRef(null)

  /* spotlight follows the cursor across each card */
  useEffect(() => {
    const grid = gridRef.current
    const onMove = (e) => {
      const card = e.target.closest('.fcard')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    grid.addEventListener('mousemove', onMove)
    return () => grid.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="section section--snug" id="features">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">02</span> Key features
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Everything the counter needs. <em>Nothing it doesn't.</em>
            </h2>
          </div>
          <p className="lead" data-reveal="up">
            Eight core modules cover the daily rhythm of a jewellery business — billing,
            stock, khata, orders, lending and schemes — reachable from the shop floor,
            the back office or your phone.
          </p>
        </div>

        <div className="cards-grid" data-reveal-group="tilt" ref={gridRef}>
          {FEATURES.map((f, i) => (
            <article className="fcard" key={f.t}>
              <span className="fcard__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="fcard__icon">
                <f.icon />
              </div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
