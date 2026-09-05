import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { formatPrice } from '../../utils/format.js';
import {
  CalendarIcon,
  PaletteIcon,
  GearboxIcon,
  FuelIcon,
  GaugeIcon,
  HeartIcon,
  LocationIcon,
} from '../icons/index.jsx';

// Tək "mövcud avtomobil" kartı — orijinal Stock səhifəsindəki kimi.
//   üst: şəkil + "Qənaət" badge (endirim) + rezerv overlay + favorit ürək
//   alt: model adı, variant, "Xüsusi təklif", spec ikonları (il/rəng/transmissiya/yanacaq),
//        qiymət (endirimli + üstündən xətt çəkilmiş köhnə qiymət), filial
//
// Şəkil yoxdursa (public/images/... hələ atılmayıbsa) boz fon + placeholder qalır.
// Karta klikləmə → model detalı səhifəsinə (növbəti mərhələdə "ayrı pəncərə").
export default function StockCard({ vehicle }) {
  const { t, lang } = useLanguage();
  const c = t.stock.card;
  const [fav, setFav] = useState(false);

  const {
    modelId,
    model,
    variant,
    year,
    colour,
    fuel,
    transmission,
    distance,
    price,
    oldPrice,
    specialOffer,
    reserved,
    branch,
    image,
  } = vehicle;

  const savedAmount = oldPrice && oldPrice > price ? oldPrice - price : 0;
  const colourLabel = t.colours[colour] ?? colour;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-mb-border bg-white transition-shadow duration-300 ease-mb hover:shadow-xl">
      {/* --- Şəkil sahəsi --- */}
      <div className="relative aspect-[16/10] overflow-hidden bg-mb-silver">
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-mb-grey">
          {model}
        </span>

        <Link to={`/modeller/${modelId}`} className="block h-full w-full">
          <img
            src={image}
            alt={`Mercedes-Benz ${model} ${variant}`}
            loading="lazy"
            className="relative h-full w-full object-cover transition-transform duration-500 ease-mb group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.visibility = 'hidden';
            }}
          />
        </Link>

        {/* Qənaət (endirim) badge — sol alt */}
        {savedAmount > 0 && (
          <span className="absolute bottom-0 left-0 bg-mb-ink/85 px-3 py-1 text-xs font-medium text-white">
            {c.save} {formatPrice(savedAmount, lang)}
          </span>
        )}

        {/* Favorit ürək — sağ alt */}
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-label={c.addFavourite}
          aria-pressed={fav}
          className={[
            'absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors',
            fav ? 'text-mb-blue' : 'text-mb-ink hover:text-mb-blue',
          ].join(' ')}
        >
          <HeartIcon filled={fav} />
        </button>

        {/* Rezerv overlay — bütün şəkli tutur */}
        {reserved && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 text-center text-white">
            <span className="text-sm font-semibold uppercase tracking-wide">{c.reserved}</span>
            <span className="mt-1 text-xs text-white/80">{c.registerInterest}</span>
          </div>
        )}
      </div>

      {/* --- Məzmun --- */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg text-mb-ink">Mercedes-Benz {model}</h3>
        <p className="mt-0.5 text-sm text-mb-grey">{variant}</p>

        {specialOffer && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-mb-blue">
            {c.specialOffer}
          </p>
        )}

        {/* Spec cədvəli — 2 sütun */}
        <dl className="mt-3 grid grid-cols-2 gap-y-2 text-xs text-mb-grey">
          <Spec icon={<CalendarIcon />} value={year} />
          <Spec icon={<GearboxIcon />} value={t.transmission[transmission] ?? transmission} />
          <Spec icon={<PaletteIcon />} value={colourLabel} />
          <Spec icon={<FuelIcon />} value={t.fuel[fuel] ?? fuel} />
          {distance > 0 && (
            <Spec
              icon={<GaugeIcon />}
              value={`${new Intl.NumberFormat(lang === 'az' ? 'az-AZ' : 'en-US').format(distance)} ${c.km}`}
            />
          )}
        </dl>

        {/* Qiymət */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-mb-blue">{formatPrice(price, lang)}</span>
          {savedAmount > 0 && (
            <span className="text-sm text-mb-grey line-through">{formatPrice(oldPrice, lang)}</span>
          )}
        </div>

        {/* Filial */}
        <p className="mt-3 flex items-center gap-1.5 border-t border-mb-grey-light pt-3 text-xs text-mb-grey">
          <LocationIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{branch}</span>
        </p>
      </div>
    </article>
  );
}

// İkon + dəyər olan tək spec sətri
function Spec({ icon, value }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="shrink-0 text-mb-ink/70">{icon}</span>
      <span className="truncate text-mb-ink/90">{value}</span>
    </div>
  );
}
