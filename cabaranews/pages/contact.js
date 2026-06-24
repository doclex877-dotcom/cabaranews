import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // In production: connect to Formspree, Netlify Forms, or similar
    // For now, show success state
    setSent(true)
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with CabaraNews — corrections, tips, or questions." canonical="/contact" />

      <div style={{ background: 'var(--navy)', padding: '56px 24px 48px' }}>
        <div className="container--narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '800', color: 'var(--white)', marginBottom: '12px' }}>
            Get in touch
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
            Found an error? Have a question not answered by our guides? We'd genuinely like to hear from you.
          </p>
        </div>
      </div>

      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>
        <div className="contact-grid">
          <div>
            {sent ? (
              <div style={{ background: 'var(--tip-bg)', border: '1px solid var(--tip-border)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: '#1B5E3A', marginBottom: '8px' }}>Message sent</h2>
                <p style={{ fontSize: '14px', color: '#1B5E3A', lineHeight: '1.6' }}>
                  Thank you for reaching out. Dr. Alex typically responds within 2–3 business days.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Tendai Mutasa"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option value="question">Question about a guide</option>
                    <option value="correction">I found an error</option>
                    <option value="suggestion">Article suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '12px' }}>
                  Send message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
              What to expect
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Dr. Alex reads all messages personally. Response times are typically 2–3 business days.
              For urgent immigration matters, please also consult an official source or licensed adviser
              — we are not a legal service.
            </p>

            {[
              { icon: '✏️', title: 'Corrections', desc: 'If you find an error in any of our guides, we take that seriously and will update the article.' },
              { icon: '💡', title: 'Article ideas', desc: 'If there is a topic you wish we covered — a specific visa route, country guide, or fintech comparison — let us know.' },
              { icon: '🤝', title: 'Partnerships', desc: 'For editorial partnerships, please note that our editorial independence is non-negotiable.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '12px', marginBottom: '16px', padding: '14px', background: 'var(--off-white)', borderRadius: 'var(--radius)' }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
