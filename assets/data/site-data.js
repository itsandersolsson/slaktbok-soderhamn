/* ============================================================
   SITE-DATA — Släktbok över Söderhamns Stad
   ============================================================
   DETTA ÄR DEN ENDA FIL DU BEHÖVER REDIGERA VID UPPDATERINGAR.

   Vid en ny uppdatering av Släktboken:
     1. Ändra coverageEnd om täckningen utökats (t.ex. 1794 -> 1795)
     2. Ändra individualCount till aktuellt antal individer
     3. Lägg till en ny post ÖVERST i listan "updates" nedan
   Statistik, tidslinje, "senaste uppdatering" och hela
   uppdateringshistoriken på startsidan genereras automatiskt
   från dessa värden.
   ============================================================ */

const SITE_DATA = {

  projectTitle: "Släktbok över Söderhamns Stad",
  author: "Anders Olsson",

  /* --- Täckning och omfattning --------------------------------- */
  foundingYear: 1620,    // Söderhamns grundande — projektets bortre mål bakåt i tiden
  coverageStart: 1640,   // första år med källtäckning just nu
  coverageEnd: 1794,     // sista år med källtäckning — uppdatera vid ny årgång
  coverageGoal: 1800,    // projektets målår framåt i tiden

  /* PLATSHÅLLARE — uppdatera till aktuellt antal individer */
  individualCount: 8777,

  /* --- Länkar ---------------------------------------------------
     slaktbokUrl: sökvägen till den Min Släkt-genererade Släktboken.
     Ändra ENDAST här om exporten flyttas eller får annat filnamn.
     (Obs: samma sökväg finns som statisk reservlänk i index.html
     för besökare utan JavaScript.)                                 */
  slaktbokUrl: "./slaktbok/",
  anbytarforumUrl: "https://forum.rotter.se/index.php?topic=169243.0",
  contactEmail: "anders_olsson@rocketmail.com",

  /* --- Källor ---------------------------------------------------
     Korten i avsnittet "Källorna" genereras härifrån.
     icon: book | ledger | scale | inventory | coins | document     */
  sources: [
    {
      name: "Kyrkböcker",
      icon: "book",
      description:
        "Födelse- och dopböcker, vigselböcker samt död- och begravningsböcker. " +
        "Stommen i släktboken: namn, datum och familjerelationer år för år."
    },
    {
      name: "Mantalslängder",
      icon: "ledger",
      description:
        "Årliga skattelängder över stadens hushåll. Visar vilka som bodde i " +
        "Söderhamn, hushållens sammansättning och förändringar över tid."
    },
    {
      name: "Domböcker",
      icon: "scale",
      description:
        "Rådhusrättens och kämnärsrättens protokoll. Tvister, vittnesmål och " +
        "notiser som ofta avslöjar släktskap, yrken och grannrelationer."
    },
    {
      name: "Bouppteckningar",
      icon: "inventory",
      description:
        "Förteckningar över avlidnas tillgångar. Namnger arvingar och " +
        "ingifta — ovärderliga för att bekräfta familjesamband."
    },
    {
      name: "Kyrkans räkenskaper",
      icon: "coins",
      description:
        "Kyrkokassans inkomster och utgifter, bland annat avgifter för " +
        "begravningar och klockringning — ofta före de bevarade kyrkböckerna."
    },
    {
      name: "Övriga källor",
      icon: "document",
      description:
        "Tullarkiv, skolmatriklar, militära rullor med mera. Kompletterande " +
        "uppgifter om yrken, flyttningar och levnadsöden."
    }
  ],

  /* --- Uppdateringshistorik -------------------------------------
     Nyaste posten ÖVERST. Lägg till en ny post enligt mallen:

     {
       date: "ÅÅÅÅ-MM-DD",
       individuals: 0000,
       coverage: "1640–17XX",
       items: [
         "Beskrivning av vad som tillkommit"
       ]
     },
  ---------------------------------------------------------------- */
  updates: [
    {
      date: "2025-05-10",
      individuals: 8777,
      coverage: "1640–1793",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1793"
      ]
    },
    {
      date: "2025-04-19",
      individuals: 8685,
      coverage: "1640–1792",
      items: [
        "Domböcker 1640, 1645, 1646 och 1649 (1641–1644, 1647 och 1648 saknas)",
        "Kyrkans räkenskaper 1643–1649",
        "Mantalslängder 1640–1649"
      ]
    },
    {
      date: "2024-09-08",
      individuals: 8517,
      coverage: "1650–1792",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1792",
        "Elever 1700-talet – Vasa Akademi i Gävle"
      ]
    },
    {
      date: "2024-01-12",
      individuals: 8440,
      coverage: "1650–1791",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1791",
        "Äldre centrala tullarkiv – Personella berättelser 1748"
      ]
    },
    {
      date: "2023-01-23",
      individuals: 8155,
      coverage: "1650–1790",
      items: [
        "Domböcker 1650–1652, 1655–1659 (1653 och 1654 saknas)",
        "Kyrkans räkenskaper 1650–1659",
        "Mantalslängder 1650–1659"
      ]
    }
    /* Äldre poster från den tidigare startsidan kan läggas till här. */
  ]
};
