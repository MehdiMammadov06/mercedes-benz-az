// "Bizim brendlərimiz → Mercedes-AMG" (/brendler/mercedes-amg) səhifəsinin datası.
//
// 1) amgModels — "Model cərgəsi" tab-lı slider. Kateqoriyaya görə qruplaşdırılıb.
//    Şəkillər: public/images/amg/models/<id>.avif
// 2) amgEditions — "AMG-nin 55 illiyi" yubiley karuseli (uzun mətnli kartlar).
//    Şəkillər: public/images/amg/editions/<id>.avif
//
// Şəkil yoxdursa tünd/boz fon qalır (onError), sayt sınmır.

// Model cərgəsi tab-ları (translations.js → categories bloku ilə uyğun etiketlər)
export const amgTabs = ['sedan', 'suv', 'coupe', 'cabriolet', 'hatchback', 'estates'];

export const amgModels = [
  // --- Sedan ---
  { id: 'a-class-sedan', category: 'sedan', name: 'Mercedes-AMG A-Class Sedan', image: '/images/amg/models/a-class-sedan.avif' },
  { id: 'c-class-sedan', category: 'sedan', name: 'Mercedes-AMG C-Class Sedan', image: '/images/amg/models/c-class-sedan.avif' },
  { id: 'e-class-sedan', category: 'sedan', name: 'Mercedes-AMG E-Class Sedan', image: '/images/amg/models/e-class-sedan.avif' },

  // --- SUV & Crossover ---
  { id: 'gla-suv', category: 'suv', name: 'Mercedes-AMG GLA SUV', image: '/images/amg/models/gla-suv.avif' },
  { id: 'glc-suv', category: 'suv', name: 'Mercedes-AMG GLC SUV', image: '/images/amg/models/glc-suv.avif' },
  { id: 'gle-suv', category: 'suv', name: 'Mercedes-AMG GLE SUV', image: '/images/amg/models/gle-suv.avif' },
  { id: 'g-class-suv', category: 'suv', name: 'Mercedes-AMG G-Class SUV', image: '/images/amg/models/g-class-suv.avif' },

  // --- Coupé ---
  { id: 'cle-coupe', category: 'coupe', name: 'Mercedes-AMG CLE Coupé', image: '/images/amg/models/cle-coupe.avif' },
  { id: 'gt-coupe', category: 'coupe', name: 'Mercedes-AMG GT Coupé', image: '/images/amg/models/gt-coupe.avif' },
  { id: 'gt-4door', category: 'coupe', name: 'Mercedes-AMG GT 4-Door Coupé', image: '/images/amg/models/gt-4door.avif' },

  // --- Cabriolet & Roadster ---
  { id: 'sl-roadster', category: 'cabriolet', name: 'Mercedes-AMG SL Roadster', image: '/images/amg/models/sl-roadster.avif' },
  { id: 'cle-cabriolet', category: 'cabriolet', name: 'Mercedes-AMG CLE Cabriolet', image: '/images/amg/models/cle-cabriolet.avif' },

  // --- Hatchback ---
  { id: 'a-class-hatch', category: 'hatchback', name: 'Mercedes-AMG A-Class Hatchback', image: '/images/amg/models/a-class-hatch.avif' },

  // --- Estates ---
  { id: 'c-class-estate', category: 'estates', name: 'Mercedes-AMG C-Class Estate', image: '/images/amg/models/c-class-estate.avif' },
  { id: 'e-class-estate', category: 'estates', name: 'Mercedes-AMG E-Class Estate', image: '/images/amg/models/e-class-estate.avif' },
];

export const amgEditions = [
  {
    id: 'g63',
    name: 'Mercedes-AMG G 63 SUV Edition 55',
    image: '/images/amg/editions/g63.avif',
    text: {
      az: 'Biz 55 ildir ki, performansı yenidən müəyyənləşdiririk. Buraya yolsuzluq avtomobilinin performansı daxildir. Bu G 63 xüsusi modeli təsirli bir tarixə hörmət edir və onu güclü xarakterin möhürlənmiş görünüşü ilə canlandırır. Unikal işarələr və qalın qırmızı interyeri müəyyənləşdirir, şəffaf istehsal opalit ağ parlaq və görkəmli folqa gücü xaricə aparır.',
      en: 'For 55 years we have been redefining performance — including off-road performance. This special G 63 model honours an impressive history and brings it to life with the sealed look of a strong character. Unique markings and a bold red interior define it, while the translucent opalite white and striking foil bring the power to the outside.',
    },
  },
  {
    id: 'a-class',
    name: 'Mercedes-AMG A-Class Hatchback Edition 55',
    image: '/images/amg/editions/a-class.avif',
    text: {
      az: '55 ildir ki, biz status-kvona meydan oxuyuruq. Və biz bunu elə etdik ki, yığcam bir şeyi nəhəng bir şeyə çevirək. Xüsusi loqo örtüyü və tutqun-boz təkər diskləri Mercedes-AMG A-Class-ın ilk dinamik təəssüratını ifadə edir, sükan çarxındakı 55 illik yubiley lövhəsi kimi xüsusi detallara malik güclü qara-qırmızı interyer isə unikal kombini tamamlayır. Kompakt şəkildə ifadə edildi: əvvəllər heç vaxt işarə qoymaq bu qədər asan olmamışdı.',
      en: 'For 55 years we have challenged the status quo — and we did it by turning something compact into something huge. A special logo wrap and matt-grey wheels convey the first dynamic impression of the Mercedes-AMG A-Class, while the strong black-red interior with special details such as the 55-year anniversary plaque on the steering wheel completes the unique combination. Put compactly: making a statement has never been this easy.',
    },
  },
  {
    id: 'cla',
    name: 'Mercedes-AMG CLA Coupé Edition 55',
    image: '/images/amg/editions/cla.avif',
    text: {
      az: 'CLA xüsusi modeli ilə biz ənənəvi olana qarşı çıxmaq tarixini qeyd edirik. Kupenin interyerində cəsarətli qırmızı və xüsusi yubiley loqoları üstünlük təşkil edir, kənarda isə 55 illik yubiley etiketi və xüsusi folqa ilə Kvinslend dizaynında olan tutqun disklər nəşrin unikallığını vurğulayır. Hər gəzinti bayrama çevrilir.',
      en: 'With the CLA special model, we celebrate a history of challenging convention. Bold red and special anniversary logos dominate the coupé interior, while on the outside the 55-year anniversary badge, special foil and matt wheels in Queensland design emphasise the uniqueness of the edition. Every drive becomes a celebration.',
    },
  },
  {
    id: 'gle',
    name: 'Mercedes-AMG GLE SUV Edition 55',
    image: '/images/amg/editions/gle.avif',
    text: {
      az: 'GLE xüsusi modeli parlaq qırmızı və içərisində Edition 55 işarələri, tutqun boz təkərlər və güclü eksteryer üçün dərin obsidian qara rəngi ilə status-kvonu pozur. AMG-nin 55 illiyini qeyd etmək üçün doğru şey.',
      en: 'The GLE special model breaks with the status quo — with bright red and Edition 55 markings inside, matt-grey wheels and a deep obsidian black for a powerful exterior. The right way to celebrate 55 years of AMG.',
    },
  },
];
