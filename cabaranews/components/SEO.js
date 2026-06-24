import Head from 'next/head'

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  article = false,
  publishedTime,
  author = 'Dr. Alex',
}) {
  const siteName = 'CabaraNews'
  const siteUrl = 'https://cabaranews.online'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Immigration, Visas & Finance for Africans`
  const metaDesc = description || 'Independent guides for Africans navigating immigration, visas, and international finance. Researched and written by Dr. Alex.'
  const image = ogImage || `${siteUrl}/og-default.png`
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />

      {/* Misc */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
