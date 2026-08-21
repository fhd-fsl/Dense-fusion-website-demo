# Dense Fusion Website

Dense Fusion's Website is a modern, high-performance web platform built to showcase advanced HPC geospatial, satellite imagery, AI, and environmental monitoring solutions. The platform features dedicated pages for Dense Fusion's Services, Industries and solutions along with comprehensive detail about the company and its mission.

## Tech Stack

This project is built using:
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Custom CSS and Lenis for smooth scrolling and scroll reveals
- **Icons:** Lucide React & custom SVGs

## Features

- **Modern UI/UX:** Sleek dark mode interfaces, product animations, glassmorphism, dynamic gradients, and smooth scroll reveal animations.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.

## Getting Started

### Prerequisites: Environment Variables

For the contact form to work, you need a [Resend](https://resend.com) API key.

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and configure your settings:
   - `RESEND_API_KEY`: Your API key from the Resend dashboard.
   - `CONTACT_EMAIL`: The email address that will receive the contact form submissions (e.g., `info@densefusion.com`).

*Note for testing:* By default on free accounts, you can only send emails to the email address you signed up with. These test emails may go to your Spam folder due to the generic `onboarding@resend.dev` testing domain.

### Production Setup: Verifying Your Domain

To ensure contact form emails bypass spam filters and are successfully delivered to `info@densefusion.com`, you must verify your domain in the [Resend Dashboard](https://resend.com). Once your domain (e.g., `densefusion.com`) is registered and verified via DNS, update the `src/actions/contact.ts` file to use your new domain as the sender (e.g., `from: "Dense Fusion Contact <noreply@densefusion.com>"`).

### Running the App

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Contains all Next.js App Router pages (`/solutions`, `/services`, `/industries`, `/contact`, etc.)
- `/src/components`: Reusable UI components (Navbar, Footer, ScrollReveal, Buttons, etc.)
- `/public`: Static assets, SVG icons, fonts, and imagery used throughout the site