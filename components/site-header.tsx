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

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Partners', href: '/partners' },
  { label: 'Customer Testimonials', href: '/testimonials' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const close = () => { setMenuOpen(false); setMobileDropdownOpen(false) }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 text-left backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-5xl items-center justify-between gap-8 px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/scale99-logo.png" alt="Scale99" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-5 text-[0.83rem] font-medium text-white lg:flex">
          <Link href="/about" className="transition-colors hover:text-accent">About</Link>

          <div className="group relative">
            <button className="flex items-center gap-1.5 transition-colors hover:text-accent">
              What we do
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-5 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex w-52 flex-col gap-1 rounded-md border border-white/10 bg-surface p-2 shadow-xl shadow-black/40">
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

          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="nav-glow flex items-center gap-2 whitespace-nowrap rounded-md bg-accent px-4 py-2 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Request Demo <ArrowRight size={15} />
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="shrink-0 text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-white/10 bg-background px-6 py-4 text-sm text-white lg:hidden">
          <Link href="/about" onClick={close} className="py-3">About</Link>

          <button
            className="flex items-center justify-between py-3 text-left"
            aria-expanded={mobileDropdownOpen}
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            What we do
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileDropdownOpen && (
            <div className="flex flex-col border-l border-white/10 pl-4">
              {whatWeDoLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={close} className="py-2.5 text-muted-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={close} className="py-3">{link.label}</Link>
          ))}

          <Link
            href="/#contact"
            onClick={close}
            className="nav-glow mt-3 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-semibold text-accent-foreground"
          >
            Request Demo <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  )
}
