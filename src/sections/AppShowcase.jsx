import React, { useState } from 'react'
import {
  IcApprove,
  IcChart,
  IcMobile,
  IcRfid,
  IcShield,
  IcUsers,
  IcWhatsApp,
} from '../components/icons.jsx'

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const officialFeatures = [
    {
      id: 'sync',
      icon: IcRfid,
      title: 'Real-time Sync',
      subtitle: 'Instant Multi-Store Cloud Sync',
      desc: 'All your stock, sales, and Karigar touch ledger data is instantly updated across devices for seamless business management.',
      tag: 'INSTANT CLOUD SYNC',
      accent: '#30d158',
      preview: {
        metric: '100% Realtime',
        sub: '3 Branches & Mobile App Synced',
        detail: 'Zero latency database replication across Android & iOS devices',
      },
    },
    {
      id: 'security',
      icon: IcShield,
      title: 'Bank-Grade Security',
      subtitle: '256-Bit Encrypted Storage',
      desc: 'Your financial information, customer records, and ledger balances are protected with advanced encryption and secure cloud backups.',
      tag: 'BANK-GRADE ENCRYPTION',
      accent: '#00f0ff',
      preview: {
        metric: '256-Bit SSL',
        sub: 'Role-Based Access Control',
        detail: 'Encrypted cloud storage with automatic hourly secure backups',
      },
    },
    {
      id: 'analytics',
      icon: IcChart,
      title: 'Instant Analytics',
      subtitle: 'Real-Time Executive Intelligence',
      desc: 'Get actionable insights and live reports on daily counter sales, vault stock valuation, and customer purchasing trends.',
      tag: 'EXECUTIVE INTELLIGENCE',
      accent: '#ffd885',
      preview: {
        metric: 'Live Spot MCX',
        sub: 'Gold 24K & Silver Analytics',
        detail: 'Real-time revenue metrics, profit margin calculation & stock reports',
      },
    },
    {
      id: 'ui',
      icon: IcMobile,
      title: 'Touch-Optimized UI',
      subtitle: 'Fluid Smartphone & Tablet UX',
      desc: 'Enjoy a smooth, intuitive interface designed specifically for touchscreen mobile phones and iPad tablets.',
      tag: 'SMARTPHONE & TABLET',
      accent: '#e8c88b',
      preview: {
        metric: 'Fluid 60 FPS UX',
        sub: 'Touch-Friendly Counter POS',
        detail: 'Fast one-tap billing, rate locking, and instant receipt generation',
      },
    },
    {
      id: 'crm',
      icon: IcUsers,
      title: 'Customer Management',
      subtitle: 'CRM & WhatsApp Integration',
      desc: 'Easily manage customer profiles, scheme savings plans, due reminders, and WhatsApp billing communications from anywhere.',
      tag: 'CRM & WHATSAPP NATIVE',
      accent: '#25d366',
      preview: {
        metric: 'WhatsApp Direct',
        sub: 'Instant Customer Receipts',
        detail: 'Automated due payment reminders and Gold Scheme savings tracking',
      },
    },
  ]

  const current = officialFeatures[activeTab]

  return (
    <section className="section section--soft" id="app">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 44px auto' }}>
          <p className="eyebrow" data-reveal="fade" style={{ justifyContent: 'center' }}>
            <span className="index">04</span> Mobile App &amp; Command Suite
          </p>
          <h2 className="title-lg" data-split style={{ marginTop: 16, marginBottom: 20 }}>
            The Complete Mobile Solution <em>for Modern Jewellers.</em>
          </h2>
          <p className="lead" data-reveal="up" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            A jewellery inventory and billing app for Android and iOS — real-time stock, secure billing, live gold rates and advanced analytics, anytime, anywhere.
          </p>
        </div>

        {/* Masterwork Interactive Feature Showcase Hub */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 244, 236, 0.85))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(176, 140, 72, 0.28)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 24px 60px rgba(176, 140, 72, 0.08)',
            marginBottom: '44px',
          }}
          data-reveal="scale"
        >
          {/* Top Feature Selector Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(176, 140, 72, 0.18)',
              marginBottom: '32px',
            }}
          >
            {officialFeatures.map((f, i) => {
              const isActive = i === activeTab
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    borderRadius: '999px',
                    border: isActive
                      ? '1px solid rgba(176, 140, 72, 0.6)'
                      : '1px solid rgba(176, 140, 72, 0.18)',
                    background: isActive
                      ? 'linear-gradient(135deg, #1c1712, #0d0a07)'
                      : 'rgba(255, 255, 255, 0.7)',
                    color: isActive ? '#ffffff' : '#52493e',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 8px 20px rgba(0, 0, 0, 0.15)' : 'none',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: f.accent,
                      boxShadow: isActive ? `0 0 10px ${f.accent}` : 'none',
                    }}
                  ></span>
                  {f.title}
                </button>
              )
            })}
          </div>

          {/* Active Showcase Stage Card (Split Preview) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Detailed Description */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: `${current.accent}15`,
                  border: `1px solid ${current.accent}40`,
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: current.accent === '#ffd885' || current.accent === '#e8c88b' ? '#b08c48' : current.accent,
                  marginBottom: '16px',
                }}
              >
                {current.tag}
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#16110a', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>
                {current.title}
              </h3>

              <div style={{ fontSize: '15px', fontWeight: 700, color: '#b08c48', marginBottom: '16px' }}>
                {current.subtitle}
              </div>

              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#52493e', marginBottom: '24px' }}>
                {current.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#16110a',
                  }}
                >
                  <IcApprove style={{ width: 18, height: 18, color: '#30d158' }} /> Verified Module
                </span>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>•</span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#16110a',
                  }}
                >
                  <IcShield style={{ width: 18, height: 18, color: '#00f0ff' }} /> Cloud Encrypted
                </span>
              </div>
            </div>

            {/* Right Column: Live Mobile Console Preview Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #14100b, #090705)',
                border: '1px solid rgba(255, 216, 133, 0.28)',
                borderRadius: '20px',
                padding: '28px',
                color: '#ffffff',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 216, 133, 0.15)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: current.accent,
                      boxShadow: `0 0 10px ${current.accent}`,
                    }}
                  ></span>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: current.accent }}>
                    MOBILE PREVIEW
                  </span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255, 216, 133, 0.8)' }}>
                  DATACARE 3.0
                </span>
              </div>

              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255, 216, 133, 0.7)', marginBottom: '6px' }}>
                PRIMARY STATUS METRIC
              </div>

              <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'Georgia, serif', color: '#ffe7aa', marginBottom: '8px' }}>
                {current.preview.metric}
              </div>

              <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                {current.preview.sub}
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 216, 133, 0.15)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'rgba(244, 238, 225, 0.85)',
                }}
              >
                {current.preview.detail}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Feature Cards Grid (Overview Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
          data-reveal-group
        >
          {officialFeatures.map((f, i) => {
            const IconComp = f.icon
            const isActive = i === activeTab
            return (
              <div
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 244, 236, 0.9))'
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: isActive
                    ? '1.5px solid rgba(176, 140, 72, 0.6)'
                    : '1px solid rgba(176, 140, 72, 0.22)',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: isActive
                    ? '0 14px 36px rgba(176, 140, 72, 0.15)'
                    : '0 8px 24px rgba(0, 0, 0, 0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isActive ? 'translateY(-3px)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${f.accent}15`,
                    border: `1px solid ${f.accent}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: f.accent === '#ffd885' || f.accent === '#e8c88b' ? '#b08c48' : f.accent,
                    marginBottom: '16px',
                  }}
                >
                  <IconComp style={{ width: 22, height: 22 }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#16110a', marginBottom: '8px' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: 1.5, color: '#52493e', margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Store & Platform Action Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
          data-reveal="up"
        >
          <span className="app-badge" style={{ padding: '14px 28px', fontSize: '15px', fontWeight: 700 }}>
            <IcMobile /> Android &amp; iOS Apps
          </span>
          <span className="app-badge" style={{ padding: '14px 28px', fontSize: '15px', fontWeight: 700 }}>
            <IcWhatsApp /> WhatsApp Business Integration
          </span>
        </div>
      </div>
    </section>
  )
}
