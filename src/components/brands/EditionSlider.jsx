import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

// AMG "Edition 55" yubiley karuseli — tünd fon kartlar: şəkil + ad + uzun mətn.
// Bir anda desktop 3, planşet 2, mobil 1 kart. React state, kitabxanasız.
function getPerView(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function EditionSlider({ eyebrow, title, text, items }) {
  const { lang } = useLanguage();
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 3
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setPerView(getPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = items.length;
  const maxIndex = Math.max(0, total - perView);
  useEffect(() => setIndex((p) => Math.min(p, maxIndex)), [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const pageCount = maxIndex + 1;

  return (
    <section className="bg-mb-black py-16 text-white sm:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="text-sm uppercase tracking-widest text-white/60">{eyebrow}</p>}
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">{title}</h2>
          {text && <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{text}</p>}
        </div>

        <div className="relative">
          <div className="-mx-3 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-mb"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                  <div className="flex h-full flex-col">
                    <div className="overflow-hidden rounded-lg bg-black/50">
                      <div className="flex aspect-[4/3] items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                        />
                      </div>
                    </div>
                    <h3 className="mt-5 text-base font-semibold">{item.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {item.text[lang] ?? item.text.en}
                    </p>
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
            className="absolute -left-2 top-[22%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-md backdrop-blur transition-all duration-300 ease-mb hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => setIndex((p) => Math.min(maxIndex, p + 1))}
            disabled={!canNext}
            aria-label="Növbəti"
            className="absolute -right-2 top-[22%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-md backdrop-blur transition-all duration-300 ease-mb hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
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
                    dot === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70',
                  ].join(' ')}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
