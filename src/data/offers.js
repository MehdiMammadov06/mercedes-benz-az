// "Alış → Xüsusi təkliflər" (/teklifler) səhifəsinin kartları.
// Hər kart: promo banner şəkli + mavi başlıq mətni (AZ/EN) + link.
//
// `to` — karta klikləyəndə gedilən ünvan. Aid olduğu modelin SATIŞ səhifəsinə
// (mövcud avtomobillər) yönəldir: /alis?model=<Model adı>. Stock səhifəsi
// URL-dəki ?model=... dəyərini avtomatik filtr kimi tətbiq edir.
//
// Şəkillər: public/images/offers/<id>.avif  (yoxdursa boz fon qalır — sınmır).

export const offers = [
  {
    id: 'eqe',
    image: '/images/offers/eqe.avif',
    to: '/alis?model=EQE',
    title: {
      az: 'Elektrik prestijin yeni erası: Mercedes-Benz EQE.',
      en: 'A new era of electric prestige: Mercedes-Benz EQE.',
    },
  },
  {
    id: 'e-class',
    image: '/images/offers/e-class.avif',
    to: '/alis?model=E-Class',
    title: {
      az: 'Prestij və komfortun zirvəsi: Mercedes-Benz E-Class.',
      en: 'The ultimate address of prestige and comfort: Mercedes-Benz E-Class.',
    },
  },
  {
    id: 'gle-hybrid',
    image: '/images/offers/gle-hybrid.avif',
    to: '/alis?model=GLE',
    title: {
      az: 'Səmərəlilik və gücün ideal birləşməsi: Mercedes-Benz GLE Hybrid.',
      en: 'The ideal fusion of efficiency and power: Mercedes-Benz GLE Hybrid.',
    },
  },
];
