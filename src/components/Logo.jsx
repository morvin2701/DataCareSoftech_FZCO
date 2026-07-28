/* Brand mark. The logo is multicolour, so it sits on a soft ivory plate
   that keeps it calm inside the gold/charcoal system and reads on both
   the white navbar and the dark footer. */
export default function Logo({ size = 38, className = '' }) {
  return (
    <span className={`brand-mark ${className}`.trim()} style={{ '--mark': `${size}px` }}>
      <img
        src="/logo-mark.png"
        alt=""
        width={size}
        height={size}
        decoding="async"
      />
    </span>
  )
}
