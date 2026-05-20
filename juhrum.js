/* juhrum.js — shared across all pages */

// ── CURSOR (desktop only) ──────────────────
;(function() {
  if (window.matchMedia('(hover:none)').matches) return;
  const dot   = document.getElementById('jcursor');
  const ring  = document.getElementById('jring');
  const label = document.getElementById('jlabel');
  if (!dot) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    label.style.left = mx + 'px';
    label.style.top  = my + 'px';

    // Phase 7: edge pulse — cursor near viewport edges
    const edgeThreshold = 60;
    const nearEdge = mx < edgeThreshold || mx > innerWidth - edgeThreshold ||
                     my < edgeThreshold || my > innerHeight - edgeThreshold;
    ring.classList.toggle('edge', nearEdge);
  });

  (function loop() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // data-tip elements — expand ring + show label
  document.querySelectorAll('[data-tip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('big');
      label.textContent = el.dataset.tip;
      label.classList.add('on');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('big');
      label.classList.remove('on');
    });
  });

  // CTA buttons — ring grows + glow
  document.querySelectorAll('.btn-g, .btn-o, .btn-dark').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cta'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cta'));
  });

  // Stats block — crosshair
  const statsEl = document.getElementById('hstats');
  if (statsEl) {
    statsEl.addEventListener('mouseenter', () => ring.classList.add('cross'));
    statsEl.addEventListener('mouseleave', () => ring.classList.remove('cross'));
  }

  // Product / pcard — EXPLORE label + directional glow
  document.querySelectorAll('.prod-card, .pcard').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('big');
      label.textContent = 'EXPLORE';
      label.classList.add('on');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('big');
      label.classList.remove('on');
    });
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100) + '%');
      el.style.setProperty('--gy', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });

  // Phase 7: nav links — subtle ring shift
  document.querySelectorAll('.jnav-links a').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('nav'));
    el.addEventListener('mouseleave', () => ring.classList.remove('nav'));
  });
})();

// ── NAV opaque on scroll ──────────────────
;(function() {
  const nav = document.querySelector('.jnav');
  if (!nav) return;
  const setOpacity = () => nav.classList.toggle('opaque', window.scrollY > 80);
  setOpacity();
  window.addEventListener('scroll', setOpacity, { passive: true });
})();

// ── READING PROGRESS BAR (top gold line) ──
;(function() {
  let bar = document.getElementById('jreadprogress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'jreadprogress';
    document.body.prepend(bar);
  }
  let ticking = false;
  const update = () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();

// ── SECTION DOT INDICATORS ────────────────
;(function() {
  const sections = document.querySelectorAll('section[id], div[id].ed, .story-hero');
  if (sections.length < 2) return;

  // build dot nav
  const nav = document.createElement('div');
  nav.id = 'jdots';
  sections.forEach((sec, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Section ${i + 1}`);
    dot.addEventListener('click', () => sec.scrollIntoView({ behavior: 'smooth' }));
    nav.appendChild(dot);
  });
  document.body.appendChild(nav);

  // highlight current dot on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = [...sections].indexOf(e.target);
        nav.querySelectorAll('button').forEach((d, i) => d.classList.toggle('on', i === idx));
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(sec => obs.observe(sec));
})();

// ── SCROLL REVEAL ─────────────────────────
;(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();









// ── COUNT-UP ──────────────────────────────
;(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      if (!target) return;
      let n = 0;
      const step = target / 55;
      const iv = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = Math.floor(n) + (el.dataset.suffix || '+');
        if (n >= target) clearInterval(iv);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: .6 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
})();



// ── Phase 7: CLIP-PATH IMAGE REVEAL ───────
;(function() {
  const imgs = document.querySelectorAll('.img-block:not(.story-html-handled)');
  if (!imgs.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  imgs.forEach(el => obs.observe(el));
})();

// ── TRUCK CANVAS SCROLL SCRUB ─────────────
;(function() {
  const outer   = document.getElementById('truck-scrub-outer');
  const sticky  = document.getElementById('truck-scrub-sticky');
  const canvas  = document.getElementById('truck-canvas');
  const ctx     = canvas ? canvas.getContext('2d') : null;
  const pbar    = document.getElementById('ts-progress-bar');
  const hint    = document.getElementById('ts-scroll-hint');
  const loading = document.getElementById('ts-loading');
  const loadFill= document.getElementById('ts-loading-fill');
  const loadLbl = document.getElementById('ts-loading-label');

  if (!outer || !canvas || !ctx) return;

  const TOTAL  = 294;
  const frames = new Array(TOTAL);
  let loaded   = 0;
  let ready    = false;

  // ── Scene definitions ────────────────────────
  // progress 0–1, panel id, scroll weight (how much of total scroll to spend here)
  const SCENES = [
    { p: 0,     panel: 0, label: 'Stock Truck'   },
    { p: 0.199, panel: 1, label: 'Accessories'   },
    { p: 0.306, panel: 2, label: 'Side Step'     },
    { p: 0.510, panel: 3, label: 'Bed Cover'     },
    { p: 0.816, panel: 4, label: 'Front Grille'  },
    { p: 1.0,   panel: 5, label: 'Full Build'    },
  ];

  let currentScene = -1;
  let smoothF = 0;   // lerp-smoothed frame index
  let targetF = 0;   // raw scroll-derived target

  // ── Canvas resize ────────────────────────────
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ready) drawFrame(Math.round(smoothF));
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // ── Draw a single frame — no cross-fade, no ghosting ──
  // Smoothly interpolated layout values for scene transitions
  let camX = 0.5;
  let camScale = 0.78;
  let smCamX = 0.5, smCamScale = 0.78;

  function drawFrame(idx) {
    idx = Math.min(Math.max(Math.round(idx), 0), TOTAL - 1);
    const img = frames[idx];
    if (!img || !img.complete) return;

    const hasPanels = canvas.width > 900;
    const availW = hasPanels ? canvas.width * 0.60 : canvas.width;
    const PAD_V  = canvas.height * 0.12;
    const drawH  = canvas.height - PAD_V * 2;

    // Scene-based target layout
    // Scene 0: centred, small (intro)
    // Scenes 1+: slightly left, slightly larger (panel revealed on right)
    let targetScale, targetX;
    if (currentScene <= 0) {
      targetScale = 0.75;
      targetX = 0.5;
    } else if (currentScene >= SCENES.length - 1) {
      targetScale = 0.78;
      targetX = 0.45;
    } else {
      targetScale = 0.82;
      targetX = 0.42;
    }

    // Lerp the layout smoothly
    smCamScale += (targetScale - smCamScale) * 0.04;
    smCamX     += (targetX     - smCamX)     * 0.04;

    const baseScale = Math.min(availW / img.naturalWidth, drawH / img.naturalHeight);
    const scale = baseScale * smCamScale;
    const w = img.naturalWidth  * scale;
    const h = img.naturalHeight * scale;
    const x = hasPanels
      ? (availW * smCamX) - w / 2
      : (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, w, h);
  }

  function updateScene(progress) {
    let idx = 0;
    for (let i = SCENES.length - 1; i >= 0; i--) {
      if (progress >= SCENES[i].p - 0.01) { idx = i; break; }
    }
    if (idx === currentScene) return;
    currentScene = idx;
    // Only toggle .active on desktop — on mobile the panels are CSS-hidden,
    // and toggling .active could fight the display:none via inline style side-effects
    if (window.innerWidth > 900) {
      document.querySelectorAll('.ts-panel').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
      });
    }
    // Broadcast scene change for mobile panel strip
    window.dispatchEvent(new CustomEvent('juhrumScene', { detail: idx }));
  }

  // ── Scroll progress ───────────────────────────
  // Uses getBoundingClientRect for reliability on mobile (avoids Lenis lag on touch)
  function getProgress() {
    const rect    = outer.getBoundingClientRect();
    const scrubH  = outer.offsetHeight - window.innerHeight;
    if (scrubH <= 0) return null;
    // rect.top is negative once we've scrolled into the section
    const scrolled = -rect.top;
    if (scrolled < 0 || scrolled > scrubH) return null;
    return Math.min(Math.max(scrolled / scrubH, 0), 1);
  }

  // ── Main tick — hooked into GSAP or rAF ──────
  let lastDrawn = -1;
  let hintHidden = false;
  let isActive = false;

  function tick() {
    if (!ready) return;
    const p = getProgress();
    if (p === null) {
      if (isActive) { sticky.classList.remove('active'); isActive = false; }
      return;
    }
    if (!isActive) { sticky.classList.add('active'); isActive = true; }

    // LERP — 0.065 = Oryzo-level cinematic smoothness
    targetF  = p * (TOTAL - 1);
    smoothF += (targetF - smoothF) * 0.055;

    const idx = Math.round(smoothF);
    if (idx !== lastDrawn) { drawFrame(idx); lastDrawn = idx; }

    if (pbar) pbar.style.width = (smoothF / (TOTAL - 1) * 100) + '%';

    updateScene(p);

    // Keep scrolling hint: hide only when CTA is showing (at end)
    if (p >= 0.95 && !hintHidden) { hint && hint.classList.add('hide'); hintHidden = true; }
    if (p < 0.90 && hintHidden)   { hint && hint.classList.remove('hide'); hintHidden = false; }
  }

  // ── Snap on scroll stop ───────────────────────
  let snapTimer = null;
  let snapping  = false;
  window.addEventListener('scroll', () => {
    if (snapTimer) clearTimeout(snapTimer);
    if (snapping) return;
    snapTimer = setTimeout(() => {
      const p = getProgress();
      if (p === null || p < 0.01 || p > 0.99) return;
      // Find nearest scene snap point
      let best = null, bestD = Infinity;
      for (const s of SCENES) {
        const d = Math.abs(s.p - p);
        if (d < bestD) { bestD = d; best = s; }
      }
      if (best && bestD > 0.008 && bestD < 0.06) {
        snapping = true;
        const outerTop = outer.getBoundingClientRect().top + (window.__lenis ? window.__lenis.scroll : window.scrollY);
        const scrubH   = outer.offsetHeight - window.innerHeight;
        const targetY  = outerTop + best.p * scrubH;
        if (window.__lenis) {
          window.__lenis.scrollTo(targetY, { duration: 0.7, easing: t => 1 - Math.pow(1 - t, 3) });
        } else {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
        setTimeout(() => { snapping = false; }, 800);
      }
    }, 350);
  }, { passive: true });

  // ── Hook tick into GSAP (same as Oryzo approach) ──
  function start() {
    if (window.gsap) {
      gsap.ticker.add(tick);
    } else {
      (function loop() { tick(); requestAnimationFrame(loop); })();
    }
  }

  // ── Preload frames ────────────────────────────
  function preload() {
    let done = 0;

    function onFrameDone(i) {
      done++;
      const pct = Math.round(done / TOTAL * 100);
      if (loadFill) loadFill.style.width = pct + '%';
      if (loadLbl)  loadLbl.textContent  = pct + '%';
      if (done === TOTAL) {
        finishLoad();
      }
    }

    function finishLoad() {
      ready = true;
      if (loading) { loading.style.opacity = '0'; setTimeout(() => loading.style.display='none', 400); }
      // Use first successfully loaded frame index for initial draw
      const firstLoaded = frames.findIndex(f => f && f.complete && f.naturalWidth > 0);
      drawFrame(Math.max(0, firstLoaded));
      // Activate first panel (desktop only — mobile CSS hides all panels)
      if (window.innerWidth > 900) {
        const p0 = document.getElementById('ts-panel-0');
        if (p0) { p0.classList.add('active'); currentScene = 0; }
      }
      currentScene = 0;
    }

    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      img.onload  = () => onFrameDone(i);
      img.onerror = () => {
        // Count failed frames so loader never stalls
        console.warn('Frame failed to load: frames/f' + i + '.webp');
        onFrameDone(i);
      };
      img.src    = 'frames/f' + i + '.webp';
      frames[i]  = img;
    }

    // Absolute safety net: if after 12s still not done, force-complete
    setTimeout(() => {
      if (!ready) {
        console.warn('Preloader timeout — forcing completion at', done + '/' + TOTAL, 'frames loaded');
        done = TOTAL;
        finishLoad();
      }
    }, 12000);
  }

  start();
  preload();
})();
