// Bütün sayt mətnləri burada saxlanılır (AZ / EN).
// Yeni mətn əlavə edəndə hər iki dilə də yazmağı unutma.
//
// QEYD: models.json faylında yalnız NEYTRAL açarlar var ("petrol", "suv"),
// onların adları burada tərcümə olunur. Belə olanda data faylını hər dil üçün
// təkrarlamağa ehtiyac qalmır.

export const translations = {
  az: {
    langSwitchLabel: 'English',
    nav: {
      models: 'Modellərimiz',
      buy: 'Alış',
      services: 'Xidmətlər',
      brands: 'Brendlərimiz',
      about: 'Haqqımızda',
    },
    header: {
      anniversary: 'İL İNNOVASİYA',
      openMenu: 'Menyunu aç',
      closeMenu: 'Menyunu bağla',
      home: 'Ana səhifə',
    },
    hero: {
      title: 'Yeni mövsüm, yeni imkanlar.',
      subtitle: 'Seçilmiş modellərdə xüsusi təkliflərdən yararlanın.',
      primaryCta: 'Ətraflı öyrən',
      secondaryCta: 'Müraciət et',
    },
    widget: {
      contact: 'Müraciət edin',
    },
    common: {
      loading: 'Yüklənir...',
      error: 'Məlumat yüklənərkən xəta baş verdi',
      retry: 'Yenidən yoxla',
      from: 'başlayan qiymət',
      details: 'Ətraflı',
      new: 'Yeni',
    },
    models: {
      title: 'Modellərimiz',
      subtitle: 'Mercedes-Benz model sıramızı kəşf edin.',
      searchPlaceholder: 'Model axtar...',
      resultCount: 'model tapıldı',
      noResults: 'Axtarışa uyğun model tapılmadı.',
      clearFilters: 'Filtrləri sıfırla',
      sortLabel: 'Sırala',
      sort: {
        default: 'Standart',
        priceAsc: 'Qiymət: aşağıdan yuxarı',
        priceDesc: 'Qiymət: yuxarıdan aşağı',
        nameAsc: 'Ad: A-Z',
        powerDesc: 'Güc: yuxarıdan aşağı',
      },
    },
    categories: {
      all: 'Hamısı',
      sedan: 'Sedan',
      suv: 'SUV',
      coupe: 'Kupe',
      cabriolet: 'Kabriolet',
      electric: 'Elektrik',
      van: 'Van',
    },
    fuel: {
      petrol: 'Benzin',
      diesel: 'Dizel',
      hybrid: 'Plug-in hibrid',
      electric: 'Elektrik',
    },
    transmission: {
      automatic: 'Avtomatik',
      manual: 'Mexaniki',
    },
    specs: {
      power: 'Güc',
      acceleration: '0–100 km/s',
      topSpeed: 'Maksimum sürət',
      fuel: 'Yanacaq növü',
      transmission: 'Sürətlər qutusu',
      seats: 'Oturacaq sayı',
      range: 'Yürüş məsafəsi',
      units: {
        hp: 'a.g.',
        seconds: 'san',
        kmh: 'km/s',
        km: 'km',
      },
    },
    footer: {
      rights: 'Bütün hüquqlar qorunur.',
      disclaimer: 'Bu sayt tədris məqsədi ilə hazırlanmış layihədir.',
    },
    placeholder: {
      title: 'Bu səhifə hazırlanır',
      text: 'Bu bölmə növbəti mərhələdə əlavə olunacaq.',
      back: 'Ana səhifəyə qayıt',
    },
  },

  en: {
    langSwitchLabel: 'Azerbaijani',
    nav: {
      models: 'Our Models',
      buy: 'Buy',
      services: 'Services',
      brands: 'Our Brands',
      about: 'About us',
    },
    header: {
      anniversary: 'YEARS OF INNOVATION',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Home',
    },
    hero: {
      title: 'New season, new opportunities.',
      subtitle: 'Enjoy offers on selected models.',
      primaryCta: 'Know more',
      secondaryCta: 'Enquire Now',
    },
    widget: {
      contact: 'Contact us',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred while loading data',
      retry: 'Try again',
      from: 'starting price',
      details: 'Details',
      new: 'New',
    },
    models: {
      title: 'Our Models',
      subtitle: 'Discover our Mercedes-Benz model range.',
      searchPlaceholder: 'Search model...',
      resultCount: 'models found',
      noResults: 'No models match your search.',
      clearFilters: 'Reset filters',
      sortLabel: 'Sort',
      sort: {
        default: 'Default',
        priceAsc: 'Price: low to high',
        priceDesc: 'Price: high to low',
        nameAsc: 'Name: A-Z',
        powerDesc: 'Power: high to low',
      },
    },
    categories: {
      all: 'All',
      sedan: 'Sedan',
      suv: 'SUV',
      coupe: 'Coupe',
      cabriolet: 'Cabriolet',
      electric: 'Electric',
      van: 'Van',
    },
    fuel: {
      petrol: 'Petrol',
      diesel: 'Diesel',
      hybrid: 'Plug-in hybrid',
      electric: 'Electric',
    },
    transmission: {
      automatic: 'Automatic',
      manual: 'Manual',
    },
    specs: {
      power: 'Power',
      acceleration: '0–100 km/h',
      topSpeed: 'Top speed',
      fuel: 'Fuel type',
      transmission: 'Transmission',
      seats: 'Seats',
      range: 'Range',
      units: {
        hp: 'hp',
        seconds: 's',
        kmh: 'km/h',
        km: 'km',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      disclaimer: 'This website is a project created for educational purposes.',
    },
    placeholder: {
      title: 'This page is in progress',
      text: 'This section will be added in the next stage.',
      back: 'Back to home',
    },
  },
};
