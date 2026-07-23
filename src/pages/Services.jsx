import { Link } from 'react-router-dom'
import { ArrowRight, Truck, CreditCard, ShieldCheck, LifeBuoy, PackageCheck } from 'lucide-react'
import { listedProducts as products, groups, iconFor } from '../data/products'

const shopCategories = groups
  .filter(g => g !== 'All')
  .map(g => ({ name: g, icon: iconFor(g), count: products.filter(p => p.group === g).length }))

const shopping = [
  {
    icon: Truck, title: 'Delivered Australia-Wide',
    desc: 'Orders are fulfilled through our Amazon Australia storefront and shipped nationwide, with tracking and clear delivery estimates on every listing.',
  },
  {
    icon: CreditCard, title: 'Secure Amazon Checkout',
    desc: 'You pay safely through Amazon Australia — buyer-protected payments, no card details ever stored by us, and instant order confirmation.',
  },
  {
    icon: ShieldCheck, title: 'Consumer Guarantees',
    desc: 'Every product is covered by the Australian Consumer Law. If something is faulty, not as described, or not fit for purpose, you are entitled to a remedy.',
  },
  {
    icon: LifeBuoy, title: 'Friendly Customer Support',
    desc: 'Questions before you buy or help with an existing order? Our Melbourne-based team is here to help — just get in touch.',
  },
]

export default function Services() {
  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">How It Works</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            Shopping With<br />Oasis Outback
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            We keep it simple: browse a curated range of everyday products, check out securely through Amazon
            Australia, and have your order delivered anywhere in Australia.
          </p>
        </div>
      </section>

      {/* Product range */}
      <section className="bg-surface border-y border-line py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex items-start gap-4 mb-6">
            <div className="w-px self-stretch bg-gold/40" />
            <div>
              <span className="label mb-1 block">What We Sell</span>
              <h2 className="font-serif font-light text-3xl lg:text-4xl text-cream">Our Product Range</h2>
            </div>
          </div>

          <p className="font-sans text-sm text-warm leading-[1.9] max-w-2xl mb-14 ml-5">
            From lighting and homewares to garden, automotive, kitchen and electronics — every item is
            selected for quality and value, and priced competitively. Explore the categories below or browse
            the full collection.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopCategories.map(({ name, icon: Icon, count }) => (
              <Link
                key={name}
                to="/shop"
                className="relative bg-bg border border-line hover:border-gold/25 p-7 group transition-all duration-300 flex items-center gap-5"
              >
                <span className="w-11 h-11 flex items-center justify-center rounded-full bg-gold/[0.08] flex-shrink-0">
                  <Icon size={18} className="text-gold" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="font-serif font-light text-lg text-cream leading-tight">{name}</p>
                  <p className="font-sans text-[11px] text-muted mt-1">{count} {count === 1 ? 'product' : 'products'}</p>
                </div>
                <ArrowRight size={14} className="text-muted group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping with us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex items-start gap-4 mb-6">
            <div className="w-px self-stretch bg-gold/40" />
            <div>
              <span className="label mb-1 block">The Experience</span>
              <h2 className="font-serif font-light text-3xl lg:text-4xl text-cream">Buying Made Easy</h2>
            </div>
          </div>

          <p className="font-sans text-sm text-warm leading-[1.9] max-w-2xl mb-14 ml-5">
            Shop with confidence. Here's what you can count on with every Oasis Outback order.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {shopping.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface border border-line hover:border-gold/20 p-8 transition-all duration-300 group">
                <Icon size={15} className="text-gold mb-5" />
                <h3 className="font-serif font-light text-xl text-cream mb-3">{title}</h3>
                <p className="font-sans text-sm text-warm leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Browse banner */}
          <div className="relative bg-raised border border-gold/15 p-8 lg:p-10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gold/[0.06] rounded-full blur-3xl" />
            </div>
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <span className="label mb-3 block">Ready to Shop</span>
                <h3 className="font-serif italic font-light text-2xl text-cream mb-2">Browse the Full Range</h3>
                <p className="font-sans text-sm text-warm max-w-lg leading-relaxed">
                  Explore every product in the Oasis Outback collection and check out securely through Amazon Australia.
                </p>
              </div>
              <Link to="/shop" className="flex-shrink-0 btn-primary">
                <PackageCheck size={15} /> Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="font-serif font-light text-2xl text-cream mb-3">Need a hand choosing?</h3>
          <p className="font-sans text-sm text-warm mb-8">
            Tell us what you're after and we'll point you in the right direction.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
