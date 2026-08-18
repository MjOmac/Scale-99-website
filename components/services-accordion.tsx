'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const services = [
  { number: '01', title: 'Automation Tools', text: 'We turn routine operational work—data entry, approvals, notifications, handoffs—into reliable, self-running processes.', tags: ['Workflow automation', 'Systems integration', 'Business-rule logic'] },
  { number: '02', title: 'CRM Solutions', text: 'CRM systems shaped around how your business actually sells, services, and retains clients—not the other way around.', tags: ['Pipeline tracking', 'Sector-specific setup', 'Reporting & dashboards'] },
  { number: '03', title: 'Database Management', text: 'The data infrastructure underneath your operations, built so everything on top of it—CRM, reporting, automation—is reliable.', tags: ['Database architecture', 'Migration & cleanup', 'Backup & security'] },
  { number: '04', title: 'Custom Software Development', text: 'Bespoke software for use cases off-the-shelf tools cannot serve—from internal tools to full platforms.', tags: ['Requirements & scoping', 'Full-stack development', 'Post-launch support'] },
  { number: '05', title: 'UI/UX Design', text: 'In-house design for every product we build, so it is not just functional—it is genuinely usable and on-brand.', tags: ['User research', 'Wireframing & prototyping', 'Design systems'] },
  { number: '06', title: 'Websites & SEO', text: 'A fast-turnaround marketing website with real SEO foundations, built to run alongside your larger platform work.', tags: ['Web design & development', 'Technical SEO', 'Performance optimization'] },
]

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-5 max-w-md font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Software systems built to scale your business.</h2>
        <p className="mt-6 max-w-sm leading-7 text-muted-foreground">Automation, CRM, data, custom builds, design, and web—delivered by one team, start to finish.</p>
      </div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {services.map((service, i) => (
          <button key={service.number} onClick={() => setActiveService(i)} className="group flex w-full items-start gap-5 py-7 text-left">
            <span className={`font-mono text-xs transition-colors ${activeService === i ? 'text-accent' : 'text-muted-foreground'}`}>{service.number}</span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-4">
                <span className="font-heading text-xl font-semibold">{service.title}</span>
                {activeService === i ? <Minus className="shrink-0 text-accent" size={18} /> : <Plus className="shrink-0 text-muted-foreground" size={18} />}
              </span>
              <span className={`block max-w-lg overflow-hidden text-sm leading-6 text-muted-foreground transition-all ${activeService === i ? 'mt-4 max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
                {service.text}
                <span className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map(tag => <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs">{tag}</span>)}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
