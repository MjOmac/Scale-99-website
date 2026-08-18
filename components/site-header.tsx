'use client'

import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const whatWeDoLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center">
          <img src="/scale99-logo.png" alt="Scale99" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white lg:flex">
          <Link href="/about" className="transition-colors hover:text-accent">About</Link>

          <div className="group relative">
            <button className="flex items-center gap-1.5 transition-colors hover:text-accent">
              What we do
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex w-56 flex-col gap-1 rounded-md border border-white/10 bg-surface p-2 shadow-xl shadow-black/40">
                {whatWeDoLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/products" className="transition-colors hover:text-accent">Products</Link>
          <Link href="/services" className="transition-colors hover:text-accent">Services</Link>
          <Link href="/partners" className="transition-colors hover:text-accent">Partners</Link>
          <Link href="/testimonials" className="whitespace-nowrap transition-colors hover:text-accent">Customer Testimonials</Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/#contact" className="text-sm text-white transition-colors hover:text-accent">Let&apos;s talk</Link>
          <Link href="/#contact" className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
            Request Demo <ArrowRight size={15} />
          </Link>
        </div>

        <button aria-label="Toggle navigation" className="text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-6 text-sm text-white lg:hidden">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2.5">About</Link>

          <button
            className="flex items-center justify-between py-2.5"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            What we do
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileDropdownOpen && (
            <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
              {whatWeDoLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-2 text-muted-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/products" onClick={() => setMenuOpen(false)} className="py-2.5">Products</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2.5">Services</Link>
          <Link href="/partners" onClick={() => setMenuOpen(false)} className="py-2.5">Partners</Link>
          <Link href="/testimonials" onClick={() => setMenuOpen(false)} className="py-2.5">Customer Testimonials</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="mt-3 flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
            Request Demo <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  )
}
