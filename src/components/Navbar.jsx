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

            {/* Logo */}
            <Link to="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
              <span className="font-serif italic text-xl text-ink">Chic</span>
              <span className="font-sans font-light text-xl tracking-wide text-muted">Cub</span>
            </Link>

            {/* Desktop nav */}
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

            {/* Mobile toggle */}
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
