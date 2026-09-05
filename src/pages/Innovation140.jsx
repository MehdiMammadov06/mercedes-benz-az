import { useLanguage } from '../context/LanguageContext.jsx';
import Button from '../components/ui/Button.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';
import ContactForm from '../components/model-page/ContactForm.jsx';

// "Bizim brendlərimiz → 140 illik innovasiya" səhifəsi (/brendler/innovasiya).
// Hero → Fərdi mobillik → 140 İl 140 Məkan → İcma → Əlaqə formu.
export default function Innovation140() {
  const { t } = useLanguage();
  const i = t.innovation140;

  // ContactForm mövcud komponentdir — copy-ni model səhifəsindən götürüb
  // yalnız başlıq/heading-i bu səhifəyə uyğun override edirik.
  const formCopy = {
    ...t.modelPage.form,
    brandName: i.form.title,
    heading: i.form.heading,
  };

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/innovation-140/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />

        <div className="container-site relative flex min-h-[75vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {i.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/90 text-shadow-hero sm:text-base">
            {i.hero.text}
          </p>
          <div className="mt-8">
            <Button to="/elaqe" variant="primary" size="lg">
              {i.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Fərdi mobilliyin yenidən tərifi — şəkil sağda, "Bütün modellərə baxın" */}
      <FeatureBlock
        eyebrow={i.redefine.eyebrow}
        title={i.redefine.title}
        text={i.redefine.text}
        image="/images/innovation-140/redefine.avif"
        ctaLabel={i.redefine.cta}
        ctaTo="/modeller"
      />

      {/* 140 İl. 140 Məkan — şəkil solda, "Ətraflı" */}
      <FeatureBlock
        eyebrow={i.places.eyebrow}
        title={i.places.title}
        text={i.places.text}
        image="/images/innovation-140/places.avif"
        reverse
        ctaLabel={i.places.cta}
      />

      {/* Mercedes-Benz İcması — şəkil sağda (düymə yox) */}
      <FeatureBlock
        eyebrow={i.community.eyebrow}
        title={i.community.title}
        text={i.community.text}
        image="/images/innovation-140/community.avif"
        contain
      />

      {/* Əlaqə formu (mövcud ContactForm komponenti) */}
      <ContactForm copy={formCopy} bgImage="/images/innovation-140/form-bg.avif" />
    </div>
  );
}
