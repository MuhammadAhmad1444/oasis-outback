import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingCart, CheckCircle, Mail, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { COMPANY, price as fmtPrice } from '../data/company'

export default function Cart() {
  const { items, setQty, removeItem, clear, subtotal, count } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', notes: '' })
  const [placed, setPlaced] = useState(null)

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const buildOrderText = () => {
    const lines = items
      .map((i) => `- ${i.qty} x ${i.name} [${i.asin}] @ ${fmtPrice(i.price) || 'price on request'}`)
      .join('\n')
    return (
      `New order from the Oasis Outback website\n\n` +
      `ITEMS\n${lines}\n\n` +
      `Subtotal (excludes shipping): ${fmtPrice(subtotal)}\n\n` +
      `CUSTOMER\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Delivery address:\n${form.address}\n\n` +
      `Notes: ${form.notes || '-'}\n\n` +
      `Please confirm availability, final shipping cost and payment details. Thank you!`
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const orderText = buildOrderText()
    const mailto =
      `mailto:${COMPANY.emailOrders}` +
      `?subject=${encodeURIComponent('New Order — Oasis Outback')}` +
      `&body=${encodeURIComponent(orderText)}`
    // Snapshot for the confirmation screen, then open the email client & clear cart.
    setPlaced({ orderText, itemCount: count, total: fmtPrice(subtotal) })
    window.location.href = mailto
    clear()
  }

  const inputClass = 'w-full bg-transparent border-0 border-b font-sans text-sm text-cream placeholder-muted/40 py-2.5 focus:outline-none rounded-none'
  const inputStyle = { borderBottomColor: '#252525' }
  const focus = (e) => (e.target.style.borderBottomColor = '#D4A847')
  const blur = (e) => (e.target.style.borderBottomColor = '#252525')

  // ── Confirmation ──
  if (placed) {
    return (
      <div className="bg-bg">
        <section className="py-24 lg:py-32">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-7">
              <CheckCircle size={28} className="text-gold" />
            </div>
            <h1 className="font-serif font-light text-3xl lg:text-4xl text-cream mb-4">Order Ready to Send</h1>
            <div className="w-10 h-px bg-gold mx-auto mb-7" />
            <p className="font-sans text-sm text-warm leading-[1.9] mb-4">
              Your email app should have opened with your order to{' '}
              <a href={`mailto:${COMPANY.emailOrders}`} className="text-gold hover:underline">{COMPANY.emailOrders}</a>.
              Please press <strong className="text-cream">send</strong> to place it — we'll reply to confirm
              availability, final shipping, and payment.
            </p>
            <p className="font-sans text-xs text-muted mb-8">
              If nothing opened, email us the details below to{' '}
              <a href={`mailto:${COMPANY.emailOrders}`} className="text-gold hover:underline">{COMPANY.emailOrders}</a>.
            </p>
            <pre className="text-left bg-surface border border-line p-5 text-[12px] text-warm leading-relaxed whitespace-pre-wrap font-sans mb-9">{placed.orderText}</pre>
            <Link to="/shop" className="btn-primary">
              Continue Shopping <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  // ── Empty cart ──
  if (items.length === 0) {
    return (
      <div className="bg-bg">
        <section className="py-24 lg:py-36">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
            <div className="w-14 h-14 rounded-full bg-raised border border-line flex items-center justify-center mx-auto mb-7">
              <ShoppingCart size={26} className="text-muted" />
            </div>
            <h1 className="font-serif font-light text-3xl lg:text-4xl text-cream mb-4">Your Cart is Empty</h1>
            <div className="w-10 h-px bg-gold mx-auto mb-7" />
            <p className="font-sans text-sm text-warm mb-9">Browse the range and add items to buy directly from us.</p>
            <Link to="/shop" className="btn-primary">
              Shop the Range <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  // ── Cart with items ──
  return (
    <div className="bg-bg">
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Your Cart</span>
          <h1 className="font-serif font-light text-4xl lg:text-5xl text-cream mb-3">Review &amp; Order</h1>
          <div className="w-10 h-px bg-gold mb-4" />
          <p className="font-sans text-sm text-warm mb-12 max-w-2xl">
            Buy directly from Oasis Outback — submit your order and we'll confirm availability, final shipping
            cost, and payment. Prefer Amazon? Each product also links to our Amazon Australia listing.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {items.map((i) => (
                  <div key={i.asin} className="flex gap-4 bg-surface border border-line p-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-raised overflow-hidden">
                      {i.img && <img src={i.img} alt={i.name} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="label mb-1">{i.group}</p>
                      <h3 className="font-serif font-light text-sm text-cream leading-snug line-clamp-2 mb-2">{i.name}</h3>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center border border-line">
                          <button onClick={() => setQty(i.asin, i.qty - 1)} className="p-1.5 text-muted hover:text-gold transition-colors" aria-label="Decrease quantity"><Minus size={13} /></button>
                          <span className="px-3 font-sans text-sm text-cream tabular-nums">{i.qty}</span>
                          <button onClick={() => setQty(i.asin, i.qty + 1)} className="p-1.5 text-muted hover:text-gold transition-colors" aria-label="Increase quantity"><Plus size={13} /></button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-sans text-sm font-semibold text-gold">{fmtPrice((i.price || 0) * i.qty)}</span>
                          <button onClick={() => removeItem(i.asin)} className="text-muted hover:text-gold transition-colors" aria-label="Remove item"><Trash2 size={15} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: '1px solid #252525' }}>
                <button onClick={clear} className="font-sans text-xs text-muted hover:text-gold transition-colors">Clear cart</button>
                <div className="text-right">
                  <p className="font-sans text-[11px] text-muted uppercase tracking-widest">Subtotal ({count} {count === 1 ? 'item' : 'items'})</p>
                  <p className="font-serif font-light text-3xl text-gold mt-1">{fmtPrice(subtotal)}</p>
                  <p className="font-sans text-[11px] text-muted mt-1">Shipping confirmed after order</p>
                </div>
              </div>
            </div>

            {/* Order form */}
            <div className="lg:col-span-2">
              <div className="bg-surface border border-line p-7" style={{ borderTop: '2px solid #D4A847' }}>
                <h2 className="font-serif font-light text-xl text-cream mb-1">Your Details</h2>
                <p className="font-sans text-xs text-muted mb-6">We'll email you to confirm the order and arrange payment &amp; delivery.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { k: 'name', label: 'Full Name *', type: 'text', ph: 'Jane Smith', req: true },
                    { k: 'email', label: 'Email *', type: 'email', ph: 'jane@example.com', req: true },
                    { k: 'phone', label: 'Phone *', type: 'tel', ph: '04xx xxx xxx', req: true },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2">{f.label}</label>
                      <input type={f.type} required={f.req} placeholder={f.ph} value={form[f.k]} onChange={set(f.k)} className={inputClass} style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>
                  ))}
                  <div>
                    <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2">Delivery Address *</label>
                    <textarea required rows={3} placeholder="Street, suburb, state, postcode" value={form.address} onChange={set('address')} className={`${inputClass} resize-none`} style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2">Notes (optional)</label>
                    <textarea rows={2} placeholder="Anything we should know?" value={form.notes} onChange={set('notes')} className={`${inputClass} resize-none`} style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gold text-bg font-sans text-sm font-semibold tracking-wide hover:bg-gold-light transition-all duration-200">
                    <Mail size={15} /> Place Order
                  </button>
                  <p className="font-sans text-[11px] text-muted leading-relaxed text-center">
                    No payment is taken online. Submitting emails your order to{' '}
                    <span className="text-warm">{COMPANY.emailOrders}</span> and we reply to confirm.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
