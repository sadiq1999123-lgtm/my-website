import './FAQ.css'

const questions = [
  {
    id: 'price',
    question: 'Qiymət necə müəyyənləşir?',
    answer:
      'Qiymət xidmətin növünə, işin həcminə, texniki tələblərə və təhvil müddətinə görə hesablanır. Ehtiyaclarını dəqiqləşdirdikdən sonra görüləcək işlər və onların dəyəri üzrə təklif hazırlanır.',
  },
  {
    id: 'start',
    question: 'İşə başlamaq üçün nə göndərməliyəm?',
    answer:
      'Biznesin haqqında qısa məlumat, istədiyin xidmət və çatmaq istədiyin məqsəd kifayətdir. Mövcud loqo, sayt, sosial media hesabları və bəyəndiyin nümunələr varsa, onları da paylaşa bilərsən. Sonrakı mərhələdə lazım olan materialları birlikdə dəqiqləşdiririk.',
  },
  {
    id: 'time',
    question: 'Layihə nə qədər vaxt aparır?',
    answer:
      'Müddət layihənin həcminə, materialların hazır olmasına və təsdiq mərhələlərinə bağlıdır. İşə başlamazdan əvvəl mərhələlər və təhvil tarixləri razılaşdırılır. Aylıq xidmətlər üçün ayrıca iş və paylaşım planı hazırlanır.',
  },
  {
    id: 'single',
    question: 'Tək bir xidmət sifariş etmək mümkündür?',
    answer:
      'Bəli. Yalnız loqo, çəkiliş, reklam kampaniyası, veb-sayt və ya başqa bir xidmət üçün müraciət edə bilərsən. Bir neçə xidmət lazım olduqda onları məqsədinə uyğun vahid iş planında birləşdiririk.',
  },
  {
    id: 'budget',
    question: 'Reklam büdcəsi xidmət haqqına daxildirmi?',
    answer:
      'Instagram, Facebook və Google kimi platformalara ödənilən reklam büdcəsi xidmət haqqından ayrıdır. Kampaniyanın idarə edilməsi üçün xidmət haqqı və platformada xərclənəcək məbləğ əvvəlcədən ayrıca razılaşdırılır.',
  },
  {
    id: 'changes',
    question: 'Hazır işə dəyişiklik necə edilir?',
    answer:
      'Düzəliş mərhələləri və onların həcmi işə başlamazdan əvvəl razılaşdırılır. Rəylərini bir yerdə toplamaq prosesi asanlaşdırır. İlkin tapşırıqdan kənar yeni istəklər olduqda əlavə vaxt və xərc ayrıca dəqiqləşdirilir.',
  },
]

function FAQ() {
  return (
    <section
      className="rm-faq"
      id="faq"
      aria-labelledby="rm-faq-title"
    >
      <div className="rm-faq__inner">
        <div className="rm-faq__intro">
          <p className="rm-faq__label">BAŞLAMAZDAN ƏVVƏL</p>

          <h2 id="rm-faq-title">
            Sualın var?
            <br />
            <span>Cavablandıraq.</span>
          </h2>

          <p className="rm-faq__description">
            Əməkdaşlıq haqqında ən çox verilən sualları bir yerə
            topladıq.
          </p>

          <a className="rm-faq__contact" href="#contact">
            Başqa sualın var? Bizə yaz
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="rm-faq__list">
          {questions.map((item, index) => (
            <details className="rm-faq__item" key={item.id}>
              <summary className="rm-faq__question">
                <span className="rm-faq__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{item.question}</span>

                <span className="rm-faq__toggle" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </summary>

              <div className="rm-faq__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ