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
      { labelKey: 'hatchback', to: '/modeller?category=hatchback' },
      { labelKey: 'sedan', to: '/modeller?category=sedan' },
      { labelKey: 'suv', to: '/modeller?category=suv' },
      { labelKey: 'coupe', to: '/modeller?category=coupe' },
      { labelKey: 'cabriolet', to: '/modeller?category=cabriolet' },
      { labelKey: 'electric', to: '/modeller?category=electric' },
      { labelKey: 'mpv', to: '/modeller?category=mpv' },
    ],
  },
  {
    key: 'buy',
    path: '/alis',
    submenu: [
      { labelKey: 'availableCars', to: '/modeller' },
      { labelKey: 'specialOffers', to: '/alis' },
      { labelKey: 'showroomList', to: '/elaqe' },
      { labelKey: 'testDrive', to: '/elaqe' },
    ],
  },
  {
    key: 'services',
    path: '/xidmetler',
    submenu: [
      { labelKey: 'manuals', to: '/xidmetler' },
      { labelKey: 'bookService', to: '/xidmetler' },
      { labelKey: 'accessories', to: '/xidmetler' },
      { labelKey: 'lifestyle', to: '/xidmetler' },
      { labelKey: 'servicePackages', to: '/xidmetler' },
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
