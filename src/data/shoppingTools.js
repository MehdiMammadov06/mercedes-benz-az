// "Alış-veriş alətləri" bölməsindəki kartlar (bento/mozaika grid).
// Orijinal saytdakı düzülüş və mətnlərlə.
//
// Başlıqlar hər iki dildə { az, en }.
// ŞƏKİLLƏR: public/images/shopping/ qovluğuna .avif adı ilə qoyulur.
// Şəkil olmasa kart tünd fonla göstərilir (sayt sınmır).
//
// `span` — kartın grid-də tutduğu yer (böyük sol kart 2x2 və s.).
//   Tailwind klasslarına birbaşa çevrilir (aşağıda ShoppingTools.jsx-də).

export const shoppingTools = [
  {
    id: 'offers',
    title: { az: 'Mövcud təkliflər', en: 'Current offers' },
    image: '/images/shopping/offers.avif',
    to: '/modeller',
    span: 'big', // böyük sol kart (2 sütun × 2 sıra)
  },
  {
    id: 'service',
    title: { az: 'Servisə yazılmaq', en: 'Book a service' },
    image: '/images/shopping/service.avif',
    to: '/xidmetler',
    span: 'tall', // hündür kart (2 sıra)
  },
  {
    id: 'showroom',
    title: { az: 'Showroom siyahısı', en: 'Showroom list' },
    image: '/images/shopping/showroom.avif',
    to: '/elaqe',
    span: 'small', // kiçik kart (1 sıra)
  },
  {
    id: 'test-drive',
    title: { az: 'Test Drayva yazıl', en: 'Book a test drive' },
    image: '/images/shopping/test-drive.avif',
    to: '/elaqe',
    span: 'tall', // hündür kart (2 sıra)
  },
  {
    id: 'buses',
    title: { az: 'Avtobuslar', en: 'Buses' },
    image: '/images/shopping/buses.avif',
    to: '/modeller',
    span: 'small',
  },
  {
    id: 'trucks',
    title: { az: 'Yük avtomobilləri', en: 'Trucks' },
    image: '/images/shopping/trucks.avif',
    to: '/modeller',
    span: 'small',
  },
  {
    id: 'vans',
    title: { az: 'Aztonnajlı avtomobillər', en: 'Vans' },
    image: '/images/shopping/vans.avif',
    to: '/modeller',
    span: 'small',
  },
];
