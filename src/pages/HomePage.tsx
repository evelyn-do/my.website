import type { Page } from '../App'
import profilePhoto from '@/imports/1SY00834_-_________-fotor-20260804193328.png'

interface HomePageProps {
  navigate: (page: Page) => void
}

const s = {
  page: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '0 1.5rem',
  } as React.CSSProperties,
  serif: {
    fontFamily: "'Lora', Georgia, serif",
  } as React.CSSProperties,
  sans: {
    fontFamily: "'Work Sans', system-ui, sans-serif",
  } as React.CSSProperties,
  divider: {
    border: 'none',
    borderTop: '1px solid #DDD8D0',
    margin: '3.5rem 0',
  } as React.CSSProperties,
}

function AccentLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...s.sans,
        fontSize: '0.8rem',
        color: '#7A706A',
        textDecoration: 'none',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        borderBottom: '1px solid #DDD8D0',
        paddingBottom: '1px',
        transition: 'color 0.15s, border-color 0.15s',
      }}
      onMouseEnter={e => {
        ;(e.target as HTMLAnchorElement).style.color = '#8B4055'
        ;(e.target as HTMLAnchorElement).style.borderBottomColor = '#8B4055'
      }}
      onMouseLeave={e => {
        ;(e.target as HTMLAnchorElement).style.color = '#7A706A'
        ;(e.target as HTMLAnchorElement).style.borderBottomColor = '#DDD8D0'
      }}
    >
      {children}
    </a>
  )
}

export default function HomePage({ navigate }: HomePageProps) {
  return (
    <div style={s.page}>
      {/* Hero */}
      <section style={{ padding: '5rem 0 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="hero-grid"
        >
          <div>
            <h1 style={{
              ...s.serif,
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 500,
              color: '#2C2825',
              margin: '0 0 0.4rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Evelyn Do
            </h1>
            <p style={{
              ...s.sans,
              fontSize: '0.9rem',
              color: '#8B4055',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 0.25rem',
            }}>
              PhD Student in Social Psychology
            </p>
            <p style={{
              ...s.sans,
              fontSize: '0.875rem',
              color: '#7A706A',
              margin: '0 0 2rem',
              letterSpacing: '0.03em',
            }}>
              University of Missouri
            </p>

            <p style={{
              ...s.sans,
              fontSize: '1.025rem',
              color: '#3E3530',
              lineHeight: 1.8,
              maxWidth: '520px',
              margin: '0 0 2.5rem',
            }}>
              I study how political and social environments shape psychological
              well-being, identity, and political attitudes — with a particular
              focus on how structural conditions translate into lived experiences
              for marginalized groups.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
              <button
                onClick={() => navigate('research')}
                style={{
                  ...s.sans,
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#FAF8F5',
                  backgroundColor: '#8B4055',
                  border: 'none',
                  padding: '0.65rem 1.4rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6E3144' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#8B4055' }}
              >
                View Research
              </button>
              <button
                onClick={() => navigate('cv')}
                style={{
                  ...s.sans,
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#8B4055',
                  backgroundColor: 'transparent',
                  border: '1px solid #8B4055',
                  padding: '0.65rem 1.4rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5EEF0'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                }}
              >
                Curriculum Vitae
              </button>
            </div>
          </div>

          {/* Profile photo */}
          <div style={{
            width: '192px',
            flexShrink: 0,
          }}
            className="hero-photo"
          >
            <div style={{
              width: '192px',
              height: '230px',
              backgroundColor: '#E8DDD5',
              overflow: 'hidden',
            }}>
              <img
                src={profilePhoto}
                alt="Evelyn Do"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>

        {/* Contact links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap' as const,
          alignItems: 'center',
        }}>
          <AccentLink href="mailto:evelyn.do@missouri.edu">Email</AccentLink>
          <span style={{ color: '#DDD8D0', fontSize: '0.7rem' }}>·</span>
          <AccentLink href="https://scholar.google.com">Google Scholar</AccentLink>
          <span style={{ color: '#DDD8D0', fontSize: '0.7rem' }}>·</span>
          <AccentLink href="https://github.com">GitHub</AccentLink>
          <span style={{ color: '#DDD8D0', fontSize: '0.7rem' }}>·</span>
          <AccentLink href="https://linkedin.com">LinkedIn</AccentLink>
        </div>
      </section>

      <hr style={s.divider} />

      {/* About Me */}
      <section style={{ paddingBottom: '3.5rem' }}>
        <h2 style={{
          ...s.serif,
          fontSize: '1.5rem',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 1.5rem',
          letterSpacing: '-0.01em',
        }}>
          About Me
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
        }}
          className="about-grid"
        >
          <div>
            <p style={{ ...s.sans, color: '#3E3530', lineHeight: 1.8, margin: '0 0 1rem', fontSize: '0.975rem' }}>
              I am a fourth-year PhD student in the Department of Psychological
              Sciences at the University of Missouri, advised by Professor James
              Hawkins. My work sits at the intersection of political psychology,
              social identity, and health disparities.
            </p>
            <p style={{ ...s.sans, color: '#3E3530', lineHeight: 1.8, margin: 0, fontSize: '0.975rem' }}>
              Before graduate school, I completed my B.A. in Psychology and
              Political Science at the University of Wisconsin–Madison, where I
              developed an early interest in how institutional contexts shape
              individual outcomes.
            </p>
          </div>
          <div>
            <p style={{ ...s.sans, color: '#3E3530', lineHeight: 1.8, margin: '0 0 1rem', fontSize: '0.975rem' }}>
              Outside of my research, I serve as a teaching assistant for
              undergraduate courses in social and political psychology, and I am
              actively involved in graduate student mentorship initiatives within
              my department.
            </p>
            <p style={{ ...s.sans, color: '#7A706A', lineHeight: 1.8, margin: 0, fontSize: '0.925rem', fontStyle: 'italic' }}>
              I am currently on the academic job market and welcome inquiries
              about potential collaborations and postdoctoral opportunities.
            </p>
          </div>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Research interests */}
      <section style={{ paddingBottom: '4rem' }}>
        <h2 style={{
          ...s.serif,
          fontSize: '1.5rem',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 1.5rem',
          letterSpacing: '-0.01em',
        }}>
          Research Interests
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
        }}
          className="interests-grid"
        >
          {[
            {
              num: '01',
              title: 'Political Environments & Well-Being',
              body: 'Examining how policies, political climates, and electoral outcomes affect the mental health and identity of marginalized groups.',
            },
            {
              num: '02',
              title: 'Gender Backlash & Social Change',
              body: 'Investigating psychological reactions to women\'s advancement and how backlash dynamics maintain or erode gender hierarchy.',
            },
            {
              num: '03',
              title: 'Threat & Anti-Democratic Attitudes',
              body: 'Studying how perceived social and demographic threats activate authoritarian tendencies and undermine democratic norms.',
            },
          ].map(item => (
            <div key={item.num}>
              <p style={{
                ...s.sans,
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#8B4055',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}>
                {item.num}
              </p>
              <h3 style={{
                ...s.serif,
                fontSize: '1rem',
                fontWeight: 500,
                color: '#2C2825',
                margin: '0 0 0.6rem',
                lineHeight: 1.4,
              }}>
                {item.title}
              </h3>
              <p style={{
                ...s.sans,
                fontSize: '0.875rem',
                color: '#7A706A',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <button
            onClick={() => navigate('research')}
            style={{
              ...s.sans,
              fontSize: '0.825rem',
              fontWeight: 500,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#8B4055',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderBottom: '1px solid #8B4055',
              paddingBottom: '1px',
            }}
          >
            All Research →
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .interests-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  )
}
