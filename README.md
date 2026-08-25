# Mercedes-Benz Azərbaycan — Frontend Layihəsi

`mercedes-benz.com.az` saytının frontend klonu. Kurs final layihəsi üçün hazırlanır.
Backend yoxdur — bütün məlumatlar `src/data/` qovluğunda saxlanılır.

## Texnologiyalar

- **React 18** — komponent əsaslı UI
- **Vite** — build aləti və dev server
- **React Router v6** — səhifələr arası naviqasiya
- **Tailwind CSS 4** — stil (CSS-first konfiqurasiya, `@tailwindcss/vite` plagini)

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
├── index.css        # Tailwind idxalı, @theme konfiqurasiyası, qlobal stillər
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

Tailwind v4-də `tailwind.config.js` faylı yoxdur — bütün konfiqurasiya
`src/index.css` faylındaki `@theme` blokundadır. Orada təyin olunan hər CSS
dəyişəni avtomatik utility klassa çevrilir:

| `@theme` dəyişəni | Yaranan klass |
| --- | --- |
| `--color-mb-blue` | `bg-mb-blue`, `text-mb-blue`, `border-mb-blue` |
| `--font-display` | `font-display` |
| `--container-site` | `max-w-site` |
| `--ease-mb` | `ease-mb` |
| `--animate-fade-up` | `animate-fade-up` |

- Rəng tokenləri `mb-*` prefiksi ilə: `mb-black`, `mb-ink`, `mb-blue`, `mb-silver`,
  `mb-grey`, `mb-border`.
- Başlıqlar üçün `font-display`, mətn üçün `font-sans`. Mercedes-in öz şriftləri
  (MB Corpo) lisenziyalı olduğu üçün pulsuz alternativlər seçilmişdir: Source Serif 4
  və Inter.
- Bölmələrin yan boşluqları üçün `container-site` klassı var (`src/index.css`).

### v4-də diqqət edilməli fərqlər

- `bg-gradient-to-r` → **`bg-linear-to-r`** (adı dəyişdi)
- Düymələrin default `cursor: pointer`-i yoxdur — `index.css`-də geri qaytarılıb
- Default border rəngi `currentColor`-dur, ona görə border rəngi hər yerdə açıq yazılır

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
