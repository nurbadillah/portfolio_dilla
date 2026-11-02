
function Certifications() {
  const certifications = [
    {
      category: 'PROFESSIONAL CERTIFICATION',
      title: 'Software Engineer',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      year: '2026',
      description:
        'Certified competent in the Software Engineer Occupational Certification Scheme.',
      icon: '💻',

      // Masukkan link sertifikat BNSP
      externalLink: 'https://drive.google.com/drive/folders/1PLdrkhO3VFGDiroxXOXR2fbMc2pyBXOC?usp=drive_link',
    },
  ]

  const trainings = [
    {
      title: 'Bootcamp Data Science with Python Pandas',
      issuer: 'BuildWithAngga',
      year: '2025',
      description:
        'Data cleaning, exploratory data analysis, and data visualization.',
      icon: '📊',

      // Masukkan link sertifikat Data Science
      externalLink: 'https://drive.google.com/file/d/1KOKTVRE8xxy_ahAwvgkTHyzv1I4vChgI/view?usp=drive_link',
    },
    {
      title: 'Bootcamp UI/UX Designer',
      issuer: 'BuildWithAngga',
      year: '2024',
      description:
        'User research, wireframing, prototyping, usability testing, and design documentation.',
      icon: '🎨',

      // Masukkan link sertifikat UI/UX
      externalLink: 'https://drive.google.com/file/d/1ZaPa7lm4idkwPRy-j2lRnTkHUw1uEgIK/view?usp=drive_link',
    },
    {
      title: 'The 7 Habits of Highly Effective New College Students',
      issuer: 'FranklinCovey',
      year: '2022',
      description:
        'Completed a 90-hour learning journey focused on personal effectiveness and collaborative problem-solving.',
      icon: '🌱',

      // Masukkan link sertifikat FranklinCovey
      externalLink: 'https://drive.google.com/drive/folders/1GqalSc68L_FXQWlVOHoRFQ-fPiA2_t7H?usp=drive_link',
    },
  ]

  const CredentialLink = ({ href }) => {
    if (!href) {
      return (
        <span
          className="credential-button credential-disabled"
          title="Credential link coming soon"
        >
          <span>View Credential</span>
          <span aria-hidden="true">↗</span>
        </span>
      )
    }

    return (
      <a
        className="credential-button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View credential in a new tab"
      >
        <span>View Credential</span>
        <span aria-hidden="true">↗</span>
      </a>
    )
  }

  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="section-heading">
        <span className="section-label">
          CREDENTIALS & GROWTH
        </span>

        <h2>
          Certifications <span>& Training.</span>
        </h2>

        <p>
          Professional certification and learning experiences that
          support my technical and professional development.
        </p>
      </div>

      {/* PROFESSIONAL CERTIFICATIONS */}

      <div className="certifications-grid">
        {certifications.map((item) => (
          <article
            className="certification-card"
            key={item.title}
          >
            <div className="certification-card-top">
              <div className="certification-icon">
                {item.icon}
              </div>

              <span className="certification-year">
                {item.year}
              </span>
            </div>

            <span className="certification-category">
              {item.category}
            </span>

            <h3>{item.title}</h3>

            <p className="certification-issuer">
              {item.issuer}
            </p>

            <p className="certification-description">
              {item.description}
            </p>

            <CredentialLink href={item.externalLink} />
          </article>
        ))}
      </div>

      {/* TRAINING & COURSES */}

      <div className="training-heading">
        <h3>Training & Courses</h3>

        <p>
          Additional learning experiences beyond formal education.
        </p>
      </div>

      <div className="trainings-grid">
        {trainings.map((item) => (
          <article
            className="training-card"
            key={item.title}
          >
            <div className="training-card-top">
              <span className="training-icon">
                {item.icon}
              </span>

              <span className="training-year">
                {item.year}
              </span>
            </div>

            <h4>{item.title}</h4>

            <p className="training-issuer">
              {item.issuer}
            </p>

            <p className="training-description">
              {item.description}
            </p>

            <CredentialLink href={item.externalLink} />
          </article>
        ))}
      </div>

      {/* CREDENTIAL BUTTON STYLING */}

      <style>{`
        .certification-card,
        .training-card {
          display: flex;
          flex-direction: column;
        }

        .credential-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          gap: 9px;

          margin-top: auto;
          padding: 10px 15px;

          background: #f0f3ff;
          border: 1px solid #dfe5fa;
          border-radius: 10px;

          color: #596db4;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .credential-button[href]:hover {
          background: #6678d6;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .credential-button[href]:focus-visible {
          outline: 3px solid #6678d6;
          outline-offset: 3px;
        }

        .credential-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .certification-card .credential-button {
          margin-top: 22px;
        }

        .training-card .credential-button {
          margin-top: auto;
        }

        .training-description {
          margin-bottom: 22px;
        }

        @media (max-width: 600px) {
          .credential-button {
            font-size: 11px;
            padding: 9px 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .credential-button {
            transition: none;
          }
        }

        .certification-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          margin-bottom: 24px;
        }

        .certification-card-top .certification-icon {
          margin: 0;
        }

        .certification-card-top .certification-year {
          display: inline-block;
          margin: 0;
          padding: 0;
          color: #7987a9;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}

export default Certifications
