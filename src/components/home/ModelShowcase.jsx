import { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import ModelCard from '../models/ModelCard.jsx';
import Button from '../ui/Button.jsx';

// Ana səhifədəki "Model cərgəsi" bölməsi:
//   kateqoriya tabları  +  seçilən kateqoriyanın modelləri (kart şəbəkəsi).
//
// Tab açarları models.json-dakı `category` dəyərləri ilə üst-üstə düşür,
// adları isə translations.js-dəki `categories` blokundan gəlir.

// Tabların sırası (orijinal saytdakı ardıcıllığa uyğun). "all" = Hamısı.
// "estates" orijinalda var, amma modeli yoxdur — boş göstərilir.
const TAB_KEYS = ['all', 'sedan', 'suv', 'coupe', 'cabriolet', 'hatchback', 'mpv', 'estates'];

export default function ModelShowcase() {
  const { t } = useLanguage();
  const { data, isLoading, error } = useFetch('/data/models.json', { delay: 400 });
  const [activeTab, setActiveTab] = useState('all');

  const allModels = data?.models ?? [];

  // Seçilən taba görə modelləri süz. "all" olanda hamısı göstərilir.
  // Bir model birdən çox kateqoriyada ola bilər (məs. GLC Coupé həm SUV, həm Kupe),
  // ona görə `categories` massivi ilə yoxlanılır.
  const visibleModels = useMemo(() => {
    if (activeTab === 'all') return allModels;
    return allModels.filter((model) => model.categories?.includes(activeTab));
  }, [allModels, activeTab]);

  // Bütün tablar orijinaldakı kimi göstərilir (Estates boş olsa da qalır).
  const availableTabs = allModels.length === 0 ? [] : TAB_KEYS;

  return (
    <section className="container-site py-16 sm:py-20 lg:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl text-mb-ink sm:text-4xl">{t.models.title}</h2>
          <p className="mt-2 max-w-xl text-sm text-mb-grey sm:text-base">{t.models.subtitle}</p>
        </div>
        <Button to="/modeller" variant="outline-dark" size="md" className="self-start sm:self-auto">
          {t.models.title}
        </Button>
      </div>

      {/* --- Kateqoriya tabları --- */}
      {availableTabs.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
          {availableTabs.map((key) => {
            const isActive = key === activeTab;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={[
                  'rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-mb',
                  isActive
                    ? 'bg-mb-black text-white'
                    : 'bg-mb-silver text-mb-grey hover:bg-mb-grey-light hover:text-mb-ink',
                ].join(' ')}
              >
                {t.categories[key]}
              </button>
            );
          })}
        </div>
      )}

      {/* --- Məzmun: yüklənir / xəta / kartlar --- */}
      {isLoading && <ShowcaseSkeleton />}

      {error && (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-sm text-mb-grey">{t.common.error}</p>
        </div>
      )}

      {!isLoading && !error && visibleModels.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      )}

      {/* Boş kateqoriya (məs. Estates) */}
      {!isLoading && !error && visibleModels.length === 0 && (
        <div className="flex items-center justify-center py-16 text-center">
          <p className="text-sm text-mb-grey">{t.models.noResults}</p>
        </div>
      )}
    </section>
  );
}

// Yüklənərkən göstərilən "skeleton" kartlar (məzmunun yerini tutur)
function ShowcaseSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-lg bg-white p-4">
          <div className="aspect-[4/3] animate-pulse rounded-md bg-mb-silver" />
          <div className="mx-auto mt-5 h-5 w-2/3 animate-pulse rounded bg-mb-silver" />
          <div className="mx-auto mt-2 h-4 w-1/2 animate-pulse rounded bg-mb-silver" />
        </div>
      ))}
    </div>
  );
}
