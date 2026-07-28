import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { products, company } from '../data/products.js'
import { IcCheck, IcArrowL, IcArrowR, IcWhatsApp } from '../components/icons.jsx'
import FlipGallery from '../components/FlipGallery.jsx'
import { scroll } from '../lib/scroll.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Products() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const railRef = useRef(null)
  const tabRefs = useRef([])
  const rafRef = useRef(0)

  const [activeIndex, setActiveIndex] = useState(0)
  const [pill, setPill] = useState({ x: 0, w: 0 })

  /* ---------- slider plumbing ---------- */

  /* nearest-panel detection — survives any gap / width / zoom change */
  const readActiveIndex = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children.length) return
    const first = track.children[0]
    const centre = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    Array.from(track.children).forEach((panel, i) => {
      const mid = panel.offsetLeft - first.offsetLeft + panel.offsetWidth / 2
      const dist = Math.abs(mid - centre)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActiveIndex(best)
  }, [])

  const handleScroll = () => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(readActiveIndex)
  }

  /* scrolls only the track — never yanks the page vertically */
  const goTo = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.min(Math.max(index, 0), products.length - 1)
    const first = track.children[0]
    const panel = track.children[clamped]
    if (!panel || !first) return
    track.scrollTo({ left: panel.offsetLeft - first.offsetLeft, behavior: 'smooth' })
    setActiveIndex(clamped)
  }, [])

  const next = () => goTo((activeIndex + 1) % products.length)
  const prev = () => goTo((activeIndex - 1 + products.length) % products.length)

  /* ---------- sliding rail indicator ---------- */

  const measurePill = useCallback(() => {
    const tab = tabRefs.current[activeIndex]
    if (!tab) return
    setPill({ x: tab.offsetLeft, w: tab.offsetWidth })
  }, [activeIndex])

  useLayoutEffect(() => {
    measurePill()
    const rail = railRef.current
    if (rail && rail.scrollWidth > rail.clientWidth) {
      const tab = tabRefs.current[activeIndex]
      if (tab) {
        rail.scrollTo({
          left: tab.offsetLeft - rail.clientWidth / 2 + tab.offsetWidth / 2,
          behavior: 'smooth',
        })
      }
    }
  }, [activeIndex, measurePill])

  useEffect(() => {
    window.addEventListener('resize', measurePill)
    document.fonts?.ready.then(measurePill).catch(() => {})
    return () => window.removeEventListener('resize', measurePill)
  }, [measurePill])

  /* ---------- deep links (#retail, #bullion …) ---------- */

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      const idx = products.findIndex((p) => p.id === hash)
      if (idx === -1) return
      goTo(idx)
      if (sectionRef.current) scroll.to(sectionRef.current)
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => {
      window.removeEventListener('hashchange', handleHash)
      cancelAnimationFrame(rafRef.current)
    }
  }, [goTo])

  /* ---------- keyboard ---------- */

  const onRailKey = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(activeIndex + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(activeIndex - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      goTo(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      goTo(products.length - 1)
    }
  }

  const progress = ((activeIndex + 1) / products.length) * 100

  return (
    <section className="section section--snug prod" id="products" ref={sectionRef}>
      <span className="prod__aura" aria-hidden="true" />

      <div className="container">
        {/* ── header ─────────────────────────────────────────── */}
        <div className="prod-head">
          <div className="prod-head__title">
            <p className="eyebrow" data-reveal="fade">
              <span className="index">03</span> The platform
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              Five editions. <em>One gold standard.</em>
            </h2>
          </div>

          <div className="prod-head__aside" data-reveal="up">
            <p className="lead">
              Whichever side of the trade you sit on — showroom, wholesale desk, factory
              floor, fashion-jewellery volume or the bullion book — there's an edition
              shaped around exactly how you work.
            </p>

            <div className="prod-console">
              <span className="prod-console__count">
                <em key={activeIndex}>{pad(activeIndex + 1)}</em>
                <i>/</i>
                {pad(products.length)}
              </span>

              <span className="prod-console__meter" aria-hidden="true">
                <b style={{ transform: `scaleX(${progress / 100})` }} />
              </span>

              <span className="prod-console__btns">
                <button
                  type="button"
                  className="prod-nav-btn"
                  onClick={prev}
                  disabled={activeIndex === 0}
                  aria-label="Previous edition"
                >
                  <IcArrowL />
                </button>
                <button
                  type="button"
                  className="prod-nav-btn"
                  onClick={next}
                  disabled={activeIndex === products.length - 1}
                  aria-label="Next edition"
                >
                  <IcArrowR />
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* ── edition rail ───────────────────────────────────── */}
        <div
          className="prod-rail"
          ref={railRef}
          onKeyDown={onRailKey}
          role="group"
          aria-label="Choose an edition"
          data-reveal="fade"
        >
          <span
            className="prod-rail__pill"
            aria-hidden="true"
            style={{ transform: `translateX(${pill.x}px)`, width: `${pill.w}px` }}
          />
          {products.map((p, i) => (
            <button
              key={p.no}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              className={`prod-tab ${activeIndex === i ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-current={activeIndex === i}
            >
              <span className="prod-tab__no">{p.no}</span>
              <span className="prod-tab__name">{p.short}</span>
            </button>
          ))}
        </div>

        {/* ── panels ─────────────────────────────────────────── */}
        <div className="prod-stage">
          <div className="prod-track" ref={trackRef} onScroll={handleScroll}>
            {products.map((p, i) => {
              const active = activeIndex === i
              return (
                <article
                  className={`prod-panel ${active ? 'is-active' : ''}`}
                  id={p.id}
                  key={p.no}
                  aria-label={`Edition ${p.no} — ${p.name}`}
                >
                  <span className="prod-panel__grid" aria-hidden="true" />
                  <span className="prod-panel__sheen" aria-hidden="true" />
                  <span className="prod-panel__ghost" aria-hidden="true">
                    {p.no}
                  </span>
                  <i className="prod-panel__corner prod-panel__corner--tl" aria-hidden="true" />

                  <div className="prod-panel__inner">
                    <div className="prod-panel__body">
                      <p className="prod-panel__no" style={{ '--d': '0.02s' }}>
                        Edition {p.no}
                      </p>
                      <h3 style={{ '--d': '0.08s' }}>{p.name}</h3>
                      <p className="prod-panel__tag" style={{ '--d': '0.14s' }}>
                        {p.tag}
                      </p>
                      <p className="prod-panel__desc" style={{ '--d': '0.2s' }}>
                        {p.desc}
                      </p>

                      <div className="prod-caps" style={{ '--d': '0.26s' }}>
                        <p className="prod-caps__label">Inside this edition</p>
                        <ul>
                          {p.feats.map((f, fi) => (
                            <li key={f} style={{ '--d': `${0.3 + fi * 0.045}s` }}>
                              <span className="prod-caps__tick">
                                <IcCheck />
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="prod-panel__actions" style={{ '--d': '0.58s' }}>
                        <a href="#contact" className="btn btn--gold">
                          {p.enquire
                            ? 'Enquire about bullion'
                            : `See ${p.short.toLowerCase()} in a demo`}{' '}
                          <span className="arr">→</span>
                        </a>
                        <a
                          href={company.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn--ghost prod-panel__wa"
                        >
                          <IcWhatsApp /> Ask on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="prod-panel__showcase" style={{ '--d': '0.18s' }}>
                      <span className="prod-panel__halo" aria-hidden="true" />
                      <FlipGallery editionId={p.id} />
                    </div>
                  </div>

                  <div className="prod-panel__spec" style={{ '--d': '0.64s' }}>
                    {p.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
