import { Link } from 'react-router-dom'
import { ArrowRight, Code2, ShoppingBag, Shield, Globe, Award, Briefcase } from 'lucide-react'

const values = [
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

      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">About Us</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-2xl leading-tight">Who We Are</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">
            A UK-registered technology and retail company, built on transparency, technical excellence, and commercial integrity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white border-y border-border py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-serif font-normal text-3xl text-ink mb-6">Our Mission</h2>
              <p className="font-sans text-sm text-muted leading-7 mb-4">
                Chic Cub was founded with a singular vision: to demonstrate that enterprise-grade technology and world-class retail operations are not mutually exclusive. We exist at the intersection of two disciplines — IT consultancy and direct-to-consumer commerce — and use each to strengthen the other.
              </p>
              <p className="font-sans text-sm text-muted leading-7 mb-4">
                Our consultancy division builds scalable web infrastructure, bespoke software systems, and digital transformation programmes for international clients. This expertise powers our own e-commerce platform — giving us a living proof-of-concept for everything we recommend.
              </p>
              <p className="font-sans text-sm text-muted leading-7 mb-8">
                We are registered in England and Wales, operate from our Fitzrovia, London headquarters, and conduct all business in full compliance with UK corporate law, the Data Protection Act 2018, and UK Consumer Contracts Regulations 2013.
              </p>
              {/* Corporate info box */}
              <div className="border border-border border-l-[3px] border-l-gold p-6 bg-cream">
                <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">Corporate Information</h3>
                <div className="space-y-2 text-sm">
                  {[
                    ['Company Name',      'Chic Cub Ltd'],
                    ['Registered in',     'England and Wales'],
                    ['Registered Office', 'Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW'],
                    ['Company Number',    '[COMPANY_NUMBER]'],
                    ['Email',             'support@chiccub.com'],
                  ].map(([k,v]) => (
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
              <p className="font-sans text-sm text-muted leading-7 mb-8">
                Most retail businesses rely on third-party platforms. Chic Cub is different. Our in-house technology team has built and maintains our entire e-commerce ecosystem — the same team that advises international companies on digital infrastructure.
              </p>
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

      {/* Values */}
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

      {/* CTA */}
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
