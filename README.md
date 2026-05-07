# MoveToEU

AI-powered EU visa guidance platform for digital nomads applying for Portugal (D8), Spain, and Greece digital nomad visas.

## Prerequisites

- Node.js 18+

## Local Development

```bash
git clone https://github.com/gestoriaglobal/movetoeu.git
cd movetoeu
npm install
cp .env.example .env.local
```

Fill in the three values in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://jbxwyiruxicmwayezhkz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # from Supabase Dashboard → Project Settings → API
GEMINI_API_KEY=                  # from Google AI Studio (aistudio.google.com)
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database Setup

Apply the migration to create the `leads` table before running the app:

```bash
supabase link --project-ref jbxwyiruxicmwayezhkz
supabase db push
```

Or run the SQL manually in **Supabase Dashboard → SQL Editor**:
`supabase/migrations/20260101000000_create_leads.sql`

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Select the `gestoriaglobal/movetoeu` repository
3. Set these environment variables in the Netlify dashboard before deploying:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://jbxwyiruxicmwayezhkz.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (the anon key from Supabase dashboard)
   - `GEMINI_API_KEY` = (your Gemini API key)
4. Deploy

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (Postgres)
- **AI:** Google Gemini 1.5 Flash (chat assistant)
- **Deployment:** Netlify

## Disclaimer

MoveToEU is an AI-powered guidance tool, not a law firm. We do not provide legal advice.
Always verify requirements with the official consulate or a licensed immigration attorney.
