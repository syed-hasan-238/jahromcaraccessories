/**
 * Juhrum UI — v6
 * Shared across all pages:
 *   - Theme switcher (dark / light / device)
 *   - Mobile hamburger nav drawer
 *   - Touch-friendly: all interactions work on both mouse + touch
 */

(function () {
  'use strict';

  /* ── THEME ───────────────────────────────────────────── */
  var THEME_KEY = 'juhrum-theme';
  var mq = window.matchMedia('(prefers-color-scheme: light)');

  function applyTheme(val) {
    var resolved = (val === 'device') ? (mq.matches ? 'light' : 'dark') : val;
    document.documentElement.setAttribute('data-theme', resolved);
    var btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = val === 'light' ? '☀ Light' : val === 'device' ? '⬡ Auto' : '🌑 Dark';
    document.querySelectorAll('.theme-option').forEach(function (o) {
      o.classList.toggle('active', o.getAttribute('data-theme-val') === val);
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(saved);

    var btn = document.getElementById('theme-btn');
    var dd = document.getElementById('theme-dropdown');
    if (!btn || !dd) return;

    // Guard against double-init
    if (btn.dataset.themeInit === '1') return;
    btn.dataset.themeInit = '1';

    // Use pointerup for reliable mouse + touch without double-fire
    btn.addEventListener('pointerup', function(e) {
      e.stopPropagation();
      var langDD = document.getElementById('lang-dropdown');
      if (langDD) langDD.classList.remove('open');
      dd.classList.toggle('open');
    });

    dd.querySelectorAll('.theme-option').forEach(function (opt) {
      opt.addEventListener('pointerup', function(e) {
        e.stopPropagation();
        var val = opt.getAttribute('data-theme-val');
        localStorage.setItem(THEME_KEY, val);
        applyTheme(val);
        dd.classList.remove('open');
      });
    });

    document.addEventListener('pointerup', function () { dd.classList.remove('open'); });
    mq.addEventListener('change', function () {
      if ((localStorage.getItem(THEME_KEY) || 'dark') === 'device') applyTheme('device');
    });
  }

  /* ── HAMBURGER DRAWER ────────────────────────────────── */
  function initHamburger() {
    var toggle = document.getElementById('mob-nav-toggle');
    var drawer = document.getElementById('mob-nav-drawer');
    var backdrop = document.getElementById('mob-nav-backdrop');
    if (!toggle || !drawer) return;

    var isOpen = false;

    function openDrawer() {
      isOpen = true;
      drawer.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      isOpen = false;
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function toggleDrawer(e) {
      e.stopPropagation();
      isOpen ? closeDrawer() : openDrawer();
    }

    toggle.addEventListener('click', toggleDrawer);
    toggle.addEventListener('touchend', function (e) { e.preventDefault(); toggleDrawer(e); });

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
      backdrop.addEventListener('touchend', function (e) { e.preventDefault(); closeDrawer(); });
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeDrawer();
    });

    // Close when a nav link is tapped
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }

  /* ── SCROLL HINT (index only) ───────────────────────── */
  function initScrollHint() {
    var nudge = document.getElementById('hscroll-nudge');
    if (!nudge) return;
    nudge.style.cursor = 'pointer';
    nudge.addEventListener('click', function () {
      var target = document.getElementById('truck-scrub-outer');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── INIT ───────────────────────────────────────────── */
  function init() {
    initTheme();
    initHamburger();
    initScrollHint();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
