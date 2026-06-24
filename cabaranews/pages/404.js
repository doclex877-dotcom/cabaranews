import Link from 'next/link'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <div style={{ padding: '100px 24px', textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '80px', fontWeight: '800', color: 'var(--border)', marginBottom: '8px' }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--navy)', marginBottom: '12px' }}>
          Page not found
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '32px' }}>
          The page you're looking for doesn't exist or may have moved. Try heading back to the homepage.
        </p>
        <Link href="/" className="btn btn--primary" style={{ display: 'inline-flex', textDecoration: 'none', padding: '12px 28px' }}>
          Back to home
        </Link>
      </div>
    </>
  )
}
