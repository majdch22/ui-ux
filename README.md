# Centre de Contrôle Technique — Booking App

A multilingual vehicle inspection booking app built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step.

## Live Demo

Deployed automatically to GitHub Pages on every push to `main`.

## Features

- **3 languages** — French, English, Arabic (with full RTL support)
- **Articles page** with a prominent Book Appointment button
- **3-step booking form** — Personal Info → Centre & Schedule → Confirmation
- **Required field validation** — can't advance without filling in all fields
- **Language switcher** always accessible in the header
- Mobile-friendly, responsive layout

## User Flow

```
Language Selection → Articles & News → Book Appointment
                                             ↓
                                 Step 1: Personal Info
                                   (name, vehicle, plate)
                                             ↓
                                 Step 2: Centre & Schedule
                                   (centre, visit type, date, time)
                                             ↓
                                 Step 3: Confirmation
                                   → Return to Home Page
```

## How to Run Locally

No install needed. Just open `index.html` directly in your browser:

```
Double-click index.html
```

Or serve it with any static file server, for example:

```bash
npx serve .
```

## Project Structure

```
.
├── index.html               # The entire app — HTML, CSS, and JS in one file
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions: auto-deploy to GitHub Pages
└── README.md
```

## Deployment

The app is deployed automatically via GitHub Actions whenever you push to `main`. The workflow uploads `index.html` straight to GitHub Pages — no build step required.

To set it up on a new repository:

1. Go to **Settings → Pages**
2. Set the source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest
