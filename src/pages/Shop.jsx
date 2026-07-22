import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, RefreshCw, Truck, ArrowRight, Mail } from 'lucide-react'
import { products, groups } from '../data/products'
import ProductCard from '../components/ProductCard'
import { COMPANY } from '../data/company'

const policies = [
  { icon: Truck,       title: 'Delivered Australia-Wide',        body: 'Fast delivery to every state & territory',  link: '/shipping-policy' },
  { icon: RefreshCw,   title: 'Returns & Consumer Guarantees',   body: 'Protected under Australian Consumer Law',    link: '/refund-policy'   },
  { icon: ShieldCheck, title: 'Secure Amazon Checkout',          body: 'Buyer protection on every order',           link: '/shipping-policy' },
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.group === active)

  return (
    <div className="bg-bg">

      {/* ── Header ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Shop</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            The Oasis Outback Collection
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            Browse our full range across home, garden, automotive, lighting, electronics and more —
            every item fulfilled through our Amazon Australia store with secure checkout and delivered
            Australia-wide.
          </p>
        </div>
      </section>

      {/* ── Marketplace Banner ── */}
      <div className="border-y border-gold/15 bg-gold/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-center">
          <p className="font-sans text-sm text-warm">
            <strong className="text-cream font-semibold">Fulfilled through Amazon Australia</strong>
            {' '}· Secure checkout &amp; buyer protection · Delivered Australia-wide
          </p>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1 font-sans text-[11px] text-muted tracking-wide">
          <span>Australian Online Retailer</span>
          <span>Australia-Wide Delivery</span>
          <span>Secure Amazon Checkout</span>
          <span>Backed by Australian Consumer Law</span>
        </div>
      </div>

      {/* ── Products ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {groups.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 font-sans text-[13px] border transition-all duration-200 ${
                  active === c
                    ? 'bg-gold text-bg border-gold font-medium'
                    : 'bg-transparent text-muted border-line hover:border-gold/40 hover:text-warm'
                }`}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto font-sans text-[11px] text-muted self-center">{visible.length} items</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visible.map(p => (
              <ProductCard key={p.asin} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry CTA ── */}
      <section className="bg-surface border-y border-line py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-serif font-light text-2xl text-cream mb-2">Interested in a product?</h3>
              <p className="font-sans text-sm text-warm">
                Contact us with any questions about an item, availability, or your order.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary">
                <Mail size={14} /> Send an Enquiry
              </Link>
              <a href={`mailto:${COMPANY.email}`} className="btn-outline">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Policy Row ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-3 gap-6">
          {policies.map(({ icon: Icon, title, body, link }) => (
            <div key={title} className="pt-5" style={{ borderTop: '2px solid #D4A847' }}>
              <Icon size={14} className="text-gold mb-4" />
              <p className="font-sans text-sm font-medium text-cream mb-1.5">{title}</p>
              <p className="font-sans text-xs text-muted mb-3">{body}</p>
              <Link to={link} className="btn-ghost text-xs">Read policy <ArrowRight size={12} /></Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
