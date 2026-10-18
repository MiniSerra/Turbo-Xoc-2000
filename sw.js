// Service worker mínim perquè el joc es pugui instal·lar com a aplicació (sempre agafa la versió nova de la xarxa)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
