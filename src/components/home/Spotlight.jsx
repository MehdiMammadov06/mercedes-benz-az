import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { spotlightItems } from '../../data/spotlight.js';
import SpotlightCard from './SpotlightCard.jsx';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

// Ana səhifədəki "In the Spotlight" bölməsi — kampaniya kartları slideri.
// Sağ/sol ox + nöqtələr ilə sürüşür (JS/React state, kənar kitabxana yoxdur).
//
// Bir anda neçə kart görünür (ekran eninə görə):
//   mobil (<640)   -> 1
//   planşet        -> 2
//   masaüstü ≥1024 -> 3
function getPerView(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function Spotlight() {
  const { t } = useLanguage();
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 3
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onResize() {
      setPerView(getPerView(window.innerWidth));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = spotlightItems.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));
  const pageCount = maxIndex + 1;

  return (
    <section className="container-site py-16 sm:py-20 lg:py-24">
      <div className="mb-10 sm:mb-12">
        <h2 className="font-display text-3xl text-mb-ink sm:text-4xl">{t.spotlight.title}</h2>
        <p className="mt-2 text-sm text-mb-grey sm:text-base">{t.spotlight.subtitle}</p>
      </div>

      <div className="relative">
        {/* Sürüşən zolaq */}
        <div className="-mx-3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-mb"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {spotlightItems.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <SpotlightCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Sol ox */}
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Əvvəlki"
          className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
        >
          <ChevronLeft />
        </button>

        {/* Sağ ox */}
        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Növbəti"
          className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
        >
          <ChevronRight />
        </button>

        {/* Nöqtələr */}
        {pageCount > 1 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
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
