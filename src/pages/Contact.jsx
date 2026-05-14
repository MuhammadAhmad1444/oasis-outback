import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const details = [
  {icon:MapPin, title:'Registered Office', content:<address className="not-italic font-sans text-sm text-muted leading-relaxed mt-1">Office 1307, 60 Tottenham Court Road<br />Fitzrovia, London, W1T 2EW<br />United Kingdom</address>},
  {icon:Mail,   title:'Email',             content:<a href="mailto:support@chiccub.com" className="font-sans text-sm text-gold hover:underline mt-1 block">support@chiccub.com</a>},
  {icon:Phone,  title:'Telephone',         content:<a href="tel:+442079460958" className="font-sans text-sm text-muted hover:text-gold transition-colors mt-1 block">+44 20 7946 0958</a>},
  {icon:Clock,  title:'Business Hours',    content:<p className="font-sans text-sm text-muted leading-relaxed mt-1">Monday – Friday: 09:00 – 18:00 GMT<br />Saturday: 10:00 – 14:00 GMT</p>},
]

export default function Contact() {
  const [form, setForm]           = useState({name:'',email:'',company:'',subject:'',message:''})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const set = f => e => setForm(p => ({...p, [f]: e.target.value}))
  const handleSubmit = e => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true) }, 800) }
  const inp = 'w-full bg-transparent border-0 border-b border-border font-sans text-sm text-ink placeholder-muted/50 py-2.5 focus:outline-none focus:border-ink transition-colors rounded-none'

  return (
    <div className="bg-cream">

      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Contact</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5">Get in Touch</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-xl">
            Our London-based team is available for consultancy enquiries, retail support, and general correspondence.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2 className="font-serif font-normal text-2xl text-ink mb-8">Contact Information</h2>
              <div className="space-y-7">
                {details.map(({icon:Icon,title,content}) => (
                  <div key={title} className="flex gap-4">
                    <Icon size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-[11px] font-semibold text-ink uppercase tracking-wider">{title}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l-4 border-gold bg-cream-dark p-5 mt-10">
                <p className="font-sans text-xs text-muted leading-relaxed">
                  For business partnerships, IT consultancy scoping, or media enquiries, please include your company name and a brief description of your requirements.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-20">
                  <CheckCircle size={40} className="text-gold mx-auto mb-5" />
                  <h3 className="font-serif font-normal text-2xl text-ink mb-2">Message Received</h3>
                  <p className="font-sans text-sm text-muted">We aim to respond within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-7">
                    <div>
                      <label className="block font-sans text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" required placeholder="Jane Smith" value={form.name} onChange={set('name')} className={inp} />
                    </div>
                    <div>
                      <label className="block font-sans text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" required placeholder="jane@company.com" value={form.email} onChange={set('email')} className={inp} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">Company</label>
                    <input type="text" placeholder="Optional" value={form.company} onChange={set('company')} className={inp} />
                  </div>
                  <div>
                    <label className="block font-sans text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">Subject *</label>
                    <select required value={form.subject} onChange={set('subject')} className={inp}>
                      <option value="">Select a subject</option>
                      <option>IT Consultancy Enquiry</option>
                      <option>Retail / Product Enquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Order Support</option>
                      <option>General Enquiry</option>
                      <option>Media / Press</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-[11px] font-semibold text-ink uppercase tracking-wider mb-2">Message *</label>
                    <textarea required rows={5} placeholder="Please describe your enquiry in detail..." value={form.message} onChange={set('message')} className={`${inp} resize-none`} />
                  </div>
                  <p className="font-sans text-xs text-muted">
                    By submitting this form you agree to our{' '}
                    <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
                  </p>
                  <button type="submit" disabled={loading}
                    className="w-full py-3.5 bg-navy-900 text-white font-sans text-sm font-medium tracking-wide hover:bg-navy-950 transition-colors disabled:opacity-60"
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
