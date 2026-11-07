/* ==========================================================================
   Harsh Pandey — Portfolio
   main.js (jQuery). Content comes from config.js and data.js.
   ========================================================================== */
(function ($) {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};
  var DATA = window.PORTFOLIO_DATA || { featured: [], additional: [], repos: [], skills: [] };

  var $html = $(document.documentElement);
  var $win = $(window);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;

  /* ---------- Helpers ---------- */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function icon(id, cls) {
    return '<svg class="icon' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#' + id + '"/></svg>';
  }
  function hostOf(url) {
    try { return new URL(url).host.replace(/^www\./, ""); } catch (e) { return url; }
  }
  function ext(url) {
    return 'href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
  }

  // Tag name -> icon in the sprite. Tags without an entry show text only.
  var TAG_ICONS = {
    "HTML5": "si-html5", "CSS3": "si-css", "JavaScript": "si-javascript",
    "React": "si-react", "React.js": "si-react", "Next.js": "si-nextdotjs",
    "Bootstrap": "si-bootstrap", "Tailwind CSS": "si-tailwindcss", "TypeScript": "si-typescript",
    "Laravel": "si-laravel", "MySQL": "si-mysql", "Gemini AI": "si-googlegemini",
    "Python": "si-python", "Flask": "si-flask", "Django": "si-django",
    "OpenCV": "si-opencv", "jQuery": "si-jquery", "GSAP": "si-gsap",
    "Chart.js": "si-chartdotjs", "PWA": "si-pwa", "Node.js": "si-nodedotjs",
    "MongoDB": "si-mongodb", "PHP": "si-php"
  };
  function tagsHtml(list, max) {
    if (!list || !list.length) return "";
    var shown = max ? list.slice(0, max) : list;
    var html = shown.map(function (t) {
      var ic = TAG_ICONS[t] ? icon(TAG_ICONS[t]) : "";
      return '<li class="tag">' + ic + esc(t) + "</li>";
    }).join("");
    if (max && list.length > max) html += '<li class="tag">+' + (list.length - max) + "</li>";
    return '<ul class="tags" aria-label="Technologies">' + html + "</ul>";
  }

  /* ---------- Screenshot or placeholder ---------- */
  function placeholderHtml(p) {
    return (
      '<div class="ph" role="img" aria-label="' + esc(p.title) + ' preview">' +
        '<div class="ph__nav" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
        '<div class="ph__main">' +
          '<p class="ph__title">' + esc(p.title) + "</p>" +
          (p.live ? '<p class="ph__domain">' + esc(hostOf(p.live)) + "</p>" : "") +
          '<div class="ph__lines" aria-hidden="true"><i></i><i></i><i></i></div>' +
        "</div>" +
        '<div class="ph__blocks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      "</div>"
    );
  }

  // Inserts a lazy image into $slot, or a placeholder if there is no image / it fails to load.
  function mountImage($slot, p) {
    if (!p.image) { $slot.html(placeholderHtml(p)); return; }
    // Set via .attr(): passing width/height to $("<img>", {...}) would set inline CSS sizes.
    var $img = $("<img>").attr({
      alt: "Screenshot of " + p.title,
      width: 1200,
      height: 750,
      loading: "lazy",
      decoding: "async"
    }).addClass("is-loading");
    $img.on("load", function () { $img.removeClass("is-loading"); });
    $img.on("error", function () { $slot.html(placeholderHtml(p)); });
    $slot.empty().append($img);
    $img.attr("src", p.image);
  }

  /* ---------- Apply config ---------- */
  function applyConfig() {
    if (CONFIG.email) {
      $(".js-email-link").each(function () {
        var href = $(this).attr("href") || "";
        var query = href.indexOf("?") > -1 ? href.slice(href.indexOf("?")) : "";
        $(this).attr("href", "mailto:" + CONFIG.email + query);
      });
      $(".js-email-text").text(CONFIG.email);
    }
    if (CONFIG.github) $(".js-github-link").attr("href", CONFIG.github);
    if (CONFIG.portfolio) $(".js-portfolio-link").attr("href", CONFIG.portfolio);

    var av = CONFIG.availability || {};
    if (av.enabled && av.label) {
      $(".js-availability-label").text(av.label);
      $(".js-availability").prop("hidden", false);
    }
    $("#year").text(new Date().getFullYear());
  }

  /* ---------- Render: skills ---------- */
  function renderSkills() {
    var html = (DATA.skills || []).map(function (g) {
      var items = g.items.map(function (s) {
        var style = s.color ? ' style="--brand:' + esc(s.color) + '"' : "";
        return '<li class="skill"' + style + ">" + icon(s.icon) + "<span>" + esc(s.name) + "</span></li>";
      }).join("");
      return (
        '<article class="skill-group reveal">' +
          '<header class="skill-group__head">' +
            '<span class="skill-group__icon">' + icon(g.icon) + "</span>" +
            "<h3>" + esc(g.group) + "</h3>" +
            '<span class="skill-group__count">' + g.items.length + "</span>" +
          "</header>" +
          '<ul class="skill-list">' + items + "</ul>" +
        "</article>"
      );
    }).join("");
    $("#skillsGrid").html(html);
  }

  /* ---------- Render: featured projects ---------- */
  function renderFeatured() {
    var $grid = $("#featuredGrid").empty();
    (DATA.featured || []).forEach(function (p, i) {
      var primaryUrl = p.live || p.repo;
      var actions = "";
      if (p.live) actions += '<a class="btn btn--primary" ' + ext(p.live) + ">" + icon("i-external-link") + "Live Demo</a>";
      if (p.repo) actions += '<a class="btn btn--ghost" ' + ext(p.repo) + ">" + icon("si-github") + "GitHub</a>";
      var status = p.label ? '<div class="card__status"><span class="badge badge--status">' + esc(p.label) + "</span></div>" : "";

      var $card = $(
        '<article class="card reveal' + (i === 0 ? " card--feature" : "") + '" data-group="' + esc(p.group) + '">' +
          '<div class="card__media">' +
            '<div class="browser">' +
              '<div class="browser__bar" aria-hidden="true"><span class="dots"><i></i><i></i><i></i></span>' +
                '<span class="browser__url">' + esc(primaryUrl ? hostOf(primaryUrl) : p.title) + "</span></div>" +
              '<div class="browser__view"></div>' +
            "</div>" +
            '<span class="badge">' + esc(p.category) + "</span>" +
          "</div>" +
          '<div class="card__body">' +
            status +
            '<div class="card__top">' +
              '<h3 class="card__title">' + (primaryUrl ? "<a " + ext(primaryUrl) + ">" + esc(p.title) + "</a>" : esc(p.title)) + "</h3>" +
              '<span class="card__arrow" aria-hidden="true">' + icon("i-arrow-up-right") + "</span>" +
            "</div>" +
            '<p class="card__desc">' + esc(p.description) + "</p>" +
            '<div class="card__foot">' +
              tagsHtml(p.tech) +
              (actions ? '<div class="card__actions">' + actions + "</div>" : "") +
            "</div>" +
          "</div>" +
        "</article>"
      );
      mountImage($card.find(".browser__view"), p);
      $grid.append($card);
    });
  }

  /* ---------- Render: additional projects ---------- */
  function renderMore() {
    var $grid = $("#moreGrid").empty();
    (DATA.additional || []).forEach(function (p) {
      var url = p.live || p.repo;
      var links = "";
      if (p.live) links += '<a class="icon-btn" ' + ext(p.live) + ' aria-label="' + esc(p.title) + ' live demo">' + icon("i-external-link") + "</a>";
      if (p.repo) links += '<a class="icon-btn" ' + ext(p.repo) + ' aria-label="' + esc(p.title) + ' on GitHub">' + icon("si-github") + "</a>";
      var $card = $(
        '<article class="mini reveal">' +
          '<div class="mini__thumb"></div>' +
          '<div class="mini__body">' +
            '<div class="mini__head">' +
              '<p class="mini__cat">' + esc(p.category) + "</p>" +
              (p.label ? '<span class="badge badge--status">' + esc(p.label) + "</span>" : "") +
            "</div>" +
            '<h3 class="mini__title">' + (url ? "<a " + ext(url) + ">" + esc(p.title) + "</a>" : esc(p.title)) + "</h3>" +
            '<p class="mini__desc">' + esc(p.description) + "</p>" +
            '<div class="mini__foot">' + tagsHtml(p.tech, 2) + '<div class="mini__links">' + links + "</div></div>" +
          "</div>" +
        "</article>"
      );
      mountImage($card.find(".mini__thumb"), p);
      $grid.append($card);
    });
  }

  /* ---------- Render: GitHub repos ---------- */
  function renderRepos() {
    var owner = CONFIG.githubHandle || "lucifer01430";
    var html = (DATA.repos || []).map(function (r) {
      return (
        '<article class="repo reveal">' +
          '<p class="repo__path">' + icon("si-github") + "<span>" + esc(owner) + "/<b>" + esc(r.repoName) + "</b></span></p>" +
          '<h3 class="repo__title"><a ' + ext(r.repo) + ">" + esc(r.title) + "</a></h3>" +
          '<p class="repo__desc">' + esc(r.description) + "</p>" +
          '<div class="repo__foot">' + tagsHtml(r.tech, 4) +
            '<span class="repo__link" aria-hidden="true">View repository' + icon("i-arrow-up-right") + "</span>" +
          "</div>" +
        "</article>"
      );
    }).join("");
    $("#repoGrid").html(html);
  }

  /* ---------- Hero code editor (typed) ---------- */
  var CODE = [
    [["tk-com", "// harsh.config.js"]],
    [["tk-kw", "const "], ["tk-fn", "harsh"], ["tk-pun", " = {"]],
    [["", "  "], ["tk-key", "role"], ["tk-pun", ": "], ["tk-str", '"Full Stack Web Developer"'], ["tk-pun", ","]],
    [["", "  "], ["tk-key", "builds"], ["tk-pun", ": ["], ["tk-str", '"websites"'], ["tk-pun", ", "], ["tk-str", '"web apps"'], ["tk-pun", ","]],
    [["", "           "], ["tk-str", '"dashboards"'], ["tk-pun", ", "], ["tk-str", '"SaaS products"'], ["tk-pun", "],"]],
    [["", "  "], ["tk-key", "stack"], ["tk-pun", ": ["], ["tk-str", '"React"'], ["tk-pun", ", "], ["tk-str", '"Next.js"'], ["tk-pun", ", "], ["tk-str", '"Node.js"'], ["tk-pun", ","]],
    [["", "          "], ["tk-str", '"PHP"'], ["tk-pun", ", "], ["tk-str", '"Django"'], ["tk-pun", ", "], ["tk-str", '"MySQL"'], ["tk-pun", "],"]],
    [["", "  "], ["tk-key", "process"], ["tk-pun", ": ["], ["tk-str", '"understand"'], ["tk-pun", ", "], ["tk-str", '"design"'], ["tk-pun", ","]],
    [["", "            "], ["tk-str", '"develop"'], ["tk-pun", ", "], ["tk-str", '"refine"'], ["tk-pun", "],"]],
    [["tk-pun", "};"]],
    [["", ""]],
    [["tk-kw", "export default "], ["tk-fn", "harsh"], ["tk-pun", ";"]]
  ];

  function renderCodeInstant($code) {
    var html = CODE.map(function (line) {
      return '<span class="ln">' + line.map(function (t) {
        return t[0] ? '<span class="' + t[0] + '">' + esc(t[1]) + "</span>" : esc(t[1]);
      }).join("") + "</span>";
    }).join("");
    $code.html(html);
    $code.find(".ln").last().append('<span class="caret"></span>');
  }

  function typeCode() {
    var $code = $("#heroCode");
    if (!$code.length) return;
    var visible = $code.closest(".hero__editor").is(":visible");
    if (reduceMotion || !visible) { renderCodeInstant($code); return; }

    $code.empty();
    var caret = $('<span class="caret"></span>');
    var li = 0, ti = 0, ci = 0;
    var $line = null, $tok = null;

    function step() {
      if (li >= CODE.length) { $code.find(".ln").last().append(caret); return; }
      if (!$line) { $line = $('<span class="ln"></span>').appendTo($code); }
      var line = CODE[li];
      var tok = line[ti];
      if (!$tok) {
        $tok = tok[0] ? $('<span class="' + tok[0] + '"></span>') : $("<span></span>");
        $line.append($tok);
      }
      var chunk = tok[1].charAt(ci) === " " && tok[1].slice(ci).match(/^ +/) ? tok[1].slice(ci).match(/^ +/)[0] : tok[1].charAt(ci);
      $tok.text($tok.text() + chunk);
      ci += chunk.length;
      $line.append(caret);
      var delay = 16 + Math.random() * 22;
      if (ci >= tok[1].length) {
        ti++; ci = 0; $tok = null;
        if (ti >= line.length) { li++; ti = 0; $line = null; delay = 90; }
      }
      setTimeout(step, delay);
    }
    step();
  }

  /* ---------- Preloader ---------- */
  var PRELOADER_LINES = [
    "INITIALIZING EXPERIENCE...",
    "LOADING PROJECTS...",
    "BUILDING INTERFACE...",
    "WELCOME TO HARSH PANDEY'S PORTFOLIO."
  ];

  function revealPage() {
    // two frames so the hero transition actually runs
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        $html.removeClass("intro-pending is-locked");
        setTimeout(typeCode, 700);
      });
    });
  }

  function markIntroSeen() {
    try { sessionStorage.setItem("hp-intro-seen", "1"); } catch (e) {}
  }

  function runPreloader() {
    var $pre = $("#preloader");
    var skipIntro = $html.hasClass("intro-seen") || reduceMotion || CONFIG.preloader === false || !$pre.length;
    if (skipIntro) {
      $pre.remove();
      markIntroSeen();
      revealPage();
      return;
    }

    $html.addClass("is-locked");
    var $list = $("#preloaderLines");
    var $fill = $("#preloaderFill");
    var $pct = $("#preloaderPct");
    var totalChars = PRELOADER_LINES.join("").length;
    var typed = 0, finished = false, timers = [];

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function setProgress(v) {
      v = Math.max(0, Math.min(1, v));
      $fill.css("transform", "scaleX(" + v + ")");
      $pct.text(Math.round(v * 100) + "%");
    }

    function finish() {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      setProgress(1);
      markIntroSeen();
      $pre.addClass("is-exiting");
      revealPage();
      setTimeout(function () { $pre.remove(); }, 900);
    }

    function typeLine(idx) {
      if (finished) return;
      if (idx >= PRELOADER_LINES.length) { later(finish, 380); return; }
      var text = PRELOADER_LINES[idx];
      var isFinal = idx === PRELOADER_LINES.length - 1;
      var $li = $('<li' + (isFinal ? ' class="is-final"' : "") + '><span class="pending">' + (isFinal ? "&gt;" : "$") + '</span><span class="txt"></span></li>').appendTo($list);
      var $txt = $li.find(".txt");
      var i = 0;
      (function tick() {
        if (finished) return;
        i++;
        typed++;
        $txt.text(text.slice(0, i));
        setProgress(typed / totalChars);
        if (i < text.length) {
          later(tick, 13 + Math.random() * 10);
        } else {
          if (!isFinal) $li.find(".pending").removeClass("pending").addClass("ok").text("✓");
          later(function () { typeLine(idx + 1); }, 110);
        }
      })();
    }

    $("#preloaderSkip").on("click", finish);
    $(document).on("keydown.preloader", function (e) {
      if (e.key === "Escape") { finish(); $(document).off("keydown.preloader"); }
    });

    later(function () { typeLine(0); }, 250);
    // Hard stop: the intro can never run longer than this.
    later(finish, 4200);
  }

  /* ---------- Navigation ---------- */
  var NAV_MAP = { home: "home", about: "about", skills: "skills", projects: "projects", more: "projects", github: "github", contact: "contact" };
  var $nav, $navLinks, $indicator, $sections, currentId = null;

  function moveIndicator($link) {
    if (!$link || !$link.length || !$link.is(":visible")) { $indicator.removeClass("is-visible"); return; }
    var pos = $link.position();
    $indicator.css({ width: $link.outerWidth() + "px", transform: "translateX(" + pos.left + "px)" }).addClass("is-visible");
  }

  function updateActive() {
    var y = $win.scrollTop();
    var probe = y + $win.height() * 0.35;
    var id = null;
    $sections.each(function () {
      if ($(this).offset().top <= probe) id = this.id;
    });
    if (y + $win.height() >= $(document).height() - 4) id = "contact";
    var mapped = NAV_MAP[id] || null;
    if (mapped === currentId) return;
    currentId = mapped;
    $("[data-section]").removeClass("is-active").removeAttr("aria-current");
    if (mapped) {
      $('[data-section="' + mapped + '"]').addClass("is-active").attr("aria-current", "true");
      moveIndicator($navLinks.filter('[data-section="' + mapped + '"]'));
    } else {
      $indicator.removeClass("is-visible");
    }
  }

  function onScroll() {
    var y = $win.scrollTop();
    $nav.toggleClass("is-scrolled", y > 12);
    $("#toTop").toggleClass("is-visible", y > 700);
    updateActive();
  }

  /* mobile menu */
  var $menu, $toggle;
  function openMenu() {
    $menu.addClass("is-open").attr("aria-hidden", "false");
    $toggle.attr({ "aria-expanded": "true", "aria-label": "Close menu" });
    $html.addClass("is-locked");
    setTimeout(function () { $menu.find("nav a").first().trigger("focus"); }, 250);
  }
  function closeMenu(returnFocus) {
    if (!$menu.hasClass("is-open")) return;
    $menu.removeClass("is-open").attr("aria-hidden", "true");
    $toggle.attr({ "aria-expanded": "false", "aria-label": "Open menu" });
    $html.removeClass("is-locked");
    if (returnFocus) $toggle.trigger("focus");
  }

  function initNav() {
    $nav = $("#nav");
    $navLinks = $("#navList a");
    $indicator = $("#navIndicator");
    $sections = $("main > section[id]");
    $menu = $("#mobileMenu");
    $toggle = $("#navToggle");

    $menu.find("li").each(function (i) { this.style.setProperty("--i", i); });

    $toggle.on("click", function () {
      if ($menu.hasClass("is-open")) closeMenu(false); else openMenu();
    });
    $menu.on("click", "a", function () { closeMenu(false); });

    $(document).on("keydown", function (e) {
      if (!$menu.hasClass("is-open")) return;
      if (e.key === "Escape") { closeMenu(true); return; }
      if (e.key === "Tab") {
        // keep focus inside the open menu (toggle button included)
        var $f = $toggle.add($menu.find("a"));
        var first = $f.get(0), last = $f.get($f.length - 1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Same-page anchors: smooth scroll (native CSS) and keep the URL clean.
    $(document).on("click", 'a[href^="#"]', function (e) {
      var id = $(this).attr("href");
      if (id === "#" || id === "#main") return;
      var $t = $(id);
      if (!$t.length) return;
      e.preventDefault();
      var top = id === "#home" ? 0 : $t.offset().top - ($nav.outerHeight() || 0) - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id === "#home" ? location.pathname + location.search : id);
      // move focus for keyboard and screen reader users without jumping
      $t.attr("tabindex", "-1");
      try { $t.get(0).focus({ preventScroll: true }); } catch (err) {}
    });

    var ticking = false;
    $win.on("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    });
    var resizeTimer;
    $win.on("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth > 1080) closeMenu(false);
        currentId = null;
        updateActive();
      }, 120);
    });
    // fonts change link widths
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { currentId = null; updateActive(); });
    }
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var $items = $(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      $items.addClass("is-in");
      return;
    }
    // stagger siblings inside grids
    $("#skillsGrid, #featuredGrid, #moreGrid, #repoGrid, #steps, .ai__uses, .interests").each(function () {
      $(this).children(".reveal").each(function (i) {
        this.style.setProperty("--delay", Math.min(i * 0.07, 0.42) + "s");
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          $(en.target).addClass("is-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $items.each(function () { io.observe(this); });
    $html.addClass("reveal-ready");

    // clear the stagger once revealed, so hover transitions are not delayed
    $(document).on("transitionend", ".reveal.is-in", function (e) {
      if (e.target === this && e.originalEvent && e.originalEvent.propertyName === "transform") {
        this.style.removeProperty("--delay");
      }
    });
  }

  /* ---------- One-off section animations ---------- */
  function onceInView(el, cb, threshold) {
    if (!el) return;
    if (!("IntersectionObserver" in window)) { cb(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { cb(); io.disconnect(); }
    }, { threshold: threshold || 0.35 });
    io.observe(el);
  }

  function initSteps() {
    var $steps = $("#steps");
    $steps.find(".step__node").each(function (i) { this.style.setProperty("--node-delay", (i * 0.4) + "s"); });
    onceInView($steps.get(0), function () {
      $steps.addClass("is-active");
      $steps.get(0).style.setProperty("--progress", 1);
    }, 0.4);
  }

  function initAiSession() {
    var $s = $("#aiSession");
    $s.children().each(function (i) { this.style.transitionDelay = (0.2 + i * 0.32) + "s"; });
    onceInView($s.get(0), function () { $s.addClass("is-playing"); }, 0.4);
  }

  /* ---------- Filters ---------- */
  function initFilters() {
    var busy = null;
    $(".filters").on("click", ".filter", function () {
      var $btn = $(this);
      if ($btn.hasClass("is-active")) return;
      var f = $btn.data("filter");
      $(".filter").removeClass("is-active").attr("aria-pressed", "false");
      $btn.addClass("is-active").attr("aria-pressed", "true");

      var $cards = $("#featuredGrid .card");
      $cards.addClass("is-in").css("--delay", "0s");
      $cards.addClass("is-filtering");
      clearTimeout(busy);
      busy = setTimeout(function () {
        $cards.each(function () {
          var show = f === "all" || $(this).data("group") === f;
          $(this).toggleClass("is-hidden", !show);
        });
        // keep the wide layout only on the "All" view
        $cards.first().toggleClass("card--feature", f === "all");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { $cards.removeClass("is-filtering"); });
        });
      }, reduceMotion ? 0 : 220);
    });
  }

  /* ---------- Card pointer glow ---------- */
  function initCardGlow() {
    if (!canHover || reduceMotion) return;
    $("#featuredGrid").on("pointermove", ".card", function (e) {
      var r = this.getBoundingClientRect();
      this.style.setProperty("--mx", (e.clientX - r.left) + "px");
      this.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  }

  /* ---------- Copy email + toast ---------- */
  var toastTimer;
  function toast(msg) {
    var $t = $("#toast");
    $t.text(msg).addClass("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { $t.removeClass("is-visible"); }, 2200);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var $ta = $("<textarea readonly>").val(text).css({ position: "fixed", opacity: 0, top: 0 }).appendTo("body");
      $ta.get(0).select();
      try { document.execCommand("copy") ? resolve() : reject(); } catch (e) { reject(e); }
      $ta.remove();
    });
  }
  function initCopy() {
    $("#copyEmail").on("click", function () {
      var $b = $(this);
      copyText(CONFIG.email || "").then(function () {
        $b.addClass("is-copied");
        toast("Email copied");
        setTimeout(function () { $b.removeClass("is-copied"); }, 2000);
      }, function () {
        toast("Couldn't copy. The address is " + CONFIG.email);
      });
    });
  }

  /* ---------- Boot ---------- */
  $(function () {
    try {
      applyConfig();
      renderSkills();
      renderFeatured();
      renderMore();
      renderRepos();
      initNav();
      initReveal();
      initSteps();
      initAiSession();
      initFilters();
      initCardGlow();
      initCopy();
    } catch (err) {
      // Never leave the page hidden if something above fails.
      if (window.console) console.error(err);
      $html.removeClass("reveal-ready");
    }
    runPreloader();
  });

})(jQuery);
