import { useLanguage } from '../../context/LanguageContext.jsx';
import Button from '../ui/Button.jsx';

const BANNER_IMAGE = '/images/maybachbaner.avif';

export default function MaybachBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[65vh] max-h-[760px] min-h-[420px] w-full overflow-hidden bg-mb-ink sm:h-[75vh] lg:h-[82vh]">
      {/* Fon */}
      <img
        src={BANNER_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent sm:from-black/60 sm:via-black/20" />

      <div className="container-site relative flex h-full flex-col justify-center">
        <h2 className="max-w-[14ch] font-display text-3xl leading-[1.1] text-white text-shadow-hero sm:text-4xl lg:text-5xl xl:text-6xl">
          {t.maybachBanner.title}
        </h2>

        <p className="mt-4 text-sm font-medium text-white/90 text-shadow-hero sm:mt-5 sm:text-base">
          {t.maybachBanner.subtitle}
        </p>

        <div className="mt-6 sm:mt-8">
          <Button to="/modeller" variant="primary" size="lg">
            {t.maybachBanner.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
