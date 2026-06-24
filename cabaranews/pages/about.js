import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About CabaraNews"
        description="CabaraNews is written by Dr. Alex, a Zimbabwean-born academic based in the UK, providing plain-English immigration and finance guides for Africans."
        canonical="/about"
      />

      <div className="about-hero">
        <div className="container--narrow">
          <h1 className="about-hero__title">
            Built for Africans,<br /><em>by someone who went through it</em>
          </h1>
          <p className="about-hero__lead">
            CabaraNews exists because the immigration guides online were either too vague,
            too American, or written by people who had never actually applied for a visa themselves.
          </p>
        </div>
      </div>

      <div className="container--narrow" style={{ padding: '56px 24px 80px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start', marginBottom: '56px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              background: 'var(--navy)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 16px',
              fontFamily: 'var(--font-display)', fontSize: '36px',
              fontWeight: '800', color: 'var(--gold-light)',
            }}>DA</div>
            <div style={{ fontWeight: '600', fontSize: '16px', color: 'var(--navy)' }}>Dr. Alex</div>
            <div style={{ fontSize: '13px', color: 'var(--gold)', fontWeight: '500', marginTop: '4px' }}>PhD, International Relations</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Based in London, UK</div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
              About the author
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>
              I'm Dr. Alex — a Zimbabwean academic who came to the United Kingdom to pursue a doctorate in
              Political Science and International Relations. What I didn't expect when I arrived was how
              complicated and poorly explained the immigration system would be.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>
              I've been through it: student visa applications, the Graduate Route, the Skilled Worker pathway,
              dealing with international bank transfers, finding the right fintech card that actually works
              across borders. I learned most of it the hard way — through official documents, immigration forums,
              and a lot of frustrated Googling.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>
              CabaraNews is my attempt to turn that hard-won knowledge into something useful. Every guide
              I write is grounded in official sources, real processes, and — where relevant — my own
              experience of going through the system.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)' }}>
              My background in International Relations means I approach immigration policy with an understanding
              of why these rules exist, not just what they say. I think that context matters when you're trying
              to figure out what to do.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
            What we cover
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '✈️', title: 'UK immigration', desc: 'Skilled Worker, Graduate Route, Student, Family, BNO — explained clearly.' },
              { icon: '🍁', title: 'Canada pathways', desc: 'Express Entry, Provincial Nominee, Student-to-PR routes for Africans.' },
              { icon: '💳', title: 'International money', desc: 'Best ways to send money home, travel cards, fintech for the diaspora.' },
              { icon: '⚖️', title: 'Migrant rights', desc: 'What your employer can and cannot do, your rights as a visa holder.' },
              { icon: '🎓', title: 'Studying abroad', desc: 'Scholarships, student visa applications, what to expect on arrival.' },
              { icon: '🌍', title: 'Country guides', desc: 'Immigration and finance guides specific to Zimbabwe, Nigeria, Ghana, Kenya, and more.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
            Editorial standards
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>
            Every article on CabaraNews is checked against official government sources — GOV.UK, IRCC (Canada),
            USCIS, or equivalent — before publication. We mark the date each article was last reviewed, and
            we update content when rules change.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-body)' }}>
            CabaraNews is not a law firm and does not provide legal advice. If your situation is complex
            or high-stakes, please consult a licensed immigration lawyer or adviser.
            Our <a href="/disclaimer" style={{ color: 'var(--gold)' }}>disclaimer</a> has the full details.
          </p>
        </div>

      </div>
    </>
  )
}
