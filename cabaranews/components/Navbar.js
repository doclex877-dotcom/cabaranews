import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/category/immigration', label: 'Immigration' },
    { href: '/category/visas', label: 'Visas' },
    { href: '/category/fintech', label: 'Money & Fintech' },
    { href: '/category/rights', label: 'Your Rights' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Cabara News home">
            <span className="navbar__logo-main">Cabara<span>News</span></span>
            <span className="navbar__logo-sub">Africa · Immigration · Finance</span>
          </Link>

          <ul className="navbar__nav">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={router.pathname === link.href || router.asPath.startsWith(link.href + '/') ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {menuOpen && (
          <div style={{
            background: 'var(--navy-mid)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 24px',
          }}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 0',
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.8)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
