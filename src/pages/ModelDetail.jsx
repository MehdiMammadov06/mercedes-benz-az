import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useFetch } from '../hooks/useFetch.js';
import Button from '../components/ui/Button.jsx';
import { ArrowRight } from '../components/icons/index.jsx';

import ModelHero from '../components/model-page/ModelHero.jsx';
import ModelStickyBar from '../components/model-page/ModelStickyBar.jsx';
import ModelLineup from '../components/model-page/ModelLineup.jsx';
import FeatureSection from '../components/model-page/FeatureSection.jsx';
import EquipmentSlider from '../components/model-page/EquipmentSlider.jsx';
import AmgSection from '../components/model-page/AmgSection.jsx';
import ContactForm from '../components/model-page/ContactForm.jsx';

// Tək model detal səhifəsi (/modeller/:id).
// Universal ŞABLON. Bölmələr: Hero + Sticky bar + Model cərgəsi + Eksteryer +
// İnteryer + Avadanlıq + Mercedes-AMG + Əlaqə formu.
export default function ModelDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const { data, isLoading, error } = useFetch('/data/models.json', { delay: 300 });

  const tp = t.modelPage;

  // Sticky bardakı "Əlaqə" düyməsi əlaqə formasına sürüşdürür
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  // --- Yüklənir ---
  if (isLoading) return <DetailSkeleton />;

  // --- Xəta ---
  if (error) {
    return (
      <StatusScreen title={t.common.error}>
        <Button to="/" variant="outline-dark" size="md">
          {t.placeholder.back}
          <ArrowRight />
        </Button>
      </StatusScreen>
    );
  }

  const model = data?.models?.find((m) => m.id === id);

  // --- Model tapılmadı (404) ---
  if (!model) {
    return (
      <StatusScreen title={tp.notFound}>
        <Button to="/modeller" variant="outline-dark" size="md">
          {tp.backToModels}
          <ArrowRight />
        </Button>
      </StatusScreen>
    );
  }

  const detail = model.detail;

  return (
    <>
      {/* Hero — böyük şəkil + rəng seçimləri */}
      <ModelHero model={model} colorLabel={tp.colorLabel} />

      {/* Yapışqan zolaq — "Əlaqə" düyməsi formaya sürüşdürür */}
      <ModelStickyBar
        label={tp.stickyLabel}
        name={model.name}
        ctaText={tp.contactCta}
        onContact={scrollToForm}
      />

      {/* Model cərgəsi — variantlar (yalnız data varsa) */}
      {detail?.variants?.length > 0 && (
        <ModelLineup variants={detail.variants} copy={tp.lineup} />
      )}

      {/* Eksteryer */}
      {detail?.exterior?.image && (
        <FeatureSection data={detail.exterior} copy={tp.exterior} />
      )}

      {/* İnteryer — şəkil sağda (reverse) */}
      {detail?.interior?.image && (
        <FeatureSection data={detail.interior} copy={tp.interior} reverse />
      )}

      {/* Avadanlıq — kart slayderi */}
      {detail?.equipment?.length > 0 && (
        <EquipmentSlider items={detail.equipment} copy={tp.equipment} />
      )}

      {/* Mercedes-AMG */}
      {(detail?.amg?.image || detail?.amg?.variants?.length > 0) && (
        <AmgSection amg={detail.amg} copy={tp.amg} />
      )}

      {/* Əlaqə formu — həmişə göstərilir */}
      <ContactForm ref={formRef} copy={tp.form} />
    </>
  );
}

// Model tapılmayanda / xətada göstərilən mərkəzləşmiş ekran
function StatusScreen({ title, children }) {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="font-display text-3xl sm:text-4xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </section>
  );
}

// Yüklənərkən göstərilən skeleton
function DetailSkeleton() {
  return (
    <div className="flex min-h-[62vh] items-center justify-center bg-mb-silver">
      <div className="h-56 w-11/12 max-w-3xl animate-pulse rounded-lg bg-white/60" />
    </div>
  );
}
