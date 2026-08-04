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

const researchAreas = [
  {
    num: '01',
    title: 'Political Environments and Psychological Well-Being',
    body: `My primary line of research examines how political climates, hostile policy environments, and electoral outcomes affect the mental health, stress, and identity of socially marginalized groups — particularly LGBTQ+ individuals and racial minorities. I use longitudinal survey data, natural experiments around elections, and experience sampling methods to document how macro-level political conditions translate into micro-level psychological harm.`,
  },
  {
    num: '02',
    title: 'Gender Backlash and Social Change',
    body: `A second strand of research investigates the psychological dynamics of gender backlash — the negative reactions that often follow women's advancement into traditionally male-dominated domains. I am interested in who engages in backlash, under what conditions it is most potent, and how it functions to maintain gender hierarchy. This work draws on experimental methods and integrates insights from social identity theory and system justification theory.`,
  },
  {
    num: '03',
    title: 'Threat Perception and Anti-Democratic Attitudes',
    body: `A third area examines how perceived demographic and social threats activate authoritarian orientations and undermine commitment to democratic norms. I study both the antecedents of threat — including changes in racial composition and cultural status anxiety — and its downstream consequences for political tolerance, minority rights, and institutional trust.`,
  },
]

const projects = [
  {
    title: 'Hostile Policy and LGBTQ+ Mental Health',
    status: 'Under Review',
    journal: 'Journal of Personality and Social Psychology',
    description:
      'Using a two-wave panel survey spanning state legislative sessions, I document that the passage of anti-LGBTQ+ legislation predicts increases in psychological distress, internalized stigma, and identity concealment among LGBTQ+ respondents in affected states, net of individual-level covariates.',
  },
  {
    title: 'Electoral Outcomes as Stressors: A Daily Diary Study',
    status: 'In Preparation',
    journal: '',
    description:
      'A 30-day experience sampling study surrounding the 2024 presidential election. Multilevel models reveal that daily affect and sense of belonging tracked shifts in perceived electoral threat among racial minority participants, with effects attenuated among those with strong collective efficacy beliefs.',
  },
  {
    title: "Women's Leadership and Status Threat",
    status: 'Data Collection',
    journal: '',
    description:
      'A pre-registered experimental study examining how exposure to female leaders in high-status domains activates backlash among men high in social dominance orientation. Outcomes include hostile sexism endorsement, competence attributions, and support for discriminatory organizational policies.',
  },
]

const publications = [
  {
    type: 'peer-reviewed',
    citation:
      'Do, E., Hawkins, J. R., & Chen, M. (2024). Political climate and minority stress: A meta-analytic review. <em>Political Psychology, 45</em>(3), 411–438.',
    link: '#',
  },
  {
    type: 'peer-reviewed',
    citation:
      'Do, E., & Hawkins, J. R. (2023). Perceived discrimination and psychological distress among LGBTQ+ adults: The moderating role of community connectedness. <em>Journal of Social Issues, 79</em>(2), 587–609.',
    link: '#',
  },
  {
    type: 'working-paper',
    citation:
      'Do, E. (2025). When the state becomes a stressor: Anti-LGBTQ+ legislation and internalized stigma. Manuscript under review.',
    link: '#',
  },
  {
    type: 'working-paper',
    citation:
      'Do, E., & Hawkins, J. R. (2025). Electoral anxiety and collective identity: Evidence from a daily diary study. Manuscript in preparation.',
    link: '#',
  },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    'Under Review': { bg: '#F5EEF0', color: '#8B4055' },
    'In Preparation': { bg: '#F0EDE8', color: '#7A706A' },
    'Data Collection': { bg: '#EEF3F0', color: '#4A7A5E' },
  }
  const c = colors[status] || { bg: '#F0EDE8', color: '#7A706A' }
  return (
    <span style={{
      ...s.sans,
      fontSize: '0.7rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: c.color,
      backgroundColor: c.bg,
      padding: '0.2rem 0.55rem',
      borderRadius: '2px',
    }}>
      {status}
    </span>
  )
}

export default function ResearchPage() {
  return (
    <div style={s.page}>
      {/* Page header */}
      <section style={{ padding: '4.5rem 0 3rem' }}>
        <p style={{
          ...s.sans,
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#8B4055',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: '0 0 1rem',
        }}>
          Research
        </p>
        <h1 style={{
          ...s.serif,
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 1.5rem',
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          maxWidth: '560px',
        }}>
          Understanding the Political Roots of Psychological Harm
        </h1>
        <p style={{
          ...s.sans,
          fontSize: '1rem',
          color: '#5C534E',
          lineHeight: 1.8,
          maxWidth: '600px',
          margin: 0,
        }}>
          My research asks: how do the political environments we inhabit — the
          policies enacted, the elections held, the norms contested — get under
          our skin? I approach this question empirically, drawing on experimental,
          survey, and longitudinal methods to build a cumulative account of
          politics as a psychological force.
        </p>
      </section>

      <hr style={s.divider} />

      {/* Research Areas */}
      <section>
        <h2 style={{
          ...s.serif,
          fontSize: '1.25rem',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 2.5rem',
          letterSpacing: '-0.01em',
        }}>
          Research Areas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {researchAreas.map(area => (
            <div key={area.num} style={{
              display: 'grid',
              gridTemplateColumns: '2.5rem 1fr',
              gap: '1.25rem',
              alignItems: 'start',
            }}>
              <span style={{
                ...s.sans,
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#8B4055',
                letterSpacing: '0.08em',
                paddingTop: '0.2rem',
              }}>
                {area.num}
              </span>
              <div>
                <h3 style={{
                  ...s.serif,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#2C2825',
                  margin: '0 0 0.65rem',
                  lineHeight: 1.4,
                }}>
                  {area.title}
                </h3>
                <p style={{
                  ...s.sans,
                  fontSize: '0.925rem',
                  color: '#5C534E',
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {area.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Selected Projects */}
      <section>
        <h2 style={{
          ...s.serif,
          fontSize: '1.25rem',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 2.5rem',
          letterSpacing: '-0.01em',
        }}>
          Selected Projects
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              paddingBottom: i < projects.length - 1 ? '2rem' : 0,
              borderBottom: i < projects.length - 1 ? '1px solid #EDE9E4' : 'none',
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap' as const }}>
                <h3 style={{
                  ...s.serif,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#2C2825',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {proj.title}
                </h3>
                <StatusBadge status={proj.status} />
              </div>
              {proj.journal && (
                <p style={{
                  ...s.sans,
                  fontSize: '0.8rem',
                  color: '#7A706A',
                  fontStyle: 'italic',
                  margin: '0 0 0.5rem',
                }}>
                  {proj.journal}
                </p>
              )}
              <p style={{
                ...s.sans,
                fontSize: '0.9rem',
                color: '#5C534E',
                lineHeight: 1.75,
                margin: 0,
              }}>
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr style={s.divider} />

      {/* Publications */}
      <section style={{ paddingBottom: '4rem' }}>
        <h2 style={{
          ...s.serif,
          fontSize: '1.25rem',
          fontWeight: 500,
          color: '#2C2825',
          margin: '0 0 2rem',
          letterSpacing: '-0.01em',
        }}>
          Publications &amp; Working Papers
        </h2>

        <h3 style={{
          ...s.sans,
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#7A706A',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: '0 0 1.25rem',
        }}>
          Peer-Reviewed Articles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {publications
            .filter(p => p.type === 'peer-reviewed')
            .map((pub, i) => (
              <div key={i} style={{
                ...s.sans,
                fontSize: '0.9rem',
                color: '#3E3530',
                lineHeight: 1.75,
                paddingLeft: '1.25rem',
                borderLeft: '2px solid #8B4055',
              }}
                dangerouslySetInnerHTML={{ __html: pub.citation }}
              />
            ))}
        </div>

        <h3 style={{
          ...s.sans,
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#7A706A',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: '0 0 1.25rem',
        }}>
          Working Papers
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {publications
            .filter(p => p.type === 'working-paper')
            .map((pub, i) => (
              <div key={i} style={{
                ...s.sans,
                fontSize: '0.9rem',
                color: '#3E3530',
                lineHeight: 1.75,
                paddingLeft: '1.25rem',
                borderLeft: '2px solid #DDD8D0',
              }}
                dangerouslySetInnerHTML={{ __html: pub.citation }}
              />
            ))}
        </div>
      </section>
    </div>
  )
}
