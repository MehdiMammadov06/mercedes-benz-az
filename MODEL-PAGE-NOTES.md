# Model Səhifəsi — İş Qeydləri

> Bu fayl model detal səhifəsi (`/modeller/:id`) üzərində işi **yeni söhbətdə davam
> etdirmək** üçün yaddaşdır. Yeni Kiro söhbətində əvvəlcə bu faylı oxut, sonra davam et.

## Vəziyyət (harada qalmışıq)

Model detal səhifəsinin **universal şablonu** hazırdır və 2 model tam doldurulub:

| Model | id | Status |
|-------|----|--------|
| A-Class Hatchback | `a-class` | ✅ tam |
| EQE Sedan | `eqe-sedan` | ✅ tam |

Qalan modellər (`models.json`-da 28 model var) hələ `detail` datası olmadığı üçün
səhifədə yalnız Hero (rəngsiz) + Sticky bar + boş Əlaqə formu göstərir — **sınmır**,
sadəcə boşdur.

**Növbəti:** istənilən modelə `detail` datası + şəkillər əlavə etmək.

## Struktur (səhifənin 8 bölməsi)

Fayl: `src/pages/ModelDetail.jsx` — hamısını birləşdirir. Bölmələr yalnız uyğun
data varsa render olunur (şərti).

1. **ModelHero** — böyük şəkil + rəng nöqtələri (hər rəngin öz şəkli, klikdə dəyişir)
2. **ModelStickyBar** — skrolda yuxarıda qalan zolaq (Model / ad + Əlaqə düyməsi → formaya scroll)
3. **ModelLineup** — "Model cərgəsi" variant kartları (məs. A 180 / A 200 / A 250 e)
4. **FeatureSection** — Eksteryer (şəkil solda)
5. **FeatureSection** — İnteryer (şəkil sağda, `reverse`)
6. **EquipmentSlider** — Avadanlıq kartları karusel (ox + nöqtə)
7. **AmgSection** — böyük şəkil + AMG variant toggle
8. **ContactForm** — əlaqə formu (Header/Footer onsuz da Layout-da sabitdir)

Komponentlər: `src/components/model-page/`

## Qərarlar (razılaşdığımız qaydalar)

- **3 rəng** hər modeldə (daha çox yox). Hər rəngin öz avtomobil şəkli var.
- **Backend yoxdur.** ContactForm frontend-only: validasiya + "Göndər"də təşəkkür mesajı.
- **Şəkil fallback:** hər `<img>`-də `onError` → şəkil yoxdursa sayt sınmır.
- **Filiallar:** `Mercedes Absheron Automobile Center LLC`, `AutoStar Kaukasus GmbH Azerbaijan LLC`.
- **Əlaqə formu fonu:** mavi deyil — `detail.contactImage` şəkli + tünd overlay.
- **Hero fon mətni yoxdur** (nəhəng model adı silindi — şəkillərdə onsuz da yazı var).
- **Modelə xas mətnlər data-dadır (çoxdilli):** eksteryer/interyer başlıq+mətn və
  avadanlıq elementlərinin başlıq+mətni `models.json`-da `{ "az": "...", "en": "..." }`
  formatında. Sabit etiketlər (eyebrow "Eksteryer", form etiketləri) `translations.js`-də.

## Data sxemi (models.json → model.detail)

```jsonc
"detail": {
  "hero": {
    "colors": [
      { "name": "Polar White", "hex": "#f2f3f5", "image": ".../hero-polar-white.avif" }
      // 3 ədəd
    ]
  },
  "variants": [
    { "id": "a180", "name": "A 180", "image": ".../variant-a180.avif" }
  ],
  "exterior": {
    "image": ".../exterior.avif",
    "title": { "az": "...", "en": "..." },   // modelə xas (opsional)
    "text":  { "az": "...", "en": "..." }
  },
  "interior": { "image": "...", "title": {...}, "text": {...} },
  "equipmentTitle": { "az": "...", "en": "..." },   // bölmə başlığı (opsional)
  "equipment": [
    {
      "id": "keyless-go",
      "image": ".../eq-keyless.avif",
      "title": { "az": "...", "en": "..." },  // modelə xas (opsional)
      "text":  { "az": "...", "en": "..." }
    }
  ],
  "amg": {
    "image": ".../amg.avif",
    "variants": [ { "id": "amg-a35", "name": "Mercedes-AMG A 35 4MATIC Hatchback" } ]
  },
  "contactImage": ".../contact.avif"
}
```

> Qeyd: A-Class avadanlıq mətnlərini data-da saxlamır — `translations.js`-dəki
> `modelPage.equipment.items[id]` copy-dən gəlir (köhnə üsul, hələ işləyir).
> Yeni modellərdə mətni **data-da** (`{az,en}`) saxla — daha təmizdir.

## Şəkil adlandırma konvensiyası

Qovluq: `public/images/models/detail/<model-id>/`

```
hero-<reng-adi>.avif      (3 ədəd, məs. hero-polar-white.avif)
variant-<id>.avif         (məs. variant-a180.avif)
exterior.avif
interior.avif
eq-<qisa-ad>.avif         (məs. eq-keyless.avif)
amg.avif
contact.avif
```

## Yeni model necə əlavə olunur (resept)

1. `public/data/models.json`-da həmin modeli tap, `detail` bloku əlavə et (yuxarıdakı sxem).
2. Mətnləri (eksteryer/interyer/avadanlıq) modelə uyğun yaz, `{az,en}` formatında.
3. Şəkil adlarını konvensiyaya uyğun ver, qovluğu yarat.
4. Kod dəyişmir — universal şablon avtomatik işləyir.
5. Commit → PR → merge → `npx @tailwindcss/cli -i ./src/index.css -o ./src/output.css` → şəkilləri əlavə et.

## İş axını (mühüm)

- Kiro branch-a **push** edib **PR** açır (`gh api`, `gh pr create` işləmir).
- İstifadəçi GitHub-da PR-ı **merge** edir, sonra VS Code-da:
  ```
  git checkout main
  git pull
  npx @tailwindcss/cli -i ./src/index.css -o ./src/output.css
  ```
- Branch adı stili: `MehdiMammadov06/<qisa-tesvir>`.
- Vite artıq işləyir; yalnız Tailwind CLI ilə `output.css` yenilənir.

## Texnologiya

React 18 + Vite + react-router-dom v6 + **Tailwind v4** (config CSS içində, `@theme` bloku).
i18n: `useLanguage()` → `t` (AZ/EN), `src/data/translations.js`. Kənar kitabxana yoxdur
(sliderlər React state + CSS transform). Rənglər: `mb-blue #0078d6`, `mb-ink`, `mb-silver`;
`font-display` = Source Serif 4; `ease-mb` keçid əyrisi.
