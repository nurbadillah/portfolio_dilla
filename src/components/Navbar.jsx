
function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-links">
        <a href="#home">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#publications">Publications</a>
        <a href="#organization">Organization</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Connect <span aria-hidden="true">↗</span>
      </a>

    </nav>
  )
}

export default Navbar
