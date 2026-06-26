-- ===========================================================
-- iStandaarden Retro — database-schema voor Supabase
-- Plak dit volledig in: Supabase dashboard → SQL Editor → Run
-- ===========================================================

-- Sessies
create table if not exists public.sessions (
  code              text primary key,
  title             text not null,
  total_seconds     integer not null default 300,
  remaining_seconds integer not null default 300,
  running           boolean not null default false,
  deadline          bigint,            -- epoch ms; gezet wanneer de timer loopt
  phase             text not null default 'adding',  -- adding | revealed | voting | done
  created_at        timestamptz not null default now()
);

-- Kaartjes
create table if not exists public.cards (
  id            text primary key,
  session_code  text not null references public.sessions(code) on delete cascade,
  col           text not null,         -- plus | minus | actie
  content       text not null,
  author        text not null,
  is_private    boolean not null default true,
  voters        jsonb not null default '[]'::jsonb,
  created_at    timestamptz not null default now()
);

create index if not exists cards_session_idx on public.cards(session_code);

-- ===========================================================
-- Realtime aanzetten (nodig voor live synchronisatie)
-- ===========================================================
alter publication supabase_realtime add table public.sessions;
alter publication supabase_realtime add table public.cards;

-- ===========================================================
-- Row Level Security
-- Eenvoudige opzet voor een intern hulpmiddel: iedereen met de
-- publieke anon-key mag lezen/schrijven. Wie de sessiecode niet
-- kent, vindt de sessie niet. Wil je het strakker? Voeg dan
-- bijv. auth of een per-sessie wachtwoord toe.
-- ===========================================================
alter table public.sessions enable row level security;
alter table public.cards    enable row level security;

create policy "sessions_all" on public.sessions
  for all using (true) with check (true);

create policy "cards_all" on public.cards
  for all using (true) with check (true);
