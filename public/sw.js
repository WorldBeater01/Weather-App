filesToCache = [
    'index.html',
    'src/index.css',
    'src/app.js',
    'src/fetch.js',
    'src/ui.js',
    'src/images/dark-background.jpg',
    'src/images/light-background.jpg'
  ];

const staticCacheName = 'pages-cache-v2';

self.addEventListener('install', event => {
  console.log('SW Installed');
  event.waitUntil(
      caches.open(staticCacheName)
       .then( cache => {
        cache.addAll(filesToCache);
      })
    );
  });

self.addEventListener('activate', () => {
    console.log('SW Activated');
  });
 
self.addEventListener('fetch', event => {
   event.respondWith(
     caches.match(event.request)
       .then( response => {
           if (response) {
               return response;
           } else {
              return fetch(event.request); 
           }
       })
   );
});  