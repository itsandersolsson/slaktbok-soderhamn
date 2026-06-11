/* ============================================================
   Släktbok över Söderhamns Stad — startsidans skript
   Läser ALLT innehåll från assets/data/site-data.js (SITE_DATA)
   och förbättrar sidan progressivt. Sidan fungerar utan JS.
   ============================================================ */

(function () {
  "use strict";

  if (typeof SITE_DATA === "undefined") return;
  var data = SITE_DATA;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hjälpfunktioner ---------- */

  function formatNumber(n) {
    try {
      return n.toLocaleString("sv-SE");
    } catch (e) {
      return String(n);
    }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  var coverageRange = data.coverageStart + "–" + data.coverageEnd;
  var latest = data.updates && data.updates.length ? data.updates[0] : null;

  /* ---------- Databindning av enkla värden och länkar ---------- */

  var bindings = {
    coverageRange: coverageRange,
    individualCount: formatNumber(data.individualCount),
    lastUpdated: latest ? latest.date : ""
  };

  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var key = node.getAttribute("data-bind");
    if (key in bindings) node.textContent = bindings[key];
  });

  document.querySelectorAll("[data-bind-href]").forEach(function (node) {
    var key = node.getAttribute("data-bind-href");
    if (data[key]) node.setAttribute("href", data[key]);
  });

  document.querySelectorAll("[data-bind-mailto]").forEach(function (node) {
    var key = node.getAttribute("data-bind-mailto");
    if (data[key]) node.setAttribute("href", "mailto:" + data[key]);
  });

  /* ---------- Statistikremsa ---------- */

  var stats = document.getElementById("stats-strip");
  if (stats) {
    var items = [
      { label: "Individer", value: formatNumber(data.individualCount), note: "och fler för varje uppdatering" },
      { label: "Täckning", value: coverageRange, note: "mål: " + data.foundingYear + "–" + data.coverageGoal },
      { label: "Källtyper", value: String(data.sources.length), note: "alltid med källhänvisning" },
      { label: "Senast uppdaterad", value: latest ? latest.date : "—", note: latest ? latest.items[0] : "" }
    ];
    items.forEach(function (item) {
      var box = el("div", "stat");
      box.appendChild(el("dt", null, item.label));
      var dd = el("dd", null, item.value);
      if (item.note) dd.appendChild(el("small", null, item.note));
      box.appendChild(dd);
      stats.appendChild(box);
    });
  }

  /* ---------- Källkort ---------- */

  var ICONS = {
    book:      "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5a2.5 2.5 0 0 0 0 5H20M6.5 2v17M9 7h7M9 11h7",
    ledger:    "M5 3h14v18H5zM5 8h14M5 13h14M9 3v18",
    scale:     "M12 3v18M5 21h14M12 6l-5 2 5-2 5 2M7 8l-2.5 6a3 3 0 0 0 5 0L7 8zM17 8l-2.5 6a3 3 0 0 0 5 0L17 8z",
    inventory: "M4 8h16v13H4zM4 8l2-5h12l2 5M12 12h.01M9 12h.01M15 12h.01",
    coins:     "M8 9a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0M8 9v6a6 2.5 0 0 0 12 0V9M4 6a6 2.5 0 0 1 6-2.4M4 6v6a6 2.5 0 0 0 4 2.3",
    document:  "M6 2h9l5 5v15H6zM15 2v5h5M9 12h6M9 16h6"
  };

  function svgIcon(name) {
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("class", "source-card__icon");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", ICONS[name] || ICONS.document);
    svg.appendChild(path);
    return svg;
  }

  var sourcesGrid = document.getElementById("sources-grid");
  if (sourcesGrid && data.sources) {
    data.sources.forEach(function (source) {
      var card = el("li", "source-card");
      card.appendChild(svgIcon(source.icon));
      card.appendChild(el("h3", null, source.name));
      card.appendChild(el("p", null, source.description));
      sourcesGrid.appendChild(card);
    });
  }

  /* ---------- Tidslinje (enkel täckningsindikator) ---------- */

  var timeline = document.getElementById("coverage-timeline");
  if (timeline) {
    var summary = document.getElementById("timeline-summary");
    if (summary) {
      summary.textContent =
        "Söderhamn grundades " + data.foundingYear + ". Släktboken täcker i dag åren " +
        coverageRange + ", och arbetet fortsätter, källa för källa, både bakåt mot " +
        "grundandet och framåt mot målåret " + data.coverageGoal + ".";
    }

    // Tidslinjens hela spann är grundandet till målåret. Den ifyllda
    // delen visar vad som faktiskt är källtäckt just nu inom det spannet.
    var trackStart = data.foundingYear;
    var trackEnd = data.coverageGoal;
    var trackSpan = trackEnd - trackStart;

    function toPct(year) {
      return Math.max(0, Math.min(1, (year - trackStart) / trackSpan));
    }

    var fillStartPct = toPct(data.coverageStart);
    var fillEndPct = toPct(data.coverageEnd);
    var fillLeft = (fillStartPct * 100).toFixed(2) + "%";
    var fillWidth = ((fillEndPct - fillStartPct) * 100).toFixed(2) + "%";
    var markerLeft = (fillEndPct * 100).toFixed(2) + "%";

    var track = el("div", "timeline__track");
    var fill = el("div", "timeline__fill");
    var marker = el("div", "timeline__marker");
    marker.setAttribute("aria-hidden", "true");
    marker.setAttribute("title", "Källtäckning t.o.m. " + data.coverageEnd);
    track.appendChild(fill);
    track.appendChild(marker);

    var labels = el("div", "timeline__labels");
    labels.appendChild(el("span", "timeline__label--start", String(data.foundingYear) + " (grundad)"));
    labels.appendChild(el("span", "timeline__label--end", String(data.coverageGoal) + " (mål)"));

    timeline.setAttribute("role", "img");
    timeline.setAttribute(
      "aria-label",
      "Tidslinje: källtäckning " + coverageRange + " inom projektets fulla spann " +
      data.foundingYear + " till " + data.coverageGoal + "."
    );
    timeline.appendChild(track);
    timeline.appendChild(labels);

    fill.style.left = fillLeft;
    marker.style.left = markerLeft;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      fill.style.width = fillWidth;
    } else {
      fill.style.width = "0%";
      var tlObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            fill.style.width = fillWidth;
            tlObserver.disconnect();
          }
        });
      }, { threshold: 0.4 });
      tlObserver.observe(timeline);
    }
  }

  /* ---------- Uppdateringshistorik ---------- */

  var history = document.getElementById("update-history");
  if (history && data.updates) {
    data.updates.forEach(function (update, index) {
      var item = el("li", "update");
      var card = el("div", "update__card");

      var head = el("div", "update__head");
      head.appendChild(el("span", "update__date", update.date));
      head.appendChild(el("span", "update__meta",
        formatNumber(update.individuals) + " individer (" + update.coverage + ")"));
      if (index === 0) head.appendChild(el("span", "update__badge", "Senaste"));
      card.appendChild(head);

      var list = el("ul", "update__items");
      update.items.forEach(function (text) {
        list.appendChild(el("li", null, text));
      });
      card.appendChild(list);

      item.appendChild(card);
      history.appendChild(item);
    });
  }

  /* ---------- Mjuk reveal vid skroll ---------- */

  var revealNodes = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) { node.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach(function (node) { revealObserver.observe(node); });
  }

  /* ============================================================
     Hero-bakgrund: ett stilla nätverk av punkter och tunna
     linjer (familjenätverk) med svaga arkivetiketter som driver
     förbi. Rent dekorativ — bygger INTE på databasens innehåll.
     ============================================================ */

  var canvas = document.getElementById("hero-canvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var hero = canvas.parentElement;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0, height = 0;
    var nodes = [], labels = [];
    var running = false;
    var lastFrame = 0;
    var FRAME_INTERVAL = 1000 / 30; // max ~30 fps räcker gott

    // Generiska arkivetiketter — fiktiva exempel, inte databasposter.
    var LABEL_TEXTS = [
      "Kyrkbok 1697", "Mantalslängd 1671", "Dombok 1655",
      "Bouppteckning 1742", "Räkenskaper 1648", "f. 1683",
      "vigd 1701", "d. 1764", "fiskare", "skeppare",
      "borgare", "hustru", "Söderhamn 1620"
    ];

    function resize() {
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      var count = Math.round(Math.min(46, Math.max(18, width / 34)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 1.2 + Math.random() * 1.6
        });
      }
      var labelCount = width < 640 ? 4 : 7;
      labels = [];
      for (var j = 0; j < labelCount; j++) {
        labels.push(newLabel(true));
      }
    }

    function newLabel(anywhere) {
      return {
        text: LABEL_TEXTS[Math.floor(Math.random() * LABEL_TEXTS.length)],
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : height + 20,
        vy: -(0.05 + Math.random() * 0.08),
        life: 0,
        maxLife: 900 + Math.random() * 600
      };
    }

    var LINK_DIST = 120;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Linjer mellan närliggande punkter
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[i].x - nodes[j].x;
          var dy = nodes[i].y - nodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            var alpha = 0.10 * (1 - dist / LINK_DIST);
            ctx.strokeStyle = "rgba(43, 38, 32, " + alpha.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Punkter
      ctx.fillStyle = "rgba(116, 57, 30, 0.28)";
      nodes.forEach(function (n) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Svaga arkivetiketter
      ctx.font = "13px Georgia, serif";
      labels.forEach(function (l) {
        var fade = Math.min(l.life / 120, (l.maxLife - l.life) / 120, 1);
        if (fade <= 0) return;
        ctx.fillStyle = "rgba(92, 83, 71, " + (0.16 * fade).toFixed(3) + ")";
        ctx.fillText(l.text, l.x, l.y);
      });
    }

    function step(now) {
      if (!running) return;
      requestAnimationFrame(step);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      nodes.forEach(function (n) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      });

      for (var i = 0; i < labels.length; i++) {
        var l = labels[i];
        l.y += l.vy;
        l.life++;
        if (l.life > l.maxLife || l.y < -20) labels[i] = newLabel(false);
      }

      draw();
    }

    function start() {
      if (running || reducedMotion) return;
      running = true;
      lastFrame = 0;
      requestAnimationFrame(step);
    }

    function stop() { running = false; }

    resize();
    draw(); // alltid en första (statisk) bild — även vid reducerad rörelse

    if (!reducedMotion) start();

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        draw();
      }, 150);
    });
  }
})();
