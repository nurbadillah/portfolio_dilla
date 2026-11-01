function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <span className="section-label">MY ACADEMIC BACKGROUND</span>

        <h2>
          Education<span>.</span>
        </h2>

        <p>
          My educational journey and academic projects in software
          engineering technology.
        </p>
      </div>

      <div className="education-container">
        <article className="education-card">
          <div className="education-header">
            <div>
              <span className="education-label">UNDERGRADUATE EDUCATION</span>

              <h3>IPB University</h3>

              <p className="education-degree">
                Applied Bachelor's Degree in Software Engineering Technology
              </p>
            </div>

            <div className="education-gpa">
              <strong>3.63</strong>
              <span>GPA / 4.00</span>
              <span className="cum-laude">Cum Laude</span>
            </div>
          </div>

          <div className="education-divider"></div>

          <div className="academic-project">
            <span className="project-label">FINAL PROJECT</span>

            <h4>Dealer Visit Recording App</h4>

            <p>
              Designed and implemented an Android-based application for
              recording and monitoring dealer visits, including visit
              planning, direct visit recording, visit history, and a
              dashboard for visit monitoring.
            </p>

            <div className="education-technologies">
              <span>Flutter</span>
              <span>.NET API</span>
              <span>SQL Server</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education