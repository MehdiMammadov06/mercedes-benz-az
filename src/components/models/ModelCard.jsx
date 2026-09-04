import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { ArrowRight } from '../icons/index.jsx';

// Tək model kartı: yalnız ŞƏKİL + AD + "Ətraflı" (orijinaldakı kimi).
// Həm ana səhifədə (Model cərgəsi), həm də Modellər səhifəsində istifadə olunur.
//
// Şəkil olmasa (public/images/models/... hələ atılmayıbsa), boz placeholder
// və avtomobilin adı göstərilir — sayt sınmır.
export default function ModelCard({ model }) {
  const { t } = useLanguage();

  return (
    <Link
      to={`/modeller/${model.id}`}
      className="group flex flex-col rounded-lg bg-white p-4 text-center transition-shadow duration-300 ease-mb hover:shadow-xl"
    >
      {/* Şəkil sahəsi */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-mb-silver">
        <img
          src={model.image}
          alt={model.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 ease-mb group-hover:scale-105"
          onError={(event) => {
            // Şəkil yoxdursa, gizlət — altdakı placeholder mətni görünsün
            event.currentTarget.style.visibility = 'hidden';
          }}
        />
        <span className="pointer-events-none absolute text-xs font-medium uppercase tracking-wider text-mb-grey">
          {model.name}
        </span>

        {/* "Yeni" nişanı */}
        {model.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-mb-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {t.common.new}
          </span>
        )}
      </div>

      {/* Ad */}
      <h3 className="mt-5 font-display text-xl text-mb-ink">{model.name}</h3>

      {/* Ətraflı — mavi */}
      <span className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-mb-blue transition-colors group-hover:text-mb-blue-dark">
        {t.common.details}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-mb group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
