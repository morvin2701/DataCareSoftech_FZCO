/* Hand-drawn 24px stroke icon set — consistent 1.5px weight, round caps */

const I = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
)

export const IcDiamond = (p) => (
  <I {...p}>
    <path d="M12 3.5 19.5 10 12 20.5 4.5 10 12 3.5Z" />
    <path d="M4.5 10h15M12 3.5 9 10l3 10.5M12 3.5 15 10l-3 10.5" opacity=".6" />
  </I>
)
export const IcBarcode = (p) => (
  <I {...p}>
    <path d="M4 6v12M8 6v12M11 6v8M14 6v12M17 6v8M20 6v12" />
    <path d="M4 18h16" opacity="0" />
  </I>
)
export const IcBox = (p) => (
  <I {...p}>
    <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="M4 7.5 12 12l8-4.5M12 12v9" />
  </I>
)
export const IcUsers = (p) => (
  <I {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <path d="M15.5 5.8a3.2 3.2 0 0 1 0 5.4M17.8 14.9c1.6.8 2.5 2.4 2.8 4.6" />
  </I>
)
export const IcCart = (p) => (
  <I {...p}>
    <path d="M3.5 4.5h2l2.2 11h10.6l2.2-8H7" />
    <circle cx="9.5" cy="19.5" r="1.4" />
    <circle cx="16.5" cy="19.5" r="1.4" />
  </I>
)
export const IcHandCoin = (p) => (
  <I {...p}>
    <circle cx="14.5" cy="6.5" r="3" />
    <path d="M3.5 13.5h3l3 2h5a1.5 1.5 0 0 1 0 3h-4" />
    <path d="M3.5 20h3l4 1 7.5-2.4a1.6 1.6 0 0 0-1-3l-3 .9" />
  </I>
)
export const IcCalendar = (p) => (
  <I {...p}>
    <rect x="4" y="5.5" width="16" height="15" rx="2.5" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M8.5 14.5l2.4 2.4 4.6-4.4" />
  </I>
)
export const IcMobile = (p) => (
  <I {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M11 5.5h2M10.5 18.2h3" />
  </I>
)
export const IcWhatsApp = (p) => (
  <I {...p}>
    <path d="M12 3.8a8.2 8.2 0 0 0-7 12.4L4 20.2l4.2-1a8.2 8.2 0 1 0 3.8-15.4Z" />
    <path d="M9.2 8.9c-.3 1.9 2.7 5.4 5 5.8.8.2 1.7-.4 1.9-1.1l-1.9-1.2-1 .8c-.8-.4-1.9-1.5-2.3-2.3l.9-1-1.2-1.9c-.7.1-1.3.5-1.4.9Z" opacity=".7" />
  </I>
)
export const IcStore = (p) => (
  <I {...p}>
    <path d="M4 9.5 5.5 4h13L20 9.5M4 9.5a2.3 2.3 0 0 0 4.5.6 2.3 2.3 0 0 0 4.6-.3M4 9.5V20h16V9.5m-6.9.3a2.3 2.3 0 0 0 4.6.3M4 9.5h16" />
    <path d="M9 20v-5.5h6V20" />
  </I>
)
export const IcCamera = (p) => (
  <I {...p}>
    <path d="M4 8.5h3l1.6-2.5h6.8L17 8.5h3a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13.8" r="3.4" />
  </I>
)
export const IcChart = (p) => (
  <I {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 15.5v-4M12.5 15.5V8M17 15.5v-6.5" />
  </I>
)
export const IcRfid = (p) => (
  <I {...p}>
    <rect x="8.5" y="9.5" width="7" height="10" rx="1.6" />
    <path d="M6.5 7.5a7.5 7.5 0 0 1 11 0M4 4.8a11.2 11.2 0 0 1 16 0" opacity=".8" />
    <path d="M11 12.5h2" />
  </I>
)
export const IcHeart = (p) => (
  <I {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </I>
)
export const IcRecycle = (p) => (
  <I {...p}>
    <path d="M7 8.5 9.5 4h5L17 8.5M17 8.5h3.5v4.7M17 8.5l-2.5 1M7 8.5H3.5v4.7M7 8.5l2.5 1M6.5 16.5 9 20h6l2.5-3.5" />
  </I>
)
export const IcShield = (p) => (
  <I {...p}>
    <path d="M12 3.5 19 6v6c0 4.4-3 7.5-7 8.5-4-1-7-4.1-7-8.5V6l7-2.5Z" />
    <path d="m9 11.8 2.2 2.2 4-4" />
  </I>
)
export const IcTag = (p) => (
  <I {...p}>
    <path d="m4 11 8-7 8 .5.5 8L13 20a1.8 1.8 0 0 1-2.6 0L4 13.6A1.8 1.8 0 0 1 4 11Z" />
    <circle cx="16" cy="8" r="1.3" />
  </I>
)
export const IcWarehouse = (p) => (
  <I {...p}>
    <path d="M3.5 20V9l8.5-5 8.5 5v11" />
    <path d="M7.5 20v-8h9v8M7.5 15.8h9" />
  </I>
)
export const IcHandshake = (p) => (
  <I {...p}>
    <path d="m3 7 4.5-1.5L12 7l4.5-1.5L21 7v7l-4 4.5-5.5-4.5" />
    <path d="m12 7-4 3.6a1.4 1.4 0 0 0 1.9 2L12 11l4.5 4M3 14l4 4 1.5-1.4" />
  </I>
)
export const IcGlobe = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c-4.7 4.8-4.7 12.2 0 17 4.7-4.8 4.7-12.2 0-17Z" />
  </I>
)
export const IcPuzzle = (p) => (
  <I {...p}>
    <path d="M9.5 4.5h5V8a2 2 0 1 0 2 2h3.5v5H16.5a2 2 0 1 1-2 2v3.5h-5V17a2 2 0 1 0-2-2H4v-5h3.5a2 2 0 1 1 2-2V4.5Z" />
  </I>
)
export const IcFlame = (p) => (
  <I {...p}>
    <path d="M12 3.5c1 2.8 4.5 4.7 4.5 8.7a4.5 4.5 0 0 1-9 0c0-1.7.7-3 1.5-4.2.4 1 .9 1.6 1.8 2.2C10.5 7.6 11 5.4 12 3.5Z" />
    <path d="M5 20.5h14" />
  </I>
)
export const IcTrendDown = (p) => (
  <I {...p}>
    <path d="m4 7 5.5 5.5 3.5-3.5 7 7" />
    <path d="M20 11.5V16h-4.5" />
  </I>
)
export const IcWrench = (p) => (
  <I {...p}>
    <path d="M14.5 6.5a4 4 0 0 1 5-1.5l-3 3 .5 3 3 .5 3-3v-.2" opacity="0" />
    <path d="M20.2 6.2a4.6 4.6 0 0 1-6 5.9L7 19.3a2 2 0 0 1-2.9-2.9L11.3 9a4.6 4.6 0 0 1 5.9-6l-2.6 2.6.7 2.9 2.9.7 2-2Z" />
  </I>
)
export const IcClipboard = (p) => (
  <I {...p}>
    <rect x="5" y="4.5" width="14" height="16" rx="2" />
    <path d="M9 4.5a3 3 0 0 1 6 0M8.5 10.5h7M8.5 14h7M8.5 17.5h4" />
  </I>
)
export const IcTarget = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.8" opacity=".7" />
    <circle cx="12" cy="12" r="1.3" />
  </I>
)
export const IcReceipt = (p) => (
  <I {...p}>
    <path d="M6 3.5h12V20l-2.5-1.5L13 20l-2.5-1.5L8 20l-2-1.5V3.5Z" />
    <path d="M9 8h6M9 11.5h6M9 15h3.5" opacity=".8" />
  </I>
)
export const IcPen = (p) => (
  <I {...p}>
    <path d="m14.5 5 4.5 4.5L8.5 20 3.5 20.5 4 15.5 14.5 5Z" />
    <path d="m12.5 7 4.5 4.5" opacity=".7" />
  </I>
)
export const IcLayers = (p) => (
  <I {...p}>
    <path d="M12 3.5 21 8.5l-9 5-9-5 9-5Z" />
    <path d="m4.5 12.7-1.5.8 9 5 9-5-1.5-.8M12 13.5v0" opacity=".8" />
  </I>
)
export const IcFileExport = (p) => (
  <I {...p}>
    <path d="M13.5 3.5H6V20.5h12V8l-4.5-4.5Z" />
    <path d="M13.5 3.5V8H18M9.5 14.5h5M12 12v5" opacity=".85" />
  </I>
)
export const IcApprove = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.2 12.2 2.6 2.6 5-5" />
  </I>
)
export const IcMail = (p) => (
  <I {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </I>
)
export const IcPhone = (p) => (
  <I {...p}>
    <path d="M5.5 4h3.6l1.4 4.2-2 1.6a12.6 12.6 0 0 0 5.7 5.7l1.6-2 4.2 1.4v3.6a1.5 1.5 0 0 1-1.6 1.5C10.2 19.4 4.6 13.8 4 6a1.5 1.5 0 0 1 1.5-2Z" />
  </I>
)
export const IcPin = (p) => (
  <I {...p}>
    <path d="M12 21s-6.8-6-6.8-11.2a6.8 6.8 0 0 1 13.6 0C18.8 15 12 21 12 21Z" />
    <circle cx="12" cy="9.6" r="2.4" />
  </I>
)
export const IcClock = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.2l3.4 2" />
  </I>
)
export const IcArrowR = (p) => (
  <I {...p}>
    <path d="M4 12h15M13.5 6l6 6-6 6" />
  </I>
)
export const IcArrowUp = (p) => (
  <I {...p}>
    <path d="M12 20V5M6 10.5 12 4.5l6 6" />
  </I>
)
export const IcArrowL = (p) => (
  <I {...p}>
    <path d="M20 12H5M10.5 6l-6 6 6 6" />
  </I>
)
export const IcSpark = (p) => (
  <I {...p}>
    <path d="M12 3v0c.8 4.9 4.1 8.2 9 9-4.9.8-8.2 4.1-9 9-.8-4.9-4.1-8.2-9-9 4.9-.8 8.2-4.1 9-9Z" fill="currentColor" stroke="none" />
  </I>
)
export const IcFacebook = (p) => (
  <I {...p}>
    <path d="M13.5 21v-7h2.8l.5-3.2h-3.3V8.6c0-1 .3-1.6 1.7-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.7V14h2.8v7" />
  </I>
)
export const IcLinkedIn = (p) => (
  <I {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M7.5 10.5V17M7.5 7.4v.1M11.5 17v-3.8c0-1.5.9-2.7 2.4-2.7s2.6 1.1 2.6 2.8V17" />
  </I>
)
export const IcInstagram = (p) => (
  <I {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M16.8 7.2v.01" />
  </I>
)
export const IcCheck = (p) => (
  <I {...p} strokeWidth="2">
    <path d="m4.5 12.5 5 5L19.5 7" />
  </I>
)

export const LogoMark = (p) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...p}>
    <path
      d="M32 8 54 27 32 56 10 27 32 8Z"
      stroke="url(#lg1)"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M10 27h44M32 8l-9.5 19L32 56M32 8l9.5 19L32 56"
      stroke="url(#lg1)"
      strokeWidth="1.4"
      strokeLinejoin="round"
      opacity=".65"
    />
    <defs>
      <linearGradient id="lg1" x1="10" y1="8" x2="54" y2="56">
        <stop stopColor="#e9cf9a" />
        <stop offset="1" stopColor="#b08c48" />
      </linearGradient>
    </defs>
  </svg>
)
