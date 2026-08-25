// Rəqəmləri istifadəçinin dilinə uyğun formatlayan köməkçi funksiyalar.
// `Intl` brauzerin daxili API-sidir, əlavə kitabxana lazım deyil.

const LOCALES = {
  az: 'az-AZ',
  en: 'en-US',
};

/**
 * 176000 -> "176 000 ₼"
 */
export function formatPrice(value, lang = 'az') {
  return new Intl.NumberFormat(LOCALES[lang] ?? LOCALES.az, {
    style: 'currency',
    currency: 'AZN',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * 7.5 -> "7,5" (AZ)  /  "7.5" (EN)
 * Onluq ayırıcı dilə görə dəyişir — əl ilə nöqtə yazmaq düzgün olmaz.
 */
export function formatNumber(value, lang = 'az') {
  return new Intl.NumberFormat(LOCALES[lang] ?? LOCALES.az).format(value);
}
