import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Package, Lock } from 'lucide-react'

const categories = ['All','Accessories','Lifestyle','Home & Living','Stationery']
const products = [
  {id:1, name:'Executive Leather Tote Bag',   category:'Accessories',  price:'£89.00', badge:'New Arrival', desc:'Full-grain leather with brass hardware. 13″ laptop compatible.'},
  {id:2, name:'Merino Wool Scarf — Charcoal', category:'Lifestyle',    price:'£45.00', badge:null,          desc:'Lightweight 100% merino wool. 200cm × 30cm. Made in Scotland.'},
  {id:3, name:'Slim Cardholder — Black',       category:'Accessories',  price:'£29.00', badge:'Best Seller', desc:'Genuine leather. Holds 8 cards. RFID blocking.'},
  {id:4, name:'Cashmere Throw Blanket',        category:'Home & Living',price:'£120.00',badge:null,          desc:'Grade A cashmere blend. 140cm × 180cm. Ivory/Oatmeal.'},
  {id:5, name:'Ceramic Pour-Over Set',         category:'Home & Living',price:'£65.00', badge:'New Arrival', desc:'Handcrafted ceramic dripper and carafe. 600ml capacity.'},
  {id:6, name:'Stainless Steel Water Bottle',  category:'Lifestyle',    price:'£38.00', badge:null,          desc:'Double-wall insulated. 500ml. 24h cold / 12h hot.'},
  {id:7, name:'Leather-Bound Journal',         category:'Stationery',   price:'£35.00', badge:null,          desc:'Full-grain leather cover. 240 ruled pages. Lay-flat binding.'},
  {id:8, name:'Bamboo Desk Organiser',         category:'Home & Living',price:'£49.00', badge:'Best Seller', desc:'Sustainable bamboo. 5 compartments. 30cm × 15cm × 10cm.'},
  {id:9, name:'Merino Crew Neck Jumper',       category:'Lifestyle',    price:'£95.00', badge:null,          desc:'100% merino wool. Mid-weight. Navy, Oatmeal, Forest.'},
  {id:10,name:'Solid Brass Card Stand',        category:'Stationery',   price:'£22.00', badge:null,          desc:'Solid brass. Holds business cards or notes. Weighted base.'},
]
const policies = [
  {icon:Package,    title:'Shipping & Delivery', body:'Standard 3–5 days · Express 1–2 days', link:'/shipping-policy'},
  {icon:ShoppingBag,title:'Returns & Refunds',   body:'14-day right to cancel under UK law',   link:'/refund-policy'},
  {icon:Lock,       title:'Secure Payments',     body:'PCI DSS Level 1 compliant checkout',    link:'/privacy-policy'},
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="bg-cream">

      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Current Inventory</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-xl leading-tight">The Chic Cub Collection</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">
            Curated premium lifestyle products. Every item is quality-assessed and ships with our consumer protection guarantee.
          </p>
        </div>
      </section>

      {/* Launch notice */}
      <div className="border-y border-gold/40 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 text-center">
          <p className="font-sans text-sm text-ink">
            Full catalogue launching <strong>Autumn 2026</strong> — register your interest for priority access and exclusive offers.
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1 font-sans text-xs text-muted">
          <span>Secure Checkout · PCI DSS Compliant</span>
          <span>UK &amp; International Delivery</span>
          <span>14-Day Returns Policy</span>
          <span>Consumer Contracts Regulations Compliant</span>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 font-sans text-sm border transition-colors ${
                  active === c
                    ? 'bg-ink text-white border-ink'
                    : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map(p => (
              <div key={p.id} className="bg-white border border-border hover:border-gold/40 transition-colors">
                <div className="relative bg-cream-dark h-52 flex items-center justify-center">
                  <ShoppingBag size={32} className="text-border" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-navy-900 text-white font-sans text-[10px] font-semibold px-2.5 py-1 tracking-widest uppercase">{p.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <p className="section-label mb-1.5">{p.category}</p>
                  <h3 className="font-serif font-normal text-base text-ink mb-2">{p.name}</h3>
                  <p className="font-sans text-xs text-muted leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <button className="font-sans text-xs font-medium text-white bg-navy-900 px-3 py-1.5 hover:bg-navy-950 transition-colors">
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
      <section className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid sm:grid-cols-3 gap-6">
          {policies.map(({icon:Icon,title,body,link}) => (
            <div key={title} className="border-t-2 border-gold pt-5">
              <Icon size={16} className="text-gold mb-3" />
              <p className="font-sans text-sm font-medium text-ink mb-1">{title}</p>
              <p className="font-sans text-xs text-muted mb-2">{body}</p>
              <Link to={link} className="font-sans text-xs text-gold hover:underline">Read policy →</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
