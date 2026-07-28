import { useState } from 'react'
import { IcFacebook, IcLinkedIn, IcInstagram } from './icons.jsx'
import Logo from './Logo.jsx'
import { products, company } from '../data/products.js'

const tel = (n) => `tel:${n.replace(/[^\d+]/g, '')}`

export default function Footer() {
  const [newsMsg, setNewsMsg] = useState('')
  const year = new Date().getFullYear()

  const onNewsletter = async (e) => {
    e.preventDefault()
    const email = new FormData(e.target).get('email')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'Newsletter subscription — website', email }),
      })
      if (!res.ok) throw new Error()
      setNewsMsg('Subscribed — welcome aboard.')
      e.target.reset()
    } catch {
      setNewsMsg(`Couldn't subscribe right now — email us at ${company.email}`)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="nav__brand" aria-label="Datacare Softech FZCO — back to top">
              <Logo size={44} />
              <span className="nav__brand-name">
                Datacare
                <span className="nav__brand-sub">Softech FZCO</span>
              </span>
            </a>
            <p>
              Jewellery business software crafted since 2010 — retail, wholesale,
              manufacturing, imitation and bullion, run from one precise platform.
            </p>
            <address className="footer__nap">{company.address}</address>
            <div className="footer__socials">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <IcFacebook />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <IcLinkedIn />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <IcInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4>Products</h4>
            <ul className="footer__list">
              {products.map((p) => (
                <li key={p.no}>
                  <a href={p.path}>{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer__list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#process">How we onboard</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Book a demo</a></li>
              <li>
                <a href={company.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__news">
            <h4>Stay in the loop</h4>
            <p>Product releases, gold-trade features and jewellery-tech notes. No noise.</p>
            <form className="footer__news-form" onSubmit={onNewsletter}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                aria-label="Email address"
              />
              <button type="submit">Join</button>
            </form>
            {newsMsg && <p className="footer__news-note">{newsMsg}</p>}

            <ul className="footer__contact">
              <li>
                <span className="footer__contact-tag">UAE</span>
                <span className="footer__contact-vals">
                  <a href={tel(company.phoneUAE)}>{company.phoneUAE}</a>
                </span>
              </li>
              <li>
                <span className="footer__contact-tag">India</span>
                <span className="footer__contact-vals">
                  <a href={tel(company.phoneIN1)}>{company.phoneIN1}</a>
                  <a href={tel(company.phoneIN2)}>{company.phoneIN2}</a>
                </span>
              </li>
              <li>
                <span className="footer__contact-tag">Email</span>
                <span className="footer__contact-vals">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__word" aria-hidden="true">
        DATACARE
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span className="footer__legal">
            <span>Dubai Silicon Oasis, UAE</span>
            <a href={`mailto:${company.email}`}>Support</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
