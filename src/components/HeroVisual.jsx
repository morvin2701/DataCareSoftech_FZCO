import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../lib/anim.js'
import { IcReceipt, IcChart, IcRfid, IcCheck, IcDiamond, IcCart } from './icons.jsx'

/* drifting gold-dust ambience, plain 2D canvas */
function Dust() {
  const ref = useRef(null)

  useEffect(() => {
    if (reducedMotion()) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const N = 26
    const dots = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 0.8,
      p: Math.random() * Math.PI * 2,
      tw: 0.3 + Math.random() * 0.8,
    }))

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let visible = true
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(canvas)

    let t = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) return
      t += 0.016
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        const y = d.y + Math.sin(t * 0.18 + d.p) * 0.006
        const a = 0.07 + 0.15 * Math.abs(Math.sin(t * d.tw + d.p))
        ctx.beginPath()
        ctx.arc(d.x * w, y * h, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(138,106,48,${a})`
        ctx.fill()
      }
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      io.disconnect()
    }
  }, [])

  return <canvas className="hero-dust" ref={ref} aria-hidden="true" />
}

const fmt = (n, dec = 0) =>
  n.toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec })

/* isometric gold-bar stack, original line art */
function GoldBars() {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true">
      <g stroke="#8a6a30" strokeWidth="1.4" fill="rgba(212,175,106,.28)" strokeLinejoin="round">
        <path d="M14 46 L26 30 h34 L48 46 Z" />
        <path d="M52 46 L64 30 h34 L86 46 Z" />
        <path d="M33 30 L45 14 h34 L67 30 Z" fill="rgba(212,175,106,.42)" />
      </g>
      <path d="M40 20 h18 M22 36 h18 M60 36 h18" stroke="rgba(138,106,48,.5)" strokeWidth="1" />
    </svg>
  )
}

export default function HeroVisual() {
  const rootRef = useRef(null)
  const frameRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const frame = frameRef.current
    const scene = sceneRef.current
    const reduce = reducedMotion()

    /* scale the fixed-size scene down to fit narrow columns */
    const fit = () => {
      const s = Math.min(1, root.clientWidth / 600)
      frame.style.transform = `scale(${s})`
    }
    fit()
    window.addEventListener('resize', fit)

    const ctx = gsap.context(() => {
      const layers = scene.querySelectorAll('.iso:not(.iso--base)')
      const chips = scene.querySelectorAll('.iso-chip')
      const nums = scene.querySelectorAll('[data-num]')
      const line = scene.querySelector('.iso-line')
      const fill = scene.querySelector('.iso-fill')

      const render = (el, v) => {
        el.textContent =
          (el.dataset.prefix || '') + fmt(v, +(el.dataset.decimals || 0)) + (el.dataset.suffix || '')
      }

      gsap.set(scene, { rotateX: 0, rotateZ: 0 })

      if (reduce) {
        nums.forEach((el) => render(el, +el.dataset.num))
        return
      }

      /* Clean initial states */
      gsap.set(scene, { opacity: 0, y: 30 })
      gsap.set(layers, { opacity: 0, y: 16, scale: 0.98 })
      gsap.set(line, { strokeDasharray: 1, strokeDashoffset: 1 })
      gsap.set(fill, { opacity: 0 })
      nums.forEach((el) => render(el, 0))

      const play = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        
        /* Smooth, elegant entrance */
        tl.to(scene, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
          .to(layers, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 }, 0.3)
          .to(line, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0.7)
          .to(fill, { opacity: 1, duration: 0.6 }, 1.3)

        /* Animate counter numbers */
        nums.forEach((el) => {
          const state = { v: 0 }
          tl.to(
            state,
            {
              v: +el.dataset.num,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => render(el, state.v),
            },
            0.6
          )
        })

        /* Subtle, gentle synchronized floating for the 3 notification chips */
        gsap.to(chips, {
          y: -5,
          duration: 2.8,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: 0.2,
        })
      }

      if (window.__dcReady) play()
      else window.addEventListener('preloader:done', play, { once: true })
    }, root)

    return () => {
      window.removeEventListener('resize', fit)
      ctx.revert()
    }
  }, [])

  return (
    <div className="hero__visual" ref={rootRef} aria-hidden="true">
      <Dust />
      <div className="iso-frame" ref={frameRef}>
        <div className="iso-scene" ref={sceneRef}>
          {/* base board */}
          <div className="iso iso--base" style={{ '--z': 0 }}>
            <span className="iso-badge">
              <i className="pulse" /> Live · Datacare
            </span>
          </div>

          {/* metal rates */}
          <div className="iso iso--rates" style={{ '--z': 52 }}>
            <div className="iso-rate">
              <span>Gold 24K · 10g</span>
              <b data-num="104350" data-prefix="₹ ">₹ 0</b>
              <i className="up">▲ 0.42%</i>
            </div>
            <div className="iso-rate">
              <span>Silver · 1kg</span>
              <b data-num="118900" data-prefix="₹ ">₹ 0</b>
              <i className="up">▲ 0.18%</i>
            </div>
          </div>

          {/* rate chart */}
          <div className="iso iso--chart" style={{ '--z': 96 }}>
            <span className="iso-label">Gold rate — 7 days</span>
            <svg viewBox="0 0 280 64" preserveAspectRatio="none">
              <path
                className="iso-fill"
                d="M0 48 C 22 44, 36 32, 55 36 S 92 50, 112 42 S 148 16, 170 21 S 210 38, 232 28 S 264 8, 280 11 L 280 64 L 0 64 Z"
                fill="rgba(176,140,72,.16)"
                stroke="none"
              />
              <path
                className="iso-line"
                d="M0 48 C 22 44, 36 32, 55 36 S 92 50, 112 42 S 148 16, 170 21 S 210 38, 232 28 S 264 8, 280 11"
                fill="none"
                stroke="#b08c48"
                strokeWidth="2.2"
                pathLength="1"
              />
            </svg>
          </div>

          {/* day totals */}
          <div className="iso iso--stats" style={{ '--z': 52 }}>
            <div>
              <span>Today's sales</span>
              <b data-num="842600" data-prefix="₹ ">₹ 0</b>
            </div>
            <div>
              <span>Stock</span>
              <b data-num="12.48" data-decimals="2" data-suffix=" kg">0</b>
            </div>
            <div>
              <span>Dues in</span>
              <b data-num="110500" data-prefix="₹ ">₹ 0</b>
            </div>
          </div>

          {/* live activity */}
          <div className="iso iso--feed" style={{ '--z': 128 }}>
            <div className="iso-row">
              <span className="iso-row__ic"><IcDiamond /></span>
              <span>
                <b>INV-2481 · Necklace 22K</b>
                <small>58.2 g · ₹ 1,24,500</small>
              </span>
              <i className="ok"><IcCheck /></i>
            </div>
            <div className="iso-row">
              <span className="iso-row__ic"><IcCart /></span>
              <span>
                <b>Order #318 · Kundan set</b>
                <small>Advance paid · due Friday</small>
              </span>
            </div>
          </div>

          {/* bullion tile */}
          <div className="iso iso--bars" style={{ '--z': 72 }}>
            <GoldBars />
            <span className="iso-label" style={{ marginTop: 2 }}>Bullion · 4.2 kg</span>
          </div>

          {/* floating chips */}
          <div className="iso iso-chip iso--chip1" style={{ '--z': 168 }}>
            <span className="iso-chip__ic"><IcChart /></span>
            <span>
              <b>Rate alert</b>
              <small>Gold crossed ₹ 10,435 / g</small>
            </span>
          </div>
          <div className="iso iso-chip iso--chip2" style={{ '--z': 150 }}>
            <span className="iso-chip__ic"><IcRfid /></span>
            <span>
              <b>RFID stock take</b>
              <small>100% verified</small>
            </span>
          </div>
          <div className="iso iso-chip iso--chip3" style={{ '--z': 184 }}>
            <span className="iso-chip__ic"><IcReceipt /></span>
            <span>
              <b>Invoice sent</b>
              <small>WhatsApp · GST ready</small>
            </span>
            <span className="iso-chip__tick"><IcCheck /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
