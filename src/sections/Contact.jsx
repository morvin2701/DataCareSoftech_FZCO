import { useState } from 'react'
import { IcMail, IcPhone, IcPin, IcClock, IcWhatsApp } from '../components/icons.jsx'
import { company } from '../data/products.js'

export default function Contact() {
  const [status, setStatus] = useState({ kind: '', msg: '' })
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setStatus({ kind: '', msg: '' })
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Website enquiry — ${data.subject}`,
          _template: 'table',
          ...data,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus({
        kind: 'ok',
        msg: "Thank you — your message is on its way. We'll get back to you within one business day.",
      })
      e.target.reset()
    } catch {
      setStatus({
        kind: 'err',
        msg: `Something went wrong sending your message. Please email ${company.email} or WhatsApp us directly.`,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal="fade">
              <span className="index">09</span> Let's connect
            </p>
            <h2 className="title-lg" data-split style={{ marginTop: 20 }}>
              See it running on <em>your own numbers.</em>
            </h2>
          </div>
          <p className="lead" data-reveal="up">
            Book a live demo and we'll walk your actual workflow — your metals, your rates,
            your billing formats — through the platform. No slideware.
          </p>
        </div>

        <div className="contact-grid">
          <div className="cinfo" data-reveal-group>
            <div className="cinfo__card">
              <div className="cinfo__icon">
                <IcPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <a href="tel:+971551760454">UAE — {company.phoneUAE}</a>
                <a href="tel:+918758111027">India — {company.phoneIN1}</a>
                <a href="tel:+919558602244">India — {company.phoneIN2}</a>
              </div>
            </div>
            <div className="cinfo__card">
              <div className="cinfo__icon">
                <IcWhatsApp />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <a href={company.whatsapp} target="_blank" rel="noreferrer">
                  Chat with the team
                </a>
                <small>Fastest way to reach us during business hours</small>
              </div>
            </div>
            <div className="cinfo__card">
              <div className="cinfo__icon">
                <IcMail />
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>
            <div className="cinfo__card">
              <div className="cinfo__icon">
                <IcPin />
              </div>
              <div>
                <h3>Office</h3>
                <p>{company.address}</p>
              </div>
            </div>
            <div className="cinfo__card">
              <div className="cinfo__icon">
                <IcClock />
              </div>
              <div style={{ flex: 1 }}>
                <h3>Hours</h3>
                <div className="hours-table">
                  {company.hours.map(([d, h]) => (
                    <div key={d}>
                      <b>{d}</b>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form className="cform" onSubmit={onSubmit} data-reveal="up">
            <h3>Send us a message</h3>
            <p>Tell us a little about your business and we'll tailor the demo to it.</p>

            <div className="cform__row">
              <div className="field">
                <label htmlFor="cf-name">Your name *</label>
                <input id="cf-name" name="name" type="text" placeholder="Full name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email address *</label>
                <input id="cf-email" name="email" type="email" placeholder="you@business.com" required />
              </div>
            </div>

            <div className="cform__row">
              <div className="field">
                <label htmlFor="cf-phone">Phone / WhatsApp</label>
                <input id="cf-phone" name="phone" type="tel" placeholder="+971 …" />
              </div>
              <div className="field">
                <label htmlFor="cf-biz">Business name</label>
                <input id="cf-biz" name="business" type="text" placeholder="Your jewellery business" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-subject">I'm interested in *</label>
              <select id="cf-subject" name="subject" required defaultValue="">
                <option value="" disabled>
                  Choose a topic
                </option>
                <option>Retail Management demo</option>
                <option>Wholesale Management demo</option>
                <option>Manufacturing Management demo</option>
                <option>Imitation Jewellery demo</option>
                <option>Bullion Management enquiry</option>
                <option>Mobile app</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="cf-msg">Message *</label>
              <textarea
                id="cf-msg"
                name="message"
                placeholder="Number of stores, current software, what you'd like to improve…"
                required
              />
            </div>

            <button className="btn btn--gold" type="submit" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
              {sending ? 'Sending…' : 'Send message'} <span className="arr">→</span>
            </button>

            {status.kind && <p className={`cform__status ${status.kind}`}>{status.msg}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
