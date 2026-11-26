// Satzheft service worker: works offline after the first visit.
// Bump VERSION whenever app files change so phones pick up the new version.
const VERSION = 'satzheft-v38';
const SHELL = ['./', './index.html', './rehber.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './rehber/verben.js', './rehber/engine.js', './rehber/alltag.js', './rehber/bild.js', './rehber/bilder.js', './rehber/bild2.js', './rehber/planen.js', './rehber/briefe.js', './rehber/briefe2.js', './rehber/briefe3.js',
  './rehber/grammatik.js', './rehber/b2.js', './rehber/b2briefe.js', './rehber/b2sprechen.js', './rehber/b2extra.js', './rehber/c1.js', './rehber/c1texte.js', './rehber/c1extra.js', './rehber/c1wort2.js', './rehber/c1wort3.js', './rehber/c1nominal.js', './rehber/woerter.js'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the phone's HTTP cache so a new version never stores an old copy of the page.
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // DHL Almancası ayrı bir uygulamadır (dhl/ klasörü, kendi service worker'ı); ona karışma.
  if (/\/dhl(\/|\.html$)/.test(new URL(req.url).pathname)) return;
  // The page itself: ask the server every time (no-cache revalidates instead of trusting GitHub Pages' 10-minute cache),
  // fall back to the cached copy offline.
  if (req.mode === 'navigate') {
    // Each page (index.html, rehber.html) is cached under its own address.
    const path = new URL(req.url).pathname;
    const page = /rehber\.html$/.test(path) ? './rehber.html' : './index.html';
    e.respondWith(fetch(req.url, { cache: 'no-cache' }).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(page, copy)); return res; })
      .catch(() => caches.match(page)));
    return;
  }
  // Rehber data files: network first (no-cache revalidates), cached copy offline.
  if (/\/rehber\/[^/]+\.js$/.test(new URL(req.url).pathname)) {
    e.respondWith(fetch(req.url, { cache: 'no-cache' }).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }
  // Everything else (icons, fonts): cache first, then network, keeping a copy.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
