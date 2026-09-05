import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { formatPrice } from '../../utils/format.js';
import { ChevronLeft, ChevronRight } from '../icons/index.jsx';

// Stock detal səhifəsinin şəkil qalereyası — orijinaldakı kimi:
//   böyük şəkil + sol/sağ ox + altında thumbnail cərgəsi
//   sol yuxarı: "Special Offer" badge, sağ yuxarı: "Save AZN ..." badge
//
// Şəkillər modelId əsasında konvensiya ilə qurulur:
//   /images/stock/<modelId>/<view>.avif   (front, side, rear, interior, dashboard, seats)
// Şəkil yoxdursa boz fon + görüntü adı qalır (onError), sayt sınmır.
export default function StockGallery({ vehicle, views }) {
  const { t, lang } = useLanguage();
  const c = t.stock.card;
  const [active, setActive] = useState(0);

  const images = views.map((view) => ({
    view,
    src: `/images/stock/${vehicle.modelId}/${view}.avif`,
    label: t.stock.views?.[view] ?? view,
  }));

  const total = images.length;
  const savedAmount = vehicle.oldPrice && vehicle.oldPrice > vehicle.price
    ? vehicle.oldPrice - vehicle.price
    : 0;

  const go = (dir) => setActive((i) => (i + dir + total) % total);

  return (
    <div>
      {/* Böyük şəkil */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mb-silver">
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium uppercase tracking-wider text-mb-grey">
          {vehicle.model} — {images[active].label}
        </span>

        <img
          src={images[active].src}
          alt={`${vehicle.model} ${images[active].label}`}
          className="relative h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
        />

        {/* Special Offer badge — sol yuxarı */}
        {vehicle.specialOffer && (
          <span className="absolute left-3 top-3 rounded bg-mb-blue px-3 py-1 text-xs font-medium text-white">
            {c.specialOffer}
          </span>
        )}

        {/* Save badge — sağ yuxarı */}
        {savedAmount > 0 && (
          <span className="absolute right-3 top-3 rounded bg-mb-ink/85 px-3 py-1 text-xs font-medium text-white">
            {c.save} {formatPrice(savedAmount, lang)}
          </span>
        )}

        {/* Oxlar */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Əvvəlki"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-mb-ink shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Növbəti"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-mb-ink shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail cərgəsi */}
      {total > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.view}
              type="button"
              onClick={() => setActive(i)}
              aria-label={img.label}
              className={[
                'relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-md bg-mb-silver transition-all',
                i === active ? 'ring-2 ring-mb-blue' : 'opacity-70 hover:opacity-100',
              ].join(' ')}
            >
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[9px] uppercase text-mb-grey">
                {img.label}
              </span>
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="relative h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
