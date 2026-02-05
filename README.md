# Računko — demo spletna aplikacija za izdajanje računov

Moderna, modularna front-end aplikacija za samostojne podjetnike (s.p.), ki omogoča:

- vnos metapodatkov računa,
- vnos podatkov izdajatelja in stranke,
- upravljanje postavk računa,
- samodejni izračun osnove, DDV in končnega zneska,
- shranjevanje osnutka v `localStorage`,
- izvoz preko print pogleda.

## Lokalni zagon

Ker gre za statično aplikacijo (HTML/CSS/JS), jo lahko zaženeš z lokalnim strežnikom:

```bash
python3 -m http.server 4173
```

Nato odpri:

- `http://localhost:4173`

## Objava na GitHub Pages

Ta projekt je statičen, zato ga GitHub Pages lahko objavi neposredno iz branche-a.

### Koraki

1. Commit + push sprememb v repozitorij (npr. `master` ali `main`).
2. `Settings` → `Pages`.
3. Pri `Source` izberi **Deploy from a branch**.
4. Izberi branch (`master` ali `main`) in mapo **`/(root)`**.
5. Počakaj 1–5 minut, da build zaključi.

### Zakaj je gumb **Save** včasih siv (disabled)?

Najpogostejši razlogi:

- nastavitve so že enake trenutnim (npr. branch `master` + `/(root)`), zato ni nič novega za shraniti,
- GitHub Pages je ravno v procesu builda (“Your GitHub Pages site is currently being built ...”),
- nimaš dovolj pravic nad repozitorijem (potreben admin/write dostop do nastavitev).

Če vidiš sporočilo, da se stran že gradi iz izbranega branche-a, je to pravilno stanje — samo počakaj in nato odpri URL:

- **Project page**: `https://<uporabnik>.github.io/<repo>/`
- **User/Org page** (repo z imenom `<uporabnik>.github.io`): `https://<uporabnik>.github.io/`

## Struktura

- `index.html` — glavni layout aplikacije.
- `src/main.js` — inicializacija modulov in globalni eventi.
- `src/components/` — UI moduli po sekcijah.
- `src/utils/` — util funkcije (npr. format valute).
- `src/styles/main.css` — celoten moderni UI/UX slog.
