# Sąsiedzi. Strona firmowa

Jednostronicowy landing page marki **Sąsiedzi**, agencji z Wrocławia tworzącej strony internetowe, identyfikację wizualną i SEO lokalne dla małych firm. Strona docelowa: sasiedzi.pl.

## Stack

- [Astro](https://astro.build) (static site generator, output: czysty HTML/CSS)
- Vanilla CSS (własne style, brak frameworka UI)
- Google Fonts: Poppins + Manrope
- SEO: meta tags, canonical, Open Graph, JSON-LD (LocalBusiness, FAQPage), sitemap.xml, robots.txt

## Struktura

```
src/pages/
  index.astro       # cała strona: sekcje, style, skrypty inline
public/
  projekty/         # zrzuty ekranu projektów portfolio (PNG)
  logo-svg/         # pliki logo SVG (warianty kolorystyczne)
  favicon.svg       # ikona marki
  robots.txt        # dopuszcza wszystkich botów + boty AI (GEO)
.github/
  workflows/
    deploy.yml      # auto-deploy na GitHub Pages przy każdym push do main
docs/
  roadmapa.md       # plan rozwoju strony
  seo-checklist.md  # checklisty SEO przed/po wdrożeniu
```

## Uruchomienie

```
npm install
npm run dev    # http://localhost:4321/sasiedzi-website/
npm run build  # build produkcyjny, uruchamiaj przed każdym PR
```

## Współpraca

Praca na branchach (`bartek/*`, `hanna/*`) + Pull Requesty do `main` (squash merge). Szczegółowa procedura i twarde zasady: [CLAUDE.md](CLAUDE.md). Roadmapa projektu: [docs/roadmapa.md](docs/roadmapa.md).

## Wdrożenie

Hosting: GitHub Pages (auto-deploy przez GitHub Actions po każdym push do `main`).  
Strona: https://hannahaj.github.io/sasiedzi-website/  
Docelowo: własna domena `sasiedzi.pl`. Zmienić `site` i `base` w `astro.config.mjs` oraz zaktualizować URL w `canonical`, `og:url` i `robots.txt`.
