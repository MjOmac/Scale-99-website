import { ImageResponse } from 'next/og'

export const alt = 'Scale99 — Built to scale.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          backgroundImage:
            'radial-gradient(ellipse 60% 60% at 50% 45%, rgba(255,106,0,0.18), transparent 70%),'
            + 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),'
            + 'linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
          }}
        >
          Scale
          <span style={{ color: '#FF6A00' }}>99</span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 20,
            fontSize: 32,
            color: '#9A9A9A',
            letterSpacing: '0.01em',
          }}
        >
          Built to scale.
        </div>
      </div>
    ),
    { ...size },
  )
}
