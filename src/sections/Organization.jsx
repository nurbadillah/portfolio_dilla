
function Organization() {
  const organizations = [
    {
      role: 'Secretary of Arts and Culture Department',
      organization: 'Badan Eksekutif Mahasiswa Sekolah Vokasi IPB',
      location: 'Bogor, Indonesia',
      period: 'Dec 2023 – Dec 2024',
      description: [
        'Awarded Best Department Secretary for outstanding performance and contribution.',
        'Managed department administration, including meeting documentation, correspondence, and archiving of activity records.',
        'Assisted in planning and executing cultural programs that promote student creativity and engagement.',
        'Served as a Steering Committee, responsible for providing strategic direction and guidance to the organizing team.',
      ],
      achievement: 'Best Department Secretary',
    },
    {
      role: 'Member of Web Master Division',
      organization: 'HIMAVO Micro IT',
      location: 'Bogor, Indonesia',
      period: 'Dec 2022 – Nov 2024',
      description: [
        'Participated in web development training sessions to strengthen technical skills.',
        'Handled external communication and event promotion to partners and participants as Public Relations Division member for Company Visit 2024.',
        'Planned and organized the event flow as Event Division member for Micro Technology Education 2023.',
      ],
    },
    {
      role: 'Head of Tryout Division',
      organization: 'Ikamanesa Goes To School',
      location: 'Kuningan, Indonesia',
      period: 'Sep 2023 – Jan 2024',
      description: [
        'Led the division in participant data collection and technical execution, and supervised the event to keep it on schedule and meet quality standards.',
        'Secured a partnership with BuwahEdu, a UTBK learning platform, to host the tryout for 300+ participants.',
        'Designed the concept and flow of a UTBK tryout for high school students.',
      ],
    },
    {
      role: 'Staff of Event Division',
      organization: 'Pekan Seni Budaya',
      location: 'Bogor, Indonesia',
      period: 'May 2023 – Sep 2023',
      description: [
        'Designed the overall concept and rundown for a competition series and coordinated with related divisions for smooth execution.',
      ],
    },
  ]

  return (
    <section
      className="organization-section"
      id="organization"
    >
      <div className="section-heading">
        <span className="section-label">
          BEYOND THE CLASSROOM
        </span>

        <h2>
          Leadership & <span>Organizational Experience.</span>
        </h2>

        <p>
          Leadership, collaboration, and organizational
          contributions throughout my academic journey.
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

              <div className="organization-meta">
                <span className="organization-period">
                  {item.period}
                </span>

                <span className="organization-location">
                  📍 {item.location}
                </span>
              </div>
            </div>

            <h3>{item.role}</h3>

            <p className="organization-name">
              {item.organization}
            </p>

            <ul className="organization-description">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

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
