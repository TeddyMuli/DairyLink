import { createClient } from "@supabase/supabase-js";
import { TypedSupabaseClient } from "./types";

export const supabase: TypedSupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
