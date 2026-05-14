import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react'

const stats       = [{value:'50+',label:'Enterprise Clients'},{value:'12+',label:'Countries Served'},{value:'£2M+',label:'Revenue Processed'},{value:'99.9%',label:'Uptime SLA'}]
const itFeatures  = ['Web Development & Architecture','Software Infrastructure Design','Digital Strategy & Transformation','Technical Governance & Compliance']
const retFeatures = ['Curated Premium Product Catalogue','End-to-End Sales Management','Integrated Logistics & Fulfilment','UK Consumer Contracts Compliant']
const products    = [
  {id:1,name:'Executive Leather Tote', category:'Accessories',  price:'£89.00', badge:'New Arrival'},
  {id:2,name:'Merino Wool Scarf',      category:'Lifestyle',    price:'£45.00', badge:null},
  {id:3,name:'Slim Cardholder',        category:'Accessories',  price:'£29.00', badge:'Best Seller'},
  {id:4,name:'Cashmere Throw Blanket', category:'Home & Living',price:'£120.00',badge:null},
]
const trustItems  = [
  {icon:Globe,     label:'Global Reach',     desc:'Serving clients across 12+ countries'},
  {icon:Shield,    label:'GDPR Compliant',    desc:'Full UK data protection compliance'},
  {icon:TrendingUp,label:'Scalable Solutions',desc:'Built to grow with your business'},
  {icon:Users,     label:'Enterprise Clients',desc:'50+ active enterprise partnerships'},
]

export default function Home() {
  return (
    <div className="bg-cream">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42vw] bg-cream-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            <span className="section-label mb-6 block">London · Est. 2024 · UK Registered</span>
            <h1 className="font-serif font-normal text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.1] mb-6">
              Specialized<br />
              Digital Solutions<br />
              &amp; Global Retail <em>Excellence.</em>
            </h1>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-base text-muted leading-7 max-w-md mb-10">
              Bridging high-level IT consultancy and consumer-focused retail. Enterprise technology and curated products, delivered from London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-sans text-sm font-medium hover:bg-navy-950 transition-colors">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/shop" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gold font-sans text-sm font-medium hover:text-gold-dark transition-colors">
                Shop the Collection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center py-4 ${i < stats.length - 1 ? 'border-r border-border' : ''}`}>
                <p className="font-serif font-normal text-4xl text-ink">{s.value}</p>
                <p className="font-sans text-xs text-muted mt-1.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Services ── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">What We Do</span>
            <h2 className="font-serif font-normal text-3xl lg:text-4xl text-ink">A Dual-Model Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {num:'01',icon:Code2,     title:'IT Consultancy',             features:itFeatures,  link:'/services#it-consultancy',cta:'Learn More',          desc:'Enterprise-grade web development, software infrastructure design, and digital strategy for international clients. Scalable, governance-aligned solutions built for growth.'},
              {num:'02',icon:ShoppingBag,title:'Direct-to-Consumer Retail', features:retFeatures, link:'/shop',                   cta:'View Catalogue',       desc:"Curated lifestyle products through our own proprietary platform — powered by the same technology we build for enterprise clients. End-to-end sales with integrated logistics."},
            ].map(({num,icon:Icon,title,desc,features,link,cta}) => (
              <div key={num} className="relative bg-white border border-border p-8 lg:p-10 overflow-hidden">
                <span className="absolute top-4 right-6 font-serif text-[80px] text-ink/[0.04] leading-none select-none">{num}</span>
                <Icon size={18} className="text-gold mb-5" />
                <h3 className="font-serif font-normal text-2xl text-ink mb-4">{title}</h3>
                <p className="font-sans text-sm text-muted leading-7 mb-6">{desc}</p>
                <ul className="space-y-2 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 font-sans text-sm text-muted">
                      <CheckCircle size={13} className="text-gold flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link to={link} className="inline-flex items-center gap-1.5 text-gold font-sans text-sm font-medium hover:gap-2.5 transition-all">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="bg-white border-y border-border py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label mb-4 block">Who We Are</span>
              <p className="font-serif italic font-normal text-3xl lg:text-4xl text-ink leading-snug">
                "Technology-first. Retail-ready. UK Registered."
              </p>
              <div className="w-10 h-px bg-gold mt-8 mb-8" />
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-sans text-sm font-medium hover:bg-navy-950 transition-colors">
                About Chic Cub <ArrowRight size={15} />
              </Link>
            </div>
            <div>
              <p className="font-sans text-sm text-muted leading-7 mb-8">
                Chic Cub is a London-based private limited company at the intersection of enterprise technology and consumer commerce. Founded on principles of technical excellence and commercial transparency, we operate in full compliance with UK corporate law and GDPR.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustItems.map(({icon:Icon,label,desc}) => (
                  <div key={label} className="border-t border-border pt-4">
                    <Icon size={16} className="text-gold mb-2.5" />
                    <p className="font-sans text-sm font-medium text-ink mb-1">{label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Preview ── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label mb-3 block">Current Inventory</span>
              <h2 className="font-serif font-normal text-3xl text-ink">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm text-gold font-medium hover:gap-2.5 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(p => (
              <div key={p.id} className="bg-white border border-border hover:border-gold/40 transition-colors">
                <div className="relative bg-cream-dark h-52 flex items-center justify-center">
                  <ShoppingBag size={32} className="text-border" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-navy-900 text-white font-sans text-[10px] font-semibold px-2.5 py-1 tracking-widest uppercase">{p.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <p className="section-label mb-1.5">{p.category}</p>
                  <p className="font-serif font-normal text-base text-ink mb-3">{p.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <Link to="/shop" className="font-sans text-xs text-muted hover:text-gold transition-colors">View →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-serif italic font-normal text-3xl lg:text-4xl text-white mb-8 max-w-xl mx-auto leading-snug">
            "Ready to work with us?"
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy-900 font-sans text-sm font-semibold hover:bg-gold-light transition-colors">
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
