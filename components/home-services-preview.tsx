'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ServiceVideoStack } from '@/components/service-video-stack'
import { services } from '@/lib/services-data'

/**
 * Homepage teaser for /services. Same tab-list + chrome-window pairing as the
 * services page, but trimmed to the intro copy — the process and deliverables
 * stay on /services so this stays a preview rather than a duplicate page.
 *
 * The tabs are buttons, not links: clicking one swaps the panel in place. Only
 * the CTA inside the panel navigates.
 */
export function HomeServicesPreview() {
  const [active, setActive] = useState(0)
  const service = services[active]

  return (
    <div className="mt-14 grid gap-6 text-left lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
      <div className="scroll-fade-x flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {services.map((s, i) => (
          <button
            key={s.number}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full ${
              active === i
                ? 'border-accent/40 bg-tone-card text-accent-ink'
                : 'border-tone-line text-muted-foreground hover:border-white/25 hover:text-foreground'
            }`}
          >
            <span className={`font-mono text-xs ${active === i ? 'text-accent-ink/70' : 'text-muted-foreground/50'}`}>{s.number}</span>
            <span className="whitespace-nowrap lg:whitespace-normal">{s.title}</span>
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-tone-line bg-tone-card">
        <div className="flex items-center gap-1.5 border-b border-tone-line bg-tone-chrome px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-tone-dot" />
          <span className="h-2.5 w-2.5 rounded-full bg-tone-dot" />
          <span className="h-2.5 w-2.5 rounded-full bg-tone-dot" />
        </div>
        <div className="relative min-h-[240px] overflow-hidden">
          <ServiceVideoStack services={services} activeIndex={active} />
          {/* Scrim over the video. It has to fade to the *card's* fill rather
              than the page background, or it stops short of the panel edge
              once the section sits anywhere but the deepest tier. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, var(--tone-card), color-mix(in srgb, var(--tone-card) 50%, transparent), color-mix(in srgb, var(--tone-card) 10%, transparent))',
            }}
          />
          <div className="relative p-8 sm:p-10">
            <span className="font-mono text-xs text-accent-ink">{service.number}</span>
            <h3 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">{service.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{service.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="rounded-full border border-tone-line bg-tone-bg/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <Link href="/services" className="mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-accent-ink">
              Explore all six services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
