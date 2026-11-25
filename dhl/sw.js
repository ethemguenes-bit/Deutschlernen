// DHL Almancası https://ethemguenes-bit.github.io/dhl-almanca/ adresine taşındı.
// Bu service worker eski kopyayı kaldırır: kendi önbelleğini siler ve kendini kapatır.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('dhl-')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => cs.forEach(c => c.navigate(c.url))));
});
