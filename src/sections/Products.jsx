import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products.js'
import { IcCheck } from '../components/icons.jsx'

export default function Products() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    if (!trackRef.current) return
    const container = trackRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = container.firstElementChild ? container.firstElementChild.offsetWidth + 24 : container.offsetWidth
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(index, 0), products.length - 1))
  }

  const scrollToIndex = (index) => {
    if (!trackRef.current) return
    const container = trackRef.current
    const targetCard = container.children[index]
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
      setActiveIndex(index)
    }
  }

  const handleNext = () => {
    if (activeIndex < products.length - 1) {
      scrollToIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1)
    }
  }

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      const idx = products.findIndex((p) => p.id === hash)
      if (idx !== -1) {
        scrollToIndex(idx)
      }
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleCardClick = (e, index) => {
    // Prevent overriding clicks on actual links or buttons inside the card
    if (e.target.closest('a, button')) return
    const nextIndex = (index + 1) % products.length
    scrollToIndex(nextIndex)
  }

  return (
    <section className="section section--snug" id="products">
      <div className="container">
        <div className="section-head section-head--split" style={{ alignItems: 'flex-end', marginBottom: '28px' }}>
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">03</span> The platform
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Five editions. <em>One gold standard.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
            <p className="lead" data-reveal="up" style={{ maxWidth: '540px' }}>
              Whichever side of the trade you sit on — showroom, wholesale desk, factory
              floor, fashion-jewellery volume or the bullion book — there's an edition
              shaped around exactly how you work.
            </p>

            {/* Navigation Arrows & Counter */}
            <div className="prod-slider-controls">
              <span className="prod-slider-counter">
                <strong>0{activeIndex + 1}</strong> / 0{products.length}
              </span>
              <div className="prod-nav-btns">
                <button
                  type="button"
                  className="prod-nav-btn"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  aria-label="Previous edition"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="prod-nav-btn"
                  onClick={handleNext}
                  disabled={activeIndex === products.length - 1}
                  aria-label="Next edition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Edition Quick Tabs */}
        <div className="prod-tabs">
          {products.map((p, i) => (
            <button
              key={p.no}
              type="button"
              className={`prod-tab ${activeIndex === i ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(i)}
            >
              <span className="prod-tab__no">{p.no}</span>
              <span className="prod-tab__name">{p.short}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Banner Slider Track */}
        <div className="prod-slider-container">
          <div
            className="prod-slider-track"
            ref={trackRef}
            onScroll={updateActiveIndex}
          >
            {products.map((p, i) => (
              <article
                className="prod-panel"
                id={p.id}
                key={p.no}
                onClick={(e) => handleCardClick(e, i)}
                title="Tap banner to view next edition"
              >
                <span className="prod-panel__ghost" aria-hidden="true">
                  {p.no}
                </span>
                <div className="prod-panel__inner">
                  <div>
                    <p className="prod-panel__no">Edition {p.no}</p>
                    <h3>{p.name}</h3>
                    <p className="prod-panel__tag">{p.tag}</p>
                    <p className="desc">{p.desc}</p>
                    <a href="#contact" className="btn btn--gold">
                      {p.enquire ? 'Enquire about bullion' : `See ${p.short.toLowerCase()} in a demo`}{' '}
                      <span className="arr">→</span>
                    </a>
                  </div>
                  <div className="prod-panel__feats">
                    <span className="prod-panel__feats-label">What's inside</span>
                    <ul>
                      {p.feats.map((f) => (
                        <li key={f}>
                          <i className="tick">
                            <IcCheck />
                          </i>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="prod-panel__feats-note">
                      Every edition includes billing, stock, khata, schemes and the mobile app.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

