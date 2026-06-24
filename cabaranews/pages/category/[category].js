import SEO from '../../components/SEO'
import ArticleCard from '../../components/ArticleCard'
import { getAllArticles } from '../../lib/articles'

const CATEGORIES = {
  immigration: { label: 'Immigration Guides', desc: 'Step-by-step guides for navigating immigration systems in the UK, Canada, USA, Australia, and more.', icon: '✈️' },
  visas: { label: 'Visa Applications', desc: 'Detailed breakdowns of visa types, requirements, fees, and timelines — from an African applicant\'s perspective.', icon: '📋' },
  fintech: { label: 'Money & Fintech', desc: 'The best ways to send money home, manage international finances, and avoid paying more than you should.', icon: '💳' },
  rights: { label: 'Your Rights', desc: 'What you\'re entitled to as a migrant worker, student, or visa holder — and what your employer cannot do.', icon: '⚖️' },
  'studying-abroad': { label: 'Studying Abroad', desc: 'Scholarships, student visa applications, university admissions, and what to expect when you arrive.', icon: '🎓' },
}

export default function CategoryPage({ category, articles }) {
  const meta = CATEGORIES[category] || { label: category, desc: '', icon: '📰' }

  return (
    <>
      <SEO
        title={meta.label}
        description={meta.desc}
        canonical={`/category/${category}`}
      />

      <div style={{ background: 'var(--navy)', padding: '56px 24px 48px' }}>
        <div className="container">
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>{meta.icon}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px', lineHeight: '1.2' }}>
            {meta.label}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: '1.65' }}>
            {meta.desc}
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px 80px' }}>
        {articles.length === 0 ? (
          <div style={{ padding: '48px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
              Guides in this category are coming soon. Check back shortly — or{' '}
              <a href="/contact" style={{ color: 'var(--gold)' }}>suggest a topic</a>.
            </p>
          </div>
        ) : (
          <div className="articles-grid">
            {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORIES).map(cat => ({ params: { category: cat } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const all = getAllArticles()
  const articles = all.filter(a => a.category === params.category)
  return { props: { category: params.category, articles } }
}
