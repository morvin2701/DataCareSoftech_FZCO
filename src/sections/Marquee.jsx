import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../lib/anim.js'
import { IcSpark } from '../components/icons.jsx'

const ITEMS = [
  'Barcode & invoicing',
  'Stock management',
  'Customer outstanding',
  'Order management',
  'Money lending',
  'Scheme management',
  'Android & iOS app',
  'WhatsApp integration',
  'RFID stock takes',
  'HUID compliance',
]

export default function Marquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    if (reducedMotion()) return
    const track = trackRef.current
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 36,
      ease: 'none',
      repeat: -1,
    })
    // ease the speed a touch while actively scrolling
    let idle
    const onScroll = () => {
      gsap.to(tween, { timeScale: 2.4, duration: 0.3, overwrite: true })
      clearTimeout(idle)
      idle = setTimeout(() => gsap.to(tween, { timeScale: 1, duration: 1.2 }), 140)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(idle)
      tween.kill()
    }
  }, [])

  const half = (
    <>
      {ITEMS.map((t) => (
        <span className="marquee__item" key={t}>
          <IcSpark style={{ color: 'var(--gold)' }} />
          {t}
        </span>
      ))}
    </>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" ref={trackRef}>
        {half}
        {half}
      </div>
    </div>
  )
}
