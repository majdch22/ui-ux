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

interface CenterInfoStepProps {
  language: Language;
  formData: FormData;
  updateFormData: (field: string, value: string) => void;
}

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30',
];

export function CenterInfoStep({ language, formData, updateFormData }: CenterInfoStepProps) {
  const t = translations[language];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto animate-fade-up">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-gray-900">{t.centerTitle}</h2>
      </div>

      <div className="space-y-5">
        {/* Center select */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.center}</label>
          <div className="relative">
            <select
              value={formData.center}
              onChange={(e) => updateFormData('center', e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
            >
              <option value="">{t.selectCenter}</option>
              {t.centers.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Visit type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.visitType}</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.visitTypes.map((vt) => (
              <button
                key={vt}
                type="button"
                onClick={() => updateFormData('visitType', vt)}
                className={`border-2 rounded-xl px-4 py-3 text-sm font-medium text-center transition-all duration-150 ${
                  formData.visitType === vt
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                {vt}
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.date}</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => updateFormData('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-gray-800 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Time slots */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t.time}</label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => updateFormData('time', slot)}
                className={`rounded-lg py-2 text-xs font-semibold text-center transition-all duration-150 ${
                  formData.time === slot
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
