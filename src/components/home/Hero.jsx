import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';

// ŞƏKİL: `public/images/mercedesnew.png` (E-Class hero şəkli).
// Şəkil olmasa, altdaki qradient fon göstərilir (sayt sınmır).
const HERO_IMAGE = '/images/mercedesnew.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[calc(100vh-7rem)] min-h-[520px] w-full overflow-hidden bg-linear-to-br from-mb-ink via-[#3a3a3a] to-[#0d0d0d]">
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      {/* Mətnin oxunması üçün soldan sağa tündləşən örtük */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />

      <div className="container-site relative flex h-full flex-col justify-center pb-16">
        <h1 className="max-w-[13ch] font-display text-4xl leading-[1.06] text-white text-shadow-hero animate-fade-up sm:text-5xl lg:max-w-[15ch] lg:text-[4.25rem]">
          {t.hero.title}
        </h1>

        <p className="mt-5 max-w-md text-sm font-medium text-white/90 text-shadow-hero animate-fade-up sm:text-base">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up sm:gap-4">
          <Button to="/modeller" variant="primary" size="lg">
            {t.hero.primaryCta}
          </Button>
          <Button to="/modeller" variant="dark" size="lg">
            {t.hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
