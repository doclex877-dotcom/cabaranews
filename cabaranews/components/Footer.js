import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">Cabara<span>News</span></div>
            <p className="footer__brand-desc">
              Independent guides for Africans navigating immigration, visas, and international finance.
              Written by people who've been through it.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Topics</div>
            <ul className="footer__links">
              <li><Link href="/category/immigration">Immigration Guides</Link></li>
              <li><Link href="/category/visas">Visa Applications</Link></li>
              <li><Link href="/category/fintech">Money & Fintech</Link></li>
              <li><Link href="/category/rights">Migrant Rights</Link></li>
              <li><Link href="/category/studying-abroad">Studying Abroad</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Countries</div>
            <ul className="footer__links">
              <li><Link href="/tag/uk">United Kingdom</Link></li>
              <li><Link href="/tag/canada">Canada</Link></li>
              <li><Link href="/tag/usa">United States</Link></li>
              <li><Link href="/tag/australia">Australia</Link></li>
              <li><Link href="/tag/germany">Germany</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Site</div>
            <ul className="footer__links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} CabaraNews.online · All rights reserved
          </p>
          <div className="footer__compliance">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
