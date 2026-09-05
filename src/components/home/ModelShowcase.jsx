import { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import ModelSlider from '../models/ModelSlider.jsx';

const TAB_KEYS = ['all', 'sedan', 'suv', 'coupe', 'cabriolet', 'hatchback', 'mpv', 'estates'];

export default function ModelShowcase() {
  const { t } = useLanguage();
  const { data, isLoading, error } = useFetch('/data/models.json', { delay: 400 });
  const [activeTab, setActiveTab] = useState('all');

  const allModels = data?.models ?? [];

  const visibleModels = useMemo(() => {
    if (activeTab === 'all') return allModels;
    return allModels.filter((model) => model.categories?.includes(activeTab));
  }, [allModels, activeTab]);

  const availableTabs = allModels.length === 0 ? [] : TAB_KEYS;

  return (
    <section className="container-site py-16 sm:py-20 lg:py-24">
      <div className="mb-10 sm:mb-12">
        <h2 className="font-display text-3xl text-mb-ink sm:text-4xl">{t.models.title}</h2>
        <p className="mt-2 max-w-xl text-sm text-mb-grey sm:text-base">{t.models.subtitle}</p>
      </div>

      {/* Kateqoriya */}
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

      {isLoading && <ShowcaseSkeleton />}

      {error && (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-sm text-mb-grey">{t.common.error}</p>
        </div>
      )}

      {!isLoading && !error && visibleModels.length > 0 && (
        <ModelSlider models={visibleModels} />
      )}

      {!isLoading && !error && visibleModels.length === 0 && (
        <div className="flex items-center justify-center py-16 text-center">
          <p className="text-sm text-mb-grey">{t.models.noResults}</p>
        </div>
      )}
    </section>
  );
}

function ShowcaseSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="rounded-lg bg-white p-4">
          <div className="aspect-[4/3] animate-pulse rounded-md bg-mb-silver" />
          <div className="mx-auto mt-5 h-5 w-2/3 animate-pulse rounded bg-mb-silver" />
          <div className="mx-auto mt-2 h-4 w-1/3 animate-pulse rounded bg-mb-silver" />
        </div>
      ))}
    </div>
  );
}
