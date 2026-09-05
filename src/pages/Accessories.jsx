import { useLanguage } from '../context/LanguageContext.jsx';
import { accessoryCategories } from '../data/accessories.js';
import Button from '../components/ui/Button.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';
import CategorySlider from '../components/services/CategorySlider.jsx';

// "Xidmətlər → Aksesuarlar" səhifəsi (/xidmetler/aksesuarlar).
// Bölmələr: Hero → Təhlükəsizlik/Rahatlıq → Stil → Uşaq oturacağı → Kateqoriyalar.
// (Şəkildəki "Alış-veriş alətləri" bloku ana səhifədə artıq var — təkrarlanmır.)
export default function Accessories() {
  const { t } = useLanguage();
  const a = t.accessories;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/accessories/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {a.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {a.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {a.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Təhlükəsizlik və Rahatlıq — şəkil sağda */}
      <FeatureBlock
        eyebrow={a.safety.eyebrow}
        title={a.safety.title}
        text={a.safety.text}
        image="/images/accessories/safety.avif"
      />

      {/* Stil ilə uyğunluq — şəkil solda */}
      <FeatureBlock
        eyebrow={a.style.eyebrow}
        title={a.style.title}
        text={a.style.text}
        image="/images/accessories/style.avif"
        reverse
      />

      {/* Uşaq oturacağı — şəkil sağda */}
      <FeatureBlock
        title={a.childSeat.title}
        text={a.childSeat.text}
        image="/images/accessories/child-seat.avif"
        contain
      />

      {/* Kateqoriyalar */}
      <CategorySlider
        eyebrow={a.categories.eyebrow}
        title={a.categories.title}
        items={accessoryCategories}
      />
    </div>
  );
}
