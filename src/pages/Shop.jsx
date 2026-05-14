import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Package, Lock, ArrowRight } from 'lucide-react'

const categories = ['All', 'Accessories', 'Lifestyle', 'Home & Living', 'Stationery']

const products = [
  { id: 1,  name: 'Executive Leather Tote Bag',    category: 'Accessories',   price: '£89.00',  badge: 'New Arrival', desc: 'Full-grain leather with brass hardware. 13″ laptop compatible.',  img: 'https://picsum.photos/seed/cc-tote/600/480' },
  { id: 2,  name: 'Merino Wool Scarf — Charcoal',  category: 'Lifestyle',     price: '£45.00',  badge: null,          desc: 'Lightweight 100% merino wool. 200cm × 30cm. Made in Scotland.',   img: 'https://picsum.photos/seed/cc-scarf/600/480' },
  { id: 3,  name: 'Slim Cardholder — Black',        category: 'Accessories',   price: '£29.00',  badge: 'Best Seller', desc: 'Genuine leather. Holds 8 cards. RFID blocking.',                  img: 'https://picsum.photos/seed/cc-card/600/480' },
  { id: 4,  name: 'Cashmere Throw Blanket',         category: 'Home & Living', price: '£120.00', badge: null,          desc: 'Grade A cashmere blend. 140cm × 180cm. Ivory/Oatmeal.',          img: 'https://picsum.photos/seed/cc-throw/600/480' },
  { id: 5,  name: 'Ceramic Pour-Over Set',          category: 'Home & Living', price: '£65.00',  badge: 'New Arrival', desc: 'Handcrafted ceramic dripper and carafe. 600ml capacity.',         img: 'https://picsum.photos/seed/cc-ceramic/600/480' },
  { id: 6,  name: 'Stainless Steel Water Bottle',   category: 'Lifestyle',     price: '£38.00',  badge: null,          desc: 'Double-wall insulated. 500ml. 24h cold / 12h hot.',               img: 'https://picsum.photos/seed/cc-bottle/600/480' },
  { id: 7,  name: 'Leather-Bound Journal',          category: 'Stationery',    price: '£35.00',  badge: null,          desc: 'Full-grain leather cover. 240 ruled pages. Lay-flat binding.',    img: 'https://picsum.photos/seed/cc-journal/600/480' },
  { id: 8,  name: 'Bamboo Desk Organiser',          category: 'Home & Living', price: '£49.00',  badge: 'Best Seller', desc: 'Sustainable bamboo. 5 compartments. 30cm × 15cm × 10cm.',        img: 'https://picsum.photos/seed/cc-bamboo/600/480' },
  { id: 9,  name: 'Merino Crew Neck Jumper',        category: 'Lifestyle',     price: '£95.00',  badge: null,          desc: '100% merino wool. Mid-weight. Navy, Oatmeal, Forest.',            img: 'https://picsum.photos/seed/cc-jumper/600/480' },
  { id: 10, name: 'Solid Brass Card Stand',         category: 'Stationery',    price: '£22.00',  badge: null,          desc: 'Solid brass. Holds business cards or notes. Weighted base.',      img: 'https://picsum.photos/seed/cc-brass/600/480' },
]

const policies = [
  { icon: Package,     title: 'Shipping & Delivery', body: 'Standard 3–5 days · Express 1–2 days', link: '/shipping-policy' },
  { icon: ShoppingBag, title: 'Returns & Refunds',   body: '14-day right to cancel under UK law',   link: '/refund-policy' },
  { icon: Lock,        title: 'Secure Payments',     body: 'PCI DSS Level 1 compliant checkout',    link: '/privacy-policy' },
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Current Inventory</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            The Chic Cub Collection
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            Curated premium lifestyle products. Every item is quality-assessed and ships with our consumer protection guarantee.
          </p>
        </div>
      </section>

      {/* Launch notice */}
      <div className="border-y border-gold/15 bg-gold/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-center">
          <p className="font-sans text-sm text-warm">
            Full catalogue launching{' '}
            <strong className="text-cream font-semibold">Autumn 2026</strong>
            {' '}— register your interest for priority access and exclusive offers.
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1 font-sans text-[11px] text-muted tracking-wide">
          <span>Secure Checkout · PCI DSS Compliant</span>
          <span>UK &amp; International Delivery</span>
          <span>14-Day Returns Policy</span>
          <span>Consumer Contracts Regulations Compliant</span>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(c => (
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
              <div key={p.id} className="card-dark group">
                <div className="relative h-52 overflow-hidden bg-raised">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay lifts the badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-gold text-bg font-sans text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="label mb-2">{p.category}</p>
                  <h3 className="font-serif font-light text-base text-cream mb-2">{p.name}</h3>
                  <p className="font-sans text-[12px] text-muted leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #252525' }}>
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <button className="font-sans text-[12px] font-medium text-bg bg-gold px-3 py-1.5 hover:bg-gold-light transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy row */}
      <section className="bg-surface border-t border-line py-14">
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
