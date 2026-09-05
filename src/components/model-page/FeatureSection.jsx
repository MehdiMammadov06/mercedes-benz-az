// Eksteryer VƏ İnteryer bölmələri üçün universal komponent.
// Hər ikisi eyni quruluşa malikdir: böyük şəkil + eyebrow + başlıq + izah mətni.
//
// `data` = detail.exterior və ya detail.interior (image saxlayır)
// `copy` = t.modelPage.exterior və ya t.modelPage.interior (eyebrow/title/text)
// `reverse` = mətn və şəkilin yerini dəyişir (İnteryer üçün alternativ düzülüş)
export default function FeatureSection({ data, copy, reverse = false }) {
  if (!data?.image) return null;

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
              alt={copy.title}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
            />
          </div>
        </div>

        {/* Mətn */}
        <div>
          <p className="text-sm uppercase tracking-widest text-mb-grey">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{copy.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-mb-grey sm:text-base">{copy.text}</p>
        </div>
      </div>
    </section>
  );
}
