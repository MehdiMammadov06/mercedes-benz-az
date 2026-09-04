import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { navLinks } from '../../data/navigation.js';
import { CarIcon, CloseIcon, GlobeIcon, MenuIcon } from '../icons/index.jsx';

export default function Header() {
  const { t, toggleLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Səhifə dəyişəndə mobil menyu avtomatik bağlanır
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Mobil menyu açıq olanda arxa fonun sürüşməsini dayandırırıq
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-mb-black text-white">
      {/* --- Üst sətir: loqo, 140 il bloku, dil dəyişdirici --- */}
      <div className="container-site flex h-20 items-center justify-between sm:h-24">
        <Link to="/" aria-label={t.header.home} className="shrink-0">
          <img
            src="/favicon.svg"
            alt="Mercedes-Benz"
            className="h-12 w-12 sm:h-14 sm:w-14"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* 140 YEARS OF INNOVATION — orijinalda şəkildir (innovation.png) */}
          <img
            src="/images/innovation.png"
            alt={`140 ${t.header.anniversary}`}
            className="hidden h-8 w-auto sm:block lg:h-9"
          />

          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
          >
            <GlobeIcon className="h-4 w-4" />
            {t.langSwitchLabel}
          </button>

          {/* Mobil menyu düyməsi */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
            className="lg:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* --- Alt sətir: masaüstü naviqasiya --- */}
      <nav className="hidden border-t border-white/10 lg:block">
        <ul className="container-site flex h-14 items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.key}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2 text-[15px] transition-colors duration-300 ease-mb',
                    isActive ? 'text-white' : 'text-white/80 hover:text-white',
                  ].join(' ')
                }
              >
                {link.icon === 'car' && <CarIcon className="h-5 w-5" />}
                {t.nav[link.key]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Mobil menyu paneli --- */}
      {isMenuOpen && (
        <nav className="animate-fade-in border-t border-white/10 lg:hidden">
          <ul className="container-site flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 border-b border-white/10 py-4 text-base',
                      isActive ? 'text-white' : 'text-white/80',
                    ].join(' ')
                  }
                >
                  {link.icon === 'car' && <CarIcon className="h-5 w-5" />}
                  {t.nav[link.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
