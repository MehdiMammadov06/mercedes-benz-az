import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';

// Ana səhifənin sonundakı tünd çağırış (CTA) banneri.
export default function PromoBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-mb-black py-20 text-center text-white sm:py-24">
      <div className="container-site flex flex-col items-center">
        <h2 className="max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl">
          {t.promo.title}
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/80 sm:text-base">{t.promo.text}</p>
        <Button to="/elaqe" variant="light" size="lg" className="mt-8">
          {t.promo.cta}
        </Button>
      </div>
    </section>
  );
}
