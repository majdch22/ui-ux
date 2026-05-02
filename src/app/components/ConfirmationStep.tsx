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

interface ConfirmationStepProps {
  language: Language;
  formData: FormData;
  confirmed: boolean;
  onConfirm: () => void;
}

export function ConfirmationStep({ language, formData, confirmed, onConfirm }: ConfirmationStepProps) {
  const t = translations[language];

  if (confirmed) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-2xl mx-auto animate-fade-up text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">{t.successMessage}</h2>
        <p className="text-gray-500 text-sm">
          {formData.date} — {formData.time} · {formData.center}
        </p>
      </div>
    );
  }

  const rows = [
    { label: t.labelName, value: `${formData.firstName} ${formData.name}`, icon: '👤' },
    { label: t.labelCar, value: formData.carType, icon: '🚗' },
    { label: t.labelRegistration, value: formData.registration, icon: '🔖' },
    { label: t.labelCenter, value: formData.center, icon: '📍' },
    { label: t.labelVisit, value: formData.visitType, icon: '📋' },
    { label: t.labelDate, value: formData.date, icon: '📅' },
    { label: t.labelTime, value: formData.time, icon: '🕐' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto animate-fade-up">
      <div className="mb-7">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900">{t.confirmTitle}</h2>
        <p className="text-gray-400 text-sm mt-1">{t.confirmSubtitle}</p>
      </div>

      <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden mb-8">
        {rows.map((row) => (
          row.value ? (
            <div key={row.label} className="flex items-center px-4 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-lg mr-3">{row.icon}</span>
              <span className="text-sm text-gray-500 min-w-[130px] font-medium">{row.label}</span>
              <span className="text-sm text-gray-900 font-semibold">{row.value}</span>
            </div>
          ) : null
        ))}
      </div>

      <button
        onClick={onConfirm}
        className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {t.confirmButton}
      </button>
    </div>
  );
}
