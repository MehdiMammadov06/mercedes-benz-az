import { useLanguage } from '../context/LanguageContext.jsx';
import Button from '../components/ui/Button.jsx';
import FeatureBlock from '../components/services/FeatureBlock.jsx';

// "Xidmətlər → Servis paketləri" səhifəsi (/xidmetler/servis-paketleri).
// Hero → intro → Premium Servis → Premium servis plus → Loyal Tarif.
// (Sonda "Alış-veriş alətləri" bloku ana səhifədə var — təkrarlanmır.)
export default function ServicePackages() {
  const { t } = useLanguage();
  const sp = t.servicePackages;

  // Əlaqə qeydi + nömrələr (Premium plus və Loyal bloklarının sonunda göstərilir)
  const contactBlock = `\n\n${sp.contactNote}\n\n${sp.contacts.join('\n')}`;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/service-packages/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />

        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {sp.hero.title}
          </h1>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {sp.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* İntro — başlıq + mətn (şəkilsiz) */}
      <section className="container-site py-16 sm:py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{sp.intro.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{sp.intro.title}</h2>
          <p className="mt-5 text-sm leading-relaxed text-mb-grey sm:text-base">{sp.intro.text}</p>
        </div>
      </section>

      {/* Premium Servis — şəkil sağda */}
      <FeatureBlock
        title={sp.premium.title}
        text={sp.premium.text}
        image="/images/service-packages/premium.avif"
      />

      {/* Premium servis plus — şəkil solda + əlaqə nömrələri */}
      <FeatureBlock
        title={sp.premiumPlus.title}
        text={`${sp.premiumPlus.text}${contactBlock}`}
        image="/images/service-packages/premium-plus.avif"
        reverse
      />

      {/* Loyal Tarif — şəkil sağda + əlaqə nömrələri */}
      <FeatureBlock
        title={sp.loyal.title}
        text={`${sp.loyal.text}${contactBlock}`}
        image="/images/service-packages/loyal.avif"
      />
    </div>
  );
}
