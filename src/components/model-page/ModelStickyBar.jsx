// Model səhifəsində skrol edəndə yuxarıda yapışıb qalan zolaq:
//   sol tərəf: "Model / A-Class Hatchback"
//   sağ tərəf: "Əlaqə" düyməsi
//
// Səhifənin ən yuxarısına yapışır (top-0). "Əlaqə" düyməsi sonrakı mərhələdə
// əlaqə formasına sürüşdürəcək; hələ forma yoxdur, ona görə onContact opsionaldır
// və verilməsə səhifənin aşağısına skroll edir.
export default function ModelStickyBar({ label, name, ctaText, onContact }) {
  const handleClick =
    onContact ??
    (() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

  return (
    <div className="sticky top-0 z-30 border-b border-mb-border/60 bg-white/90 backdrop-blur">
      <div className="container-site flex items-center justify-between py-3.5">
        <div className="leading-tight">
          <p className="text-[11px] uppercase tracking-widest text-mb-grey">{label}</p>
          <p className="text-sm font-semibold text-mb-ink sm:text-base">{name}</p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex h-10 items-center rounded-full border border-mb-black px-6 text-sm font-medium text-mb-black transition-colors duration-300 ease-mb hover:bg-mb-black hover:text-white"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
