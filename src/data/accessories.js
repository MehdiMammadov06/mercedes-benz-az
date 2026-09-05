// "Xidmətlər → Aksesuarlar" (/xidmetler/aksesuarlar) səhifəsinin kateqoriya
// kartları. Hər kart: şəkil + ad (çoxdilli). Karusel kimi göstərilir.
//
// Şəkillər: public/images/accessories/<id>.avif  (yoxdursa tünd fon qalır).

export const accessoryCategories = [
  {
    id: 'amg',
    name: { az: 'AMG aksesuarları', en: 'AMG accessories' },
    image: '/images/accessories/amg.avif',
  },
  {
    id: 'wheels',
    name: { az: 'Təkərlər', en: 'Wheels' },
    image: '/images/accessories/wheels.avif',
  },
  {
    id: 'telematics',
    name: { az: 'Telematika', en: 'Telematics' },
    image: '/images/accessories/telematics.avif',
  },
  {
    id: 'comfort',
    name: { az: 'Rahatlıq', en: 'Comfort' },
    image: '/images/accessories/comfort.avif',
  },
  {
    id: 'child-seats',
    name: { az: 'Uşaq oturacaqları', en: 'Child seats' },
    image: '/images/accessories/child-seats.avif',
  },
];
