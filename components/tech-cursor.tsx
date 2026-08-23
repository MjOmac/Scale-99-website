'use client'

import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, summary, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'

/**
 * HUD crosshair cursor: full-height/width hairlines through the pointer, a
 * centre box that locks tighter over anything clickable, and a live X/Y
 * coordinate readout. Only mounts for fine pointers — touch devices keep
 * their native behaviour, and with JS off the real cursor is never hidden.
 */
export function TechCursor() {
  const vRef = useRef<HTMLDivElement>(null)
  const hRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const readRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    setEnabled(true)
    document.documentElement.classList.add('has-tech-cursor')

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      if (vRef.current) vRef.current.style.transform = `translate3d(${x}px, 0, 0)`
      if (hRef.current) hRef.current.style.transform = `translate3d(0, ${y}px, 0)`
      if (boxRef.current) boxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (readRef.current) {
        // Flip to the opposite side near the viewport edges so the readout
        // never gets clipped off-screen.
        const readW = 108
        const readH = 22
        const ox = x + readW + 16 > window.innerWidth ? -readW - 12 : 16
        const oy = y + readH + 14 > window.innerHeight ? -readH - 10 : 14
        readRef.current.style.transform = `translate3d(${x + ox}px, ${y + oy}px, 0)`
        readRef.current.textContent = `X:${String(Math.round(x)).padStart(4, '0')}  Y:${String(Math.round(y)).padStart(4, '0')}`
      }

      const hot = !!(e.target as Element)?.closest?.(INTERACTIVE)
      boxRef.current?.classList.toggle('is-hot', hot)
      document.documentElement.classList.remove('cursor-away')
    }

    const down = () => boxRef.current?.classList.add('is-down')
    const up = () => boxRef.current?.classList.remove('is-down')
    const away = () => document.documentElement.classList.add('cursor-away')

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', away)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', away)
      document.documentElement.classList.remove('has-tech-cursor', 'cursor-away')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={vRef} className="tc-v" aria-hidden="true" />
      <div ref={hRef} className="tc-h" aria-hidden="true" />
      <div ref={boxRef} className="tc-box" aria-hidden="true" />
      <div ref={readRef} className="tc-read" aria-hidden="true">X:0000  Y:0000</div>
    </>
  )
}
