const CACHE_KEY = 'v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      return cache.addAll([
        'index.html',
        'app.js',
        'app.css',
        'clipboard.min.js',
        'd3.v3.min.js'
      ]);
    }).catch(e => console.log(e))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_KEY)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      return self.clients.claim();
    }).catch(e => console.error(e))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE_KEY).then(cache => {
      return cache.match(e.request).then(response => {
        return response || fetch(e.request).then(response => {
          cache.put(e.request, response);
          return response;
        });
      });
    }).catch(e => console.error(e))
  );
});
