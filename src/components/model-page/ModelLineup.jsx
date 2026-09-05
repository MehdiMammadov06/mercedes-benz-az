// "Model cərgəsi" bölməsi: modelin variantları (A 180, A 200, A 250 e ...)
// şəkil + ad kimi kart şəbəkəsində. Orijinal saytdakı "Model cərgəsi" bölməsi.
//
// Şəkil yoxdursa onError ilə gizlənir, ad qalır — sayt sınmır.
export default function ModelLineup({ variants, copy }) {
  if (!variants?.length) return null;

  return (
    <section className="container-site py-16 sm:py-20">
      <h2 className="mb-10 font-display text-3xl text-mb-ink sm:text-4xl">{copy.title}</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {variants.map((variant) => (
          <div key={variant.id} className="flex flex-col items-center text-center">
            <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md bg-white">
              <img
                src={variant.image}
                alt={variant.name}
                loading="lazy"
                className="h-full w-full object-contain"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
            </div>
            <h3 className="mt-5 font-display text-xl text-mb-ink">{variant.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
