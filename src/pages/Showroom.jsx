import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { showrooms } from '../data/showrooms.js';
import { SearchIcon, LocationIcon, ChevronDown } from '../components/icons/index.jsx';

// "Alış → Showroom siyahısı" (Dealer Locator, /showroom).
// Sol: başlıq + Filtr + axtarış + diler kartları (logo/ad/ünvan/telefon +
// Müraciət et / Ətraflı). Sağ: seçilmiş dilerin Google Maps embed xəritəsi.
// Backend yoxdur — xəritə API açarı olmadan iframe ilə göstərilir.
const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// API açarı olmadan işləyən Google Maps embed URL-i
const mapSrc = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export default function Showroom() {
  const { t, lang } = useLanguage();
  const sh = t.showroom;

  const [keyword, setKeyword] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [activeId, setActiveId] = useState(showrooms[0]?.id ?? null);

  const results = useMemo(() => {
    const term = keyword.toLowerCase().trim();
    if (!term) return showrooms;
    return showrooms.filter((s) => {
      const hay = `${s.name} ${s.address.az} ${s.address.en}`.toLowerCase();
      return hay.includes(term);
    });
  }, [keyword]);

  const active = showrooms.find((s) => s.id === activeId) ?? results[0] ?? showrooms[0];

  const resetSearch = () => {
    setKeyword('');
    setShowFilter(false);
  };

  return (
    <div className="grid lg:grid-cols-[420px_1fr]">
      {/* ================= SOL PANEL ================= */}
      <div className="border-r border-mb-border bg-white">
        <div className="px-6 py-8 sm:px-8">
          <h1 className="font-display text-3xl text-mb-ink">{sh.title}</h1>
          <p className="mt-2 text-sm text-mb-grey">{sh.subtitle}</p>

          {/* Filtr düyməsi */}
          <button
            type="button"
            onClick={() => setShowFilter((v) => !v)}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-mb-blue text-sm font-medium text-white transition-colors hover:bg-mb-blue-dark"
          >
            <SearchIcon className="h-4 w-4" />
            {sh.filter}
          </button>

          {/* Axtarış (Filtr açılanda) */}
          {showFilter && (
            <div className="relative mt-4">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mb-grey" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={sh.searchPlaceholder}
                className="h-11 w-full rounded-md border border-mb-border bg-white pl-9 pr-3 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue"
              />
            </div>
          )}

          {/* Reset */}
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={resetSearch}
              className="text-sm text-mb-blue underline-offset-2 hover:underline"
            >
              {sh.resetSearch}
            </button>
          </div>
        </div>

        {/* Diler kartları */}
        <div className="divide-y divide-mb-border border-t border-mb-border">
          {results.length === 0 && (
            <p className="px-6 py-8 text-center text-sm text-mb-grey sm:px-8">{sh.noResults}</p>
          )}

          {results.map((shop) => (
            <ShowroomCard
              key={shop.id}
              shop={shop}
              active={shop.id === active?.id}
              onSelect={() => setActiveId(shop.id)}
              copy={sh}
              days={t.stock.detail.days}
              lang={lang}
            />
          ))}
        </div>
      </div>

      {/* ================= SAĞ XƏRİTƏ ================= */}
      <div className="relative min-h-[420px] bg-mb-silver lg:min-h-[calc(100vh-5rem)]">
        {active ? (
          <iframe
            title={active.name}
            src={mapSrc(active.mapQuery)}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full items-center justify-center text-mb-grey">
            {sh.mapPlaceholder}
          </div>
        )}
      </div>
    </div>
  );
}

// Tək diler kartı — logo (favicon.svg) + ad + ünvan + telefon + linklər.
// "Ətraflı" açılanda iş saatları göstərilir. Karta klik → xəritədə seçir.
function ShowroomCard({ shop, active, onSelect, copy, days, lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        'cursor-pointer px-6 py-6 transition-colors sm:px-8',
        active ? 'bg-mb-silver/60' : 'hover:bg-mb-silver/40',
      ].join(' ')}
      onClick={onSelect}
    >
      <div className="flex gap-4">
        {/* Logo */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-mb-black p-2">
          <img src="/favicon.svg" alt="Mercedes-Benz" className="h-full w-full" />
        </div>

        {/* Məzmun */}
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base leading-snug text-mb-ink">{shop.name}</h3>

          <p className="mt-2 flex items-start gap-1.5 text-sm text-mb-grey">
            <LocationIcon className="mt-0.5 h-4 w-4 shrink-0 text-mb-grey" />
            <span>{shop.address[lang]}</span>
          </p>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-mb-grey">
            <span className="text-mb-grey">☎</span>
            <span className="text-mb-blue">{shop.phone}</span>
          </p>

          {/* Linklər */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link
              to="/elaqe"
              onClick={(e) => e.stopPropagation()}
              className="text-mb-blue hover:text-mb-blue-dark"
            >
              {copy.makeEnquiry}
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
                setOpen((v) => !v);
              }}
              className="inline-flex items-center gap-1 text-mb-blue hover:text-mb-blue-dark"
            >
              {open ? copy.lessDetails : copy.moreDetails}
              <ChevronDown
                className={['h-4 w-4 transition-transform duration-300', open ? 'rotate-180' : ''].join(' ')}
              />
            </button>
          </div>

          {/* Ətraflı — iş saatları */}
          {open && (
            <div className="mt-4 border-t border-mb-border pt-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-mb-grey">
                {copy.workingHours}
              </h4>
              <dl className="space-y-1 text-sm">
                {DAYS.map((day) => (
                  <div key={day} className="flex justify-between">
                    <dt className="text-mb-ink">{days[day]}</dt>
                    <dd className="text-mb-grey">{shop.hours[day]}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
              >
                <LocationIcon className="h-4 w-4" />
                {copy.getDirections}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
