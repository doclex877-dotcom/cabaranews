import { useState } from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { getAllArticles } from '../lib/articles'

const TOPICS = [
  { label: 'All', value: 'all' },
  { label: 'UK Visas', value: 'uk-visas' },
  { label: 'Canada PR', value: 'canada' },
  { label: 'Work Permits', value: 'work-permits' },
  { label: 'Money Transfers', value: 'money-transfers' },
  { label: 'Fintech Cards', value: 'fintech' },
  { label: 'Student Visas', value: 'student-visas' },
  { label: 'Migrant Rights', value: 'rights' },
]

export default function Home({ articles }) {
  const [activeTopic, setActiveTopic] = useState('all')

  const featured = articles[0]
  const rest = articles.slice(1, 7)

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
        <div className="hero__search">
          <input
            type="search"
            placeholder="Search guides, e.g. &quot;UK Skilled Worker Visa&quot;"
            aria-label="Search articles"
          />
          <button type="submit">Search</button>
        </div>
      </section>

      {/* Topic pills */}
      <div className="topics" role="navigation" aria-label="Browse topics">
        <div className="topics__inner">
          <span className="topics__label">Browse:</span>
          {TOPICS.map(t => (
            <button
              key={t.value}
              className={`topic-pill${activeTopic === t.value ? ' active' : ''}`}
              onClick={() => setActiveTopic(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">

        {/* Featured + sidebar */}
        {articles.length > 0 && (
          <section className="articles-section">
            <div className="section-header">
              <h2 className="section-title">Latest Guides</h2>
              <Link href="/articles" className="section-link">View all →</Link>
            </div>

            <div className="articles-grid--featured" style={{ display: 'grid', gap: '28px' }}>
              {featured && (
                <ArticleCard article={featured} featured />
              )}
              <div className="articles-grid--sub" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {rest.slice(0, 3).map(a => (
                  <ArticleCard key={a.slug} article={a} compact />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category sections */}
        <section className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
          <div className="section-header">
            <h2 className="section-title">Immigration Guides</h2>
            <Link href="/category/immigration" className="section-link">All immigration →</Link>
          </div>
          {articles.filter(a => a.category === 'immigration').length > 0 ? (
            <div className="articles-grid">
              {articles.filter(a => a.category === 'immigration').slice(0, 3).map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div style={{ padding: '32px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
              Immigration guides coming soon. Check back shortly.
            </div>
          )}
        </section>

        <section className="articles-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
          <div className="section-header">
            <h2 className="section-title">Money & Fintech</h2>
            <Link href="/category/fintech" className="section-link">All finance guides →</Link>
          </div>
          {articles.filter(a => a.category === 'fintech').length > 0 ? (
            <div className="articles-grid">
              {articles.filter(a => a.category === 'fintech').slice(0, 3).map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div style={{ padding: '32px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
              Finance guides coming soon. Check back shortly.
            </div>
          )}
        </section>

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
