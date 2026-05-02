# Centre de Contrôle Technique — Booking App

A multilingual vehicle inspection booking web app built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- 🌐 **3 languages**: French, English, Arabic (with RTL support)
- 📰 **Articles page** with a prominent "Book Appointment" CTA in the heading
- 📋 **3-step reservation form**: Personal Info → Centre & Schedule → Confirmation
- 🔄 Language switcher always accessible in the header
- ✅ Clean, accessible, mobile-friendly UI

## User Flow

```
Language Selection → Articles & News → Book Appointment
                                          ↓
                              Step 1: Personal Info
                                          ↓
                              Step 2: Centre & Schedule
                                          ↓
                              Step 3: Confirmation
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                     # Root component & step routing
│   ├── components/
│   │   ├── Header.tsx              # Sticky header + language switcher
│   │   ├── LanguageSelector.tsx    # Language choice page
│   │   ├── ArticlesSection.tsx     # Articles page with booking button
│   │   ├── PersonalInfoStep.tsx    # Step 1: personal data
│   │   ├── CenterInfoStep.tsx      # Step 2: centre, date & time
│   │   └── ConfirmationStep.tsx    # Step 3: summary + confirm
│   └── i18n/
│       └── translations.ts         # FR / EN / AR strings
├── styles/
│   └── index.css                   # Tailwind base + custom animations
└── main.tsx                        # Entry point
```

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
