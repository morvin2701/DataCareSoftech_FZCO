import React, { useState, useRef } from 'react'

export const editionCardsMap = {
  retail: [
    {
      id: 'r1',
      title: 'Multi-Store Control',
      subtitle: 'Live inter-branch transfers',
      badge: 'Stage 01',
      description: 'Run multiple counters and showrooms seamlessly with unified live stock movement.',
      icon: '🏬',
      stat: '< 1 sec',
      statLabel: 'Transfer Speed',
      gradient: 'linear-gradient(135deg, #1f1910 0%, #3b2d14 100%)',
      accentColor: '#d0a75e'
    },
    {
      id: 'r2',
      title: 'RFID Stock Take',
      subtitle: 'Thousands of tags verified in minutes',
      badge: 'Stage 02',
      description: 'Instant tray and display counter audit without manually scanning single items.',
      icon: '📡',
      stat: '10,000+',
      statLabel: 'Tags / Min',
      gradient: 'linear-gradient(135deg, #241e10 0%, #4a3a1a 100%)',
      accentColor: '#e5b869'
    },
    {
      id: 'r3',
      title: 'HUID Hallmark Compliance',
      subtitle: '100% BIS compliant tagging',
      badge: 'Stage 03',
      description: 'Tag-wise unique identification tracking linked to government hallmark portals.',
      icon: '🛡️',
      stat: '100%',
      statLabel: 'Hallmark Sync',
      gradient: 'linear-gradient(135deg, #16110a 0%, #342812 100%)',
      accentColor: '#c49a46'
    },
    {
      id: 'r4',
      title: 'Loyalty & Schemes',
      subtitle: 'Automated customer reminders',
      badge: 'Stage 04',
      description: 'Manage monthly gold saving schemes, reward points, and automated birthday alerts.',
      icon: '🎁',
      stat: '+35%',
      statLabel: 'Repeat Visits',
      gradient: 'linear-gradient(135deg, #2b2313 0%, #52401d 100%)',
      accentColor: '#f0c674'
    },
    {
      id: 'r5',
      title: 'Old Gold Exchange',
      subtitle: 'Instant live rate valuation',
      badge: 'Stage 05',
      description: 'Transparent purity testing inputs and instant net gold value calculation.',
      icon: '🪙',
      stat: 'Live Rate',
      statLabel: 'Valuation Engine',
      gradient: 'linear-gradient(135deg, #1a150c 0%, #3a2e16 100%)',
      accentColor: '#d4af37'
    }
  ],
  wholesale: [
    {
      id: 'w1',
      title: 'Multi-Warehouse Allocation',
      subtitle: 'Automated stock routing',
      badge: 'Stage 01',
      description: 'Coordinate central vault inventory across regional wholesale depots automatically.',
      icon: '🏭',
      stat: '50+',
      statLabel: 'Depot Sync',
      gradient: 'linear-gradient(135deg, #161a24 0%, #202b3c 100%)',
      accentColor: '#7ea4d0'
    },
    {
      id: 'w2',
      title: 'B2B Tiered Pricing',
      subtitle: 'Dynamic customer margin rules',
      badge: 'Stage 02',
      description: 'Assign custom labor charges, purity markups, and quantity discounts per buyer.',
      icon: '📊',
      stat: 'Tier 1-5',
      statLabel: 'Rate Matrix',
      gradient: 'linear-gradient(135deg, #18202d 0%, #2a3a52 100%)',
      accentColor: '#93b7e3'
    },
    {
      id: 'w3',
      title: 'Buyer & Supplier Portal',
      subtitle: 'Self-service ordering & statements',
      badge: 'Stage 03',
      description: 'Allow clients to view digital catalogs, place bulk orders, and inspect metal balances.',
      icon: '💼',
      stat: '24/7',
      statLabel: 'Client Access',
      gradient: 'linear-gradient(135deg, #121720 0%, #1f2d42 100%)',
      accentColor: '#6c94c4'
    },
    {
      id: 'w4',
      title: 'Sales & Margin Analytics',
      subtitle: 'Real-time inventory forecasts',
      badge: 'Stage 04',
      description: 'Monitor high-turnover designs and forecast gold requirement for upcoming bookings.',
      icon: '📈',
      stat: 'Real-Time',
      statLabel: 'Margin Watch',
      gradient: 'linear-gradient(135deg, #1c2636 0%, #304464 100%)',
      accentColor: '#a7c8f2'
    },
    {
      id: 'w5',
      title: 'ERP & EDI Sync',
      subtitle: 'Enterprise software integration',
      badge: 'Stage 05',
      description: 'Automated synchronization with SAP, Tally, and custom ERP accounting systems.',
      icon: '🔄',
      stat: 'API Ready',
      statLabel: 'Data Bridge',
      gradient: 'linear-gradient(135deg, #141b26 0%, #25344a 100%)',
      accentColor: '#86ade0'
    }
  ],
  manufacturing: [
    {
      id: 'm1',
      title: 'Melting & Ghat Tracking',
      subtitle: 'Precision down to the milligram',
      badge: 'Stage 01',
      description: 'Track gold & silver purity, loss ratios, and metal weight at every step of raw melting.',
      icon: '⚡',
      stat: '0.001g',
      statLabel: 'Accuracy',
      gradient: 'linear-gradient(135deg, #1f1910 0%, #3b2d14 100%)',
      accentColor: '#d0a75e'
    },
    {
      id: 'm2',
      title: 'Karigar Issue-Receive',
      subtitle: 'Real-time artisan accountability',
      badge: 'Stage 02',
      description: 'Maintain individual worker accounts with net weight, stone weight, and productivity metrics.',
      icon: '⚒️',
      stat: '100%',
      statLabel: 'Traceability',
      gradient: 'linear-gradient(135deg, #241e10 0%, #4a3a1a 100%)',
      accentColor: '#e5b869'
    },
    {
      id: 'm3',
      title: 'Loss & Wastage Analysis',
      subtitle: 'Zero undetected leakage',
      badge: 'Stage 03',
      description: 'Automated tolerance check vs actual loss calculation across all manufacturing departments.',
      icon: '⚖️',
      stat: '-85%',
      statLabel: 'Unaccounted Loss',
      gradient: 'linear-gradient(135deg, #16110a 0%, #342812 100%)',
      accentColor: '#c49a46'
    },
    {
      id: 'm4',
      title: 'Design-wise Tag Generation',
      subtitle: 'Smart barcode & HUID sync',
      badge: 'Stage 04',
      description: 'Instant hallmark tag creation linked directly to manufacturing job orders and customer specs.',
      icon: '🏷️',
      stat: 'Instant',
      statLabel: 'Tagging Speed',
      gradient: 'linear-gradient(135deg, #2b2313 0%, #52401d 100%)',
      accentColor: '#f0c674'
    },
    {
      id: 'm5',
      title: 'Quality Checkpoints',
      subtitle: 'Automated floor inspection',
      badge: 'Stage 05',
      description: 'Multi-gate quality assurance verification before stock reaches final billing and dispatch.',
      icon: '✨',
      stat: '99.9%',
      statLabel: 'QA Standard',
      gradient: 'linear-gradient(135deg, #1a150c 0%, #3a2e16 100%)',
      accentColor: '#d4af37'
    }
  ],
  imitation: [
    {
      id: 'i1',
      title: 'Bulk Barcoding',
      subtitle: 'Thousands of SKUs in seconds',
      badge: 'Stage 01',
      description: 'Generate sticker labels for high-volume fashion jewellery with customized barcode numbers.',
      icon: '📦',
      stat: '50,000+',
      statLabel: 'SKUs / Batch',
      gradient: 'linear-gradient(135deg, #231624 0%, #3d203e 100%)',
      accentColor: '#d47ed0'
    },
    {
      id: 'i2',
      title: 'Lot-Wise Tagging',
      subtitle: 'Tray & rack location inventory',
      badge: 'Stage 02',
      description: 'Group items into lots and racks for rapid order picking during peak retail seasons.',
      icon: '🔖',
      stat: 'Tray Sync',
      statLabel: 'Location Finder',
      gradient: 'linear-gradient(135deg, #2a182b 0%, #48234a 100%)',
      accentColor: '#e291de'
    },
    {
      id: 'i3',
      title: 'MRP & Discount Rules',
      subtitle: 'Volume fashion pricing engine',
      badge: 'Stage 03',
      description: 'Configure brand-wise MRP markups and bulk scheme discounts automatically at checkout.',
      icon: '🏷️',
      stat: 'Auto-Apply',
      statLabel: 'Discount Engine',
      gradient: 'linear-gradient(135deg, #1d111e 0%, #341a36 100%)',
      accentColor: '#c96fc5'
    },
    {
      id: 'i4',
      title: 'Dead-Stock Intelligence',
      subtitle: 'Clear slow items before they stale',
      badge: 'Stage 04',
      description: 'Identify slow-moving design numbers with automated aging alerts and liquidation recommendations.',
      icon: '⌛',
      stat: '90 Days',
      statLabel: 'Ageing Cutoff',
      gradient: 'linear-gradient(135deg, #301a31 0%, #532655 100%)',
      accentColor: '#ec9ee8'
    },
    {
      id: 'i5',
      title: 'Fast Sales Reports',
      subtitle: '1-Click Excel & PDF exports',
      badge: 'Stage 05',
      description: 'Export item-wise sales, salesperson commissions, and inventory summary instantly.',
      icon: '⚡',
      stat: '1-Click',
      statLabel: 'Export Speed',
      gradient: 'linear-gradient(135deg, #1f1220 0%, #391d3c 100%)',
      accentColor: '#d884d4'
    }
  ],
  bullion: [
    {
      id: 'b1',
      title: 'Live Bullion Rates',
      subtitle: 'Real-time Gold & Silver ticker',
      badge: 'Stage 01',
      description: 'Stream live spot market rates directly onto trading desk monitors and mobile apps.',
      icon: '📈',
      stat: 'Tick-by-Tick',
      statLabel: 'Rate Refresh',
      gradient: 'linear-gradient(135deg, #261f10 0%, #46371a 100%)',
      accentColor: '#e6ba55'
    },
    {
      id: 'b2',
      title: 'Open Position Tracking',
      subtitle: 'Physical bars & coin ledger',
      badge: 'Stage 02',
      description: 'Monitor long and short metal exposure across 1kg bars, TT bars, and minted coins.',
      icon: '🧱',
      stat: 'Real-Time',
      statLabel: 'Position Watch',
      gradient: 'linear-gradient(135deg, #2b2210 0%, #503d18 100%)',
      accentColor: '#f3ca69'
    },
    {
      id: 'b3',
      title: 'Rate-Locked Bookings',
      subtitle: 'Instant client deal lock',
      badge: 'Stage 03',
      description: 'Lock gold purchase prices instantly via phone or portal with automated SMS trade confirmations.',
      icon: '🔒',
      stat: 'Locked',
      statLabel: 'Price Fix',
      gradient: 'linear-gradient(135deg, #1f180a 0%, #3b2c0f 100%)',
      accentColor: '#d9aa40'
    },
    {
      id: 'b4',
      title: 'Same-Day Settlement',
      subtitle: 'Complete voucher & audit trail',
      badge: 'Stage 04',
      description: 'Settle metal delivery and payment ledgers with automated GST & customs documentation.',
      icon: '🤝',
      stat: 'Same-Day',
      statLabel: 'Clearing Speed',
      gradient: 'linear-gradient(135deg, #312612 0%, #5a451d 100%)',
      accentColor: '#fadc7d'
    },
    {
      id: 'b5',
      title: 'Purity Valuation',
      subtitle: '999, 995 & 916 fine metal engine',
      badge: 'Stage 05',
      description: 'Calculate net fine gold content across varying purities tick by tick.',
      icon: '⚖️',
      stat: '999.9',
      statLabel: 'Fine Gold Purity',
      gradient: 'linear-gradient(135deg, #221a0c 0%, #413114 100%)',
      accentColor: '#e0b34b'
    }
  ]
}

export default function FlipGallery({ cards, editionId }) {
  // If editionId is supplied, pick card deck from map; otherwise use passed cards prop or default to manufacturing
  const activeCards = cards || (editionId && editionCardsMap[editionId]) || editionCardsMap.manufacturing

  const [activeIndex, setActiveIndex] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    // Smooth 3D tilt angles
    setTilt({
      x: y * -20,
      y: x * 20
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const nextCard = (e) => {
    e?.stopPropagation()
    setActiveIndex((prev) => (prev + 1) % activeCards.length)
  }

  const prevCard = (e) => {
    e?.stopPropagation()
    setActiveIndex((prev) => (prev - 1 + activeCards.length) % activeCards.length)
  }

  const handleContainerClick = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    if (clickX > rect.width / 2) {
      nextCard()
    } else {
      prevCard()
    }
  }

  return (
    <div className="originkit-flip-gallery-wrapper">
      <div 
        ref={containerRef}
        className="originkit-flip-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleContainerClick}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
        }}
      >
        {/* Left / Right Flip Click Overlay Indicators */}
        <div className="flip-zone flip-zone--left" title="Click to flip backward">
          <span className="flip-hint-icon">‹</span>
        </div>
        <div className="flip-zone flip-zone--right" title="Click to flip forward">
          <span className="flip-hint-icon">›</span>
        </div>

        {/* 3D Stack of Cards */}
        <div className="flip-stack">
          {activeCards.map((card, idx) => {
            const total = activeCards.length
            const offset = (idx - activeIndex + total) % total
            
            const isVisible = offset < 3 || offset === total - 1
            if (!isVisible) return null

            const isTop = offset === 0
            const depth = isTop ? 0 : offset > total - 2 ? -1 : offset

            const translateY = depth * 14
            const translateZ = depth * -30
            const scale = 1 - depth * 0.05
            const opacity = isTop ? 1 : 1 - depth * 0.25
            const zIndex = total - depth

            return (
              <div
                key={card.id}
                className={`flip-card ${isTop ? 'is-top' : ''}`}
                style={{
                  background: card.gradient,
                  borderColor: isTop ? card.accentColor : 'rgba(212, 175, 55, 0.25)',
                  transform: `translate3d(0, ${translateY}px, ${translateZ}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease, border-color 0.4s ease'
                }}
              >
                <div className="flip-card__glow" style={{ background: `radial-gradient(circle at 50% 0%, ${card.accentColor}33, transparent 70%)` }} />
                
                <div className="flip-card__header">
                  <span className="flip-card__badge" style={{ color: card.accentColor, borderColor: `${card.accentColor}40` }}>
                    {card.badge}
                  </span>
                  <span className="flip-card__icon">{card.icon}</span>
                </div>

                <div className="flip-card__body">
                  <h4 className="flip-card__title" style={{ color: card.accentColor }}>{card.title}</h4>
                  <p className="flip-card__subtitle">{card.subtitle}</p>
                  <p className="flip-card__desc">{card.description}</p>
                </div>

                <div className="flip-card__footer">
                  <div>
                    <span className="flip-card__stat-val" style={{ color: card.accentColor }}>{card.stat}</span>
                    <span className="flip-card__stat-lbl">{card.statLabel}</span>
                  </div>
                  <div className="flip-card__tap-hint">
                    Click to flip <span>↺</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Controls & Pagination */}
      <div className="flip-gallery-controls">
        <button 
          type="button" 
          className="flip-ctrl-btn" 
          onClick={prevCard} 
          aria-label="Previous card"
        >
          ← Previous
        </button>

        <div className="flip-dots">
          {activeCards.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`flip-dot ${activeIndex === i ? 'is-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(i)
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          type="button" 
          className="flip-ctrl-btn" 
          onClick={nextCard} 
          aria-label="Next card"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
