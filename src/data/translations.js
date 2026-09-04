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
      title: 'Mercedes-Benz E-Class biznes sedanının təcəssümü',
      subtitle: 'Qabaqcıl texnologiyalar, komfort və prestij — 69 140 €-dan',
      primaryCta: 'Mövcud modellər',
      secondaryCta: 'Ətraflı',
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
    services: {
      title: 'Sizin üçün xidmətlər',
      subtitle: 'Mercedes-Benz sahibliyini asan və qayğısız edən həllər.',
      items: [
        {
          title: 'Test-drive',
          text: 'Bəyəndiyiniz modeli seçin və sürücü təcrübəsini özünüz yaşayın.',
          cta: 'Qeydiyyatdan keç',
        },
        {
          title: 'Maliyyə həlləri',
          text: 'Sizə uyğun lizinq və kredit variantları ilə arzunuza yaxınlaşın.',
          cta: 'Ətraflı',
        },
        {
          title: 'Servis və baxım',
          text: 'Rəsmi servis mərkəzlərində orijinal ehtiyat hissələri və peşəkar qulluq.',
          cta: 'Servis yaz',
        },
      ],
    },
    promo: {
      title: 'Mercedes-Benz dünyasını kəşf edin',
      text: 'Xüsusi təkliflər, yeni modellər və unikal təcrübələr sizi gözləyir.',
      cta: 'Bizimlə əlaqə',
    },
    spotlight: {
      title: 'Diqqət mərkəzində',
      subtitle: 'Mercedes-Benz-dən ən son yenilikləri kəşf edin.',
      cta: {
        explore: 'Ətraflı bax',
        informed: 'Məlumat al',
        register: 'Maraq bildir',
      },
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
      suv: 'Yolsuzluq avtomobilləri və Krossoverlər',
      coupe: 'Kupe',
      cabriolet: 'Kabriolet və Roadster',
      hatchback: 'Heçbek',
      mpv: 'MPV',
      estates: 'Estates',
      electric: 'Elektrik',
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
      title: 'The essence of the Mercedes-Benz E-Class business sedan',
      subtitle: 'Advanced technology, comfort and prestige — from €69,140',
      primaryCta: 'Available models',
      secondaryCta: 'Learn more',
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
    services: {
      title: 'Services for you',
      subtitle: 'Solutions that make Mercedes-Benz ownership easy and carefree.',
      items: [
        {
          title: 'Test drive',
          text: 'Choose the model you like and experience the drive yourself.',
          cta: 'Sign up',
        },
        {
          title: 'Financial solutions',
          text: 'Get closer to your dream with leasing and credit options that suit you.',
          cta: 'Learn more',
        },
        {
          title: 'Service & maintenance',
          text: 'Genuine spare parts and professional care at official service centers.',
          cta: 'Book service',
        },
      ],
    },
    promo: {
      title: 'Discover the world of Mercedes-Benz',
      text: 'Special offers, new models and unique experiences await you.',
      cta: 'Contact us',
    },
    spotlight: {
      title: 'In the Spotlight',
      subtitle: 'Discover the latest from Mercedes-Benz.',
      cta: {
        explore: 'Explore Now',
        informed: 'Keep me Informed',
        register: 'Register your interest',
      },
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
      suv: 'Off-road vehicles and Crossovers',
      coupe: 'Coupe',
      cabriolet: 'Cabriolet and Roadster',
      hatchback: 'Hatchback',
      mpv: 'MPV',
      estates: 'Estates',
      electric: 'Electric',
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
