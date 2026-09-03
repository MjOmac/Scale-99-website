'use client'

import { ArrowRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { JsonLd } from '@/components/json-ld'
import { getProductBySlug } from '@/lib/products-data'
import { SITE_NAME, SITE_URL } from '@/lib/site'

interface Industry {
  id: string
  title: string
  text: string
  x: number // 0-100, relationship intensity (low -> high)
  y: number // 0-100, regulation & structure (low -> high)
  productSlugs: string[]
}

const industries: Industry[] = [
  { id: 'medical', title: 'Medical & Pharmaceutical', text: 'Patient and practice systems built for accuracy, compliance, and the pace of a real clinic or medtech device.', x: 38, y: 90, productSlugs: ['clinic-crm', 'stereotactic-planning'] },
  { id: 'education', title: 'Education', text: 'Systems that keep administration out of the way of teaching—scheduling, records, and communication in one place.', x: 42, y: 68, productSlugs: [] },
  { id: 'construction', title: 'Construction & Furnishing', text: 'Project, tender, and contract tracking that keeps every job—and every client—on schedule and in the loop.', x: 72, y: 58, productSlugs: ['furniech', 'tendering', 'finishing-contracting-ai'] },
  { id: 'events', title: 'Event & Venue Management', text: 'Bookings, logistics, and client management in one place, built around how a venue actually runs a calendar.', x: 85, y: 30, productSlugs: [] },
  { id: 'marketing', title: 'Marketing Agencies', text: 'Client and campaign systems built for agency speed—from brand identity through scheduled, published content.', x: 68, y: 18, productSlugs: ['ai-marketing-automation'] },
]

export function IndustriesMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = industries.find(i => i.id === activeId) ?? null
  const matchedProducts = active ? active.productSlugs.map(slug => getProductBySlug(slug)).filter(p => p !== undefined) : []

  return (
    <div className="mt-16 text-left">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: industries.map((ind, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Thing',
              name: ind.title,
              description: ind.text,
              url: `${SITE_URL}/industries`,
            },
          })),
          name: `Industries served by ${SITE_NAME}`,
        }}
      />
      {/* ── The map (sm+): a scatter plot needs room labels won't collide in below ~640px. */}
      <div className="relative hidden overflow-hidden rounded-xl border border-white/10 bg-surface p-6 sm:block sm:p-10">
        {/* Soft accent glow behind the origin, plus a masked grid so the plot reads as a data surface, not a void. */}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,106,0,0.09), transparent 70%)' }} />
        <div className="pointer-events-none absolute inset-0 plot-grid" />

        <div className="relative mx-auto aspect-[16/9] max-w-3xl">
          {/* Axis labels */}
          <p className="absolute -top-2 left-1/2 -translate-x-1/2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            More regulated / structured
          </p>
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            More fast-moving / flexible
          </p>
          <p className="absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-full pr-4 text-right text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block" style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}>
            Transactional
          </p>
          <p className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full pl-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block" style={{ writingMode: 'vertical-rl' }}>
            Relationship-driven
          </p>

          {/* Quadrant crosshair, faded toward its tips so the origin reads as the focal point */}
          <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.16) 15%, rgba(255,255,255,.16) 85%, transparent)' }} />
          <div className="absolute inset-y-0 left-1/2 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,.16) 15%, rgba(255,255,255,.16) 85%, transparent)' }} />

          {/* Tick marks at the quarter points of each axis */}
          {[25, 75].map(pos => (
            <div key={`tx${pos}`} className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-white/15" style={{ left: `${pos}%` }} />
          ))}
          {[25, 75].map(pos => (
            <div key={`ty${pos}`} className="absolute left-1/2 h-px w-2 -translate-x-1/2 bg-white/15" style={{ bottom: `${pos}%` }} />
          ))}

          {/* Nodes, each grounded to both axes by a dotted drop-guide */}
          {industries.map(ind => {
            const isActive = ind.id === activeId
            const hasProducts = ind.productSlugs.length > 0
            const guideOpacity = isActive ? 'border-accent/50' : 'border-white/10'
            return (
              <div key={ind.id}>
                <div
                  className={`pointer-events-none absolute bottom-0 border-l border-dashed transition-colors duration-300 ${guideOpacity}`}
                  style={{ left: `${ind.x}%`, height: `${ind.y}%` }}
                />
                <div
                  className={`pointer-events-none absolute border-t border-dashed transition-colors duration-300 ${guideOpacity}`}
                  style={{
                    bottom: `${ind.y}%`,
                    left: `${Math.min(50, ind.x)}%`,
                    width: `${Math.abs(ind.x - 50)}%`,
                  }}
                />
                <button
                  onClick={() => setActiveId(prev => (prev === ind.id ? null : ind.id))}
                  className="group absolute -translate-x-1/2 translate-y-1/2 outline-none"
                  style={{ left: `${ind.x}%`, bottom: `${ind.y}%` }}
                >
                  <span
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                      isActive ? 'h-16 w-16 bg-accent/15' : hasProducts ? 'h-9 w-9 bg-accent/10 group-hover:h-11 group-hover:w-11 group-hover:bg-accent/15' : 'h-4 w-4 bg-transparent group-hover:h-10 group-hover:w-10 group-hover:bg-accent/10'
                    }`}
                  />
                  <span
                    className={`relative flex items-center justify-center rounded-full border-2 font-mono text-[0.6rem] font-bold transition-all duration-300 ${
                      isActive
                        ? 'h-7 w-7 border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/40'
                        : hasProducts
                          ? 'h-5 w-5 border-accent bg-background text-accent shadow-[0_0_10px_-2px_rgba(255,106,0,0.65)] group-hover:h-6 group-hover:w-6'
                          : 'h-5 w-5 border-dashed border-white/30 bg-background text-muted-foreground/60 group-hover:border-white/50'
                    }`}
                  >
                    {hasProducts ? ind.productSlugs.length : '+'}
                  </span>
                  <span className={`pointer-events-none absolute left-1/2 top-full mt-2 w-max max-w-[7.5rem] -translate-x-1/2 text-center text-xs font-medium leading-tight transition-colors sm:max-w-[9rem] ${isActive ? 'text-accent' : 'text-foreground/80 group-hover:text-foreground'}`}>
                    {ind.title}
                  </span>
                </button>
              </div>
            )
          })}

          {/* Origin marker */}
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />
        </div>
      </div>

      {/* ── The list (below sm): same nodes, same tap-to-select behavior, no overlap risk. */}
      <div className="flex flex-col gap-2 sm:hidden">
        {industries.map(ind => {
          const isActive = ind.id === activeId
          const hasProducts = ind.productSlugs.length > 0
          return (
            <button
              key={ind.id}
              onClick={() => setActiveId(prev => (prev === ind.id ? null : ind.id))}
              aria-pressed={isActive}
              className={`flex w-full items-center gap-4 rounded-lg border px-4 py-3 text-left transition-colors ${
                isActive ? 'border-accent/40 bg-surface' : 'border-white/10 bg-surface/50'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs font-bold ${
                  isActive
                    ? 'border-accent bg-accent text-accent-foreground'
                    : hasProducts
                      ? 'border-accent bg-background text-accent'
                      : 'border-dashed border-white/30 bg-background text-muted-foreground/60'
                }`}
              >
                {hasProducts ? ind.productSlugs.length : ''}
              </span>
              <span className={`text-sm font-medium ${isActive ? 'text-accent' : 'text-foreground/80'}`}>{ind.title}</span>
            </button>
          )
        })}
      </div>

      <p className="mx-auto mt-6 max-w-lg text-center text-xs leading-5 text-muted-foreground">
        Positioned by how regulated the sector is and how relationship-driven the work is. Numbered nodes have shipped products—click one to see them. A dashed node means we haven&apos;t built there yet.
      </p>

      {/* ── Detail panel ─────────────────────────────────────── */}
      {active && (
        <div className="mt-10 overflow-hidden rounded-xl border border-accent/30 bg-surface">
          <div className="border-b border-white/10 bg-accent/5 px-7 py-5 sm:px-9">
            <h2 className="font-heading text-2xl font-semibold">{active.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{active.text}</p>
          </div>

          <div className="p-7 sm:p-9">
            {matchedProducts.length > 0
              ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedProducts.map(product => (
                      <Link
                        key={product.slug}
                        href={`/software/${product.slug}`}
                        className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-background transition-colors hover:border-accent/40"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          {product.heroImage
                            ? (
                                <Image
                                  src={product.heroImage}
                                  alt={`${product.title} product screenshot`}
                                  fill
                                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                                />
                              )
                            : (
                                <div className="flex h-full w-full items-center justify-center bg-surface">
                                  <ImageIcon className="text-muted-foreground/40" size={22} />
                                </div>
                              )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading text-base font-semibold transition-colors group-hover:text-accent">{product.title}</h3>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{product.shortExplanation}</p>
                          <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-accent">
                            View case study <ArrowRight className="transition-transform group-hover:translate-x-1" size={12} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )
              : (
                  <div className="flex flex-col items-start gap-4 rounded-lg border border-dashed border-white/15 p-6">
                    <p className="text-sm leading-6 text-muted-foreground">
                      We haven&apos;t shipped a dedicated product for {active.title.toLowerCase()} yet—but it&apos;s the same team, same process, and the same habit of building around how you actually work.
                    </p>
                    <Link href="/#contact" className="flex items-center gap-2 text-sm font-semibold text-accent">
                      Talk to us about your sector <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
          </div>
        </div>
      )}
    </div>
  )
}
