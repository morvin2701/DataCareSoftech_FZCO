import {
  IcDiamond,
  IcClock,
  IcFileExport,
  IcGlobe,
  IcShield,
  IcUsers,
} from '../components/icons.jsx'

const REASONS = [
  {
    icon: IcDiamond,
    t: 'Jewellery-only, since 2010',
    d: 'We build for one industry. Purity, wastage, ghat, HUID, khata — the vocabulary of your trade is native to the software, not bolted on.',
  },
  {
    icon: IcClock,
    t: '24/7 support that answers',
    d: 'Phone, WhatsApp or remote session — a real person from our Dubai or India team, whenever the counter needs help.',
  },
  {
    icon: IcFileExport,
    t: 'Migration done for you',
    d: 'Your current stock, balances and customer history are moved and verified by our team. You never re-type a ledger.',
  },
  {
    icon: IcUsers,
    t: 'Proven at 6,500+ counters',
    d: 'From single showrooms to multi-warehouse wholesalers, the platform already runs businesses shaped exactly like yours.',
  },
  {
    icon: IcShield,
    t: 'Your data, locked down',
    d: 'Role-based access, activity trails and daily backups keep every gram and every rupee accounted for — and only to the right eyes.',
  },
  {
    icon: IcGlobe,
    t: 'On the ground in UAE & India',
    d: 'Local offices in Dubai Silicon Oasis and Gujarat mean on-site onboarding and support in your timezone and your language.',
  },
]

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">06</span> Why Datacare
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Chosen by jewellers <em>who checked twice.</em>
            </h2>
          </div>
          <p className="lead" data-reveal="up">
            Jewellers are careful buyers — they weigh everything. Here is what tips the
            scale when showrooms in Dubai and India compare our jewellery software with
            everything else on the market.
          </p>
        </div>
        <div className="why-grid" data-reveal-group="tilt">
          {REASONS.map((r) => (
            <div className="why-card" key={r.t}>
              <div className="fcard__icon">
                <r.icon />
              </div>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
