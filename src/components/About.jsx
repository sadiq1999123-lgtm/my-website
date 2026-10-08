import { useEffect, useRef } from 'react'
import './About.css'

const steps = [
  {
    number: '01',
    title: 'Tanıyaq.',
    text: 'Biznesini, auditoriyanı və məqsədini öyrənirik. Ehtiyacları, işin həcmini və prioritetləri birlikdə müəyyənləşdiririk.',
    className: 'about-step-yellow',
  },
  {
    number: '02',
    title: 'Planlayaq.',
    text: 'Uyğun xidmətləri seçir, kreativ istiqaməti hazırlayırıq. Görüləcək işləri, vaxtı və büdcəni səninlə razılaşdırırıq.',
    className: 'about-step-orange',
  },
  {
    number: '03',
    title: 'Yaradaq.',
    text: 'Razılaşdırılmış planı həyata keçirir, rəylərinə əsasən dəqiqləşdiririk. Hazır işi təhvil verir, davamlı xidmətlərdə nəticələri izləyirik.',
    className: 'about-step-lime',
  },
]

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (
      !section ||
      motion.matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          section.classList.add('about-entered')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="about-inner">
        <div className="about-main">
          <div className="about-copy">
            <p className="about-eyebrow">
              <span aria-hidden="true" />
              BİZ RICH MEDIA-YIQ
            </p>

            <h2 id="about-title">
              Adi fikirdən
              <br />
              <span>kənara çıx.</span>
            </h2>

            <p className="about-description">
  RICH MEDIA bizneslərin rəqəmsal görünüşünü və müştəri ilə
  ünsiyyətini qurmaq üçün çalışır. Sosial media, reklam,
  foto-video, brend dizaynı, veb-sayt və chatbot həllərini
  məqsədinə uyğun birləşdiririk. İşə səni dinləməklə başlayır,
  ideyanı konkret plana və istifadəyə hazır nəticəyə çeviririk.
</p>

            <a className="about-link" href="#services">
              Nə yaradırıq?
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />

            <div className="about-core">
              <span className="about-core-label">KREATİV DÜŞÜNCƏ</span>
              <strong>
                RICH
                <br />
                MEDIA
              </strong>
              <span className="about-core-arrow">↗</span>
            </div>

            <span className="about-sticker about-sticker-strategy">
              STRATEGİYA
            </span>

            <span className="about-sticker about-sticker-design">
              DİZAYN
            </span>

            <span className="about-sticker about-sticker-content">
              KONTENT
            </span>

            <span className="about-spark">✳</span>
          </div>
        </div>

        <div className="about-process-heading">
          <span>FİKİRDƏN REALLIĞA</span>
          <span aria-hidden="true">↓</span>
        </div>

        <ol className="about-steps">
          {steps.map((step) => (
            <li
              className={`about-step ${step.className}`}
              key={step.number}
            >
              <div className="about-step-top">
                <span>{step.number}</span>
                <span aria-hidden="true">↗</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default About