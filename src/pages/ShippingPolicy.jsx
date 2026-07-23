import LegalPage from '../components/LegalPage'

export default function ShippingPolicy() {
  return (
    <LegalPage title="Shipping &amp; Delivery Policy" lastUpdated="23 July 2026">
      <div className="notice-box">
        Oasis Outback products are fulfilled through our <strong>Amazon Australia</strong> storefront and
        delivered across Australia. Delivery times below are estimates from the date of dispatch and may vary,
        particularly for regional and remote areas or during peak periods.
      </div>

      <h2>1. Order Processing</h2>
      <p>
        Orders placed before <strong>2:00 pm AEST on a business day</strong> are typically processed the same
        day; orders placed after that time or on weekends and public holidays are processed the next business
        day. You will receive order and dispatch confirmations through your Amazon account.
      </p>

      <h2>2. Delivery Across Australia</h2>
      <p>
        Orders are shipped Australia-wide via Australia Post and reputable couriers. Delivery costs (if any)
        are shown at checkout on Amazon Australia.
      </p>
      <h3>Standard Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 3–7 business days from dispatch</li>
        <li><strong>Coverage:</strong> All Australian states and territories</li>
      </ul>
      <h3>Express Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 1–3 business days from dispatch (where available)</li>
        <li><strong>Availability:</strong> Shown on the product listing / at checkout</li>
      </ul>
      <h3>Regional &amp; Remote Areas</h3>
      <ul>
        <li>Deliveries to regional and remote locations may take additional business days.</li>
      </ul>

      <h2>3. Order Tracking</h2>
      <p>
        Once your order is dispatched, tracking details are available in your Amazon account and in your
        dispatch confirmation email. Tracking information may take up to 24 hours to update after dispatch.
      </p>

      <h2>4. Delivery Addresses</h2>
      <p>
        We deliver to residential and business addresses within Australia. Please ensure your delivery address
        is complete and accurate at checkout — we cannot be responsible for orders delivered to an incorrect
        address provided at the time of purchase. If no one is available, the carrier may leave a card or hold
        the parcel at a local collection point.
      </p>

      <h2>5. Delayed or Missing Parcels</h2>
      <p>
        If tracking shows your parcel as delivered but you have not received it, please check around your
        property and with neighbours first. If you still cannot locate it, or your parcel has not arrived
        within the estimated timeframe, contact us at{' '}
        <a href="mailto:oasisoutback54@gmail.com">oasisoutback54@gmail.com</a> and we will help you follow it up
        with the carrier and Amazon.
      </p>

      <h2>6. Damaged in Transit</h2>
      <p>
        If your order arrives damaged, please keep the packaging and contact us within <strong>48 hours</strong>{' '}
        of delivery with photos of the damage. We will arrange a replacement or refund as appropriate, in line
        with your rights under the Australian Consumer Law.
      </p>

      <h2>7. International Orders</h2>
      <p>
        Our storefront is focused on customers in Australia. Where international delivery is available for a
        particular item, it is handled through Amazon Australia and any duties or taxes are the responsibility
        of the recipient.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For any shipping or delivery enquiries, contact us at{' '}
        <a href="mailto:oasisoutback54@gmail.com">oasisoutback54@gmail.com</a> or call{' '}
        <a href="tel:+61483982589">+61 483 982 589</a>.
      </p>
    </LegalPage>
  )
}
