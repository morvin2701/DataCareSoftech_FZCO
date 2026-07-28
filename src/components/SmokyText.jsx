import React, { useState } from 'react'

export default function SmokyText({ 
  text, 
  children,
  className = '',
  hoverColor = 'var(--gold-bright)' 
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  // If text string is provided, render word/letter interactive color hover effect
  const content = text || (typeof children === 'string' ? children : null)

  if (!content) {
    return <span className={`originkit-smoky-text ${className}`}>{children}</span>
  }

  const words = content.split(' ')

  return (
    <span className={`originkit-smoky-text-container ${className}`}>
      {words.map((word, wordIdx) => {
        const isHovered = hoveredIdx === wordIdx

        return (
          <span 
            key={wordIdx}
            className={`smoky-word ${isHovered ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredIdx(wordIdx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
              position: 'relative',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            {word.split('').map((char, charIdx) => {
              const delay = charIdx * 25
              return (
                <span
                  key={charIdx}
                  className="smoky-char"
                  style={{
                    display: 'inline-block',
                    transition: `color 0.3s ease ${delay}ms`,
                    color: isHovered ? hoverColor : 'inherit'
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
