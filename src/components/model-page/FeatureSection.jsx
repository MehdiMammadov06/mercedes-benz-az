// Eksteryer VƏ İnteryer bölmələri üçün universal komponent.
// Böyük şəkil + eyebrow + başlıq + izah mətni.
//
// `data`  = detail.exterior / detail.interior. Şəkil (image) + istəyə bağlı
//           modelə XAS başlıq/mətn saxlayır: title/text hər dil üçün ({ az, en }).
// `copy`  = t.modelPage.exterior / .interior. eyebrow (sabit etiket) + default
//           title/text (data-da yoxdursa istifadə olunur).
// `lang`  = cari dil ('az' | 'en') — data-dakı çoxdilli mətndən seçmək üçün.
// `reverse` = mətn/şəkil yerini dəyişir (İnteryer üçün alternativ düzülüş).
export default function FeatureSection({ data, copy, lang, reverse = false }) {
  if (!data?.image) return null;

  // Modelə xas mətn varsa onu götür (çoxdilli), yoxdursa default copy-dən
  const pick = (value, fallback) => {
    if (value == null) return fallback;
    return typeof value === 'object' ? (value[lang] ?? fallback) : value;
  };
  const title = pick(data.title, copy.title);
  const text = pick(data.text, copy.text);

  return (
    <section className="container-site py-16 sm:py-20">
      <div
        className={[
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse ? 'lg:[&>*:first-child]:order-2' : '',
        ].join(' ')}
      >
        {/* Şəkil */}
        <div className="overflow-hidden rounded-lg bg-mb-silver">
          <div className="flex aspect-[16/10] items-center justify-center">
            <img
              src={data.image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
            />
          </div>
        </div>

        {/* Mətn */}
        <div>
          <p className="text-sm uppercase tracking-widest text-mb-grey">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-mb-grey sm:text-base">{text}</p>
        </div>
      </div>
    </section>
  );
}
