const staticDev = "gita_typing_game"
const service_worker_version = "v2.11"
const assets = [
  "/",
  "/public/index.html",
  "/public/style.css",
  "/public/bhagavadgita.txt",
  "/public/script.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
