import { useEffect, useRef, useState } from 'react'
import { LogoMark } from './icons.jsx'
import { products } from '../data/products.js'
import { scroll } from '../lib/scroll.js'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#products', label: 'Products', dropdown: true },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const lastY = useRef(0)
  const openRef = useRef(false)
  openRef.current = open

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // stay visible through the pinned hero assembly; hide only past it
      setHidden(y > lastY.current && y > window.innerHeight * 1.15 && !openRef.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* scroll-spy: highlight the section currently in view */
  useEffect(() => {
    const ids = ['home', 'about', 'features', 'products', 'contact']
    const spy = () => {
      const probe = window.scrollY + window.innerHeight * 0.35
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      setActive(current)
    }
    spy()
    window.addEventListener('scroll', spy, { passive: true })
    window.addEventListener('resize', spy)
    return () => {
      window.removeEventListener('scroll', spy)
      window.removeEventListener('resize', spy)
    }
  }, [])

  const close = () => {
    setOpen(false)
    scroll.start()
  }
  const toggle = () => {
    setOpen((v) => {
      const next = !v
      next ? scroll.stop() : scroll.start()
      return next
    })
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="container nav__inner">
          <a href="#home" className="nav__brand" aria-label="Datacare Softech FZCO — back to top">
            <LogoMark />
            <span className="nav__brand-name">
              Datacare
              <span className="nav__brand-sub">Softech FZCO</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) =>
              l.dropdown ? (
                <div className="nav__item" key={l.href}>
                  <a
                    href={l.href}
                    className={`nav__link ${active === 'products' ? 'is-active' : ''}`}
                  >
                    {l.label} <i className="nav__caret" />
                  </a>
                  <div className="nav__dropdown">
                    {products.map((p) => (
                      <a key={p.no} href={p.path}>
                        <i>{p.no}</i> {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav__link ${active === l.href.slice(1) ? 'is-active' : ''}`}
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <div className="nav__cta">
            <a href="#contact" className="btn btn--gold">
              Book a demo <span className="arr">→</span>
            </a>
          </div>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mmenu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        {LINKS.filter((l) => !l.dropdown).map((l, idx) => (
          <a
            key={l.href}
            href={l.href}
            className="mmenu__link"
            onClick={close}
            style={{ transitionDelay: open ? `${0.08 + idx * 0.05}s` : '0s' }}
          >
            <em>{String(idx + 1).padStart(2, '0')}</em>
            {l.label}
          </a>
        ))}
        <div className="mmenu__link" style={{ transitionDelay: open ? '0.28s' : '0s' }}>
          <em>05</em>Products
          <div className="mmenu__sub">
            {products.map((p) => (
              <a key={p.no} href={p.path} onClick={close}>
                {p.name}
              </a>
            ))}
          </div>
        </div>
        <p className="mmenu__meta">
          Book a live demo — <a href="tel:+971551760454">+971 55 176 0454</a>
        </p>
      </div>
    </>
  )
}
