import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

// Footer → "Bizimlə əlaqə" (/elaqe) səhifəsi.
// Arxa fon şəkli + tünd overlay. Solda başlıq, sağda ağ form kartı.
// Sahələr: Filialı seç / Başlıq / Ad / Soyad / E-poçt / Əlaqə nömrəsi / Mesaj + Göndər.
// BACKEND YOXDUR — frontend validasiyası + "Göndər"də uğur mesajı.
//
// Arxa fon şəkli: public/images/contactus.jpg (yoxdursa tünd fon qalır — sınmır).
export default function Enquiry() {
  const { t } = useLanguage();
  const e = t.enquiry;

  const emptyForm = {
    branch: e.branches[0],
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    ['branch', 'title', 'firstName', 'lastName', 'email', 'phone'].forEach((key) => {
      if (!values[key]?.trim()) next[key] = e.errors.required;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = e.errors.email;
    }
    if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) {
      next.phone = e.errors.phone;
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
    <section className="relative min-h-[80vh] overflow-hidden bg-mb-ink">
      {/* Arxa fon şəkli + overlay */}
      <img
        src="/images/contactus.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(ev) => (ev.currentTarget.style.display = 'none')}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/30" />

      <div className="container-site relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* --- Sol: başlıq --- */}
        <div>
          <h1 className="font-display text-3xl text-white text-shadow-hero sm:text-4xl lg:text-5xl">
            {e.title}
          </h1>
        </div>

        {/* --- Sağ: form kartı --- */}
        <div className="w-full max-w-xl justify-self-end rounded-xl bg-white p-6 shadow-xl sm:p-8">
          {status === 'success' ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mb-blue/10 text-mb-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="mt-5 max-w-sm text-sm text-mb-ink">{e.success}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
              >
                {e.submit}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field label={e.selectBranch} required error={errors.branch}>
                <select className={fieldClass('branch')} value={values.branch} onChange={(ev) => setField('branch', ev.target.value)}>
                  {e.branches.map((br) => (
                    <option key={br} value={br}>{br}</option>
                  ))}
                </select>
              </Field>

              <Field label={e.title_field} required error={errors.title}>
                <select className={fieldClass('title')} value={values.title} onChange={(ev) => setField('title', ev.target.value)}>
                  <option value="">{e.select}</option>
                  {e.titleOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <Field label={e.firstName} required error={errors.firstName}>
                <input type="text" className={fieldClass('firstName')} value={values.firstName} onChange={(ev) => setField('firstName', ev.target.value)} />
              </Field>

              <Field label={e.lastName} required error={errors.lastName}>
                <input type="text" className={fieldClass('lastName')} value={values.lastName} onChange={(ev) => setField('lastName', ev.target.value)} />
              </Field>

              <Field label={e.email} required error={errors.email}>
                <input type="email" className={fieldClass('email')} value={values.email} onChange={(ev) => setField('email', ev.target.value)} />
              </Field>

              <Field label={e.phone} required error={errors.phone}>
                <input type="tel" className={fieldClass('phone')} value={values.phone} onChange={(ev) => setField('phone', ev.target.value)} />
              </Field>

              <Field label={e.message} error={errors.message}>
                <textarea rows={4} className="w-full rounded-md border border-mb-border bg-white px-4 py-3 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue" value={values.message} onChange={(ev) => setField('message', ev.target.value)} />
              </Field>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 min-w-40 items-center justify-center rounded-full bg-mb-blue px-10 text-sm font-medium text-white transition-colors duration-300 ease-mb hover:bg-mb-blue-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? e.submitting : e.submit}
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
