import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { SearchIcon, ChevronDown } from '../icons/index.jsx';

// Sol filtr paneli (kontrollü komponent) — orijinal Stock səhifəsindəki kimi.
// Bütün filtr state-i valideyndən (`filters`) gəlir, dəyişiklik `onChange` ilə qayıdır.
//
// Quruluş (orijinaldakı kimi):
//   Başlıq "Axtarış" + "Axtarışı təmizlə"
//   Model, İl (dropdown)
//   Açar söz axtarışı (input)
//   Yanacaq növü, Qiymət aralığı, Yürüş, Rənglər, Kuzov tipi (hamısı həmişə görünür)
//   "Əlavə seçimlər" düyməsi → Sürətlər qutusu, Filial (ikinci dərəcəli filtrlər)
//
// Seçimlər (illər, rənglər və s.) mövcud data-dan avtomatik çıxarılır ki,
// data dəyişəndə filtr də uyğunlaşsın.
export default function StockFilters({ filters, onChange, onClear, options }) {
  const { t } = useLanguage();
  const s = t.stock;
  const [expanded, setExpanded] = useState(false);

  const set = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <aside className="rounded-lg border border-mb-border bg-white p-5">
      {/* Başlıq + təmizlə */}
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg text-mb-ink">{s.search}</h2>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1 text-xs font-medium text-mb-grey underline-offset-2 transition-colors hover:text-mb-blue hover:underline"
        >
          {s.clearSearch}
          <span aria-hidden="true" className="text-sm leading-none">×</span>
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {/* Model */}
        <SelectField
          label={s.filters.model}
          value={filters.model}
          onChange={(v) => set('model', v)}
          anyLabel={s.any}
          options={options.models.map((m) => ({ value: m, label: m }))}
        />

        {/* İl */}
        <SelectField
          label={s.filters.year}
          value={filters.year}
          onChange={(v) => set('year', v)}
          anyLabel={s.any}
          options={options.years.map((y) => ({ value: String(y), label: String(y) }))}
        />

        {/* Açar söz axtarışı */}
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mb-grey" />
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => set('keyword', e.target.value)}
            placeholder={s.searchPlaceholder}
            className="h-11 w-full rounded-md border border-mb-border bg-white pl-9 pr-3 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue"
          />
        </div>

        {/* Yanacaq növü */}
        <SelectField
          label={s.filters.fuelType}
          value={filters.fuel}
          onChange={(v) => set('fuel', v)}
          anyLabel={s.any}
          options={options.fuels.map((f) => ({ value: f, label: t.fuel[f] ?? f }))}
        />

        {/* Qiymət aralığı */}
        <SelectField
          label={s.filters.priceRange}
          value={filters.price}
          onChange={(v) => set('price', v)}
          anyLabel={s.any}
          options={[
            { value: 'under150k', label: s.priceOptions.under150k },
            { value: '150to250k', label: s.priceOptions['150to250k'] },
            { value: 'over250k', label: s.priceOptions.over250k },
          ]}
        />

        {/* Yürüş */}
        <SelectField
          label={s.filters.distance}
          value={filters.distance}
          onChange={(v) => set('distance', v)}
          anyLabel={s.any}
          options={[
            { value: 'new', label: s.distanceOptions.new },
            { value: 'under10k', label: s.distanceOptions.under10k },
            { value: 'under25k', label: s.distanceOptions.under25k },
          ]}
        />

        {/* Rənglər */}
        <SelectField
          label={s.filters.colours}
          value={filters.colour}
          onChange={(v) => set('colour', v)}
          anyLabel={s.any}
          options={options.colours.map((col) => ({ value: col, label: t.colours[col] ?? col }))}
        />

        {/* Kuzov tipi */}
        <SelectField
          label={s.filters.bodyStyles}
          value={filters.bodyStyle}
          onChange={(v) => set('bodyStyle', v)}
          anyLabel={s.any}
          options={options.bodyStyles.map((b) => ({ value: b, label: t.categories[b] ?? b }))}
        />

        {/* Əlavə (ikinci dərəcəli) filtrlər — "Əlavə seçimlər"lə açılır */}
        {expanded && (
          <div className="space-y-4 border-t border-mb-grey-light pt-4">
            {/* Sürətlər qutusu */}
            <SelectField
              label={s.filters.transmission}
              value={filters.transmission}
              onChange={(v) => set('transmission', v)}
              anyLabel={s.any}
              options={options.transmissions.map((tr) => ({
                value: tr,
                label: t.transmission[tr] ?? tr,
              }))}
            />

            {/* Filial */}
            <SelectField
              label={s.filters.branch}
              value={filters.branch}
              onChange={(v) => set('branch', v)}
              anyLabel={s.any}
              options={options.branches.map((b) => ({ value: b, label: b }))}
            />
          </div>
        )}
      </div>

      {/* Əlavə seçimlər düyməsi */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-full border border-mb-blue px-5 py-2.5 text-sm font-medium text-mb-blue transition-colors hover:bg-mb-blue hover:text-white"
      >
        {expanded ? s.lessOptions : s.moreOptions}
        <ChevronDown
          className={['h-4 w-4 transition-transform duration-300', expanded ? 'rotate-180' : ''].join(' ')}
        />
      </button>
    </aside>
  );
}

// Etiketli dropdown. Boş dəyər ("") = "Hamısı".
function SelectField({ label, value, onChange, options, anyLabel }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-mb-grey">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full appearance-none rounded-md border border-mb-border bg-white px-3 pr-9 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue"
        >
          <option value="">{anyLabel}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mb-grey" />
      </div>
    </label>
  );
}
