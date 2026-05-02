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

  // Story drag — directional arrow
  document.querySelectorAll('.drag-scroll').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('big');
      label.textContent = '← DRAG →';
      label.classList.add('on');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('big');
      label.classList.remove('on');
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

// ── SVG STROKE DRAW (decorative lines) ────
;(function() {
  const lines = document.querySelectorAll('.draw-line');
  if (!lines.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const len = el.getTotalLength ? el.getTotalLength() : 200;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(.76,0,.24,1)';
      requestAnimationFrame(() => { el.style.strokeDashoffset = '0'; });
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  lines.forEach(el => obs.observe(el));
})();

// ── WORD ASSEMBLY for section headings ────
// Only applies to elements with data-assemble — plain text only, no inner HTML tags
;(function() {
  document.querySelectorAll('[data-assemble]').forEach(el => {
    // safety check — skip if element has child elements (would corrupt HTML)
    if (el.querySelector('*')) return;

    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((word, i) =>
      `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;"><span class="aw" style="display:inline-block;transform:translateY(110%);transition:transform .7s ${i * 0.09}s cubic-bezier(.76,0,.24,1);">${word}</span></span>`
    ).join(' ');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        el.querySelectorAll('.aw').forEach(s => s.style.transform = 'translateY(0)');
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });
})();

// ── 3D TILT CARDS ─────────────────────────
;(function() {
  document.querySelectorAll('.card3d').forEach(card => {
    const inner = card.querySelector('.card3d-inner');
    if (!inner) return;
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width  - .5) * 2;
      const ny = ((e.clientY - r.top)  / r.height - .5) * 2;
      inner.style.transform = `rotateY(${nx*9}deg) rotateX(${-ny*7}deg) scale(1.015)`;
      const g = card.querySelector('.glow');
      if (g) {
        g.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100) + '%');
        g.style.setProperty('--gy', ((e.clientY - r.top)  / r.height * 100) + '%');
        g.style.opacity = '1';
      }
    });
    card.addEventListener('mouseleave', () => {
      inner.style.transition = 'transform .7s cubic-bezier(.23,1,.32,1)';
      inner.style.transform  = 'rotateY(0) rotateX(0) scale(1)';
      const g = card.querySelector('.glow');
      if (g) g.style.opacity = '0';
      setTimeout(() => inner.style.transition = '', 700);
    });
  });
})();

// ── DRAG GALLERY ──────────────────────────
;(function() {
  document.querySelectorAll('.drag-scroll').forEach(el => {
    let down = false, sx, sl;
    el.style.cursor = 'grab';
    el.addEventListener('mousedown', e => { down=true; sx=e.pageX-el.offsetLeft; sl=el.scrollLeft; el.style.cursor='grabbing'; });
    el.addEventListener('mouseleave', () => { down=false; el.style.cursor='grab'; });
    el.addEventListener('mouseup',    () => { down=false; el.style.cursor='grab'; });
    el.addEventListener('mousemove',  e => {
      if (!down) return;
      e.preventDefault();
      el.scrollLeft = sl - (e.pageX - el.offsetLeft - sx) * 1.6;
    });
  });
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

// ── Phase 7: SCROLL-TRIGGERED PARALLAX LAYERS ──
;(function() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + sy - window.innerHeight * 0.5) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
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


// ═══════════════════════════════════════════════
// PHASE 11 — TRUCK CANVAS SCROLL SCRUB
// Lerp smoothed + snap points + scene labels + Lenis-aware
// ═══════════════════════════════════════════════
;(function() {
  const outer    = document.getElementById('truck-scrub-outer');
  const sticky   = document.getElementById('truck-scrub-sticky');
  const canvas   = document.getElementById('truck-canvas');
  const ctx      = canvas ? canvas.getContext('2d') : null;
  const progressBar = document.getElementById('ts-progress-bar');
  const cta      = document.getElementById('ts-cta');
  const hint     = document.getElementById('ts-scroll-hint');
  const loading  = document.getElementById('ts-loading');
  const loadFill = document.getElementById('ts-loading-fill');
  const loadLabel= document.getElementById('ts-loading-label');
  const sceneTag = document.getElementById('ts-scene-tag');
  const sceneName= document.getElementById('ts-scene-name');
  const sceneLabel = document.getElementById('ts-scene-label');

  if (!outer || !canvas || !ctx) return;

  const TOTAL_FRAMES = 294;
  const LERP = 0.07; // cinematic ease — lower = smoother

  // ── Snap points (progress 0–1 mapped to video timestamps) ────────
  // Video is 9.8s total. Frames sampled every 3rd = 98 frames.
  // Timestamps: 0s=blank, 1.95s=accessories, 3s=side step, 5s=bed cover, 8s=front grill, 9s=end
  const SCENES = [
    { progress: 0,    tag: '01', name: 'Stock Truck'     },
    { progress: 0.199,tag: '02', name: 'Accessories'     }, // 1.95/9.8
    { progress: 0.306,tag: '03', name: 'Side Step'       }, // 3/9.8
    { progress: 0.510,tag: '04', name: 'Bed Cover'       }, // 5/9.8
    { progress: 0.816,tag: '05', name: 'Front Grille'    }, // 8/9.8
    { progress: 1.0,  tag: '06', name: 'Full Build'      }, // 9/9.8
  ];
  const SNAP_THRESHOLD = 0.04; // within 4% of a snap = snap to it

  const frames = [];
  let loadedCount = 0;
  let ready = false;

  let currentF     = 0; // smoothed (drawn)
  let targetF      = 0; // raw scroll target
  let lastDrawnIdx = -1;

  let isActive    = false;
  let hintHidden  = false;
  let ctaShown    = false;
  let currentScene = -1;

  // Snap state
  let snapTimer    = null;
  let isSnapping   = false;
  let snapTargetP  = null; // progress to snap to
  let lastScrollT  = 0;

  // ── Canvas sizing ─────────────────────────────
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ready) drawFrame(Math.round(currentF));
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // ── Draw a single frame (no cross-fade = no ghosting) ────────────
  function drawFrame(idx) {
    idx = Math.min(Math.max(Math.round(idx), 0), TOTAL_FRAMES - 1);
    const img = frames[idx];
    if (!img || !img.complete) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth  * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width  - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
    lastDrawnIdx = idx;
  }

  // ── Get raw scroll progress 0..1 ─────────────
  function getRawProgress() {
    const scrollY = window.__lenis ? window.__lenis.scroll : window.scrollY;
    const outerTop = outer.offsetTop;
    const scrubH   = outer.offsetHeight - window.innerHeight;
    const scrolled = scrollY - outerTop;
    if (scrolled < 0 || scrolled > scrubH) return null;
    return Math.min(Math.max(scrolled / scrubH, 0), 1);
  }

  // ── Find nearest snap point to a progress value ───────────────────
  function nearestSnap(p) {
    let best = null, bestDist = Infinity;
    for (const s of SCENES) {
      const d = Math.abs(s.progress - p);
      if (d < bestDist) { bestDist = d; best = s; }
    }
    return { scene: best, dist: bestDist };
  }

  // ── Animate scroll to a snap point ───────────────────────────────
  function snapToProgress(targetP) {
    if (isSnapping) return;
    isSnapping = true;
    const outerTop = outer.offsetTop;
    const scrubH   = outer.offsetHeight - window.innerHeight;
    const targetScrollY = outerTop + targetP * scrubH;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScrollY, { duration: 0.8, easing: t => 1 - Math.pow(1 - t, 3) });
      setTimeout(() => { isSnapping = false; }, 900);
    } else {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      setTimeout(() => { isSnapping = false; }, 900);
    }
  }

  // ── Update scene label ────────────────────────
  function updateSceneLabel(progress) {
    // Find which scene we're in (last scene whose progress <= current)
    let activeIdx = 0;
    for (let i = SCENES.length - 1; i >= 0; i--) {
      if (progress >= SCENES[i].progress - 0.02) { activeIdx = i; break; }
    }
    if (activeIdx !== currentScene) {
      currentScene = activeIdx;
      const s = SCENES[activeIdx];
      if (sceneTag)  { sceneTag.style.opacity  = '0'; setTimeout(() => { sceneTag.textContent  = s.tag;  sceneTag.style.opacity  = '1'; }, 150); }
      if (sceneName) { sceneName.style.opacity = '0'; setTimeout(() => { sceneName.textContent = s.name; sceneName.style.opacity = '1'; }, 200); }
    }
  }

  // ── Scroll stop detection → snap ─────────────
  window.addEventListener('scroll', () => {
    lastScrollT = Date.now();
    if (snapTimer) clearTimeout(snapTimer);
    if (isSnapping) return;
    snapTimer = setTimeout(() => {
      const p = getRawProgress();
      if (p === null) return;
      // Don't snap at the very start or end
      if (p < 0.02 || p > 0.97) return;
      const { scene, dist } = nearestSnap(p);
      if (dist > 0.01 && dist < SNAP_THRESHOLD) {
        snapToProgress(scene.progress);
      }
    }, 380); // wait 380ms after scroll stops
  }, { passive: true });

  // ── Main rAF loop — tied to GSAP ticker if available ─────────────
  function tick() {
    if (!ready) return;
    const progress = getRawProgress();

    if (progress === null) {
      if (isActive) { sticky.classList.remove('active'); isActive = false; }
      return;
    }
    if (!isActive) { sticky.classList.add('active'); isActive = true; }

    targetF = progress * (TOTAL_FRAMES - 1);
    currentF += (targetF - currentF) * LERP;

    const roundedIdx = Math.round(currentF);
    if (roundedIdx !== lastDrawnIdx) drawFrame(roundedIdx);

    const smoothP = currentF / (TOTAL_FRAMES - 1);
    if (progressBar) progressBar.style.width = (smoothP * 100) + '%';

    updateSceneLabel(progress);

    // Hint — animated arrow, hide once scrolled 6%
    if (progress > 0.06 && !hintHidden) { hint && hint.classList.add('hide'); hintHidden = true; }
    if (progress < 0.03 && hintHidden)  { hint && hint.classList.remove('hide'); hintHidden = false; }

    // CTA
    if (progress >= 0.95 && !ctaShown) { cta && cta.classList.add('show'); ctaShown = true; }
    if (progress < 0.90 && ctaShown)   { cta && cta.classList.remove('show'); ctaShown = false; }
  }

  function startLoop() {
    if (window.gsap) {
      gsap.ticker.add(tick);
    } else {
      (function loop() { tick(); requestAnimationFrame(loop); })();
    }
  }

  // ── Preload all frames ────────────────────────
  function preload() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        const pct = Math.round(loadedCount / TOTAL_FRAMES * 100);
        if (loadFill)  loadFill.style.width  = pct + '%';
        if (loadLabel) loadLabel.textContent = pct + '%';
        if (loadedCount === TOTAL_FRAMES) {
          ready = true;
          if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => { if (loading) loading.style.display = 'none'; }, 400);
          }
          drawFrame(0);
        }
      };
      img.src   = 'frames/f' + i + '.webp';
      frames[i] = img;
    }
  }

  startLoop();
  preload();
})();
