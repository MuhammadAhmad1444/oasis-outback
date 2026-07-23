import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const details = [
  {
    icon: MapPin,
    title: 'Business Address',
    content: (
      <address className="not-italic font-sans text-sm text-warm leading-relaxed mt-1.5">
        4 Longbrae Avenue<br />
        Forest Hill VIC 3131<br />
        Australia
      </address>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <div className="mt-1.5 space-y-1">
        <a href="mailto:oasisoutback54@gmail.com" className="font-sans text-sm text-gold hover:underline block">
          oasisoutback54@gmail.com
        </a>
        <span className="font-sans text-[11px] text-muted block">General enquiries &amp; support</span>
        <a href="mailto:buyings@oasisoutback.online" className="font-sans text-sm text-gold hover:underline block pt-1">
          buyings@oasisoutback.online
        </a>
        <span className="font-sans text-[11px] text-muted block">Orders &amp; buying</span>
      </div>
    ),
  },
  {
    icon: Phone,
    title: 'Telephone',
    content: (
      <a href="tel:+61483982589" className="font-sans text-sm text-warm hover:text-cream transition-colors duration-200 mt-1.5 block">
        +61 483 982 589
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <p className="font-sans text-sm text-warm leading-relaxed mt-1.5">
        Monday – Friday: 9:00am – 6:00pm AEST<br />
        Saturday: 10:00am – 2:00pm AEST
      </p>
    ),
  },
]

const subjects = [
  'Product Enquiry',
  'Order Support',
  'Returns & Refunds',
  'Shipping Question',
  'Wholesale / Bulk Enquiry',
  'General Enquiry',
]

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const set = field => e => setForm(p => ({ ...p, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 800)
  }

  const inputClass = 'w-full bg-transparent border-0 border-b font-sans text-sm text-cream placeholder-muted/40 py-2.5 focus:outline-none transition-colors rounded-none'
  const inputStyle = { borderBottomColor: '#252525' }
  const inputFocusStyle = { borderBottomColor: '#D4A847' }

  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.04] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Contact</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6">Get in Touch</h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-xl">
            Our Melbourne-based team is here to help with product questions, orders, returns, and general enquiries.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y border-line py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-16">

            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2 className="font-serif font-light text-2xl text-cream mb-9">Contact Information</h2>
              <div className="space-y-8">
                {details.map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex gap-4">
                    <Icon size={14} className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-[10px] font-semibold text-cream uppercase tracking-widest">{title}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="mt-10 p-5 bg-raised" style={{ borderLeft: '3px solid #D4A847' }}>
                <p className="font-sans text-xs text-warm leading-relaxed">
                  For order-related enquiries, please include your Amazon order number so we can assist you faster. For wholesale or bulk requests, let us know the products and quantities you have in mind.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-24">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <h3 className="font-serif font-light text-2xl text-cream mb-2">Message Received</h3>
                  <p className="font-sans text-sm text-warm">We aim to respond within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={set('name')}
                        className={inputClass}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#D4A847'}
                        onBlur={e => e.target.style.borderBottomColor = '#252525'}
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={set('email')}
                        className={inputClass}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#D4A847'}
                        onBlur={e => e.target.style.borderBottomColor = '#252525'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Optional"
                      value={form.company}
                      onChange={set('company')}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = '#D4A847'}
                      onBlur={e => e.target.style.borderBottomColor = '#252525'}
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2.5">
                      Subject *
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={set('subject')}
                      className={`${inputClass} cursor-pointer`}
                      style={{ ...inputStyle, backgroundColor: 'transparent', color: form.subject ? '#F0EAD6' : 'rgba(122,112,96,0.6)' }}
                      onFocus={e => e.target.style.borderBottomColor = '#D4A847'}
                      onBlur={e => e.target.style.borderBottomColor = '#252525'}
                    >
                      <option value="" style={{ background: '#1A1A1A' }}>Select a subject</option>
                      {subjects.map(s => (
                        <option key={s} value={s} style={{ background: '#1A1A1A' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] font-semibold text-cream/70 uppercase tracking-widest mb-2.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your enquiry in detail…"
                      value={form.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = '#D4A847'}
                      onBlur={e => e.target.style.borderBottomColor = '#252525'}
                    />
                  </div>

                  <p className="font-sans text-xs text-muted">
                    By submitting this form you agree to our{' '}
                    <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gold text-bg font-sans text-sm font-semibold tracking-wide hover:bg-gold-light active:bg-gold-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
