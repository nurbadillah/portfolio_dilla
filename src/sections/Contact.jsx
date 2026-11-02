
const contactInfo = {
  email: 'nurbadillah.dilla@gmail.com',
  phone: '+6281313454115',
  instagramUsername: '@dillaanrr_',
  instagram: 'https://www.instagram.com/dillaanrr_/',

  linkedinUsername: 'Nurbadillah',
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

  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.93-5.35 11.94-11.93a11.85 11.85 0 0 0-3.48-8.41ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  ),

  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),

  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.8-1.55 3 0 3.57 1.97 3.57 4.53v5.27Z" />
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

  const contacts = [
    {
      platform: 'Email',
      value: contactInfo.email,
      icon: 'mail',
      href: emailLink,
      external: false,
    },
    {
      platform: 'WhatsApp',
      value: contactInfo.phone.replace(
        /^(\+62)(\d{3})(\d{4})(\d+)$/,
        '$1 $2-$3-$4'
      ),
      icon: 'whatsapp',
      href: whatsappLink,
      external: true,
    },
    {
      platform: 'LinkedIn',
      value: contactInfo.linkedinUsername || 'View Profile',
      icon: 'linkedin',
      href: contactInfo.linkedin,
      external: true,
    },
    {
      platform: 'Instagram',
      value: contactInfo.instagramUsername,
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
            I'm open to professional opportunities and collaborations
            in software development and data analytics. 
            Feel free to reach out and connect with me!
          </p>

          {/* MAIN ACTION: CV */}

          <div className="contact-actions">
            {contactInfo.cvLink ? (
              <a
                href={contactInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cv-btn"
              >
                {icons.document}
                <span>View My CV</span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span
                className="contact-cv-btn contact-unavailable"
                title="CV link coming soon"
              >
                {icons.document}
                <span>View My CV</span>
                <span aria-hidden="true">↗</span>
              </span>
            )}
          </div>

          <div className="contact-divider">
            <span>OTHER WAYS TO CONNECT</span>
          </div>

          {/* CONTACT CARDS */}

          <div className="contact-methods">
            {contacts.map((item) => {
              const content = (
                <>
                  <span className="contact-method-icon">
                    {icons[item.icon]}
                  </span>

                  <span className="contact-method-info">
                    <span className="contact-method-platform">
                      {item.platform}
                    </span>
                    <span className="contact-method-value">
                      {item.value}
                    </span>
                  </span>

                  {item.href && (
                    <span className="contact-method-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </>
              )

              return item.href ? (
                <a
                  key={item.platform}
                  href={item.href}
                  className="contact-method"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-label={`Open ${item.platform}: ${item.value}`}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.platform}
                  className="contact-method contact-unavailable"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="portfolio-footer">
        <div className="footer-content">
          <span>
            © 2026 Nurbadillah
          </span>
        </div>
      </footer>

      <style>{`
        /* CONTACT SECTION */

        .contact-section {
          padding: 85px 24px 60px;
          background: #f7f9ff;
        }

        .contact-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 65px 40px 60px;
          background: #ffffff;
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

        /* CV BUTTON */

        .contact-actions {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .contact-cv-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 14px 25px;
          border-radius: 12px;
          background: #667eea;
          border: 1px solid #667eea;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all .2s ease;
        }

        .contact-cv-btn svg {
          width: 18px;
          height: 18px;
        }

        a.contact-cv-btn:hover {
          background: #526bd4;
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(102,126,234,.22);
        }

        /* DIVIDER */

        .contact-divider {
          display: flex;
          align-items: center;
          gap: 17px;
          max-width: 480px;
          margin: 38px auto 24px;
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

        /* CONTACT CARDS */

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 820px;
          margin: 0 auto;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
          padding: 14px 17px;
          border: 1px solid #e3e9fa;
          border-radius: 13px;
          background: #f9faff;
          color: #596b9a;
          text-align: left;
          text-decoration: none;
          transition:
            background .2s ease,
            border-color .2s ease,
            color .2s ease,
            transform .2s ease,
            box-shadow .2s ease;
        }

        a.contact-method:hover {
          border-color: #c4d0ff;
          background: #eef1ff;
          color: #526bd4;
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(102,126,234,.08);
        }

        .contact-method-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 37px;
          height: 37px;
          border-radius: 10px;
          background: #eef0ff;
          color: #667eea;
        }

        .contact-method-icon svg {
          width: 19px;
          height: 19px;
        }

        .contact-method-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 0;
        }

        .contact-method-platform {
          color: #8a97b5;
          font-size: 11px;
          font-weight: 600;
        }

        .contact-method-value {
          color: #344b82;
          font-size: 13px;
          font-weight: 700;
          overflow-wrap: anywhere;
        }

        .contact-method-arrow {
          flex-shrink: 0;
          color: #8a97b5;
          font-size: 14px;
        }

        .contact-unavailable {
          opacity: .55;
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
            padding: 48px 20px;
            border-radius: 22px;
          }

          .contact-title {
            font-size: 38px;
          }

          .contact-subtitle {
            font-size: 13px;
          }

          .contact-methods {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .contact-method {
            padding: 13px 14px;
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

        @media (prefers-reduced-motion: reduce) {
          .contact-cv-btn,
          .contact-method {
            transition: none;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
