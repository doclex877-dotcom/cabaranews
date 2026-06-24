import Link from 'next/link'
import { format } from 'date-fns'
import SEO from '../../components/SEO'
import { getAllSlugs, getArticleBySlug, getAllArticles } from '../../lib/articles'

export default function ArticlePage({ article, related }) {
  if (!article) return <div style={{ padding: '80px 24px', textAlign: 'center' }}>Article not found.</div>

  const dateStr = article.date ? format(new Date(article.date), 'dd MMMM yyyy') : ''

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/articles/${article.slug}`}
        article
        publishedTime={article.date}
      />

      {/* Article header */}
      <div className="article-header">
        <div className="container--narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb__sep">›</span>
            <Link href={`/category/${article.category}`}>{article.categoryLabel || article.category}</Link>
            <span className="breadcrumb__sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{article.title}</span>
          </nav>

          <p className="article-header__category">{article.categoryLabel || article.category}</p>
          <h1 className="article-header__title">{article.title}</h1>

          <div className="article-header__meta">
            <div className="article-header__author">
              <div className="author-avatar" aria-hidden="true">DA</div>
              <div className="author-info">
                <div className="author-name">Dr. Alex</div>
                <div className="author-title">PhD, International Relations · London</div>
              </div>
            </div>
            <span className="article-header__divider">·</span>
            <span className="article-header__date">{dateStr}</span>
            {article.readTime && (
              <>
                <span className="article-header__divider">·</span>
                <span className="article-header__read-time">{article.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="article-body">

        {/* Last updated badge */}
        {article.lastUpdated && (
          <div className="last-updated">
            <span>✓</span>
            <span>Last checked: {article.lastUpdated}</span>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="tags" style={{ marginBottom: '2rem' }}>
            {article.tags.map(tag => (
              <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="tag">
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Article HTML content */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Author bio */}
        <div className="author-bio">
          <div className="author-bio__avatar" aria-hidden="true">DA</div>
          <div>
            <div className="author-bio__name">Dr. Alex</div>
            <div className="author-bio__credential">PhD in Political Science & International Relations</div>
            <p className="author-bio__text">
              Dr. Alex is a Zimbabwean-born academic and writer based in the United Kingdom. After completing
              a doctorate at a London university, he navigated the UK immigration system first-hand — including
              student visas, the Graduate Route, and the Skilled Worker pathway. He writes CabaraNews to give
              other Africans the plain-English guidance he wished existed when he was going through it himself.
              Every article he writes is grounded in official sources and personal experience.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="callout callout--warning">
          <span className="callout__icon">⚠️</span>
          <div>
            <div className="callout__title">Not legal or financial advice</div>
            This article is for informational purposes only. Immigration rules change frequently —
            always verify with official government sources or a licensed immigration adviser before
            making any decisions. See our <Link href="/disclaimer">full disclaimer</Link>.
          </div>
        </div>

      </article>

      {/* Related articles */}
      {related && related.length > 0 && (
        <section style={{ background: 'var(--off-white)', padding: '48px 0', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--navy)', marginBottom: '24px' }}>
              Related guides
            </h2>
            <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {related.map(a => (
                <Link key={a.slug} href={`/articles/${a.slug}`} style={{ display: 'block', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: '20px', transition: 'box-shadow 0.2s' }}>
                  <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '6px' }}>
                    {a.categoryLabel || a.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--navy)', lineHeight: '1.3' }}>{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllSlugs()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { notFound: true }

  const all = getAllArticles()
  const related = all
    .filter(a => a.slug !== params.slug && a.category === article.category)
    .slice(0, 3)

  return { props: { article, related } }
}
