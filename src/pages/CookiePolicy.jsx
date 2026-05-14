import LegalPage from '../components/LegalPage'

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="14 May 2026">
      <div className="notice-box">
        This Cookie Policy explains how <strong>Chic Cub Ltd</strong> uses cookies and similar tracking
        technologies on our website. You can manage your cookie preferences at any time using the banner
        displayed when you first visit the site, or by adjusting your browser settings.
      </div>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit
        a website. They allow the website to recognise your device and remember certain information about
        your visit — such as your preferences or the contents of a shopping basket.
      </p>
      <p>
        Cookies set by the website owner (in this case, Chic Cub Ltd) are called "first-party cookies".
        Cookies set by parties other than the website owner are called "third-party cookies".
      </p>

      <h2>2. Categories of Cookies We Use</h2>

      <h3>a) Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the website to function. They cannot be disabled in our systems.
        They are usually set in response to actions you take, such as setting your privacy preferences,
        logging in, or filling in forms.
      </p>
      <ul>
        <li><strong>chiccub_cookie_consent</strong> — Stores your cookie consent preference (1 year)</li>
        <li><strong>session_id</strong> — Manages your browsing session and shopping basket</li>
        <li><strong>csrf_token</strong> — Protects against cross-site request forgery attacks</li>
      </ul>
      <p>You cannot opt out of these cookies as they are required for the site to work properly.</p>

      <h3>b) Analytics &amp; Performance Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website, which pages are visited
        most frequently, and whether visitors encounter error messages. All information collected is
        aggregated and therefore anonymous.
      </p>
      <ul>
        <li><strong>Google Analytics (_ga, _gid, _gat)</strong> — Measures site usage and performance (2 years)</li>
        <li><strong>Hotjar (hj*)</strong> — Generates heatmaps and session recordings (1 year)</li>
      </ul>
      <p>These cookies are only set with your consent.</p>

      <h3>c) Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalisation. They may be set by us or by third
        parties whose services we have added to our pages.
      </p>
      <ul>
        <li><strong>Preferences cookie</strong> — Remembers your language and currency settings (1 year)</li>
        <li><strong>Recently viewed</strong> — Stores recently viewed products for your convenience (30 days)</li>
      </ul>
      <p>These cookies are only set with your consent.</p>

      <h3>d) Marketing &amp; Targeting Cookies</h3>
      <p>
        These cookies may be set through our website by advertising partners. They may be used to build a
        profile of your interests and show you relevant adverts on other sites.
      </p>
      <ul>
        <li><strong>Meta Pixel</strong> — Tracks conversions from social media advertising (90 days)</li>
        <li><strong>Google Ads</strong> — Measures campaign effectiveness (90 days)</li>
      </ul>
      <p>These cookies are only set with your explicit consent.</p>

      <h2>3. How to Manage Cookies</h2>
      <h3>Via our cookie banner</h3>
      <p>
        When you first visit our website, you will see a cookie consent banner. You can choose to accept all
        cookies or accept essential cookies only. You can change your preferences at any time by clearing
        your browser cookies and revisiting the site.
      </p>
      <h3>Via your browser settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings. You can typically find these
        in the "Privacy" or "Security" section of your browser. Below are links to guidance for common browsers:
      </p>
      <ul>
        <li>Google Chrome — Settings &gt; Privacy and security &gt; Cookies</li>
        <li>Mozilla Firefox — Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
        <li>Apple Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
        <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
      </ul>
      <p>
        Please note that disabling certain cookies may affect the functionality of our website and prevent
        you from using some features.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some pages on our website embed content or functionality from third-party services (such as payment
        processors, social media share buttons, or video content). These third parties may set their own
        cookies on your device. We do not control these third-party cookies. Please refer to the respective
        third parties' privacy and cookie policies for more information.
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not wish
        to be tracked. Our website does not currently respond to DNT signals, but you can use the cookie
        management options described above to control tracking cookies.
      </p>

      <h2>6. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy periodically. When we do, we will revise the "last updated" date
        at the top of this page. We encourage you to review this policy from time to time.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at{' '}
        <a href="mailto:support@chiccub.com">support@chiccub.com</a> or write to:
      </p>
      <ul>
        <li>Chic Cub Ltd, Office 1307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW</li>
      </ul>
    </LegalPage>
  )
}
