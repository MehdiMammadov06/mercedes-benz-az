import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { ChevronUp, FacebookIcon, InstagramIcon } from '../icons/index.jsx';

// Saytın footer-i (bütün səhifələrdə görünür).
// Orijinal saytdakı kimi: "Yuxarı" düyməsi + 3 sütun link + alt sətir.
export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const f = t.footer;
  const columns = [f.contact, f.buyers, f.owners];

  // Səhifənin ən yuxarısına hamar sürüşmə
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mb-black text-white">
      {/* --- "Yuxarı" düyməsi --- */}
      <div className="border-b border-white/10">
        <button
          type="button"
          onClick={scrollToTop}
          className="mx-auto flex flex-col items-center gap-1 py-6 text-white/80 transition-colors duration-300 ease-mb hover:text-white"
          aria-label={f.toTop}
        >
          <ChevronUp className="h-5 w-5" />
          <span className="text-xs">{f.toTop}</span>
        </button>
      </div>

      {/* --- Link sütunları --- */}
      <div className="container-site grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-base font-semibold">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition-colors duration-300 ease-mb hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- Alt sətir: copyright + legal linklər + sosial --- */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-5 py-6 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>{f.copyright.replace('{year}', year).replace('{rights}', f.rights)}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {f.legal.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="transition-colors duration-300 ease-mb hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {/* Sosial ikonlar */}
            <div className="flex items-center gap-4 text-white/80">
              <a
                href="https://en-gb.facebook.com/MercedesBenzAzerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-300 ease-mb hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mercedesbenzaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-300 ease-mb hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
