import { useState } from 'react';

// MERCEDES-AMG bölməsi: eyebrow + böyük tünd şəkil + üzərində AMG variant
// seçicisi (A 35 / A 45 S toggle). Orijinal saytdakı AMG bloku kimi.
//
// Şəkil yoxdursa onError ilə gizlənir (fon tünd qalır) — sayt sınmır.
export default function AmgSection({ amg, copy }) {
  const variants = amg?.variants ?? [];
  const [active, setActive] = useState(variants[0]?.id ?? null);

  if (!amg?.image && variants.length === 0) return null;

  return (
    <section className="container-site py-16 sm:py-20">
      <p className="mb-8 text-sm uppercase tracking-widest text-mb-grey">{copy.eyebrow}</p>

      <div className="relative overflow-hidden rounded-lg bg-mb-black">
        <div className="flex aspect-[16/9] items-center justify-center">
          <img
            src={amg.image}
            alt="Mercedes-AMG"
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
          />
        </div>

        {/* Variant toggle — şəklin altında ortada */}
        {variants.length > 0 && (
          <div className="absolute bottom-5 left-1/2 w-[92%] max-w-2xl -translate-x-1/2">
            <div className="flex flex-col gap-1 rounded-full bg-white/95 p-1 shadow-md backdrop-blur sm:flex-row">
              {variants.map((v) => {
                const isActive = v.id === active;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(v.id)}
                    className={[
                      'flex-1 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-300 ease-mb',
                      isActive ? 'bg-mb-black text-white' : 'text-mb-grey hover:text-mb-ink',
                    ].join(' ')}
                  >
                    {v.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
