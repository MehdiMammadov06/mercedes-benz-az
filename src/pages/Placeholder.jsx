import { useLanguage } from '../context/LanguageContext.jsx';
import Button from '../components/ui/Button.jsx';
import { ArrowRight } from '../components/icons/index.jsx';

// Hələ hazırlanmamış səhifələr üçün müvəqqəti şablon
export default function Placeholder({ titleKey }) {
  const { t } = useLanguage();
  const title = titleKey ? t.nav[titleKey] : t.placeholder.title;

  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="font-display text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-sm text-mb-grey">{t.placeholder.text}</p>

      <Button to="/" variant="outline-dark" size="md" className="mt-8">
        {t.placeholder.back}
        <ArrowRight />
      </Button>
    </section>
  );
}
