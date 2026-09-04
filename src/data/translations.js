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
    about: {
      title: 'Haqqımızda',
      p1: '“Avtokapital-Azərbaycan” MMC – Mercedes-Benz Group AG-nin Mercedes-Benz markalı avtomobilləri üzrə Azərbaycandakı Rəsmi Nümayəndəliyi.',
      p2: 'Bizim məqsədimiz – şirkətin müştərilərinə qayğı göstərmək, ən yüksək səviyyəli xidməti təmin etmək, habelə şirkətə istedadlı mütəxəssisləri cəlb etmək, müştərilərin maraqlarına uyğun olaraq, kollektiv yaradıcılıq potensialının həyata keçirilməsinə imkan yaratmaq.',
      cta: 'Ətraflı',
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
    maybachBanner: {
      title: 'Yeni Mercedes-Maybach S-Class',
      subtitle: 'Tezliklə.',
      cta: 'Ətraflı',
    },
    shopping: {
      title: 'Alış-veriş alətləri',
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
      toTop: 'Yuxarı',
      rights: 'Bütün hüquqlar qorunur.',
      copyright: '© {year} Mercedes-Benz Cars Azerbaijan {rights}',
      contact: {
        title: 'Əlaqə',
        links: [{ label: 'Bizimlə əlaqə', to: '/elaqe' }],
      },
      buyers: {
        title: 'Alıcılar üçün',
        links: [
          { label: 'Mövcud təkliflər', to: '/modeller' },
          { label: 'Showroom siyahısı', to: '/elaqe' },
          { label: 'Test drayva yazılmaq', to: '/elaqe' },
        ],
      },
      owners: {
        title: 'Sahiblər üçün',
        links: [
          { label: 'Servisə yazılmaq', to: '/xidmetler' },
          { label: 'Aksessuarlar', to: '/xidmetler' },
          { label: 'Həyat tərz kolleksiyası', to: '/xidmetler' },
          { label: 'Servis paketləri', to: '/xidmetler' },
          { label: 'Orijinal hissələr', to: '/xidmetler' },
          { label: 'Təlimat Kitabçaları', to: '/xidmetler' },
        ],
      },
      legal: [
        { label: 'Şərtlər və qaydalar', to: '/haqqimizda' },
        { label: 'Kuki Siyasəti', to: '/haqqimizda' },
        { label: 'Məlumatların Mühafizəsi', to: '/haqqimizda' },
      ],
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
    about: {
      title: 'About us',
      p1: '“Avtokapital-Azerbaijan” LLC is the Official Representative of Mercedes-Benz Group AG for Mercedes-Benz branded vehicles in Azerbaijan.',
      p2: 'Our goal is to care for the company’s customers, provide the highest level of service, as well as attract talented professionals to the company and, in line with customers’ interests, create opportunities for realizing collective creative potential.',
      cta: 'Learn more',
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
    maybachBanner: {
      title: 'The new Mercedes-Maybach S-Class',
      subtitle: 'Coming soon.',
      cta: 'Learn more',
    },
    shopping: {
      title: 'Shopping tools',
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
      toTop: 'Top',
      rights: 'All rights reserved.',
      copyright: '© {year} Mercedes-Benz Cars Azerbaijan {rights}',
      contact: {
        title: 'Contact',
        links: [{ label: 'Contact us', to: '/elaqe' }],
      },
      buyers: {
        title: 'For buyers',
        links: [
          { label: 'Current offers', to: '/modeller' },
          { label: 'Showroom list', to: '/elaqe' },
          { label: 'Book a test drive', to: '/elaqe' },
        ],
      },
      owners: {
        title: 'For owners',
        links: [
          { label: 'Book a service', to: '/xidmetler' },
          { label: 'Accessories', to: '/xidmetler' },
          { label: 'Lifestyle collection', to: '/xidmetler' },
          { label: 'Service packages', to: '/xidmetler' },
          { label: 'Genuine parts', to: '/xidmetler' },
          { label: 'Manuals', to: '/xidmetler' },
        ],
      },
      legal: [
        { label: 'Terms and conditions', to: '/haqqimizda' },
        { label: 'Cookie Policy', to: '/haqqimizda' },
        { label: 'Data Protection', to: '/haqqimizda' },
      ],
    },
    placeholder: {
      title: 'This page is in progress',
      text: 'This section will be added in the next stage.',
      back: 'Back to home',
    },
  },
};
