const CACHE_NAME = 'pwa-cache-v1';
const assets = ['index.html', 'manifest.json'];

// Instala e guarda os arquivos no cachê do celular
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Serve os arquivos do cachê quando estiver offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});