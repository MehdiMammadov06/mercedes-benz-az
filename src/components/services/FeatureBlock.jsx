// Xidmət səhifələri (Aksesuarlar, Kolleksiya) üçün universal feature bloku:
// böyük şəkil + (opsional) eyebrow + başlıq + mətn. `reverse` şəkli sağa/sola atır.
export default function FeatureBlock({ eyebrow, title, text, image, reverse = false, contain = false }) {
  return (
    <section className="container-site py-16 sm:py-20">
      <div
        className={[
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse ? 'lg:[&>*:first-child]:order-2' : '',
        ].join(' ')}
      >
        <div className={['overflow-hidden rounded-lg', contain ? 'bg-mb-ink' : 'bg-mb-silver'].join(' ')}>
          <div className="flex aspect-[16/10] items-center justify-center">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className={['h-full w-full', contain ? 'object-contain' : 'object-cover'].join(' ')}
              onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
            />
          </div>
        </div>
        <div>
          {eyebrow && <p className="text-sm uppercase tracking-widest text-mb-grey">{eyebrow}</p>}
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{title}</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-mb-grey sm:text-base">{text}</p>
        </div>
      </div>
    </section>
  );
}
