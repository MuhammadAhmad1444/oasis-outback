export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="bg-bg">
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="label mb-5 block">Legal</span>
          <h1 className="font-serif font-light text-3xl lg:text-4xl text-cream mb-3">{title}</h1>
          {lastUpdated && (
            <p className="font-sans text-sm text-muted">Last updated: {lastUpdated}</p>
          )}
        </div>
      </section>
      <section className="bg-surface border-t border-line py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 legal-content">
          {children}
        </div>
      </section>
    </div>
  )
}
