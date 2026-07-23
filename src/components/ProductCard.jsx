import { useState } from 'react'
import { ExternalLink, ShoppingCart, Check } from 'lucide-react'
import { iconFor, amazonUrl } from '../data/products'
import { price as fmtPrice } from '../data/company'
import { useCart } from '../context/CartContext'

// A single customer-facing product card: local product photo, price,
// "Add to Cart" (buy direct), and a "View on Amazon" link.
export default function ProductCard({ product }) {
  const { asin, name, group, price, shipping, badge, img } = product
  const Icon = iconFor(group)
  const priceLabel = fmtPrice(price)
  const [imgOk, setImgOk] = useState(true)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="card-dark group flex flex-col">
      {/* Image / fallback tile */}
      <div className="relative h-56 overflow-hidden bg-raised">
        {img && imgOk ? (
          <img
            src={img}
            alt={name}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gold/[0.07] rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-gold/[0.10]" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center gap-4 px-6">
              <Icon size={40} className="text-gold/70" strokeWidth={1.25} />
              <span className="label text-muted/70">{group}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/45 to-transparent pointer-events-none" />
        {badge && (
          <span className="absolute top-3 left-3 bg-gold text-bg font-sans text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="label mb-2">{group}</p>
        <h3 className="font-serif font-light text-[15px] leading-snug text-cream mb-4 line-clamp-3 min-h-[3.75rem]">
          {name}
        </h3>

        <div className="mt-auto pt-3" style={{ borderTop: '1px solid #252525' }}>
          <div className="mb-3">
            {priceLabel ? (
              <>
                <span className="font-sans text-base font-semibold text-gold">{priceLabel}</span>
                {shipping === 0 && (
                  <span className="ml-2 font-sans text-[10px] text-muted">Free shipping</span>
                )}
                {shipping > 0 && (
                  <span className="ml-2 font-sans text-[10px] text-muted">
                    + {fmtPrice(shipping)} shipping
                  </span>
                )}
              </>
            ) : (
              <span className="font-sans text-xs text-muted">Price on request</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {priceLabel ? (
              <button
                onClick={handleAdd}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 font-sans text-[12px] font-semibold px-3 py-2 transition-all duration-200 ${
                  added ? 'bg-gold-light text-bg' : 'bg-gold text-bg hover:bg-gold-light'
                }`}
              >
                {added ? (<><Check size={13} /> Added</>) : (<><ShoppingCart size={13} /> Add to Cart</>)}
              </button>
            ) : (
              <span className="flex-1" />
            )}
            <a
              href={amazonUrl(asin)}
              target="_blank"
              rel="noopener noreferrer"
              title="View on Amazon Australia"
              className="inline-flex items-center gap-1.5 font-sans text-[12px] font-medium text-gold border border-gold/40 px-3 py-2 hover:bg-gold/10 transition-colors duration-200"
            >
              Amazon <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
