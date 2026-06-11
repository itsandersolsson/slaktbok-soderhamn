/* ============================================================
   SITE-DATA — Släktbok över Söderhamns Stad
   ============================================================
   DETTA ÄR DEN ENDA FIL DU BEHÖVER REDIGERA VID UPPDATERINGAR.

   Vid en ny uppdatering av Släktboken:
     1. Ändra coverageEnd om täckningen utökats (t.ex. 1794 -> 1795)
     2. Ändra individualCount till aktuellt antal individer
     3. Lägg till en ny post ÖVERST i listan "updates" nedan
     4. VIKTIGT: Öppna index.html och ändra "?v=ÅÅÅÅ-MM-DD" till
        dagens datum på de tre <script>/<link>-raderna längst ner
        och i <head>. Annars kan besökares webbläsare visa en
        gammal, cachad version av denna fil. Se README.md.
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
    },
    {
      date: "2022-09-02",
      individuals: 7896,
      coverage: "1660–1790",
      items: [
        "Bouppteckningar 1785–1790",
        "Kyrkböcker (födda, vigda, döda) 1786–1790"
      ]
    },
    {
      date: "2022-05-02",
      individuals: 7444,
      coverage: "1660–1785",
      items: [
        "Bouppteckningar 1773–1784",
        "Kyrkböcker (födda, vigda, döda) 1783–1785"
      ]
    },
    {
      date: "2021-10-05",
      individuals: 7197,
      coverage: "1660–1782",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1781 och 1782"
      ]
    },
    {
      date: "2021-09-16",
      individuals: 7026,
      coverage: "1660–1780",
      items: [
        "Domböcker 1660–1669",
        "Kyrkans räkenskaper 1660–1669",
        "Mantalslängder 1660, 1662, 1663, 1667 och 1668 (1661, 1664–1666 och 1669 saknas)"
      ]
    },
    {
      date: "2021-07-18",
      individuals: 6850,
      coverage: "1670–1780",
      items: [
        "Domböcker 1671, 1673, 1674 och 1676–1679 (1670, 1672 och 1675 saknas)",
        "Kyrkans räkenskaper 1670–1679",
        "Mantalslängder 1670, 1673, 1678 och 1679 (1671, 1672 och 1674–1677 saknas)"
      ]
    },
    {
      date: "2021-06-23",
      individuals: 6540,
      coverage: "1680–1780",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1777–1780"
      ]
    },
    {
      date: "2021-06-08",
      individuals: 6245,
      coverage: "1680–1776",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1776"
      ]
    },
    {
      date: "2021-03-01",
      individuals: 6186,
      coverage: "1680–1775",
      items: [
        "Kyrkböcker (födda, vigda, döda) 1773–1775"
      ]
    },
    {
      date: "2021-02-16",
      individuals: 5953,
      coverage: "1680–1772",
      items: [
        "Domböcker 1680–1685 och 1687–1689 (1686 saknas)",
        "Kyrkans räkenskaper 1680–1689",
        "Kyrkböcker (födda, vigda, döda) 1772",
        "Mantalslängder 1681, 1684, 1688 och 1689 (1680, 1682, 1683, 1685, 1686 och 1687 saknas)"
      ]
    },
    {
      date: "2020-12-15",
      individuals: 5692,
      coverage: "1690–1771",
      items: [
        "Avskrifter av en annotationsbok skriven av Margareta Nilsdotter Berg (1708–1783)",
        "Domböcker 1691–1696",
        "Kartbeskrivning över Söderhamns stads ägor 1698",
        "Kyrkans räkenskaper 1690–1693",
        "Kyrkböcker (födda, vigda, döda) 1771",
        "Mantalslängder 1690–1696"
      ]
    },
    {
      date: "2020-11-03",
      individuals: 5453,
      coverage: "1697–1770",
      items: [
        "Mantalslängder 1716–1719",
        "Mantalslängd 1720 (bytt format)"
      ]
    },
    {
      date: "2020-09-28",
      individuals: 5408,
      coverage: "1697–1770",
      items: [
        "Domböcker 1697–1707",
        "Kyrkböcker (födda, vigda, döda) 1768–1770",
        "Mantalslängder 1697–1715"
      ]
    },
    {
      date: "2020-04-20",
      individuals: 4754,
      coverage: "1709–1767",
      items: [
        "Bouppteckningar 1760–1767",
        "Domböcker 1709–1735",
        "Kyrkböcker (födda, vigda, döda) 1760–1767"
      ]
    },
    {
      date: "2018-04-30",
      individuals: 4156,
      coverage: "1720–1759",
      items: [
        "Bouppteckningar 1718–1759",
        "Husförhörslängder 1733–1735, 1739 och 1749–1758",
        "Kyrkböcker (födda, vigda, döda) 1721–1759, 1739–1759 och 1739–1759",
        "Mantalslängd 1720",
        "Olof Bromans Glysisvallur"
      ]
    }
    /* Äldre poster (om sådana finns) kan läggas till här. */
  ]
};
