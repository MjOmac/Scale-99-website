'use client'

import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, summary, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'

/**
 * Reticle cursor: a dot pinned exactly to the pointer (so targeting stays
 * honest) plus a ring that trails behind it and opens up over anything
 * clickable. Only mounts for fine pointers — touch devices keep their native
 * behaviour, and with JS off the real cursor is never hidden.
 */
export function TechCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    setEnabled(true)
    document.documentElement.classList.add('has-tech-cursor')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { ...target }
    let raf = 0

    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      place(dotRef.current, e.clientX, e.clientY)
      const hot = !!(e.target as Element)?.closest?.(INTERACTIVE)
      ringRef.current?.classList.toggle('is-hot', hot)
      document.documentElement.classList.remove('cursor-away')
    }

    const loop = () => {
      // Ease the ring toward the pointer; the lag is what gives it weight.
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      place(ringRef.current, ring.x, ring.y)
      raf = requestAnimationFrame(loop)
    }

    const down = () => ringRef.current?.classList.add('is-down')
    const up = () => ringRef.current?.classList.remove('is-down')
    const away = () => document.documentElement.classList.add('cursor-away')

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', away)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
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
      <div ref={dotRef} className="tc-dot" aria-hidden="true" />
      <div ref={ringRef} className="tc-ring" aria-hidden="true">
        <span className="tc-spin">
          <i className="tc-tick tc-n" />
          <i className="tc-tick tc-e" />
          <i className="tc-tick tc-s" />
          <i className="tc-tick tc-w" />
        </span>
      </div>
    </>
  )
}
