'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a257ff11f5e809a5f06e08c53ed67fc9",
"index.html": "1c76fc7a261315e3f2429f476fc22ac9",
"/": "1c76fc7a261315e3f2429f476fc22ac9",
"main.dart.js": "cd17e86702c6a5bcfe5223f2838ba013",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "130610078e5ca1d6f5de9afb84061d00",
"assets/images/karniyarik.jpg": "b339573235d1e59b9d5d814fa8a10315",
"assets/images/team.png": "c6a2afd7994c016d1fedab7d8c1adac5",
"assets/images/tavuk-sis.jpg": "181388bad5f5489bf972cabc7ab1b60e",
"assets/images/baklava.jpg": "19a972397fb361c1ffa2a7f21804842b",
"assets/images/adana.jpeg": "c19c7b8d4ca92ca9dca443e9c9d5667a",
"assets/images/login.png": "623960274b569229b86366ed4d681ce4",
"assets/images/ezogelin.jpg": "8fa9478de618f491f2b42ef2e294ce54",
"assets/images/ekler.jpg": "79b3c9c21e39d7da66b4cbb476e30987",
"assets/images/order.png": "9da641bfd16b224041d03fdbd71f0649",
"assets/images/key.png": "80de7903834fb4a1c5ab38e9c4709c3e",
"assets/images/etliekmek.jpg": "7a3334c575ccdaf8efdc6820b278a860",
"assets/images/kurufasulye.jpg": "a7d0f44a6a042bee9e09fef816609ff3",
"assets/images/mercimek.jpg": "d88a042ba9ce5cdb5e35d18ffe3b878b",
"assets/images/yogurt.jpg": "3245b1711149d85cd80ba3c977a3118b",
"assets/images/nohut.jpeg": "39aba61f578a43a6fa11ccc7b423d211",
"assets/images/firinda-tavuk.jpg": "bac6b2908246efb13d56571b464bf393",
"assets/images/iskender.JPG": "1e95ccc01cb6991bfcc71df7bcafb2f3",
"assets/images/su.jpg": "e8234f3a4cad5431a8b2f4b2d1fc42a8",
"assets/images/doner.jpg": "d9918919b6bcbba68abdceb3c4bd4f97",
"assets/images/restaurant.png": "f2a0065e6c56e9de521ac4d6ee68e940",
"assets/images/desserts.png": "cb2fdaa8000faa349abb71ffe84bb35e",
"assets/images/drink.png": "a090f7166516b24fd283d7b6aafa9f3a",
"assets/images/siparisicon.jpg": "bc59f0a9052dd42770a0d37a479e9173",
"assets/images/food.png": "ae79ee1914ad738d5871d9bd8b0c03ae",
"assets/images/fanta.jpg": "9990bd28b0908b6b15e762ee8476d896",
"assets/images/kadayif.jpg": "e46b589c6438e089eab0bdccad562bef",
"assets/images/cola.jpg": "6325af9cc9d4525d49394557beb06170",
"assets/images/barbunya.jpg": "b1bea4bdfd55f4acc11ce55e3faa8b67",
"assets/images/sogukbaklava.jpg": "7ddc6c61d54d1f2bfc699290f3a83e43",
"assets/images/soup.png": "24122f57e098053c834419d0e9ed8e6e",
"assets/AssetManifest.json": "c7e0e3e2599ca5b683ab95b7cdcbc4e2",
"assets/NOTICES": "ac2d2920a6cecab9269f6a7a9f5ddc09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/icons/add.png": "313b24bdc8847fc37d490b8c1b8a71cc",
"assets/icons/courier.png": "e5d9228a3541c5da1c633bfc0ca2fb53",
"assets/icons/instagram.jpg": "cbc0c856d4fd79adb9a36d692da32558",
"assets/icons/register.png": "3b5f3b0c150509e7fb914a1f56bcab18",
"assets/icons/github.jpg": "339e21addd4cc69bcf1b8978d751fdaa",
"assets/icons/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/icons/gmail.jpg": "ee17b82f10e9fada0b40688e9f617da7",
"assets/icons/placeholder.png": "69f0c9c9c65c161f50c4d74c3aa425de",
"assets/icons/linkedin.jpg": "b18b5e1538415c40132c2f4c21add0ac",
"assets/icons/credit.png": "798246e34e3b1a115dba70579a4b5eb6",
"assets/icons/iletisim.png": "532f77c032a69d15697f13248380e7eb",
"assets/icons/coksatanlar.png": "ab3b1aff2a9bd6b9196ef2215348efa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
