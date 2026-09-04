import { useLanguage } from '../../context/LanguageContext.jsx';

// "In the Spotlight" bölməsindəki tək kart.
// Portret formalı, tam şəkil + tünd overlay + başlıq/mətn/düymə.
// Mouse gələndə (group-hover) mətn və düymə yuxarı qalxır.
export default function SpotlightCard({ item }) {
  const { t, lang } = useLanguage();
  const ctaLabel = t.spotlight.cta[item.cta] ?? t.spotlight.cta.explore;
  // Başlıq/mətn { az, en } obyektidir — cari dilə uyğununu seç
  const title = item.title[lang] ?? item.title.en;
  const text = item.text[lang] ?? item.text.en;

  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-mb-ink">
      {/* Şəkil */}
      <img
        src={item.image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-mb group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      {/* Aşağıdan yuxarı tündləşən örtük (mətnin oxunması üçün) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

      {/* Məzmun — hover-də yuxarı qalxır */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 text-white transition-transform duration-500 ease-mb group-hover:-translate-y-1">
        {/* Başlıq — maksimum 2 sətir (uzunları "..." ilə kəsilir ki, kartlar səliqəli olsun) */}
        <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-shadow-hero">
          {title}
        </h3>

        {/* Mətn — maksimum 2 sətir */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/85 text-shadow-hero">
          {text}
        </p>

        <button
          type="button"
          className="mt-4 w-full truncate rounded-full bg-mb-blue px-5 py-3 text-sm font-medium text-white transition-colors duration-300 ease-mb hover:bg-mb-blue-dark"
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
