// "Xidmətlər → Həyat Tərzi Kolleksiyası" (/xidmetler/kolleksiya) səhifəsinin
// kateqoriya kartları. Hər kart: şəkil + ad (çoxdilli). Karusel kimi göstərilir.
//
// Şəkillər: public/images/collection/<id>.avif  (yoxdursa tünd fon qalır).

export const collectionCategories = [
  {
    id: 'new',
    name: { az: 'Yeniliklər', en: 'New arrivals' },
    image: '/images/collection/new.avif',
  },
  {
    id: 'exclusive-sale',
    name: { az: 'Xüsusi və SATIŞ', en: 'Exclusive & SALE' },
    image: '/images/collection/exclusive-sale.avif',
  },
  {
    id: 'fashion-beauty',
    name: { az: 'Moda və Gözəllik', en: 'Fashion & Beauty' },
    image: '/images/collection/fashion-beauty.avif',
  },
  {
    id: 'home-living',
    name: { az: 'Ev və Yaşayış', en: 'Home & Living' },
    image: '/images/collection/home-living.avif',
  },
  {
    id: 'travel-outdoor',
    name: { az: 'Səyahət və Açıq hava', en: 'Travel & Outdoor' },
    image: '/images/collection/travel-outdoor.avif',
  },
  {
    id: 'watches',
    name: { az: 'Saatlar', en: 'Watches' },
    image: '/images/collection/watches.avif',
  },
  {
    id: 'model-cars',
    name: { az: 'Model avtomobillər', en: 'Model cars' },
    image: '/images/collection/model-cars.avif',
  },
];
