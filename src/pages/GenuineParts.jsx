import { useLanguage } from '../context/LanguageContext.jsx';
import { partCategories } from '../data/genuineParts.js';
import Button from '../components/ui/Button.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';
import CategorySlider from '../components/services/CategorySlider.jsx';

// "Xidmətlər → Orijinal Hissələr" səhifəsi (/xidmetler/orijinal-hisseler).
// Hero → intro → Orijinal hissələr → Yenidən hazırlanmış hissələr → kateqoriyalar.
export default function GenuineParts() {
  const { t } = useLanguage();
  const g = t.genuineParts;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/genuine-parts/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {g.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {g.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {g.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* İntro — başlıq + mətn (şəkilsiz) */}
      <section className="container-site py-16 sm:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{g.intro.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{g.intro.title}</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-mb-ink/80 sm:text-base">
            {g.intro.text}
          </p>
        </div>
      </section>

      {/* Orijinal hissələr — şəkil sağda */}
      <FeatureBlock
        title={g.genuine.title}
        text={g.genuine.text}
        image="/images/genuine-parts/genuine.avif"
      />

      {/* Yenidən hazırlanmış hissələr — şəkil solda */}
      <FeatureBlock
        title={g.reman.title}
        text={g.reman.text}
        image="/images/genuine-parts/reman.avif"
        reverse
      />

      {/* Kateqoriyalar */}
      <CategorySlider
        eyebrow={g.categories.eyebrow}
        title={g.categories.title}
        text={g.categories.text}
        items={partCategories}
      />
    </div>
  );
}
