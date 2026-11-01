function Skills() {
  const skillGroups = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Application and web development technologies',
      skills: [
        'Flutter',
        'Dart',
        '.NET',
        'Laravel',
        'HTML',
        'CSS',
        'PHP',
        'JavaScript',
        'Bootstrap',
        'Java',
        'C#',
      ],
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      description: 'Database technologies and query languages',
      skills: ['SQL Server', 'MySQL'],
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data processing, analysis, and visualization',
      skills: [
        'Python',
        'pandas',
        'Tableau',
        'Power BI',
        'Microsoft Excel',
        'R',
        'Jupyter Notebook',
      ],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Interface design and prototyping',
      skills: ['Figma', 'Wireframing', 'Prototyping'],
    },
    {
      icon: '🛠️',
      title: 'Other Tools & Technologies',
      description: 'Additional tools and technologies I work with',
      skills: ['GitHub', 'VS Code', 'Canva', 'Capcut', 'Notion', 'Microsoft Office'],
    }
  ]

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span className="section-label">WHAT I WORK WITH</span>

        <h2>
          Technical <span>Skills.</span>
        </h2>

        <p>
          Technologies and tools I use to build applications,
          work with data, and design digital experiences.
        </p>
      </div>

      <div
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
        }}
      >
        {skillGroups.map((group) => (
          <article
            className="skill-card"
            key={group.title}
            style={{
              minWidth: 0,
              padding: 'clamp(14px, 2.5vw, 28px)',
            }}
          >
            {/* ICON AND CONTENT */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(38px, 5vw, 60px) minmax(0, 1fr)',
                alignItems: 'start',
                gap: 'clamp(10px, 1.8vw, 20px)',
                marginBottom: '22px',
              }}
            >
              {/* ICON */}
              <div
                style={{
                  width: 'clamp(38px, 5vw, 60px)',
                  height: 'clamp(38px, 5vw, 60px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  borderRadius: '18px',
                  background: '#edf0ff',
                  fontSize: 'clamp(19px, 2.5vw, 27px)',
                }}
                aria-hidden="true"
              >
                {group.icon}
              </div>

              {/* TITLE AND DESCRIPTION */}
              <div style={{ minWidth: 0 }}>
                <h3
                  style={{
                    margin: '2px 0 9px',
                    color: 'var(--blue)',
                    fontSize: 'clamp(12px, 1.5vw, 16px)',
                    lineHeight: 1.5,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {group.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: 'var(--muted)',
                    fontSize: 'clamp(10px, 1.2vw, 13px)',
                    lineHeight: 1.7,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {group.description}
                </p>
              </div>
            </div>

            {/* SKILL TAGS */}
            <div
              className="skill-tags"
              style={{
                gap: '8px',
              }}
            >
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills