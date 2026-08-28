'use client'

import { useState } from 'react'

interface FlipStatCardProps {
  index: number
  headline: string
  label: string
  detail: string
  accent: boolean
  animationDelay: string
}

/**
 * The desktop hover/focus flip still works via CSS. Touch devices have no
 * hover, so a tap toggles the same `is-flipped` state the CSS keys off of.
 */
export function FlipStatCard({ index, headline, label, detail, accent, animationDelay }: FlipStatCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${headline}. ${label}. Tap for details.`}
      onClick={() => setFlipped(v => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped(v => !v)
        }
      }}
      className={`mem mem-float h-56 cursor-pointer rounded-md outline-none ${flipped ? 'is-flipped' : ''}`}
      style={{ animationDelay }}
    >
      <div className="mem-inner">
        <div className="mem-face">
          <span className="relative font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
          <p className={`relative mt-3 font-heading text-3xl font-semibold ${accent ? 'text-accent' : 'text-foreground'}`}>{headline}</p>
          <p className="relative mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        </div>
        <div className="mem-face mem-back">
          <p className="relative text-sm leading-6 text-muted-foreground">{detail}</p>
        </div>
      </div>
    </div>
  )
}
