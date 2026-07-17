# Roadmapa. Sąsiedzi

## Zrobione

- [x] Landing page (wszystkie sekcje: nav, hero, usługi, jak działamy, pakiet, cennik, portfolio, FAQ, kontakt, stopka)
- [x] Animacje SVG (panorama budynków, zapalające się okna, gwiazdy, knock na CTA)
- [x] SEO: title, meta description, H1-H3, Open Graph, canonical, JSON-LD (LocalBusiness + FAQPage)
- [x] Sitemap (auto-generowany przez @astrojs/sitemap)
- [x] robots.txt z botami AI (GEO)
- [x] Favicon z logo marki (link dodany, plik z oficjalnych assets — wymaga dopracowania)
- [x] Portfolio: TagTracks, Znicze Wujka Karasia, Transport Ciężarowy Marek Stachowiak
- [x] GitHub Actions (auto-deploy na GitHub Pages)
- [x] Wersja mobilna (responsywna)
- [x] Rozbudowana stopka SEO (nawigacja, usługi, dane kontaktowe)

## Do zrobienia

- [ ] Favicon: dopracować — aktualny SVG może wymagać korekty rozmiaru lub wersji pod ciemne/jasne tło przeglądarki
- [ ] Formularz kontaktowy: podpiąć realną wysyłkę (np. Resend lub Formspree)
- [ ] Własna domena hejsasiedzi.pl: zaktualizować config i URLe
- [ ] Google Search Console: dodać właściwość i przesłać sitemap
- [ ] Opinie klientów: dodać sekcję z Google Reviews lub ręcznymi cytatami
- [ ] Zdjęcie OG (og:image): grafika do podglądu przy udostępnianiu linku
- [ ] Rozbudowa portfolio o kolejne projekty

## Podstrony usług. Do rozważenia w przyszłości

Obecnie strona to jeden landing page. To wystarczy na start. Jedna mocna strona bije dziesięć słabych.

Gdy marka okrzepnie i pojawią się pierwsze projekty, warto rozbudować serwis o podstrony usług. Każda z nich może rankować niezależnie na inne słowo kluczowe:

| Podstrona | Docelowa fraza |
|---|---|
| `/strony-internetowe-wroclaw` | "strony internetowe Wrocław" |
| `/seo-lokalne-wroclaw` | "SEO lokalne Wrocław", "pozycjonowanie lokalne" |
| `/logo-identyfikacja-wizualna` | "logo dla małej firmy Wrocław" |
| `/strony-dla-hydraulikow` | "strony internetowe hydraulik Wrocław" |
| `/strony-dla-restauracji` | "strony internetowe restauracja Wrocław" |

Astro obsługuje podstrony natywnie. Wystarczy dodać pliki do `src/pages/`. Nie wymaga przepisywania projektu.
