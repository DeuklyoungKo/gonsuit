import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseAnonKey || "placeholder"
);

if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NODE_ENV === "production") {
        console.warn("Supabase credentials are missing in production!");
    }
}
