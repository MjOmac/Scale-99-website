'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

interface Service {
  number: string
  title: string
  text: string
  tags: string[]
  process: { step: string; detail: string }[]
  deliverables: string[]
  heroVideo: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'Automation Tools',
    text: 'We turn routine operational work—data entry, approvals, notifications, handoffs—into reliable, self-running processes.',
    tags: ['Workflow automation', 'Systems integration', 'Business-rule logic'],
    process: [
      { step: 'Map the workflow', detail: 'We document every manual step, approval, and handoff in the current process before touching a line of code.' },
      { step: 'Build the automation', detail: 'Triggers, conditions, and actions are wired together to run the process automatically, with your business rules baked in.' },
      { step: 'Monitor & tune', detail: 'We watch the automation in production and adjust thresholds and edge cases as real data comes in.' },
    ],
    deliverables: ['End-to-end workflow map', 'Live automation, deployed and monitored', 'Handoff documentation for your team'],
    heroVideo: '/services/automation-tools.mp4',
  },
  {
    number: '02',
    title: 'CRM Solutions',
    text: 'CRM systems shaped around how your business actually sells, services, and retains clients—not the other way around.',
    tags: ['Pipeline tracking', 'Sector-specific setup', 'Reporting & dashboards'],
    process: [
      { step: 'Understand the pipeline', detail: 'We study how deals, patients, or projects actually move through your business, stage by stage.' },
      { step: 'Configure or build', detail: 'We set up an existing CRM or build a custom one—whichever fits your sales motion better.' },
      { step: 'Train & roll out', detail: 'Your team gets a system that matches how they already work, plus hands-on onboarding.' },
    ],
    deliverables: ['Configured or custom-built CRM', 'Reporting dashboards for leadership', 'Team onboarding & documentation'],
    heroVideo: '/services/crm-solutions.mp4',
  },
  {
    number: '03',
    title: 'Database Management',
    text: 'The data infrastructure underneath your operations, built so everything on top of it—CRM, reporting, automation—is reliable.',
    tags: ['Database architecture', 'Migration & cleanup', 'Backup & security'],
    process: [
      { step: 'Audit the data', detail: 'We assess your current data structure, quality, and where inconsistencies are causing downstream problems.' },
      { step: 'Design & migrate', detail: 'A clean schema is designed and your existing data is migrated and validated against it.' },
      { step: 'Secure & maintain', detail: 'Backups, access controls, and monitoring are put in place so the foundation stays reliable long-term.' },
    ],
    deliverables: ['Clean, documented database schema', 'Migrated & validated production data', 'Automated backup & security setup'],
    heroVideo: '/services/database-management.mp4',
  },
  {
    number: '04',
    title: 'Custom Software Development',
    text: 'Bespoke software for use cases off-the-shelf tools cannot serve—from internal tools to full platforms.',
    tags: ['Requirements & scoping', 'Full-stack development', 'Post-launch support'],
    process: [
      { step: 'Scope the build', detail: 'We define exactly what the software needs to do, for whom, and what "done" looks like before development starts.' },
      { step: 'Build in the open', detail: 'Development happens in visible sprints, with working software to review at every stage—not a black box until launch.' },
      { step: 'Support after launch', detail: 'Post-launch iteration and monitoring are part of the engagement, not a separate upsell.' },
    ],
    deliverables: ['Fully built & deployed software', 'Source code & technical documentation', 'Post-launch support window'],
    heroVideo: '/services/custom-software.mp4',
  },
  {
    number: '05',
    title: 'UI/UX Design',
    text: 'In-house design for every product we build, so it is not just functional—it is genuinely usable and on-brand.',
    tags: ['User research', 'Wireframing & prototyping', 'Design systems'],
    process: [
      { step: 'Research the user', detail: 'We start with who actually uses the product day to day, and what makes their job harder than it should be.' },
      { step: 'Wireframe & prototype', detail: 'Low-fidelity flows are tested and refined before a single pixel is polished, so structure is right first.' },
      { step: 'Design system handoff', detail: 'A reusable design system ships alongside the final screens, so the product stays consistent as it grows.' },
    ],
    deliverables: ['User flows & wireframes', 'High-fidelity UI screens', 'Reusable design system'],
    heroVideo: '/services/ui-ux-design.mp4',
  },
  {
    number: '06',
    title: 'Websites & SEO',
    text: 'A fast-turnaround marketing website with real SEO foundations, built to run alongside your larger platform work.',
    tags: ['Web design & development', 'Technical SEO', 'Performance optimization'],
    process: [
      { step: 'Plan the site', detail: 'We map out pages, messaging, and structure around what actually converts for your business.' },
      { step: 'Build & optimize', detail: 'The site is built fast, mobile-first, and with technical SEO foundations in place from day one.' },
      { step: 'Launch & track', detail: 'We launch with analytics and search tracking wired in, so you can see what is working.' },
    ],
    deliverables: ['Live, production-ready website', 'Technical SEO audit & fixes', 'Analytics & search console setup'],
    heroVideo: '/services/websites-seo.mp4',
  },
]

export function ServicesAccordion() {
  const [active, setActive] = useState(0)
  const service = services[active]

  return (
    <div className="text-center">
      <p className="eyebrow">What we do</p>
      <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Software systems built to scale your business.</h2>
      <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">Automation, CRM, data, custom builds, design, and web—delivered by one team, start to finish.</p>

      <div className="mt-14 grid gap-6 text-left lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
        {/* Tab list — a left-hand sidebar on desktop, sticky below the floating nav so
            the active service can be switched without scrolling and without ever
            covering the content. Collapses to a horizontal scroll row on mobile. */}
        <div className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0">
          {services.map((s, i) => (
            <button
              key={s.number}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full ${
                active === i
                  ? 'border-accent/40 bg-surface text-accent'
                  : 'border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              <span className={`font-mono text-xs ${active === i ? 'text-accent/70' : 'text-muted-foreground/50'}`}>{s.number}</span>
              <span className="whitespace-nowrap lg:whitespace-normal">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Window — the active service's detail panel */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>

          {/* Top half: illustration video as a background behind the service intro */}
          <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 bg-background">
            <video key={service.heroVideo} className="absolute inset-0 h-full w-full object-cover object-center opacity-75" autoPlay muted loop playsInline aria-hidden="true">
              <source src={service.heroVideo} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />

            <div className="relative p-8 sm:p-10">
              <span className="font-mono text-xs text-accent">{service.number}</span>
              <h3 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">{service.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{service.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Our process</p>
                <ol className="mt-4 space-y-5">
                  {service.process.map((p, i) => (
                    <li key={p.step} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground">{p.step}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{p.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">What you get</p>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 shrink-0 text-accent" size={15} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
