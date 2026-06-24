import { getAllArticles } from '../lib/articles'

const SITE_URL = 'https://cabaranews.online'

function generateSitemap(articles) {
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
    { url: '/category/immigration', priority: '0.9', changefreq: 'weekly' },
    { url: '/category/visas', priority: '0.9', changefreq: 'weekly' },
    { url: '/category/fintech', priority: '0.8', changefreq: 'weekly' },
    { url: '/category/rights', priority: '0.7', changefreq: 'weekly' },
    { url: '/category/studying-abroad', priority: '0.7', changefreq: 'weekly' },
  ]

  const articlePages = articles.map(a => ({
    url: `/articles/${a.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: a.date ? new Date(a.date).toISOString().split('T')[0] : undefined,
  }))

  const allPages = [...staticPages, ...articlePages]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const articles = getAllArticles()
  const sitemap = generateSitemap(articles)
  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
