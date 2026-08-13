const SUPABASE_URL = "GELI_SUPABASE_URL_HAADA";
const SUPABASE_ANON_KEY = "GELI_SUPABASE_ANON_KEY_HAADA";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
