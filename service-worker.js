self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('tu-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/img/imagen1.png',
                '/img/imagen2.png'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
