import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

function getPerView(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function BrandModelSlider({ title, models }) {
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 3
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setPerView(getPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = models.length;
  const maxIndex = Math.max(0, total - perView);
  useEffect(() => setIndex((p) => Math.min(p, maxIndex)), [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const pageCount = maxIndex + 1;

  return (
    <section className="container-site py-16 sm:py-20">
      <h2 className="mb-10 font-display text-2xl text-mb-ink sm:text-3xl">{title}</h2>

      <div className="relative">
        <div className="-mx-3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-mb"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {models.map((model) => (
              <div key={model.id} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                <div className="flex flex-col text-center">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-white">
                    <img
                      src={model.image}
                      alt={model.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-mb-ink">{model.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIndex((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          aria-label="Əvvəlki"
          className="absolute -left-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => setIndex((p) => Math.min(maxIndex, p + 1))}
          disabled={!canNext}
          aria-label="Növbəti"
          className="absolute -right-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
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
