# CLAUDE.md — Sąsiedzi

Zasady i konwencje projektu. Czytaj przed każdą sesją pracy.

## Projekt

Landing page marki Sąsiedzi (agencja webowa, Wrocław Krzyki). Jedna strona (`src/pages/index.astro`) — cały HTML, CSS i skrypty są w tym jednym pliku. Nie rozbijaj na komponenty bez uzgodnienia z zespołem.

## Współpraca

- Branche: `hanna/*` i `bartek/*`
- Pull Requesty do `main` — squash merge
- Przed otwarciem PR: `npm run build` musi przejść bez błędów
- Nie pushuj bezpośrednio do `main`

## Konwencje treści

- Brak em dashów (—) w tekstach — używaj kropki lub przepisuj zdanie
- Język: polski (treści i komentarze w kodzie)
- Ceny zawsze zgodne między sekcją Cennik, FAQ i JSON-LD
- Po każdej zmianie treści sprawdź: title, meta description, JSON-LD

## Konwencje kodu

- Stack: Astro 7 + Vanilla CSS — nie dodawaj Reacta, Tailwinda ani innych zależności bez uzgodnienia
- Obrazy portfolio: `public/projekty/`, format PNG, nazwa kebab-case (np. `nazwa-projektu.png`)
- `object-position: left top` na obrazach portfolio (żeby pokazywały lewą stronę zrzutów)
- Nowe logo/ikony: `public/logo-svg/`

## SEO — zasady

- Sitemap generowany automatycznie przez `@astrojs/sitemap` przy każdym buildzie
- robots.txt: nie usuwaj wpisów botów AI (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- JSON-LD: dwa bloki — LocalBusiness i FAQPage — muszą być zsynchronizowane z treścią strony
- Po przejściu na własną domenę: zaktualizować `site` w `astro.config.mjs`, `canonical`, `og:url` i `Sitemap:` w `robots.txt`

## Uruchomienie

```
npm install
npm run dev    # http://localhost:4321/sasiedzi-website/
npm run build  # build produkcyjny
```
