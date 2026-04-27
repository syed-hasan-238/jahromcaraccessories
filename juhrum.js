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
  // create if not already in HTML
  let bar = document.getElementById('jreadprogress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'jreadprogress';
    document.body.prepend(bar);
  }
  const update = () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${scrolled / total})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
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

// ── CHAR ASSEMBLY for section headings ────
;(function() {
  // only apply to elements with data-assemble attribute
  document.querySelectorAll('[data-assemble]').forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map((ch, i) =>
      `<span style="display:inline-block;opacity:0;transform:translateY(18px);transition:opacity .5s ${i * 0.028}s,transform .5s ${i * 0.028}s cubic-bezier(.76,0,.24,1)">${ch === ' ' ? '&nbsp;' : ch}</span>`
    ).join('');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        el.querySelectorAll('span').forEach(s => {
          s.style.opacity = '1';
          s.style.transform = 'translateY(0)';
        });
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
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
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + sy - window.innerHeight * 0.5) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
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
