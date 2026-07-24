// module-level handle to the single Lenis instance so any component
// (navbar anchors, back-to-top, route changes) can drive scrolling
export const scroll = {
  lenis: null,
  to(target, opts = {}) {
    if (this.lenis) this.lenis.scrollTo(target, { offset: -90, ...opts })
    else if (typeof target === 'number') window.scrollTo(0, target)
    else target?.scrollIntoView?.()
  },
  stop() {
    this.lenis?.stop()
  },
  start() {
    this.lenis?.start()
  },
}
