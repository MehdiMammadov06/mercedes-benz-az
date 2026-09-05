import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

// "Avadanlıq" bölməsi: şəkil + başlıq + izah olan kartlar KARUSEL kimi.
// Repodakı Spotlight/ModelSlider ilə eyni məntiq (React state + transform,
// kənar kitabxana yoxdur). Bir anda görünən kart: mobil 1, planşet 2, desktop 4.
function getPerView(width) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

export default function EquipmentSlider({ items, copy }) {
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 4
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setPerView(getPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = items?.length ?? 0;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const pageCount = maxIndex + 1;

  if (total === 0) return null;

  return (
    <section className="container-site py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-mb-grey">{copy.eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{copy.title}</h2>
      </div>

      <div className="relative">
        <div className="-mx-3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-mb"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {items.map((item) => {
              const text = copy.items?.[item.id] ?? {};
              return (
                <div
                  key={item.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-mb-silver">
                      <img
                        src={item.image}
                        alt={text.title ?? ''}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                      />
                    </div>
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-mb-ink">
                      {text.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mb-grey">{text.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sol ox */}
        <button
          type="button"
          onClick={() => setIndex((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          aria-label="Əvvəlki"
          className="absolute -left-2 top-[28%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
        >
          <ChevronLeft />
        </button>

        {/* Sağ ox */}
        <button
          type="button"
          onClick={() => setIndex((p) => Math.min(maxIndex, p + 1))}
          disabled={!canNext}
          aria-label="Növbəti"
          className="absolute -right-2 top-[28%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
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
