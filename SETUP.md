# Aloud care-circle — 3-minute cloud setup (free)

This turns on the **live** care circle: family watch the timeline update in real time
on their own phones and get an instant alert when something urgent is said.

## 1. Create a free Supabase project
- Go to https://supabase.com → sign up → **New project** (free tier is enough).
- Wait ~2 min for it to provision.

## 2. Create the table (copy-paste, run once)
Open **SQL Editor** → New query → paste and Run:

```sql
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  circle text not null,
  name text,
  text text not null,
  urgent boolean default false,
  created_at timestamptz default now()
);
create index if not exists messages_circle_idx on messages (circle, created_at);

-- turn on realtime
alter publication supabase_realtime add table messages;

-- prototype access rules (see security note below)
alter table messages enable row level security;
create policy "circle insert" on messages for insert to anon with check (true);
create policy "circle read"   on messages for select to anon using (true);
```

## 3. Paste your keys
- Supabase → **Settings → API**. Copy **Project URL** and the **anon public** key.
- Put them into `config.js` (SUPABASE_URL and SUPABASE_ANON_KEY), commit, and redeploy.

Done — the "Sync to care circle" switch in the app will now work.

## Security — read this honestly
This is a **prototype** access model: the care-circle *code* is the only secret, and the
anon key can read the table. That's fine for a family trial, **not** for real deployment.
For production you must add **Supabase Auth** and per-circle Row-Level-Security policies so
only authenticated members of a circle can read its messages. This is health-adjacent data —
treat it accordingly before real users rely on it.
