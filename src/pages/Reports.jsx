import { useLanguage } from '../context/LanguageContext.jsx';

// "Haqqımızda → Hesabatlar" səhifəsi (/haqqimizda/hesabatlar).
// Sadə səhifə: şirkət adı + hesabat təsviri + "YÜKLƏ" linki (PDF-ə aparır).
// Mətnlər translations.js-dəki `reports` blokundan (AZ/EN).
export default function Reports() {
  const { t } = useLanguage();
  const r = t.reports;

  return (
    <section className="container-site py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="font-display text-2xl text-mb-ink sm:text-3xl">{r.company}</h1>

        <p className="mt-6 text-sm leading-relaxed text-mb-ink/80 sm:text-base">
          {r.description}
        </p>

        <p className="mt-10 text-sm text-mb-ink/80 sm:text-base">
          {r.label}{' '}
          <a
            href={r.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-mb-blue underline hover:no-underline"
          >
            {r.download}
          </a>
        </p>
      </div>
    </section>
  );
}
