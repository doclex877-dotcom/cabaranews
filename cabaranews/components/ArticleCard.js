import Link from 'next/link'
import { format } from 'date-fns'

const CATEGORY_COLORS = {
  immigration: '#1A4D8F',
  visas: '#2A5E3A',
  fintech: '#7A2E0A',
  rights: '#5A1A6A',
  'studying-abroad': '#1A4A3A',
}

const PLACEHOLDERS = {
  immigration: { bg: '#0D1B2A', icon: '✈️', label: 'Immigration' },
  visas: { bg: '#1A2E20', icon: '📋', label: 'Visas' },
  fintech: { bg: '#2A1408', icon: '💳', label: 'Finance' },
  rights: { bg: '#1E0A2A', icon: '⚖️', label: 'Rights' },
  'studying-abroad': { bg: '#0A1E1A', icon: '🎓', label: 'Education' },
}

export default function ArticleCard({ article, featured = false, compact = false }) {
  const ph = PLACEHOLDERS[article.category] || { bg: '#0D1B2A', icon: '📰', label: 'News' }
  const dateStr = article.date
    ? format(new Date(article.date), 'dd MMM yyyy')
    : ''

  return (
    <Link href={`/articles/${article.slug}`} className={`card${featured ? ' card--featured' : ''}`} style={{ display: 'block' }}>
      {!compact && (
        <div className="card__image">
          <div
            className="card__image-placeholder"
            style={{
              background: ph.bg,
              fontSize: featured ? '56px' : '40px',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span role="img" aria-hidden="true">{ph.icon}</span>
            <span style={{
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}>{ph.label}</span>
          </div>
        </div>
      )}
      <div className="card__body">
        <span
          className="card__category"
          style={{ color: CATEGORY_COLORS[article.category] || 'var(--gold)' }}
        >
          {article.categoryLabel || article.category}
        </span>
        <h2 className="card__title">{article.title}</h2>
        {!compact && <p className="card__excerpt">{article.excerpt}</p>}
        <div className="card__meta">
          <span className="card__author">Dr. Alex</span>
          <span className="card__dot"></span>
          <span>{dateStr}</span>
          {article.readTime && (
            <>
              <span className="card__dot"></span>
              <span className="card__read-time">{article.readTime} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
