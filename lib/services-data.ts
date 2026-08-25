// Shared source for the /services page and the homepage 'What we do' preview.
// Editing a service here updates both.

export interface Service {
  number: string
  title: string
  text: string
  tags: string[]
  process: { step: string; detail: string }[]
  deliverables: string[]
  heroVideo: string
}

export const services: Service[] = [
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
