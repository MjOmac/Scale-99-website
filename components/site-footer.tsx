import { Globe, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center">
            <img src="/scale99-logo.png" alt="Scale99" className="h-6 w-auto" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
            <Link href="/products" className="transition-colors hover:text-foreground">Products</Link>
            <Link href="/portfolio" className="transition-colors hover:text-foreground">Portfolio</Link>
            <Link href="/case-studies" className="transition-colors hover:text-foreground">Case Studies</Link>
            <Link href="/industries" className="transition-colors hover:text-foreground">Industries</Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link>
            <Link href="/partners" className="transition-colors hover:text-foreground">Partners</Link>
            <Link href="/testimonials" className="transition-colors hover:text-foreground">Testimonials</Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground">Contact</Link>
          </nav>
          <div className="flex justify-center gap-4 text-muted-foreground">
            <a href="/#contact" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Globe size={16} /></a>
            <a href="/#contact" aria-label="Twitter" className="transition-colors hover:text-foreground"><MessageCircle size={16} /></a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <p>© 2026 Scale99. Engineered for momentum.</p>
          <a href="mailto:hello@scale99.com" className="transition-colors hover:text-foreground">hello@scale99.com</a>
        </div>
      </div>
    </footer>
  )
}
