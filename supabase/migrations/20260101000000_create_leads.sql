-- MoveToEU: Create leads table for quiz submissions
-- Migration: 20260101000000_create_leads

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  nationality text,
  destination text,
  purpose text,
  income_range text,
  family_status text,
  eligibility_result text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Allow anonymous inserts (quiz submissions without login)
create policy "allow_anon_insert" on leads
  for insert to anon
  with check (true);

-- Allow service role full access (for admin dashboard)
create policy "allow_service_select" on leads
  for select to service_role
  using (true);

-- Index for email lookups
create index if not exists leads_email_idx on leads (email);
create index if not exists leads_destination_idx on leads (destination);
create index if not exists leads_created_at_idx on leads (created_at desc);
