import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('chiccub_cookie_consent')) {
      const t = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept  = () => { localStorage.setItem('chiccub_cookie_consent', 'accepted');       setShow(false) }
  const decline = () => { localStorage.setItem('chiccub_cookie_consent', 'essential_only'); setShow(false) }

  if (!show) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-lg anim-fade-up" style={{ animationDuration: '0.4s' }}>
      <div className="bg-raised border border-line shadow-2xl shadow-black/60 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-sans text-[13px] text-warm leading-relaxed flex-1">
          We use cookies to enhance your experience.{' '}
          <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link>
          {' '}and{' '}
          <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-sans text-[13px] text-muted hover:text-cream transition-colors duration-200"
          >
            Essential only
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 bg-gold text-bg font-sans text-[13px] font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
