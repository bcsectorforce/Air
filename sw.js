self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {
  let data = {};
  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(data.title || "BC ATC", {
      body: data.body || "Airspace needs attention ✈️",
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png"
    })
  );
});
