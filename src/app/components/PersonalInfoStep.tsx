import { Language, translations } from '../i18n/translations';

interface FormData {
  name: string;
  firstName: string;
  carType: string;
  registration: string;
  center: string;
  visitType: string;
  date: string;
  time: string;
}

interface PersonalInfoStepProps {
  language: Language;
  formData: FormData;
  updateFormData: (field: string, value: string) => void;
}

export function PersonalInfoStep({ language, formData, updateFormData }: PersonalInfoStepProps) {
  const t = translations[language];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto animate-fade-up">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900">{t.personalTitle}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label={t.name}
          value={formData.name}
          onChange={(v) => updateFormData('name', v)}
          placeholder={t.namePlaceholder}
        />
        <Field
          label={t.firstName}
          value={formData.firstName}
          onChange={(v) => updateFormData('firstName', v)}
          placeholder={t.firstNamePlaceholder}
        />
        <Field
          label={t.carType}
          value={formData.carType}
          onChange={(v) => updateFormData('carType', v)}
          placeholder={t.carTypePlaceholder}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          }
        />
        <Field
          label={t.registration}
          value={formData.registration}
          onChange={(v) => updateFormData('registration', v)}
          placeholder={t.registrationPlaceholder}
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <rect x="3" y="6" width="18" height="12" rx="2" />
              <path strokeLinecap="round" d="M7 10h1m3 0h4M7 14h10" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full border border-gray-200 rounded-xl py-2.5 text-gray-800 text-sm placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${icon ? 'pl-9 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  );
}
