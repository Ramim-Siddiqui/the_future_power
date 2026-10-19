# Future Power

Marketing website for Future Power, a solar energy company based in Karachi, Pakistan. The React frontend presents the company's products, solutions and FAQs across six pages, and a small Express backend receives contact-form submissions and forwards them by email through a Gmail account using Nodemailer.

## Features

Derived from the routes in `frontend/src/components/Routing.js` and the backend in `backend/index.js`.

| Route | Page | What it shows |
|---|---|---|
| `/` | Landing | Full-screen video background with a welcome message |
| `/home` | Home | About Us, company motto, mission and vision, core values, and "our difference" sections with scroll animations (AOS) |
| `/products` | Products | Partner brands (LONGi Solar, Sungrow, Huawei and other panel/inverter manufacturers) and product categories: solar panels, inverters, energy storage, monitoring, mounting and balance-of-system components |
| `/solutions` | Solutions | Company approach, product-quality guarantees, values and mission, and a "solar plans" call to action |
| `/faqs` | FAQs | Accordion of questions grouped into General, Homeowners, Businesses and Communities |
| `/contact` | Contact | Form (name, email, mobile, message) that posts to the backend, which emails the submission to the company inbox |

Shared UI: a responsive Bootstrap navbar with logo, and a footer with business hours, phone numbers, a Google Maps address link, and Facebook/LinkedIn links. A short welcome audio clip plays on the first user interaction.

## Tech stack

Versions are the ranges declared in each `package.json`.

**Frontend** (`frontend/`, bootstrapped with Create React App)

| Package | Version |
|---|---|
| react / react-dom | ^18.3.1 |
| react-scripts (Create React App) | 5.0.1 |
| react-router-dom | ^6.23.1 |
| react-bootstrap / bootstrap | ^2.10.2 / ^5.3.3 |
| axios | ^1.7.2 |
| aos (Animate On Scroll) | ^2.3.4 |
| @fortawesome/react-fontawesome, free-solid-svg-icons, free-brands-svg-icons | ^0.2.2 / ^6.5.2 / ^6.5.2 |
| react-icons | ^5.2.1 |
| @testing-library/react, jest-dom, user-event | ^13.4.0 / ^5.17.0 / ^13.5.0 |
| web-vitals | ^2.1.4 |

**Backend** (`backend/`, Node.js)

| Package | Version |
|---|---|
| express | ^4.19.2 |
| nodemailer | ^6.9.13 |
| cors | ^2.8.5 |
| body-parser | ^1.20.2 |
| dotenv | ^16.4.5 |
| nodemon | ^3.1.3 |

The backend includes a `vercel.json` (`@vercel/node` builder) for deployment on Vercel.

## Project structure

```
the_future_power/
├── .gitignore
├── README.md
├── backend/
│   ├── .env.example      # environment variable template
│   ├── index.js          # Express server with the /submit-form route
│   ├── package.json
│   └── vercel.json       # Vercel deployment config
└── frontend/
    ├── public/           # index.html, manifest.json, logo.png, robots.txt
    ├── src/              # assets/ (images, video, audio), components/, css/, App.js, index.js
    ├── package.json
    └── README.md         # Create React App notes
```

Inside `frontend/src/components/` there is one component per page (`Root`, `Home`, `Products`, `Solutions`, `FAQS`, `Contact`) plus `Header`, `Footer` and `Routing`; `frontend/src/css/` holds one stylesheet per component.

## Setup and run

Prerequisites: Node.js and npm. The repository does not pin a Node version; Node 18 LTS or newer is recommended. There is no root `package.json`, so the backend and frontend are installed and run separately.

### Backend (port 5000)

```bash
cd backend
npm install
cp .env.example .env    # then fill in GMAIL_USER and GMAIL_PASS
npm start               # runs "nodemon index.js" -> http://localhost:5000
```

Environment variables (see `backend/.env.example`):

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Port to listen on. Defaults to `5000`. |
| `GMAIL_USER` | Yes | Gmail address used to send the email. It is also the recipient. |
| `GMAIL_PASS` | Yes | Gmail App Password for that account (not the normal login password). |

### Frontend (port 3000)

```bash
cd frontend
npm install
npm start               # runs "react-scripts start" -> http://localhost:3000
npm run build           # production build into frontend/build
npm test                # runs "react-scripts test" (see Limitations)
```

Note: the contact form posts to a hard-coded production URL (`https://the-future-power-backend.vercel.app/submit-form`) in `frontend/src/components/Contact.js`. To exercise the form against a local backend, change that URL to `http://localhost:5000/submit-form`.

## API routes

All routes are defined in `backend/index.js`. CORS is enabled for all origins and request bodies are parsed as JSON.

| Method | Path | Request body (JSON) | Success response | Error response |
|---|---|---|---|---|
| `POST` | `/submit-form` | `{ "name", "email", "mobile", "problem" }` | `200` `{ "message": "Form submitted successfully" }` | `500` `{ "error": "An error occurred while sending the email" }` |

`POST /submit-form` builds a plain-text email containing the four fields and sends it via Gmail to `GMAIL_USER` with the subject "New Contact Form Submission".

## Limitations / next steps

- **No working tests.** `frontend/src/App.test.js` is the unmodified Create React App sample test; it looks for "learn react" text that the app does not render, so `npm test` fails. The backend `npm test` script is the npm placeholder that exits with an error.
- **Large media committed to the repo.** `frontend/src/assets` holds roughly 56 MB of video, images and audio (`vid1.mp4` alone is about 24 MB). These are imported through webpack and served with the bundle, which makes the first load of `/` and `/home` heavy. Compressing the videos, hosting them on a CDN, or using Git LFS would help.
- **Hard-coded backend URL.** The production API URL lives in `Contact.js` instead of an environment variable such as `REACT_APP_API_URL`.
- **No validation or abuse protection** on `/submit-form`: fields are not validated server-side, there is no rate limiting or CAPTCHA, and CORS is open to every origin.
- **External image hotlink.** `Home.js` loads one image directly from `imageio.forbes.com`; it will break if that URL changes.
- **Unused dependencies and files.** `react-tsparticles` and `tsparticles` are declared in `frontend/package.json` but never imported; `frontend/src/logo.svg` is unused. `nodemon` is listed as a runtime dependency because the backend `start` script uses it.
- **Leftover Create React App defaults.** `public/index.html` and `public/manifest.json` still reference `favicon.ico`, `logo192.png` and `logo512.png`, which do not exist in `public/`; the manifest name is "Create React App Sample" and the meta description is the CRA default.
- **Audio details.** The welcome clip is a `.wav` file declared with `type="audio/mpeg"` in `Header.js`, and it auto-plays on the first mouse movement, which some users may find intrusive.
- **No monorepo tooling.** Backend and frontend are independent npm projects with no shared scripts, linting config beyond CRA's defaults, or CI.
