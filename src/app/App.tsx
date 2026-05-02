import { useState } from 'react';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { ArticlesSection } from './components/ArticlesSection';
import { PersonalInfoStep } from './components/PersonalInfoStep';
import { CenterInfoStep } from './components/CenterInfoStep';
import { ConfirmationStep } from './components/ConfirmationStep';
import { Language, translations } from './i18n/translations';

// Steps:
// 0 = Language selector
// 1 = Articles listing (with "Book" button in heading)
// 2 = Personal info form
// 3 = Center & schedule form
// 4 = Confirmation

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState<Language>('fr');
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    carType: '',
    registration: '',
    center: '',
    visitType: '',
    date: '',
    time: '',
  });

  const t = translations[language];
  const isRTL = language === 'ar';

  const updateFormData = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const goTo = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFormStep = currentStep >= 2;

  const FORM_STEPS = [t.stepPersonal, t.stepCenter, t.stepConfirm];
  const formStepIndex = currentStep - 2; // 0, 1, 2

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />

      {/* Step 0: Language selector */}
      {currentStep === 0 && (
        <LanguageSelector
          selectedLanguage={language}
          setSelectedLanguage={setLanguage}
          onContinue={() => goTo(1)}
        />
      )}

      {/* Step 1: Articles with book button */}
      {currentStep === 1 && (
        <ArticlesSection
          language={language}
          onBook={() => goTo(2)}
        />
      )}

      {/* Steps 2–4: Reservation form */}
      {isFormStep && (
        <main className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 min-h-[calc(100vh-64px)]">
          <div className="max-w-3xl mx-auto px-4 py-12">

            {/* Progress stepper */}
            <div className="w-full mb-10 animate-fade-in">
              <div className="flex items-center justify-between">
                {FORM_STEPS.map((step, i) => {
                  const stepIndex = i; // 0, 1, 2
                  const isCurrent = formStepIndex === stepIndex;
                  const isDone = formStepIndex > stepIndex;

                  return (
                    <div key={step} className="flex flex-col items-center flex-1">
                      <div className="flex items-center w-full">
                        {i > 0 && (
                          <div className={`flex-1 h-0.5 transition-colors ${isDone ? 'bg-white' : 'bg-blue-300'}`} />
                        )}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all ${
                            isDone
                              ? 'bg-white text-blue-600'
                              : isCurrent
                              ? 'bg-white text-blue-600 ring-4 ring-blue-300'
                              : 'bg-blue-400 text-white'
                          }`}
                        >
                          {isDone ? (
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                        {i < 2 && (
                          <div className={`flex-1 h-0.5 transition-colors ${formStepIndex > i ? 'bg-white' : 'bg-blue-300'}`} />
                        )}
                      </div>
                      <p className="text-xs mt-2 text-white/80 font-medium hidden sm:block text-center max-w-[100px]">
                        {step}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form content */}
            <div className="mb-8">
              {currentStep === 2 && (
                <PersonalInfoStep language={language} formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === 3 && (
                <CenterInfoStep language={language} formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === 4 && (
                <ConfirmationStep
                  language={language}
                  formData={formData}
                  confirmed={confirmed}
                  onConfirm={() => setConfirmed(true)}
                />
              )}
            </div>

            {/* Navigation buttons (hide after confirmed) */}
            {!confirmed && (
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => goTo(currentStep - 1)}
                  className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${isRTL ? '' : 'rotate-180'}`}>
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {t.backButton}
                </button>

                {currentStep < 4 && (
                  <button
                    onClick={() => goTo(currentStep + 1)}
                    className="px-8 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20"
                  >
                    {t.nextButton}
                    <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}>
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}
