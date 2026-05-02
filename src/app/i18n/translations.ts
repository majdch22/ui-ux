export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    // Header
    siteName: 'Centre Technique',
    tagline: 'Contrôle Technique Officiel',

    // Language selector
    chooseLanguage: 'Choisissez votre langue',
    chooseLanguageSubtitle: 'Sélectionnez la langue dans laquelle vous souhaitez naviguer',
    continueButton: 'Continuer',

    // Articles page
    articlesTitle: 'Informations & Actualités',
    articlesSubtitle: 'Restez informé des dernières mises à jour du contrôle technique',
    bookButton: 'Prendre Rendez-vous',
    readMore: 'Lire plus',

    // Reservation steps
    stepPersonal: 'Informations personnelles',
    stepCenter: 'Centre & Horaire',
    stepConfirm: 'Confirmation',

    // Personal Info
    personalTitle: 'Vos informations personnelles',
    name: 'Nom',
    firstName: 'Prénom',
    carType: 'Type de véhicule',
    registration: 'Numéro d\'immatriculation',
    namePlaceholder: 'Entrez votre nom',
    firstNamePlaceholder: 'Entrez votre prénom',
    carTypePlaceholder: 'Ex: Berline, SUV, Utilitaire...',
    registrationPlaceholder: 'Ex: 12345 TUN 01',

    // Center Info
    centerTitle: 'Choisissez votre centre',
    center: 'Centre de contrôle',
    visitType: 'Type de visite',
    date: 'Date souhaitée',
    time: 'Heure souhaitée',
    selectCenter: 'Sélectionner un centre',
    selectVisitType: 'Sélectionner le type de visite',
    selectTime: 'Sélectionner une heure',
    visitTypes: ['Contrôle périodique', 'Contre-visite', 'Première immatriculation'],
    centers: [
      'Centre Tunis - Centre Ville',
      'Centre Ariana',
      'Centre Ben Arous',
      'Centre Manouba',
      'Centre Sfax',
      'Centre Sousse',
    ],

    // Confirmation
    confirmTitle: 'Récapitulatif de votre rendez-vous',
    confirmSubtitle: 'Vérifiez vos informations avant de confirmer',
    labelName: 'Nom complet',
    labelCar: 'Véhicule',
    labelRegistration: 'Immatriculation',
    labelCenter: 'Centre',
    labelVisit: 'Type de visite',
    labelDate: 'Date',
    labelTime: 'Heure',

    // Buttons
    nextButton: 'Suivant',
    backButton: 'Retour',
    confirmButton: 'Confirmer le rendez-vous',
    successMessage: 'Rendez-vous confirmé avec succès !',

    // Articles content
    articles: [
      {
        id: 1,
        tag: 'Réglementation',
        title: 'Nouvelles normes de contrôle technique 2024',
        excerpt: 'La mise à jour des normes de contrôle technique introduit des exigences plus strictes pour les véhicules diesel, notamment en matière d\'émissions polluantes.',
        date: '15 Jan 2024',
      },
      {
        id: 2,
        tag: 'Information',
        title: 'Périodicité du contrôle technique selon l\'âge du véhicule',
        excerpt: 'Rappel des échéances : les véhicules de moins de 4 ans sont exemptés, ceux entre 4 et 10 ans passent tous les 2 ans, et au-delà tous les ans.',
        date: '8 Mar 2024',
      },
      {
        id: 3,
        tag: 'Conseil',
        title: 'Préparez votre véhicule avant le contrôle',
        excerpt: 'Quelques vérifications simples avant votre passage au centre peuvent vous éviter une contre-visite : éclairages, pneus, niveaux et freins.',
        date: '22 Apr 2024',
      },
    ],
  },

  en: {
    siteName: 'Technical Centre',
    tagline: 'Official Vehicle Inspection',

    chooseLanguage: 'Choose your language',
    chooseLanguageSubtitle: 'Select the language you wish to browse in',
    continueButton: 'Continue',

    articlesTitle: 'Information & News',
    articlesSubtitle: 'Stay informed about the latest vehicle inspection updates',
    bookButton: 'Book an Appointment',
    readMore: 'Read more',

    stepPersonal: 'Personal Information',
    stepCenter: 'Centre & Schedule',
    stepConfirm: 'Confirmation',

    personalTitle: 'Your personal information',
    name: 'Last Name',
    firstName: 'First Name',
    carType: 'Vehicle Type',
    registration: 'License Plate Number',
    namePlaceholder: 'Enter your last name',
    firstNamePlaceholder: 'Enter your first name',
    carTypePlaceholder: 'E.g: Sedan, SUV, Van...',
    registrationPlaceholder: 'E.g: 12345 TUN 01',

    centerTitle: 'Choose your centre',
    center: 'Inspection Centre',
    visitType: 'Visit Type',
    date: 'Preferred Date',
    time: 'Preferred Time',
    selectCenter: 'Select a centre',
    selectVisitType: 'Select visit type',
    selectTime: 'Select a time',
    visitTypes: ['Periodic Inspection', 'Re-inspection', 'First Registration'],
    centers: [
      'Tunis Downtown Centre',
      'Ariana Centre',
      'Ben Arous Centre',
      'Manouba Centre',
      'Sfax Centre',
      'Sousse Centre',
    ],

    confirmTitle: 'Appointment Summary',
    confirmSubtitle: 'Please verify your details before confirming',
    labelName: 'Full Name',
    labelCar: 'Vehicle',
    labelRegistration: 'License Plate',
    labelCenter: 'Centre',
    labelVisit: 'Visit Type',
    labelDate: 'Date',
    labelTime: 'Time',

    nextButton: 'Next',
    backButton: 'Back',
    confirmButton: 'Confirm Appointment',
    successMessage: 'Appointment confirmed successfully!',

    articles: [
      {
        id: 1,
        tag: 'Regulation',
        title: 'New 2024 Vehicle Inspection Standards',
        excerpt: 'Updated inspection standards introduce stricter requirements for diesel vehicles, particularly regarding pollutant emissions.',
        date: 'Jan 15, 2024',
      },
      {
        id: 2,
        tag: 'Information',
        title: 'Inspection Frequency by Vehicle Age',
        excerpt: 'Reminder: vehicles under 4 years are exempt, those between 4–10 years are inspected every 2 years, and beyond that annually.',
        date: 'Mar 8, 2024',
      },
      {
        id: 3,
        tag: 'Tips',
        title: 'Prepare Your Vehicle Before Inspection',
        excerpt: 'A few simple checks before your visit can help you avoid a re-inspection: lights, tires, fluid levels, and brakes.',
        date: 'Apr 22, 2024',
      },
    ],
  },

  ar: {
    siteName: 'المركز التقني',
    tagline: 'الفحص التقني الرسمي للمركبات',

    chooseLanguage: 'اختر لغتك',
    chooseLanguageSubtitle: 'حدد اللغة التي تريد التصفح بها',
    continueButton: 'متابعة',

    articlesTitle: 'المعلومات والأخبار',
    articlesSubtitle: 'ابق على اطلاع بأحدث تحديثات الفحص التقني',
    bookButton: 'حجز موعد',
    readMore: 'اقرأ المزيد',

    stepPersonal: 'المعلومات الشخصية',
    stepCenter: 'المركز والموعد',
    stepConfirm: 'التأكيد',

    personalTitle: 'معلوماتك الشخصية',
    name: 'اللقب',
    firstName: 'الاسم',
    carType: 'نوع المركبة',
    registration: 'رقم التسجيل',
    namePlaceholder: 'أدخل لقبك',
    firstNamePlaceholder: 'أدخل اسمك',
    carTypePlaceholder: 'مثال: سيدان، SUV، شاحنة...',
    registrationPlaceholder: 'مثال: 12345 TUN 01',

    centerTitle: 'اختر مركزك',
    center: 'مركز الفحص',
    visitType: 'نوع الزيارة',
    date: 'التاريخ المفضل',
    time: 'الوقت المفضل',
    selectCenter: 'اختر مركزاً',
    selectVisitType: 'اختر نوع الزيارة',
    selectTime: 'اختر الوقت',
    visitTypes: ['فحص دوري', 'إعادة الفحص', 'التسجيل الأول'],
    centers: [
      'مركز تونس وسط المدينة',
      'مركز أريانة',
      'مركز بن عروس',
      'مركز منوبة',
      'مركز صفاقس',
      'مركز سوسة',
    ],

    confirmTitle: 'ملخص موعدك',
    confirmSubtitle: 'تحقق من بياناتك قبل التأكيد',
    labelName: 'الاسم الكامل',
    labelCar: 'المركبة',
    labelRegistration: 'رقم التسجيل',
    labelCenter: 'المركز',
    labelVisit: 'نوع الزيارة',
    labelDate: 'التاريخ',
    labelTime: 'الوقت',

    nextButton: 'التالي',
    backButton: 'رجوع',
    confirmButton: 'تأكيد الموعد',
    successMessage: '!تم تأكيد الموعد بنجاح',

    articles: [
      {
        id: 1,
        tag: 'لوائح',
        title: 'معايير الفحص التقني الجديدة لعام 2024',
        excerpt: 'تُقدّم معايير الفحص المحدّثة متطلبات أكثر صرامة للمركبات التي تعمل بالديزل، لا سيما فيما يتعلق بانبعاثات الملوثات.',
        date: '15 يناير 2024',
      },
      {
        id: 2,
        tag: 'معلومات',
        title: 'تكرار الفحص حسب عمر المركبة',
        excerpt: 'تذكير بالمواعيد: المركبات التي لا يتجاوز عمرها 4 سنوات معفاة، وتلك بين 4 و10 سنوات تخضع للفحص كل سنتين، وما فوق ذلك سنوياً.',
        date: '8 مارس 2024',
      },
      {
        id: 3,
        tag: 'نصائح',
        title: 'جهّز مركبتك قبل الفحص',
        excerpt: 'بعض الفحوصات البسيطة قبل زيارتك يمكن أن تجنبك إعادة الفحص: الأضواء، الإطارات، مستويات السوائل، والمكابح.',
        date: '22 أبريل 2024',
      },
    ],
  },
};
