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

  if (!outer || !canvas || !ctx) return;

  const TOTAL_FRAMES = 98;
  const frames = [];
  let loadedCount = 0;
  let ready = false;
  let currentFrameIdx = -1;
  let isActive = false;
  let hintHidden = false;
  let ctaShown = false;
  let ticking = false;

  // Size canvas to fill viewport
  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ready && currentFrameIdx >= 0) drawFrame(currentFrameIdx);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawFrame(idx) {
    const img = frames[idx];
    if (!img || !img.complete) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Center and fit the frame (object-contain style)
    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
    currentFrameIdx = idx;
  }

  // Preload all frames
  function preload() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        const pct = Math.round(loadedCount / TOTAL_FRAMES * 100);
        if (loadFill) loadFill.style.width = pct + '%';
        if (loadLabel) loadLabel.textContent = pct + '%';
        if (loadedCount === TOTAL_FRAMES) {
          ready = true;
          if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => { if (loading) loading.style.display = 'none'; }, 400);
          }
          drawFrame(0);
          update();
        }
      };
      img.src = 'frames/f' + i + '.webp';
      frames[i] = img;
    }
  }

  function getProgress() {
    const rect   = outer.getBoundingClientRect();
    const outerH = outer.offsetHeight;
    const scrubH = outerH - window.innerHeight;
    const scrolled = -rect.top;
    if (scrolled < 0 || scrolled > scrubH) return null;
    return Math.min(Math.max(scrolled / scrubH, 0), 1);
  }

  function update() {
    ticking = false;
    if (!ready) return;

    const progress = getProgress();

    if (progress === null) {
      if (isActive) { sticky.classList.remove('active'); isActive = false; }
      return;
    }

    if (!isActive) { sticky.classList.add('active'); isActive = true; }

    // Draw the correct frame
    const frameIdx = Math.min(Math.floor(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
    if (frameIdx !== currentFrameIdx) drawFrame(frameIdx);

    // Progress bar
    if (progressBar) progressBar.style.width = (progress * 100) + '%';

    // Scroll hint
    if (progress > 0.05 && !hintHidden) { hint && hint.classList.add('hide'); hintHidden = true; }
    if (progress < 0.03 && hintHidden) { hint && hint.classList.remove('hide'); hintHidden = false; }

    // CTA
    if (progress >= 0.95 && !ctaShown) { cta && cta.classList.add('show'); ctaShown = true; }
    if (progress < 0.90 && ctaShown) { cta && cta.classList.remove('show'); ctaShown = false; }
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  preload();
})();


