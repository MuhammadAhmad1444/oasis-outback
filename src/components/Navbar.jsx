import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X, Menu, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

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
  const { count }               = useCart()

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-baseline gap-1 group" onClick={() => setOpen(false)}>
              <span className="font-serif italic text-xl text-cream tracking-tight group-hover:text-gold-light transition-colors duration-300">
                Oasis
              </span>
              <span className="font-sans font-light text-lg text-muted tracking-[0.18em] group-hover:text-warm transition-colors duration-300">
                OUTBACK
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative text-[13px] tracking-wider font-sans pb-px group transition-colors duration-200 ${
                      isActive ? 'text-gold' : 'text-warm hover:text-cream'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/cart"
                className="relative text-warm hover:text-gold transition-colors duration-200"
                aria-label={`Cart (${count} items)`}
              >
                <ShoppingCart size={18} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-bg text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
              <Link
                to="/contact"
                className="ml-1 px-5 py-2 border border-gold/35 text-gold text-[13px] font-sans font-medium tracking-wide hover:bg-gold hover:text-bg transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile: cart + toggle */}
            <div className="lg:hidden flex items-center gap-5">
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="relative text-warm hover:text-gold z-[60] transition-colors duration-200"
                aria-label={`Cart (${count} items)`}
              >
                <ShoppingCart size={20} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-bg text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
              <button
                className="text-warm hover:text-gold p-1 z-[60] relative transition-colors duration-200"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gold/[0.07]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold/[0.04] rounded-full blur-3xl" />
        </div>

        <nav className="flex flex-col items-center gap-7 relative z-10">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 55}ms` : '0ms' }}
              className={({ isActive }) =>
                `font-serif italic text-5xl font-light transition-all duration-300 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } ${isActive ? 'text-gold' : 'text-cream hover:text-gold'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? '330ms' : '0ms' }}
            className={`mt-4 px-8 py-3 border border-gold/35 text-gold text-sm font-sans tracking-wide hover:bg-gold hover:text-bg transition-all duration-200 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  )
}
