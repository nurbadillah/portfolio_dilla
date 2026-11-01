import './App.css'

import Navbar from './components/Navbar'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Organization from './sections/Organization'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <Navbar />

        <div className="hero-content">
          <div className="hero-text">
            <div className="availability">
              <span className="status-dot"></span>
              SOFTWARE ENGINEERING TECHNOLOGY FRESH GRADUATE
            </div>

            <p className="greeting">Hello, I'm</p>

            <h1>
              Nurbadillah<span className="name-accent"></span>
            </h1>

            <h2>
              <span>Software Engineer</span>
            </h2>

            <p className="hero-description">
              I am a Software Engineering Technology graduate from
              IPB University with a GPA of 3.63/4.00 (Cum Laude)
              and a BNSP-certified Software Engineer. My core strengths
              lie in software development, particularly mobile application
              development, backend integration, and database management.
            </p>
            <p className="hero-description">
              I also have experience in data analysis and visualization
              using Python, pandas, Tableau, Power BI, and Microsoft Excel,
              alongside foundational skills in web development, SQL,
              and UI/UX design using Figma.
            </p>

          </div>

          {/* PROFILE CARD */}
          <div className="hero-visual">
            <div className="decorative-circle circle-one"></div>
            <div className="decorative-circle circle-two"></div>

            <div className="profile-card">
              <div className="profile-card-top">
                <span className="profile-label">MY PROFILE</span>
                <span className="profile-icon">✳</span>
              </div>

              <img
                className="profile-avatar"
                src="/profile.png"
                alt="Nurbadillah"
                style={{ objectFit: 'cover' }}
              />

              <h3>Nurbadillah</h3>

              <p>Software Engineer</p>

              <div className="profile-divider"></div>

              <div className="profile-tags">
                <span>Flutter</span>
                <span>.NET</span>
                <span>SQL Server</span>
                <span>Python</span>
              </div>

              <div className="profile-card-footer">
                <span>IPB University 2026</span>
                <span>✦</span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span>✦</span>
              Software Developer
            </div>

            <div className="floating-badge badge-bottom">
              <span>↗</span>
              Always Learning
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN INDONESIA</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
          <span>SOFTWARE · DATA · DESIGN</span>
        </div>
      </section>

      <div className="section-heading">
          <span className="section-label">GET TO KNOW</span>

          <h2>
            More About <span>Me</span>
          </h2>

          <p>
            A brief introduction to my background and technical expertise.
          </p>
        </div>

      {/* TECHNICAL SKILLS */}
      <Skills />

      {/* EDUCATION AND ACADEMIC PROJECT */}
      <Education />

      {/* WORK EXPERIENCE AND INTERNSHIP PROJECTS */}
      <Experience />

      {/* CERTIFICATIONS AND TRAINING */}
      <Certifications />

      {/* ORGANIZATION AND PUBLICATIONS */}
      <Organization />

      {/* CONTACT AND FOOTER */}
      <Contact />
    </>
  )
}

export default App