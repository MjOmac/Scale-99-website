import { AlertTriangle, ArrowRight, ArrowUpRight, ChevronDown, Lightbulb, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FlipStatCard } from '@/components/flip-stat-card'
import { HomeServicesPreview } from '@/components/home-services-preview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { products } from '@/lib/products-data'

const stats = [
  { headline: 'Fast', label: 'Delivery & shipping', detail: 'From kickoff to launch in weeks, not quarters—no drawn-out timelines.', accent: false },
  { headline: 'Responsive', label: 'Customer service', detail: 'A dedicated team that answers before you have to ask twice.', accent: true },
  { headline: 'Simpler', label: 'Fewer steps, more work', detail: 'Fewer handoffs and approvals—systems that just run on their own.', accent: false },
]

// The three products that lead the /software grid, and the one whose case study
// gets the full treatment further down the page.
const featuredProducts = products.slice(0, 3)
const featuredCaseStudy = products[0]

// Mirrors the first three cards on /websites.
const featuredWebsites = [
  { client: 'Lanyardy', category: 'Manufacturing & Print', image: '/websites/lanyardy.jpeg' },
  { client: 'Auckland Construction', category: 'Construction', image: '/websites/aucklandcd.jpeg' },
  { client: 'M&M Marketing', category: 'Marketing Agency', image: '/websites/mnmagency.jpeg' },
]

// Same coordinates as the interactive map on /industries — x is relationship
// intensity, y is how regulated the sector is.
const industryNodes = [
  { title: 'Medical & Pharmaceutical', x: 38, y: 90, count: 2 },
  { title: 'Education', x: 42, y: 68, count: 0 },
  { title: 'Construction & Furnishing', x: 72, y: 58, count: 3 },
  { title: 'Event & Venue', x: 85, y: 30, count: 0 },
  { title: 'Marketing Agencies', x: 68, y: 18, count: 1 },
]

const partners = [
  { name: 'Brightline Cloud', category: 'Infrastructure & hosting' },
  { name: 'Ledgerway', category: 'Payments & billing' },
  { name: 'Fieldstone Data', category: 'Data & analytics' },
  { name: 'Corsair CRM', category: 'CRM platform' },
]

const posts = [
  { type: 'Perspective', title: 'The operating model is the product.', date: '06.12.26' },
  { type: 'Field notes', title: 'What scale actually feels like.', date: '05.28.26' },
  { type: 'Briefing', title: 'The new rules of useful AI.', date: '05.14.26' },
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
        <section id="top" className="relative flex min-h-[480px] items-end overflow-hidden border-b border-white/10 px-6 pb-20 pt-24 lg:min-h-[560px] lg:px-10 lg:pb-24">
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
         
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <FlipStatCard
                key={stat.label}
                index={i}
                headline={stat.headline}
                label={stat.label}
                detail={stat.detail}
                accent={stat.accent}
                animationDelay={`${i * 0.9}s`}
              />
            ))}
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section id="about" className="relative overflow-hidden border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none font-heading text-[7rem] font-bold leading-none text-accent/10 sm:text-[10rem]">
            &quot;
          </p>
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">Who We Are</p>
            <blockquote className="mt-8">
              <p className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                &quot;Software should fit the industry, <span className="text-accent">not the other way around.</span>&quot;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">— Scale 99.</footer>
            </blockquote>
            <Link href="/about" className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Meet the team behind it <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Services → /services ─────────────────────────────
            Borrows the tab-list + chrome window pairing from the services page. */}
        <section id="services" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">What we do</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Software systems built to scale your business.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            Six services, delivered by one team from first conversation through post-launch support.
          </p>

          <HomeServicesPreview />
        </section>

        {/* ── Software → /software ─────────────────────────────
            Borrows the browser-chrome product cards from the software index. */}
        <section id="software" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Software</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built for real businesses. Proven in production.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              {products.length} products, each one born out of a real client engagement before it became something we offer anyone else.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {featuredProducts.map(product => (
                <Link
                  key={product.slug}
                  href={`/software/${product.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-background text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="relative overflow-hidden border-b border-white/10">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      {product.heroImage && (
                        <Image
                          src={product.heroImage}
                          alt={`${product.title} product screenshot`}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{product.category}</span>
                    <h3 className="mt-4 font-heading text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{product.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.shortExplanation}</p>
                    <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-accent">
                      Read case study <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/software" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
              See all {products.length} products <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Case study → /case-studies ───────────────────────
            Borrows the four-step flowchart from an individual case study page. */}
        <section id="work" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">Case studies</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Where the systems actually paid off.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            Every engagement runs the same four steps. Here&apos;s how it went for {featuredCaseStudy.title}.
          </p>

          <div className="mt-14 space-y-6 text-left">
            {[
              { heading: 'Client Profile', body: featuredCaseStudy.caseStudy.clientProfile, icon: Users },
              { heading: 'The Challenge', body: featuredCaseStudy.caseStudy.challenge, icon: AlertTriangle },
              { heading: 'The Solution', body: featuredCaseStudy.caseStudy.solution, icon: Lightbulb },
              { heading: 'The Results', body: featuredCaseStudy.caseStudy.results, icon: TrendingUp },
            ].map((step, i, arr) => (
              <div key={step.heading} className="relative flex items-start gap-5 sm:gap-6">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-accent shadow-lg shadow-accent/20">
                  <step.icon size={22} />
                </div>
                {i < arr.length - 1 && (
                  <>
                    <span className="absolute left-7 top-14 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-accent/60 to-accent/10" />
                    <ChevronDown className="absolute left-7 top-[3.5rem] -translate-x-1/2 text-accent/50" size={14} />
                  </>
                )}
                <div className="flex-1 rounded-md border border-white/10 bg-surface p-6 transition-colors hover:border-accent/30 sm:p-7">
                  <p className="font-mono text-xs text-accent">STEP {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 font-heading text-xl font-semibold">{step.heading}</h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/case-studies" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
            Read every case study <ArrowRight size={16} />
          </Link>
        </section>

        {/* ── Websites → /websites ─────────────────────────────
            Borrows the live-site mockup cards from the websites page. */}
        <section id="websites" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Websites</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built for the real world.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              Live sites we&apos;ve designed and shipped—from manufacturing and construction to marketing studios.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {featuredWebsites.map(site => (
                <Link
                  key={site.client}
                  href="/websites"
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-background text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="relative overflow-hidden border-b border-white/10">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={site.image}
                        alt={`${site.client} website mockup`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-heading text-base font-semibold leading-tight transition-colors group-hover:text-accent">{site.client}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{site.category}</p>
                    </div>
                    <ArrowUpRight className="shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent" size={16} />
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/websites" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
              See every site we&apos;ve built <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Industries → /industries ─────────────────────────
            Borrows the two-axis positioning map from the industries page. */}
        <section id="industries" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">Industries</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Sector experience where regulation and relationships matter most.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            Every sector needs different guardrails. We plot ours by how regulated the work is and how much it runs on relationships.
          </p>

          <Link
            href="/industries"
            className="group relative mt-14 block overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40 sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,106,0,0.08), transparent 70%)' }} />
            <div className="pointer-events-none absolute inset-0 plot-grid" />
            {/* Scatter plot (sm+): needs room labels won't collide in below ~640px. */}
            <div className="relative mx-auto hidden aspect-[16/9] max-w-2xl sm:block">
              <p className="absolute -top-1 left-1/2 -translate-x-1/2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                More regulated
              </p>
              <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.16) 15%, rgba(255,255,255,.16) 85%, transparent)' }} />
              <div className="absolute inset-y-0 left-1/2 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,.16) 15%, rgba(255,255,255,.16) 85%, transparent)' }} />
              {industryNodes.map(node => (
                <div key={node.title}>
                  <div className="pointer-events-none absolute bottom-0 border-l border-dashed border-white/10" style={{ left: `${node.x}%`, height: `${node.y}%` }} />
                  <div
                    className="pointer-events-none absolute border-t border-dashed border-white/10"
                    style={{ bottom: `${node.y}%`, left: `${Math.min(50, node.x)}%`, width: `${Math.abs(node.x - 50)}%` }}
                  />
                  <span className="absolute -translate-x-1/2 translate-y-1/2" style={{ left: `${node.x}%`, bottom: `${node.y}%` }}>
                    {node.count > 0 && (
                      <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-110" />
                    )}
                    <span
                      className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 font-mono text-[0.6rem] font-bold transition-transform duration-300 group-hover:scale-110 ${
                        node.count > 0 ? 'border-accent bg-background text-accent shadow-[0_0_10px_-2px_rgba(255,106,0,0.65)]' : 'border-dashed border-white/30 bg-background text-muted-foreground/60'
                      }`}
                    >
                      {node.count > 0 ? node.count : '+'}
                    </span>
                    <span className="absolute left-1/2 top-full mt-2 w-max max-w-[7rem] -translate-x-1/2 text-center text-[0.7rem] font-medium leading-tight text-foreground/80">
                      {node.title}
                    </span>
                  </span>
                </div>
              ))}
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />
            </div>
            {/* List (below sm): same nodes, no overlap risk. */}
            <div className="relative flex flex-col gap-2 sm:hidden">
              {industryNodes.map(node => (
                <span key={node.title} className="flex items-center gap-4 rounded-lg border border-white/10 bg-background/40 px-4 py-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[0.6rem] font-bold ${
                      node.count > 0 ? 'border-accent bg-background text-accent' : 'border-dashed border-white/30 bg-background'
                    }`}
                  >
                    {node.count > 0 ? node.count : ''}
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{node.title}</span>
                </span>
              ))}
            </div>
            <span className="relative mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-accent">
              Explore the map <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
            </span>
          </Link>
        </section>

        {/* ── Testimonials → /testimonials ─────────────────────── */}
        <section id="testimonials" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Customer testimonials</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A better way forward.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {testimonials.map(t => (
                <blockquote key={t.name} className="rounded-md border border-white/10 bg-background p-8">
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
          </div>
        </section>

        {/* ── Partners → /partners ─────────────────────────────── */}
        <section id="partners" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow">Partners</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built with a network we trust.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
            The platforms and infrastructure partners we integrate with when a project calls for it.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map(partner => (
              <Link
                key={partner.name}
                href="/partners"
                className="group flex min-h-40 flex-col items-center justify-center gap-3 rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40"
              >
                <p className="font-heading text-lg font-semibold transition-colors group-hover:text-accent">{partner.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{partner.category}</p>
              </Link>
            ))}
          </div>
          <Link href="/partners" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
            Meet our partners <ArrowRight size={16} />
          </Link>
        </section>

        {/* ── Blog → /blog ─────────────────────────────────────── */}
        <section id="blog" className="border-y border-white/10 bg-surface px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">From the field</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Useful thinking.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {posts.map(post => (
                <Link
                  key={post.title}
                  href="/blog"
                  className="group flex flex-col rounded-md border border-white/10 bg-background p-7 text-left transition-colors hover:border-accent/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{post.type}</p>
                  <h3 className="mt-5 font-heading text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{post.title}</h3>
                  <div className="mt-auto flex items-center gap-3 pt-10 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <ArrowRight size={16} className="text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="mx-auto mt-12 flex w-fit items-center gap-3 text-sm font-semibold text-accent">
              Read the blog <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Common questions.</h2>
            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {faqs.map(faq => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex list-none items-center justify-center gap-3 font-heading text-lg font-semibold marker:content-none">
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
              <a href="mailto:hello@scale-99.com" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Set Up a Free Consultation <ArrowRight size={16} />
              </a>
              <Link href="/software" className="flex items-center gap-3 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">
                Explore our software <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
