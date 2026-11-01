import { useState, useCallback } from 'react'
import ImageModal from '../components/ImageModal'

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null)

  const closeImageModal = useCallback(() => {
    setSelectedImage(null)
  }, [])


  const projects = [
    {
      number: '01',
      title: 'Dealer Visit Recording App',
      image: '/images/projects/dealer-visit-app.png',
      imageAlt: 'Dealer Visit Mobile App documentation',
      description:
        'Developed a mobile application to support dealer visit planning, visit recording, and activity monitoring. Implemented features including planned visits, direct visits, visit history, and a dashboard displaying visit statistics to support monitoring and reporting.',
      technologies: ['Flutter', '.NET API', 'SQL Server'],
    },
    {
      number: '02',
      title: 'Office Inventory Recording App',
      image: '/images/projects/assets-app.png',
      imageAlt: '',
      description:
        'Developed a mobile application for digital office inventory recording to support internal inventory management processes and improve the organization of inventory information.',
      technologies: ['Flutter', '.NET API', 'SQL Server'],
    },
    {
      number: '03',
      title: 'Data Visualization with Tableau',
      image: '/images/projects/tableau.png',
      imageAlt: '',
      description:
        'Explored and visualized datasets to identify patterns and present key findings through an interactive Tableau dashboard.',
      technologies: ['Tableau', 'CSV'],
    },
    {
      number: '04',
      title: 'Business Intelligence Dashboard with Power BI',
      image: '/images/projects/power-bi.png',
      imageAlt: '',
      description:
        'Developed data visualizations and dashboard layouts to summarize key metrics and make information easier to interpret.',
      technologies: ['Power BI', 'MySQL', 'SQL Server','CSV'],
    },
  ]

  const responsibilities = [
    'Developed two full-stack mobile applications for internal use: an office inventory recording app and a dealer visit recording app, covering the development cycle from requirements analysis to delivery to the IT team.',
    'Gathered and analyzed requirements from stakeholders, then translated them into application features and system design.',
    'Built mobile application interfaces using Flutter and integrated them with a .NET API backend connected to a SQL Server database.',
    'Designed and managed database structures to support the storage and retrieval of inventory and dealer visit data.',
    'Created data visualizations and dashboards using Tableau and Power BI with dummy data, as access to company data was restricted during the internship.',
  ]

  return (
    <section className="experience-section" id="experience">
      <ImageModal
        image={selectedImage?.src}
        alt={selectedImage?.alt}
        onClose={closeImageModal}
      />
      <div className="section-heading">
        <span className="section-label">
          MY PROFESSIONAL JOURNEY
        </span>

        <h2>
          Work Experience<span>.</span>
        </h2>

        <p>
          Professional experience, responsibilities, and software
          development projects.
        </p>
      </div>

      <div className="experience-container">
        <article className="experience-card">
          {/* EXPERIENCE HEADER */}
          <div className="experience-header">
            <div className="experience-company">
              <span className="experience-label">
                INTERNSHIP
              </span>

              <h3>PT Suzuki Finance Indonesia</h3>

              <p className="experience-position">
                Software Developer Intern
              </p>
            </div>

            <div className="experience-period">
              <span>Aug – Dec 2025</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <div className="experience-divider" />

          {/* RESPONSIBILITIES */}
          <div className="experience-description">
            <h4>Key Responsibilities</h4>

            <ul>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="experience-projects">
            <h4>Featured Projects</h4>

            {projects.map((project) => (
              <div
                className="experience-project"
                key={project.number}
              >
                <div className="experience-project-number">
                  {project.number}
                </div>

                {/* PROJECT DOCUMENTATION */}
                {project.image && (
                  <button
                    type="button"
                    className="experience-project-image"
                    onClick={() =>
                      setSelectedImage({
                        src: project.image,
                        alt: `${project.title} documentation`,
                      })
                    }
                    aria-label={`Enlarge ${project.title} documentation`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} documentation`}
                      loading="lazy"
                    />
                  </button>
                )}

                {/* PROJECT DETAILS */}
                <div className="experience-project-content">
                  <h5>{project.title}</h5>

                  <p>{project.description}</p>

                  <div className="experience-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience