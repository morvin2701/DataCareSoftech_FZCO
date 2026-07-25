import React, { useState } from 'react'

export default function SmokyText({ 
  text, 
  children,
  className = '',
  smokeColor = 'rgba(208, 167, 94, 0.7)' 
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  // If text string is provided, render word/letter smoky effect
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
            className={`smoky-word ${isHovered ? 'is-smoky' : ''}`}
            onMouseEnter={() => setHoveredIdx(wordIdx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {word.split('').map((char, charIdx) => {
              const delay = charIdx * 40
              return (
                <span
                  key={charIdx}
                  className="smoky-char"
                  style={{
                    display: 'inline-block',
                    transition: `transform 0.6s ease ${delay}ms, filter 0.6s ease ${delay}ms, opacity 0.6s ease ${delay}ms, color 0.6s ease ${delay}ms`,
                    transform: isHovered 
                      ? `translateY(-12px) rotate(${(charIdx % 2 === 0 ? 1 : -1) * 8}deg) scale(1.15)` 
                      : 'none',
                    filter: isHovered 
                      ? 'blur(4px)' 
                      : 'blur(0px)',
                    opacity: isHovered ? 0.35 : 1,
                    textShadow: isHovered 
                      ? `0 0 20px ${smokeColor}, 0 -10px 30px ${smokeColor}` 
                      : 'none'
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
