'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const aboutLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Customer Testimonials', href: '/testimonials' },
]

const whatWeDoLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Software', href: '/software' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Websites', href: '/websites' },
  { label: 'Industries', href: '/industries' },
]

type MenuKey = 'about' | 'work' | null

export function SiteHeader() {
  const [open, setOpen] = useState<MenuKey>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Click-to-toggle (not hover) so the same interaction works on touch and
  // desktop alike, since the pill has no separate mobile layout.
  useEffect(() => {
    if (!open) return
    const onOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const toggle = (key: MenuKey) => setOpen(prev => (prev === key ? null : key))
  const close = () => setOpen(null)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 text-left">
      <div
        ref={navRef}
        className="nav-glow nav-pill relative flex w-full shrink-0 items-center justify-between gap-1 rounded-full border border-white/10 bg-background/75 py-2 pl-2.5 pr-1.5 backdrop-blur-xl lg:inline-flex lg:w-auto lg:justify-start lg:gap-14 lg:pl-14 lg:pr-6"
      >
        <Link href="/" onClick={close} className="flex shrink-0 items-center">
          {/* The logo's ink sits visually lower than the nav text's cap-height
              even though their boxes share the same center — a font-metrics
              vs. image quirk, not a layout bug. Nudge it up to compensate. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- next/image adds no benefit here since images.unoptimized is set */}
          <img src="/scale99-logo.png" alt="Scale99" className="h-4 w-auto -translate-y-[1px] lg:h-6 lg:-translate-y-[2px]" />
        </Link>

        <NavDivider />

        <NavMenu label="About" items={aboutLinks} menuKey="about" open={open} toggle={toggle} close={close} />

        <NavDivider />

        <NavMenu label="What we do" shortLabel="Work" items={whatWeDoLinks} menuKey="work" open={open} toggle={toggle} close={close} />

        <NavDivider />

        <div className="shrink-0">
          <Link
            href="/blog"
            onClick={close}
            className="-mx-2.5 -my-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.68rem] font-medium text-white transition-colors hover:bg-white/10 hover:text-accent lg:-mx-3 lg:-my-1.5 lg:px-3 lg:py-1.5 lg:text-[0.83rem]"
          >
            Blog
          </Link>
        </div>

        <Link
          href="/#contact"
          onClick={close}
          className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-accent py-1.5 pl-2 pr-1.5 text-[0.68rem] font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 lg:gap-2 lg:py-2 lg:pl-4 lg:pr-3 lg:text-[0.8rem]"
        >
          <span className="lg:hidden">Talk</span>
          <span className="hidden lg:inline">Talk to us</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </header>
  )
}

function NavDivider() {
  return <span aria-hidden="true" className="hidden h-4 w-px shrink-0 bg-white/15 lg:block" />
}

function NavMenu({
  label, shortLabel, items, menuKey, open, toggle, close,
}: {
  label: string
  shortLabel?: string
  items: { label: string; href: string }[]
  menuKey: MenuKey
  open: MenuKey
  toggle: (key: MenuKey) => void
  close: () => void
}) {
  const isOpen = open === menuKey

  return (
    <div className="relative shrink-0">
      <button
        aria-expanded={isOpen}
        onClick={() => toggle(menuKey)}
        className={`-mx-2.5 -my-1 flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.68rem] font-medium text-white transition-colors hover:bg-white/10 hover:text-accent lg:-mx-3 lg:-my-1.5 lg:gap-1.5 lg:px-3 lg:py-1.5 lg:text-[0.83rem] ${
          isOpen ? 'bg-white/10 text-accent' : ''
        }`}
      >
        <span className="lg:hidden">{shortLabel ?? label}</span>
        <span className="hidden lg:inline">{label}</span>
        <ChevronDown size={12} className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute left-1/2 top-full w-48 -translate-x-1/2 pt-4 transition-all duration-150 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-surface p-2 shadow-xl shadow-black/50">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
