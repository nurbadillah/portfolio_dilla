
import { useEffect, useState } from 'react'
import './Education.css'

const academicProjects = [
  {
    number: '01',
    category: 'AUGMENTED REALITY',
    title: 'MalinKundang AR',
    description:
      'Developed an interactive augmented reality application based on the Indonesian folklore Malin Kundang, featuring 3D visualization, image-based tracking, and interactive learning experiences.',
    tags: ['Unity', 'Vuforia', 'C#', 'Augmented Reality'],
    images: [
      'malinkundang-app.png',
      'malinkundang-marker.png',
      'malinkundang-demo.png',
    ],
  },
  {
    number: '02',
    category: 'AUGMENTED REALITY',
    title: 'Agro Aqua Education',
    description:
      'Developed an interactive augmented reality educational application focused on fish processing, featuring learning materials and 3D visualization of fish processing equipment.',
    tags: ['Unity', 'Vuforia', 'C#', 'Augmented Reality'],
    images: ['agro.png', 'agro2.png',],
  },
  {
    number: '03',
    category: 'MOBILE DEVELOPMENT',
    title: 'Maizedotco',
    description:
      'Built a mobile application for symptom-based corn disease diagnosis, including symptom selection and diagnostic result screens.',
    tags: ['Java', 'Android'],
    images: ['maizedotco.png'],
  },
  {
    number: '04',
    category: 'SYSTEM ANALYSIS',
    title: 'Food4U',
    description:
      'Analyzed requirements and modeled the system for an online food ordering website as a System Analyst.',
    tags: ['Requirements Analysis', 'System Modeling'],
    images: ['food4u.png'],
  },
  {
    number: '05',
    category: 'TECHNICAL DOCUMENTATION',
    title: 'Dentalink',
    description:
      'Developed a comprehensive user guide for Dentalink, a dental clinic management website previously built as a group project, documenting its features, functionalities, and step-by-step usage instructions.',
    tags: ['User Manual', 'Technical Documentation'],
    images: ['dentalink.jpg'],
    externalLink:
      'https://drive.google.com/file/d/1MRVrovG9LTrxzpoi6qDTJBavmZMsnmmf/view?usp=sharing',
  },
  {
    number: '06',
    category: 'UI/UX DESIGN',
    title: 'CozyFly',
    description:
      'Designed user flows, wireframes, and prototypes for a flight booking application using Figma.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
    images: ['cozyfly.png'],
  },
]

const imageBase = '/images/education/'


function ProjectCover({ project, onOpen }) {
  const [missing, setMissing] = useState(false)

  const cover = project.images[0]

  if (!cover || missing) {
    return (
      <div className="education-documentation-placeholder">
        <span aria-hidden="true">▧</span>
        <small>Documentation coming soon</small>
      </div>
    )
  }

  const coverContent = (
    <>
      <img
        src={`${imageBase}${cover}`}
        alt={`${project.title} documentation preview`}
        loading="lazy"
        onError={() => setMissing(true)}
      />

      <span className="edu-cover-overlay">
      </span>

      {!project.externalLink && project.images.length > 1 && (
        <span className="edu-cover-count">
          {project.images.length} Images
        </span>
      )}
    </>
  )

  if (project.externalLink) {
    return (
      <a
        className="edu-cover"
        href={project.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} user guide`}
      >
        {coverContent}
      </a>
    )
  }

  return (
    <button
      type="button"
      className="edu-cover"
      onClick={() => onOpen(project)}
      aria-label={`View ${project.title} images`}
    >
      {coverContent}
    </button>
  )
}


function ProjectGallery({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const [failedImages, setFailedImages] = useState([])

  const images = project.images
  const total = images.length

  const nextSlide = () => {
    setIndex((current) => (current + 1) % total)
  }

  const prevSlide = () => {
    setIndex((current) => (current - 1 + total) % total)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight' && total > 1) {
        setIndex((current) => (current + 1) % total)
      }

      if (event.key === 'ArrowLeft' && total > 1) {
        setIndex((current) => (current - 1 + total) % total)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, total])

  const currentImage = images[index]
  const imageSrc = `${imageBase}${currentImage}`

  return (
    <div
      className="edu-gallery-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="edu-gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} documentation gallery`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="edu-gallery-header">
          <div>
            <span className="edu-gallery-category">
              PROJECT DOCUMENTATION
            </span>
            <h3>{project.title}</h3>
          </div>

          <button
            type="button"
            className="edu-gallery-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>

        <div className="edu-gallery-stage">
          {failedImages.includes(currentImage) ? (
            <div className="edu-gallery-missing">
              Image not available yet
            </div>
          ) : (
            <img
              key={imageSrc}
              src={imageSrc}
              alt={`${project.title} documentation ${index + 1}`}
              onError={() =>
                setFailedImages((previous) =>
                  previous.includes(currentImage)
                    ? previous
                    : [...previous, currentImage]
                )
              }
            />
          )}

          {total > 1 && (
            <>
              <button
                type="button"
                className="edu-gallery-arrow edu-gallery-prev"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                className="edu-gallery-arrow edu-gallery-next"
                onClick={nextSlide}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="edu-gallery-footer">
          <span className="edu-gallery-counter">
            {index + 1} / {total}
          </span>

          {total > 1 && (
            <div className="edu-gallery-dots">
              {images.map((image, dotIndex) => (
                <button
                  type="button"
                  key={image}
                  className={`edu-gallery-dot ${
                    index === dotIndex ? 'active' : ''
                  }`}
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Go to image ${dotIndex + 1}`}
                  aria-current={
                    index === dotIndex ? 'true' : undefined
                  }
                />
              ))}
            </div>
          )}

          <span className="edu-gallery-hint">
            {total > 1 ? 'Use arrows to navigate' : 'Project image'}
          </span>
        </div>
      </div>
    </div>
  )
}

function Education() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="education-section" id="education">
      <div className="section-heading">
        <span className="section-label">
          MY ACADEMIC BACKGROUND
        </span>

        <h2>
          Education<span>.</span>
        </h2>

        <p>
          Building a strong foundation through software
          engineering studies and hands-on academic projects.
        </p>
      </div>

      <div className="education-container education-redesign">
        <article className="education-card education-profile">
          <div className="education-profile-main">
            <div className="education-profile-info">
              <span className="education-label">
                UNDERGRADUATE EDUCATION
              </span>

              <h3>IPB University</h3>

              <p className="education-degree">
                Bachelor of Applied Science in Software
                Engineering Technology (D4)
              </p>

              <div className="education-meta">
                <span>📍 Bogor, Indonesia</span>
                <span>◷ 2022 – 2026</span>
              </div>
            </div>

            <div
              className="education-gpa"
              aria-label="GPA 3.63 out of 4.00"
            >
              <span className="education-gpa-caption">
                CUMULATIVE GPA
              </span>

              <div className="education-gpa-score">
                <strong>3.63</strong>
                <span>/ 4.00</span>
              </div>

              <span className="education-gpa-honor">
                Cum Laude
              </span>
            </div>
          </div>
        </article>

        <div className="education-projects-heading">
          <div>
            <span className="education-label">
              LEARNING BY BUILDING
            </span>

            <h3>
              Selected Academic Projects<span>.</span>
            </h3>

            <p>
              Projects across development, analysis,
              documentation, and design.
            </p>
          </div>

          <span className="education-project-count">
            06 PROJECTS
          </span>
        </div>

        <div className="education-project-grid">
          {academicProjects.map((project) => (
            <article
              className="education-project-card"
              key={project.number}
            >
              <div className="education-project-top">
                <span className="education-project-category">
                  {project.category}
                </span>

                <span className="education-project-number">
                  {project.number}
                </span>
              </div>

              <ProjectCover
                project={project}
                onOpen={setActiveProject}
              />

              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <div className="education-technologies">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectGallery
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style>{`
        /* SINGLE PROJECT COVER */

        .edu-cover {
          position: relative;
          display: block;
          width: 100%;
          height: 205px;
          margin: 18px 0 2px;
          padding: 0;
          overflow: hidden;
          border: none;
          border-radius: 14px;
          background: #f1f3fc;
          cursor: pointer;
        }

        .edu-cover img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .edu-cover:hover img {
          transform: scale(1.05);
        }

        .edu-cover-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 14px;
          background: linear-gradient(
            to top,
            rgba(15, 25, 55, 0.4),
            transparent 55%
          );
        }

        .edu-cover-button {
          padding: 10px 18px;
          border-radius: 10px;
          background: rgba(30, 45, 85, 0.92);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          transition: background 0.2s ease;
        }

        .edu-cover:hover .edu-cover-button {
          background: #6276c4;
        }

        .edu-cover-count {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.94);
          color: #23345d;
          font-size: 11px;
          font-weight: 700;
        }

        /* GALLERY MODAL */

        .edu-gallery-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(12, 21, 48, 0.88);
          backdrop-filter: blur(7px);
        }

        .edu-gallery-modal {
          width: min(100%, 1000px);
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
        }

        .edu-gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px;
        }

        .edu-gallery-category {
          color: #6678d6;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .edu-gallery-header h3 {
          margin: 5px 0 0;
          color: #23345d;
          font-size: 19px;
          font-weight: 800;
        }

        .edu-gallery-close {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: none;
          border-radius: 50%;
          background: #f0f2fc;
          color: #23345d;
          font-size: 26px;
          cursor: pointer;
        }

        .edu-gallery-stage {
          position: relative;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f4f6fc;
        }

        .edu-gallery-stage img {
          display: block;
          max-width: 100%;
          max-height: 68vh;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .edu-gallery-missing {
          padding: 80px 20px;
          color: #7987a9;
          text-align: center;
        }

        /* NAVIGATION ARROWS */

        .edu-gallery-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(35, 52, 93, 0.85);
          color: white;
          font-size: 33px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .edu-gallery-arrow:hover {
          background: #6276c4;
        }

        .edu-gallery-prev {
          left: 15px;
        }

        .edu-gallery-next {
          right: 15px;
        }

        /* GALLERY FOOTER */

        .edu-gallery-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 16px 24px;
        }

        .edu-gallery-counter {
          min-width: 45px;
          color: #23345d;
          font-size: 13px;
          font-weight: 800;
        }

        .edu-gallery-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .edu-gallery-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: #cdd4ed;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .edu-gallery-dot.active {
          width: 23px;
          border-radius: 8px;
          background: #6678d6;
        }

        .edu-gallery-hint {
          color: #8995b5;
          font-size: 11px;
        }

        @media (max-width: 600px) {
          .edu-cover {
            height: 185px;
          }

          .edu-gallery-overlay {
            padding: 10px;
          }

          .edu-gallery-modal {
            border-radius: 15px;
          }

          .edu-gallery-header {
            padding: 15px;
          }

          .edu-gallery-header h3 {
            font-size: 16px;
          }

          .edu-gallery-arrow {
            width: 34px;
            height: 34px;
            font-size: 27px;
          }

          .edu-gallery-prev {
            left: 7px;
          }

          .edu-gallery-next {
            right: 7px;
          }

          .edu-gallery-footer {
            padding: 13px 15px;
          }

          .edu-gallery-hint {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .edu-cover img,
          .edu-cover-button,
          .edu-gallery-arrow,
          .edu-gallery-dot {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Education
