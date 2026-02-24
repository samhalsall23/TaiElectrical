# TAI Electrical — Production Website

A production marketing website for **TAI Electrical**, a Melbourne-based electrician business offering residential, commercial, and industrial electrical services. The site is a single-page application with animated sections covering the company's services, process, past projects, live Google Reviews, and a contact/quote form.
Live at **https://taielectrical.com.au**

---

## Features

-   **Google Reviews integration** — live customer reviews rendered as an auto-scrolling carousel
-   **Contact / quote form** — validated, secure submission workflow
-   **Services section** — emergency callouts, general electrical, lighting, data cabling, installations, renovations
-   **Our Process section** — three-step visual timeline
-   **About Us** — company background and certification modal
-   **Projects gallery** — image gallery with full-screen modal
-   **Scroll-triggered animations** throughout the page
-   **Loading overlay** on initial load
-   **Fully responsive** mobile-first layout

---

## Tech Stack

| Area       | Choice                  | Notes                                 |
| ---------- | ----------------------- | ------------------------------------- |
| Framework  | Next.js 16 (App Router) | Server Actions used for form handling |
| Language   | TypeScript              |                                       |
| Styling    | Tailwind CSS            | tailwind-merge + tailwindcss-animate  |
| Animations | Framer Motion           | Scroll-triggered `InViewSection`      |
| UI         | shadcn/ui (Radix UI)    | Buttons, inputs, dialog, carousel     |
| Forms      | react-hook-form + zod   | Client validation before submission   |
| Email      | nodemailer              | Gmail SMTP transport                  |
| Reviews    | react-google-reviews    | Featurable widget integration         |

---

## Key Implementations

### Contact Form

Submissions are handled end-to-end through a **Next.js Server Action** (`src/app/actions/sendEmail.ts`):

1. User enters name, email, phone, message
2. Client validation via `react-hook-form` + `zod`
3. Server Action creates `nodemailer` transporter
4. Email sent via Gmail SMTP (`smtp.gmail.com`, port 465, SSL) using environment credentials
5. Success → confirmation message
   Failure → error + fallback phone contact

Environment variables required:

```
AUTH_EMAIL=
APP_PASSWORD=
EMAIL_TO=
```

Business constants (phone, email, ABN, licence, etc.) are stored in:

```
src/lib/constants.ts
```

---

### Google Reviews

The reviews section uses a **Featurable widget ID** hardcoded in:

```
src/components/Reviews.tsx
```

-   No API key required
-   No backend polling
-   Updates managed entirely in the Featurable dashboard

To change displayed reviews or styling, update widget settings in Featurable — no code changes needed.

---

## Development

Install and run locally:

```
nvm install
nvm use
npm install
npm run dev
```

Create a `.env.local` file in the project root:

```
AUTH_EMAIL=
APP_PASSWORD=
EMAIL_TO=
```

---

## Deployment

The site is deployed on **Vercel**.

-   Pushes to `main` trigger automatic deployments
-   Environment variables must be configured in
    **Project Settings → Environment Variables**

---

## Future Improvements

-   Replace placeholder stock imagery with branded project photography
-   Add Instagram feed integration to showcase recent work
-   Introduce automated testing (unit + integration)
-   Implement Storybook for isolated component development and UI consistency

---
