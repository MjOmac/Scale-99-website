'use client'

import { ArrowRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { getProductBySlug } from '@/lib/products-data'

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
      {/* ── The map ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 sm:p-10">
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative mx-auto aspect-[16/10] max-w-3xl">
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

          {/* Quadrant crosshair */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />

          {/* Nodes */}
          {industries.map(ind => {
            const isActive = ind.id === activeId
            const hasProducts = ind.productSlugs.length > 0
            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(prev => (prev === ind.id ? null : ind.id))}
                className="group absolute -translate-x-1/2 translate-y-1/2 outline-none"
                style={{ left: `${ind.x}%`, bottom: `${ind.y}%` }}
              >
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    isActive ? 'h-16 w-16 bg-accent/15' : 'h-4 w-4 bg-transparent group-hover:h-10 group-hover:w-10 group-hover:bg-accent/10'
                  }`}
                />
                <span
                  className={`relative flex items-center justify-center rounded-full border-2 font-mono text-[0.6rem] font-bold transition-all duration-300 ${
                    isActive
                      ? 'h-7 w-7 border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/40'
                      : hasProducts
                        ? 'h-5 w-5 border-accent bg-background text-accent group-hover:h-6 group-hover:w-6'
                        : 'h-5 w-5 border-dashed border-white/30 bg-background text-muted-foreground/60 group-hover:border-white/50'
                  }`}
                >
                  {hasProducts ? ind.productSlugs.length : ''}
                </span>
                <span className={`pointer-events-none absolute left-1/2 top-full mt-2 w-max max-w-[7.5rem] -translate-x-1/2 text-center text-xs font-medium leading-tight transition-colors sm:max-w-[9rem] ${isActive ? 'text-accent' : 'text-foreground/80 group-hover:text-foreground'}`}>
                  {ind.title}
                </span>
              </button>
            )
          })}
        </div>
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
