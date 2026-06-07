/**
 * legal.js — Jahrom Auto Accessories
 * Cookie/consent notice system.
 * CONSENT_VERSION: bump this string any time the privacy policy changes.
 * The banner will re-appear for all users who consented under an older version.
 *
 * This site uses localStorage ONLY for:
 *   - juhrum-lang  (language preference)
 *   - juhrum-theme (dark/light theme)
 * These are strictly functional preferences. No analytics or tracking cookies.
 * Banner is informational — user acknowledgement only, no blocking required.
 */

(function () {
  var CONSENT_VERSION = 'v1.0-2025-05';
  var STORAGE_KEY = 'jahrom-consent';

  /* Already acknowledged this version — do nothing */
  try {
    if (localStorage.getItem(STORAGE_KEY) === CONSENT_VERSION) return;
  } catch (e) { return; }

  /* Inject styles */
  var style = document.createElement('style');
  style.textContent = [
    '#jlegal-banner{',
      'position:fixed;bottom:0;left:0;right:0;z-index:99999;',
      'background:#0f0f0f;border-top:1px solid rgba(196,154,56,.25);',
      'padding:16px 24px;',
      'display:flex;align-items:center;flex-wrap:wrap;gap:12px 20px;',
      'font-family:"Courier New",Courier,monospace;font-size:11px;',
      'letter-spacing:.12em;color:rgba(210,205,195,.65);',
      'box-shadow:0 -4px 24px rgba(0,0,0,.5);',
      'transform:translateY(100%);transition:transform .4s cubic-bezier(.16,1,.3,1);',
    '}',
    '#jlegal-banner.visible{transform:translateY(0);}',
    '#jlegal-banner p{flex:1;min-width:220px;margin:0;line-height:1.6;}',
    '#jlegal-banner a{color:#c49a38;text-decoration:none;}',
    '#jlegal-banner a:hover{text-decoration:underline;}',
    '#jlegal-actions{display:flex;gap:10px;flex-shrink:0;}',
    '#jlegal-accept{',
      'font-family:"Courier New",Courier,monospace;font-size:10px;',
      'letter-spacing:.18em;text-transform:uppercase;',
      'padding:8px 18px;cursor:pointer;',
      'background:#c49a38;color:#0a0a0a;border:none;',
      'transition:opacity .2s;',
    '}',
    '#jlegal-accept:hover{opacity:.85;}',
    '#jlegal-policy{',
      'font-family:"Courier New",Courier,monospace;font-size:10px;',
      'letter-spacing:.18em;text-transform:uppercase;',
      'padding:8px 18px;cursor:pointer;',
      'background:transparent;color:rgba(196,154,56,.7);',
      'border:1px solid rgba(196,154,56,.3);',
      'transition:all .2s;',
    '}',
    '#jlegal-policy:hover{border-color:rgba(196,154,56,.8);color:#c49a38;}',
    '@media(max-width:600px){',
      '#jlegal-banner{padding:14px 16px;flex-direction:column;align-items:flex-start;}',
      '#jlegal-actions{width:100%;}',
      '#jlegal-accept,#jlegal-policy{flex:1;text-align:center;}',
    '}'
  ].join('');
  document.head.appendChild(style);

  /* Build banner */
  var banner = document.createElement('div');
  banner.id = 'jlegal-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Privacy notice');
  banner.innerHTML = [
    '<p>',
      'We save your language and theme preference on your device. ',
      'No personal data is collected or shared. ',
      'See our <a href="/privacy.html">Privacy Policy</a> for full details.',
    '</p>',
    '<div id="jlegal-actions">',
      '<button id="jlegal-policy" onclick="window.location.href=\'/privacy.html\'">Privacy Policy</button>',
      '<button id="jlegal-accept">Got it</button>',
    '</div>'
  ].join('');
  document.body.appendChild(banner);

  /* Show after short delay so page entrance animations aren't interrupted */
  setTimeout(function () {
    banner.classList.add('visible');
  }, 1800);

  /* Dismiss */
  document.getElementById('jlegal-accept').addEventListener('click', function () {
    banner.style.transform = 'translateY(100%)';
    setTimeout(function () { banner.remove(); }, 450);
    try { localStorage.setItem(STORAGE_KEY, CONSENT_VERSION); } catch (e) {}
  });
})();

/**
 * openCookieSettings()
 * Called from the footer "Cookie Settings" link.
 * Clears stored consent so the banner re-appears on next page load.
 */
function openCookieSettings() {
  try { localStorage.removeItem('jahrom-consent'); } catch (e) {}
  /* Re-run the banner immediately */
  var existing = document.getElementById('jlegal-banner');
  if (existing) {
    existing.classList.add('visible');
  } else {
    /* Re-inject by reloading — simplest reliable approach */
    window.location.reload();
  }
}

/* Auto-populate copyright year spans on products + story pages */
(function () {
  var yr = new Date().getFullYear().toString();
  ['copy-yr-p', 'copy-yr-s'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = yr;
  });
})();
