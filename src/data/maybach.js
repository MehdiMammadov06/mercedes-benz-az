// "Bizim brendlərimiz → Mercedes-Maybach" (/brendler/mercedes-maybach) datası.
//
// maybachModels — "Model cərgəsi" sadə slideri (tab yoxdur). Şəkil + ad.
//   Şəkillər: public/images/maybach/models/<id>.avif
//
// Model detal bölmələri (GLS, S-Class) və Night Series mətnləri translations.js-dədir.
// Şəkil yoxdursa boz/ağ fon qalır (onError).

export const maybachModels = [
  { id: 'sl', name: 'Mercedes-Maybach SL', image: '/images/maybach/models/sl.avif' },
  { id: 's-class', name: 'Mercedes-Maybach S-Class', image: '/images/maybach/models/s-class.avif' },
  { id: 'eqs-suv', name: 'Mercedes-Maybach EQS SUV', image: '/images/maybach/models/eqs-suv.avif' },
];
