# Jak pracujemy nad stroną Sąsiedzi (dla Bartka i Hani)

Krótka instrukcja bez żargonu. Pracujemy we dwoje, na osobnych komputerach,
przez Claude Code. Ta kartka mówi, **kto co robi i w jakiej kolejności**.

---

## 4 pojęcia na start (obrazowo)

- **main** — oficjalna, "czysta" wersja strony (ta, która idzie na żywo pod adres
  hannahaj.github.io/sasiedzi-website). Nigdy nie pracujemy bezpośrednio na niej,
  żeby jej nie popsuć.
- **branch (gałąź, np. bartek/... albo hanna/...)** — Twoja prywatna kopia robocza.
  Każde z nas ma swoje gałęzie. Mieszasz do woli, main się nie rusza, dopóki sam tego
  nie zatwierdzisz.
- **commit** — zapisany "punkt kontrolny" ze zmianami (jak zapis w grze), z opisem co się zmieniło.
- **PR (Pull Request)** — prośba "proszę wrzucić moją gałąź do main".
  To miejsce na GitHubie, gdzie ogląda się zmiany i klika "zatwierdź".

**Po co to?** Bo pracujemy we dwoje. Gdyby oboje pisali prosto do main,
nadpisalibyśmy sobie nawzajem robotę. Gałęzie i PR-y sprawiają, że każdy pracuje
osobno, a zmiany łączą się kontrolowanie, jedna po drugiej.

---

## Podział ról

- **Claude Code (konsola)** robi całą techniczną część: pobiera najnowszą wersję,
  zakłada gałąź, sprawdza czy build działa, commituje, pushuje i wystawia PR.
  Nie musisz znać żadnej komendy.
- **Ty (na github.com)** robisz tylko rzeczy "na kliknięcia": oglądasz zmiany w kodzie,
  klikasz zielony przycisk merge. Stronę po merge możesz sprawdzić pod adresem
  hannahaj.github.io/sasiedzi-website po ok. 1 minucie od zatwierdzenia.

---

## Krok po kroku. Jedno zadanie od początku do końca

1. **Zlecasz zadanie** Claude'owi w konsoli (np. "zmień teksty w sekcji hero").
2. **Claude w konsoli** (Ty nic nie robisz): pobiera najnowszy main, zakłada gałąź
   bartek/nazwa-zadania lub hanna/nazwa-zadania, wprowadza zmiany, uruchamia
   `npm run build` (musi przejść), commit, push, wystawia **PR** i podaje Ci link.
3. **Ty na GitHubie** (wchodzisz w link do PR):
   - Sprawdź zakładkę **Files changed** — zobaczysz dokładnie co się zmieniło.
   - Coś nie tak? Napisz Claude'owi, poprawki same doklejają się do tego samego PR-a.
   - Jest dobrze? Klikasz **"Squash and merge" > "Confirm" > "Delete branch"**.
4. **Po merge** strona aktualizuje się automatycznie w ciągu minuty.
   Mówisz Claude'owi "zmergowane", on podciąga świeży main.
   Druga osoba u siebie też pobiera najnowszą wersję i oboje macie znów to samo.

---

## Dlaczego "Squash and merge"?

"Squash" zgniata wszystkie drobne commity z gałęzi w **jeden czysty wpis** w historii main.
Zawsze wybieraj opcję ze słowem "Squash" przy mergowaniu PR-a.

---

## Dwie żelazne zasady dla nas obojga

1. **Jedno zadanie = jedna osoba.** Nie ruszaj plików, nad którymi akurat
   pracuje druga osoba, bez ustalenia. Jeśli nie wiesz co druga osoba robi,
   sprawdź otwarte PR-y na GitHubie.
2. **Zawsze zaczynamy od pobrania najnowszego main.** Inaczej pracowałbyś
   na starej wersji i przy mergowaniu robiłby się bałagan (tzw. konflikt).
   Claude robi to automatycznie na początku każdego zadania.

---

## Twoja ściąga (to naprawdę wszystko, co robisz Ty)

1. Zlecasz zadanie w konsoli.
2. Dostajesz link do PR.
3. Sprawdzasz zakładkę "Files changed" na GitHubie.
4. OK? **Squash and merge > Confirm > Delete branch.** Nie OK? Piszesz, co poprawić.
5. Mówisz "zmergowane".
