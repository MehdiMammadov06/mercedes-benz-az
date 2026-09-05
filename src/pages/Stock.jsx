import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../data/translations.js';
import { useFetch } from '../hooks/useFetch.js';
import StockCard from '../components/stock/StockCard.jsx';
import StockFilters from '../components/stock/StockFilters.jsx';
import { ChevronDown } from '../components/icons/index.jsx';

// "Alış → Mövcud avtomobillər" (stock) səhifəsi.
// Sol tərəfdə filtr paneli, sağda avtomobil kartlarının grid-i, yuxarıda
// nəticə sayı + sıralama. Backend yoxdur — stock.json-dan oxuyur.

const EMPTY_FILTERS = {
  model: '',
  year: '',
  keyword: '',
  fuel: '',
  priceMin: '', // '' = alt hədd yoxdur (data min-i)
  priceMax: '', // '' = üst hədd yoxdur (data max-ı)
  distance: '',
  colour: '',
  bodyStyle: '',
  transmission: '',
  branch: '',
};

// Yürüş açarını yoxlayan köməkçi
function matchDistance(distance, key) {
  if (key === 'new') return distance === 0;
  if (key === 'under10k') return distance < 10000;
  if (key === 'under25k') return distance < 25000;
  return true;
}

export default function Stock() {
  const { t } = useLanguage();
  const s = t.stock;
  const { data, isLoading, error } = useFetch('/data/stock.json', { delay: 400 });

  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [sort, setSort] = useState('priceAsc');

  const vehicles = useMemo(() => data?.vehicles ?? [], [data]);

  // URL query-dən ilkin filtrlər:
  //   ?category=suv  → kuzov tipi (menyudan gələndə)
  //   ?model=E-Class → model (Xüsusi təkliflər kartlarından gələndə)
  useEffect(() => {
    const category = searchParams.get('category');
    const model = searchParams.get('model');
    if (category || model) {
      setFilters((prev) => ({
        ...prev,
        ...(category ? { bodyStyle: category } : {}),
        ...(model ? { model } : {}),
      }));
    }
  }, [searchParams]);

  // Filtr dropdown-ları üçün mövcud dəyərlər (data-dan avtomatik çıxarılır)
  const options = useMemo(() => {
    const uniq = (arr) => [...new Set(arr)];
    const prices = vehicles.map((v) => v.price);
    // Slider hədləri: min aşağı, max yuxarı yuvarlaqlaşdırılır (1000-lik addım)
    const rawMin = prices.length ? Math.min(...prices) : 0;
    const rawMax = prices.length ? Math.max(...prices) : 0;
    return {
      models: uniq(vehicles.map((v) => v.model)).sort(),
      years: uniq(vehicles.map((v) => v.year)).sort((a, b) => b - a),
      fuels: uniq(vehicles.map((v) => v.fuel)),
      colours: uniq(vehicles.map((v) => v.colour)),
      bodyStyles: uniq(vehicles.map((v) => v.bodyStyle)),
      transmissions: uniq(vehicles.map((v) => v.transmission)),
      branches: uniq(vehicles.map((v) => v.branch)).sort(),
      priceBounds: {
        min: Math.floor(rawMin / 1000) * 1000,
        max: Math.ceil(rawMax / 1000) * 1000,
      },
    };
  }, [vehicles]);

  // Filtrləmə + sıralama
  const results = useMemo(() => {
    let list = vehicles.filter((v) => {
      if (filters.model && v.model !== filters.model) return false;
      if (filters.year && String(v.year) !== filters.year) return false;
      if (filters.fuel && v.fuel !== filters.fuel) return false;
      if (filters.colour && v.colour !== filters.colour) return false;
      if (filters.bodyStyle && v.bodyStyle !== filters.bodyStyle) return false;
      if (filters.transmission && v.transmission !== filters.transmission) return false;
      if (filters.branch && v.branch !== filters.branch) return false;
      if (filters.priceMin !== '' && v.price < filters.priceMin) return false;
      if (filters.priceMax !== '' && v.price > filters.priceMax) return false;
      if (filters.distance && !matchDistance(v.distance, filters.distance)) return false;
      if (filters.keyword) {
        const term = filters.keyword.toLowerCase().trim();
        if (term) {
          // Axtarış sahəsi geniş: ad, variant, yanacaq/rəng/transmissiya (hər iki
          // dildə), il — ki "electric", "elektrik", "white", "petrol" da tapılsın.
          const parts = [
            v.model,
            v.variant,
            v.year,
            v.fuel,
            v.colour,
            v.transmission,
            v.branch,
            translations.az.fuel[v.fuel],
            translations.en.fuel[v.fuel],
            translations.az.colours[v.colour],
            translations.en.colours[v.colour],
            translations.az.transmission[v.transmission],
            translations.en.transmission[v.transmission],
          ];
          const hay = parts.filter(Boolean).join(' ').toLowerCase();
          if (!hay.includes(term)) return false;
        }
      }
      return true;
    });

    const sorted = [...list];
    if (sort === 'priceAsc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'priceDesc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'yearDesc') sorted.sort((a, b) => b.year - a.year);
    else if (sort === 'distanceAsc') sorted.sort((a, b) => a.distance - b.distance);
    return sorted;
  }, [vehicles, filters, sort]);

  const clearFilters = () => setFilters(EMPTY_FILTERS);

  return (
    <div className="bg-mb-silver/40 py-8 sm:py-12">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* --- Sol: filtr paneli --- */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <StockFilters
              filters={filters}
              onChange={setFilters}
              onClear={clearFilters}
              options={options}
            />
          </div>

          {/* --- Sağ: nəticələr --- */}
          <div>
            {/* Üst zolaq: say + sıralama */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="font-display text-2xl text-mb-ink sm:text-3xl">
                {isLoading ? (
                  <span className="inline-block h-7 w-40 animate-pulse rounded bg-mb-grey-light" />
                ) : (
                  <>
                    {results.length}{' '}
                    <span className="text-lg text-mb-grey sm:text-xl">{s.available}</span>
                  </>
                )}
              </h1>

              <label className="relative inline-flex items-center">
                <span className="sr-only">{s.sort.label}</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-11 appearance-none rounded-md border border-mb-border bg-white pl-4 pr-10 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue"
                >
                  <option value="priceAsc">{s.sort.priceAsc}</option>
                  <option value="priceDesc">{s.sort.priceDesc}</option>
                  <option value="yearDesc">{s.sort.yearDesc}</option>
                  <option value="distanceAsc">{s.sort.distanceAsc}</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mb-grey" />
              </label>
            </div>

            {/* Xəta */}
            {error && (
              <div className="rounded-lg border border-mb-border bg-white p-8 text-center text-sm text-mb-grey">
                {t.common.error}
              </div>
            )}

            {/* Skeleton yüklənmə */}
            {isLoading && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-mb-border bg-white">
                    <div className="aspect-[16/10] animate-pulse bg-mb-grey-light" />
                    <div className="space-y-3 p-4">
                      <div className="h-5 w-2/3 animate-pulse rounded bg-mb-grey-light" />
                      <div className="h-4 w-1/2 animate-pulse rounded bg-mb-grey-light" />
                      <div className="h-6 w-1/3 animate-pulse rounded bg-mb-grey-light" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Nəticələr */}
            {!isLoading && !error && results.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((vehicle) => (
                  <StockCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}

            {/* Nəticə yoxdur */}
            {!isLoading && !error && results.length === 0 && (
              <div className="rounded-lg border border-mb-border bg-white p-12 text-center">
                <p className="text-sm text-mb-grey">{s.noResults}</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
                >
                  {s.resetAll}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
