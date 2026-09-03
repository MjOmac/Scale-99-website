// Renders a JSON-LD structured-data block. Content is always server-built
// from static/typed data (never raw user input), so JSON.stringify output
// is safe to inline here.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
