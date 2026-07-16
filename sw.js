const CACHE = 'ph-dispatch-v4';
const ASSETS = ['./', './index.html', './style.css', './app.js', './database.js', './whatsapp.js', './print.js', './manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => { const url=new URL(event.request.url); if (event.request.method !== 'GET' || url.origin !== location.origin) return; event.respondWith(fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return response; }).catch(() => caches.match(event.request).then(hit => hit || (event.request.mode==='navigate' ? caches.match('./index.html') : Response.error())))); });
