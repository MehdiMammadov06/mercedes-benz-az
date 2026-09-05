import { useLanguage } from '../context/LanguageContext.jsx';
import { collectionCategories } from '../data/collection.js';
import Button from '../components/ui/Button.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';
import CategorySlider from '../components/services/CategorySlider.jsx';

// "Xidmətlər → Həyat Tərzi Kolleksiyası" səhifəsi (/xidmetler/kolleksiya).
// Hero → intro (eSkuter) → model avtomobillər → saatlar → AMG → kateqoriyalar.
export default function Collection() {
  const { t } = useLanguage();
  const c = t.collection;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/collection/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[75vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {c.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {c.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {c.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* intro (eSkuter) — şəkil sağda */}
      <FeatureBlock
        eyebrow={c.intro.eyebrow}
        title={c.scooter.title}
        text={`${c.intro.text}\n\n${c.scooter.text}`}
        image="/images/collection/scooter.avif"
        contain
      />

      {/* Model avtomobillər — şəkil solda */}
      <FeatureBlock
        title={c.models.title}
        text={c.models.text}
        image="/images/collection/model-car.avif"
        reverse
      />

      {/* Saatlar — şəkil sağda */}
      <FeatureBlock
        title={c.watches.title}
        text={c.watches.text}
        image="/images/collection/watch.avif"
        contain
      />

      {/* AMG — şəkil solda */}
      <FeatureBlock
        eyebrow={c.amg.eyebrow}
        title={c.amg.eyebrow}
        text={c.amg.text}
        image="/images/collection/amg.avif"
        reverse
      />

      {/* Kateqoriyalar */}
      <CategorySlider
        eyebrow={c.categories.eyebrow}
        title={c.categories.title}
        items={collectionCategories}
      />
    </div>
  );
}
