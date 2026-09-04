import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';

// Ana səhifədəki "Haqqımızda" bölməsi.
// Başlıq (font-display) + iki paraqraf + mavi "Ətraflı" düyməsi.
// Mətnlər translations.js-dəki `about` blokundan (AZ/EN).
export default function About() {
  const { t } = useLanguage();

  return (
    <section className="container-site py-16 sm:py-20 lg:py-24">
      <h2 className="font-display text-4xl text-mb-ink sm:text-5xl">{t.about.title}</h2>

      <div className="mt-8 max-w-4xl space-y-5 text-sm leading-relaxed text-mb-grey sm:text-base">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
      </div>

      <Button to="/haqqimizda" variant="primary" size="lg" className="mt-8">
        {t.about.cta}
      </Button>
    </section>
  );
}
