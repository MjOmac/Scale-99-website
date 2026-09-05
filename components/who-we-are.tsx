'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/**
 * "Who We Are" as a transport panel.
 *
 * The section used to lean on an oversized `"` glyph that read, happily by
 * accident, as a pause button. This builds the whole section around that
 * reading: the quote is a held frame, the pause bars are both the opening
 * quotation mark and the control, and the waveform underneath is the quote's
 * own audio, frozen at the playhead. Pressing play brings it to life.
 *
 * Nothing here is real playback — it's a piece of stagecraft — so the whole
 * thing stays decorative and the one control is a plain, labelled button.
 */

// 99 seconds, because Scale 99. Reads as 01:39 on the counter.
const DURATION = 99
const BAR_COUNT = 88

/**
 * Bar heights are derived, not random: a random fill would differ between the
 * server render and the client and blow up hydration. Layered sines give the
 * irregularity of a real waveform, and the half-sine envelope tapers it at
 * both ends so the strip doesn't collide with the panel edges. The floor is
 * high enough that a quiet bar still reads as a bar — any lower and the
 * rounded caps meet in the middle and the strip turns into a row of beads.
 */
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const envelope = Math.sin((i / (BAR_COUNT - 1)) * Math.PI)
  const detail = Math.sin(i * 1.7) * 0.5 + Math.sin(i * 0.63) * 0.32 + Math.sin(i * 3.1) * 0.18
  return Math.min(1, Math.max(0.22, (0.5 + detail * 0.42) * (0.34 + envelope * 0.76)))
})

function timecode(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function Waveform({ tone }: { tone: 'muted' | 'accent' }) {
  return (
    <div className="flex h-full w-full items-center gap-px sm:gap-[2px]">
      {BARS.map((height, i) => (
        <span
          key={i}
          className={`wm-bar flex-1 rounded-[1.5px] ${tone === 'accent' ? 'bg-accent' : 'bg-white/18'}`}
          style={{ height: `${height * 100}%`, animationDelay: `${-i * 0.055}s` }}
        />
      ))}
    </div>
  )
}

export function WhoWeAre() {
  const [playing, setPlaying] = useState(false)
  // Starts a third of the way in so the paused state already looks like a
  // frame someone stopped on, rather than a track nobody has touched.
  const [elapsed, setElapsed] = useState(DURATION / 3)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (!playing || reducedMotion.current) return
    // 4 ticks a second is enough for the counter; the playhead and the fill
    // are CSS-transitioned across each tick, so they still read as continuous.
    const id = window.setInterval(() => setElapsed(t => (t + 0.25) % DURATION), 250)
    return () => window.clearInterval(id)
  }, [playing])

  const progress = (elapsed / DURATION) * 100

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <figure className="relative overflow-hidden rounded-2xl border border-tone-line bg-tone-card text-left shadow-2xl shadow-black/50">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        {/* Warm bloom, anchored on the pause bars so the glow reads as coming
            off the control rather than sitting behind the whole panel. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle 320px at 12% 42%, rgba(255,106,0,.13), transparent 70%)' }}
        />

        {/* Transport header */}
        <div className="relative flex items-center justify-between gap-4 border-b border-tone-line px-5 py-3 sm:px-7">
          <p className="eyebrow">Who We Are</p>
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            <span className={`h-1.5 w-1.5 rounded-full ${playing ? 'wm-dot bg-accent' : 'bg-white/30'}`} />
            {playing ? 'Playing' : 'Paused'}
          </div>
        </div>

        <div className="relative px-5 py-9 sm:px-7 sm:py-11">
          <div className="flex items-start gap-5 sm:gap-7">
            {/* The pause bars, doing double duty as the opening quotation mark
                and as the one control on the panel. */}
            <button
              type="button"
              onClick={() => setPlaying(v => !v)}
              aria-pressed={playing}
              aria-label={playing ? 'Pause the quote' : 'Play the quote'}
              className="wm-toggle group relative mt-1 grid h-14 w-14 shrink-0 place-items-center rounded-full sm:h-[4.5rem] sm:w-[4.5rem]"
            >
              <span aria-hidden="true" className="wm-ring" />
              <span aria-hidden="true" className="wm-ring wm-ring-2" />
              <span aria-hidden="true" className={`wm-glyph ${playing ? 'is-playing' : ''}`}>
                <span className="wm-glyph-bar" />
                <span className="wm-glyph-bar" />
                <svg className="wm-glyph-play" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4.8 19.2 12 8 19.2Z" fill="currentColor" strokeLinejoin="round" strokeWidth="2.4" stroke="currentColor" />
                </svg>
              </span>
            </button>

            <div className="min-w-0 flex-1">
              <blockquote className="text-balance font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-[2rem] sm:leading-[1.15]">
                Software should fit the industry, <span className="text-accent">not the other way around.</span>
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                — Scale 99.
              </figcaption>
            </div>
          </div>

          {/* The quote's "audio". Muted underneath, accent on top, revealed up
              to the playhead by a clip rather than by re-colouring 64 nodes. */}
          <div aria-hidden="true" className={`wm-wave relative mt-9 h-12 w-full sm:h-16 ${playing ? 'is-live' : ''}`}>
            <Waveform tone="muted" />
            <div
              className="absolute inset-0 transition-[clip-path] duration-300 ease-linear"
              style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
            >
              <Waveform tone="accent" />
            </div>
          </div>

          {/* Scrubber */}
          <div aria-hidden="true" className="mt-5 flex items-center gap-4 font-mono text-[0.65rem] text-muted-foreground">
            <span className="tabular-nums">{timecode(elapsed)}</span>
            <div className="relative h-px flex-1 bg-white/12">
              <div className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-300 ease-linear" style={{ width: `${progress}%` }} />
              <span
                className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,106,0,.9)] transition-[left] duration-300 ease-linear"
                style={{ left: `${progress}%` }}
              />
            </div>
            <span className="tabular-nums">{timecode(DURATION)}</span>
          </div>
        </div>

        <div className="relative border-t border-tone-line px-5 py-5 sm:px-7">
          <Link
            href="/about"
            className="group flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Meet the team behind it
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </figure>
    </div>
  )
}
