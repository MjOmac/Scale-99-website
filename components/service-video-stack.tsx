import type { Service } from '@/lib/services-data'

/**
 * All six service background videos, always mounted and stacked, with only the
 * active one visible. Switching tabs used to remount a single <video> with a
 * new `key`, forcing a fresh fetch + decode every time — the actual source of
 * the "takes too long to load" complaint. Keeping every clip loaded (they're
 * ~2.8MB combined) and cross-fading opacity makes tab switches instant after
 * the first paint, and `poster` removes the blank flash before that.
 */
export function ServiceVideoStack({ services, activeIndex }: { services: Service[], activeIndex: number }) {
  return (
    <>
      {services.map((service, i) => (
        <video
          key={service.heroVideo}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
            i === activeIndex ? 'opacity-75' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={service.heroPoster}
          aria-hidden="true"
        >
          <source src={service.heroVideo} type="video/mp4" />
        </video>
      ))}
    </>
  )
}
