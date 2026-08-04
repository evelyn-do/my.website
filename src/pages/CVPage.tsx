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
    margin: '3rem 0',
  } as React.CSSProperties,
  sectionLabel: {
    fontFamily: "'Work Sans', system-ui, sans-serif",
    fontSize: '0.68rem',
    fontWeight: 600,
    color: '#7A706A',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    margin: '0 0 1.25rem',
  } as React.CSSProperties,
  entryTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: '0.975rem',
    fontWeight: 500,
    color: '#2C2825',
    margin: '0 0 0.15rem',
    lineHeight: 1.4,
  } as React.CSSProperties,
  entryMeta: {
    fontFamily: "'Work Sans', system-ui, sans-serif",
    fontSize: '0.825rem',
    color: '#7A706A',
    margin: '0 0 0.25rem',
  } as React.CSSProperties,
  entryBody: {
    fontFamily: "'Work Sans', system-ui, sans-serif",
    fontSize: '0.875rem',
    color: '#5C534E',
    lineHeight: 1.7,
    margin: 0,
  } as React.CSSProperties,
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={s.sectionLabel}>{title}</h2>
      {children}
    </section>
  )
}

function Entry({
  title,
  meta,
  sub,
  body,
}: {
  title: string
  meta?: string
  sub?: string
  body?: string
}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '0.5rem 1.5rem',
      marginBottom: '1.5rem',
      alignItems: 'start',
    }}
      className="cv-entry"
    >
      <div>
        <p style={s.entryTitle}>{title}</p>
        {sub && <p style={{ ...s.entryMeta, fontStyle: 'italic' }}>{sub}</p>}
        {body && <p style={s.entryBody}>{body}</p>}
      </div>
      {meta && (
        <p style={{
          ...s.sans,
          fontSize: '0.8rem',
          color: '#7A706A',
          whiteSpace: 'nowrap' as const,
          margin: 0,
          paddingTop: '0.1rem',
        }}>
          {meta}
        </p>
      )}
    </div>
  )
}

export default function CVPage() {
  return (
    <div style={s.page}>
      {/* Header */}
      <section style={{ padding: '4.5rem 0 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' as const, gap: '1.5rem' }}>
          <div>
            <h1 style={{
              ...s.serif,
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 500,
              color: '#2C2825',
              margin: '0 0 0.3rem',
              letterSpacing: '-0.02em',
            }}>
              Curriculum Vitae
            </h1>
            <p style={{ ...s.sans, fontSize: '0.875rem', color: '#7A706A', margin: 0 }}>
              Evelyn Do · Updated August 2025
            </p>
          </div>
          <a
            href="#"
            download
            style={{
              ...s.sans,
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#8B4055',
              border: '1px solid #8B4055',
              padding: '0.6rem 1.25rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5EEF0' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent' }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 12l-5-5h3V2h4v5h3L8 12z"/>
              <rect x="2" y="13" width="12" height="1.5" rx="0.5"/>
            </svg>
            Download PDF
          </a>
        </div>
      </section>

      <hr style={s.divider} />

      {/* Contact */}
      <CVSection title="Contact">
        <div style={{
          ...s.sans,
          fontSize: '0.875rem',
          color: '#3E3530',
          lineHeight: 1.8,
        }}>
          <p style={{ margin: '0 0 0.2rem' }}>Department of Psychological Sciences</p>
          <p style={{ margin: '0 0 0.2rem' }}>University of Missouri</p>
          <p style={{ margin: '0 0 0.2rem' }}>210 McAlester Hall, Columbia, MO 65211</p>
          <p style={{ margin: '0 0 0.2rem' }}>
            <a href="mailto:evelyn.do@missouri.edu" style={{ color: '#8B4055', textDecoration: 'none' }}>evelyn.do@missouri.edu</a>
          </p>
        </div>
      </CVSection>

      <hr style={s.divider} />

      {/* Education */}
      <CVSection title="Education">
        <Entry
          title="Ph.D. in Social Psychology (in progress)"
          sub="University of Missouri, Columbia"
          meta="2021–Present"
          body="Advisor: James R. Hawkins. Dissertation: Political Environments as Psychological Stressors: Evidence from Surveys, Experiments, and Daily Diaries."
        />
        <Entry
          title="B.A. in Psychology & Political Science, summa cum laude"
          sub="University of Wisconsin–Madison"
          meta="2021"
          body="Honors Thesis: Perceived Threat and Support for Restrictive Immigration Policies."
        />
      </CVSection>

      <hr style={s.divider} />

      {/* Research Experience */}
      <CVSection title="Research Experience">
        <Entry
          title="Graduate Research Assistant"
          sub="Social Identity and Political Psychology Lab, University of Missouri"
          meta="2021–Present"
          body="Designed and executed survey experiments and longitudinal studies on minority stress and political climate. Managed data collection, analysis in R and Stata, and manuscript preparation."
        />
        <Entry
          title="Research Assistant"
          sub="Political Cognition Lab, University of Wisconsin–Madison"
          meta="2019–2021"
          body="Assisted with data collection for studies on political attitude formation and partisan motivated reasoning."
        />
      </CVSection>

      <hr style={s.divider} />

      {/* Publications */}
      <CVSection title="Publications">
        <h3 style={{ ...s.sans, fontSize: '0.72rem', fontWeight: 600, color: '#8B4055', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
          Peer-Reviewed Articles
        </h3>
        {[
          'Do, E., Hawkins, J. R., & Chen, M. (2024). Political climate and minority stress: A meta-analytic review. <em>Political Psychology, 45</em>(3), 411–438. https://doi.org/10.xxxx',
          'Do, E., & Hawkins, J. R. (2023). Perceived discrimination and psychological distress among LGBTQ+ adults: The moderating role of community connectedness. <em>Journal of Social Issues, 79</em>(2), 587–609.',
        ].map((pub, i) => (
          <p key={i} style={{ ...s.sans, fontSize: '0.875rem', color: '#3E3530', lineHeight: 1.75, margin: '0 0 0.9rem', paddingLeft: '1.1rem', borderLeft: '2px solid #8B4055' }}
            dangerouslySetInnerHTML={{ __html: pub }}
          />
        ))}

        <h3 style={{ ...s.sans, fontSize: '0.72rem', fontWeight: 600, color: '#7A706A', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '1.5rem 0 1rem' }}>
          Working Papers &amp; Manuscripts Under Review
        </h3>
        {[
          'Do, E. (2025). When the state becomes a stressor: Anti-LGBTQ+ legislation and internalized stigma. <em>Manuscript under review</em>.',
          'Do, E., & Hawkins, J. R. (2025). Electoral anxiety and collective identity: Evidence from a daily diary study. <em>Manuscript in preparation</em>.',
          "Do, E. (2025). Women's leadership and gender backlash: A pre-registered experiment. <em>Manuscript in preparation</em>.",
        ].map((pub, i) => (
          <p key={i} style={{ ...s.sans, fontSize: '0.875rem', color: '#3E3530', lineHeight: 1.75, margin: '0 0 0.9rem', paddingLeft: '1.1rem', borderLeft: '2px solid #DDD8D0' }}
            dangerouslySetInnerHTML={{ __html: pub }}
          />
        ))}
      </CVSection>

      <hr style={s.divider} />

      {/* Presentations */}
      <CVSection title="Conference Presentations">
        {[
          { title: 'Political Climates as Stressors for LGBTQ+ Adults', event: 'Society for Personality and Social Psychology (SPSP) Annual Meeting, Atlanta, GA', date: '2025' },
          { title: 'Electoral Outcomes and Daily Affect Among Racial Minorities', event: 'International Society of Political Psychology (ISPP) Annual Meeting, Vienna, Austria', date: '2024' },
          { title: 'Gender Backlash in High-Status Domains: A Pre-Registered Study', event: 'Midwestern Psychological Association (MPA) Annual Conference, Chicago, IL', date: '2023' },
          { title: 'Perceived Threat and Anti-Democratic Attitudes', event: 'American Political Science Association (APSA) Annual Meeting, Los Angeles, CA', date: '2022' },
        ].map((p, i) => (
          <Entry key={i} title={p.title} sub={p.event} meta={p.date} />
        ))}
      </CVSection>

      <hr style={s.divider} />

      {/* Teaching */}
      <CVSection title="Teaching Experience">
        <Entry
          title="Teaching Assistant — Social Psychology (PSY 2300)"
          sub="University of Missouri"
          meta="Fall 2023, 2024"
          body="Led weekly discussion sections, held office hours, graded papers and exams. Received average student rating of 4.8/5.0."
        />
        <Entry
          title="Teaching Assistant — Research Methods in Psychology (PSY 3100)"
          sub="University of Missouri"
          meta="Spring 2022, 2023"
          body="Instructed students in experimental design, data analysis in SPSS and R, and APA-format reporting."
        />
        <Entry
          title="Guest Lecturer — Political Psychology (PSC 4450)"
          sub="University of Missouri"
          meta="Fall 2024"
          body="Delivered a 75-minute lecture on minority stress theory and its applications to political psychology."
        />
      </CVSection>

      <hr style={s.divider} />

      {/* Awards */}
      <CVSection title="Awards &amp; Fellowships">
        <Entry title="Graduate Research Excellence Award" sub="University of Missouri, Department of Psychological Sciences" meta="2024" />
        <Entry title="SPSP Diversity, Equity, and Inclusion Fellowship" sub="Society for Personality and Social Psychology" meta="2023" />
        <Entry title="Graduate Student Research Grant ($3,500)" sub="University of Missouri Graduate School" meta="2022–2023" />
        <Entry title="Dean's Fellowship" sub="University of Missouri Graduate School" meta="2021–2023" />
        <Entry title="Phi Beta Kappa" sub="University of Wisconsin–Madison" meta="2021" />
      </CVSection>

      <hr style={s.divider} />

      {/* Skills */}
      <CVSection title="Skills &amp; Methods">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}
          className="skills-grid"
        >
          {[
            {
              label: 'Statistical & Computational',
              items: ['R (lme4, lavaan, ggplot2)', 'Stata', 'SPSS', 'Python (pandas, scipy)', 'Git / GitHub'],
            },
            {
              label: 'Research Methods',
              items: ['Survey experiments', 'Longitudinal panel studies', 'Experience sampling methods', 'Meta-analysis', 'Pre-registration (OSF, AsPredicted)'],
            },
            {
              label: 'Analytical Approaches',
              items: ['Multilevel modeling', 'Structural equation modeling', 'Causal inference / DiD', 'Mediation & moderation analysis', 'Bayesian methods'],
            },
            {
              label: 'Languages',
              items: ['English (native)', 'Vietnamese (heritage)', 'Spanish (conversational)'],
            },
          ].map(skill => (
            <div key={skill.label}>
              <p style={{
                ...s.sans,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#8B4055',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}>
                {skill.label}
              </p>
              <ul style={{ ...s.sans, fontSize: '0.875rem', color: '#5C534E', lineHeight: 1.8, margin: 0, paddingLeft: '1rem' }}>
                {skill.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </CVSection>

      <div style={{ paddingBottom: '4rem' }} />

      <style>{`
        @media (max-width: 600px) {
          .cv-entry { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
