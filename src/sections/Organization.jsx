
function Organization() {
  const organizations = [
    {
      role: 'Secretary of the Arts and Culture Department',
      organization: 'BEM Sekolah Vokasi IPB University',
      period: '2023 – 2024',
      description:
        'Managed administrative documentation, prepared reports, and maintained internal communication to support departmental activities.',
      achievement: 'Best Department Secretary',
    },
    {
      role: 'Web Master Division Member',
      organization: 'HIMAVO Micro IT',
      period: '',
      description:
        'Participated in technology-related activities and web development learning initiatives within the student association.',
      achievement: '',
    },
  ]

  return (
    <section className="organization-section" id="organization">
      <div className="section-heading">
        <span className="section-label">
          BEYOND THE CLASSROOM
        </span>

        <h2>
          Organizational <span>Experience.</span>
        </h2>

        <p>
          Leadership, collaboration, and active involvement
          in student organizations throughout my educational journey.
        </p>
      </div>

      <div className="organization-grid">
        {organizations.map((item) => (
          <article
            className="organization-card"
            key={item.organization}
          >
            <div className="organization-card-top">
              <span className="organization-tag">
                ORGANIZATION
              </span>

              {item.period && (
                <span className="organization-period">
                  {item.period}
                </span>
              )}
            </div>

            <h3>{item.role}</h3>

            <p className="organization-name">
              {item.organization}
            </p>

            <p className="organization-description">
              {item.description}
            </p>

            {item.achievement && (
              <div className="organization-achievement">
                <span>★</span>
                {item.achievement}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Organization
