# MoveToEU

AI-powered EU visa guidance platform for digital nomads and remote workers.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (auth + Postgres)
- **AI:** OpenAI GPT-4o-mini (chat assistant)
- **Deployment:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/quiz` | 6-step eligibility quiz |
| `/results` | Personalized results (eligibility, checklist, timeline, red flags) |
| `/pricing` | 3-tier pricing + FAQ |
| `/blog` | Visa guides index |
| `/blog/[slug]` | Individual guide articles |
| `/api/chat` | Streaming AI chat endpoint (OpenAI) |

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=https://jbxwyiruxicmwayezhkz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

Get your Supabase anon key from: Supabase Dashboard → Project Settings → API

## Database Setup

Apply the migration file to create the `leads` table:

```bash
# Via Supabase CLI
supabase link --project-ref jbxwyiruxicmwayezhkz
supabase db push

# Or run the SQL manually in Supabase Dashboard → SQL Editor
# File: supabase/migrations/20260101000000_create_leads.sql
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Connect the repo to Vercel
2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `OPENAI_API_KEY`
3. Deploy

## Visa Coverage (V1)

- 🇵🇹 **Portugal D8 Digital Nomad Visa**
- 🇪🇸 **Spain Digital Nomad Visa**
- 🇬🇷 **Greece Digital Nomad Visa**

## Disclaimer

MoveToEU is an AI-powered guidance tool, not a law firm. We do not provide legal advice.
Always verify requirements with the official consulate or a licensed immigration attorney.
