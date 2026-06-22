/* ===========================================================
   Configuratie
   Supabase dashboard → Project Settings → API
   -----------------------------------------------------------
   Laat SUPABASE_* leeg ("") voor LOKALE modus (sync alleen
   tussen tabbladen op hetzelfde apparaat).
   De anon-key is een publieke sleutel en mag in de frontend staan.
   =========================================================== */
window.RETRO_CONFIG = {
  SUPABASE_URL: "",            // bijv. "https://abcd1234.supabase.co"
  SUPABASE_ANON_KEY: "",       // de "anon public" key

  /* Beheerderswachtwoord: alleen wie dit kent kan een sessie
     aanmaken. Deelnemers gebruiken alleen de sessiecode.
     Let op: dit staat in de frontend, dus het houdt collega's
     uit de aanmaak-knop, maar het is geen sterke beveiliging. */
  ADMIN_PASSWORD: "RetroTool2026!"
};
