import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Wrap every word of an element in an overflow-hidden mask so the words
   can rise into view. Keeps inline markup (<em> etc.) intact. */
function splitWords(el) {
  if (el.__splitWords) return el.__splitWords

  const wrapNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent.trim()) return
      const frag = document.createDocumentFragment()
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(' '))
          return
        }
        const mask = document.createElement('span')
        mask.style.cssText =
          'display:inline-block;overflow:hidden;vertical-align:bottom;' +
          'padding:0.12em 0.08em;margin:-0.12em -0.08em;'
        const word = document.createElement('span')
        word.className = 'sw'
        word.style.display = 'inline-block'
        word.textContent = part
        mask.appendChild(word)
        frag.appendChild(mask)
      })
      node.parentNode.replaceChild(frag, node)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(wrapNode)
    }
  }

  Array.from(el.childNodes).forEach(wrapNode)
  el.__splitWords = Array.from(el.querySelectorAll('.sw'))
  return el.__splitWords
}

/* Scan a page container for declarative animation hooks and wire them all
   to ScrollTrigger. Returns a cleanup function. Hooks:
     data-split            masked word-rise on headlines
     data-reveal="up|down|left|right|scale|fade|tilt"  (+ data-delay)
     data-reveal-group     stagger direct children ("tilt" = 3D flip-up)
     data-counter="6500"   count-up number (+ data-suffix)
     data-parallax="14"    scrub yPercent drift
     data-3d-scroll="10"   scrub rotateY drift in 3D while scrolling past
*/
export function initPageAnimations(root) {
  if (!root) return () => {}
  const reduce = reducedMotion()

  const ctx = gsap.context(() => {
    /* headline word reveals */
    root.querySelectorAll('[data-split]').forEach((el) => {
      if (reduce) return
      const words = splitWords(el)
      gsap.fromTo(
        words,
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: 'power4.out',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        }
      )
    })

    /* single-element reveals */
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      const type = el.dataset.reveal || 'up'
      const delay = parseFloat(el.dataset.delay || 0)
      if (reduce) {
        gsap.set(el, { opacity: 1 })
        return
      }
      const from = { opacity: 0 }
      if (type === 'up') from.y = 46
      if (type === 'down') from.y = -46
      if (type === 'left') from.x = -46
      if (type === 'right') from.x = 46
      if (type === 'scale') from.scale = 0.9
      if (type === 'tilt') {
        from.y = 60
        from.rotateX = 24
        from.transformPerspective = 1000
        from.transformOrigin = '50% 100%'
      }
      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: type === 'tilt' ? 1.2 : 1.05,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 94%', once: true },
      })
    })

    /* stagger groups — "tilt" mode flips children up in 3D */
    root.querySelectorAll('[data-reveal-group]').forEach((group) => {
      const items = Array.from(group.children)
      if (!items.length) return
      if (reduce) {
        gsap.set(items, { opacity: 1 })
        return
      }
      const tilt = group.dataset.revealGroup === 'tilt'
      const from = tilt
        ? { opacity: 0, y: 64, rotateX: 28, transformPerspective: 1000, transformOrigin: '50% 100%' }
        : { opacity: 0, y: 42 }
      gsap.fromTo(items, from, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: tilt ? 1.15 : 0.95,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 88%', once: true },
      })
    })

    /* counters */
    root.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseFloat(el.dataset.counter)
      const suffix = el.dataset.suffix || ''
      const render = (v) =>
        (el.textContent = Math.round(v).toLocaleString('en-US') + suffix)
      if (reduce) {
        render(target)
        return
      }
      const state = { v: 0 }
      render(0)
      gsap.to(state, {
        v: target,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 97%', once: true },
        onUpdate: () => render(state.v),
      })
    })

    /* parallax drift */
    root.querySelectorAll('[data-parallax]').forEach((el) => {
      if (reduce) return
      const amt = parseFloat(el.dataset.parallax || 12)
      gsap.fromTo(
        el,
        { yPercent: amt },
        {
          yPercent: -amt,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    /* 3D drift while scrolling past — element turns in space with the page */
    root.querySelectorAll('[data-3d-scroll]').forEach((el) => {
      if (reduce) return
      const amt = parseFloat(el.getAttribute('data-3d-scroll')) || 10
      gsap.fromTo(
        el,
        { rotateY: -amt, rotateX: amt * 0.35, transformPerspective: 1200 },
        {
          rotateY: amt,
          rotateX: -amt * 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })
  }, root)

  return () => ctx.revert()
}
