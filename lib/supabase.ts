import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (_supabase) return _supabase;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Supabase environment variables are not configured.");
  }
  _supabase = createClient(url, key);
  return _supabase;
}

// Lazy proxy so imports of `supabase` still work at call sites
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabaseClient() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

export type LeadInsert = {
  email: string;
  name?: string;
  nationality?: string;
  destination?: string;
  purpose?: string;
  income_range?: string;
  family_status?: string;
  eligibility_result?: string;
};
