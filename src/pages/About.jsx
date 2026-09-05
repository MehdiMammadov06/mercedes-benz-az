import { useLanguage } from '../context/LanguageContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { aboutValues } from '../data/about.js';
import Button from '../components/ui/Button.jsx';

// "Haqqımızda → Şirkət haqqında" səhifəsi (/haqqimizda).
// Hero (əyri yol şəkli + xoş gəldin başlığı) → intro (3 paraqraf) →
// dəyər kartları (satış / xidmət / hissələr).
// Mətnlər translations.js-dəki `aboutPage` blokundan (AZ/EN).
export default function About() {
  const { t, lang } = useLanguage();
  const a = t.aboutPage;

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-mb-ink">
        <img
          src="/images/about/hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />

        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-16">
          <h1 className="max-w-2xl font-display text-3xl leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {a.hero.title}
          </h1>
          <div className="mt-8">
            <Button to="/elaqe" variant="light" size="lg">
              {a.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* İntro — başlıq + 3 paraqraf (şəkilsiz) */}
      <section className="container-site py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl text-mb-ink sm:text-4xl">{a.intro.title}</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-mb-ink/80 sm:text-base">
            <p>{a.intro.p1}</p>
            <p>{a.intro.p2}</p>
            <p>{a.intro.p3}</p>
          </div>
        </div>
      </section>

      {/* Dəyər kartları */}
      <section className="container-site pb-16 sm:pb-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-mb-grey">{a.values.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl text-mb-ink sm:text-3xl">{a.values.title}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((item) => (
            <article key={item.id} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-mb-silver">
                <img
                  src={item.image}
                  alt={item.title[lang] ?? item.title.en}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-mb group-hover:scale-105"
                  onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-mb-ink">{item.title[lang] ?? item.title.en}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mb-grey">
                  {item.text[lang] ?? item.text.en}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
