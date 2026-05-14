# Chic Cub — Editorial Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign all 10 pages with an Editorial Luxury aesthetic — DM Serif Display + DM Sans typography, warm cream backgrounds, hairline borders, restrained gold accents.

**Architecture:** Pure visual layer refactor. No routing, content, or data changes. 13 files modified in-place; no new files created. Sequenced foundation-first: tokens → global components → pages.

**Tech Stack:** React 18, Vite 4, Tailwind CSS 3, lucide-react, react-router-dom 6

---

## File Map

| File | Action |
|---|---|
| `index.html` | Update Google Fonts to DM Serif Display + DM Sans |
| `tailwind.config.js` | Add cream, ink, muted, border tokens; fontFamily |
| `src/index.css` | Body font, legal-content styles, notice-box, section-label |
| `src/components/Navbar.jsx` | Transparent→white scroll; editorial logo; animated underline; full-screen mobile menu |
| `src/components/Footer.jsx` | Brand statement; gold rule; 4-col grid |
| `src/components/CookieBanner.jsx` | Floating pill at bottom-centre |
| `src/components/LegalPage.jsx` | Cream header (replaces navy) |
| `src/pages/Home.jsx` | Full editorial redesign |
| `src/pages/About.jsx` | Cream header; pullquote layout; gold accent box |
| `src/pages/Services.jsx` | Cream header; numeral card overlays |
| `src/pages/Shop.jsx` | Cream header; refined filter + cards |
| `src/pages/Contact.jsx` | Cream header; bottom-border inputs |

---

## Task 1: Design Tokens

**Files:** `index.html`, `tailwind.config.js`, `src/index.css`

- [ ] **Step 1: Update Google Fonts in index.html**

Replace the existing `<link>` font tags with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Replace tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF8F5', dark: '#F0EDE8' },
        navy:  { 800: '#142d5e', 900: '#0B1F3A', 950: '#071528' },
        ink:   '#1A1A1A',
        muted: '#6B6B6B',
        gold:  { light: '#D4B96A', DEFAULT: '#C9A84C', dark: '#A8891F' },
        border:'#E8E4DE',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Replace src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-cream text-ink antialiased; font-family: 'DM Sans', system-ui, sans-serif; }
}

@layer components {
  .section-label { @apply text-gold font-sans text-[10px] font-semibold tracking-[0.2em] uppercase; }

  .legal-content h2  { @apply font-serif font-normal text-xl text-ink mt-10 mb-3 pb-2; border-bottom: 1px solid #C9A84C; }
  .legal-content h3  { @apply text-sm font-semibold text-ink mt-6 mb-2; }
  .legal-content p   { @apply text-muted text-sm leading-7 mb-4; }
  .legal-content ul  { @apply list-disc ml-5 space-y-1.5 text-sm text-muted leading-7 mb-4; }
  .legal-content ol  { @apply list-decimal ml-5 space-y-1.5 text-sm text-muted leading-7 mb-4; }
  .legal-content a   { @apply text-gold hover:underline; }
  .legal-content strong { @apply font-semibold text-ink; }
  .legal-content .notice-box { @apply bg-cream-dark border-l-4 border-gold rounded-r-lg p-5 text-sm text-ink mb-6; }
}
```

- [ ] **Step 4: Verify**

`npm run dev` → http://localhost:5174. Page background should be warm cream `#FAF8F5`. No console errors.

- [ ] **Step 5: Commit**

```bash
git add index.html tailwind.config.js src/index.css
git commit -m "design: editorial luxury tokens — DM Serif Display, cream palette"
```

---

## Task 2: Navbar

**Files:** `src/components/Navbar.jsx`

- [ ] **Step 1: Replace Navbar.jsx**

```jsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Shop',     path: '/shop' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Link to="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
              <span className="font-serif italic text-xl text-ink">Chic</span>
              <span className="font-sans font-light text-xl tracking-wide text-muted">Cub</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative text-[13px] tracking-wide font-sans transition-colors duration-200 group ${
                      isActive ? 'text-gold' : 'text-ink hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="ml-2 px-5 py-2 border border-ink text-ink text-[13px] font-sans font-medium hover:bg-ink hover:text-white transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>

            <button
              className="lg:hidden text-ink p-1 z-[60] relative"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div className={`fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={({ isActive }) =>
                `font-serif text-4xl font-normal transition-all duration-300 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${isActive ? 'text-gold' : 'text-ink hover:text-gold'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 border border-ink text-ink text-sm font-sans hover:bg-ink hover:text-white transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify**

- Logo: italic serif "Chic" + light sans "Cub", no icon box
- Scroll down → navbar turns white with shadow
- Hover nav link → gold underline slides in from left
- Mobile hamburger → full-screen cream overlay with `text-4xl` serif links

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "design: editorial navbar — transparent scroll, full-screen mobile menu"
```

---

## Task 3: Footer

**Files:** `src/components/Footer.jsx`

- [ ] **Step 1: Replace Footer.jsx**

```jsx
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

      {/* Compliance bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 text-xs text-gray-600">
            <div className="space-y-1 leading-relaxed">
              <p><span className="text-gray-400 font-medium">{COMPANY.name}</span>{' · '}Company Registration Number:{' '}<span className="text-gray-400">{COMPANY.number}</span></p>
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
```

- [ ] **Step 2: Verify** — Italic serif brand statement + gold rule visible at top of footer on all pages.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "design: editorial footer — brand statement, gold rule"
```

---

## Task 4: CookieBanner

**Files:** `src/components/CookieBanner.jsx`

- [ ] **Step 1: Replace CookieBanner.jsx**

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('chiccub_cookie_consent')) {
      const t = setTimeout(() => setShow(true), 1000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept  = () => { localStorage.setItem('chiccub_cookie_consent', 'accepted');      setShow(false) }
  const decline = () => { localStorage.setItem('chiccub_cookie_consent', 'essential_only'); setShow(false) }

  if (!show) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-xl">
      <div className="bg-white border border-border rounded-2xl shadow-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-sans text-[13px] text-muted leading-relaxed flex-1">
          We use cookies to enhance your experience.{' '}
          <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>
          {' & '}
          <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={decline} className="font-sans text-[13px] text-muted hover:text-ink transition-colors">Essential only</button>
          <button onClick={accept}  className="px-4 py-1.5 bg-gold text-navy-900 font-sans text-[13px] font-semibold rounded-lg hover:bg-gold-light transition-colors">Accept All</button>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify** — Clear localStorage, reload. After 1s a floating pill appears centred at the bottom.

- [ ] **Step 3: Commit**

```bash
git add src/components/CookieBanner.jsx
git commit -m "design: cookie banner as floating pill"
```

---

## Task 5: LegalPage Component

**Files:** `src/components/LegalPage.jsx`

- [ ] **Step 1: Replace LegalPage.jsx**

```jsx
export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="bg-cream">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-4 block">Legal</span>
          <h1 className="font-serif font-normal text-3xl lg:text-4xl text-ink mb-2">{title}</h1>
          {lastUpdated && <p className="font-sans text-sm text-muted">Last updated: {lastUpdated}</p>}
        </div>
      </section>
      <section className="bg-white border-t border-border py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 legal-content">
          {children}
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify all 5 legal pages** — Visit `/privacy-policy`, `/terms-of-service`, `/refund-policy`, `/shipping-policy`, `/cookie-policy`. Each should have a cream header with gold label, DM Serif Display headline, and cream+gold-left-border notice box.

- [ ] **Step 3: Commit**

```bash
git add src/components/LegalPage.jsx
git commit -m "design: legal pages — cream header, gold h2 rules, cream notice box"
```

---

## Task 6: Homepage

**Files:** `src/pages/Home.jsx`

- [ ] **Step 1: Replace Home.jsx**

```jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react'

const stats       = [{ value:'50+',label:'Enterprise Clients'},{value:'12+',label:'Countries Served'},{value:'£2M+',label:'Revenue Processed'},{value:'99.9%',label:'Uptime SLA'}]
const itFeatures  = ['Web Development & Architecture','Software Infrastructure Design','Digital Strategy & Transformation','Technical Governance & Compliance']
const retFeatures = ['Curated Premium Product Catalogue','End-to-End Sales Management','Integrated Logistics & Fulfilment','UK Consumer Contracts Compliant']
const products    = [
  {id:1,name:'Executive Leather Tote', category:'Accessories',  price:'£89.00', badge:'New Arrival'},
  {id:2,name:'Merino Wool Scarf',      category:'Lifestyle',    price:'£45.00', badge:null},
  {id:3,name:'Slim Cardholder',        category:'Accessories',  price:'£29.00', badge:'Best Seller'},
  {id:4,name:'Cashmere Throw Blanket', category:'Home & Living',price:'£120.00',badge:null},
]
const trustItems  = [
  {icon:Globe,     label:'Global Reach',     desc:'Serving clients across 12+ countries'},
  {icon:Shield,    label:'GDPR Compliant',    desc:'Full UK data protection compliance'},
  {icon:TrendingUp,label:'Scalable Solutions',desc:'Built to grow with your business'},
  {icon:Users,     label:'Enterprise Clients',desc:'50+ active enterprise partnerships'},
]

export default function Home() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42vw] bg-cream-dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            <span className="section-label mb-6 block">London · Est. 2024 · UK Registered</span>
            <h1 className="font-serif font-normal text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.1] mb-6">
              Specialized<br />Digital Solutions<br />&amp; Global Retail <em>Excellence.</em>
            </h1>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-base text-muted leading-7 max-w-md mb-10">
              Bridging high-level IT consultancy and consumer-focused retail. Enterprise technology and curated products, delivered from London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-sans text-sm font-medium hover:bg-navy-950 transition-colors">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/shop" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gold font-sans text-sm font-medium hover:text-gold-dark transition-colors">
                Shop the Collection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center py-4 ${i < stats.length-1 ? 'border-r border-border' : ''}`}>
                <p className="font-serif font-normal text-4xl text-ink">{s.value}</p>
                <p className="font-sans text-xs text-muted mt-1.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">What We Do</span>
            <h2 className="font-serif font-normal text-3xl lg:text-4xl text-ink">A Dual-Model Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {num:'01',icon:Code2,    title:'IT Consultancy',              features:itFeatures,  link:'/services#it-consultancy',cta:'Learn More',desc:'Enterprise-grade web development, software infrastructure design, and digital strategy for international clients. Scalable, governance-aligned solutions built for growth.'},
              {num:'02',icon:ShoppingBag,title:'Direct-to-Consumer Retail', features:retFeatures, link:'/shop',cta:'View Catalogue',desc:"Curated lifestyle products through our own proprietary platform — powered by the same technology we build for enterprise clients. End-to-end sales with integrated logistics."},
            ].map(({num,icon:Icon,title,desc,features,link,cta}) => (
              <div key={num} className="relative bg-white border border-border p-8 lg:p-10 overflow-hidden">
                <span className="absolute top-4 right-6 font-serif text-[80px] text-ink/[0.04] leading-none select-none">{num}</span>
                <Icon size={18} className="text-gold mb-5" />
                <h3 className="font-serif font-normal text-2xl text-ink mb-4">{title}</h3>
                <p className="font-sans text-sm text-muted leading-7 mb-6">{desc}</p>
                <ul className="space-y-2 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 font-sans text-sm text-muted">
                      <CheckCircle size={13} className="text-gold flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link to={link} className="inline-flex items-center gap-1.5 text-gold font-sans text-sm font-medium hover:gap-2.5 transition-all">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white border-y border-border py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label mb-4 block">Who We Are</span>
              <p className="font-serif italic font-normal text-3xl lg:text-4xl text-ink leading-snug">
                "Technology-first. Retail-ready. UK Registered."
              </p>
              <div className="w-10 h-px bg-gold mt-8 mb-8" />
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-sans text-sm font-medium hover:bg-navy-950 transition-colors">
                About Chic Cub <ArrowRight size={15} />
              </Link>
            </div>
            <div>
              <p className="font-sans text-sm text-muted leading-7 mb-8">
                Chic Cub is a London-based private limited company at the intersection of enterprise technology and consumer commerce. Founded on principles of technical excellence and commercial transparency, we operate in full compliance with UK corporate law and GDPR.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustItems.map(({icon:Icon,label,desc}) => (
                  <div key={label} className="border-t border-border pt-4">
                    <Icon size={16} className="text-gold mb-2.5" />
                    <p className="font-sans text-sm font-medium text-ink mb-1">{label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label mb-3 block">Current Inventory</span>
              <h2 className="font-serif font-normal text-3xl text-ink">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm text-gold font-medium hover:gap-2.5 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(p => (
              <div key={p.id} className="bg-white border border-border hover:border-gold/40 transition-colors">
                <div className="relative bg-cream-dark h-52 flex items-center justify-center">
                  <ShoppingBag size={32} className="text-border" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-navy-900 text-white font-sans text-[10px] font-semibold px-2.5 py-1 tracking-widest uppercase">{p.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <p className="section-label mb-1.5">{p.category}</p>
                  <p className="font-serif font-normal text-base text-ink mb-3">{p.name}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <Link to="/shop" className="font-sans text-xs text-muted hover:text-gold transition-colors">View →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-serif italic font-normal text-3xl lg:text-4xl text-white mb-8 max-w-xl mx-auto leading-snug">
            "Ready to work with us?"
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy-900 font-sans text-sm font-semibold hover:bg-gold-light transition-colors">
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
```

- [ ] **Step 2: Verify** — Cream hero with `bg-cream-dark` right block (desktop), oversized serif headline with italic "Excellence.", stats bar with gold vertical rules, `01`/`02` watermarks on service cards, italic pullquote in About section, cream-dark product image areas.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "design: editorial homepage — serif hero, cream palette, hairline cards"
```

---

## Task 7: About, Services, Shop, Contact Pages

**Files:** `src/pages/About.jsx`, `src/pages/Services.jsx`, `src/pages/Shop.jsx`, `src/pages/Contact.jsx`

- [ ] **Step 1: Replace About.jsx**

```jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Award, Briefcase } from 'lucide-react'

const values  = [
  {icon:Shield,   title:'Compliance First',      desc:'Every operation is designed around UK corporate law, GDPR, and financial regulation.'},
  {icon:Globe,    title:'Global Perspective',    desc:'We serve clients across multiple jurisdictions while maintaining rigorous UK governance.'},
  {icon:Code2,    title:'Proprietary Technology',desc:'Our IT consultancy expertise directly powers our own retail platform.'},
  {icon:Award,    title:'Transparent Operations',desc:'Full disclosure of business structure, corporate information, and legal standing at all times.'},
]
const pillars = [
  {icon:Code2,       label:'Proprietary Platform', desc:'Built entirely in-house using our own engineering expertise — no third-party platforms.'},
  {icon:ShoppingBag, label:'Direct-to-Consumer',   desc:'No intermediaries. Products move from quality-assured suppliers to customers efficiently.'},
  {icon:Briefcase,   label:'Enterprise Discipline', desc:'Retail operations governed by the same rigour as our B2B consultancy engagements.'},
]

export default function About() {
  return (
    <div className="bg-cream">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">About Us</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-2xl leading-tight">Who We Are</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">A UK-registered technology and retail company, built on transparency, technical excellence, and commercial integrity.</p>
        </div>
      </section>

      <section className="bg-white border-y border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-serif font-normal text-3xl text-ink mb-6">Our Mission</h2>
              <p className="font-sans text-sm text-muted leading-7 mb-4">Chic Cub was founded with a singular vision: to demonstrate that enterprise-grade technology and world-class retail operations are not mutually exclusive. We exist at the intersection of two disciplines — IT consultancy and direct-to-consumer commerce — and use each to strengthen the other.</p>
              <p className="font-sans text-sm text-muted leading-7 mb-4">Our consultancy division builds scalable web infrastructure, bespoke software systems, and digital transformation programmes for international clients. This expertise powers our own e-commerce platform — giving us a living proof-of-concept for everything we recommend.</p>
              <p className="font-sans text-sm text-muted leading-7 mb-8">We are registered in England and Wales, operate from our Fitzrovia, London headquarters, and conduct all business in full compliance with UK corporate law, the Data Protection Act 2018, and UK Consumer Contracts Regulations 2013.</p>
              <div className="border border-border border-l-[3px] border-l-gold p-6 bg-cream">
                <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">Corporate Information</h3>
                <div className="space-y-2 text-sm">
                  {[['Company Name','Chic Cub Ltd'],['Registered in','England and Wales'],['Registered Office','Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW'],['Company Number','[COMPANY_NUMBER]'],['Email','support@chiccub.com']].map(([k,v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="font-sans font-medium text-ink w-36 flex-shrink-0">{k}:</span>
                      <span className="font-sans text-muted">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif font-normal text-3xl text-ink mb-6">The Proprietary Advantage</h2>
              <p className="font-sans text-sm text-muted leading-7 mb-8">Most retail businesses rely on third-party platforms. Chic Cub is different. Our in-house technology team has built and maintains our entire e-commerce ecosystem — the same team that advises international companies on digital infrastructure.</p>
              <div className="space-y-6">
                {pillars.map(({icon:Icon,label,desc}) => (
                  <div key={label} className="flex gap-4 border-t border-border pt-5">
                    <Icon size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm font-medium text-ink mb-1">{label}</p>
                      <p className="font-sans text-sm text-muted leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Our Principles</span>
            <h2 className="font-serif font-normal text-3xl text-ink">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({icon:Icon,title,desc}) => (
              <div key={title} className="bg-white border-t-2 border-gold pt-6 p-6">
                <Icon size={16} className="text-gold mb-4" />
                <h3 className="font-sans text-sm font-semibold text-ink mb-2">{title}</h3>
                <p className="font-sans text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif italic font-normal text-xl text-white">"Want to know more about our operations?"</p>
          <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-900 font-sans text-sm font-semibold hover:bg-gold-light transition-colors">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Replace Services.jsx**

```jsx
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Server, BarChart3, Globe, ShoppingBag, Truck, CreditCard, CheckCircle } from 'lucide-react'

const itServices = [
  {icon:Code2,    title:'Web Development & Architecture',   desc:'Full-stack web applications built with modern frameworks. Performant, scalable systems that meet international compliance standards.',    features:['React / Next.js / TypeScript','RESTful & GraphQL APIs','Cloud-native deployment (AWS / Azure / GCP)','Accessibility (WCAG 2.1 AA)'],num:'01'},
  {icon:Server,   title:'Software Infrastructure Design',    desc:'End-to-end infrastructure consulting covering cloud architecture, DevOps pipelines, database design, and system integration. Designed for redundancy and global scalability.',features:['Cloud Architecture & Migration','CI/CD Pipeline Implementation','Database Design & Optimisation','Security Architecture & Pen Testing'],num:'02'},
  {icon:BarChart3,title:'Digital Strategy & Transformation',desc:'Strategic advisory for businesses navigating digital transformation. Phased roadmaps aligned with business objectives and governance requirements.',                      features:['Technology Audits & Gap Analysis','Digital Roadmap Planning','Vendor Selection & Management','Change Management Support'],num:'03'},
  {icon:Globe,    title:'Technical Governance & Compliance',desc:'Helping organisations align technology practices with UK and international regulatory requirements including GDPR, ISO 27001, and PCI DSS.',                               features:['GDPR Compliance Assessments','Data Protection Frameworks','ISO 27001 Preparation','PCI DSS Advisory'],num:'04'},
]
const retailServices = [
  {icon:ShoppingBag,title:'Curated Product Catalogue',        desc:'A carefully selected range of premium lifestyle goods, sourced from quality-assured suppliers and managed through our proprietary inventory system.'},
  {icon:Truck,      title:'Integrated Logistics & Fulfilment',desc:'End-to-end order management from purchase to delivery, with real-time tracking and our 14-day consumer return guarantee.'},
  {icon:CreditCard, title:'Secure Payment Processing',        desc:'PCI DSS-compliant processing supporting major card schemes and digital wallets, secured with 3D Secure authentication.'},
]

export default function Services() {
  return (
    <div className="bg-cream">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Our Services</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-xl leading-tight">Two Divisions. One Standard.</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">Whether you're an enterprise client or a consumer, Chic Cub operates to the same high standard across both divisions.</p>
        </div>
      </section>

      <section className="bg-white border-y border-border py-24 lg:py-32" id="it-consultancy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <Code2 size={18} className="text-gold" />
            <div>
              <span className="section-label block mb-0.5">Division A</span>
              <h2 className="font-serif font-normal text-3xl text-ink">IT Consultancy</h2>
            </div>
          </div>
          <p className="font-sans text-sm text-muted leading-7 max-w-2xl mb-12">Our enterprise technology division provides international clients with the technical expertise to build, scale, and govern complex digital systems. We operate as a strategic partner — embedded in your technology decision-making.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {itServices.map(({icon:Icon,title,desc,features,num}) => (
              <div key={title} className="relative border border-border p-8 bg-cream overflow-hidden">
                <span className="absolute top-4 right-6 font-serif text-[64px] text-ink/[0.04] leading-none select-none">{num}</span>
                <Icon size={16} className="text-gold mb-5" />
                <h3 className="font-serif font-normal text-xl text-ink mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted leading-7 mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 font-sans text-sm text-muted">
                      <CheckCircle size={12} className="text-gold flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" id="retail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <ShoppingBag size={18} className="text-gold" />
            <div>
              <span className="section-label block mb-0.5">Division B</span>
              <h2 className="font-serif font-normal text-3xl text-ink">Direct-to-Consumer Retail</h2>
            </div>
          </div>
          <p className="font-sans text-sm text-muted leading-7 max-w-2xl mb-12">Our retail division operates a curated online store powered entirely by our proprietary infrastructure. Every product is quality-assessed, every transaction PCI DSS secured.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {retailServices.map(({icon:Icon,title,desc}) => (
              <div key={title} className="bg-white border border-border p-7">
                <Icon size={16} className="text-gold mb-4" />
                <h3 className="font-serif font-normal text-lg text-ink mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted leading-7">{desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy-900 p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="section-label text-gold mb-3 block">Launching Autumn 2026</span>
              <h3 className="font-serif italic font-normal text-2xl text-white mb-2">Full Catalogue Coming Soon</h3>
              <p className="font-sans text-sm text-gray-300 max-w-lg leading-relaxed">Browse our current inventory or register your interest for priority access and exclusive launch offers.</p>
            </div>
            <Link to="/shop" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-900 font-sans text-sm font-semibold hover:bg-gold-light transition-colors">
              Browse Inventory <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h3 className="font-serif font-normal text-2xl text-ink mb-3">Interested in our consultancy services?</h3>
          <p className="font-sans text-sm text-muted mb-7">Let's discuss how Chic Cub's enterprise technology expertise can benefit your organisation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-navy-900 text-white font-sans text-sm font-medium hover:bg-navy-950 transition-colors">
            Enquire Now <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Replace Shop.jsx**

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Package, Lock } from 'lucide-react'

const categories = ['All','Accessories','Lifestyle','Home & Living','Stationery']
const products = [
  {id:1, name:'Executive Leather Tote Bag',   category:'Accessories',  price:'£89.00', badge:'New Arrival',desc:'Full-grain leather with brass hardware. 13″ laptop compatible.'},
  {id:2, name:'Merino Wool Scarf — Charcoal', category:'Lifestyle',    price:'£45.00', badge:null,         desc:'Lightweight 100% merino wool. 200cm × 30cm. Made in Scotland.'},
  {id:3, name:'Slim Cardholder — Black',       category:'Accessories',  price:'£29.00', badge:'Best Seller',desc:'Genuine leather. Holds 8 cards. RFID blocking.'},
  {id:4, name:'Cashmere Throw Blanket',        category:'Home & Living',price:'£120.00',badge:null,         desc:'Grade A cashmere blend. 140cm × 180cm. Ivory/Oatmeal.'},
  {id:5, name:'Ceramic Pour-Over Set',         category:'Home & Living',price:'£65.00', badge:'New Arrival',desc:'Handcrafted ceramic dripper and carafe. 600ml capacity.'},
  {id:6, name:'Stainless Steel Water Bottle',  category:'Lifestyle',    price:'£38.00', badge:null,         desc:'Double-wall insulated. 500ml. 24h cold / 12h hot.'},
  {id:7, name:'Leather-Bound Journal',         category:'Stationery',   price:'£35.00', badge:null,         desc:'Full-grain leather cover. 240 ruled pages. Lay-flat binding.'},
  {id:8, name:'Bamboo Desk Organiser',         category:'Home & Living',price:'£49.00', badge:'Best Seller',desc:'Sustainable bamboo. 5 compartments. 30cm × 15cm × 10cm.'},
  {id:9, name:'Merino Crew Neck Jumper',       category:'Lifestyle',    price:'£95.00', badge:null,         desc:'100% merino wool. Mid-weight. Navy, Oatmeal, Forest.'},
  {id:10,name:'Solid Brass Card Stand',        category:'Stationery',   price:'£22.00', badge:null,         desc:'Solid brass. Holds business cards or notes. Weighted base.'},
]
const policies = [
  {icon:Package,    title:'Shipping & Delivery', body:'Standard 3–5 days · Express 1–2 days',link:'/shipping-policy'},
  {icon:ShoppingBag,title:'Returns & Refunds',   body:'14-day right to cancel under UK law',  link:'/refund-policy'},
  {icon:Lock,       title:'Secure Payments',     body:'PCI DSS Level 1 compliant checkout',   link:'/privacy-policy'},
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.category === active)
  return (
    <div className="bg-cream">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Current Inventory</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-xl leading-tight">The Chic Cub Collection</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">Curated premium lifestyle products. Every item is quality-assessed and ships with our consumer protection guarantee.</p>
        </div>
      </section>

      <div className="border-y border-gold/40 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 text-center">
          <p className="font-sans text-sm text-ink">Full catalogue launching <strong>Autumn 2026</strong> — register your interest for priority access.</p>
        </div>
      </div>

      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1 font-sans text-xs text-muted">
          <span>Secure Checkout · PCI DSS Compliant</span>
          <span>UK &amp; International Delivery</span>
          <span>14-Day Returns Policy</span>
          <span>Consumer Contracts Regulations Compliant</span>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-1.5 font-sans text-sm border transition-colors ${active===c ? 'bg-ink text-white border-ink' : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map(p => (
              <div key={p.id} className="bg-white border border-border hover:border-gold/40 transition-colors">
                <div className="relative bg-cream-dark h-52 flex items-center justify-center">
                  <ShoppingBag size={32} className="text-border" />
                  {p.badge && <span className="absolute top-3 left-3 bg-navy-900 text-white font-sans text-[10px] font-semibold px-2.5 py-1 tracking-widest uppercase">{p.badge}</span>}
                </div>
                <div className="p-5">
                  <p className="section-label mb-1.5">{p.category}</p>
                  <h3 className="font-serif font-normal text-base text-ink mb-2">{p.name}</h3>
                  <p className="font-sans text-xs text-muted leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-gold">{p.price}</span>
                    <button className="font-sans text-xs font-medium text-white bg-navy-900 px-3 py-1.5 hover:bg-navy-950 transition-colors">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
```

- [ ] **Step 4: Replace Contact.jsx**

```jsx
import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const details = [
  {icon:MapPin,title:'Registered Office',content:<address className="not-italic font-sans text-sm text-muted leading-relaxed mt-1">Office 1307, 60 Tottenham Court Road<br/>Fitzrovia, London, W1T 2EW<br/>United Kingdom</address>},
  {icon:Mail,  title:'Email',           content:<a href="mailto:support@chiccub.com" className="font-sans text-sm text-gold hover:underline mt-1 block">support@chiccub.com</a>},
  {icon:Phone, title:'Telephone',       content:<a href="tel:+442079460958" className="font-sans text-sm text-muted hover:text-gold transition-colors mt-1 block">+44 20 7946 0958</a>},
  {icon:Clock, title:'Business Hours',  content:<p className="font-sans text-sm text-muted leading-relaxed mt-1">Monday – Friday: 09:00 – 18:00 GMT<br/>Saturday: 10:00 – 14:00 GMT</p>},
]

export default function Contact() {
  const [form,setForm]         = useState({name:'',email:'',company:'',subject:'',message:''})
  const [submitted,setSubmitted] = useState(false)
  const [loading,setLoading]   = useState(false)
  const set = f => e => setForm(p => ({...p,[f]:e.target.value}))
  const handleSubmit = e => { e.preventDefault(); setLoading(true); setTimeout(()=>{setLoading(false);setSubmitted(true)},800) }
  const inp = 'w-full bg-transparent border-0 border-b border-border font-sans text-sm text-ink placeholder-muted/50 py-2.5 focus:outline-none focus:border-ink transition-colors rounded-none'

  return (
    <div className="bg-cream">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Contact</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5">Get in Touch</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-xl">Our London-based team is available for consultancy enquiries, retail support, and general correspondence.</p>
        </div>
      </section>

      <section className="bg-white border-y border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14">
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
                <p className="font-sans text-xs text-muted leading-relaxed">For business partnerships, IT consultancy scoping, or media enquiries, please include your company name and a brief description of your requirements.</p>
              </div>
            </div>
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
                  <p className="font-sans text-xs text-muted">By submitting this form you agree to our <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.</p>
                  <button type="submit" disabled={loading} className="w-full py-3.5 bg-navy-900 text-white font-sans text-sm font-medium tracking-wide hover:bg-navy-950 transition-colors disabled:opacity-60">
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
```

- [ ] **Step 5: Verify all four pages**

| URL | Check |
|---|---|
| `/about` | Cream header; gold left-border corporate info box; `border-t-2 border-gold` value cards |
| `/services` | Cream header; `text-ink/[0.04]` numeral watermarks on IT cards |
| `/shop` | Cream header; ink-filled active filter pill; `bg-cream-dark` product image area |
| `/contact` | Cream header; bottom-border-only inputs; full-width navy submit button |

- [ ] **Step 6: Commit**

```bash
git add src/pages/About.jsx src/pages/Services.jsx src/pages/Shop.jsx src/pages/Contact.jsx
git commit -m "design: editorial inner pages — cream headers, refined layouts"
```

---

## Task 8: Final QA

- [ ] **Step 1: Full 10-page walkthrough**

Visit every route and verify the key editorial signals are present:

| Route | Must see |
|---|---|
| `/` | Cream hero + `bg-cream-dark` right block; `01`/`02` watermarks; serif italic pullquote |
| `/about` | Cream header; gold left-border corporate box |
| `/services` | Cream header; numeral overlays on cards |
| `/shop` | Cream header; ink active filter |
| `/contact` | Cream header; bottom-border inputs |
| `/privacy-policy` | Cream header; gold h2 underline; cream notice box |
| All legal pages | Same treatment as above |
| All pages | Footer brand statement visible; floating cookie pill on fresh load |

- [ ] **Step 2: Mobile check (375px)**

DevTools → 375px viewport:
- Hamburger opens full-screen cream menu
- Hero headline wraps cleanly (no overflow)
- Stats bar is 2×2 grid
- Products single column

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "design: complete editorial luxury redesign — DM Serif Display, cream palette, hairline borders"
```
