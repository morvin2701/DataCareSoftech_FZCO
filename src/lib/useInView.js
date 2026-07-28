import { useEffect, useRef, useState } from 'react'

/* One-shot "has entered the viewport" flag, so a section can hand its
   entrance choreography to CSS instead of scripting each element. */
export function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setInView(true)
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}
