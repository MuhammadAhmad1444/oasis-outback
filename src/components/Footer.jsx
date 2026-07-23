import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import { COMPANY } from '../data/company'

const companyLinks = [
  { label: 'About Us',   path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Shop',       path: '/shop' },
  { label: 'Cart',       path: '/cart' },
  { label: 'Contact Us', path: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy',   path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Refund Policy',    path: '/refund-policy' },
  { label: 'Shipping Policy',  path: '/shipping-policy' },
  { label: 'Cookie Policy',    path: '/cookie-policy' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-surface border-t border-line">

      {/* Brand quote strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 border-b border-line">
        <p className="font-serif italic font-light text-3xl lg:text-[2.4rem] text-cream max-w-2xl leading-snug">
          "Everyday essentials, curated and delivered across Australia."
        </p>
        <div className="w-10 h-px bg-gold mt-7" />
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <Link to="/" className="flex items-baseline gap-1 mb-6 group">
              <span className="font-serif italic text-lg text-cream group-hover:text-gold-light transition-colors duration-300">Oasis</span>
              <span className="font-sans font-light text-lg text-muted tracking-[0.18em] group-hover:text-warm transition-colors duration-300">OUTBACK</span>
            </Link>
            <p className="font-sans text-sm text-muted leading-relaxed mb-7 max-w-sm">
              Oasis Outback is an Australian online retailer offering quality home, garden, automotive, lighting and lifestyle products, delivered Australia-wide through our Amazon Australia storefront.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={12} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-muted leading-relaxed">{COMPANY.addressFull}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={12} className="text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-muted hover:text-cream transition-colors duration-200">{COMPANY.email}</a>
                <span className="text-faint">·</span>
                <span className="text-muted/70 text-xs">General</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={12} className="text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY.emailOrders}`} className="text-muted hover:text-cream transition-colors duration-200">{COMPANY.emailOrders}</a>
                <span className="text-faint">·</span>
                <span className="text-muted/70 text-xs">Orders</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={12} className="text-gold flex-shrink-0" />
                <a href={COMPANY.phoneHref} className="text-muted hover:text-cream transition-colors duration-200">{COMPANY.phone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label text-muted/60 mb-6">Company</h4>
            <ul className="space-y-3.5">
              {companyLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="font-sans text-sm text-muted hover:text-cream transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-muted/60 mb-6">Legal</h4>
            <ul className="space-y-3.5">
              {legalLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="font-sans text-sm text-muted hover:text-cream transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Compliance bar */}
      <div className="border-t border-line/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 text-[11px] text-faint leading-relaxed">
            <div className="space-y-1">
              <p>
                <span className="text-muted">{COMPANY.name}</span>
                {' · '}Australian online retailer
              </p>
              <p>Operated by {COMPANY.proprietor}, based in Forest Hill, {COMPANY.region}.</p>
              <p>{COMPANY.addressFull}</p>
            </div>
            <p className="md:text-right flex-shrink-0">© {year} {COMPANY.name}. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  )
}
