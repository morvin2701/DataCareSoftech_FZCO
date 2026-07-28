import HeroVisual from '../components/HeroVisual.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal="fade" data-delay="0.1">
            Jewellery ERP &amp; billing software · Dubai &amp; India
          </p>
          <h1 className="hero__title" data-split>
            Every gram. Every stone. <em>Perfectly accounted.</em>
          </h1>
          <p className="lead hero__lead" data-reveal="up" data-delay="0.35">
            Jewellery software that runs the whole trade — retail counters, wholesale desks,
            manufacturing floors and bullion books. HUID-compliant tagging, RFID stock takes
            and GST/VAT-ready billing, trusted by 6,500+ jewellers across the UAE, India and
            beyond.
          </p>
          <div className="hero__actions" data-reveal="up" data-delay="0.5">
            <a href="#contact" className="btn btn--gold">
              Book a live demo <span className="arr">→</span>
            </a>
            <a href="#products" className="btn btn--ghost">
              Explore the platform
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
