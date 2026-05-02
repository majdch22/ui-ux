import { Language, translations } from '../i18n/translations';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  onContinue: () => void;
}

const languageOptions: { code: Language; nativeName: string; flag: string; subtitle: string }[] = [
  { code: 'fr', nativeName: 'Français', flag: '🇫🇷', subtitle: 'French' },
  { code: 'en', nativeName: 'English', flag: '🇬🇧', subtitle: 'Anglais / الإنجليزية' },
  { code: 'ar', nativeName: 'العربية', flag: '🇹🇳', subtitle: 'Arabic / Arabe' },
];

export function LanguageSelector({ selectedLanguage, setSelectedLanguage, onContinue }: LanguageSelectorProps) {
  const t = translations[selectedLanguage];

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      {/* Icon */}
      <div className="mb-8 animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">
          {t.chooseLanguage}
        </h1>
        <p className="text-gray-500 text-base">
          {t.chooseLanguageSubtitle}
        </p>
      </div>

      {/* Language options */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-10">
        {languageOptions.map((lang, i) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={`flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 animate-fade-up ${
              selectedLanguage === lang.code
                ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-100'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
            }`}
            style={{ animationDelay: `${0.15 + i * 0.08}s`, opacity: 0 }}
          >
            <span className="text-4xl">{lang.flag}</span>
            <div className="text-center">
              <p className={`text-lg font-semibold ${selectedLanguage === lang.code ? 'text-blue-700' : 'text-gray-800'}`}>
                {lang.nativeName}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{lang.subtitle}</p>
            </div>
            {selectedLanguage === lang.code && (
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="animate-fade-up px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        {t.continueButton}
        <svg viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${selectedLanguage === 'ar' ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
