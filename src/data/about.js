// "Haqqımızda → Şirkət haqqında" (/haqqimizda) səhifəsinin dəyər kartları.
// Hər kart: şəkil + başlıq + mətn (çoxdilli). Səhifədə şəbəkə (grid) kimi göstərilir.
//
// Şəkillər: public/images/about/<id>.avif  (yoxdursa tünd fon qalır).

export const aboutValues = [
  {
    id: 'sales',
    image: '/images/about/sales.avif',
    title: { az: 'Rəsmi satış', en: 'Official sales' },
    text: {
      az: 'Yeni Mercedes-Benz avtomobillərinin rəsmi satışı və zavod zəmanəti ilə tam çeşid modellər.',
      en: 'Official sales of new Mercedes-Benz vehicles and a full model range backed by factory warranty.',
    },
  },
  {
    id: 'service',
    image: '/images/about/service.avif',
    title: { az: 'Texniki xidmət', en: 'Technical service' },
    text: {
      az: 'Zəmanətli və zəmanətdən sonrakı texniki xidmət, texniki və kuzov təmiri sertifikatlı mütəxəssislər tərəfindən.',
      en: 'Warranty and post-warranty maintenance, mechanical and body repairs performed by certified specialists.',
    },
  },
  {
    id: 'parts',
    image: '/images/about/parts.avif',
    title: { az: 'Orijinal hissələr', en: 'Genuine parts' },
    text: {
      az: 'Orijinal ehtiyat hissələrinin və aksesuarların satışı — avtomobiliniz üçün etibarlılıq və uzunömürlülük.',
      en: 'Sale of genuine spare parts and accessories — reliability and longevity for your vehicle.',
    },
  },
];
