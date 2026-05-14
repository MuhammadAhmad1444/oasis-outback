import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Server, BarChart3, Globe, ShoppingBag, Truck, CreditCard, CheckCircle } from 'lucide-react'

const itServices = [
  {icon:Code2,    num:'01',title:'Web Development & Architecture',   desc:'Full-stack web applications built with modern frameworks. Performant, scalable systems meeting international compliance standards.',    features:['React / Next.js / TypeScript','RESTful & GraphQL APIs','Cloud-native deployment (AWS / Azure / GCP)','Accessibility (WCAG 2.1 AA)']},
  {icon:Server,   num:'02',title:'Software Infrastructure Design',    desc:'End-to-end infrastructure consulting covering cloud architecture, DevOps pipelines, database design, and system integration.',       features:['Cloud Architecture & Migration','CI/CD Pipeline Implementation','Database Design & Optimisation','Security Architecture & Pen Testing']},
  {icon:BarChart3,num:'03',title:'Digital Strategy & Transformation',desc:'Strategic advisory for businesses navigating digital transformation. Phased roadmaps aligned with business objectives and governance.',features:['Technology Audits & Gap Analysis','Digital Roadmap Planning','Vendor Selection & Management','Change Management Support']},
  {icon:Globe,    num:'04',title:'Technical Governance & Compliance',desc:'Aligning technology practices with UK and international regulatory requirements including GDPR, ISO 27001, and PCI DSS.',           features:['GDPR Compliance Assessments','Data Protection Frameworks','ISO 27001 Preparation','PCI DSS Advisory']},
]
const retailServices = [
  {icon:ShoppingBag,title:'Curated Product Catalogue',        desc:'A carefully selected range of premium lifestyle goods, sourced from quality-assured suppliers and managed through our proprietary inventory system.'},
  {icon:Truck,      title:'Integrated Logistics & Fulfilment',desc:'End-to-end order management from purchase to delivery, with real-time tracking and our 14-day consumer return guarantee.'},
  {icon:CreditCard, title:'Secure Payment Processing',        desc:'PCI DSS-compliant processing supporting major card schemes and digital wallets, secured with 3D Secure authentication.'},
]

export default function Services() {
  return (
    <div className="bg-cream">

      {/* Header */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <span className="section-label mb-4 block">Our Services</span>
          <h1 className="font-serif font-normal text-4xl lg:text-5xl text-ink mb-5 max-w-xl leading-tight">Two Divisions. One Standard.</h1>
          <p className="font-sans text-lg text-muted leading-7 max-w-2xl">
            Whether you're an enterprise client or a consumer, Chic Cub operates to the same high standard across both divisions.
          </p>
        </div>
      </section>

      {/* IT Consultancy */}
      <section className="bg-white border-y border-border py-24 lg:py-32" id="it-consultancy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <Code2 size={18} className="text-gold" />
            <div>
              <span className="section-label block mb-0.5">Division A</span>
              <h2 className="font-serif font-normal text-3xl text-ink">IT Consultancy</h2>
            </div>
          </div>
          <p className="font-sans text-sm text-muted leading-7 max-w-2xl mb-12">
            Our enterprise technology division provides international clients the technical expertise to build, scale, and govern complex digital systems. We operate as a strategic partner — embedded in your technology decision-making.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {itServices.map(({icon:Icon,num,title,desc,features}) => (
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

      {/* Retail */}
      <section className="py-24 lg:py-32" id="retail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <ShoppingBag size={18} className="text-gold" />
            <div>
              <span className="section-label block mb-0.5">Division B</span>
              <h2 className="font-serif font-normal text-3xl text-ink">Direct-to-Consumer Retail</h2>
            </div>
          </div>
          <p className="font-sans text-sm text-muted leading-7 max-w-2xl mb-12">
            Our retail division operates a curated online store powered entirely by our proprietary infrastructure. Every product quality-assessed, every transaction PCI DSS secured, every order fulfilled through our integrated logistics network.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {retailServices.map(({icon:Icon,title,desc}) => (
              <div key={title} className="bg-white border border-border p-7">
                <Icon size={16} className="text-gold mb-4" />
                <h3 className="font-serif font-normal text-lg text-ink mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted leading-7">{desc}</p>
              </div>
            ))}
          </div>
          {/* Launch banner */}
          <div className="bg-navy-900 p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="section-label text-gold mb-3 block">Launching Autumn 2026</span>
              <h3 className="font-serif italic font-normal text-2xl text-white mb-2">Full Catalogue Coming Soon</h3>
              <p className="font-sans text-sm text-gray-300 max-w-lg leading-relaxed">
                Browse our current inventory or register your interest for priority access and exclusive launch offers.
              </p>
            </div>
            <Link to="/shop" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-900 font-sans text-sm font-semibold hover:bg-gold-light transition-colors">
              Browse Inventory <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
