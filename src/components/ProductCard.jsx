import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { iconFor, amazonUrl } from '../data/products'
import { price as fmtPrice } from '../data/company'

// A single customer-facing product card.
// Shows a professional product photo, falling back to a branded,
// category-themed tile if the image fails to load.
export default function ProductCard({ product }) {
  const { asin, name, group, price, shipping, badge, img } = product
  const Icon = iconFor(group)
  const priceLabel = fmtPrice(price)
  const [imgOk, setImgOk] = useState(true)

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
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              {priceLabel ? (
                <>
                  <span className="font-sans text-sm font-semibold text-gold">{priceLabel}</span>
                  {shipping === 0 && (
                    <span className="block font-sans text-[10px] text-muted mt-0.5">Free shipping</span>
                  )}
                  {shipping > 0 && (
                    <span className="block font-sans text-[10px] text-muted mt-0.5">
                      + {fmtPrice(shipping)} shipping
                    </span>
                  )}
                </>
              ) : (
                <span className="font-sans text-xs text-muted">See price on Amazon</span>
              )}
            </div>
            <a
              href={amazonUrl(asin)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 font-sans text-[12px] font-medium text-bg bg-gold px-3 py-1.5 hover:bg-gold-light transition-colors duration-200"
            >
              View on Amazon <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
