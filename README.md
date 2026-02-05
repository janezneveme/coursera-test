# Računko — demo spletna aplikacija za izdajanje računov

Moderna, modularna front-end aplikacija za samostojne podjetnike (s.p.), ki omogoča:

- vnos metapodatkov računa,
- vnos podatkov izdajatelja in stranke,
- upravljanje postavk računa,
- samodejni izračun osnove, DDV in končnega zneska,
- shranjevanje osnutka v `localStorage`,
- izvoz preko print pogleda.

## Zagon

Ker gre za statično aplikacijo (HTML/CSS/JS), jo lahko zaženeš z lokalnim strežnikom:

```bash
python3 -m http.server 4173
```

Nato odpri:

- `http://localhost:4173`

## Struktura

- `index.html` — glavni layout aplikacije.
- `src/main.js` — inicializacija modulov in globalni eventi.
- `src/components/` — UI moduli po sekcijah.
- `src/utils/` — util funkcije (npr. format valute).
- `src/styles/main.css` — celoten moderni UI/UX slog.
