import SEO from '../components/SEO'

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer" description="Important disclaimer about the informational nature of CabaraNews content." canonical="/disclaimer" />
      <div className="container--narrow compliance-page">
        <h1>Disclaimer</h1>
        <p className="updated">Last updated: June 2025</p>

        <p>
          Please read this disclaimer carefully before using cabaranews.online.
        </p>

        <h2>Not legal or immigration advice</h2>
        <p>
          The information published on CabaraNews is intended for general informational and educational
          purposes only. It does not constitute legal advice, immigration advice, or financial advice.
          Reading this Site does not create a lawyer-client relationship or any other professional
          relationship between you and CabaraNews or its authors.
        </p>
        <p>
          Immigration and visa rules are subject to frequent change. While we aim to keep our content
          accurate and up to date, we cannot guarantee that every piece of information on this Site
          reflects the most current rules at the time you read it.
        </p>
        <p>
          <strong>Always verify immigration information with the relevant official government website</strong>
          {' '}— for UK matters, that is GOV.UK; for Canada, IRCC; for the USA, USCIS. For complex
          immigration situations, we strongly recommend consulting a qualified, registered immigration
          lawyer or adviser.
        </p>

        <h2>Not financial advice</h2>
        <p>
          Any discussion of financial products — including bank accounts, money transfer services,
          cards, or investments — is for general informational purposes only. We are not regulated
          financial advisers. Always read the terms and conditions of any financial product before
          using it, and seek independent financial advice where appropriate.
        </p>

        <h2>Accuracy and errors</h2>
        <p>
          We make every reasonable effort to ensure the accuracy of our content. However, errors
          can occur. If you spot an error or outdated information, please{' '}
          <a href="/contact">let us know</a> and we will correct it promptly.
        </p>

        <h2>Affiliate and advertising disclosure</h2>
        <p>
          This Site displays advertisements through Google AdSense. We may also include links to
          third-party products or services. Some links may be affiliate links, meaning we receive a
          small commission if you make a purchase through them, at no additional cost to you.
          Advertising revenue helps us keep the Site free. Our editorial content is not influenced
          by advertisers.
        </p>

        <h2>External links</h2>
        <p>
          We link to external websites for reference and convenience. We do not control these sites
          and are not responsible for their content or accuracy.
        </p>
      </div>
    </>
  )
}
