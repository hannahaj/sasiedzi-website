# Checklista SEO

## Przed każdym wdrożeniem

- [ ] `npm run build` przechodzi bez błędów
- [ ] Title: max 60 znaków, słowo kluczowe na początku
- [ ] Meta description: 140-160 znaków, zawiera cenę lub CTA
- [ ] H1: jedno na stronie, zawiera "strony internetowe" i "Wrocław"
- [ ] Ceny w FAQ zgodne z cennikiem i JSON-LD
- [ ] Nowe obrazy mają atrybut `alt`
- [ ] sitemap-index.xml generuje się w `/dist`

## Po wdrożeniu na własną domenę

- [ ] Zaktualizować `site` w `astro.config.mjs` na `https://sasiedzi.pl`
- [ ] Usunąć `base: '/sasiedzi-website'` z `astro.config.mjs`
- [ ] Zaktualizować `canonical` i `og:url` w `index.astro`
- [ ] Zaktualizować `Sitemap:` w `robots.txt`
- [ ] Dodać domenę w Google Search Console
- [ ] Przesłać sitemap do Google Search Console
- [ ] Sprawdzić wizytówkę Google Maps (Google Business Profile)
