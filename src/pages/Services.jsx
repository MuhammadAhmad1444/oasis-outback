import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Server, BarChart3, Globe, ShoppingBag, Truck, CreditCard, CheckCircle } from 'lucide-react'

const itServices = [
  {
    icon: Code2, num: '01', title: 'Web Development & Architecture',
    desc: 'Full-stack web applications built with modern frameworks. Performant, scalable systems meeting international compliance standards.',
    features: ['React / Next.js / TypeScript', 'RESTful & GraphQL APIs', 'Cloud-native deployment (AWS / Azure / GCP)', 'Accessibility (WCAG 2.1 AA)'],
  },
  {
    icon: Server, num: '02', title: 'Software Infrastructure Design',
    desc: 'End-to-end infrastructure consulting covering cloud architecture, DevOps pipelines, database design, and system integration.',
    features: ['Cloud Architecture & Migration', 'CI/CD Pipeline Implementation', 'Database Design & Optimisation', 'Security Architecture & Pen Testing'],
  },
  {
    icon: BarChart3, num: '03', title: 'Digital Strategy & Transformation',
    desc: 'Strategic advisory for businesses navigating digital transformation. Phased roadmaps aligned with business objectives and governance.',
    features: ['Technology Audits & Gap Analysis', 'Digital Roadmap Planning', 'Vendor Selection & Management', 'Change Management Support'],
  },
  {
    icon: Globe, num: '04', title: 'Technical Governance & Compliance',
    desc: 'Aligning technology practices with UK and international regulatory requirements including GDPR, ISO 27001, and PCI DSS.',
    features: ['GDPR Compliance Assessments', 'Data Protection Frameworks', 'ISO 27001 Preparation', 'PCI DSS Advisory'],
  },
]

const retailServices = [
  {
    icon: ShoppingBag, title: 'Curated Product Catalogue',
    desc: 'A carefully selected range of premium lifestyle goods, sourced from quality-assured suppliers and managed through our proprietary inventory system.',
  },
  {
    icon: Truck, title: 'Integrated Logistics & Fulfilment',
    desc: 'End-to-end order management from purchase to delivery, with real-time tracking and our 14-day consumer return guarantee.',
  },
  {
    icon: CreditCard, title: 'Secure Payment Processing',
    desc: 'PCI DSS-compliant processing supporting major card schemes and digital wallets, secured with 3D Secure authentication.',
  },
]

export default function Services() {
  return (
    <div className="bg-bg">

      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <span className="label mb-5 block">Our Services</span>
          <h1 className="font-serif font-light text-5xl lg:text-6xl text-cream mb-6 max-w-xl leading-tight">
            Two Divisions.<br />One Standard.
          </h1>
          <div className="w-10 h-px bg-gold mb-7" />
          <p className="font-sans text-base text-warm leading-[1.8] max-w-2xl">
            Whether you're an enterprise client or a consumer, Chic Cub operates to the same high standard across both divisions.
          </p>
        </div>
      </section>

      {/* IT Consultancy */}
      <section className="bg-surface border-y border-line py-24 lg:py-32" id="it-consultancy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex items-start gap-4 mb-6">
            <div className="w-px self-stretch bg-gold/40" />
            <div>
              <span className="label mb-1 block">Division A</span>
              <h2 className="font-serif font-light text-3xl lg:text-4xl text-cream">IT Consultancy</h2>
            </div>
          </div>

          <p className="font-sans text-sm text-warm leading-[1.9] max-w-2xl mb-14 ml-5">
            Our enterprise technology division provides international clients the technical expertise to build, scale, and govern complex digital systems. We operate as a strategic partner — embedded in your technology decision-making.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {itServices.map(({ icon: Icon, num, title, desc, features }) => (
              <div
                key={title}
                className="relative bg-bg border border-line hover:border-gold/20 p-8 overflow-hidden group transition-all duration-300"
              >
                <span className="absolute top-4 right-6 font-serif font-light text-[80px] text-cream/[0.04] leading-none select-none">
                  {num}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon size={14} className="text-gold mb-6" />
                <h3 className="font-serif font-light text-xl text-cream mb-3">{title}</h3>
                <p className="font-sans text-sm text-warm leading-[1.8] mb-6">{desc}</p>
                <ul className="space-y-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 font-sans text-[13px] text-warm">
                      <CheckCircle size={11} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail */}
      <section className="py-24 lg:py-32" id="retail">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex items-start gap-4 mb-6">
            <div className="w-px self-stretch bg-gold/40" />
            <div>
              <span className="label mb-1 block">Division B</span>
              <h2 className="font-serif font-light text-3xl lg:text-4xl text-cream">Direct-to-Consumer Retail</h2>
            </div>
          </div>

          <p className="font-sans text-sm text-warm leading-[1.9] max-w-2xl mb-14 ml-5">
            Our retail division operates a curated online store powered entirely by our proprietary infrastructure. Every product quality-assessed, every transaction PCI DSS secured, every order fulfilled through our integrated logistics network.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {retailServices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface border border-line hover:border-gold/20 p-7 transition-all duration-300 group">
                <Icon size={14} className="text-gold mb-5" />
                <h3 className="font-serif font-light text-lg text-cream mb-3">{title}</h3>
                <p className="font-sans text-sm text-warm leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Launch banner */}
          <div className="relative bg-raised border border-gold/15 p-8 lg:p-10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gold/[0.06] rounded-full blur-3xl" />
            </div>
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <span className="label mb-3 block">Launching Autumn 2026</span>
                <h3 className="font-serif italic font-light text-2xl text-cream mb-2">Full Catalogue Coming Soon</h3>
                <p className="font-sans text-sm text-warm max-w-lg leading-relaxed">
                  Browse our current inventory or register your interest for priority access and exclusive launch offers.
                </p>
              </div>
              <Link to="/shop" className="flex-shrink-0 btn-primary">
                Browse Inventory <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="font-serif font-light text-2xl text-cream mb-3">Interested in our consultancy services?</h3>
          <p className="font-sans text-sm text-warm mb-8">
            Let's discuss how Chic Cub's enterprise technology expertise can benefit your organisation.
          </p>
          <Link to="/contact" className="btn-primary">
            Enquire Now <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
