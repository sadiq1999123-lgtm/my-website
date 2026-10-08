import { useState } from 'react'
import './Services.css'

const services = [
  {
    id: 'smm',
    number: '01',
    title: 'SMM və kontent',
    color: '#ffd43b',
    description:
      'Sosial şəbəkələrdə brendinin səsini formalaşdırırıq. Məqsədinə və auditoriyana uyğun kontent hazırlayır, hesablarının ardıcıl və vahid üslubda idarə edilməsinə kömək edirik.',
    items: [
      'Sosial media hesablarının təhlili və kontent strategiyası',
      'Aylıq paylaşım planı və mətnlərin hazırlanması',
      'Post, karusel, Story və Reels kontenti',
      'Paylaşımların planlaşdırılması və yerləşdirilməsi',
      'Razılaşdırılmış qaydada şərh və mesajların cavablandırılması',
      'Nəticələrin təhlili və aylıq hesabat',
    ],
    result:
      'Brendinə uyğun kontent planı, hazır paylaşım materialları və görülən işlər üzrə hesabat.',
  },
  {
    id: 'ads',
    number: '02',
    title: 'Rəqəmsal reklam',
    color: '#c3b2ff',
    description:
      'Məhsul və xidmətlərini uyğun auditoriyaya çatdırmaq üçün Instagram, Facebook və Google reklamları qururuq. Kampaniyaları müraciət, satış və ya tanınma məqsədinə uyğun hazırlayırıq.',
    items: [
      'Reklam məqsədlərinin və hədəf auditoriyanın müəyyənləşdirilməsi',
      'Meta Ads və Google Ads kampaniyalarının qurulması',
      'Reklam mətnləri və vizuallarının hazırlanması',
      'Saytın imkanlarına uyğun nəticə izləməsinin qurulması',
      'Fərqli reklam variantlarının sınağı və optimallaşdırılması',
      'Büdcə istifadəsi və nəticələr üzrə hesabat',
    ],
    result:
      'Qurulmuş reklam kampaniyaları, sınaqdan keçirilən materiallar və ölçülə bilən nəticələr üzrə hesabat.',
    note:
      'Platformalara ödənilən reklam büdcəsi xidmət haqqından ayrıca razılaşdırılır.',
  },
  {
    id: 'production',
    number: '03',
    title: 'Foto və video',
    color: '#ff713b',
    description:
      'Məhsulunu, məkanını və brendinin hekayəsini vizual olaraq təqdim edirik. Çəkiliş ideyasından montaja qədər materialları istifadə olunacağı platformaya uyğun hazırlayırıq.',
    items: [
      'Çəkiliş konsepti, ssenari və planın hazırlanması',
      'Məhsul, məkan və komanda fotoçəkilişi',
      'Sosial şəbəkələr üçün Reels və qısa videolar',
      'Reklam və təqdimat videolarının çəkilməsi',
      'Montaj, rəng korreksiyası və səsin işlənməsi',
      'Subtitrlər və müxtəlif ekran formatlarına uyğunlaşdırma',
    ],
    result:
      'Razılaşdırılmış sayda işlənmiş fotolar və paylaşım üçün hazır video materiallar.',
  },
  {
    id: 'branding',
    number: '04',
    title: 'Brend və dizayn',
    color: '#bce5aa',
    description:
      'Brendinin xarakterini görünən edirik. Loqodan sosial media materiallarına qədər bir-birini tamamlayan, tanınan və istifadəsi rahat vizual üslub hazırlayırıq.',
    items: [
      'Brendin vizual istiqamətinin müəyyənləşdirilməsi',
      'Loqo və onun müxtəlif istifadə variantları',
      'Rəng palitrası və şrift seçimi',
      'Sosial media üçün dizayn şablonları',
      'Vizit kartı, broşür, menyu və qablaşdırma dizaynı',
      'Vizual üslub üzrə istifadə bələdçisi',
    ],
    result:
      'Seçilmiş xidmət həcminə uyğun dizayn faylları, çap və rəqəmsal istifadə üçün hazır versiyalar.',
  },
  {
    id: 'web',
    number: '05',
    title: 'Veb-sayt hazırlanması',
    color: '#9fd8ff',
    description:
      'Biznesini aydın təqdim edən və ziyarətçiyə rahat istifadə imkanı verən saytlar hazırlayırıq. Dizaynı desktop, tablet və mobil ekranlara uyğunlaşdırırıq.',
    items: [
      'Şirkət saytı, açılış səhifəsi və onlayn mağaza',
      'Səhifə strukturu və istifadəçi axınının hazırlanması',
      'Brendinə uyğun interfeys dizaynı',
      'Mobil, tablet və desktop üçün uyğunlaşdırma',
      'Əlaqə formaları və razılaşdırılmış inteqrasiyalar',
      'Əsas texniki SEO, sürət yoxlaması və yayıma hazırlıq',
    ],
    result:
      'Razılaşdırılmış funksiyaları olan işlək sayt və onun idarə edilməsi üçün təhvil məlumatları.',
    note:
      'Domen, hostinq və ödənişli servis xərcləri layihənin tələblərinə görə ayrıca dəqiqləşdirilir.',
  },
  {
    id: 'automation',
    number: '06',
    title: 'Chatbot və avtomatlaşdırma',
    color: '#f5b5d5',
    description:
      'Təkrarlanan sualları və gündəlik müraciət axınını avtomatlaşdırırıq. Müştərinin məlumat almasını, uyğun xidmət seçməsini və komandanla əlaqə qurmasını asanlaşdırırıq.',
    items: [
      'Instagram və WhatsApp üçün uyğun chatbot ssenariləri',
      'Tez-tez verilən suallara avtomatik cavablar',
      'Müştəri sorğularının və əlaqə məlumatlarının toplanması',
      'Müraciətlərin uyğun əməkdaşa yönləndirilməsi',
      'CRM, cədvəl və bildiriş servisləri ilə inteqrasiya',
      'Ssenarilərin sınağı və istifadə qaydalarının təhvili',
    ],
    result:
      'Razılaşdırılmış ssenarilər üzrə işləyən avtomatik cavab və müraciət yönləndirmə sistemi.',
    note:
      'İmkanlar platformanın qaydalarından və hesabın uyğunluğundan asılıdır. Ödənişli servis abunələri ayrıca razılaşdırılır.',
  },
]

function Services() {
  const [openId, setOpenId] = useState(null)

  return (
    <section
      className="rm-services"
      id="services"
      aria-labelledby="rm-services-title"
    >
      <div className="rm-services__inner">
        <div className="rm-services__heading">
          <div>
            <p className="rm-services__eyebrow">NƏ YARADIRIQ?</p>

            <h2 id="rm-services-title">
              İdeyadan
              <br />
              <span>tətbiqə qədər.</span>
            </h2>
          </div>

          <p className="rm-services__intro">
            Brendinin ehtiyacına uyğun xidmətləri bir araya gətiririk.
            Kontent, reklam, dizayn və texnologiya — eyni məqsəd üçün.
          </p>
        </div>

        <div className="rm-services__list">
          {services.map((service) => {
            const isOpen = openId === service.id
            const buttonId = `rm-service-button-${service.id}`
            const panelId = `rm-service-panel-${service.id}`

            const message = encodeURIComponent(
              `Salam! RICH MEDIA-nın "${service.title}" xidməti haqqında məlumat və qiymət təklifi almaq istəyirəm.`
            )

            return (
              <article
                key={service.id}
                className={`rm-services__item ${
                  isOpen ? 'rm-services__item--open' : ''
                }`}
                style={{ '--service-color': service.color }}
              >
                <h3 className="rm-services__item-heading">
                  <button
                    type="button"
                    className="rm-services__trigger"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpenId(isOpen ? null : service.id)
                    }}
                  >
                    <span
                      className="rm-services__number"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>

                    <span className="rm-services__title">
                      {service.title}
                    </span>

                    <span
                      className="rm-services__toggle"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>

                <div
                  className="rm-services__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={isOpen ? undefined : ''}
                >
                  <div className="rm-services__panel-clip">
                    <div className="rm-services__content">
                      <div className="rm-services__details">
                        <p className="rm-services__description">
                          {service.description}
                        </p>

                        <p className="rm-services__small-heading">
                          NƏLƏR EDİRİK?
                        </p>

                        <ul className="rm-services__features">
                          {service.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rm-services__deliverable">
                        <span
                          className="rm-services__deliverable-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>

                        <p className="rm-services__small-heading">
                          SƏNƏ NƏ TƏHVİL VERİRİK?
                        </p>

                        <p className="rm-services__result">
                          {service.result}
                        </p>

                        {service.note && (
                          <p className="rm-services__note">
                            {service.note}
                          </p>
                        )}

                        <a
                          className="rm-services__link"
                          href={`https://wa.me/994516974815?text=${message}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? 0 : -1}
                          aria-label={`${service.title} üçün WhatsApp-da təklif al`}
                        >
                          Bu xidmət üçün təklif al
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="rm-services__bottom">
          <p>
            Haradan başlayacağını bilmirsən?
            <span> Məqsədindən danış, uyğun xidmətləri birlikdə seçək.</span>
          </p>

          <a href="#contact">
            Layihəni danışaq <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services