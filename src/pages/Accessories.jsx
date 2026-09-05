import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { accessoryCategories } from '../data/accessories.js';
import Button from '../components/ui/Button.jsx';
import { ArrowRight, ChevronLeft, ChevronRight } from '../components/icons/index.jsx';

// "Xidmətlər → Aksesuarlar" səhifəsi (/xidmetler/aksesuarlar).
// Bölmələr: Hero → Təhlükəsizlik/Rahatlıq → Stil → Uşaq oturacağı → Kateqoriyalar.
// (Şəkildəki "Alış-veriş alətləri" bloku ana səhifədə artıq var — təkrarlanmır.)
export default function Accessories() {
  const { t, lang } = useLanguage();
  const a = t.accessories;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/accessories/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {/* Soldan tündləşən örtük (mətnin oxunması üçün) */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {a.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {a.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {a.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* ============ FEATURE: Təhlükəsizlik və Rahatlıq (şəkil sağda) ============ */}
      <FeatureBlock
        eyebrow={a.safety.eyebrow}
        title={a.safety.title}
        text={a.safety.text}
        image="/images/accessories/safety.avif"
      />

      {/* ============ FEATURE: Stil ilə uyğunluq (şəkil solda) ============ */}
      <FeatureBlock
        eyebrow={a.style.eyebrow}
        title={a.style.title}
        text={a.style.text}
        image="/images/accessories/style.avif"
        reverse
      />

      {/* ============ Uşaq oturacağı (şəkil sağda, boz fon) ============ */}
      <section className="bg-mb-silver/50 py-16 sm:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl text-mb-ink sm:text-3xl">{a.childSeat.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-mb-grey sm:text-base">
              {a.childSeat.text}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="flex aspect-[4/3] items-center justify-center">
              <img
                src="/images/accessories/child-seat.avif"
                alt={a.childSeat.title}
                loading="lazy"
                className="h-full w-full object-contain"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Kateqoriyalar (karusel) ============ */}
      <CategorySlider
        eyebrow={a.categories.eyebrow}
        title={a.categories.title}
        items={accessoryCategories}
        lang={lang}
      />
    </div>
  );
}

// Böyük şəkil + eyebrow + başlıq + mətn (Aksesuarlar səhifəsinə xas).
function FeatureBlock({ eyebrow, title, text, image, reverse = false }) {
  return (
    <section className="container-site py-16 sm:py-20">
      <div
        className={[
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse ? 'lg:[&>*:first-child]:order-2' : '',
        ].join(' ')}
      >
        <div className="overflow-hidden rounded-lg bg-mb-silver">
          <div className="flex aspect-[16/10] items-center justify-center">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
            />
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-mb-grey">{eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-mb-grey sm:text-base">{text}</p>
        </div>
      </div>
    </section>
  );
}

// Kateqoriya kartları karuseli — tünd kart + üstündə ad (şəkildəki kimi).
function getPerView(width) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

function CategorySlider({ eyebrow, title, items, lang }) {
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 4
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setPerView(getPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = items.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const pageCount = maxIndex + 1;

  return (
    <section className="container-site py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-mb-grey">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{title}</h2>
      </div>

      <div className="relative">
        <div className="-mx-3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-mb"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                <Link
                  to="/elaqe"
                  className="group relative flex aspect-square items-end overflow-hidden rounded-lg bg-mb-ink"
                >
                  <img
                    src={item.image}
                    alt={item.name[lang] ?? item.name.en}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 ease-mb group-hover:scale-105"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  <h3 className="relative flex w-full items-center justify-between gap-2 p-5 text-base font-semibold text-white text-shadow-hero">
                    {item.name[lang] ?? item.name.en}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 ease-mb group-hover:translate-x-1" />
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sol ox */}
        <button
          type="button"
          onClick={() => setIndex((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          aria-label="Əvvəlki"
          className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
        >
          <ChevronLeft />
        </button>

        {/* Sağ ox */}
        <button
          type="button"
          onClick={() => setIndex((p) => Math.min(maxIndex, p + 1))}
          disabled={!canNext}
          aria-label="Növbəti"
          className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
        >
          <ChevronRight />
        </button>

        {/* Nöqtələr */}
        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setIndex(dot)}
                aria-label={`${dot + 1}-ci mövqe`}
                className={[
                  'h-2 rounded-full transition-all duration-300 ease-mb',
                  dot === index ? 'w-6 bg-mb-ink' : 'w-2 bg-mb-border hover:bg-mb-grey',
                ].join(' ')}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
