import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';

// Tam ekran (h-screen) Maybach S-Class banneri.
// Scroll edəndə ekranı tam doldurur (viewport hündürlüyü qədər).
// Fon şəkli: public/images/maybachbaner.avif
const BANNER_IMAGE = '/images/maybachbaner.avif';

export default function MaybachBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-mb-ink">
      {/* Fon şəkli */}
      <img
        src={BANNER_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      {/* Mətnin oxunması üçün soldan sağa tündləşən örtük */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

      <div className="container-site relative flex h-full flex-col justify-center">
        <h2 className="max-w-[14ch] font-display text-4xl leading-[1.08] text-white text-shadow-hero sm:text-5xl lg:text-6xl">
          {t.maybachBanner.title}
        </h2>

        <p className="mt-5 text-sm font-medium text-white/90 text-shadow-hero sm:text-base">
          {t.maybachBanner.subtitle}
        </p>

        <div className="mt-8">
          <Button to="/modeller" variant="primary" size="lg">
            {t.maybachBanner.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
