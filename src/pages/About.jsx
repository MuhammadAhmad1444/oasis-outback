import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Award, Briefcase } from 'lucide-react'

const values = [
  { icon: Shield,   title: 'Compliance First',       desc: 'Every operation is designed around UK corporate law, GDPR, and financial regulation.' },
  { icon: Globe,    title: 'Global Perspective',     desc: 'We serve clients across multiple jurisdictions while maintaining rigorous UK governance.' },
  { icon: Code2,    title: 'Proprietary Technology', desc: 'Our IT consultancy expertise directly powers our own retail platform.' },
  { icon: Award,    title: 'Transparent Operations', desc: 'Full disclosure of business structure, corporate information, and legal standing at all times.' },
]

const pillars = [
  { icon: Code2,        label: 'Proprietary Platform',  desc: 'Built entirely in-house using our own engineering expertise — no third-party platforms.' },
  { icon: ShoppingBag,  label: 'Direct-to-Consumer',    desc: 'No intermediaries. Products move from quality-assured suppliers to customers efficiently.' },
  { icon: Briefcase,    label: 'Enterprise Discipline', desc: 'Retail operations governed by the same rigour as our B2B consultancy engagements.' },
]

const corporate = [
  ['Company Name',      'Chic Cub Ltd'],
  ['Registered in',     'England and Wales'],
  ['Registered Office', 'Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW'],
  ['Company Number',    '[COMPANY_NUMBER]'],
  ['Email',             'support@chiccub.com'],
]

export default function About() {
  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/[0.05] rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">About Us</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            Who We Are
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            A UK-registered technology and retail company, built on transparency, technical excellence, and commercial integrity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface border-y border-line py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="font-serif font-light text-3xl text-cream mb-7">Our Mission</h2>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-5">
                Chic Cub was founded with a singular vision: to demonstrate that enterprise-grade technology and world-class retail operations are not mutually exclusive. We exist at the intersection of two disciplines — IT consultancy and direct-to-consumer commerce — and use each to strengthen the other.
              </p>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-5">
                Our consultancy division builds scalable web infrastructure, bespoke software systems, and digital transformation programmes for international clients. This expertise powers our own e-commerce platform — giving us a living proof-of-concept for everything we recommend.
              </p>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                We are registered in England and Wales, operate from our Fitzrovia, London headquarters, and conduct all business in full compliance with UK corporate law, the Data Protection Act 2018, and UK Consumer Contracts Regulations 2013.
              </p>

              {/* Corporate info */}
              <div className="bg-raised border border-line p-6" style={{ borderLeft: '3px solid #D4A847' }}>
                <h3 className="label text-muted mb-5">Corporate Information</h3>
                <div className="space-y-3">
                  {corporate.map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <span className="font-sans text-xs font-medium text-cream w-36 flex-shrink-0">{k}:</span>
                      <span className="font-sans text-xs text-warm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif font-light text-3xl text-cream mb-7">The Proprietary Advantage</h2>
              <p className="font-sans text-sm text-warm leading-[1.9] mb-10">
                Most retail businesses rely on third-party platforms. Chic Cub is different. Our in-house technology team has built and maintains our entire e-commerce ecosystem — the same team that advises international companies on digital infrastructure.
              </p>
              <div className="space-y-7">
                {pillars.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-5 pt-6" style={{ borderTop: '1px solid #252525' }}>
                    <Icon size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm font-medium text-cream mb-1.5">{label}</p>
                      <p className="font-sans text-sm text-warm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="label mb-4 block">Our Principles</span>
            <h2 className="font-serif font-light text-3xl lg:text-[2.4rem] text-cream">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface border border-line hover:border-gold/20 p-6 transition-all duration-300 group"
                style={{ borderTop: '2px solid #D4A847' }}
              >
                <Icon size={14} className="text-gold mb-5 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-sans text-sm font-semibold text-cream mb-2.5">{title}</h3>
                <p className="font-sans text-xs text-warm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-7">
          <p className="font-serif italic font-light text-xl text-cream">
            "Want to know more about our operations?"
          </p>
          <Link to="/contact" className="flex-shrink-0 btn-primary">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
