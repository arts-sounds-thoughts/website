# arts-sounds-thoughts.de

Website von **Arts, Sounds & Thoughts e.V.** und dem **Uni-Musical**.
Statische Seite mit [Astro](https://astro.build), ausgeliefert über GitHub Pages.

## Entwicklung

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # erzeugt dist/
npm run preview    # gebaute Seite lokal ansehen
```

Node.js ≥ 22.

## Wo steht was?

| Inhalt | Datei |
|---|---|
| Vereinsdaten, Navigation, Premiere, Trailer, Aufzeichnung, Spendenkonto | `src/data/site.ts` |
| Handlung, Hörproben, Liedzitat, Mitwirkende | `src/data/musical.ts` |
| Seiten | `src/pages/*.astro` |
| Bausteine (YouTube mit Zwei-Klick-Lösung, Hörproben, Liedzitat, Spenden) | `src/components/` |
| Bilder (werden beim Build optimiert) | `src/assets/img/` |
| Audio, Favicon | `public/` |
| Farben, Schriften | `src/styles/global.css` |

Die meisten inhaltlichen Änderungen betreffen nur die zwei Dateien in `src/data/`.

## Veröffentlichen

Jeder Push auf `main` baut die Seite und veröffentlicht sie (`.github/workflows/deploy.yml`).

## Secret-Scan

In dieses Repo gehören nur Website-Inhalte. Keine Zugangsdaten, keine internen Dokumente.
[gitleaks](https://github.com/gitleaks/gitleaks) prüft lokal vor jedem Commit und in der CI:

```bash
brew install gitleaks
git config core.hooksPath .githooks
```
