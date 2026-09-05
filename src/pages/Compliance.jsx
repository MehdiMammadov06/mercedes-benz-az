import { useLanguage } from '../context/LanguageContext.jsx';

// "Haqqımızda → Compliance" səhifəsi (/haqqimizda/compliance).
// Sadə mətn səhifəsi: başlıq + giriş + prinsiplər siyahısı + paraqraflar.
// Sonuncu paraqrafda {email} və {phone} yerləri klikləyən linklərlə əvəz olunur.
// Mətnlər translations.js-dəki `compliance` blokundan (AZ/EN).
export default function Compliance() {
  const { t } = useLanguage();
  const c = t.compliance;

  // {email} / {phone} placeholder-larını linklərə çevirir.
  const renderWithLinks = (text) => {
    const parts = text.split(/(\{email\}|\{phone\})/g);
    return parts.map((part, i) => {
      if (part === '{email}') {
        return (
          <a key={i} href={`mailto:${c.email}`} className="text-mb-blue underline hover:no-underline">
            {c.email}
          </a>
        );
      }
      if (part === '{phone}') {
        const tel = c.phone.replace(/\s+/g, '');
        return (
          <a key={i} href={`tel:${tel}`} className="text-mb-blue underline hover:no-underline">
            {c.phone}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="container-site py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl text-mb-ink sm:text-4xl">{c.title}</h1>

        <p className="mt-8 text-sm leading-relaxed text-mb-ink/80 sm:text-base">{c.intro}</p>

        <ul className="mt-4 space-y-2">
          {c.principles.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mb-ink/80 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mb-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-mb-ink/80 sm:text-base">
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <p>{renderWithLinks(c.p3)}</p>
        </div>
      </div>
    </section>
  );
}
