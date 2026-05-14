import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'

const COMPANY = {
  name:    'Chic Cub Ltd',
  number:  '[COMPANY_NUMBER]',
  address: 'Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW',
  email:   'support@chiccub.com',
  phone:   '+44 20 7946 0958',
}

const companyLinks = [
  { label: 'About Us',   path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Shop',       path: '/shop' },
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
    <footer className="bg-navy-900 text-gray-400">

      {/* Brand statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-10">
        <p className="font-serif italic text-white text-3xl lg:text-4xl font-normal max-w-2xl leading-snug">
          "Specialized digital solutions &amp; global retail excellence."
        </p>
        <div className="w-16 h-px bg-gold mt-6" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-5">
              <span className="font-serif italic text-white text-lg">Chic</span>
              <span className="font-sans font-light text-gray-400 text-lg tracking-wide">Cub</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              A UK-registered technology and retail company, built on transparency, technical excellence, and commercial integrity.
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="text-gold flex-shrink-0" />
                <a href="tel:+442079460958" className="hover:text-white transition-colors">{COMPANY.phone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="section-label text-white/50 mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map(l => (
                <li key={l.path}><Link to={l.path} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label text-white/50 mb-5">Legal</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map(l => (
                <li key={l.path}><Link to={l.path} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Legal compliance bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 text-xs text-gray-600">
            <div className="space-y-1 leading-relaxed">
              <p>
                <span className="text-gray-400 font-medium">{COMPANY.name}</span>
                {' · '}Company Registration Number:{' '}
                <span className="text-gray-400">{COMPANY.number}</span>
              </p>
              <p>Registered Office: {COMPANY.address}</p>
              <p className="text-gray-500">Chic Cub is a private limited company registered in England and Wales.</p>
            </div>
            <p className="text-gray-700 md:text-right flex-shrink-0">© {year} {COMPANY.name}. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  )
}
