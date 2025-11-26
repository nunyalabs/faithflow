/**
 * FaithFlow Service Worker v2
 * Handles offline caching and PWA functionality
 */

const CACHE_NAME = 'faithflow-v2.0.0';
const urlsToCache = [
  // Core app shell
  '/',
  '/index.html',
  '/manifest.json',

  // Data files
  '/data/announcements.json',
  '/data/bible.json',
  '/data/config.json',
  '/data/hymns.json',
  '/data/members.json',

  // Icons
  '/icons/icon-192.png',
  '/icons/icon-512.png',

  // External CDN Assets
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@phosphor-icons/web',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js',
  'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap'
];

// Install event - cache all assets
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Caching app shell');
        // Use addAll with a filter to catch and log individual request failures
        const cachePromises = urlsToCache.map(url => {
          return fetch(new Request(url, { mode: 'no-cors' }))
            .then(response => {
              if (response.status === 200) {
                return cache.put(url, response);
              }
              return Promise.resolve(); // Ignore non-200 responses
            })
            .catch(err => {
              console.warn(`[ServiceWorker] Failed to cache ${url}:`, err)
            });
        });
        return Promise.all(cachePromises);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // For navigation requests, always serve index.html
    if (event.request.mode === 'navigate') {
        event.respondWith(caches.match('/index.html'));
        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // Not in cache - go to network
            return fetch(event.request).then(
                networkResponse => {
                    // Check if we received a valid response
                    if (!networkResponse || networkResponse.status !== 200) {
                        return networkResponse;
                    }
                    
                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    const responseToCache = networkResponse.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return networkResponse;
                }
            ).catch(error => {
                console.log('[ServiceWorker] Fetch failed; returning offline page instead.', error);
                // If the request is for an image, you might want to return a placeholder
                if (event.request.headers.get('accept').includes('image')) {
                    // Return a placeholder image from cache
                    // return caches.match('/icons/placeholder.png');
                }
                // For other failures, you might not want to return anything,
                // or return a specific offline fallback page.
            });
        })
    );
});