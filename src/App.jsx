import { useEffect, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, initPageAnimations, reducedMotion } from './lib/anim.js'
import { scroll } from './lib/scroll.js'

import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import ClickEffects from './components/ClickEffects.jsx'

import Hero from './sections/Hero.jsx'
import Marquee from './sections/Marquee.jsx'
import About from './sections/About.jsx'
import Features from './sections/Features.jsx'
import Products from './sections/Products.jsx'
import AppShowcase from './sections/AppShowcase.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Faq from './sections/Faq.jsx'
import { Process } from './sections/Bands.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  const mainRef = useRef(null)

  /* smooth scrolling, driven by the GSAP ticker */
  useEffect(() => {
    if (reducedMotion()) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    scroll.lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      scroll.lenis = null
    }
  }, [])

  /* one delegated handler makes every #anchor glide via Lenis */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href.length < 2) return
      const el = document.getElementById(href.slice(1))
      if (!el) return
      e.preventDefault()
      scroll.to(el, href === '#home' ? { offset: 0 } : {})
      history.replaceState(null, '', href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  /* start scroll animations once the preloader has cleared */
  useLayoutEffect(() => {
    let cleanup = () => { }
    let started = false
    const start = () => {
      if (started) return
      started = true
      cleanup = initPageAnimations(mainRef.current)
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (location.hash.length > 1) {
        const el = document.getElementById(location.hash.slice(1))
        if (el) setTimeout(() => scroll.to(el), 120)
      }
    }
    window.addEventListener('preloader:done', start, { once: true })
    document.fonts?.ready?.then(() => ScrollTrigger.refresh())
    return () => {
      window.removeEventListener('preloader:done', start)
      cleanup()
    }
  }, [])

  return (
    <div className="grain">
      <ClickEffects color="#d0a75e" interactionMode="sniper" showLabel={false} />
      <Preloader />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Products />
        <AppShowcase />
        <Process />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
