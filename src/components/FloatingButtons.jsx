import { useEffect, useState } from 'react'
import { IcArrowUp, IcWhatsApp } from './icons.jsx'
import { company } from '../data/products.js'
import { scroll } from '../lib/scroll.js'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  const [showWa, setShowWa] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 1.2)
      setShowWa(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        className={`wa-float ${showWa ? 'is-show' : ''}`}
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <IcWhatsApp />
        <span>WhatsApp us</span>
      </a>
      <button
        className={`to-top ${show ? 'is-show' : ''}`}
        onClick={() => scroll.to(0, { offset: 0 })}
        aria-label="Back to top"
      >
        <IcArrowUp />
      </button>
    </>
  )
}
