import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';
import { ArrowRight } from '../icons/index.jsx';

// Ana səhifədəki "Sizin üçün xidmətlər" bölməsi — 3 kartlıq şəbəkə.
// Mətnlər translations.js-dəki `services` blokundan gəlir.
export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-mb-silver py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="font-display text-3xl text-mb-ink sm:text-4xl">{t.services.title}</h2>
          <p className="mt-2 text-sm text-mb-grey sm:text-base">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.services.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-lg bg-white p-7 transition-shadow duration-300 ease-mb hover:shadow-xl"
            >
              <h3 className="font-display text-xl text-mb-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mb-grey">{item.text}</p>
              <Button to="/elaqe" variant="outline-dark" size="sm" className="mt-6 self-start">
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
