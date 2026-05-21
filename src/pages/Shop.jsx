import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Package, RefreshCw, Truck, ArrowRight, Mail } from 'lucide-react'

const categories = ['All', 'Apparel', 'Drinkware', 'Phone Cases', 'Wall Art', 'Digital', 'Accessories']

const products = [
  // Apparel
  { id: 1,  name: 'Classic Logo T-Shirt',          category: 'Apparel',     price: '£22.00', badge: 'New Arrival', desc: 'Heavyweight 100% combed cotton. Unisex fit. Available S–2XL. Navy, Black, White.',         img: 'https://picsum.photos/seed/cc-tshirt-logo/600/480' },
  { id: 2,  name: 'Oversized Graphic Tee',          category: 'Apparel',     price: '£26.00', badge: null,          desc: '100% organic cotton. Relaxed oversized cut. Available S–XL. 3 colourways.',                img: 'https://picsum.photos/seed/cc-graphic-tee/600/480' },
  { id: 3,  name: 'Premium Pullover Hoodie',         category: 'Apparel',     price: '£45.00', badge: 'Best Seller', desc: '340gsm brushed fleece interior. Kangaroo pocket. Available S–2XL. 4 colours.',              img: 'https://picsum.photos/seed/cc-hoodie-pull/600/480' },
  { id: 4,  name: 'Zip-Up Hoodie',                  category: 'Apparel',     price: '£52.00', badge: null,          desc: '320gsm fleece. Full-length YKK zip. Twin front pockets. Available S–2XL.',                  img: 'https://picsum.photos/seed/cc-hoodie-zip/600/480' },
  // Drinkware
  { id: 5,  name: 'Classic Branded Mug 11oz',       category: 'Drinkware',   price: '£14.00', badge: 'Best Seller', desc: 'Ceramic. Dishwasher safe. Full wraparound Chic Cub print.',                               img: 'https://picsum.photos/seed/cc-mug-classic/600/480' },
  { id: 6,  name: 'Large Branded Mug 15oz',         category: 'Drinkware',   price: '£16.00', badge: null,          desc: 'Ceramic. Extra-large capacity. Bold logo print. Microwave safe.',                          img: 'https://picsum.photos/seed/cc-mug-large/600/480' },
  { id: 7,  name: 'Magic Colour-Change Mug',        category: 'Drinkware',   price: '£19.00', badge: 'New Arrival', desc: 'Black at room temp — design reveals with hot liquid. 11oz. Ceramic.',                      img: 'https://picsum.photos/seed/cc-mug-magic/600/480' },
  { id: 8,  name: 'Insulated Travel Tumbler',       category: 'Drinkware',   price: '£24.00', badge: null,          desc: 'Stainless steel. Double-wall insulation. 16oz. Laser-engraved logo.',                       img: 'https://picsum.photos/seed/cc-tumbler/600/480' },
  // Phone Cases
  { id: 9,  name: 'iPhone Case (15 / 15 Pro)',      category: 'Phone Cases', price: '£16.00', badge: null,          desc: 'Slim hard-shell polycarbonate. Precision cutouts. Gloss or matte finish.',                  img: 'https://picsum.photos/seed/cc-iphone-case/600/480' },
  { id: 10, name: 'Samsung Galaxy Case',            category: 'Phone Cases', price: '£16.00', badge: null,          desc: 'Compatible with S23 / S24 series. Shock-resistant TPU frame. Full-print.',                  img: 'https://picsum.photos/seed/cc-samsung-case/600/480' },
  { id: 11, name: 'MagSafe Compatible Case',        category: 'Phone Cases', price: '£20.00', badge: 'New Arrival', desc: 'iPhone 14 / 15 series. Built-in MagSafe ring. Premium rubberised finish.',                  img: 'https://picsum.photos/seed/cc-magsafe/600/480' },
  // Wall Art
  { id: 12, name: 'Abstract Art Print — A3',        category: 'Wall Art',    price: '£24.00', badge: null,          desc: 'Giclée print on 310gsm fine art paper. Unframed. Ships in protective tube.',                 img: 'https://picsum.photos/seed/cc-art-abstract/600/480' },
  { id: 13, name: 'Motivational Print — A2',        category: 'Wall Art',    price: '£34.00', badge: 'Best Seller', desc: 'Typographic design on premium coated paper. Unframed. 420mm × 594mm.',                      img: 'https://picsum.photos/seed/cc-art-motive/600/480' },
  { id: 14, name: 'Canvas Print 50×70cm',           category: 'Wall Art',    price: '£48.00', badge: null,          desc: 'Museum-quality canvas. 2cm wooden stretcher bars. Ready to hang.',                          img: 'https://picsum.photos/seed/cc-canvas/600/480' },
  // Digital
  { id: 15, name: 'Digital Resume Template',        category: 'Digital',     price: '£9.00',  badge: null,          desc: 'Professional A4 layout. MS Word & Google Docs compatible. Instant download.',               img: 'https://picsum.photos/seed/cc-resume/600/480' },
  { id: 16, name: 'Business Card Pack — 5 Styles',  category: 'Digital',     price: '£7.00',  badge: null,          desc: 'Print-ready PDF + editable Canva files. CMYK. 85mm × 55mm standard.',                       img: 'https://picsum.photos/seed/cc-bizcard/600/480' },
  { id: 17, name: 'Digital Planner Bundle',         category: 'Digital',     price: '£14.00', badge: 'New Arrival', desc: '12-month undated planner. PDF format. Compatible with GoodNotes & Notability.',             img: 'https://picsum.photos/seed/cc-planner/600/480' },
  // Accessories
  { id: 18, name: 'Embroidered Beanie',             category: 'Accessories', price: '£24.00', badge: null,          desc: '100% acrylic knit. Embroidered Chic Cub logo. One size fits all. 3 colourways.',             img: 'https://picsum.photos/seed/cc-beanie/600/480' },
  { id: 19, name: 'Branded Baseball Cap',           category: 'Accessories', price: '£22.00', badge: null,          desc: 'Structured 6-panel cap. Embroidered logo. Adjustable strap. One size.',                      img: 'https://picsum.photos/seed/cc-cap/600/480' },
  { id: 20, name: 'Laptop Sleeve 13″',              category: 'Accessories', price: '£28.00', badge: null,          desc: 'Neoprene with zip closure. Fits 13″ laptops. Branded exterior panel.',                       img: 'https://picsum.photos/seed/cc-sleeve/600/480' },
]

const policies = [
  { icon: Truck,     title: 'Made & Shipped to Order', body: 'Dispatched within 3–5 working days',  link: '/shipping-policy' },
  { icon: RefreshCw, title: 'Returns & Refunds',       body: '14-day right to cancel under UK law',  link: '/refund-policy'   },
  { icon: Package,   title: 'UK & International',      body: 'We ship worldwide from the UK',         link: '/shipping-policy' },
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="bg-bg">

      {/* ── Header ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Print on Demand</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            The Chic Cub Collection
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            Premium branded merchandise, made to order. Every item is custom-produced on demand and ships
            with our full consumer protection guarantee.
          </p>
        </div>
      </section>

      {/* ── POD Banner ── */}
      <div className="border-y border-gold/15 bg-gold/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-center">
          <p className="font-sans text-sm text-warm">
            <strong className="text-cream font-semibold">Made to Order</strong>
            {' '}· All products are custom-produced upon purchase · Dispatched within 3–5 working days
            · UK &amp; International Shipping Available
          </p>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1 font-sans text-[11px] text-muted tracking-wide">
          <span>UK Registered Company · No. 17232277</span>
          <span>UK &amp; International Delivery</span>
          <span>14-Day Returns Policy</span>
          <span>Consumer Contracts Regulations Compliant</span>
        </div>
      </div>

      {/* ── Products ── */}
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
                    <Link
                      to="/contact"
                      className="font-sans text-[12px] font-medium text-bg bg-gold px-3 py-1.5 hover:bg-gold-light transition-colors duration-200"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
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
                Contact us to discuss your order, customisation options, or bulk enquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary">
                <Mail size={14} /> Send an Enquiry
              </Link>
              <a href="mailto:info@chiccub.com" className="btn-outline">
                info@chiccub.com
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
