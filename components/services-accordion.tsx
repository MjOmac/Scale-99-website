'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'
import { services } from '@/lib/services-data'

export function ServicesAccordion() {
  const [active, setActive] = useState(0)
  const service = services[active]

  return (
    <div className="text-center">
      <p className="eyebrow">What we do</p>
      <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Software systems built to scale your business.</h2>
      <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">Automation, CRM, data, custom builds, design, and web—delivered by one team, start to finish.</p>

      <div className="mt-14 grid gap-6 text-left lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
        {/* Tab list — a left-hand sidebar on desktop, sticky below the floating nav so
            the active service can be switched without scrolling and without ever
            covering the content. Collapses to a horizontal scroll row on mobile. */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0">
          {services.map((s, i) => (
            <button
              key={s.number}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full ${
                active === i
                  ? 'border-accent/40 bg-surface text-accent'
                  : 'border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              <span className={`font-mono text-xs ${active === i ? 'text-accent/70' : 'text-muted-foreground/50'}`}>{s.number}</span>
              <span className="whitespace-nowrap lg:whitespace-normal">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Window — the active service's detail panel */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>

          {/* Top half: illustration video as a background behind the service intro */}
          <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 bg-background">
            <video key={service.heroVideo} className="absolute inset-0 h-full w-full object-cover object-center opacity-75" autoPlay muted loop playsInline aria-hidden="true">
              <source src={service.heroVideo} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />

            <div className="relative p-8 sm:p-10">
              <span className="font-mono text-xs text-accent">{service.number}</span>
              <h3 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">{service.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{service.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Our process</p>
                <ol className="mt-4 space-y-5">
                  {service.process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground">{p.step}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{p.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">What you get</p>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 shrink-0 text-accent" size={15} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
