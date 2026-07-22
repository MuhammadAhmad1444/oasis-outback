import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, RefreshCw, CreditCard, LifeBuoy, Package } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const stats = [
  { value: '40+',     label: 'Products' },
  { value: '11',      label: 'Categories' },
  { value: 'AU-Wide', label: 'Delivery' },
  { value: 'Secure',  label: 'Amazon Checkout' },
]

const valueProps = [
  {
    num: '01', icon: ShoppingBag, title: 'Curated Everyday Essentials',
    desc: 'A hand-picked range across lighting, home, garden, automotive, kitchen, electronics and more — practical products chosen for quality and value.',
    link: '/shop', cta: 'Browse the Range',
    features: ['Quality-checked listings', 'Fair, transparent pricing', 'New products added regularly'],
  },
  {
    num: '02', icon: Truck, title: 'Delivered Across Australia',
    desc: 'Every order is fulfilled through our Amazon Australia storefront with secure checkout, order tracking, and reliable delivery Australia-wide.',
    link: '/services', cta: 'How It Works',
    features: ['Australia-wide shipping', 'Secure Amazon checkout', 'Backed by consumer guarantees'],
  },
]

const trustItems = [
  { icon: Truck,       label: 'Australia-Wide Delivery', desc: 'Shipped nationwide from our Amazon store' },
  { icon: CreditCard,  label: 'Secure Checkout',         desc: 'Safe, buyer-protected Amazon payments' },
  { icon: ShieldCheck, label: 'Consumer Guarantees',     desc: 'Covered by the Australian Consumer Law' },
  { icon: LifeBuoy,    label: 'Customer Care',           desc: 'Friendly help before and after you buy' },
]

const featured = products.filter(p => p.badge).slice(0, 4)

export default function Home() {
  return (
    <div className="bg-bg">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[480px] h-[480px] bg-gold/[0.06] rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[640px] h-[640px] rounded-full border border-gold/[0.05]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[900px] h-[900px] rounded-full border border-cream/[0.02]" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/[0.12] to-transparent" />
          <div className="absolute bottom-8 right-6 lg:right-14 font-serif italic text-[220px] lg:text-[300px] text-cream/[0.025] leading-none select-none font-light tracking-tighter">
            AU
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-36 lg:py-0 w-full">
          <div className="max-w-[620px]">

            <div className="label mb-8 anim-fade-up" style={{ animationDelay: '0ms' }}>
              Forest Hill, Melbourne · Est. 2024
            </div>

            <h1
              className="font-serif font-light text-[3.2rem] sm:text-6xl lg:text-[4.8rem] text-cream leading-[1.06] mb-7 anim-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Quality Products<br />
              for Every Australian{' '}
              <em className="text-gold-light not-italic">Home.</em>
            </h1>

            <div
              className="w-10 h-px bg-gold mb-7 anim-fade-up"
              style={{ animationDelay: '180ms' }}
            />

            <p
              className="font-sans text-base text-warm leading-[1.8] max-w-[460px] mb-11 anim-fade-up"
              style={{ animationDelay: '230ms' }}
            >
              Oasis Outback is your Australian online store for dependable everyday products — lighting,
              home, garden, automotive, kitchen and more — delivered Australia-wide with secure checkout.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 anim-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <Link to="/shop" className="btn-primary">
                Shop the Range <ArrowRight size={15} />
              </Link>
              <Link to="/about" className="btn-outline">
                About Us <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-line bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-10 ${i < stats.length - 1 ? 'border-r border-line' : ''}`}
              >
                <p className="font-serif font-light text-4xl lg:text-5xl text-gold">{s.value}</p>
                <p className="font-sans text-[10px] text-muted mt-2.5 tracking-[0.22em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value props ── */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="label mb-4 block">Why Shop With Us</span>
            <h2 className="font-serif font-light text-3xl lg:text-[2.6rem] text-cream">Shopping Made Simple</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {valueProps.map(({ num, icon: Icon, title, desc, features, link, cta }) => (
              <div
                key={num}
                className="relative bg-surface border border-line hover:border-gold/20 p-8 lg:p-11 overflow-hidden group transition-all duration-400"
              >
                <span className="absolute top-5 right-7 font-serif font-light text-[110px] text-cream/[0.025] leading-none select-none">
                  {num}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Icon size={15} className="text-gold mb-7" />
                <h3 className="font-serif font-light text-2xl lg:text-3xl text-cream mb-4">{title}</h3>
                <p className="font-sans text-sm text-warm leading-[1.8] mb-7">{desc}</p>
                <ul className="space-y-3 mb-9">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-sans text-[13px] text-warm">
                      <ShieldCheck size={12} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={link} className="btn-ghost">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="bg-surface border-y border-line py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="label mb-6 block">Who We Are</span>
              <p className="font-serif italic font-light text-3xl lg:text-[2.4rem] text-cream leading-[1.2]">
                "Everyday essentials,<br />curated and delivered<br />across Australia."
              </p>
              <div className="w-10 h-px bg-gold mt-10 mb-10" />
              <Link to="/about" className="btn-primary">
                About Oasis Outback <ArrowRight size={15} />
              </Link>
            </div>

            <div>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                Oasis Outback is a Melbourne-based online retailer, operated from Forest Hill, Victoria.
                We curate quality, affordable products across many everyday categories and sell them through
                our Amazon Australia storefront — so you get secure checkout, reliable fulfilment and full
                buyer protection on every order.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {trustItems.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="pt-5" style={{ borderTop: '1px solid rgba(212,168,71,0.18)' }}>
                    <Icon size={14} className="text-gold mb-3" />
                    <p className="font-sans text-sm font-medium text-cream mb-1.5">{label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured products ── */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="label mb-3 block">Best Sellers</span>
              <h2 className="font-serif font-light text-3xl text-cream">Popular Right Now</h2>
            </div>
            <Link to="/shop" className="hidden sm:flex btn-ghost">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map(p => (
              <ProductCard key={p.asin} product={p} />
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link to="/shop" className="btn-ghost">
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-surface border-t border-line py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.05] rounded-full blur-[90px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/[0.08]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="label mb-6 block">Here to Help</span>
          <h2 className="font-serif italic font-light text-3xl lg:text-[2.6rem] text-cream mb-10 max-w-lg mx-auto leading-snug">
            "Questions about a product or order?"
          </h2>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
