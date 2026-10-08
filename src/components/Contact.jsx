import { useEffect, useRef } from 'react'
import './Contact.css'

const whatsappMessage = encodeURIComponent(
  'Salam! RICH MEDIA xidmətləri haqqında məlumat almaq istəyirəm.'
)

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = [...section.querySelectorAll('[data-rm-reveal]')]

    if (motion.matches || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('rm-contact__is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08 }
    )

    elements.forEach((element) => {
      element.classList.add('rm-contact__reveal-ready')
      observer.observe(element)
    })

    function revealOnFocus(event) {
      const element = event.target.closest('[data-rm-reveal]')
      if (!element) return

      element.classList.add('rm-contact__is-visible')
      observer.unobserve(element)
    }

    function handleMotionChange(event) {
      if (!event.matches) return

      observer.disconnect()
      elements.forEach((element) => {
        element.classList.add('rm-contact__is-visible')
      })
    }

    section.addEventListener('focusin', revealOnFocus)
    motion.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      section.removeEventListener('focusin', revealOnFocus)
      motion.removeEventListener('change', handleMotionChange)

      elements.forEach((element) => {
        element.classList.remove(
          'rm-contact__reveal-ready',
          'rm-contact__is-visible'
        )
      })
    }
  }, [])

  return (
    <section
      className="rm-contact"
      id="contact"
      ref={sectionRef}
      aria-labelledby="rm-contact-title"
    >
      <div className="rm-contact__container">
        <div className="rm-contact__layout">
          <div className="rm-contact__intro" data-rm-reveal="">
            <p className="rm-contact__eyebrow">
              <span className="rm-contact__dot" aria-hidden="true" />
              NÖVBƏTİ ADDIM SƏNDƏDİR
            </p>

            <h2 id="rm-contact-title">
              Bir ideyan var?
              <span>
                Birlikdə
                <br />
                yaradaq
                <span className="rm-contact__period">.</span>
              </span>
            </h2>

            <p className="rm-contact__description">
              Brendindən, planından və ya ağlındakı ilk fikirdən danış.
              Söhbətə bir salamla başlayaq.
            </p>

            <a
              className="rm-contact__cta"
              href={`https://wa.me/994516974815?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp-da danışaq</span>
              <span className="rm-contact__cta-icon" aria-hidden="true">
                ↗
              </span>
            </a>

            <p className="rm-contact__note">
              İlk addım üçün uzun təqdimata ehtiyac yoxdur.
            </p>
          </div>

          <div className="rm-contact__panel" data-rm-reveal="">
            <div className="rm-contact__panel-top">
              <span>YAXŞI İŞ SÖHBƏTDƏN BAŞLAYIR</span>
              <span className="rm-contact__spark" aria-hidden="true">
                ✳
              </span>
            </div>

            <p className="rm-contact__panel-title">
              Gəl, tanış olaq.
            </p>

            <div className="rm-contact__channels">
              <a
                className="rm-contact__channel"
                href="tel:+994516974815"
              >
                <span
                  className="rm-contact__channel-icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-.3.8-1.1 1.2-2 1C10 20 4 14 3 6c-.2-.9.2-1.7 1-2l3-1Z" />
                  </svg>
                </span>

                <span className="rm-contact__channel-copy">
                  <span className="rm-contact__label">ZƏNG ET</span>
                  <span className="rm-contact__value">
                    +994 51 697 48 15
                  </span>
                </span>

                <span className="rm-contact__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="rm-contact__channel"
                href="mailto:sadiq.tariverdiyev.tech@gmail.com"
              >
                <span
                  className="rm-contact__channel-icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>

                <span className="rm-contact__channel-copy">
                  <span className="rm-contact__label">E-POÇT YAZ</span>
                  <span className="rm-contact__value rm-contact__email">
                    sadiq.tariverdiyev.tech@gmail.com
                  </span>
                </span>

                <span className="rm-contact__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="rm-contact__channel"
                href="https://www.instagram.com/tsa.diq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="rm-contact__channel-icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>

                <span className="rm-contact__channel-copy">
                  <span className="rm-contact__label">INSTAGRAM</span>
                  <span className="rm-contact__value">@tsa.diq</span>
                </span>

                <span className="rm-contact__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div className="rm-contact__panel-bottom">
              <span>STRATEGİYA</span>
              <span>DİZAYN</span>
              <span>KONTENT</span>
            </div>
          </div>
        </div>

        <div className="rm-contact__bottom">
          <a
            className="rm-contact__brand"
            href="#home"
            aria-label="RICH MEDIA — ana səhifə"
          >
            RICH<span>MEDIA</span>
          </a>

          <p>© {new Date().getFullYear()} RICH MEDIA</p>

          <a className="rm-contact__top" href="#home">
            Yuxarı qayıt
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact