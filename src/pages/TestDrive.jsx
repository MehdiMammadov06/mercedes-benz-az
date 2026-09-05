import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { testDrive } from '../data/testDrive.js';
import { PhoneIcon, ChevronDown } from '../components/icons/index.jsx';

// "Alış → Test drive" səhifəsi (/test-drive).
// Sol: böyük interyer şəkli. Sağ: "Book a test drive" başlıq + model linkləri
// + "Contact Numbers" açılan (accordion) əlaqə nömrələri.
export default function TestDrive() {
  const { t } = useLanguage();
  const td = t.testDrive;
  const [open, setOpen] = useState(false);

  return (
    <section className="container-site py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* --- Sol: şəkil --- */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mb-silver">
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-mb-grey">
            {td.title}
          </span>
          <img
            src={testDrive.image}
            alt={td.title}
            className="relative h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
          />
        </div>

        {/* --- Sağ: məzmun --- */}
        <div>
          <h1 className="font-display text-3xl text-mb-ink sm:text-4xl">{td.title}</h1>

          {/* Model linkləri */}
          <div className="mt-6 space-y-3">
            {testDrive.models.map((model) => (
              <Link
                key={model.to}
                to={model.to}
                className="block w-fit text-mb-blue underline underline-offset-4 transition-colors hover:text-mb-blue-dark"
              >
                {model.name}
              </Link>
            ))}
          </div>

          {/* Contact Numbers accordion */}
          <div className="mt-8 max-w-md rounded-lg border border-mb-border">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-mb-ink">
                <PhoneIcon className="h-4 w-4 text-mb-grey" />
                {td.contactNumbers}
              </span>
              <ChevronDown
                className={['h-5 w-5 text-mb-grey transition-transform duration-300', open ? 'rotate-180' : ''].join(' ')}
              />
            </button>

            {open && (
              <ul className="divide-y divide-mb-border border-t border-mb-border">
                {testDrive.phones.map((p) => (
                  <li key={p.number} className="flex items-center justify-between gap-4 px-4 py-3">
                    <span className="text-sm text-mb-grey">{p.label}</span>
                    <a
                      href={`tel:${p.number.replace(/\s/g, '')}`}
                      className="shrink-0 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
                    >
                      {p.number}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
