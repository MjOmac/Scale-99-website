import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const stats = [
  { headline: 'Fast', label: 'Delivery & shipping', detail: 'From kickoff to launch in weeks, not quarters—no drawn-out timelines.', accent: false },
  { headline: 'Responsive', label: 'Customer service', detail: 'A dedicated team that answers before you have to ask twice.', accent: true },
  { headline: 'Simpler', label: 'Fewer steps, more work', detail: 'Fewer handoffs and approvals—systems that just run on their own.', accent: false },
]

const teasers = [
  { eyebrow: '01', title: 'Services', text: 'Automation, CRM, data, custom builds, design, and web—six services, one team.', href: '/services' },
  { eyebrow: '02', title: 'Products', text: 'Packaged solutions built the same way we build everything else.', href: '/products' },
  { eyebrow: '03', title: 'Industries', text: 'Sector-specific systems for regulated and relationship-intensive businesses.', href: '/industries' },
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
        <section id="top" className="relative flex min-h-[780px] items-end overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 lg:min-h-[880px] lg:px-10 lg:pb-28 lg:pt-36">
          {/* Decorative background. The still is both the poster (shown while the
              video buffers) and the substitute for anyone who prefers reduced motion. */}
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-65 motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster="/scale99-hero-shooting-star.jpeg"
            aria-hidden="true"
          >
            <source src="/scale99-hero-video.mp4" type="video/mp4" />
          </video>
          <img
            src="/scale99-hero-shooting-star.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover object-center opacity-65 motion-reduce:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative mx-auto w-full max-w-5xl">
            <p className="mb-7 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
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
            <div className="mx-auto mt-20 grid w-full grid-cols-3 gap-8 border-t border-white/20 pt-5 lg:gap-16">
              {stats.map(stat => (
                <div key={stat.label} className="group cursor-default">
                  <p className={`font-heading text-2xl font-semibold transition-colors ${stat.accent ? 'text-accent' : 'text-foreground'}`}>{stat.headline}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  <span className="block max-h-0 overflow-hidden text-xs leading-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className="mx-auto max-w-5xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="eyebrow">Where to start</p>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Everything under one roof.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {teasers.map(teaser => (
              <Link key={teaser.href} href={teaser.href} className="group flex flex-col items-center rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40">
                <span className="font-mono text-xs text-accent">{teaser.eyebrow}</span>
                <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-accent">{teaser.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{teaser.text}</p>
                <ArrowRight className="mt-7 text-accent transition-transform group-hover:translate-x-2" size={20} />
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="border-y border-white/10 bg-surface px-6 py-28 lg:px-10 lg:py-36">
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

        <section id="contact" className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                Ready to build<br />what&apos;s next<span className="text-accent">?</span>
              </h2>
            </div>
            <a href="mailto:hello@scale99.com" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
