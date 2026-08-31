import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Websites — Scale99',
  description: 'A look at the websites Scale99 has designed and built for clients across manufacturing, construction, and marketing.',
}

const projects = [
  { client: 'Lanyardy', category: 'Manufacturing & Print', title: 'Factory-direct lanyards, badges & wristbands', url: 'https://www.lanyardy.net/', image: '/websites/lanyardy.jpeg' },
  { client: 'Auckland Construction & Development', category: 'Construction', title: 'Natural stone & marble cladding contractor', url: 'https://www.aucklandcd.com/en', image: '/websites/aucklandcd.jpeg' },
  { client: 'M&M Marketing', category: 'Marketing Agency', title: 'Full-service marketing agency in Qatar', url: 'https://www.mnmagency.com/', image: '/websites/mnmagency.jpeg' },
  { client: 'Taqnia', category: 'Marketing & Branding', title: 'Brand identity & digital growth studio', url: 'https://taqnia.qa/', image: '/websites/taqnia.jpeg' },
]

export default function WebsitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pt-24 text-center text-foreground lg:pt-28">
        <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow">Websites</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built for the real world.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
            A selection of live websites we&apos;ve designed and built for clients—from manufacturing and construction to marketing and brand studios.
          </p>
        </section>

        <section className="border-t border-white/10 px-6 pb-28 lg:px-10 lg:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map(project => (
                <a
                  key={project.client}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface text-left shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                >
                  {/* Browser-chrome frame around the site mockup */}
                  <div className="relative overflow-hidden border-b border-white/10 bg-background">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.client} website mockup`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{project.category}</span>
                      <ArrowUpRight className="shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent" size={16} />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold leading-tight transition-colors group-hover:text-accent">{project.client}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.title}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-accent">
                      Visit live site <ArrowRight className="transition-transform group-hover:translate-x-2" size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                Ready to build<br />what&apos;s next<span className="text-accent">?</span>
              </h2>
            </div>
            <a href="mailto:hello@scale-99.com" className="flex mx-auto w-fit items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              Request Demo <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
