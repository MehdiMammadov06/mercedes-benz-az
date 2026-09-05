import { useLanguage } from '../context/LanguageContext.jsx';
import { amgModels, amgTabs, amgEditions } from '../data/amg.js';
import Button from '../components/ui/Button.jsx';
import AmgLineup from '../components/brands/AmgLineup.jsx';
import HighlightSlider from '../components/brands/HighlightSlider.jsx';
import EditionSlider from '../components/brands/EditionSlider.jsx';

// "Bizim brendlərimiz → Mercedes-AMG" səhifəsi (/brendler/mercedes-amg).
// Hero → Model cərgəsi (tab slider) → Əsas məqamlar (tünd slider) → Yubiley (Edition 55).
export default function AmgBrand() {
  const { t } = useLanguage();
  const a = t.amg;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] overflow-hidden bg-mb-black">
        <img
          src="/images/amg/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[75vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {a.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {a.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="primary" size="lg">
              {a.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Model cərgəsi — tab slider */}
      <AmgLineup title={a.lineup.title} tabs={amgTabs} models={amgModels} />

      {/* Əsas məqamlar — tünd slider (intro sabit + 3 slayd) */}
      <HighlightSlider intro={a.intro} slides={a.highlights} />

      {/* AMG-nin 55 illiyi — Edition 55 karuseli */}
      <EditionSlider
        eyebrow={a.anniversary.eyebrow}
        title={a.anniversary.title}
        text={a.anniversary.text}
        items={amgEditions}
      />
    </div>
  );
}
