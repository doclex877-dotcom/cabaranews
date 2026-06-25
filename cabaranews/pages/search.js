import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { getAllArticles } from '../lib/articles'

export default function SearchPage({ articles }) {
  const router = useRouter()
  const { q } = router.query
  const [query, setQuery] = useState(q || '')

  useEffect(() => { setQuery(q || '') }, [q])

  const results = query?.trim()
    ? articles.filter(a => {
        const s = query.toLowerCase()
        return a.title?.toLowerCase().includes(s) ||
          a.excerpt?.toLowerCase().includes(s) ||
          a.tags?.some(t => t.toLowerCase().includes(s)) ||
          a.categoryLabel?.toLowerCase().includes(s)
      })
    : []

  const handleSubmit = e => {
    e.preventDefault()
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <>
      <SEO title={q ? `Search: ${q}` : 'Search'} canonical="/search" />

      <div style={{ background: 'var(--navy)', padding: '48px 24px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800', color: 'var(--white)', marginBottom: '20px' }}>
            Search guides
          </h1>
          <form onSubmit={handleSubmit} style={{ display: 'flex', background: 'var(--white)', borderRadius: '10px', overflow: 'hidden', maxWidth: '500px' }}>
            <input
              type="search" value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Search e.g. "UK visa" or "send money"'
              style={{ flex: 1, border: 'none', outline: 'none', padding: '13px 18px', fontSize: '14px', fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}
              autoFocus
            />
            <button type="submit" className="btn btn--primary" style={{ borderRadius: 0, padding: '0 22px' }}>Search</button>
          </form>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px 80px' }}>
        {q && (
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            {results.length > 0 ? `${results.length} guide${results.length !== 1 ? 's' : ''} found for "${q}"` : `No guides found for "${q}"`}
          </p>
        )}

        {results.length > 0 ? (
          <div className="articles-grid">
            {results.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        ) : q ? (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>No guides found</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Try different keywords or browse by category below.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['immigration', 'visas', 'fintech', 'rights', 'studying-abroad'].map(cat => (
                <Link key={cat} href={`/category/${cat}`} className="btn btn--outline" style={{ color: 'var(--navy)', border: '1px solid var(--border)' }}>
                  {cat.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return { props: { articles } }
}
