import { useLanguage } from '../context/LanguageContext.jsx';
import { maybachModels } from '../data/maybach.js';
import Button from '../components/ui/Button.jsx';
import BrandModelSlider from '../components/brands/BrandModelSlider.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';

// "Bizim brendlərimiz → Mercedes-Maybach" səhifəsi (/brendler/mercedes-maybach).
// Hero → Model cərgəsi (slider) → intro → Modellər (GLS, S-Class) → Night Seriyası.
export default function MaybachBrand() {
  const { t } = useLanguage();
  const m = t.maybach;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] overflow-hidden bg-mb-black">
        <img
          src="/images/maybach/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/25 to-transparent" />

        <div className="container-site relative flex min-h-[75vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {m.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {m.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="primary" size="lg">
              {m.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Model cərgəsi — sadə slider */}
      <BrandModelSlider title={m.lineup.title} models={maybachModels} />

      {/* İntro */}
      <section className="container-site pt-4">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{m.intro.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{m.intro.title}</h2>
          <p className="mt-3 text-sm text-mb-grey sm:text-base">{m.intro.subtitle}</p>
        </div>
      </section>

      {/* Yalnız bir Mercedes-Maybach... (şəkil sağda) */}
      <FeatureBlock
        title={m.intro.blockTitle}
        text={m.intro.text}
        image="/images/maybach/intro-gls.avif"
      />

      {/* --- Mercedes-Maybach Modelləri --- */}
      <section className="container-site pt-4">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{m.models.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{m.models.title}</h2>
          <p className="mt-3 text-sm text-mb-grey sm:text-base">{m.models.subtitle}</p>
        </div>
      </section>

      {/* GLS — şəkil solda */}
      <FeatureBlock
        title={m.models.gls.title}
        text={`${m.models.gls.subtitle}\n\n${m.models.gls.text}`}
        image="/images/maybach/gls.avif"
        reverse
        ctaLabel={m.models.cta}
      />

      {/* S-Class — şəkil sağda */}
      <FeatureBlock
        title={m.models.sClass.title}
        text={`${m.models.sClass.subtitle}\n\n${m.models.sClass.text}`}
        image="/images/maybach/s-class.avif"
        ctaLabel={m.models.cta}
      />

      {/* --- Night Seriyası --- */}
      <section className="container-site pt-4">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{m.night.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{m.night.title}</h2>
          <p className="mt-3 text-sm text-mb-grey sm:text-base">{m.night.subtitle}</p>
        </div>
      </section>

      {/* S-Class Night — şəkil solda */}
      <FeatureBlock
        title={m.night.sClass.title}
        text={m.night.sClass.text}
        image="/images/maybach/night-s-class.avif"
        reverse
        ctaLabel={m.night.cta}
      />

      {/* GLS Night — şəkil sağda */}
      <FeatureBlock
        title={m.night.gls.title}
        text={m.night.gls.text}
        image="/images/maybach/night-gls.avif"
        ctaLabel={m.night.cta}
      />

      {/* Qeyd */}
      <div className="container-site pb-16">
        <p className="text-xs text-mb-grey">{m.footnote}</p>
      </div>
    </div>
  );
}
