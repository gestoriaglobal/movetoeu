import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
