'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d718d45d3df4d2cfb5216cb229fcd57b",
"version.json": "4ff419d961602456dc8f1327e23cba56",
"index.html": "82fbb18a1de564f062d30934ee8f2c48",
"/": "82fbb18a1de564f062d30934ee8f2c48",
"main.dart.js": "f5d7a91ec746e22faaa5d7e84f9a3b88",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3d632729c083c98400351668e46009ed",
"assets/AssetManifest.json": "ace046fdaa0a425f09e32d0330f7248f",
"assets/NOTICES": "124816f71496cafd9fc4dd2b1651a1ec",
"assets/FontManifest.json": "bc08524147adfbc63ef38c42880394c4",
"assets/AssetManifest.bin.json": "54411ead630fd53e564c97d613059c75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df5f49b28890a7d68b330099147bad48",
"assets/fonts/MaterialIcons-Regular.otf": "48d97200438a6ac66ec17f32f07e9856",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-RHS.jpg": "76576a4aa64ba2157e293a28b57bf12b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-RHS.jpg": "d63fe177ee96764ff58307deadfe4315",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Map.jpg": "ab9ded1d7bbeb4c95a2a29b0317e32c2",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Map.jpg": "120adcdb81fb3b80d8c34f2a02cb716c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-LHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-LHS.jpg": "9e9d1b6c0ae117f5e6631ca0b1249298",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Side%2520wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Drawbar%2520End-LHS.jpg": "d688dce459a80dab87ed584ac09fb48c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Front.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Side%2520wall-LHS-Overall.jpg": "5651bae548d1fe97bb14de73a714b38a",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(right).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-RHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Overall.jpg": "0a1db5133a2b8a514b17a35f784ac173",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(right).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Map.jpg": "abe61cbed92e82b8bb049ff36ca4cdea",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Overall.jpg": "2d4256b3f7833560173181f5b7297743",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Drawbar%2520Assembly-King%2520Casting-Rear.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Coupler%2520End-Cant%2520rail%2520corner%2520(left).jpg": "b8731cd68bb5e55893bde3306bb08c32",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Drawbar%2520Assembly-King%2520Casting-RHS.jpg": "e0c1b78c459054cf004d4b0af615cea4",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Front.jpg": "3d364a79e80b4736247e299fb3f69b9b",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Torsion%2520box-Drawbar%2520End-Cant%2520rail%2520corner%2520(left).jpg": "082dc5a1ed2cc00602de2c8a068bae74",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Coupler%2520Assembly-King%2520Casting-Map.jpg": "f6ec95a8057e33101c899562d56b8858",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-Rear.jpg": "2385d885b4ae4cad17824475a02c5a7c",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Slave-Side%2520wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Side%2520wall-RHS-Overall.jpg": "02639b62df0ba13f7bd2515f9c53b9dc",
"assets/assets/drawings/QHCH%2520Wagon%2520-%2520Master-Coupler%2520Assembly-King%2520Casting-LHS.jpg": "2fac7ea0b5b01dd9d211e7acd1844111",
"assets/assets/fixtures/defects.json": "b31ccd3ac0cb30e3032a22ad47edb859",
"assets/assets/fixtures/inspectors.json": "0678eba9c477db63bf9d5742567d8b0c",
"assets/assets/fixtures/observations.json": "12e3e328fc892bbe3229cdd35452441f",
"assets/assets/fixtures/floc.json": "0b94aa9f20e316c75f5d9fbb1f8c73c8",
"assets/assets/fixtures/counters.json": "57d86fbc9bb75d10bcb6ad4dc6ae5ef5",
"assets/assets/fixtures/drawings.json": "36b78afc4f959af7e06c013aa85bd973",
"assets/assets/fixtures/assets.json": "3008728dce15c34388b4ec1bd3d327dc",
"assets/assets/fixtures/inspections.json": "f59919154096603f0f911d45951ae253",
"assets/assets/fonts/SairaSemiCondensed-600.ttf": "3800eb33dc25b5cdcb2bae44a1322669",
"assets/assets/fonts/SairaSemiCondensed-700.ttf": "73c62a804eb56c340e3a9a3ca8a96f70",
"assets/assets/fonts/IBMPlexMono-400.ttf": "765bec38100d4f149506f43f13c09330",
"assets/assets/fonts/Saira-500.ttf": "34c6a5eb4afbad7dc4c17215375ef86d",
"assets/assets/fonts/Saira-400.ttf": "312e564470cb505b415b93d5966420f6",
"assets/assets/fonts/IBMPlexMono-500.ttf": "d35a0e42bc2ab6266e325a43509b0543",
"assets/assets/fonts/Saira-600.ttf": "87c9c954d581ca27cff4b5733a0aeb74",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
