import { useState } from 'react';

// Model səhifəsinin yuxarı hissəsi: böyük avtomobil şəkli + model adı (arxa fonda)
// + seçilə bilən rəng nöqtələri. Orijinal saytdakı "A-Class" hero ekranı kimi.
//
// Şəkil (detail.hero.image) hələ atılmayıbsa, boz fon və model adı görünür —
// sayt sınmır (ModelCard-dakı onError pattern).
export default function ModelHero({ model, colorLabel }) {
  const hero = model.detail?.hero ?? {};
  const colors = hero.colors ?? [];
  const [activeColor, setActiveColor] = useState(0);

  return (
    <section className="relative overflow-hidden bg-mb-silver">
      {/* Nəhəng, açıq rəngli model adı — fonda */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[22vw] leading-none text-white/70"
      >
        {model.name.split(' ')[0]}
      </span>

      <div className="container-site relative flex min-h-[62vh] flex-col items-center justify-center py-16 sm:min-h-[70vh]">
        {/* Avtomobil şəkli */}
        <div className="flex w-full max-w-4xl items-center justify-center">
          <img
            src={hero.image ?? model.image}
            alt={model.name}
            className="h-auto w-full object-contain drop-shadow-2xl"
            onError={(event) => {
              // detail hero şəkli yoxdursa, adi model şəklinə qayıt; o da yoxdursa gizlət
              const img = event.currentTarget;
              if (img.src.endsWith(model.image)) {
                img.style.visibility = 'hidden';
              } else {
                img.src = model.image;
              }
            }}
          />
        </div>

        {/* Rəng adı + nöqtələr */}
        {colors.length > 0 && (
          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-mb-ink">
              {colors[activeColor]?.name}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {colors.map((color, i) => {
                const isActive = i === activeColor;
                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setActiveColor(i)}
                    title={color.name}
                    aria-label={`${colorLabel}: ${color.name}`}
                    aria-pressed={isActive}
                    className={[
                      'h-6 w-6 rounded-full border transition-all duration-300 ease-mb',
                      isActive
                        ? 'ring-2 ring-mb-ink ring-offset-2 ring-offset-mb-silver'
                        : 'border-mb-border hover:scale-110',
                    ].join(' ')}
                    style={{ backgroundColor: color.hex }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
