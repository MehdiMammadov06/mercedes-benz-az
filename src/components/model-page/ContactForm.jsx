import { forwardRef, useState } from 'react';

// Əlaqə formu — BACKEND YOXDUR. Frontend validasiyası + "Göndər"də uğur mesajı.
// Sol tərəf: brend adı + başlıq. Sağ tərəf: ağ form kartı (mavi fon üzərində).
//
// ref: sticky bardakı "Əlaqə" düyməsi buraya sürüşdürmək üçün istifadə edir.
const ContactForm = forwardRef(function ContactForm({ copy, bgImage }, ref) {
  const emptyForm = {
    branch: '',
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
      if (!values[key]?.trim()) next[key] = copy.errors.required;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = copy.errors.email;
    }
    if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) {
      next.phone = copy.errors.phone;
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Backend yoxdur — göndərilməni imitasiya edirik
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
    <section ref={ref} className="relative overflow-hidden bg-mb-ink py-16 sm:py-24">
      {/* Fon şəkli — yoxdursa tünd fon (bg-mb-ink) qalır */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      )}
      {/* Mətnin oxunması üçün tünd örtük */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-site relative grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Sol: brend adı + başlıq */}
        <div className="text-white">
          <h2 className="font-display text-3xl text-shadow-hero sm:text-4xl">{copy.brandName}</h2>
          <p className="mt-3 text-sm text-white/90 text-shadow-hero">{copy.heading}</p>
        </div>

        {/* Sağ: form kartı */}
        <div className="rounded-xl bg-white p-6 shadow-2xl sm:p-8">
          {status === 'success' ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mb-blue/10 text-mb-blue">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="mt-5 max-w-sm text-sm text-mb-ink">{copy.success}</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-mb-blue hover:text-mb-blue-dark"
              >
                {copy.submit}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Field label={copy.branch} required error={errors.branch}>
                <select className={fieldClass('branch')} value={values.branch} onChange={(e) => setField('branch', e.target.value)}>
                  <option value="">{copy.select}</option>
                  {copy.branches.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </Field>

              <Field label={copy.title} required error={errors.title}>
                <select className={fieldClass('title')} value={values.title} onChange={(e) => setField('title', e.target.value)}>
                  <option value="">{copy.select}</option>
                  {copy.titleOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={copy.firstName} required error={errors.firstName}>
                  <input type="text" className={fieldClass('firstName')} value={values.firstName} onChange={(e) => setField('firstName', e.target.value)} />
                </Field>
                <Field label={copy.lastName} required error={errors.lastName}>
                  <input type="text" className={fieldClass('lastName')} value={values.lastName} onChange={(e) => setField('lastName', e.target.value)} />
                </Field>
              </div>

              <Field label={copy.email} required error={errors.email}>
                <input type="email" className={fieldClass('email')} value={values.email} onChange={(e) => setField('email', e.target.value)} />
              </Field>

              <Field label={copy.phone} required error={errors.phone}>
                <input type="tel" className={fieldClass('phone')} value={values.phone} onChange={(e) => setField('phone', e.target.value)} />
              </Field>

              <Field label={copy.message} error={errors.message}>
                <textarea rows={3} className="w-full rounded-md border border-mb-border bg-white px-4 py-3 text-sm text-mb-ink outline-none transition-colors focus:border-mb-blue" value={values.message} onChange={(e) => setField('message', e.target.value)} />
              </Field>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 min-w-40 items-center justify-center rounded-full bg-mb-blue px-10 text-sm font-medium text-white transition-colors duration-300 ease-mb hover:bg-mb-blue-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? copy.submitting : copy.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});

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

export default ContactForm;
