import { Language, translations } from '../i18n/translations';

interface ArticlesSectionProps {
  language: Language;
  onBook: () => void;
}

const tagColors: Record<string, string> = {
  // French
  'Réglementation': 'bg-red-100 text-red-700',
  'Information': 'bg-blue-100 text-blue-700',
  'Conseil': 'bg-green-100 text-green-700',
  // English
  'Regulation': 'bg-red-100 text-red-700',
  'Tips': 'bg-green-100 text-green-700',
  // Arabic
  'لوائح': 'bg-red-100 text-red-700',
  'معلومات': 'bg-blue-100 text-blue-700',
  'نصائح': 'bg-green-100 text-green-700',
};

export function ArticlesSection({ language, onBook }: ArticlesSectionProps) {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0s', animationFillMode: 'forwards' }}>
            <p className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-widest">
              {t.tagline}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              {t.articlesTitle}
            </h1>
            <p className="mt-2 text-blue-100 text-base max-w-xl">
              {t.articlesSubtitle}
            </p>
          </div>

          {/* Reservation CTA - prominent in heading */}
          <div className="animate-fade-up shrink-0" style={{ opacity: 0, animationDelay: '0.15s', animationFillMode: 'forwards' }}>
            <button
              onClick={onBook}
              className="group flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-4 rounded-2xl shadow-lg shadow-blue-900/20 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="text-base">{t.bookButton}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors ${isRTL ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.articles.map((article, i) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-up"
              style={{ opacity: 0, animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Card top accent */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-400" />

              <div className="p-6 flex flex-col flex-1">
                {/* Tag + date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[article.tag] || 'bg-gray-100 text-gray-600'}`}>
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="font-display text-gray-900 font-bold text-lg leading-snug mb-3">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <button className="mt-5 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1.5 group self-start">
                  {t.readMore}
                  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${isRTL ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
