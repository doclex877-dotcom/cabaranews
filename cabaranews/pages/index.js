import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { getAllArticles } from '../lib/articles'

const TOPICS = [
  { label: 'All', value: 'all', href: null },
  { label: 'UK Visas', value: 'visas', href: '/category/visas' },
  { label: 'Canada PR', value: 'immigration', href: '/category/immigration' },
  { label: 'Work Permits', value: 'immigration', href: '/category/immigration' },
  { label: 'Money Transfers', value: 'fintech', href: '/category/fintech' },
  { label: 'Fintech Cards', value: 'fintech', href: '/category/fintech' },
  { label: 'Student Visas', value: 'studying-abroad', href: '/category/studying-abroad' },
  { label: 'Migrant Rights', value: 'rights', href: '/category/rights' },
]

export default function Home({ articles }) {
  const [activeTopic, setActiveTopic] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef(null)
  const router = useRouter()

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }
    const q = searchQuery.toLowerCase()
    const results = articles.filter(a =>
      a.title?.toLowerCase().includes(q) ||
      a.excerpt?.toLowerCase().includes(q) ||
      a.tags?.some(t => t.toLowerCase().includes(q)) ||
      a.categoryLabel?.toLowerCase().includes(q)
    ).slice(0, 6)
    setSearchResults(results)
    setShowResults(true)
  }, [searchQuery, articles])

  // Close results on outside click
  useEffect(() => {
    const handler = e => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setShowResults(false)
    }
  }

  // Filter articles by active topic
  const filteredArticles = activeTopic === 'all'
    ? articles
    : articles.filter(a => a.category === activeTopic)

  const featured = filteredArticles[0]
  const rest = filteredArticles.slice(1, 7)

  return (
    <>
      <SEO />

      {/* Hero */}
      <section className="hero">
        <p className="hero__eyebrow">Trusted guides for the African diaspora</p>
        <h1 className="hero__title">
          Navigate immigration,<br /><em>visas & money</em> with confidence
        </h1>
        <p className="hero__subtitle">
          Real, researched guides written by Dr. Alex — a Zimbabwean IR scholar based in the UK
          who's been through the process.
        </p>
        <div style={{ position: 'relative', maxWidth: '460px', margin: '0 auto' }} ref={searchRef}>
          <form onSubmit={handleSearch} className="hero__search">
            <input
              type="search"
              placeholder='Search guides, e.g. "UK Skilled Worker Visa"'
              aria-label="Search articles"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>

          {/* Live search dropdown */}
          {showResults && searchResults.length > 0 && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--white)', borderRadius: '0 0 12px 12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)', zIndex: 50,
              border: '1px solid var(--border)', borderTop: 'none', overflow: 'hidden',
            }}>
              {searchResults.map(a => (
                <Link key={a.slug} href={`/articles/${a.slug}`}
                  onClick={() => { setShowResults(false); setSearchQuery('') }}
                  style={{
                    display: 'block', padding: '12px 16px',
                    borderBottom: '1px solid var(--border)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--off-white)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
                    {a.categoryLabel || a.category}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--navy)', lineHeight: '1.3' }}>{a.title}</div>
                </Link>
              ))}
              <Link href={`/search?q=${encodeURIComponent(searchQuery)}`}
                onClick={() => setShowResults(false)}
                style={{ display: 'block', padding: '10px 16px', fontSize: '12px', color: 'var(--gold)', fontWeight: '500', textAlign: 'center', background: 'var(--off-white)' }}>
                See all results for "{searchQuery}" →
              </Link>
            </div>
          )}

          {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--white)', borderRadius: '0 0 12px 12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)', zIndex: 50,
              border: '1px solid var(--border)', borderTop: 'none',
              padding: '16px', fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center',
            }}>
              No guides found for "{searchQuery}"
            </div>
          )}
        </div>
      </section>

      {/* Topic pills — now functional links */}
      <div className="topics" role="navigation" aria-label="Browse topics">
        <div className="topics__inner">
          <span className="topics__label">Browse:</span>
          {TOPICS.map((t, i) => (
            t.href ? (
              <Link
                key={`${t.value}-${i}`}
                href={t.href}
                className={`topic-pill${activeTopic === t.value ? ' active' : ''}`}
                onClick={() => setActiveTopic(t.value)}
              >
                {t.label}
              </Link>
            ) : (
              <button
                key={`${t.value}-${i}`}
                className={`topic-pill${activeTopic === t.value ? ' active' : ''}`}
                onClick={() => setActiveTopic(t.value)}
              >
                {t.label}
              </button>
            )
          ))}
        </div>
      </div>

      <div className="container">

        {/* Featured + sidebar */}
        {filteredArticles.length > 0 && (
          <section className="articles-section">
            <div className="section-header">
              <h2 className="section-title">
                {activeTopic === 'all' ? 'Latest Guides' : `${TOPICS.find(t => t.value === activeTopic)?.label || ''} Guides`}
              </h2>
              <Link href="/articles" className="section-link">View all →</Link>
            </div>

            <div className="articles-grid--featured" style={{ display: 'grid', gap: '28px' }}>
              {featured && <ArticleCard article={featured} featured />}
              <div className="articles-grid--sub" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {rest.slice(0, 3).map(a => <ArticleCard key={a.slug} article={a} compact />)}
              </div>
            </div>
          </section>
        )}

        {/* Category sections — only show when "All" is selected */}
        {activeTopic === 'all' && (
          <>
            <section className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
              <div className="section-header">
                <h2 className="section-title">Immigration Guides</h2>
                <Link href="/category/immigration" className="section-link">All immigration →</Link>
              </div>
              <div className="articles-grid">
                {articles.filter(a => a.category === 'immigration').slice(0, 3).map(a => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>

            <section className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
              <div className="section-header">
                <h2 className="section-title">Money & Fintech</h2>
                <Link href="/category/fintech" className="section-link">All finance guides →</Link>
              </div>
              <div className="articles-grid">
                {articles.filter(a => a.category === 'fintech').slice(0, 3).map(a => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>

            <section className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
              <div className="section-header">
                <h2 className="section-title">Your Rights</h2>
                <Link href="/category/rights" className="section-link">All rights guides →</Link>
              </div>
              <div className="articles-grid">
                {articles.filter(a => a.category === 'rights').slice(0, 3).map(a => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Trust strip */}
        <section style={{ padding: '48px 0', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }}>
          {[
            { icon: '🎓', title: 'Written by Dr. Alex', desc: 'PhD in Political Science & International Relations, University of London. Lived the immigration process personally.' },
            { icon: '🔍', title: 'Always fact-checked', desc: 'Every article cites official government sources, court cases, or documented evidence. Nothing is made up.' },
            { icon: '🔄', title: 'Kept up to date', desc: 'Immigration rules change. We review and update our guides regularly and mark the last-checked date on every article.' },
          ].map(item => (
            <div key={item.title} style={{ padding: '24px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.65' }}>{item.desc}</p>
            </div>
          ))}
        </section>

      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return { props: { articles } }
}
