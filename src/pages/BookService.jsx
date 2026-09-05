import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

// "Xidmətlər → Təlimat Kitabçaları" menyusuna bağlı "Book A Service" formu.
// BACKEND YOXDUR — frontend validasiyası + "Göndər"də uğur mesajı.
// Sol: başlıq + avtomobil şəkli. Sağ: form (Filial/Title/Ad/Soyad/Email/Telefon
// + Consumer Information kanal seçimləri + Mesaj + Submit).
//
// Şəkil: public/images/book-a-service.avif (yoxdursa boz fon qalır — sınmır).
export default function BookService() {
  const { t } = useLanguage();
  const b = t.bookService;

  const emptyForm = {
    branch: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    channels: { phone: false, email: false, sms: false, post: false },
  };

  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleChannel = (key) =>
    setValues((prev) => ({
      ...prev,
      channels: { ...prev.channels, [key]: !prev.channels[key] },
    }));

  const validate = () => {
    const next = {};
    ['branch', 'title', 'firstName', 'lastName', 'email', 'phone'].forEach((key) => {
      if (!values[key]?.trim()) next[key] = b.errors.required;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = b.errors.email;
    }
    if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) {
      next.phone = b.errors.phone;
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setValues(emptyForm);
    }, 800);
  };

  const fieldClass = (name) =>
    [
      'h-11 w-full rounded-md border bg-white px-4 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue',
      errors[name] ? 'border-red-400' : 'border-mb-border',
    ].join(' ');

  return (
    <section className="container-site py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
        {/* --- Sol: başlıq + şəkil --- */}
        <div>
          <h1 className="font-display text-2xl text-mb-ink sm:text-3xl">{b.title}</h1>
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-mb-silver">
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-mb-grey">
              {b.title}
            </span>
            <img
              src="/images/book-a-service.avif"
              alt={b.title}
              className="relative h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
            />
          </div>
        </div>

        {/* --- Sağ: form --- */}
        <div>
          {status === 'success' ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center rounded-xl border border-mb-border bg-white p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mb-blue/10 text-mb-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="mt-5 max-w-sm text-sm text-mb-ink">{b.success}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
              >
                {b.submit}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field label={b.selectBranch} required error={errors.branch}>
                <select className={fieldClass('branch')} value={values.branch} onChange={(e) => setField('branch', e.target.value)}>
                  <option value="">{b.select}</option>
                  {b.branches.map((br) => (
                    <option key={br} value={br}>{br}</option>
                  ))}
                </select>
              </Field>

              <Field label={b.title_field} required error={errors.title}>
                <select className={fieldClass('title')} value={values.title} onChange={(e) => setField('title', e.target.value)}>
                  <option value="">{b.select}</option>
                  {b.titleOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <Field label={b.firstName} required error={errors.firstName}>
                <input type="text" className={fieldClass('firstName')} value={values.firstName} onChange={(e) => setField('firstName', e.target.value)} />
              </Field>

              <Field label={b.lastName} required error={errors.lastName}>
                <input type="text" className={fieldClass('lastName')} value={values.lastName} onChange={(e) => setField('lastName', e.target.value)} />
              </Field>

              <Field label={b.email} required error={errors.email}>
                <input type="email" className={fieldClass('email')} value={values.email} onChange={(e) => setField('email', e.target.value)} />
              </Field>

              <Field label={b.phone} required error={errors.phone}>
                <input type="tel" className={fieldClass('phone')} value={values.phone} onChange={(e) => setField('phone', e.target.value)} />
              </Field>

              {/* Consumer Information */}
              <div>
                <h2 className="text-sm font-semibold text-mb-ink">{b.consumerTitle}</h2>
                <p className="mt-2 text-xs leading-relaxed text-mb-grey">{b.consumerText}</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {['phone', 'email', 'sms', 'post'].map((key) => (
                    <label key={key} className="inline-flex items-center gap-2 text-sm text-mb-ink">
                      <input
                        type="checkbox"
                        checked={values.channels[key]}
                        onChange={() => toggleChannel(key)}
                        className="h-4 w-4 accent-mb-blue"
                      />
                      {b.channels[key]}
                    </label>
                  ))}
                </div>
              </div>

              <Field label={b.message} error={errors.message}>
                <textarea rows={4} className="w-full rounded-md border border-mb-border bg-white px-4 py-3 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue" value={values.message} onChange={(e) => setField('message', e.target.value)} />
              </Field>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 min-w-40 items-center justify-center rounded-full bg-mb-blue px-10 text-sm font-medium text-white transition-colors duration-300 ease-mb hover:bg-mb-blue-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? b.submitting : b.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Etiket + ulduz(*) + xəta mətni olan xana sarğısı
function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-mb-ink">
        {label} {required && <span className="text-mb-blue">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
