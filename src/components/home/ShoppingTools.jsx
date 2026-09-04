import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { shoppingTools } from '../../data/shoppingTools.js';

// "Alış-veriş alətləri" bölməsi — bento/mozaika grid.
// Fərqli ölçülü kartlar (böyük sol, hündür orta və s.), orijinal saytdakı kimi.
// Hər kartın üzərinə mouse gələndə şəkil yüngülcə böyüyür (hover).

// Hər kartın grid-də tutduğu yer (masaüstü, lg-dən yuxarı).
// Mobil/planşetdə hamısı sadə axına düşür.
const SPAN_CLASSES = {
  big: 'lg:col-span-2 lg:row-span-2',
  tall: 'lg:row-span-2',
  small: '',
};

export default function ShoppingTools() {
  const { t, lang } = useLanguage();

  return (
    <section className="container-site py-16 sm:py-20 lg:py-24">
      <h2 className="mb-10 font-display text-3xl text-mb-ink sm:mb-12 sm:text-4xl">
        {t.shopping.title}
      </h2>

      {/* Bento grid:
          - mobil: 1 sütun
          - planşet (sm): 2 sütun
          - masaüstü (lg): 4 sütun + auto sıra hündürlüyü */}
      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shoppingTools.map((item) => (
          <ToolCard key={item.id} item={item} lang={lang} span={SPAN_CLASSES[item.span] ?? ''} />
        ))}
      </div>
    </section>
  );
}

function ToolCard({ item, lang, span }) {
  const title = item.title[lang] ?? item.title.en;

  return (
    <Link
      to={item.to}
      className={[
        'group relative overflow-hidden rounded-lg bg-mb-ink',
        // Mobil/planşetdə böyük və hündür kartlar da normal hündürlükdə olsun deyə
        // yalnız lg-dən yuxarı span tətbiq olunur:
        span,
      ].join(' ')}
    >
      {/* Şəkil — hover-də yüngülcə böyüyür */}
      <img
        src={item.image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-mb group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      {/* Oxunaqlıq üçün örtük */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/70" />

      {/* Başlıq */}
      <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-semibold text-white text-shadow-hero sm:text-lg">
        {title}
      </h3>
    </Link>
  );
}
