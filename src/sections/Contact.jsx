function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <span className="section-label">LET'S WORK TOGETHER</span>

        <h2>
          Have a project in <span>mind?</span>
        </h2>

        <p>
          I'm open to opportunities in software development,
          web development, and data analytics. Feel free to
          reach out and connect with me!
        </p>

        <a
          href="mailto:nurbadillah.dilla@gmail.com"
          className="contact-button"
        >
          Get in Touch ↗
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/nurbadillah/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://instagram.com/dillaanrr_"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </div>

      <footer className="portfolio-footer">
        <a href="#home" className="logo">
          D<span>.</span>
        </a>

        <p>Designed & developed with care.</p>

        <span>© {new Date().getFullYear()} Nurbadillah</span>
      </footer>
    </section>
  )
}

export default Contact