import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { ArrowRight, ChevronLeft, ChevronRight } from '../icons/index.jsx';

// Xidmət səhifələri (Aksesuarlar, Kolleksiya) üçün kateqoriya karuseli.
// Tünd kart + şəkil + üstündə ad (çoxdilli). React state + transform, kitabxanasız.
function getPerView(width) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

export default function CategorySlider({ eyebrow, title, items, to = '/elaqe' }) {
  const { lang } = useLanguage();
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
        {eyebrow && <p className="text-sm uppercase tracking-widest text-mb-grey">{eyebrow}</p>}
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
                  to={to}
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

        <button
          type="button"
          onClick={() => setIndex((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          aria-label="Əvvəlki"
          className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          onClick={() => setIndex((p) => Math.min(maxIndex, p + 1))}
          disabled={!canNext}
          aria-label="Növbəti"
          className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
        >
          <ChevronRight />
        </button>

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
