import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck, Truck, Award, Tag, Package, Headphones } from 'lucide-react'
import { COMPANY } from '../data/company'

const values = [
  { icon: Award,       title: 'Quality First',                        desc: 'Every product is chosen for dependable, everyday quality — no filler, no gimmicks.' },
  { icon: Tag,         title: 'Fair, Transparent Pricing',            desc: 'Honest A$ pricing on every listing, with no hidden costs at checkout.' },
  { icon: Truck,       title: 'Fast Australia-Wide Delivery',         desc: 'Orders shipped promptly to homes right across Australia via reliable fulfilment.' },
  { icon: ShieldCheck, title: 'Customer Care & Consumer Guarantees',  desc: 'Backed by your rights under the Australian Consumer Law and attentive local support.' },
]

const pillars = [
  { icon: Sparkles,   label: 'Curated Selection',                        desc: 'A hand-picked range across home, garden, lighting, automotive, electronics and lifestyle — quality over quantity.' },
  { icon: Package,    label: 'Amazon-Backed Fulfilment & Secure Checkout', desc: 'We sell through Amazon Australia, so you get trusted secure checkout, buyer protection and reliable delivery.' },
  { icon: Headphones, label: 'Australian Customer Support',              desc: 'Operated locally from Forest Hill, Victoria — real help from a team that knows Australian shoppers.' },
]

const business = [
  ['Trading Name',  COMPANY.name],
  ['Proprietor',    COMPANY.proprietor],
  ['Business Type', 'Online Retail'],
  ['Location',      `${COMPANY.suburb}, ${COMPANY.country}`],
  ['Email',         COMPANY.email],
]

export default function About() {
  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/[0.05] rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">About Us</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            Who We Are
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            Oasis Outback is a Melbourne-based online retailer offering quality, affordable products across many categories, delivered Australia-wide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface border-y border-line py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="font-serif font-light text-3xl text-cream mb-7">Our Mission</h2>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-5">
                Oasis Outback was founded on a simple idea: dependable everyday products should be easy to find and easy to trust. We curate a considered range spanning home, garden, automotive, lighting, electronics and lifestyle — the practical things that make daily life run a little more smoothly.
              </p>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-5">
                We sell through Amazon Australia, giving every customer secure checkout, buyer protection and reliable fulfilment they already know and trust. It lets us focus on what we do best — choosing good products and standing behind them.
              </p>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                The store is owned and operated by {COMPANY.proprietor} from {COMPANY.region}, and we conduct all business in full compliance with the Australian Consumer Law and the Privacy Act 1988.
              </p>

              {/* Business info */}
              <div className="bg-raised border border-line p-6" style={{ borderLeft: '3px solid #D4A847' }}>
                <h3 className="label text-muted mb-5">Business Information</h3>
                <div className="space-y-3">
                  {business.map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <span className="font-sans text-xs font-medium text-cream w-36 flex-shrink-0">{k}:</span>
                      <span className="font-sans text-xs text-warm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif font-light text-3xl text-cream mb-7">Why Shop With Us</h2>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                Oasis Outback keeps things straightforward: a carefully chosen range, the security of a trusted marketplace, and local support behind every order. Here is what that means for you.
              </p>
              <div className="space-y-7">
                {pillars.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-5 pt-6" style={{ borderTop: '1px solid #252525' }}>
                    <Icon size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm font-medium text-cream mb-1.5">{label}</p>
                      <p className="font-sans text-sm text-warm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="label mb-4 block">Our Principles</span>
            <h2 className="font-serif font-light text-3xl lg:text-[2.4rem] text-cream">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface border border-line hover:border-gold/20 p-6 transition-all duration-300 group"
                style={{ borderTop: '2px solid #D4A847' }}
              >
                <Icon size={14} className="text-gold mb-5 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-sans text-sm font-semibold text-cream mb-2.5">{title}</h3>
                <p className="font-sans text-xs text-warm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-7">
          <p className="font-serif italic font-light text-xl text-cream">
            "Have a question about a product or your order?"
          </p>
          <Link to="/contact" className="flex-shrink-0 btn-primary">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
