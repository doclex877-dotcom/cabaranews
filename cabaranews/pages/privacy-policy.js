import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How CabaraNews collects and uses your data." canonical="/privacy-policy" />
      <div className="container--narrow compliance-page">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: June 2025</p>

        <p>
          This Privacy Policy explains how CabaraNews ("we", "us", or "our") collects, uses, and
          protects information when you visit cabaranews.online (the "Site"). Please read it carefully.
          By using the Site, you agree to the terms of this policy.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          We do not require you to create an account or log in to read our content. However, we
          collect certain information automatically when you visit the Site:
        </p>
        <ul>
          <li><strong>Usage data:</strong> Pages visited, time spent on pages, referring URLs, browser type, device type, and IP address. This is collected by Google Analytics.</li>
          <li><strong>Cookie data:</strong> Information stored in cookies on your device (see Section 4 below).</li>
          <li><strong>Contact form data:</strong> If you use our contact form, we collect your name, email address, and the content of your message.</li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To understand how visitors use the Site and improve our content.</li>
          <li>To display relevant advertisements via Google AdSense.</li>
          <li>To respond to enquiries submitted via our contact form.</li>
        </ul>

        <h2>3. Google AdSense and advertising</h2>
        <p>
          We use Google AdSense to display advertisements on this Site. Google AdSense uses cookies
          to serve ads based on your prior visits to this and other websites. Google's use of advertising
          cookies enables it and its partners to serve ads based on your visit to our Site and/or other
          sites on the Internet.
        </p>
        <p>
          You may opt out of personalised advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google's Ads Settings
          </a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalised
          advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
        </p>
        <p>
          For more information on how Google uses data, visit:{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            How Google uses data when you use our partners' sites or apps
          </a>.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Cookies are small text files stored on your device. We use the following types:
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the Site to function (e.g., remembering your cookie consent preference).</li>
          <li><strong>Analytics cookies:</strong> Set by Google Analytics to understand Site usage. These are anonymous.</li>
          <li><strong>Advertising cookies:</strong> Set by Google AdSense to personalise and measure ads.</li>
        </ul>
        <p>
          When you first visit the Site, we ask for your consent to non-essential cookies. You can
          withdraw consent at any time by clearing your browser cookies. You can also control or
          delete cookies through your browser settings.
        </p>

        <h2>5. Third-party services</h2>
        <p>We use the following third-party services that may process your data:</p>
        <ul>
          <li><strong>Google Analytics</strong> — website analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          <li><strong>Google AdSense</strong> — advertising (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          <li><strong>Vercel</strong> — website hosting (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
        </ul>
        <p>We do not sell your personal data to any third party.</p>

        <h2>6. Your rights (GDPR)</h2>
        <p>
          If you are located in the European Economic Area or United Kingdom, you have rights under
          the General Data Protection Regulation (GDPR), including:
        </p>
        <ul>
          <li>The right to access personal data we hold about you.</li>
          <li>The right to rectification of inaccurate data.</li>
          <li>The right to erasure ("right to be forgotten").</li>
          <li>The right to restrict processing.</li>
          <li>The right to data portability.</li>
          <li>The right to object to processing.</li>
        </ul>
        <p>To exercise any of these rights, please contact us via our <a href="/contact">contact page</a>.</p>

        <h2>7. Data retention</h2>
        <p>
          Analytics data is retained for 26 months as per Google Analytics default settings.
          Contact form submissions are retained for 12 months and then deleted.
        </p>

        <h2>8. Children's privacy</h2>
        <p>
          This Site is not directed at children under 13 years of age. We do not knowingly collect
          personal data from children under 13. If you believe we have inadvertently collected such
          data, please contact us immediately.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will update the "Last updated"
          date at the top of this page. Continued use of the Site after any changes constitutes
          acceptance of the updated policy.
        </p>

        <h2>10. Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy, please use our <a href="/contact">contact page</a>.
        </p>
      </div>
    </>
  )
}
