import './Careers.css'

// Real vakansiyalar gələndə bu siyahıya əlavə ediləcək.
const vacancies = []

function Careers() {
  return (
    <section
      className="rm-careers"
      id="careers"
      aria-labelledby="rm-careers-title"
    >
      <div className="rm-careers__inner">
        <div className="rm-careers__intro">
          <p className="rm-careers__label">RICH MEDIA İLƏ KARYERA</p>

          <h2 id="rm-careers-title">
            Yaxşı ideyalar
            <br />
            <span>birlikdə yaranır.</span>
          </h2>

          <p className="rm-careers__description">
            Dizayn, kontent, reklam və texnologiyaya marağın var?
            Komandamıza qoşulmaq üçün elanları bu bölmədən izləyə bilərsən.
          </p>

          <div className="rm-careers__tags" aria-label="İş istiqamətləri">
            <span>Dizayn</span>
            <span>Kontent</span>
            <span>Marketinq</span>
            <span>Texnologiya</span>
          </div>
        </div>

        <div className="rm-careers__positions">
          <div className="rm-careers__positions-heading">
            <h3>Açıq vakansiyalar</h3>
            <span className="rm-careers__count">
              {vacancies.length}
            </span>
          </div>

          {vacancies.length === 0 ? (
            <div className="rm-careers__empty">
              <span className="rm-careers__symbol" aria-hidden="true">
                ✳
              </span>

              <h4>Hazırda açıq vakansiya yoxdur.</h4>

              <p>
                Yeni imkanlar yarandıqda vəzifə haqqında məlumat,
                tələblər və müraciət qaydası burada paylaşılacaq.
              </p>
            </div>
          ) : (
            <div className="rm-careers__list">
              {vacancies.map((vacancy) => (
                <article className="rm-careers__job" key={vacancy.id}>
                  <h4>{vacancy.title}</h4>

                  <p className="rm-careers__job-meta">
                    {[vacancy.location, vacancy.workMode]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>

                  <p>{vacancy.description}</p>

                  {vacancy.requirements?.length > 0 && (
                    <>
                      <h5>Tələblər</h5>
                      <ul>
                        {vacancy.requirements.map((requirement) => (
                          <li key={requirement}>{requirement}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {vacancy.applyEmail && (
                    <a
                      className="rm-careers__apply"
                      href={`mailto:${vacancy.applyEmail}?subject=${encodeURIComponent(
                        `${vacancy.title} — iş müraciəti`
                      )}`}
                    >
                      CV ilə müraciət et
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Careers