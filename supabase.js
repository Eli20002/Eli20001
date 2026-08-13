const SUPABASE_URL =
  "https://praguwyyshmhmmowofqv.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYWd1d3l5c2htaG1tb3dvZnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NzA3NjYsImV4cCI6MjEwMjE0Njc2Nn0.oJjsk_93uBMLeT-8ydDeecJBpcKI4IwTZaVmDU0t-fk";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
