import { useEffect, useRef, useState } from 'react';
import ModelCard from './ModelCard.jsx';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

// Modelləri KARUSEL (slider) kimi göstərir — orijinal saytdakı kimi.
// Sağ/sol ox düymələri ilə sürüşür, aşağıda nöqtələr səhifəni göstərir.
// Kənar kitabxana YOXDUR — hər şey React state + CSS transform ilə edilir.
//
// Bir anda neçə kart görünür (ekran eninə görə):
//   mobil (<640px)      -> 1
//   planşet (640–1024)  -> 2
//   masaüstü (≥1024px)  -> 3
function getPerView(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function ModelSlider({ models }) {
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' ? getPerView(window.innerWidth) : 3
  );
  const [index, setIndex] = useState(0); // hazırda soldan görünən ilk kartın nömrəsi
  const trackRef = useRef(null);

  // Ekran ölçüsü dəyişəndə "bir anda neçə kart" yenilənir
  useEffect(() => {
    function onResize() {
      setPerView(getPerView(window.innerWidth));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Kateqoriya dəyişəndə (models yenilənəndə) əvvələ qayıt
  useEffect(() => {
    setIndex(0);
  }, [models]);

  const total = models.length;
  // Maksimum sürüşmə həddi — sonuncu kartlar da tam görünsün deyə
  const maxIndex = Math.max(0, total - perView);

  // index həddi keçməsin (ekran böyüyəndə lazım olur)
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const goPrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

  // Neçə "səhifə" var (nöqtələr üçün)
  const pageCount = maxIndex + 1;

  if (total === 0) return null;

  return (
    <div className="relative">
      {/* --- Sürüşən zolaq --- */}
      {/* -mx-3: kartların px-3 kənar boşluğunu kompensasiya edir ki,
          ilk/son kart container ilə düzgün hizalansın */}
      <div className="-mx-3 overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-mb"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {models.map((model) => (
            <div
              key={model.id}
              className="shrink-0 px-3"
              style={{ width: `${100 / perView}%` }}
            >
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </div>

      {/* --- Sol ox --- */}
      <button
        type="button"
        onClick={goPrev}
        disabled={!canPrev}
        aria-label="Əvvəlki"
        className="absolute -left-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-left-4"
      >
        <ChevronLeft />
      </button>

      {/* --- Sağ ox --- */}
      <button
        type="button"
        onClick={goNext}
        disabled={!canNext}
        aria-label="Növbəti"
        className="absolute -right-2 top-[38%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mb-border bg-white text-mb-ink shadow-md transition-all duration-300 ease-mb hover:bg-mb-silver disabled:cursor-not-allowed disabled:opacity-30 sm:-right-4"
      >
        <ChevronRight />
      </button>

      {/* --- Nöqtələr --- */}
      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
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
  );
}
