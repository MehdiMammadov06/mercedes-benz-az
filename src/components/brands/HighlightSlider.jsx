import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';

// AMG "Əsas məqamlar" slideri — tünd fon, bir anda 1 slayd:
// solda başlıq+mətn, sağda şəkil. Altda nöqtələr. React state, kitabxanasız.
// `intro` — hər slaydın üstündə sabit qalan eyebrow+başlıq+mətn.
export default function HighlightSlider({ intro, slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index];

  return (
    <section className="bg-mb-ink py-16 text-white sm:py-20">
      <div className="container-site">
        {/* Sabit intro */}
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-white/60">{intro.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">{intro.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{intro.text}</p>
        </div>

        {/* Slayd: mətn solda, şəkil sağda */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="font-display text-xl sm:text-2xl">{slide.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{slide.text}</p>
          </div>
          <div className="overflow-hidden rounded-lg bg-black/40">
            <div className="flex aspect-[16/10] items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
            </div>
          </div>
        </div>

        {/* Nöqtələr */}
        {total > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {slides.map((_, dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setIndex(dot)}
                aria-label={`${dot + 1}-ci slayd`}
                className={[
                  'h-2 rounded-full transition-all duration-300 ease-mb',
                  dot === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70',
                ].join(' ')}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
