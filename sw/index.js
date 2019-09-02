self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('stuff').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/img/',
                '/css/styles.css',


            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
    );
});