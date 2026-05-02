import { Language } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'AR', flag: '🇹🇳' },
];

export function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span className="font-display text-blue-700 font-bold text-lg leading-none block">
              {language === 'ar' ? 'المركز التقني' : language === 'en' ? 'Technical Centre' : 'Centre Technique'}
            </span>
            <span className="text-xs text-gray-400 font-light">
              {language === 'ar' ? 'الفحص الرسمي' : language === 'en' ? 'Official Inspection' : 'Contrôle Officiel'}
            </span>
          </div>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                language === lang.code
                  ? 'bg-white text-blue-700 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
