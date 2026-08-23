import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/lib/products-data'

const stats = [
  { headline: 'Fast', label: 'Delivery & shipping', detail: 'From kickoff to launch in weeks, not quarters—no drawn-out timelines.', accent: false },
  { headline: 'Responsive', label: 'Customer service', detail: 'A dedicated team that answers before you have to ask twice.', accent: true },
  { headline: 'Simpler', label: 'Fewer steps, more work', detail: 'Fewer handoffs and approvals—systems that just run on their own.', accent: false },
]

const aboutPoints = [
  { title: 'One team, start to finish', text: 'Strategy, design, and development under one roof—no stalling on a handoff to another vendor.' },
  { title: 'Built around your process', text: 'Every engagement starts with how your business actually works, not a generic template.' },
  { title: 'Built to grow with you', text: 'Systems designed to scale with the business, not be replaced in two years.' },
]

const services = [
  { number: '01', title: 'Automation Tools' },
  { number: '02', title: 'CRM Solutions' },
  { number: '03', title: 'Database Management' },
  { number: '04', title: 'Custom Software' },
  { number: '05', title: 'UI/UX Design' },
  { number: '06', title: 'Websites & SEO' },
]

const work = [
  { client: 'Meridian', title: 'A new operating system for growth.', stat: '+42%', statLabel: 'Operational lift', tone: 'from-orange-500/40 via-zinc-900 to-zinc-950' },
  { client: 'Northstar Financial', title: 'Four CRMs consolidated into one.', stat: '1', statLabel: 'System of record', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
  { client: 'Atlas Group', title: 'Overhead cut through automation.', stat: '-33%', statLabel: 'Operational overhead', tone: 'from-orange-950 via-zinc-900 to-zinc-950' },
]

const testimonials = [
  { quote: 'Scale99 gave us the confidence to make the decisions we had been putting off.', name: 'Maya Chen', role: 'Chief Operating Officer, Meridian' },
  { quote: 'The automation work paid for itself in the first quarter. Our team stopped doing the parts of the job nobody wanted to do.', name: 'Daniel Osei', role: 'VP Operations, Northstar' },
]

const faqs = [
  { q: 'What does Scale 99 actually do?', a: 'We\'re a software solutions company delivering customized software for mid-sized and well-established enterprises—automation, CRM, database infrastructure, custom software, design, and web, all under one roof.' },
  { q: 'How is this different from hiring a typical software agency?', a: 'Strategy, design, and development sit under one roof. A service like automation or CRM does not stall waiting on a handoff to a different vendor, and every engagement starts with how your business actually works—not a generic template.' },
  { q: 'What industries do you work with?', a: 'We have experience across regulated and relationship-intensive sectors—medical & pharmaceutical, construction & furnishing, education, event & venue management, and marketing agencies.' },
  { q: 'Do you build custom software, or configure existing platforms?', a: 'Both. Some engagements need a custom CRM build or a bespoke platform; others just need an existing tool configured to match your sales or service process. We scope to what actually fits.' },
  { q: 'What happens after launch?', a: 'Post-launch support and iteration are part of the engagement, not an upsell—along with ongoing monitoring and refinement as your processes evolve.' },
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background text-center text-foreground">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section id="top" className="relative flex min-h-[620px] items-end overflow-hidden border-b border-white/10 px-6 pb-20 pt-16 lg:min-h-[700px] lg:px-10 lg:pb-24">
          {/* Decorative background. The still acts as the poster, covering the
              buffer window and standing in if the video can't play at all. */}
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
            autoPlay
            muted
            loop
            playsInline
            poster="/scale99-hero-shooting-star.jpeg"
            aria-hidden="true"
          >
            <source src="/scale99-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative mx-auto w-full max-w-5xl">
            <p className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-8 bg-accent" />Systems for what&apos;s next<span className="h-px w-8 bg-accent" />
            </p>
            <h1 className="font-heading text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              No one gets <br />your business<br /><span className="text-accent">better than us.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-7 text-muted-foreground sm:text-xl">
              We engineer the systems, experiences, and momentum that move ambitious businesses forward.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="#contact" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Set Up a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/case-studies" className="flex items-center gap-3 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">
                View Our Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Trusted by ───────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-surface px-6 py-8 lg:px-10">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-foreground/70">Trusted by teams at</span>
            <span>Northstar</span>
            <span>Vertex</span>
            <span>Meridian</span>
            <span>Atlas Group</span>
          </div>
        </section>

        {/* ── Why us: flip "memory" cards ──────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-28">
          <p className="eyebrow">Why teams pick us</p>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Three things you&apos;ll notice.</h2>
          <p className="mx-auto mt-4 text-sm text-muted-foreground">Hover a card to see what it means in practice.</p>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div key={stat.label} tabIndex={0} className="mem mem-float h-56 rounded-md outline-none" style={{ animationDelay: `${i * 0.9}s` }}>
                <div className="mem-inner">
                  <div className="mem-face">
                    <span className="relative font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <p className={`relative mt-3 font-heading text-3xl font-semibold ${stat.accent ? 'text-accent' : 'text-foreground'}`}>{stat.headline}</p>
                    <p className="relative mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
                  </div>
                  <div className="mem-face mem-back">
                    <p className="relative text-sm leading-6 text-muted-foreground">{stat.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section id="about" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">About Scale99</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              One team. Every system your business needs to grow.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              Scale99 delivers customized software for mid-sized and well-established enterprises—automation, CRM, database infrastructure, custom software, design, and web, brought together under one roof.
            </p>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {aboutPoints.map(point => (
                <div key={point.title} className="rounded-md border border-white/10 bg-background p-7">
                  <h3 className="font-heading text-lg font-semibold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section id="services" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">What we do</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Software systems built to scale your business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            Six services, delivered by one team from first conversation through post-launch support.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <Link
                key={service.number}
                href="/services"
                className="group flex flex-col items-center rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-xs text-accent">{service.number}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold transition-colors group-hover:text-accent">{service.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link href="/services" className="flex items-center gap-3 text-sm font-semibold text-accent">
              All services <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="flex items-center gap-3 text-sm font-semibold text-accent">
              See the {products.length} products we&apos;ve shipped <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Work: portfolio + case studies ───────────────────── */}
        <section id="work" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Our work</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Where the systems actually paid off.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {work.map(item => (
                <Link
                  key={item.client}
                  href="/case-studies"
                  className={`group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br ${item.tone} p-7`}
                >
                  <div className="absolute inset-0 bg-grid opacity-20 transition-opacity group-hover:opacity-40" />
                  <div className="relative">
                    <p className="font-heading text-4xl font-semibold text-accent">{item.stat}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.statLabel}</p>
                    <h3 className="mt-6 font-heading text-lg font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.client}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link href="/case-studies" className="flex items-center gap-3 text-sm font-semibold text-accent">
                Read the case studies <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="flex items-center gap-3 text-sm font-semibold text-accent">
                Browse the portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────── */}
        <section id="testimonials" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">Customer testimonials</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A better way forward.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {testimonials.map(t => (
              <blockquote key={t.name} className="rounded-md border border-white/10 bg-surface p-8">
                <p className="font-heading text-xl font-semibold leading-snug tracking-tight">&quot;{t.quote}&quot;</p>
                <footer className="mt-6 text-sm font-semibold text-accent">
                  — {t.name}, <span className="font-normal text-muted-foreground">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <Link href="/testimonials" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
            All testimonials <ArrowRight size={16} />
          </Link>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Common questions.</h2>
            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {faqs.map(faq => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-center gap-3 font-heading text-lg font-semibold marker:content-none">
                    {faq.q}
                    <ChevronDown className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" size={18} />
                  </summary>
                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ──────────────────────────────────────── */}
        <section id="contact" className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Ready to build<br />what&apos;s next<span className="text-accent">?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
              Tell us what your business is trying to do. We&apos;ll tell you what it would actually take.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:hello@scale99.com" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Set Up a Free Consultation <ArrowRight size={16} />
              </a>
              <Link href="/products" className="flex items-center gap-3 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">
                Explore our products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
