import { useLanguage } from '../../context/LanguageContext.jsx';

// "In the Spotlight" bölməsindəki tək kart.
// Portret formalı, tam şəkil + tünd overlay + başlıq/mətn/düymə.
// Mouse gələndə (group-hover) mətn və düymə yuxarı qalxır.
export default function SpotlightCard({ item }) {
  const { t } = useLanguage();
  const ctaLabel = t.spotlight.cta[item.cta] ?? t.spotlight.cta.explore;

  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-mb-ink">
      {/* Şəkil */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-mb group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      {/* Aşağıdan yuxarı tündləşən örtük (mətnin oxunması üçün) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

      {/* Məzmun — hover-də yuxarı qalxır */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 text-white transition-transform duration-500 ease-mb group-hover:-translate-y-2">
        <h3 className="text-base font-semibold leading-snug text-shadow-hero">{item.title}</h3>
        <p className="mt-2 text-sm text-white/85 text-shadow-hero">{item.text}</p>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-mb-blue px-5 py-3 text-sm font-medium text-white transition-colors duration-300 ease-mb hover:bg-mb-blue-dark"
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
