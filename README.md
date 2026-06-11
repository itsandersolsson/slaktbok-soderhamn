# Släktbok över Söderhamns Stad — startsida

Detta är den publika startsidan (landningssidan) för
[Släktbok över Söderhamns Stad](https://soderhamn.altervista.org/),
ett släktforskningsprojekt av Anders Olsson.

Startsidan är en helt statisk sida: ren HTML, CSS och vanilla JavaScript.
Ingen byggprocess, inga ramverk, inga externa beroenden. Ladda bara upp
filerna till webbhotellets rot.

**Viktigt:** Den Min Släkt-genererade Släktboken (person- och rapportsidorna)
ingår *inte* i detta repo och ska aldrig röras. Startsidan länkar bara till
den (standard: `./slaktbok/`).

## Så uppdaterar du sidan

Allt uppdaterbart innehåll finns i **en enda fil**:

```
assets/data/site-data.js
```

Vid en ny uppdatering av Släktboken:

1. Ändra `coverageEnd` om täckningen utökats (t.ex. `1794` → `1795`)
2. Ändra `individualCount` till aktuellt antal individer
3. Lägg till en ny post **överst** i listan `updates` (mall finns i filen)

Statistik, tidslinje, "Senaste uppdatering" och hela uppdateringshistoriken
genereras automatiskt från dessa värden.

### Ändra länken till Släktboken

Ändra `slaktbokUrl` i `assets/data/site-data.js`. Uppdatera gärna även de
statiska reservlänkarna (`href="./slaktbok/"`) i `index.html` — de visas
bara för besökare utan JavaScript.

### Ändra introduktionstexten

Intron ligger som vanlig text i `index.html` (avsnittet "Om projektet"),
så att den syns även utan JavaScript.

## Filstruktur

```
index.html                 Startsidans struktur och statiska texter
assets/css/style.css       All formgivning
assets/js/main.js          Renderar statistik, källkort, tidslinje,
                           uppdateringshistorik och hero-animationen
assets/data/site-data.js   ← DEN FIL DU REDIGERAR VID UPPDATERINGAR
```

## Testa lokalt

Öppna `index.html` direkt i en webbläsare, eller kör en enkel lokal server:

```
python3 -m http.server 8000
```

och gå till <http://localhost:8000/>.
