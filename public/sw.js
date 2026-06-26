const CACHE_NAME = "ajitdev-cache-v1";
const OFFLINE_URL = "/offline";

const STATIC_ASSETS = [
  OFFLINE_URL,
  "/logo.png",
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Network-First falling back to Cache, then Offline Fallback Page)
self.addEventListener("fetch", (event) => {
  // Only handle GET requests and exclude dynamic paths like browser-sync, Clarity, Google Analytics
  if (
    event.request.method !== "GET" ||
    event.request.url.includes("chrome-extension") ||
    event.request.url.includes("clarity.ms") ||
    event.request.url.includes("googletagmanager.com")
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If response is valid, clone and cache it (if it's a same-origin resource)
        const isSameOrigin = event.request.url.startsWith(self.location.origin);
        const isStaticAsset = event.request.url.includes("/_next/static/") || event.request.url.includes("/public/");
        
        if (response.status === 200 && isSameOrigin && isStaticAsset) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Fetch failed (network is down). Look in cache first.
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If the request is for a navigation page, serve the offline page.
          if (event.request.mode === "navigate") {
            return caches.match(OFFLINE_URL);
          }
          return new Response("Network error occurred and no cached version is available.", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
          });
        });
      })
  );
});

// Push Notification Event Listener
self.addEventListener("push", (event) => {
  if (event.data) {
    try {
      const data = event.data.json();
      const options = {
        body: data.body || "You have a new update from Ajit Dev Portfolio.",
        icon: data.icon || "/logo.png",
        badge: data.badge || "/logo.png",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: "1",
          url: data.url || "/",
        },
      };
      event.waitUntil(
        self.registration.showNotification(data.title || "Ajit Dev Portfolio Update", options)
      );
    } catch (e) {
      // Fallback if data is not JSON
      const text = event.data.text();
      event.waitUntil(
        self.registration.showNotification("Ajit Dev Portfolio Update", {
          body: text,
          icon: "/logo.png",
          vibrate: [100, 50, 100],
        })
      );
    }
  }
});

// Notification Click Event Listener
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      // Check if there is already a window open with this site and focus it.
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url.startsWith(self.location.origin) && "focus" in client) {
          return client.focus();
        }
      }
      // If no window is open, open a new one.
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
