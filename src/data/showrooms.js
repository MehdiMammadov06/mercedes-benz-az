// "Alış → Showroom siyahısı" (Dealer Locator, /showroom) səhifəsinin dilerləri.
// Backend/real xəritə API-si yoxdur — xəritə Google Maps embed (iframe) ilə
// göstərilir (API açarı lazım deyil). Seçilmiş dilerə görə iframe yenilənir.
//
// Logo: favicon.svg (Mercedes ulduzu) istifadə olunur — hər dilerdə eynidir.

export const showrooms = [
  {
    id: 'absheron',
    name: 'Mercedes Absheron Automobile Center LLC',
    address: {
      az: 'Heydər Əliyev pr. 191, Bakı',
      en: 'Heydar Aliyev Ave, 191, Baku',
    },
    phone: '*8885',
    // Google Maps embed üçün axtarış sorğusu (yer adı)
    mapQuery: 'Mercedes-Benz Absheron Automobile Center Baku',
    hours: {
      mon: '09:00–18:30',
      tue: '09:00–18:30',
      wed: '09:00–18:30',
      thu: '09:00–18:30',
      fri: '09:00–18:30',
      sat: '10:00–17:00',
      sun: '11:00–16:00',
    },
  },
  {
    id: 'autostar',
    name: 'AutoStar Kaukasus GmbH Azerbaijan LLC',
    address: {
      az: 'Babək pr. 1145, AZ1025, Bakı',
      en: 'Babek Avenue 1145, AZ1025, Baku',
    },
    phone: '*5545',
    mapQuery: 'Mercedes-Benz AutoStar Qafqaz GmbH Baku',
    hours: {
      mon: '09:00–18:30',
      tue: '09:00–18:30',
      wed: '09:00–18:30',
      thu: '09:00–18:30',
      fri: '09:00–18:30',
      sat: '10:00–17:00',
      sun: '11:00–16:00',
    },
  },
];
