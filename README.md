This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
