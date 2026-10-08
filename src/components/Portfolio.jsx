import './Portfolio.css'

const concepts = [
  {
    id: 'brand',
    category: 'BREND KİMLİYİ',
    title: 'Bir ideya, bütöv bir kimlik.',
    description:
      'Rəng, tipoqrafiya və qrafik elementlərin vahid vizual üslubda birləşməsi.',
    tags: ['Vizual kimlik', 'Qrafik dizayn'],
  },
  {
    id: 'social',
    category: 'SOSİAL MEDİA',
    title: 'Lentdə fərq yarat.',
    description:
      'Bir-birini tamamlayan postlar və diqqəti əsas mesaja yönəldən kontent dizaynı.',
    tags: ['Post dizaynı', 'Kontent'],
  },
  {
    id: 'campaign',
    category: 'REKLAM KONSEPTİ',
    title: 'Mesajını böyüt.',
    description:
      'Güclü başlıq və aydın vizual ilə qurulan reklam kampaniyası nümunəsi.',
    tags: ['Kreativ ideya', 'Reklam dizaynı'],
  },
]

function ConceptArtwork({ type }) {
  if (type === 'brand') {
    return (
      <div className="concept-art concept-art-brand" aria-hidden="true">
        <div className="concept-brand-sheet">
          <span>VİZUAL KİMLİK / 01</span>
          <strong>
            forma
            <span>studio.</span>
          </strong>
          <div className="concept-swatches">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="concept-brand-card">
          <span>forma</span>
          <strong>f.</strong>
        </div>
      </div>
    )
  }

  if (type === 'social') {
    return (
      <div className="concept-art concept-art-social" aria-hidden="true">
        <div className="concept-social-post concept-social-back">
          <span>YENİ BAXIŞ</span>
          <strong>✳</strong>
          <span>FƏRQLİ DÜŞÜN.</span>
        </div>

        <div className="concept-social-post concept-social-front">
          <span>GÜNÜN İDEYASI</span>
          <strong>
            Öz
            <br />
            rəngini
            <br />
            göstər.
          </strong>
          <span>● ● ●</span>
        </div>
      </div>
    )
  }

  return (
    <div className="concept-art concept-art-campaign" aria-hidden="true">
      <div className="concept-campaign-top">
        <span>KREATİV KAMPANİYA</span>
        <span>03 / RICH</span>
      </div>

      <strong className="concept-campaign-title">
        SƏS
        <br />
        SAL.
      </strong>

      <span className="concept-campaign-arrow">↗</span>
      <span className="concept-campaign-bottom">
        BİR MESAJ. GÜCLÜ TƏSİR.
      </span>
    </div>
  )
}

function Portfolio() {
  return (
    <section
      className="portfolio"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio-inner">
        <div className="portfolio-heading">
          <div>
            <p className="portfolio-label">İDEYALARIN GÖRÜNƏN HALI</p>
            <h2 id="portfolio-title">
              Kreativ
              <br />
              konseptlər.
            </h2>
          </div>

          <p className="portfolio-intro">
            Dizayn yanaşmamızı göstərən nümunələr.
            Buradakı konseptlər real müştəri sifarişləri deyil.
          </p>
        </div>

        <div className="portfolio-grid">
          {concepts.map((concept) => (
            <article className="concept-card" key={concept.id}>
              <ConceptArtwork type={concept.id} />

              <div className="concept-info">
                <p className="concept-category">{concept.category}</p>
                <h3>{concept.title}</h3>
                <p className="concept-description">
                  {concept.description}
                </p>

                <ul className="concept-tags" aria-label="İstiqamətlər">
                  {concept.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <p className="concept-disclaimer">
                  Nümunə layihə · Real müştəri işi deyil
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio