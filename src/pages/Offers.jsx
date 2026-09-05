import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { offers } from '../data/offers.js';

// "Alış → Xüsusi təkliflər" səhifəsi (/teklifler).
// 3 kart: promo banner şəkli (üstündə model adı/qiymət şəkildədir) + altında
// mavi başlıq mətni. Karta klikləyəndə aid olduğu modelin satış səhifəsinə
// (mövcud avtomobillər, model filtri ilə) yönəldir.
export default function Offers() {
  const { t, lang } = useLanguage();
  const o = t.offers;

  return (
    <section className="container-site py-12 sm:py-16 lg:py-20">
      <div className="mb-10 text-center sm:mb-12">
        <h1 className="font-display text-3xl text-mb-ink sm:text-4xl">{o.title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-mb-grey sm:text-base">{o.subtitle}</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => {
          const title = offer.title[lang] ?? offer.title.en;
          return (
            <Link
              key={offer.id}
              to={offer.to}
              className="group flex flex-col overflow-hidden rounded-lg border border-mb-border bg-white transition-shadow duration-300 ease-mb hover:shadow-xl"
            >
              {/* Promo banner şəkli */}
              <div className="relative aspect-[4/3] overflow-hidden bg-mb-ink">
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-white/50">
                  {offer.id}
                </span>
                <img
                  src={offer.image}
                  alt={title}
                  loading="lazy"
                  className="relative h-full w-full object-cover transition-transform duration-500 ease-mb group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden';
                  }}
                />
              </div>

              {/* Mavi başlıq mətni (link kimi) */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-medium leading-snug text-mb-blue transition-colors group-hover:text-mb-blue-dark">
                  {title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
