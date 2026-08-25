import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { navLinks } from '../../data/navigation.js';
import { MercedesStar } from '../icons/index.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mb-black text-white">
      <div className="container-site py-12">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" aria-label={t.header.home}>
            <MercedesStar className="h-11 w-11" strokeWidth={2.5} />
          </Link>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  className="text-sm text-white/80 transition-colors duration-300 ease-mb hover:text-white"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Mercedes-Benz Azərbaycan. {t.footer.rights}
          </p>
          <p>{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
