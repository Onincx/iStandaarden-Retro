/* ===========================================================
   Configuratie
   Supabase dashboard → Project Settings → API
   -----------------------------------------------------------
   Laat SUPABASE_* leeg ("") voor LOKALE modus (sync alleen
   tussen tabbladen op hetzelfde apparaat).
   De anon-key is een publieke sleutel en mag in de frontend staan.
   =========================================================== */
window.RETRO_CONFIG = {
  SUPABASE_URL: "https://telacficcoyrncazhdbm.supabase.co",            // bijv. "https://abcd1234.supabase.co"
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbGFjZmljY295cm5jYXpoZGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMTIzMjIsImV4cCI6MjA5NzY4ODMyMn0.qV9Ltq5ZQ_IOQ05McTZ6Nb2Padvsq4ZAsjvyLMfBJLI",       // de "anon public" key

  /* Beheerderswachtwoord: alleen wie dit kent kan een sessie
     aanmaken. Deelnemers gebruiken alleen de sessiecode.
     Let op: dit staat in de frontend, dus het houdt collega's
     uit de aanmaak-knop, maar het is geen sterke beveiliging. */
  ADMIN_PASSWORD: "RetroTool2026!"
};
