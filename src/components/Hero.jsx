import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-label">
            <span aria-hidden="true" />
            REKLAM · MEDİA · MARKETİNQ
          </p>

          <h1 id="hero-title">
            Sadəcə
            <br />
            görünmə.
            <br />
            <span className="hero-highlight">İz burax.</span>
          </h1>

          <p className="hero-description">
            Brendinin ideyasını dizayn, kontent və texnologiya ilə
            həyata keçiririk. Sosial media və reklamdan foto-video,
            veb-sayt və chatbot həllərinə qədər — biznesinə uyğun
            rəqəmsal ünsiyyət qururuq.
          </p>

          <a href="#contact" className="hero-button">
            Layihəni danışaq
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-top">
            <span>RICH MEDIA</span>
            <span>İDEYA HƏRƏKƏTƏ KEÇİR ↗</span>
          </div>

          <div className="hero-poster hero-poster-main">
            <span className="hero-poster-label">
              KREATİV DÜŞÜNCƏ
            </span>

            <div className="hero-poster-title">
              FƏRQLİ
              <br />
              DÜŞÜN.
            </div>

            <div className="hero-orbit">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-poster-footer">
              <span>İDEYADAN TƏSİRƏ.</span>
              <span>↗</span>
            </div>
          </div>

          <div className="hero-art-row">
            <div className="hero-poster hero-poster-purple">
              <span className="hero-poster-label">
                BRENDİN SƏSİ
              </span>
              <div className="hero-spark">✳</div>
              <strong>SƏSİN GƏLSİN.</strong>
            </div>

            <div className="hero-poster hero-poster-orange">
              <span className="hero-poster-label">
                YENİ BAXIŞ
              </span>
              <div className="hero-arrow">↗</div>
              <strong>İrəli bax.</strong>
            </div>
          </div>

          <p className="hero-art-caption">
            STRATEGİYA + DİZAYN + TEXNOLOGİYA
          </p>
        </div>

        <div className="hero-bottom">
          <span>
            Bir ideyadan başlayaq. Birlikdə həyata keçirək.
          </span>

          <a href="#services">
            XİDMƏTLƏRİ KƏŞF ET
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero