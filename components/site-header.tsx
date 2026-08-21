'use client'

import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
  { label: 'Customer Testimonials', href: '/testimonials', shortLabel: 'Testimonials' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Past this point the full-width bar collapses into the floating pill.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => { setMenuOpen(false); setMobileDropdownOpen(false) }

  return (
    <header
      data-scrolled={scrolled ? '' : undefined}
      className={`nav-shell fixed inset-x-0 top-0 z-50 text-left ${
        scrolled ? 'px-4 pt-3' : 'border-b border-white/10 bg-background/80 backdrop-blur-xl'
      }`}
    >
      <div
        className={`nav-bar mx-auto flex items-center justify-between ${
          scrolled
            ? 'nav-glow h-14 max-w-4xl gap-6 rounded-full border border-white/10 bg-background/70 pl-6 pr-2.5 backdrop-blur-xl'
            : 'h-20 max-w-5xl gap-8 rounded-none border border-transparent px-6 lg:px-10'
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center" onClick={close}>
          <img src="/scale99-logo.png" alt="Scale99" className={`nav-logo w-auto ${scrolled ? 'h-6' : 'h-7'}`} />
        </Link>

        <nav className={`hidden items-center text-[0.83rem] font-medium text-white lg:flex ${scrolled ? 'gap-4' : 'gap-5'}`}>
          <Link href="/about" className="transition-colors hover:text-accent">About</Link>

          <div className="group relative">
            <button className="flex items-center gap-1.5 transition-colors hover:text-accent">
              What we do
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-5 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex w-52 flex-col gap-1 rounded-xl border border-white/10 bg-surface p-2 shadow-xl shadow-black/50">
                {whatWeDoLinks.map(link => (
                  <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 hover:text-accent">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition-colors hover:text-accent">
              {scrolled && link.shortLabel ? link.shortLabel : link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className={`flex items-center gap-2 whitespace-nowrap bg-accent font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 ${
              scrolled ? 'rounded-full px-4 py-2' : 'rounded-md px-4 py-2'
            }`}
          >
            Request Demo <ArrowRight size={15} />
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={`shrink-0 text-white lg:hidden ${scrolled ? 'pr-2' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className={`flex flex-col text-sm text-white lg:hidden ${
            scrolled
              ? 'mx-auto mt-2 max-w-4xl rounded-3xl border border-white/10 bg-background/90 px-6 py-4 backdrop-blur-xl'
              : 'border-t border-white/10 bg-background px-6 py-4'
          }`}
        >
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

          <Link href="/#contact" onClick={close} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-accent-foreground">
            Request Demo <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  )
}
