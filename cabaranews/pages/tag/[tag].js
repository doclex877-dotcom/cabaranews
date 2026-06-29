import Link from 'next/link'
import SEO from '../../components/SEO'
import ArticleCard from '../../components/ArticleCard'
import { getAllArticles } from '../../lib/articles'

export default function TagPage({ tag, articles, displayTag }) {
  return (
    <>
      <SEO title={`${displayTag} — Guides`} description={`Guides about ${displayTag} from CabaraNews.`} canonical={`/tag/${tag}`} />
      <div style={{ background: 'var(--navy)', padding: '56px 24px 48px' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Topic</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>{displayTag}</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>{articles.length} guide{articles.length !== 1 ? 's' : ''} on this topic</p>
        </div>
      </div>
      <div className="container" style={{ padding: '48px 24px 80px' }}>
        {articles.length > 0 ? (
          <div className="articles-grid">
            {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        ) : (
          <div style={{ padding: '48px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '16px' }}>No guides tagged "{displayTag}" yet.</p>
            <Link href="/" style={{ color: 'var(--gold)', fontWeight: '500' }}>Browse all guides</Link>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const articles = getAllArticles()
  const tagSet = new Set()
  articles.forEach(a => {
    if (a.tags) a.tags.forEach(t => tagSet.add(t.toLowerCase().replace(/\s+/g, '-')))
  })
  return {
    paths: Array.from(tagSet).map(tag => ({ params: { tag } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { tag } = params
  const all = getAllArticles()
  const articles = all.filter(a =>
    a.tags && a.tags.some(t => t.toLowerCase().replace(/\s+/g, '-') === tag)
  )
  const displayTag = tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return { props: { tag, articles, displayTag } }
}
