function Certifications() {
  const certifications = [
    {
      category: 'PROFESSIONAL CERTIFICATION',
      title: 'Software Engineer',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      year: '2026',
      description:
        'Certified competent in the Software Engineer Occupational Certification Scheme.',
      icon: '🏅',
    },
  ]

  const trainings = [
    {
      title: 'Data Science with Python Pandas',
      issuer: 'BuildWithAngga',
      year: '2025',
      description:
        'Data cleaning, exploratory data analysis, and data visualization.',
      icon: '📊',
    },
    {
      title: 'UI/UX Designer',
      issuer: 'BuildWithAngga',
      year: '2024',
      description:
        'User research, wireframing, prototyping, usability testing, and design documentation.',
      icon: '🎨',
    },
    {
      title: 'The 7 Habits of Highly Effective New College Students',
      issuer: 'FranklinCovey',
      year: '2022',
      description:
        'Completed a 90-hour learning journey focused on personal effectiveness and collaborative problem-solving.',
      icon: '🌱',
    },
  ]

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-heading">
        <span className="section-label">CREDENTIALS & GROWTH</span>

        <h2>
          Certifications <span>& Training.</span>
        </h2>

        <p>
          Professional certification and learning experiences that
          support my technical and professional development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((item) => (
          <article className="certification-card" key={item.title}>
            <div className="certification-icon">{item.icon}</div>

            <span className="certification-category">
              {item.category}
            </span>

            <h3>{item.title}</h3>

            <p className="certification-issuer">{item.issuer}</p>

            <p className="certification-description">
              {item.description}
            </p>

            <span className="certification-year">{item.year}</span>
          </article>
        ))}
      </div>

      <div className="training-heading">
        <h3>Training & Courses</h3>

        <p>
          Additional learning experiences beyond formal education.
        </p>
      </div>

      <div className="trainings-grid">
        {trainings.map((item) => (
          <article className="training-card" key={item.title}>
            <div className="training-card-top">
              <span className="training-icon">{item.icon}</span>
              <span className="training-year">{item.year}</span>
            </div>

            <h4>{item.title}</h4>

            <p className="training-issuer">{item.issuer}</p>

            <p className="training-description">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications