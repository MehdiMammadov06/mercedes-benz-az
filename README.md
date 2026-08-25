# Mercedes-Benz Azərbaycan — Frontend Layihəsi

`mercedes-benz.com.az` saytının frontend klonu. Kurs final layihəsi üçün hazırlanır.
Backend yoxdur — bütün məlumatlar `src/data/` qovluğunda saxlanılır.

## Texnologiyalar

- **React 18** — komponent əsaslı UI
- **Vite** — build aləti və dev server
- **React Router v6** — səhifələr arası naviqasiya
- **Tailwind CSS 3** — stil

## Quraşdırma

```bash
npm install
npm run dev
```

Sayt `http://localhost:5173` ünvanında açılacaq.

Production build üçün:

```bash
npm run build
npm run preview
```

## Qovluq strukturu

```
src/
├── components/
│   ├── home/        # ana səhifə bölmələri (Hero, ...)
│   ├── icons/       # SVG ikonlar
│   ├── layout/      # Header, Footer, Layout
│   ├── ui/          # təkrar istifadə olunan elementlər (Button, ContactWidget)
│   └── utils/       # köməkçi komponentlər (ScrollToTop)
├── context/         # LanguageContext (AZ / EN dil dəyişdirmə)
├── data/            # mətnlər, naviqasiya, model məlumatları
├── pages/           # route-lara uyğun səhifələr
├── App.jsx          # route-ların təyin olunduğu yer
├── index.css        # Tailwind + qlobal stillər
└── main.jsx         # giriş nöqtəsi
```

## Şəkillər

Şəkillər `public/images/` qovluğuna atılır və kodda `/images/fayl-adi.jpg` kimi
istifadə olunur. Hazırda gözlənilən fayl:

| Fayl | Yeri |
| --- | --- |
| `hero-e-class.jpg` | Ana səhifə hero bölməsi |

Şəkil olmadıqda hero bölməsi qradient fonla göstərilir, sayt sınmır.

## Dizayn qeydləri

- Rəng və şrift dəyərləri `tailwind.config.js` faylında `mb-*` adı altında toplanıb
  (`mb-black`, `mb-blue`, `mb-silver` və s.).
- Başlıqlar üçün `font-display`, mətn üçün `font-sans` istifadə olunur. Mercedes-in
  öz şriftləri (MB Corpo) lisenziyalı olduğu üçün pulsuz alternativlər seçilmişdir:
  Source Serif 4 və Inter.
- Bölmələrin yan boşluqları üçün `container-site` klassı var (`src/index.css`).

## Mərhələlər

- [x] Layihə skeleti, Header, Hero, dil dəyişdirmə
- [ ] Ana səhifə bölmələri (model kateqoriyaları, kampaniyalar, xidmətlər)
- [ ] Modellər səhifəsi (filtr, sıralama, axtarış)
- [ ] Model detalı səhifəsi
- [ ] Test-drive / müraciət formu (validasiya + localStorage)
- [ ] Diler və servis, Haqqımızda, Əlaqə səhifələri

---

Bu sayt tədris məqsədi ilə hazırlanmışdır. Mercedes-Benz adı, loqosu və
şəkilləri müvafiq hüquq sahiblərinə aiddir.
