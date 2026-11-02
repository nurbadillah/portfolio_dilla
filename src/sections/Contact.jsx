
const contactInfo = {
  email: 'nurbadillah.dilla@gmail.com',
  phone: '+6281313454115',
  instagram: 'https://instagram.com/dillaanrr_',
  linkedin: 'https://www.linkedin.com/in/nurbadillah/',
  cvLink: 'https://bit.ly/CV-nurbadillah', 
}

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.5-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"
        stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.8-1.55 3 0 3.57 1.97 3.57 4.53v5.27Z"/>
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </svg>
  ),
}

function Contact() {
  const emailLink = `mailto:${contactInfo.email}`
  const whatsappLink = `https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`

  const methods = [
    {
      label: 'Email',
      icon: 'mail',
      href: emailLink,
      external: false,
    },
    {
      label: 'WhatsApp',
      icon: 'phone',
      href: whatsappLink,
      external: true,
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: contactInfo.linkedin,
      external: true,
    },
    {
      label: 'Instagram',
      icon: 'instagram',
      href: contactInfo.instagram,
      external: true,
    },
  ]

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-wrapper">
          <div className="contact-availability">
            <span className="contact-status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <h2 className="contact-title">
            Let's <span>Connect.</span>
          </h2>

          <p className="contact-subtitle">
            I'm open to professional opportunities and
            collaborations in software development, mobile
            application development, and data analytics.
            Feel free to reach out and connect with me!
          </p>

          <div className="contact-actions">
            <a
              href={emailLink}
              className="contact-primary-btn"
            >
              {icons.mail}
              Get in Touch
              <span aria-hidden="true">↗</span>
            </a>

            {contactInfo.cvLink ? (
              <a
                href={contactInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-secondary-btn"
              >
                {icons.document}
                View My CV
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="contact-secondary-btn contact-unavailable">
                {icons.document}
                View My CV
                <span>↗</span>
              </span>
            )}
          </div>

          <div className="contact-divider">
            <span>OTHER WAYS TO CONNECT</span>
          </div>

          <div className="contact-methods">
            {methods.map((method) => (
              method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  className="contact-method"
                  target={method.external ? '_blank' : undefined}
                  rel={method.external
                    ? 'noopener noreferrer'
                    : undefined}
                  aria-label={`Contact via ${method.label}`}
                >
                  <span className="contact-method-icon">
                    {icons[method.icon]}
                  </span>

                  <span className="contact-method-label">
                    {method.label}
                  </span>

                  <span className="contact-method-arrow">
                    ↗
                  </span>
                </a>
              ) : (
                <span
                  key={method.label}
                  className="contact-method contact-unavailable"
                  title={`${method.label} link coming soon`}
                >
                  <span className="contact-method-icon">
                    {icons[method.icon]}
                  </span>
                  <span className="contact-method-label">
                    {method.label}
                  </span>
                </span>
              )
            ))}
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            D<span>.</span>
          </a>

          <p>Designed & developed with care.</p>

          <span>
            © {new Date().getFullYear()} Nurbadillah
          </span>
        </div>
      </footer>

      <style>{`
        /* CONTACT */

        .contact-section {
          padding: 85px 24px 60px;
          background: #f7f9ff;
        }

        .contact-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 70px 40px 62px;
          background: #fff;
          border: 1px solid #e5eafa;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 15px 45px rgba(38,55,105,.035);
          overflow: hidden;
        }

        .contact-wrapper::before,
        .contact-wrapper::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: #eef0ff;
          pointer-events: none;
        }

        .contact-wrapper::before {
          width: 210px;
          height: 210px;
          top: -155px;
          right: -100px;
        }

        .contact-wrapper::after {
          width: 160px;
          height: 160px;
          bottom: -125px;
          left: -100px;
        }

        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 16px;
          border: 1px solid #dfe7fa;
          border-radius: 50px;
          background: #f6f8ff;
          color: #6579c7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .contact-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38b88a;
          box-shadow: 0 0 0 4px rgba(56,184,138,.12);
        }

        .contact-title {
          margin: 24px 0 15px;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(36px, 5vw, 54px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.2;
          color: #23345d;
        }

        .contact-title span {
          color: #667eea;
        }

        .contact-subtitle {
          max-width: 660px;
          margin: 0 auto;
          color: #7987a9;
          font-size: 15px;
          line-height: 1.85;
        }

        /* MAIN BUTTONS */

        .contact-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .contact-primary-btn,
        .contact-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 21px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all .2s ease;
        }

        .contact-primary-btn svg,
        .contact-secondary-btn svg {
          width: 17px;
          height: 17px;
        }

        .contact-primary-btn {
          background: #667eea;
          border: 1px solid #667eea;
          color: #fff;
        }

        .contact-primary-btn:hover {
          background: #526bd4;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102,126,234,.2);
        }

        .contact-secondary-btn {
          background: #fff;
          border: 1px solid #dbe3fb;
          color: #596db4;
        }

        .contact-secondary-btn:hover {
          background: #f1f4ff;
          transform: translateY(-2px);
        }

        /* DIVIDER */

        .contact-divider {
          display: flex;
          align-items: center;
          gap: 17px;
          max-width: 480px;
          margin: 38px auto 23px;
          color: #9aa6c5;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .contact-divider::before,
        .contact-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5eafa;
        }

        /* SMALL CONTACT BUTTONS */

        .contact-methods {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .contact-method {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid #e3e9fa;
          border-radius: 10px;
          background: #f9faff;
          color: #596b9a;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background .2s ease,
            border-color .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .contact-method:hover {
          border-color: #c4d0ff;
          background: #eef1ff;
          color: #526bd4;
          transform: translateY(-3px);
        }

        .contact-method-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          color: #667eea;
        }

        .contact-method-icon svg {
          width: 17px;
          height: 17px;
        }

        .contact-method-label {
          font-size: 12px;
          font-weight: 700;
        }

        .contact-method-arrow {
          font-size: 11px;
          opacity: .65;
        }

        .contact-unavailable {
          opacity: .5;
          cursor: not-allowed;
        }

        /* FOOTER */

        .portfolio-footer {
          padding: 0 24px 35px;
          background: #f7f9ff;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1368px;
          margin: 0 auto;
          padding-top: 28px;
          border-top: 1px solid #e2e8f5;
        }

        .footer-logo {
          font-family: 'Manrope', sans-serif;
          font-size: 21px;
          font-weight: 800;
          color: #23345d;
          text-decoration: none;
        }

        .footer-logo span {
          color: #667eea;
        }

        .footer-content p,
        .footer-content > span {
          margin: 0;
          color: #8996b3;
          font-size: 12px;
        }

        /* ACCESSIBILITY */

        .contact-section a:focus-visible,
        .portfolio-footer a:focus-visible {
          outline: 3px solid #667eea;
          outline-offset: 3px;
        }

        /* RESPONSIVE */

        @media (max-width: 700px) {
          .contact-section {
            padding: 60px 16px 40px;
          }

          .contact-wrapper {
            padding: 50px 20px;
            border-radius: 22px;
          }

          .contact-title {
            font-size: 38px;
          }

          .contact-subtitle {
            font-size: 13px;
          }

          .contact-actions {
            gap: 10px;
          }

          .contact-primary-btn,
          .contact-secondary-btn {
            padding: 12px 15px;
            font-size: 12px;
          }

          .contact-methods {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
          }

          .contact-method {
            min-width: 0;
            padding: 12px 9px;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .portfolio-footer {
            padding: 0 16px 30px;
          }
        }

        @media (max-width: 380px) {
          .contact-actions {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-primary-btn,
          .contact-secondary-btn,
          .contact-method {
            transition: none;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
