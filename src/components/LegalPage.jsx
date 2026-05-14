export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="bg-cream">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-4 block">Legal</span>
          <h1 className="font-serif font-normal text-3xl lg:text-4xl text-ink mb-2">{title}</h1>
          {lastUpdated && <p className="font-sans text-sm text-muted">Last updated: {lastUpdated}</p>}
        </div>
      </section>
      <section className="bg-white border-t border-border py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 legal-content">
          {children}
        </div>
      </section>
    </div>
  )
}
