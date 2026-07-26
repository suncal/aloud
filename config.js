// ── Aloud care-circle backend config ──
// Fill these in to turn on the LIVE cloud care circle (real-time timeline on
// family phones + urgent alerts). Leave blank and the app stays fully on-device.
// Get both values from your free Supabase project: Settings → API.
window.ALOUD_CONFIG = {
  SUPABASE_URL: "",       // e.g. https://abcdxyz.supabase.co
  SUPABASE_ANON_KEY: ""   // the "anon public" key (safe to expose; RLS protects data)
};
