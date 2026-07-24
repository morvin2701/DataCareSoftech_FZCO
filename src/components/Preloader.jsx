import { useEffect, useRef, useState } from 'react'
import { gsap, reducedMotion } from '../lib/anim.js'
import { LogoMark } from './icons.jsx'
import { scroll } from '../lib/scroll.js'

/* Plays once per browser session, then fades away. */
export default function Preloader() {
  const [done, setDone] = useState(() => sessionStorage.getItem('dc-seen') === '1')
  const rootRef = useRef(null)
  const barRef = useRef(null)

  /* let the app know it can start page animations */
  useEffect(() => {
    if (done) {
      window.__dcReady = true
      window.dispatchEvent(new Event('preloader:done'))
    }
  }, [done])

  useEffect(() => {
    if (done) return
    if (reducedMotion()) {
      sessionStorage.setItem('dc-seen', '1')
      setDone(true)
      return
    }
    scroll.stop()
    document.documentElement.style.overflow = 'hidden'
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('dc-seen', '1')
        document.documentElement.style.overflow = ''
        scroll.start()
        setDone(true)
      },
    })
    tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' })
      .to(rootRef.current, { opacity: 0, duration: 0.55, ease: 'power2.out' }, '+=0.15')
    return () => tl.kill()
  }, [done])

  if (done) return null

  return (
    <div className="preloader" ref={rootRef}>
      <LogoMark className="preloader__mark" />
      <span className="preloader__word">Datacare Softech</span>
      <div className="preloader__bar">
        <i ref={barRef} />
      </div>
    </div>
  )
}
