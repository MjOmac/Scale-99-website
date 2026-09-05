'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/**
 * "Who We Are" as a transport panel.
 *
 * The section used to lean on an oversized `"` glyph that read, happily by
 * accident, as a pause button. This builds the whole section around that
 * reading: the quote sits in white, held, until you press play — then it gets
 * narrated, each word picking up the accent as it's spoken, with the waveform
 * filling in behind it on exactly the same clock.
 *
 * Nothing here is real audio — it's a piece of stagecraft — so the whole thing
 * stays decorative and the one control is a plain, labelled button.
 */

const QUOTE = 'Software should fit the industry, not the other way around.'
const WORDS = QUOTE.split(' ')

/**
 * How long the highlight dwells on each word. Scaling with letter count and
 * adding a beat after punctuation is what keeps it from sounding metronomic —
 * "fit" and "industry," should not take the same time to say.
 */
const WORD_MS = WORDS.map(word => {
  const letters = word.replace(/[^A-Za-z]/g, '').length
  return 160 + letters * 54 + (/[,.]$/.test(word) ? 260 : 0)
})

// Cumulative start time per word, and the length of the whole read.
const STARTS: number[] = []
let cursor = 0
for (const ms of WORD_MS) {
  STARTS.push(cursor)
  cursor += ms
}
const TOTAL_MS = cursor

// Coarse enough to stay cheap, fine enough that the CSS transition on the
// waveform reads as continuous rather than stepped.
const TICK_MS = 100

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

function Waveform({ tone }: { tone: 'muted' | 'accent' }) {
  return (
    <div className="flex h-full w-full items-center gap-px sm:gap-[2px]">
      {BARS.map((height, i) => (
        <span
          key={i}
          className={`wm-bar flex-1 rounded-[1.5px] ${tone === 'accent' ? 'bg-accent' : 'bg-tone-dot'}`}
          style={{ height: `${height * 100}%`, animationDelay: `${-i * 0.055}s` }}
        />
      ))}
    </div>
  )
}

export function WhoWeAre() {
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  // Mirrors `elapsed` so the ticker can read the current position without
  // taking it as a dependency and restarting the interval every 100ms.
  const elapsedRef = useRef(0)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      const next = Math.min(TOTAL_MS, elapsedRef.current + TICK_MS)
      elapsedRef.current = next
      setElapsed(next)
      // Stops at the end of the read rather than looping, and holds the
      // fully-narrated state until someone asks for it again.
      if (next >= TOTAL_MS) {
        window.clearInterval(id)
        setPlaying(false)
      }
    }, TICK_MS)
    return () => window.clearInterval(id)
  }, [playing])

  function toggle() {
    if (playing) {
      setPlaying(false)
      return
    }
    if (elapsedRef.current >= TOTAL_MS) {
      elapsedRef.current = 0 // finished — start the read over
      setElapsed(0)
    }
    // Reduced motion still gets the end state — the quote fully narrated — it
    // just doesn't get the sweep there.
    if (reducedMotion.current) {
      elapsedRef.current = TOTAL_MS
      setElapsed(TOTAL_MS)
      return
    }
    setPlaying(true)
  }

  const progress = (elapsed / TOTAL_MS) * 100
  // Untouched, the quote sits entirely in white — the highlight only exists
  // once the read has been started at least once.
  const started = playing || elapsed > 0
  const spoken = started ? STARTS.filter(start => start <= elapsed).length : 0

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
            <span className={`h-1.5 w-1.5 rounded-full ${playing ? 'wm-dot bg-accent' : 'bg-tone-dot'}`} />
            {playing ? 'Playing' : 'Paused'}
          </div>
        </div>

        <div className="relative px-5 py-9 sm:px-7 sm:py-11">
          <div className="flex items-start gap-5 sm:gap-7">
            {/* The pause bars, doing double duty as the opening quotation mark
                and as the one control on the panel. */}
            <button
              type="button"
              onClick={toggle}
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
              {/* One span per word so the narration can colour them in turn.
                  The trailing space lives inside the span, which keeps normal
                  wrapping and keeps the sentence intact for screen readers. */}
              <blockquote className="text-balance font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-[2rem] sm:leading-[1.15]">
                {WORDS.map((word, i) => (
                  <span key={i} className={`wm-word ${i < spoken ? 'is-spoken' : ''}`}>
                    {word}
                    {i < WORDS.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-ink">
                — Scale 99.
              </figcaption>
            </div>
          </div>

          {/* The quote's "audio", on the same clock as the narration. Muted
              underneath, accent on top, revealed up to the playhead by a clip
              rather than by re-colouring 88 nodes every tick. */}
          <div aria-hidden="true" className={`wm-wave relative mt-9 h-12 w-full sm:h-16 ${playing ? 'is-live' : ''}`}>
            <Waveform tone="muted" />
            <div
              className="absolute inset-0 transition-[clip-path] duration-100 ease-linear"
              style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
            >
              <Waveform tone="accent" />
            </div>
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
