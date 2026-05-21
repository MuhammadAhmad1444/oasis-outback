import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react'

const stats = [
  { value: '50+',   label: 'Enterprise Clients' },
  { value: '12+',   label: 'Countries Served' },
  { value: '£2M+',  label: 'Revenue Processed' },
  { value: '99.9%', label: 'Uptime SLA' },
]

const itFeatures  = ['Web Development & Architecture', 'Software Infrastructure Design', 'Digital Strategy & Transformation', 'Technical Governance & Compliance']
const retFeatures = ['Curated Premium Product Catalogue', 'End-to-End Sales Management', 'Integrated Logistics & Fulfilment', 'UK Consumer Contracts Compliant']

const products = [
  { id: 1, name: 'Classic Logo T-Shirt',    category: 'Apparel',     price: '£22.00', badge: 'New Arrival', img: 'https://picsum.photos/seed/cc-tshirt-logo/600/480' },
  { id: 2, name: 'Premium Pullover Hoodie', category: 'Apparel',     price: '£45.00', badge: 'Best Seller', img: 'https://picsum.photos/seed/cc-hoodie-pull/600/480' },
  { id: 3, name: 'Classic Branded Mug',     category: 'Drinkware',   price: '£14.00', badge: null,          img: 'https://picsum.photos/seed/cc-mug-classic/600/480' },
  { id: 4, name: 'Abstract Art Print A3',   category: 'Wall Art',    price: '£24.00', badge: null,          img: 'https://picsum.photos/seed/cc-art-abstract/600/480' },
]

const trustItems = [
  { icon: Globe,      label: 'Global Reach',      desc: 'Serving clients across 12+ countries' },
  { icon: Shield,     label: 'GDPR Compliant',     desc: 'Full UK data protection compliance' },
  { icon: TrendingUp, label: 'Scalable Solutions', desc: 'Built to grow with your business' },
  { icon: Users,      label: 'Enterprise Clients', desc: '50+ active enterprise partnerships' },
]

export default function Home() {
  return (
    <div className="bg-bg">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Atmospheric background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Radial glow, right side */}
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[480px] h-[480px] bg-gold/[0.06] rounded-full blur-[100px]" />
          {/* Concentric rings */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[640px] h-[640px] rounded-full border border-gold/[0.05]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[900px] h-[900px] rounded-full border border-cream/[0.02]" />
          {/* Vertical accent line */}
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/[0.12] to-transparent" />
          {/* Oversized faint brand numeral */}
          <div className="absolute bottom-8 right-6 lg:right-14 font-serif italic text-[220px] lg:text-[300px] text-cream/[0.025] leading-none select-none font-light tracking-tighter">
            01
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-36 lg:py-0 w-full">
          <div className="max-w-[580px]">

            <div className="label mb-8 anim-fade-up" style={{ animationDelay: '0ms' }}>
              London · Est. 2024 · UK Registered
            </div>

            <h1
              className="font-serif font-light text-[3.2rem] sm:text-6xl lg:text-[4.8rem] text-cream leading-[1.06] mb-7 anim-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Specialized<br />
              Digital Solutions<br />
              &amp; Global Retail{' '}
              <em className="text-gold-light not-italic">Excellence.</em>
            </h1>

            <div
              className="w-10 h-px bg-gold mb-7 anim-fade-up"
              style={{ animationDelay: '180ms' }}
            />

            <p
              className="font-sans text-base text-warm leading-[1.8] max-w-[420px] mb-11 anim-fade-up"
              style={{ animationDelay: '230ms' }}
            >
              Bridging high-level IT consultancy and consumer-focused retail. Enterprise technology and curated products, delivered from London.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 anim-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <Link to="/services" className="btn-primary">
                Explore Services <ArrowRight size={15} />
              </Link>
              <Link to="/shop" className="btn-outline">
                Shop the Collection <ArrowRight size={15} />
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

      {/* ── Dual Services ── */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="label mb-4 block">What We Do</span>
            <h2 className="font-serif font-light text-3xl lg:text-[2.6rem] text-cream">A Dual-Model Business</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {[
              {
                num: '01', icon: Code2, title: 'IT Consultancy',
                features: itFeatures,
                link: '/services#it-consultancy', cta: 'Learn More',
                desc: 'Enterprise-grade web development, software infrastructure design, and digital strategy for international clients. Scalable, governance-aligned solutions built for growth.',
              },
              {
                num: '02', icon: ShoppingBag, title: 'Direct-to-Consumer Retail',
                features: retFeatures,
                link: '/shop', cta: 'View Catalogue',
                desc: 'Curated lifestyle products through our own proprietary platform — powered by the same technology we build for enterprise clients. End-to-end sales with integrated logistics.',
              },
            ].map(({ num, icon: Icon, title, desc, features, link, cta }) => (
              <div
                key={num}
                className="relative bg-surface border border-line hover:border-gold/20 p-8 lg:p-11 overflow-hidden group transition-all duration-400"
              >
                {/* Faint number watermark */}
                <span className="absolute top-5 right-7 font-serif font-light text-[110px] text-cream/[0.025] leading-none select-none">
                  {num}
                </span>
                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Icon size={15} className="text-gold mb-7" />
                <h3 className="font-serif font-light text-2xl lg:text-3xl text-cream mb-4">{title}</h3>
                <p className="font-sans text-sm text-warm leading-[1.8] mb-7">{desc}</p>
                <ul className="space-y-3 mb-9">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-sans text-[13px] text-warm">
                      <CheckCircle size={12} className="text-gold flex-shrink-0" />
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

      {/* ── About Preview ── */}
      <section className="bg-surface border-y border-line py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="label mb-6 block">Who We Are</span>
              <p className="font-serif italic font-light text-3xl lg:text-[2.4rem] text-cream leading-[1.2]">
                "Technology-first.<br />Retail-ready.<br />UK Registered."
              </p>
              <div className="w-10 h-px bg-gold mt-10 mb-10" />
              <Link to="/about" className="btn-primary">
                About Chic Cub <ArrowRight size={15} />
              </Link>
            </div>

            <div>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                Chic Cub is a London-based private limited company at the intersection of enterprise technology and consumer commerce. Founded on principles of technical excellence and commercial transparency, we operate in full compliance with UK corporate law and GDPR.
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

      {/* ── Product Preview ── */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="label mb-3 block">Print on Demand</span>
              <h2 className="font-serif font-light text-3xl text-cream">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden sm:flex btn-ghost">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(p => (
              <div key={p.id} className="card-dark group">
                <div className="relative h-56 overflow-hidden bg-raised">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-gold text-bg font-sans text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="label mb-2">{p.category}</p>
                  <p className="font-serif font-light text-base text-cream mb-3">{p.name}</p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #252525' }}>
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <Link to="/shop" className="font-sans text-xs text-muted hover:text-gold transition-colors duration-200">
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
          <span className="label mb-6 block">Get Started</span>
          <h2 className="font-serif italic font-light text-3xl lg:text-[2.6rem] text-cream mb-10 max-w-lg mx-auto leading-snug">
            "Ready to work with us?"
          </h2>
          <Link to="/contact" className="btn-primary">
            Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
