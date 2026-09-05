// "Alış → Test drive" (/test-drive) səhifəsinin məzmunu.
//   image  — sol tərəfdəki böyük interyer şəkli
//   models — sağ tərəfdəki model linkləri (aid model detal səhifəsinə gedir)
//   phones — "Contact Numbers" açılanda görünən əlaqə nömrələri
//
// Şəkil: public/images/test-drive.avif  (yoxdursa boz fon qalır — sınmır).

export const testDrive = {
  image: '/images/test-drive.avif',
  models: [
    { name: 'GLE 53 AMG Coupé', to: '/modeller/gle-coupe' },
    { name: 'EQS 580 SUV', to: '/modeller/eqs-suv' },
  ],
  phones: [
    { label: 'Mercedes Absheron Automobile Center LLC', number: '*8885' },
    { label: 'AutoStar Kaukasus GmbH Azerbaijan LLC', number: '*5545' },
  ],
};
