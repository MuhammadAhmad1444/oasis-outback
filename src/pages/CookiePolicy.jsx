import LegalPage from '../components/LegalPage'

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="23 July 2026">
      <div className="notice-box">
        This Cookie Policy explains how <strong>Oasis Outback</strong> uses cookies and similar technologies on
        our website. It should be read together with our <a href="/privacy-policy">Privacy Policy</a>, which
        describes how we handle personal information under the Privacy Act 1988 (Cth). You can manage your
        preferences using the banner shown on your first visit or through your browser settings.
      </div>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a
        website. They allow the website to recognise your device and remember certain information about your
        visit, such as your preferences.
      </p>
      <p>
        Cookies set by the website you are visiting (Oasis Outback) are called "first-party cookies". Cookies
        set by other parties are called "third-party cookies".
      </p>

      <h2>2. Categories of Cookies We Use</h2>

      <h3>a) Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the website to function and cannot be switched off in our systems.
        They are usually set in response to actions you take, such as setting your privacy preferences.
      </p>
      <ul>
        <li><strong>oasisoutback_cookie_consent</strong> — Stores your cookie consent preference (1 year)</li>
        <li><strong>session_id</strong> — Maintains your browsing session</li>
      </ul>
      <p>You cannot opt out of these cookies as they are required for the site to work properly.</p>

      <h3>b) Analytics &amp; Performance Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website — which pages are visited most
        often and whether visitors encounter errors. The information collected is aggregated and anonymous.
      </p>
      <ul>
        <li><strong>Analytics cookies</strong> — Measure site usage and performance</li>
      </ul>
      <p>These cookies are only set with your consent.</p>

      <h3>c) Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalisation, such as remembering your preferences.
      </p>
      <ul>
        <li><strong>Preferences cookie</strong> — Remembers display and site settings (1 year)</li>
      </ul>
      <p>These cookies are only set with your consent.</p>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some pages link or refer to third-party services — most notably our Amazon Australia storefront, where
        purchases are completed. When you follow a "View on Amazon" link, Amazon may set its own cookies on
        your device under Amazon's own policies. We do not control these third-party cookies.
      </p>

      <h2>4. How to Manage Cookies</h2>
      <h3>Via our cookie banner</h3>
      <p>
        When you first visit our website, you will see a cookie consent banner. You can accept all cookies or
        choose essential cookies only. You can change your preference at any time by clearing your browser
        cookies and revisiting the site.
      </p>
      <h3>Via your browser settings</h3>
      <p>Most browsers let you control cookies through their settings, usually under "Privacy" or "Security":</p>
      <ul>
        <li>Google Chrome — Settings &gt; Privacy and security &gt; Cookies</li>
        <li>Mozilla Firefox — Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
        <li>Apple Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
        <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
      </ul>
      <p>Please note that disabling some cookies may affect the functionality of our website.</p>

      <h2>5. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. When we do, we will revise the "last updated" date
        at the top of this page.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at{' '}
        <a href="mailto:store@oasisoutback.com">store@oasisoutback.com</a> or write to:
      </p>
      <ul>
        <li>Oasis Outback, 4 Longbrae Avenue, Forest Hill VIC 3131, Australia</li>
      </ul>
    </LegalPage>
  )
}
