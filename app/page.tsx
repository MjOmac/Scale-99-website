'use client'

import { ArrowRight, Menu, X, Plus, Minus, Globe, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const services = [
  { number: '01', title: 'Automation Tools', text: 'We turn routine operational work—data entry, approvals, notifications, handoffs—into reliable, self-running processes.', tags: ['Workflow automation', 'Systems integration', 'Business-rule logic'] },
  { number: '02', title: 'CRM Solutions', text: 'CRM systems shaped around how your business actually sells, services, and retains clients—not the other way around.', tags: ['Pipeline tracking', 'Sector-specific setup', 'Reporting & dashboards'] },
  { number: '03', title: 'Database Management', text: 'The data infrastructure underneath your operations, built so everything on top of it—CRM, reporting, automation—is reliable.', tags: ['Database architecture', 'Migration & cleanup', 'Backup & security'] },
  { number: '04', title: 'Custom Software Development', text: 'Bespoke software for use cases off-the-shelf tools cannot serve—from internal tools to full platforms.', tags: ['Requirements & scoping', 'Full-stack development', 'Post-launch support'] },
  { number: '05', title: 'UI/UX Design', text: 'In-house design for every product we build, so it is not just functional—it is genuinely usable and on-brand.', tags: ['User research', 'Wireframing & prototyping', 'Design systems'] },
  { number: '06', title: 'Websites & SEO', text: 'A fast-turnaround marketing website with real SEO foundations, built to run alongside your larger platform work.', tags: ['Web design & development', 'Technical SEO', 'Performance optimization'] },
]

const stats = [
  { headline: 'Fast', label: 'Delivery & shipping', detail: 'From kickoff to launch in weeks, not quarters—no drawn-out timelines.', accent: false },
  { headline: 'Responsive', label: 'Customer service', detail: 'A dedicated team that answers before you have to ask twice.', accent: true },
  { headline: 'Simpler', label: 'Fewer steps, more work', detail: 'Fewer handoffs and approvals—systems that just run on their own.', accent: false },
]

const industries = [
  { title: 'Financial services', text: 'Build trust into every interaction.', tone: 'from-orange-500/40 via-zinc-900 to-zinc-950' },
  { title: 'Healthcare', text: 'Make complexity feel simple.', tone: 'from-slate-500/40 via-zinc-900 to-zinc-950' },
  { title: 'Technology', text: 'Move from next to now.', tone: 'from-orange-950 via-zinc-900 to-zinc-950' },
]

const insights = [
  { type: 'Perspective', title: 'The operating model is the product.', date: '06.12.26' },
  { type: 'Field notes', title: 'What scale actually feels like.', date: '05.28.26' },
  { type: 'Briefing', title: 'The new rules of useful AI.', date: '05.14.26' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center"><img src="/scale99-logo.png" alt="Scale99" className="h-7 w-auto" /></a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">What we do</a>
            <a href="#work" className="transition-colors hover:text-foreground">Our work</a>
            <a href="#insights" className="transition-colors hover:text-foreground">Insights</a>
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Let&apos;s talk</a>
            <a href="#contact" className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Request Demo <ArrowRight size={15} /></a>
          </div>
          <button aria-label="Toggle navigation" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-sm md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>What we do</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a><a className="text-accent" href="#contact" onClick={() => setMenuOpen(false)}>Request Demo <ArrowRight className="ml-2 inline" size={15} /></a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[780px] items-end overflow-hidden border-b border-white/10 px-6 pb-20 pt-20 lg:min-h-[880px] lg:px-10 lg:pb-28 lg:pt-24">
        <img src="/scale99-hero-shooting-star.jpeg" alt="Shooting star streaking across the night sky" className="absolute inset-0 h-full w-full object-cover object-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-4xl"><p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent"><span className="h-px w-8 bg-accent" />Systems for what&apos;s next</p><h1 className="font-heading text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">No one gets <br />your business<br /><span className="text-accent">better than us.</span></h1><p className="mt-8 max-w-xl text-pretty text-lg leading-7 text-muted-foreground sm:text-xl">We engineer the systems, experiences, and momentum that move ambitious businesses forward.</p><div className="mt-10 flex flex-wrap gap-4"><a href="#contact" className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Set Up a Free Consultation <ArrowRight size={16} /></a><a href="#work" className="flex items-center gap-3 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-foreground">View Our Case Studies <ArrowRight size={16} /></a></div></div>
          <div className="mt-20 grid w-full grid-cols-3 gap-8 border-t border-white/20 pt-5 lg:gap-16">{stats.map(stat => <div key={stat.label} className="group cursor-default"><p className={`font-heading text-2xl font-semibold transition-colors ${stat.accent ? 'text-accent' : 'text-foreground'}`}>{stat.headline}</p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p><span className="block max-h-0 overflow-hidden text-xs leading-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">{stat.detail}</span></div>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-surface px-6 py-8 lg:px-10"><div className="absolute inset-0 bg-grid opacity-15" /><div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"><span className="text-foreground/70">Trusted by teams at</span><span>Northstar</span><span>Vertex</span><span>Meridian</span><span>Atlas Group</span></div></section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">What we do</p><h2 className="mt-5 max-w-md font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Software systems built to scale your business.</h2><p className="mt-6 max-w-sm leading-7 text-muted-foreground">Automation, CRM, data, custom builds, design, and web—delivered by one team, start to finish.</p></div><div className="divide-y divide-white/10 border-y border-white/10">{services.map((service, i) => <button key={service.number} onClick={() => setActiveService(i)} className="group flex w-full items-start gap-5 py-7 text-left"><span className={`font-mono text-xs transition-colors ${activeService === i ? 'text-accent' : 'text-muted-foreground'}`}>{service.number}</span><span className="flex-1"><span className="flex items-center justify-between gap-4"><span className="font-heading text-xl font-semibold">{service.title}</span>{activeService === i ? <Minus className="text-accent shrink-0" size={18} /> : <Plus className="text-muted-foreground shrink-0" size={18} />}</span><span className={`block max-w-lg overflow-hidden text-sm leading-6 text-muted-foreground transition-all ${activeService === i ? 'mt-4 max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>{service.text}<span className="mt-4 flex flex-wrap gap-2">{service.tags.map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs">{tag}</span>)}</span></span></span></button>)}</div></div></section>

      <section id="work" className="border-y border-white/10 bg-surface px-6 py-28 lg:px-10 lg:py-36"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Where we&apos;ve made momentum</p><h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Built for the real world.</h2></div><a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-accent">Explore our work <ArrowRight size={16} /></a></div><div className="mt-14 grid gap-5 md:grid-cols-3">{industries.map((item) => <article key={item.title} className={`group relative flex min-h-96 flex-col justify-end overflow-hidden rounded-md bg-gradient-to-br ${item.tone} p-7`}><div className="absolute inset-0 bg-grid opacity-20 transition-opacity group-hover:opacity-40" /><div className="relative"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Scale99 / 2026</p><h3 className="font-heading text-2xl font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.text}</p><ArrowRight className="mt-7 text-accent transition-transform group-hover:translate-x-2" size={20} /></div></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><div className="grid items-center gap-12 lg:grid-cols-2"><div className="relative min-h-96 overflow-hidden rounded-md bg-gradient-to-br from-orange-500/50 via-zinc-900 to-zinc-950"><div className="absolute inset-0 bg-grid opacity-30" /><div className="absolute bottom-8 left-8 right-8 rounded border border-white/15 bg-background/80 p-5 backdrop-blur"><div className="flex items-end justify-between"><div><p className="text-xs text-muted-foreground">Operational lift</p><p className="mt-1 font-heading text-4xl font-semibold text-accent">+42%</p></div><div className="flex items-end gap-1">{[30, 48, 42, 65, 58, 84, 75, 96].map((h, i) => <span key={i} className="w-3 bg-accent/70" style={{ height: `${h}px` }} />)}</div></div></div></div><div><p className="eyebrow">Featured case study</p><h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">A new operating system for growth.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">For a global financial services leader, we replaced fragmented workflows with one intelligent platform—giving every team the clarity to move faster.</p><a href="#contact" className="mt-8 flex w-fit items-center gap-3 text-sm font-semibold text-accent">Read the case study <ArrowRight size={16} /></a></div></div></section>

      <section className="border-y border-white/10 bg-accent px-6 py-24 text-accent-foreground lg:px-10 lg:py-32"><div className="mx-auto max-w-5xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-70">A better way forward</p><blockquote className="mt-8 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">&quot;Scale99 gave us the confidence to make the decisions we had been putting off.&quot;</blockquote><p className="mt-8 text-sm font-semibold">— Maya Chen, Chief Operating Officer, Meridian</p></div></section>

      <section id="insights" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="flex items-end justify-between"><div><p className="eyebrow">From the field</p><h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Useful thinking.</h2></div><a href="#insights" className="hidden items-center gap-2 text-sm font-semibold text-accent sm:flex">All insights <ArrowRight size={16} /></a></div><div className="mt-14 grid gap-5 md:grid-cols-3">{insights.map(item => <article key={item.title} className="group rounded-md border border-white/10 bg-surface p-7 transition-colors hover:border-accent/40"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.type}</p><h3 className="mt-5 font-heading text-2xl font-semibold leading-tight transition-colors group-hover:text-accent">{item.title}</h3><div className="mt-12 flex items-center justify-between text-xs text-muted-foreground"><span>{item.date}</span><ArrowRight size={16} className="text-accent transition-transform group-hover:translate-x-1" /></div></article>)}</div></section>

      <section id="contact" className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="eyebrow">Start a conversation</p><h2 className="mt-5 max-w-2xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">Ready to build<br />what&apos;s next<span className="text-accent">?</span></h2></div><a href="mailto:hello@scale99.com" className="flex w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">Request Demo <ArrowRight size={16} /></a></div></section>

      <footer className="border-t border-white/10 px-6 py-12 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"><a href="#top" className="flex items-center"><img src="/scale99-logo.png" alt="Scale99" className="h-6 w-auto" /></a><nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"><a href="#services" className="transition-colors hover:text-foreground">What we do</a><a href="#work" className="transition-colors hover:text-foreground">Our work</a><a href="#insights" className="transition-colors hover:text-foreground">Insights</a><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></nav><div className="flex gap-4 text-muted-foreground"><a href="#contact" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Globe size={16} /></a><a href="#contact" aria-label="Twitter" className="transition-colors hover:text-foreground"><MessageCircle size={16} /></a></div></div><div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Scale99. Engineered for momentum.</p><a href="mailto:hello@scale99.com" className="transition-colors hover:text-foreground">hello@scale99.com</a></div></div></footer>
    </main>
  )
}
