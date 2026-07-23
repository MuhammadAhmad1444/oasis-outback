import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import CookiePolicy from './pages/CookiePolicy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bg">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          <Routes>
            <Route path="/"                 element={<Home />} />
            <Route path="/about"            element={<About />} />
            <Route path="/services"         element={<Services />} />
            <Route path="/shop"             element={<Shop />} />
            <Route path="/cart"             element={<Cart />} />
            <Route path="/contact"          element={<Contact />} />
            <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy"    element={<RefundPolicy />} />
            <Route path="/shipping-policy"  element={<ShippingPolicy />} />
            <Route path="/cookie-policy"    element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
