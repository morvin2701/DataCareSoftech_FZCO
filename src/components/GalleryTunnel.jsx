import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

// Precision Canvas Line Icon Drawing Utilities (Apple Vision Pro Grade)
function drawIcon(ctx, type, x, y, size = 34, color = '#ffd885') {
  ctx.save()
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 3.5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (type === 'shield') {
    ctx.beginPath()
    ctx.moveTo(x, y - size / 2)
    ctx.lineTo(x + size / 2, y - size / 3)
    ctx.lineTo(x + size / 2, y + size / 6)
    ctx.bezierCurveTo(x + size / 2, y + size / 2, x, y + size / 1.8, x, y + size / 1.8)
    ctx.bezierCurveTo(x, y + size / 1.8, x - size / 2, y + size / 2, x - size / 2, y + size / 6)
    ctx.lineTo(x - size / 2, y - size / 3)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fill()
  } else if (type === 'vault') {
    ctx.strokeRect(x - size / 2, y - size / 2, size, size)
    ctx.beginPath()
    ctx.arc(x, y, size / 3, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fill()
  } else if (type === 'analytics') {
    ctx.beginPath()
    ctx.moveTo(x - size / 2, y + size / 2)
    ctx.lineTo(x - size / 6, y)
    ctx.lineTo(x + size / 6, y + size / 4)
    ctx.lineTo(x + size / 2, y - size / 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x + size / 2, y - size / 2, 4, 0, Math.PI * 2)
    ctx.fill()
  } else if (type === 'pos') {
    ctx.strokeRect(x - size / 2.2, y - size / 2, size * 0.9, size)
    ctx.fillRect(x - size / 3, y - size / 3, size * 0.65, 4)
    ctx.fillRect(x - size / 3, y - size / 6, size * 0.65, 4)
    ctx.fillRect(x - size / 3, y, size * 0.4, 4)
  } else if (type === 'diamond') {
    ctx.beginPath()
    ctx.moveTo(x - size / 2, y - size / 6)
    ctx.lineTo(x - size / 4, y - size / 2)
    ctx.lineTo(x + size / 4, y - size / 2)
    ctx.lineTo(x + size / 2, y - size / 6)
    ctx.lineTo(x, y + size / 2)
    ctx.closePath()
    ctx.stroke()
  } else if (type === 'bullion') {
    ctx.beginPath()
    ctx.moveTo(x - size / 2, y + size / 4)
    ctx.lineTo(x - size / 3, y - size / 4)
    ctx.lineTo(x + size / 3, y - size / 4)
    ctx.lineTo(x + size / 2, y + size / 4)
    ctx.closePath()
    ctx.stroke()
  }
  ctx.restore()
}

// 2048 x 1280 Super Retina Spatial UI Canvas Texture Generator (Apple Keynote Quality)
function generateUiCardTextures() {
  const cards = [
    {
      variant: 'analytics',
      icon: 'analytics',
      category: 'LIVE MARKET TICKER',
      title: 'GOLD 24K & SILVER SPOT',
      desc: 'Realtime MCX Commodity Feed & Automatic Counter Rate Locking',
      value: '₹ 10,435 / g',
      subMetric: '▲ 0.4% Live Bullion Spike',
      accent: '#30d158',
    },
    {
      variant: 'pos',
      icon: 'pos',
      category: 'RETAIL POS & INVOICING',
      title: 'COUNTER BILLING SYSTEM',
      desc: 'Touchscreen Counter Billing with Direct WhatsApp Invoice Delivery',
      value: '₹ 8,42,600',
      subMetric: 'INV-2481 • Delivered ✓✓',
      accent: '#ffd885',
    },
    {
      variant: 'wholesale',
      icon: 'bullion',
      category: 'WHOLESALE LEDGER',
      title: 'FINE GOLD & KARIGAR TOUCH',
      desc: 'Karigar Touch Calculations, Wastage Tracking & Melting Loss Sync',
      value: '120.450 g',
      subMetric: 'Fine Gold Balance Locked',
      accent: '#e8c88b',
    },
    {
      variant: 'compliance',
      icon: 'shield',
      category: 'BIS HUID COMPLIANCE',
      title: 'BIS HALLMARK VERIFIER',
      desc: 'Government Portal HUID Portal Sync & Instant RFID Tagging',
      value: 'HUID: HU98A2',
      subMetric: '100% Compliant & Locked',
      accent: '#00f0ff',
    },
    {
      variant: 'inventory',
      icon: 'vault',
      category: 'VAULT MANAGEMENT',
      title: 'MULTI-STORE RFID VAULT',
      desc: 'Realtime RFID Vault Auditing & Inter-Branch Stock Transfers',
      value: '42.50 kg',
      subMetric: 'Vault RFID Active',
      accent: '#ffd885',
    },
    {
      variant: 'bullion',
      icon: 'diamond',
      category: 'BULLION TRADING ENGINE',
      title: 'SPOT LOCK & HEDGING',
      desc: 'Live Spot Trading Engine with Hedging & Instant Commodity Fix',
      value: 'MCX SPOT LOCKED',
      subMetric: 'Instant Margin Fix',
      accent: '#30d158',
    },
  ]

  return cards.map((c) => {
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1280
    const ctx = canvas.getContext('2d')

    // 1. Smoked Glass Base Layer (Deep Obsidian Dark)
    const bgGrad = ctx.createLinearGradient(0, 0, 2048, 1280)
    bgGrad.addColorStop(0, '#070707')
    bgGrad.addColorStop(0.5, '#0f0f0f')
    bgGrad.addColorStop(1, '#040404')
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, 2048, 1280)

    // Radial Glass Light Glare (Apple Vision Pro Specular Reflection)
    const refGrad = ctx.createRadialGradient(1024, 0, 50, 1024, 640, 1100)
    refGrad.addColorStop(0, 'rgba(255, 216, 133, 0.09)')
    refGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)')
    refGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = refGrad
    ctx.fillRect(0, 0, 2048, 1280)

    // 2. Micro Scanlines HUD Grid (Crisp 1px Line)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)'
    ctx.lineWidth = 1
    for (let x = 0; x < 2048; x += 80) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 1280)
      ctx.stroke()
    }
    for (let y = 0; y < 1280; y += 80) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(2048, y)
      ctx.stroke()
    }

    // 3. Precision Outer Bezel Outline (Chamfered Glass Hardware)
    const margin = 44
    const cut = 52
    ctx.strokeStyle = 'rgba(255, 216, 133, 0.65)'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(margin + cut, margin)
    ctx.lineTo(2048 - margin - cut, margin)
    ctx.lineTo(2048 - margin, margin + cut)
    ctx.lineTo(2048 - margin, 1280 - margin - cut)
    ctx.lineTo(2048 - margin - cut, 1280 - margin)
    ctx.lineTo(margin + cut, 1280 - margin)
    ctx.lineTo(margin, 1280 - margin - cut)
    ctx.lineTo(margin, margin + cut)
    ctx.closePath()
    ctx.stroke()

    // Inner Frosted Border
    const iM = 68
    const iC = 44
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(iM + iC, iM)
    ctx.lineTo(2048 - iM - iC, iM)
    ctx.lineTo(2048 - iM, iM + iC)
    ctx.lineTo(2048 - iM, 1280 - iM - iC)
    ctx.lineTo(2048 - iM - iC, 1280 - iM)
    ctx.lineTo(iM + iC, 1280 - iM)
    ctx.lineTo(iM, 1280 - iM - iC)
    ctx.lineTo(iM, iM + iC)
    ctx.closePath()
    ctx.stroke()

    // Corner HUD Brackets
    ctx.fillStyle = '#ffd885'
    ctx.fillRect(96, 96, 20, 4)
    ctx.fillRect(96, 96, 4, 20)
    ctx.fillRect(1932, 96, 20, 4)
    ctx.fillRect(1948, 96, 4, 20)

    // 4. TOP BAR: Category Glass Pill + Enterprise Suite Branding (Generous Inset Padding = 140px)
    const padX = 140

    ctx.fillStyle = '#141414'
    ctx.fillRect(padX, 110, 420, 72)
    ctx.strokeStyle = 'rgba(255, 216, 133, 0.45)'
    ctx.lineWidth = 2
    ctx.strokeRect(padX, 110, 420, 72)

    drawIcon(ctx, c.icon, padX + 42, 146, 32, c.accent)

    ctx.fillStyle = '#ffffff'
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    ctx.fillText(c.category, padX + 88, 155)

    ctx.fillStyle = 'rgba(255, 216, 133, 0.85)'
    ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    ctx.fillText('VERIFIED • DATACARE ENTERPRISE CLOUD', 1280, 155)

    // 5. CENTER CONTENT: High-Contrast Crisp White Title & Hero Metric Box
    ctx.fillStyle = '#ffffff'
    ctx.font = '900 70px -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
    const words = c.title.split(' ')
    if (words.length > 2) {
      const line1 = words.slice(0, 2).join(' ')
      const line2 = words.slice(2).join(' ')
      ctx.fillText(line1, padX, 275)
      ctx.fillText(line2, padX, 355)
    } else {
      ctx.fillText(c.title, padX, 305)
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.72)'
    ctx.font = '500 32px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
    ctx.fillText(c.desc, padX, 430)

    // Recessed Metric Box (Vision Pro Glass Plate)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.035)'
    ctx.fillRect(padX, 485, 1768, 430)
    ctx.strokeStyle = 'rgba(255, 216, 133, 0.32)'
    ctx.lineWidth = 2
    ctx.strokeRect(padX, 485, 1768, 430)

    if (c.variant === 'analytics') {
      ctx.fillStyle = '#ffd885'
      ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      ctx.fillText('REALTIME MARKET SPOT RATE', padX + 50, 555)

      ctx.fillStyle = '#f5d77f'
      ctx.font = '900 124px Georgia, serif'
      ctx.fillText(c.value, padX + 50, 705)

      ctx.strokeStyle = '#30d158'
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo(padX + 50, 835)
      ctx.bezierCurveTo(480, 765, 780, 875, 1080, 785)
      ctx.bezierCurveTo(1320, 715, 1580, 825, 1830, 745)
      ctx.stroke()
    } else if (c.variant === 'pos') {
      ctx.fillStyle = '#ffd885'
      ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      ctx.fillText('COUNTER INVOICE SUMMARY', padX + 50, 555)

      ctx.fillStyle = '#ffffff'
      ctx.font = '900 124px Georgia, serif'
      ctx.fillText(c.value, padX + 50, 705)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)'
      ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
      ctx.fillText('Gold Ornaments (18K & 22K) • Net Wt: 84.500g • Making & GST Paid', padX + 50, 805)
    } else {
      ctx.fillStyle = '#ffd885'
      ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      ctx.fillText('REALTIME OPERATIONAL METRIC', padX + 50, 555)

      ctx.fillStyle = '#f5d77f'
      ctx.font = '900 124px Georgia, serif'
      ctx.fillText(c.value, padX + 50, 705)

      ctx.fillStyle = 'rgba(0, 0, 0, 0.72)'
      ctx.fillRect(padX + 50, 775, 480, 68)
      ctx.strokeStyle = c.accent
      ctx.lineWidth = 2
      ctx.strokeRect(padX + 50, 775, 480, 68)

      ctx.fillStyle = c.accent
      ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
      ctx.fillText(c.subMetric, padX + 80, 819)
    }

    // 6. BOTTOM BAR: Divider Line + Live Status LED + Vision Pro CTA Pill
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padX, 1065)
    ctx.lineTo(2048 - padX, 1065)
    ctx.stroke()

    // Left Live Status LED
    ctx.fillStyle = c.accent
    ctx.beginPath()
    ctx.arc(padX + 20, 1145, 10, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    ctx.fillText('DATACARE CLOUD 3.0 • 100% COMPLIANT', padX + 50, 1154)

    // Right Action CTA Glass Pill
    ctx.fillStyle = 'rgba(255, 216, 133, 0.12)'
    ctx.fillRect(1560, 1105, 348, 76)
    ctx.strokeStyle = '#ffd885'
    ctx.lineWidth = 2
    ctx.strokeRect(1560, 1105, 348, 76)

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    ctx.fillText('EXPLORE MODULE →', 1592, 1153)

    return canvas.toDataURL()
  })
}

const DEFAULTS = {
  background: '#060403',
  lineColor: '#ffd885',
  lineOpacity: 35,
  colors: ['#1c160e', '#261f14', '#15100a', '#2b2216'],
  grid: 3,
  speed: 85,
  boost: 160,
  fade: 100,
  label: true,
  labelText: 'Scroll / Hold to Fly Forward',
  labelFill: '#ffd885',
  labelColor: '#060403',
  labelFont: { fontFamily: 'sans-serif', fontSize: 13, fontWeight: 800, letterSpacing: '0.06em' },
}

const TUNNEL_WIDTH = 3.4
const TUNNEL_HEIGHT = 2.5
const SEGMENT_DEPTH = 3.5
const NUM_SEGMENTS = 16
const LINE_RADIUS = 0.005
const SCROLL_TO_Z = 0.05
const CAMERA_CHASE = 0.09
const FADE_IN = 0.4
const ARM_LENGTH = 0.5

const FOG_FAR = NUM_SEGMENTS * SEGMENT_DEPTH * 0.95

export default function GalleryTunnel(props) {
  const {
    images,
    colors,
    background = DEFAULTS.background,
    lineColor = DEFAULTS.lineColor,
    lineOpacity = DEFAULTS.lineOpacity,
    grid = DEFAULTS.grid,
    speed = DEFAULTS.speed,
    boost = DEFAULTS.boost,
    fade = DEFAULTS.fade,
    label = DEFAULTS.label,
    labelText = DEFAULTS.labelText,
    labelFill = DEFAULTS.labelFill,
    labelColor = DEFAULTS.labelColor,
    labelFont = DEFAULTS.labelFont,
    style,
  } = props

  const frameRef = useRef(null)
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)

  const generatedTextures = useMemo(() => {
    if (typeof window === 'undefined') return []
    return generateUiCardTextures()
  }, [])

  const urls = useMemo(() => {
    const list = (images ?? []).map((img) => (typeof img === 'string' ? img : img?.src)).filter(Boolean)
    return list.length ? list : generatedTextures
  }, [images, generatedTextures])

  const palette = useMemo(() => {
    const list = (colors ?? []).filter(Boolean)
    return list.length ? list : DEFAULTS.colors
  }, [colors])

  const cfgRef = useRef({ speed: 1, boost: 1 })
  cfgRef.current = {
    speed: Math.max(0, speed) / 100,
    boost: Math.max(0, boost) / 10,
  }

  useEffect(() => {
    const frame = frameRef.current
    const canvas = canvasRef.current
    if (!frame || !canvas) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(background)

    const fogNear = Math.min(
      FOG_FAR * (1 - Math.min(100, Math.max(0, fade)) / 100),
      FOG_FAR - 0.01
    )
    scene.fog = new THREE.Fog(new THREE.Color(background), fogNear, FOG_FAR)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(0, 0, 0)

    // Cinematic Soft Gold & Crisp White Studio Lighting
    const ambientLight = new THREE.AmbientLight('#ffffff', 1.1)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight('#ffffff', 1.3)
    dirLight.position.set(0, 3.2, 5)
    scene.add(dirLight)

    const goldRimLight = new THREE.DirectionalLight('#ffd885', 1.4)
    goldRimLight.position.set(-2, 3, 2)
    scene.add(goldRimLight)

    const pointLight = new THREE.PointLight('#ffe5a3', 1.8, 14)
    camera.add(pointLight)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy()

    const lineMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(lineColor),
      transparent: true,
      opacity: Math.min(100, Math.max(0, lineOpacity)) / 100,
    })

    // Metallic Gold Support Arm Material
    const armMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#d0a75e'),
      metalness: 0.94,
      roughness: 0.18,
    })

    // Physical Glass Material (Apple Vision Pro Glass Backing)
    const glassBackMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#080808'),
      metalness: 0.85,
      roughness: 0.1,
      transmission: 0.35,
      transparent: true,
      opacity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      ior: 1.52,
    })

    const loader = new THREE.TextureLoader()
    const fading = []

    let imageIndex = 0
    let populateIndex = 0
    let scrollPos = 0
    let raf = 0
    let last = 0
    let pressed = false
    let alive = true

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const hw = TUNNEL_WIDTH / 2
    const hh = TUNNEL_HEIGHT / 2

    const cols = Math.max(1, Math.round(grid))
    const rows = Math.max(1, Math.round(grid))
    const colW = TUNNEL_WIDTH / cols
    const rowH = TUNNEL_HEIGHT / rows

    const geoTubeZ = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -SEGMENT_DEPTH)),
      1,
      LINE_RADIUS,
      8
    )
    const geoTubeX = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(TUNNEL_WIDTH, 0, 0)),
      1,
      LINE_RADIUS,
      8
    )
    const geoTubeY = new THREE.TubeGeometry(
      new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, TUNNEL_HEIGHT, 0)),
      1,
      LINE_RADIUS,
      8
    )

    // Constant 1.0x Scale Spatial UI Display Hardware Assembly
    const armRadius = 0.01
    const geoArm = new THREE.CylinderGeometry(armRadius, armRadius, ARM_LENGTH, 8)
    geoArm.rotateX(Math.PI / 2)

    const cardW = 1.15
    const cardH = 0.72
    const cardDepth = 0.025
    const geoCardBox = new THREE.BoxGeometry(cardW, cardH, cardDepth)
    const geoCardScreen = new THREE.PlaneGeometry(cardW * 0.99, cardH * 0.99)

    const geoCardEdges = new THREE.EdgesGeometry(geoCardBox)
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#ffd885'),
      linewidth: 2,
      transparent: true,
      opacity: 0.88,
    })

    const imageMats = urls.map((url) => {
      const mat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.FrontSide,
      })
      loader.load(
        url,
        (tex) => {
          if (!alive) {
            tex.dispose()
            return
          }
          tex.generateMipmaps = true
          tex.minFilter = THREE.LinearMipmapLinearFilter
          tex.magFilter = THREE.LinearFilter
          tex.anisotropy = maxAnisotropy
          tex.colorSpace = THREE.SRGBColorSpace
          mat.map = tex
          mat.needsUpdate = true
          fading.push(mat)
        },
        undefined,
        () => { }
      )
      return mat
    })

    const tube = (geo, x, y, z = 0) => {
      const m = new THREE.Mesh(geo, lineMaterial)
      m.position.set(x, y, z)
      return m
    }

    const SLOTS = [
      {
        mountPos: new THREE.Vector3(0, 0, -SEGMENT_DEPTH / 2),
        armDir: new THREE.Vector3(0, 0, -1),
        cardRot: new THREE.Euler(0, 0, 0),
      },
    ]

    function populate(group) {
      const displays = group.userData.displays
      displays.forEach((disp) => {
        disp.group.visible = true
        if (imageMats.length) {
          disp.screenMesh.material = imageMats[imageIndex % imageMats.length]
          imageIndex++
        }
      })
    }

    function createSegment(z) {
      const group = new THREE.Group()
      group.position.z = z

      for (let i = 0; i <= cols; i++) {
        const x = -hw + i * colW
        group.add(tube(geoTubeZ, x, -hh))
        group.add(tube(geoTubeZ, x, hh))
      }
      for (let i = 1; i < rows; i++) {
        const y = -hh + i * rowH
        group.add(tube(geoTubeZ, -hw, y))
        group.add(tube(geoTubeZ, hw, y))
      }
      group.add(tube(geoTubeX, -hw, -hh))
      group.add(tube(geoTubeX, -hw, hh))
      group.add(tube(geoTubeY, -hw, -hh))
      group.add(tube(geoTubeY, hw, -hh))

      const displays = SLOTS.map((slot, index) => {
        const mountGroup = new THREE.Group()
        mountGroup.position.copy(slot.mountPos)

        const armMesh = new THREE.Mesh(geoArm, armMaterial)
        armMesh.position.set(0, 0, -ARM_LENGTH / 2)
        mountGroup.add(armMesh)

        const floatingCard = new THREE.Group()
        floatingCard.position.set(0, 0, 0)
        floatingCard.rotation.copy(slot.cardRot)

        // Glass Backing Slab
        const cardBoxMesh = new THREE.Mesh(geoCardBox, glassBackMaterial)
        floatingCard.add(cardBoxMesh)

        // Glowing Gold Outline
        const cardEdgeMesh = new THREE.LineSegments(geoCardEdges, edgeMaterial)
        floatingCard.add(cardEdgeMesh)

        // High-Res Spatial UI Screen
        const screenMesh = new THREE.Mesh(geoCardScreen, imageMats[0] || lineMaterial)
        screenMesh.position.z = cardDepth / 2 + 0.003
        floatingCard.add(screenMesh)

        mountGroup.add(floatingCard)
        group.add(mountGroup)

        return {
          group: mountGroup,
          floatingCard,
          screenMesh,
          seed: index * 1.35,
        }
      })

      group.userData.displays = displays

      populate(group)
      return group
    }

    const segments = []
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      const g = createSegment(-i * SEGMENT_DEPTH)
      scene.add(g)
      segments.push(g)
    }

    const resize = () => {
      const w = Math.max(1, frame.clientWidth)
      const h = Math.max(1, frame.clientHeight)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(frame)
    resize()

    const animate = (now) => {
      if (!alive) return
      raf = requestAnimationFrame(animate)
      const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60
      last = now
      const time = now * 0.001

      const cfg = cfgRef.current
      scrollPos += pressed ? cfg.boost : cfg.speed * 0.45

      const targetZ = -SCROLL_TO_Z * scrollPos
      camera.position.z += CAMERA_CHASE * (targetZ - camera.position.z)

      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08
      camera.rotation.y = -mouse.x * 0.04
      camera.rotation.x = mouse.y * 0.04

      pointLight.position.z = camera.position.z + 0.5

      const span = NUM_SEGMENTS * SEGMENT_DEPTH
      const camZ = camera.position.z

      for (const seg of segments) {
        if (seg.position.z > camZ + SEGMENT_DEPTH) {
          let min = 0
          for (const s of segments) min = Math.min(min, s.position.z)
          seg.position.z = min - SEGMENT_DEPTH
          populate(seg)
        } else if (seg.position.z < camZ - span - SEGMENT_DEPTH) {
          let max = -999999
          for (const s of segments) max = Math.max(max, s.position.z)
          seg.position.z = max + SEGMENT_DEPTH
          populate(seg)
        }

        const displays = seg.userData.displays || []
        const segWorldZ = seg.position.z

        for (const disp of displays) {
          if (!disp.group.visible) continue

          // Gentle Idle Hover Motion
          const floatOffset = Math.sin(time * 1.8 + disp.seed) * 0.015
          disp.floatingCard.position.y = floatOffset

          // FIXED 1.0 SCALE (No Zooming!)
          disp.floatingCard.scale.set(1, 1, 1)

          // SMOOTH VANISH ON APPROACH: Vanishes gracefully when camera gets closer than 1.4m
          const distToCam = camZ - segWorldZ
          if (distToCam > 0 && distToCam < 3.8) {
            let opacity = 1.0
            if (distToCam > 2.6) {
              opacity = (3.8 - distToCam) / 1.2 // Fade in gracefully as it enters view
            } else if (distToCam < 1.4) {
              opacity = Math.max(0, distToCam / 1.4) // Vanish smoothly to 0% as camera approaches closer than 1.4m
            }

            if (disp.screenMesh.material) {
              disp.screenMesh.material.opacity = Math.min(1, Math.max(0, opacity))
            }
          } else {
            if (disp.screenMesh.material) {
              disp.screenMesh.material.opacity = 0
            }
          }
        }
      }

      for (let i = fading.length - 1; i >= 0; i--) {
        const m = fading[i]
        m.opacity = Math.min(1, m.opacity + dt / FADE_IN)
        if (m.opacity >= 1) fading.splice(i, 1)
      }

      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(animate)

    const onMove = (e) => {
      const rect = frame.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouse.targetX = x
      mouse.targetY = y

      const el = cursorRef.current
      if (!el) return
      const sx = rect.width > 0 ? frame.clientWidth / rect.width : 1
      const sy = rect.height > 0 ? frame.clientHeight / rect.height : 1
      el.style.left = `${(e.clientX - rect.left) * sx}px`
      el.style.top = `${(e.clientY - rect.top) * sy}px`
    }

    const onWheel = (e) => {
      const delta = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX
      scrollPos += (delta > 0 ? 15 : -15) + delta * 0.25
    }

    const onEnter = () => {
      const el = cursorRef.current
      if (el) el.style.opacity = '1'
    }
    const onLeave = () => {
      pressed = false
      mouse.targetX = 0
      mouse.targetY = 0
      const el = cursorRef.current
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translate(-50%, -100%) scale(1)'
      }
    }
    const onDown = () => {
      pressed = true
      const el = cursorRef.current
      if (el) el.style.transform = 'translate(-50%, -100%) scale(0.9)'
    }
    const onUp = () => {
      pressed = false
      const el = cursorRef.current
      if (el) el.style.transform = 'translate(-50%, -100%) scale(1)'
    }

    frame.addEventListener('pointermove', onMove)
    frame.addEventListener('pointerenter', onEnter)
    frame.addEventListener('pointerleave', onLeave)
    frame.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('wheel', onWheel, { passive: true })

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      frame.removeEventListener('pointermove', onMove)
      frame.removeEventListener('pointerenter', onEnter)
      frame.removeEventListener('pointerleave', onLeave)
      frame.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('wheel', onWheel)

      geoArm.dispose()
      geoCardBox.dispose()
      geoCardScreen.dispose()
      geoCardEdges.dispose()
      armMaterial.dispose()
      glassBackMaterial.dispose()
      edgeMaterial.dispose()

      geoTubeZ.dispose()
      geoTubeX.dispose()
      geoTubeY.dispose()
      for (const m of imageMats) {
        m.map?.dispose()
        m.dispose()
      }
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [urls, palette, background, lineColor, lineOpacity, grid, fade])

  return (
    <div
      ref={frameRef}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '540px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 216, 133, 0.3)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
        overflow: 'hidden',
        cursor: label ? 'none' : 'default',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      {label && (
        <div
          ref={cursorRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translate(-50%, -100%) scale(1)',
            pointerEvents: 'none',
            opacity: 0,
            background: labelFill,
            borderRadius: 9999,
            padding: '8px 16px',
            transition: 'transform 0.1s ease, opacity 0.2s ease',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            ...labelFont,
            color: labelColor,
          }}
        >
          {labelText}
        </div>
      )}
    </div>
  )
}
