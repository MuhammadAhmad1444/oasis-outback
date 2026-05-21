import LegalPage from '../components/LegalPage'

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="14 May 2026">
      <div className="notice-box">
        Please read these Terms of Service carefully before using the Chic Cub website or placing an order.
        By accessing our site or making a purchase, you agree to be bound by these terms.
      </div>

      <h2>1. About Us</h2>
      <p>
        This website is operated by <strong>Chic Cub Ltd</strong>, a private limited company registered in
        England and Wales.
      </p>
      <ul>
        <li><strong>Company Name:</strong> Chic Cub Ltd</li>
        <li><strong>Company Number:</strong> 17232277</li>
        <li><strong>Registered Office:</strong> Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW</li>
        <li><strong>Email:</strong> info@chiccub.com</li>
        <li><strong>Telephone:</strong> +44 20 7946 0958</li>
      </ul>

      <h2>2. Acceptance of Terms</h2>
      <p>
        By accessing or using our website, you confirm that you are at least 18 years of age, that you have
        read and understood these Terms of Service, and that you agree to be bound by them. If you do not
        agree, please do not use our website.
      </p>

      <h2>3. Our Services</h2>
      <p>Chic Cub Ltd operates two distinct business divisions:</p>
      <h3>IT Consultancy</h3>
      <p>
        We provide enterprise web development, software infrastructure design, digital strategy, and technical
        governance services to business clients. Specific terms for consultancy engagements are set out in
        separate client service agreements.
      </p>
      <h3>Direct-to-Consumer Retail</h3>
      <p>
        We sell curated consumer goods through our online store. These Terms of Service apply to all retail
        purchases made through our website.
      </p>

      <h2>4. Product Information</h2>
      <p>
        We take reasonable care to ensure that product descriptions, images, and prices are accurate at the
        time of publication. However, we reserve the right to correct errors. If a product is incorrectly
        priced, we will contact you before processing your order.
      </p>

      <h2>5. Ordering and Contract Formation</h2>
      <p>
        When you place an order through our website, you are making an offer to purchase. A contract is only
        formed when we send you an order confirmation email. We reserve the right to decline any order at
        our discretion, including where items are out of stock or where we suspect fraud.
      </p>

      <h2>6. Pricing and Payment</h2>
      <ul>
        <li>All prices are displayed in Pounds Sterling (GBP) and include VAT where applicable</li>
        <li>Payment is processed securely at the time of order via our PCI DSS-compliant payment provider</li>
        <li>We accept major credit and debit cards and other payment methods as displayed at checkout</li>
        <li>We do not store your card details on our servers</li>
      </ul>

      <h2>7. Delivery</h2>
      <p>
        Delivery timescales and costs are set out in our{' '}
        <a href="/shipping-policy">Shipping &amp; Delivery Policy</a>. Risk in goods passes to you upon
        delivery. Title to goods passes upon receipt of full payment.
      </p>

      <h2>8. Consumer Rights and Cancellation</h2>
      <p>
        If you are a consumer based in the UK, you have the right to cancel your order within 14 days of
        receiving your goods under the Consumer Contracts (Information, Cancellation and Additional Charges)
        Regulations 2013. Full details are set out in our{' '}
        <a href="/refund-policy">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>9. Faulty or Misdescribed Goods</h2>
      <p>
        Under the Consumer Rights Act 2015, goods must be of satisfactory quality, fit for purpose, and as
        described. If your order does not meet these standards, you are entitled to a repair, replacement,
        or refund. Please contact us at <a href="mailto:info@chiccub.com">info@chiccub.com</a>.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        All content on this website — including text, images, logos, graphics, and software — is the
        intellectual property of Chic Cub Ltd or its licensors and is protected by UK and international
        copyright law. You may not reproduce, distribute, or use any content without our prior written
        consent.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Chic Cub Ltd shall not be liable for any indirect, incidental,
        special, or consequential loss arising out of your use of our website or services. Our total liability
        to you in respect of any claim shall not exceed the value of the relevant order.
      </p>
      <p>
        Nothing in these terms limits our liability for death or personal injury caused by our negligence,
        fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.
      </p>

      <h2>12. Privacy</h2>
      <p>
        Our collection and use of your personal data is governed by our{' '}
        <a href="/privacy-policy">Privacy Policy</a>, which forms part of these Terms of Service.
      </p>

      <h2>13. Governing Law and Jurisdiction</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with the laws of{' '}
        <strong>England and Wales</strong>. Any disputes arising in connection with these terms shall be
        subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We reserve the right to update these Terms of Service at any time. Changes take effect when posted
        on this page. Continued use of the website after changes constitutes acceptance of the revised terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        For any queries regarding these Terms of Service, please contact us at{' '}
        <a href="mailto:info@chiccub.com">info@chiccub.com</a> or in writing to our registered office.
      </p>
    </LegalPage>
  )
}
