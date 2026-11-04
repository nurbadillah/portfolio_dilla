
function Publications() {
  const publications = [
    {
      title:
        'Pengaruh Kreativitas dan Inovasi dalam Desain Grafis sebagai Pendukung Branding UMKM',
      journal:
        'Jurnal Akuntansi, Manajemen, Bisnis dan Teknologi (AMBITEK)',
      year: '2025',
      role: 'Author',
      index: 'SINTA 5',
      link:
        'https://jurnalambitek.stie-mahaputra-riau.ac.id/ojs/index.php/ambitek/article/view/271',
    },
    {
      title:
        'Comparative Study: The Effectiveness of Learning Japanese Using Duolingo and YouTube',
      journal:
        'Mars: Jurnal Teknik Mesin, Industri, Elektro dan Ilmu Komputer',
      year: '2025',
      role: 'Author',
      index: 'GARUDA',
      link:
        'https://journal.arteii.or.id/index.php/Mars/article/view/772',
    },
    {
      title:
        'Design and Implementation of an Online Food Ordering System Using the Agile Scrum',
      journal:
        'Journal of Informatics and Communication Technology (JICT)',
      year: '2025',
      role: 'Co-author',
      index: 'SINTA 4',
      link:
        'https://ejournal.akademitelkom.ac.id/j_ict/index.php/j_ict/article/view/407',
    },
    {
      title:
        'Pengenalan Pola Ekspresi Wajah untuk Pengolahan Citra Menggunakan Metode Convolutional Neural Network',
      journal:
        'JATISI (Jurnal Teknik Informatika dan Sistem Informasi)',
      year: '2024',
      role: 'Co-author',
      index: 'SINTA 5',
      link:
        'https://jurnal.mdp.ac.id/index.php/jatisi/article/view/9585',
    },
    {
      title:
        'Analisis Decision Table Testing untuk Pengujian Blackbox Website Pusat Studi Bencana IPB',
      journal:
        'JATISI (Jurnal Teknik Informatika dan Sistem Informasi)',
      year: '2024',
      role: 'Co-author',
      index: 'SINTA 5',
      link:
        'https://jurnal.mdp.ac.id/index.php/jatisi/article/view/9618',
    },
  ]

  return (
    <section
      className="publications-section"
      id="publications"
    >
      {/* SECTION HEADING */}

      <div className="section-heading">
        <span className="section-label">
          RESEARCH & ACADEMIC WORK
        </span>

        <h2>
          Publications<span>.</span>
        </h2>

        <p>
          Academic research and scientific contributions
          through published journal articles.
        </p>
      </div>

      {/* PUBLICATION CARDS */}

      <div className="certifications-grid publications-grid">
        {publications.map((item) => (
          <article
            className="certification-card publication-item"
            key={item.link}
          >
            {/* CARD TOP */}

            <div className="publication-top">
              <span className="publication-category">
                JOURNAL ARTICLE
              </span>

              <span className="publication-index">
                {item.index}
              </span>
            </div>

            {/* YEAR */}

            <span className="publication-year">
              {item.year}
            </span>

            {/* TITLE */}

            <h3>{item.title}</h3>

            {/* JOURNAL */}

            <p className="publication-journal">
              {item.journal}
            </p>

            {/* AUTHOR ROLE */}

            <span className="publication-role">
              {item.role}
            </span>

            {/* EXTERNAL LINK */}

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-view-link"
            >
              View Publication
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Publications
