import LegalPage from '../components/LegalPage'

export default function ShippingPolicy() {
  return (
    <LegalPage title="Shipping &amp; Delivery Policy" lastUpdated="14 May 2026">
      <div className="notice-box">
        All delivery times stated below are estimates and begin from the date your order is dispatched.
        Delivery during busy periods (e.g., Christmas, Bank Holidays) may take longer.
      </div>

      <h2>1. Order Processing</h2>
      <p>
        Orders placed before <strong>14:00 GMT on a working day</strong> (Monday–Friday, excluding UK Bank
        Holidays) will normally be processed and dispatched the same day. Orders placed after this time or
        on weekends will be processed the next working day.
      </p>
      <p>
        You will receive an order confirmation email immediately after purchase, followed by a dispatch
        confirmation email with tracking details once your order has been shipped.
      </p>

      <h2>2. UK Delivery Options</h2>
      <h3>Standard Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 3–5 working days from dispatch</li>
        <li><strong>Cost:</strong> £3.99 (free on orders over £50.00)</li>
        <li><strong>Carrier:</strong> Royal Mail 48 / DPD Standard</li>
      </ul>
      <h3>Express Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 1–2 working days from dispatch</li>
        <li><strong>Cost:</strong> £7.99</li>
        <li><strong>Carrier:</strong> Royal Mail 24 / DPD Next Day</li>
        <li><strong>Cut-off time:</strong> Orders must be placed before 14:00 GMT on a working day</li>
      </ul>
      <h3>Saturday Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> Delivery on Saturday</li>
        <li><strong>Cost:</strong> £12.99</li>
        <li><strong>Cut-off time:</strong> Orders must be placed by 14:00 GMT on Friday</li>
      </ul>

      <h2>3. International Delivery</h2>
      <p>
        We ship to selected international destinations. International shipping rates and estimated delivery
        times are calculated at checkout based on destination and order weight.
      </p>
      <ul>
        <li><strong>Europe (EU &amp; non-EU):</strong> 5–10 working days</li>
        <li><strong>North America:</strong> 7–14 working days</li>
        <li><strong>Rest of World:</strong> 10–21 working days</li>
      </ul>
      <p>
        Please note that international orders may be subject to import duties, taxes, or customs charges
        levied by the destination country. These charges are the responsibility of the recipient and are
        not included in our delivery charges.
      </p>

      <h2>4. Order Tracking</h2>
      <p>
        Once your order has been dispatched, you will receive a confirmation email containing your tracking
        number and a link to track your parcel. Tracking updates may take up to 24 hours to appear on the
        carrier's system after dispatch.
      </p>

      <h2>5. Delivery to Registered Addresses</h2>
      <p>
        We deliver to residential and business addresses. We also deliver to PO Boxes for Standard Delivery
        via Royal Mail (Express and Saturday delivery options are not available to PO Boxes).
      </p>
      <p>
        If no one is available to receive the parcel, the carrier will leave a card and either attempt
        redelivery or hold the parcel at a local depot or collection point.
      </p>

      <h2>6. Missing, Lost, or Delayed Parcels</h2>
      <p>
        If your tracking shows your parcel as delivered but you have not received it, please check with
        neighbours and any safe locations around your property first. If you still cannot locate it,
        contact us within 14 days of the tracked delivery date.
      </p>
      <p>
        Parcels that have not arrived within the estimated timeframe are not considered officially lost
        until the following periods have passed from dispatch:
      </p>
      <ul>
        <li><strong>UK deliveries:</strong> 10 working days</li>
        <li><strong>International deliveries:</strong> 25 working days</li>
      </ul>
      <p>
        Once a parcel is confirmed lost, we will offer you a replacement or full refund, including original
        delivery charges.
      </p>

      <h2>7. Damaged Goods in Transit</h2>
      <p>
        If your order arrives damaged, please retain all original packaging and contact us within{' '}
        <strong>48 hours</strong> of receipt, providing photographs of the damage. We will arrange a
        replacement or refund as appropriate.
      </p>

      <h2>8. Incorrect Delivery Address</h2>
      <p>
        It is your responsibility to provide a complete and accurate delivery address at the time of order.
        We cannot be held responsible for orders delivered to an incorrect address provided by the customer.
        If you notice an error in your delivery address immediately after placing an order, please contact
        us as soon as possible at <a href="mailto:support@chiccub.com">support@chiccub.com</a> — we will
        attempt to amend the address before dispatch, but this cannot be guaranteed.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For any shipping or delivery enquiries, please contact us at{' '}
        <a href="mailto:support@chiccub.com">support@chiccub.com</a> or call{' '}
        <a href="tel:+442079460958">+44 20 7946 0958</a>.
      </p>
    </LegalPage>
  )
}
