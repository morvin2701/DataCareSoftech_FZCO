import React, { useEffect, useRef } from 'react'

export default function AsciiRain({ 
  fontSize = 14, 
  speed = 1, 
  color = '#d0a75e', 
  opacity = 0.25,
  characters = '0123456789ABCDEFDatacareSoftechGoldKarigarGramMg⚡⚖️💎'
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let columns = 0
    let drops = []

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight

      columns = Math.floor(canvas.width / fontSize)
      drops = []
      for (let i = 0; i < columns; i++) {
        // Randomize initial drop positions above or across screen
        drops[i] = Math.floor(Math.random() * -50)
      }
    }

    resizeCanvas()
    const resizeObserver = new ResizeObserver(resizeCanvas)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    const charArray = Array.from(characters)

    const draw = () => {
      // Semi-transparent black/dark fill to create tail effect
      ctx.fillStyle = 'rgba(22, 17, 10, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Highlight head character brighter
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#ffffff'
        } else {
          ctx.fillStyle = color
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += speed
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [fontSize, speed, color, characters])

  return (
    <canvas 
      ref={canvasRef} 
      className="originkit-ascii-rain-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: opacity,
        borderRadius: 'inherit',
        zIndex: 1
      }}
    />
  )
}
