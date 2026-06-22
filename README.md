# iStandaarden Retro

Een online retrospectief-tool met privé kaartjes, timer en stemmen, in de
Rijksoverheid-/iStandaarden-huisstijl. Statische site (HTML/CSS/JS) met
Supabase als realtime database, gehost via GitHub + Vercel.

> Let op: het Rijksoverheid-lint in de banner is een **nabouw in de huisstijl**,
> niet het officiële logobestand. Voor extern/productiegebruik moet je het
> officiële logo en de huisstijlrichtlijnen van de Rijksoverheid volgen.

## Bestanden
- `index.html` — de applicatie (banner, groene menubalk, board, timer, stemmen)
- `config.js` — hier vul je je Supabase-sleutels in
- `supabase-schema.sql` — database-tabellen + realtime + beveiliging
- `vercel.json` — Vercel-configuratie

---

## 1. Supabase (database)
1. Maak een gratis project op https://supabase.com.
2. Open in je project **SQL Editor**, plak de inhoud van `supabase-schema.sql` en klik **Run**.
3. Ga naar **Project Settings → API** en kopieer:
   - **Project URL** → in `config.js` bij `SUPABASE_URL`
   - **anon public key** → in `config.js` bij `SUPABASE_ANON_KEY`

(De anon-key is bedoeld om publiek in de frontend te staan; de beveiliging zit in RLS.)

## 2. GitHub (hosting van de code)
```bash
cd istandaarden-retro
git init
git add .
git commit -m "iStandaarden retro tool"
# Maak op github.com een lege repo aan, bijv. istandaarden-retro, dan:
git remote add origin https://github.com/<jouw-account>/istandaarden-retro.git
git branch -M main
git push -u origin main
```

## 3. Vercel (publiceren)
1. Ga naar https://vercel.com en log in met je GitHub-account.
2. **Add New… → Project** en kies de repo `istandaarden-retro`.
3. Framework Preset: **Other** (het is een statische site, geen build-stap nodig).
4. Klik **Deploy**. Na ~20 seconden krijg je een URL zoals
   `https://istandaarden-retro.vercel.app`.

Elke `git push` naar `main` publiceert automatisch een nieuwe versie.

> Tip: zet je Supabase-sleutels liever niet in de repo? Dan kun je `config.js`
> uit git houden (`.gitignore`) en in Vercel een klein build-script gebruiken
> dat `config.js` genereert uit Environment Variables. Voor een intern hulpmiddel
> met alleen de publieke anon-key is direct in `config.js` zetten prima.

---

## Gebruik
- **Nieuwe sessie**: naam + sessienaam + timer → je krijgt een 6-letterige code.
- **Code delen**: knop in de groene menubalk kopieert een deelbare link (`...#CODE`).
- **Deelnemen**: anderen openen de link of vullen de code in.
- **Privé**: kaartjes zijn privé tot een facilitator op **Onthullen** klikt.
- **Stemmen**: 3 stemmen per kolom, niet op je eigen kaartjes.
- **Exporteren**: downloadt alle kaartjes met stemmen als tekstbestand.

## Zonder Supabase testen
Laat de sleutels in `config.js` leeg. De tool draait dan in lokale modus en
synchroniseert alleen tussen tabbladen op hetzelfde apparaat — handig om te
proberen voordat je Supabase koppelt.
