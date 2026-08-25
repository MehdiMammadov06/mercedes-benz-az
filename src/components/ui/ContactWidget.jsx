import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { MercedesStar } from '../icons/index.jsx';

// Saytın sağ aşağı küncündəki üzən "Müraciət edin" düyməsi
export default function ContactWidget() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7">
      <span className="hidden rounded-md bg-white px-3 py-2 text-xs font-medium text-mb-ink shadow-lg sm:block">
        {t.widget.contact} 👉
      </span>

      <Link
        to="/elaqe"
        aria-label={t.widget.contact}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-mb-black text-white shadow-xl transition-transform duration-300 ease-mb hover:scale-105"
      >
        <MercedesStar className="h-8 w-8" strokeWidth={3} />
      </Link>
    </div>
  );
}
