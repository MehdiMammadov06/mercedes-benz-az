import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { formatPrice } from '../utils/format.js';
import StockGallery from '../components/stock/StockGallery.jsx';
import {
  CalendarIcon,
  FuelIcon,
  GearboxIcon,
  CarIcon,
  SedanIcon,
  SuvIcon,
  ChevronDown,
  ChevronLeft,
  LocationIcon,
} from '../components/icons/index.jsx';

// Qalereyada göstərilən görüntülər (şəkil yollarının konvensiyası):
//   /images/stock/<modelId>/<view>.avif
const GALLERY_VIEWS = ['front', 'side', 'rear', 'interior', 'dashboard', 'seats'];

// Tək avtomobilin detal səhifəsi (/alis/:id) — orijinal Stock detalına uyğun.
// Sol: qalereya + spec + Colour/Order/VIN + Features/Warranty + filial + saatlar.
// Sağ: "Need More Information?" + telefon + Book a Test Drive / Enquire Now.
export default function StockDetail() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const s = t.stock;
  const d = s.detail;
  const { data, isLoading, error } = useFetch('/data/stock.json', { delay: 300 });

  const vehicle = useMemo(
    () => data?.vehicles?.find((v) => v.id === id) ?? null,
    [data, id]
  );
  const branchInfo = vehicle ? data?.branches?.[vehicle.branch] : null;
  const featureKeys = data?.featureKeys ?? [];

  if (isLoading) {
    return (
      <div className="container-site py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-[16/10] animate-pulse rounded-lg bg-mb-grey-light" />
          <div className="space-y-4">
            <div className="h-8 w-2/3 animate-pulse rounded bg-mb-grey-light" />
            <div className="h-6 w-1/3 animate-pulse rounded bg-mb-grey-light" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-mb-grey">{error ? t.common.error : d.notFound}</p>
        <Link to="/alis" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-mb-blue hover:text-mb-blue-dark">
          <ChevronLeft className="h-4 w-4" />
          {d.back}
        </Link>
      </div>
    );
  }

  const savedAmount =
    vehicle.oldPrice && vehicle.oldPrice > vehicle.price ? vehicle.oldPrice - vehicle.price : 0;

  const specs = [
    { icon: <CalendarIcon className="h-6 w-6" />, value: vehicle.year },
    { icon: <FuelIcon className="h-6 w-6" />, value: t.fuel[vehicle.fuel] ?? vehicle.fuel },
    { icon: <GearboxIcon className="h-6 w-6" />, value: t.transmission[vehicle.transmission] ?? vehicle.transmission },
    { icon: <CarIcon className="h-6 w-6" />, value: `${vehicle.power.kw}KW (${vehicle.power.hp} hp)` },
    {
      icon: vehicle.bodyStyle === 'suv' ? <SuvIcon className="h-6 w-6" /> : <SedanIcon className="h-6 w-6" />,
      value: t.categories[vehicle.bodyStyle] ?? vehicle.bodyStyle,
    },
  ];

  return (
    <div>
      {/* Qayıt linki */}
      <div className="container-site pt-6">
        <Link to="/alis" className="inline-flex items-center gap-1.5 text-sm font-medium text-mb-grey transition-colors hover:text-mb-blue">
          <ChevronLeft className="h-4 w-4" />
          {d.back}
        </Link>
      </div>

      <div className="container-site grid gap-8 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* ================= SOL ================= */}
        <div>
          {/* Başlıq + qiymət */}
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl text-mb-ink sm:text-3xl">
                Mercedes-Benz {vehicle.model}
              </h1>
              <p className="mt-1 text-mb-grey">{vehicle.variant}</p>
            </div>
            <div className="text-right">
              <span className="block text-xs uppercase tracking-wide text-mb-grey">{d.cash}</span>
              <span className="text-xl font-semibold text-mb-ink">{formatPrice(vehicle.price, lang)}</span>
              {savedAmount > 0 && (
                <span className="block text-sm text-mb-grey line-through">{formatPrice(vehicle.oldPrice, lang)}</span>
              )}
            </div>
          </div>

          {/* Qalereya */}
          <StockGallery vehicle={vehicle} views={GALLERY_VIEWS} />

          {/* Spec ikonları */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-y border-mb-grey-light py-6 sm:grid-cols-5">
            {specs.map((sp, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <span className="text-mb-ink/80">{sp.icon}</span>
                <span className="text-xs text-mb-grey">{sp.value}</span>
              </div>
            ))}
          </div>

          {/* Exterior Colour / Order / VIN */}
          <dl className="mt-6 divide-y divide-mb-grey-light border-b border-mb-grey-light text-sm">
            <Row label={d.exteriorColour} value={t.colours[vehicle.colour] ?? vehicle.colour} />
            <Row label={d.orderNumber} value={vehicle.orderNumber} />
            <Row label={d.vin} value={vehicle.vin} />
          </dl>

          {vehicle.specialOffer && (
            <span className="mt-4 inline-block bg-mb-ink/85 px-3 py-1 text-xs font-medium text-white">
              {s.card.specialOffer}
            </span>
          )}

          {/* Features / Warranty accordion */}
          <div className="mt-6 divide-y divide-mb-grey-light border-y border-mb-grey-light">
            <Accordion title={d.features}>
              <ul className="grid gap-2 py-2 sm:grid-cols-2">
                {featureKeys.map((key) => (
                  <li key={key} className="flex items-center gap-2 text-sm text-mb-ink">
                    <span className="text-mb-blue">✓</span>
                    {s.features[key] ?? key}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title={d.warranty}>
              <p className="py-2 text-sm text-mb-grey">{d.warrantyText}</p>
            </Accordion>
          </div>

          {/* Filial + xəritə */}
          {branchInfo && (
            <div className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
                <div>
                  <h3 className="font-display text-lg text-mb-ink">{vehicle.branch}</h3>
                  <p className="mt-2 text-sm text-mb-grey">{branchInfo.address[lang]}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branchInfo.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
                  >
                    <LocationIcon className="h-4 w-4" />
                    {d.getDirections} {vehicle.branch}
                  </a>
                  <p className="mt-3 text-sm text-mb-blue">{branchInfo.phone}</p>
                </div>

                {/* Xəritə (statik embed) */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branchInfo.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-mb-border bg-mb-silver text-sm text-mb-grey"
                >
                  <LocationIcon className="mr-1.5 h-5 w-5 text-mb-blue" />
                  {d.openMap}
                </a>
              </div>

              {/* İş saatları */}
              <div className="mt-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-mb-grey">
                  {d.workingHours}
                </h4>
                <dl className="divide-y divide-mb-grey-light border-y border-mb-grey-light text-sm">
                  {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
                    <div key={day} className="flex justify-between py-2.5">
                      <dt className="font-medium text-mb-ink">{d.days[day]}</dt>
                      <dd className="text-mb-grey">{branchInfo.hours[day]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </div>

        {/* ================= SAĞ ================= */}
        <div>
          <div className="rounded-xl bg-mb-silver p-6 sm:p-8 lg:sticky lg:top-24">
            <h2 className="font-display text-xl text-mb-ink sm:text-2xl">{d.needInfo}</h2>

            {branchInfo && (
              <p className="mt-6 text-lg font-semibold text-mb-ink">{branchInfo.phone}</p>
            )}

            <div className="mt-6 space-y-3">
              <Link
                to="/alis#enquire"
                className="flex h-12 w-full items-center justify-center rounded-full bg-mb-blue text-sm font-medium text-white transition-colors hover:bg-mb-blue-dark"
              >
                {d.bookTestDrive}
              </Link>
              <Link
                to="/alis#enquire"
                className="flex h-12 w-full items-center justify-center rounded-full border border-mb-ink text-sm font-medium text-mb-ink transition-colors hover:bg-mb-ink hover:text-white"
              >
                {d.enquire}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Etiket + dəyər sətri (Colour / Order / VIN)
function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3">
      <dt className="text-mb-grey">{label}</dt>
      <dd className="font-medium text-mb-ink">{value}</dd>
    </div>
  );
}

// "+ / −" ilə açılan accordion (Features, Warranty)
function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-display text-lg text-mb-ink">{title}</span>
        <ChevronDown
          className={['h-5 w-5 text-mb-grey transition-transform duration-300', open ? 'rotate-180' : ''].join(' ')}
        />
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}
