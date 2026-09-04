import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { navLinks } from '../../data/navigation.js';
import { useFetch } from '../../hooks/useFetch.js';
import {
  CabrioletIcon,
  CarIcon,
  ChevronRight,
  CloseIcon,
  CoupeIcon,
  ElectricIcon,
  GlobeIcon,
  HatchbackIcon,
  MenuIcon,
  MpvIcon,
  SedanIcon,
  SuvIcon,
} from '../icons/index.jsx';

// Kateqoriya ikonlarını açar-ikon xəritəsi ilə seçirik
const CATEGORY_ICONS = {
  hatchback: HatchbackIcon,
  sedan: SedanIcon,
  suv: SuvIcon,
  coupe: CoupeIcon,
  cabriolet: CabrioletIcon,
  electric: ElectricIcon,
  mpv: MpvIcon,
};

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // mobil: hansı menyu açıqdır
  const [hoveredCategory, setHoveredCategory] = useState(null); // masaüstü: flyout üçün
  const { pathname } = useLocation();

  // Modelləri bir dəfə çəkib kateqoriyaya görə qruplaşdırırıq (flyout üçün).
  const { data } = useFetch('/data/models.json');
  const modelsByCategory = useMemo(() => {
    const groups = {};
    (data?.models ?? []).forEach((model) => {
      (model.categories ?? []).forEach((cat) => {
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(model);
      });
    });
    return groups;
  }, [data]);

  // Səhifə dəyişəndə mobil menyu avtomatik bağlanır
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
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

      {/* --- Alt sətir: masaüstü naviqasiya (hover-də dropdown açılır) --- */}
      <nav className="hidden border-t border-white/10 lg:block">
        <ul className="container-site flex h-14 items-center gap-9">
          {navLinks.map((link) => (
            // `group` + `group-hover` ilə hover-də alt-menyu açılır (JS state lazım deyil)
            <li key={link.key} className="group relative flex h-full items-center">
              {/* Menyu başlığı — başqa səhifəyə keçmir, sadəcə hover-də dropdown açır */}
              <span className="flex cursor-default items-center gap-2 text-[15px] text-white/80 transition-colors duration-300 ease-mb group-hover:text-white">
                {link.icon === 'car' && <CarIcon className="h-5 w-5" />}
                {t.nav[link.key]}
              </span>

              {/* Aktiv menyunun altında mavi xətt (hover-də görünür) */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-mb-blue transition-transform duration-300 ease-mb group-hover:scale-x-100" />

              {/* --- Dropdown alt-menyu --- */}
              {link.submenu && (
                <div className="invisible absolute left-0 top-full z-50 flex translate-y-1 opacity-0 transition-all duration-200 ease-mb group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {/* Birinci sütun: kateqoriyalar */}
                  <ul
                    className="min-w-[280px] rounded-b-lg bg-white py-3 text-mb-ink shadow-xl"
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {link.submenu.map((sub) => {
                      const SubIcon = sub.icon ? CATEGORY_ICONS[sub.icon] : null;
                      // Modellər menyusunda hər kateqoriyanın öz modelləri var (flyout)
                      const catKey = link.key === 'models' ? sub.icon : null;
                      const isHovered = catKey && hoveredCategory === catKey;
                      return (
                        <li
                          key={sub.labelKey}
                          onMouseEnter={() => catKey && setHoveredCategory(catKey)}
                        >
                          <Link
                            to={sub.to}
                            className={[
                              'flex items-center justify-between gap-4 px-6 py-3 text-sm transition-colors duration-200',
                              isHovered ? 'bg-mb-silver' : 'hover:bg-mb-silver',
                            ].join(' ')}
                          >
                            <span className="flex items-center gap-3">
                              {SubIcon && <SubIcon className="h-5 w-5 text-mb-grey" />}
                              {t.navMenus[sub.labelKey]}
                            </span>
                            {SubIcon && <ChevronRight className="h-4 w-4 text-mb-grey" />}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* İkinci sütun (flyout): seçilən kateqoriyanın modelləri.
                      Yalnız Modellər menyusunda və bir kateqoriya hover olunanda görünür.
                      Eni məzmun qədər (w-max), yumşaq fade+sürüşmə ilə açılır. */}
                  {link.key === 'models' && hoveredCategory && (
                    <ul
                      key={hoveredCategory}
                      className="animate-fade-in w-[340px] rounded-b-lg bg-white py-3 text-mb-ink shadow-xl"
                      onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                    >
                      {(modelsByCategory[hoveredCategory] ?? []).map((model) => (
                        <li key={model.id}>
                          <Link
                            to={`/modeller/${model.id}`}
                            className="block px-8 py-2.5 text-sm transition-colors duration-200 hover:bg-mb-silver"
                          >
                            {model.name}
                          </Link>
                        </li>
                      ))}
                      {(modelsByCategory[hoveredCategory] ?? []).length === 0 && (
                        <li className="px-6 py-2.5 text-sm text-mb-grey">—</li>
                      )}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* --- Mobil menyu paneli (alt elementlər açılan/yığılan) --- */}
      {isMenuOpen && (
        <nav className="animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 lg:hidden">
          <ul className="container-site flex flex-col py-2">
            {navLinks.map((link) => {
              const isOpen = openSubmenu === link.key;
              return (
                <li key={link.key} className="border-b border-white/10">
                  {/* Menyu başlığı — kliklədikdə alt-menyu açılıb-yığılır */}
                  <button
                    type="button"
                    onClick={() => setOpenSubmenu(isOpen ? null : link.key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 py-4 text-base text-white/90"
                  >
                    <span className="flex items-center gap-3">
                      {link.icon === 'car' && <CarIcon className="h-5 w-5" />}
                      {t.nav[link.key]}
                    </span>
                    <ChevronRight
                      className={[
                        'h-4 w-4 transition-transform duration-300 ease-mb',
                        isOpen ? 'rotate-90' : '',
                      ].join(' ')}
                    />
                  </button>

                  {/* Alt-menyu */}
                  {isOpen && link.submenu && (
                    <ul className="animate-fade-in pb-2 pl-8">
                      {link.submenu.map((sub) => (
                        <li key={sub.labelKey}>
                          <Link
                            to={sub.to}
                            className="block py-3 text-sm text-white/70 transition-colors hover:text-white"
                          >
                            {t.navMenus[sub.labelKey]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
