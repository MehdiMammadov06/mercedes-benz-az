// "Xidmətlər → Orijinal Hissələr" (/xidmetler/orijinal-hisseler) səhifəsinin
// kateqoriya kartları. Hər kart: şəkil + ad (çoxdilli). Karusel kimi göstərilir.
//
// Şəkillər: public/images/genuine-parts/<id>.avif  (yoxdursa tünd fon qalır).

export const partCategories = [
  {
    id: 'brakes',
    name: { az: 'Təhlükəsizliyiniz üçün effektiv əyləc', en: 'Effective braking for your safety' },
    image: '/images/genuine-parts/brakes.avif',
  },
  {
    id: 'engine-oil',
    name: { az: 'Mühərrikinizi qorumaq üçün orijinal mühərrik yağı', en: 'Genuine engine oil to protect your engine' },
    image: '/images/genuine-parts/engine-oil.avif',
  },
  {
    id: 'optimal-service',
    name: { az: 'Mercedes-Benz üçün optimal xidmət', en: 'Optimal service for your Mercedes-Benz' },
    image: '/images/genuine-parts/optimal-service.avif',
  },
  {
    id: 'high-quality',
    name: { az: 'Pis hallar üçün yüksək keyfiyyət', en: 'High quality for demanding conditions' },
    image: '/images/genuine-parts/high-quality.avif',
  },
  {
    id: 'battery',
    name: { az: 'Etibarlı enerji: orijinal akkumulyatorlar', en: 'Reliable energy: genuine batteries' },
    image: '/images/genuine-parts/battery.avif',
  },
];
