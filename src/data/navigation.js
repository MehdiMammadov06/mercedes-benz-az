// Naviqasiya linkləri. `key` sahəsi translations.js-dəki `nav` açarları ilə üst-üstə düşür.
// Bu fayl həm Header, həm də App.jsx-dəki route-lar üçün tək mənbədir.
//
// `submenu` — menyu üzərinə mouse gələndə açılan alt-menyu (dropdown).
// Alt elementlərin `label`-ı translations.js-dəki `navMenus` blokundan gəlir (AZ/EN).

export const navLinks = [
  {
    key: 'models',
    path: '/modeller',
    icon: 'car',
    submenu: [
      { labelKey: 'hatchback', to: '/modeller?category=hatchback', icon: 'hatchback' },
      { labelKey: 'sedan', to: '/modeller?category=sedan', icon: 'sedan' },
      { labelKey: 'suv', to: '/modeller?category=suv', icon: 'suv' },
      { labelKey: 'coupe', to: '/modeller?category=coupe', icon: 'coupe' },
      { labelKey: 'cabriolet', to: '/modeller?category=cabriolet', icon: 'cabriolet' },
      { labelKey: 'electric', to: '/modeller?category=electric', icon: 'electric' },
      { labelKey: 'mpv', to: '/modeller?category=mpv', icon: 'mpv' },
    ],
  },
  {
    key: 'buy',
    path: '/alis',
    submenu: [
      { labelKey: 'availableCars', to: '/alis' },
      { labelKey: 'specialOffers', to: '/teklifler' },
      { labelKey: 'showroomList', to: '/showroom' },
      { labelKey: 'testDrive', to: '/test-drive' },
    ],
  },
  {
    key: 'services',
    path: '/xidmetler',
    submenu: [
      { labelKey: 'bookService', to: '/xidmetler/servise-yazilmaq' },
      { labelKey: 'accessories', to: '/xidmetler/aksesuarlar' },
      { labelKey: 'lifestyle', to: '/xidmetler/kolleksiya' },
      { labelKey: 'servicePackages', to: '/xidmetler/servis-paketleri' },
      { labelKey: 'genuineParts', to: '/xidmetler' },
    ],
  },
  {
    key: 'brands',
    path: '/brendler',
    submenu: [
      { labelKey: 'amg', to: '/brendler' },
      { labelKey: 'maybach', to: '/brendler' },
      { labelKey: 'innovation140', to: '/brendler' },
      { labelKey: 'gClass', to: '/brendler' },
    ],
  },
  {
    key: 'about',
    path: '/haqqimizda',
    submenu: [
      { labelKey: 'company', to: '/haqqimizda' },
      { labelKey: 'compliance', to: '/haqqimizda' },
      { labelKey: 'reports', to: '/haqqimizda' },
    ],
  },
];
