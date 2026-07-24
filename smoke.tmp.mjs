import puppeteer from 'puppeteer-core'

const SHOT_DIR = process.env.SHOT_DIR
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars', '--force-device-scale-factor=1'],
})

const errors = []
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
page.on('console', (m) => {
  if (['error', 'warning'].includes(m.type())) errors.push(`[console.${m.type()}] ${m.text()}`)
})
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('requestfailed', (r) => errors.push(`[requestfailed] ${r.url()} — ${r.failure()?.errorText}`))

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise((r) => setTimeout(r, 2600)) // let preloader finish + hero animate
await page.screenshot({ path: `${SHOT_DIR}/01-hero.png` })

// scroll through the page in steps, screenshotting key sections
const sections = ['about', 'features', 'products', 'process', 'contact']
for (const id of sections) {
  await page.evaluate((sid) => {
    document.getElementById(sid)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    window.scrollBy(0, -60)
  }, id)
  await new Promise((r) => setTimeout(r, 1600))
  await page.screenshot({ path: `${SHOT_DIR}/02-${id}.png` })
}

// deep-scroll to bottom for footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await new Promise((r) => setTimeout(r, 1400))
await page.screenshot({ path: `${SHOT_DIR}/03-footer.png` })

// mobile pass
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
mob.on('pageerror', (e) => errors.push(`[mobile pageerror] ${e.message}`))
await mob.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise((r) => setTimeout(r, 2600))
await mob.screenshot({ path: `${SHOT_DIR}/04-mobile-hero.png` })
// open mobile menu
await mob.tap('.nav__burger').catch((e) => errors.push('[mobile] burger tap failed: ' + e.message))
await new Promise((r) => setTimeout(r, 900))
await mob.screenshot({ path: `${SHOT_DIR}/05-mobile-menu.png` })

// horizontal overflow check
const overflow = await mob.evaluate(
  () => document.documentElement.scrollWidth - document.documentElement.clientWidth
)
if (overflow > 1) errors.push(`[layout] mobile horizontal overflow: ${overflow}px`)

console.log(errors.length ? 'ISSUES:\n' + errors.join('\n') : 'CLEAN — no console/page errors')
await browser.close()
