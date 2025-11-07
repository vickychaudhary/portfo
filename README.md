# Portfolio

Personal portfolio built with React, Vite, Framer Motion, and lucide-react.

## Getting Started

```bash
npm install
npm run dev
```

## Contact Form Configuration

The “Send a Message” form posts to a Vercel serverless function (`/api/contact`) backed by Resend. Configure these before deploying:

1. Create an `.env.local` file at the project root (ignored by git by default) and add the sensitive keys there. When deploying to Vercel, mirror the same variables in the project’s Environment Variables settings.
2. Add:
   ```
   VITE_CONTACT_ENDPOINT=/api/contact
   RESEND_API_KEY=your-resend-api-key
   CONTACT_RECIPIENT_EMAIL=you@example.com
   ```
3. Restart the dev server so Vite picks up the env variables.

If these variables are missing, the UI will surface an error when the form is submitted. Make sure to set the same keys in your Vercel project settings for production deployments.

## Production Build

```bash
npm run build
```
