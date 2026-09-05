// "In the Spotlight" / "Diqqət mərkəzində" bölməsindəki kartlar
// (orijinal saytdakı ardıcıllıqla).
//
// Başlıq (title) və mətn (text) hər iki dildə: { az, en }.
// SpotlightCard dilə görə uyğununu seçir.
//
// ŞƏKİLLƏR: hamısı public/images/spotlight/ qovluğuna .avif adı ilə qoyulur.
// Şəkil olmasa kart tünd fonla göstərilir (sayt sınmır).
//
// cta növü: "explore" | "informed" | "register"  — düymə mətnini seçir
// (translations.js-dəki spotlight.cta blokundan, o da dilə görə dəyişir).
//
// `to` — karta/düyməyə klikləyəndə gedilən ünvan. Modellə bağlı kampaniyalar
// uyğun model detal səhifəsinə, ümumi olanlar isə uyğun bölməyə yönəlir.

export const spotlightItems = [
  {
    id: 's-class-presentation',
    title: {
      az: 'Mercedes-Benz Azərbaycan yeni Mercedes-Benz S-Class-ı təqdim edir',
      en: 'Mercedes-Benz Azerbaijan present the all-new Mercedes-Benz S-Class',
    },
    text: {
      az: 'Bakı, 11 avqust 2026 — Mercedes-Benz-in flaqman modelinin eksklüziv təqdimatı.',
      en: 'Baku, August 11, 2026 — An exclusive presentation of Mercedes-Benz’s flagship model.',
    },
    image: '/images/spotlight/s-class-presentation.avif',
    cta: 'explore',
    to: '/teklifler',
  },
  {
    id: 'electric-gla',
    title: { az: 'Tamamilə yeni elektrikli GLA', en: 'The all-new electric GLA' },
    text: {
      az: 'Dünya premyerasını yaşayın və maraq bildirin.',
      en: 'Experience the world premiere and register your interest below.',
    },
    image: '/images/spotlight/electric-gla.avif',
    cta: 'informed',
    to: '/modeller/gla',
  },
  {
    id: 'all-new-gla',
    title: { az: 'Tamamilə yeni GLA', en: 'The all-new GLA' },
    text: {
      az: 'Dünya premyerasını yaşayın və maraq bildirin.',
      en: 'Experience the world premiere and register your interest below.',
    },
    image: '/images/spotlight/all-new-gla.avif',
    cta: 'informed',
    to: '/modeller/gla',
  },
  {
    id: 'maybach-gls',
    title: {
      az: 'Yeni Mercedes-Maybach GLS: sizə məxsus bir kainat',
      en: 'The new Mercedes-Maybach GLS: A cosmos of your own',
    },
    text: {
      az: 'Mercedes-Maybach yeni GLS-i təqdim etdi.',
      en: 'Mercedes-Maybach has unveiled the new GLS.',
    },
    image: '/images/spotlight/maybach-gls1.avif',
    cta: 'explore',
    to: '/modeller/maybach-gls',
  },
  {
    id: 'amg-gt-4door',
    title: { az: 'İnqilabi performans', en: 'Revolutionary Performance' },
    text: {
      az: 'Tamamilə yeni Mercedes-AMG GT 4-Qapılı Kupe.',
      en: 'The all-new Mercedes-AMG GT 4-Door Coupé.',
    },
    image: '/images/spotlight/amg-gt-4door1.avif',
    cta: 'register',
    to: '/modeller/amg-gt-4door',
  },
  {
    id: 'electric-c-class',
    title: { az: 'Tamamilə yeni elektrikli C-Class', en: 'The All-New Electric C-Class' },
    text: {
      az: 'Yeni elektrikli C-Class dəbdəbə və qabaqcıl texnologiyanı birləşdirir.',
      en: 'The all-new electric C-Class combines luxury and advanced technology.',
    },
    image: '/images/spotlight/electric-c-class.avif',
    cta: 'register',
    to: '/modeller/c-class-electric',
  },
  {
    id: 'eqs',
    title: { az: 'Yeni Mercedes-Benz EQS', en: 'The New Mercedes-Benz EQS' },
    text: {
      az: 'Elektrik dəbdəbəsinin yeni dövrü.',
      en: 'A New Era of Electric Luxury.',
    },
    image: '/images/spotlight/eqs1.avif',
    cta: 'explore',
    to: '/modeller/eqs-sedan',
  },
  {
    id: 'gle-silhouettes',
    title: {
      az: 'Üç cəsur siluet. Bir danılmaz mövcudluq.',
      en: 'Three bold silhouettes. One unmistakable presence.',
    },
    text: {
      az: 'Mercedes-Benz yeni GLE-ni təqdim edir.',
      en: 'Mercedes-Benz unveils the new GLE.',
    },
    image: '/images/spotlight/gle-silhouettes.avif',
    cta: 'explore',
    to: '/modeller/gle',
  },
  {
    id: 'electric-vle',
    title: { az: 'Yeni dövrdə məkanın yenidən tərifi', en: 'Redefining Space in a New Era' },
    text: {
      az: 'Tamamilə yeni elektrikli Mercedes-Benz VLE.',
      en: 'The All-New Electric Mercedes-Benz VLE.',
    },
    image: '/images/spotlight/electric-vle.avif',
    cta: 'explore',
    to: '/modeller/v-class',
  },
  {
    id: 's-class-luxury',
    title: {
      az: 'Mercedes-Benz S-Class: dəbdəbə və innovasiyanın yeni dövrü',
      en: 'Mercedes-Benz S-Class: A New Era of Luxury and Innovation',
    },
    text: {
      az: 'Yeni flaqman — Mercedes-Benz S-Class.',
      en: 'The new flagship, the Mercedes-Benz S-Class.',
    },
    image: '/images/spotlight/s-class-luxury.avif',
    cta: 'explore',
    to: '/teklifler',
  },
  {
    id: '140-years',
    title: {
      az: 'Mercedes-Benz: 140 illik innovasiya və mobilliyin gələcəyi',
      en: 'Mercedes-Benz: 140 Years of Innovation and Shaping the Future of Mobility',
    },
    text: {
      az: 'Karl Benz ilk avtomobili patentləşdirdiyi gündən bəri.',
      en: 'Ever since Karl Benz patented the first automobile.',
    },
    image: '/images/spotlight/140-years.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'cla-car-of-the-year',
    title: {
      az: 'Tamamilə yeni CLA “2026-nın Avtomobili” seçildi',
      en: 'The all-new CLA is crowned the “Car of the Year 2026”',
    },
    text: {
      az: 'Tamamilə yeni Mercedes-Benz CLA mükafata layiq görüldü.',
      en: 'The all-new Mercedes-Benz CLA has been awarded.',
    },
    image: '/images/spotlight/cla-car-of-the-year.avif',
    cta: 'explore',
    to: '/modeller/cla-coupe',
  },
  {
    id: 'concept-cars',
    title: { az: 'Konsept avtomobillər', en: 'Concept Cars' },
    text: { az: 'Gələcəyə xoş gəlmisiniz.', en: 'Welcome to the future.' },
    image: '/images/spotlight/concept-cars.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'lead-in-intelligence',
    title: { az: 'İntellektdə liderlik', en: 'Lead in Intelligence' },
    text: {
      az: 'Sadəcə avtomobildən artıq. Bu — Mercedes-Benz.',
      en: 'More than a car. A Mercedes-Benz.',
    },
    image: '/images/spotlight/lead-in-intelligence.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'manufaktur',
    title: { az: 'MANUFAKTUR', en: 'MANUFAKTUR' },
    text: {
      az: 'Fərdilik ən cəlbedici formada.',
      en: 'Individuality at its most alluring.',
    },
    image: '/images/spotlight/manufaktur.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'defining-class',
    title: { az: 'Sinfi müəyyən edən', en: 'Defining Class' },
    text: { az: '1886-cı ildən bəri.', en: 'Since 1886.' },
    image: '/images/spotlight/defining-class.avif',
    cta: 'explore',
    to: '/haqqimizda',
  },
  {
    id: 'eqe-suv',
    title: { az: 'Yeni EQE SUV', en: 'The New EQE SUV' },
    text: { az: 'EQE SUV.', en: 'EQE SUV.' },
    image: '/images/spotlight/eqe-suv.avif',
    cta: 'explore',
    to: '/modeller/eqe-suv',
  },
  {
    id: 'dolby-atmos',
    title: { az: 'Dolby Atmos', en: 'Dolby Atmos' },
    text: {
      az: 'Yeni səs təcrübəsi ilə sürün.',
      en: 'Driving a new sound experience.',
    },
    image: '/images/spotlight/dolby-atmos.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'night-series',
    title: { az: 'Night Series', en: 'Night Series' },
    text: { az: 'Zirvədən o tərəfə xoş gəlmisiniz.', en: 'Welcome to Beyond.' },
    image: '/images/spotlight/night-series.avif',
    cta: 'explore',
    to: '/brendler',
  },
  {
    id: 'design-concept',
    title: { az: 'Dizayn və konsept avtomobillər', en: 'Design & Concept Vehicles' },
    text: { az: 'Gələcəyə xoş gəlmisiniz.', en: 'Welcome to the future.' },
    image: '/images/spotlight/design-concept.avif',
    cta: 'explore',
    to: '/brendler',
  },
];
