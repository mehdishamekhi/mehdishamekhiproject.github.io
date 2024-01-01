'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1ae23091c64de2d46da273f8e52f47ee",
"index.html": "9d7b0099c319586639078d4e2c45cd02",
"/": "9d7b0099c319586639078d4e2c45cd02",
"main.dart.js": "5be4995bee25bdf59e6d0193cba57d2c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e9339cf31a578ef4faddf444b8e2565",
"assets/AssetManifest.json": "d80680908fa603fc054027b7a7cece4a",
"assets/NOTICES": "bf9332f9da9cab6ff42ce340d2904d15",
"assets/FontManifest.json": "b67debfd877eb624ac86a222e5e70f5e",
"assets/AssetManifest.bin.json": "3bde7360ad34fee46d697e6963743ed3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "49221f00dbdbc5f0b8d7daaab6223a3b",
"assets/fonts/MaterialIcons-Regular.otf": "5646eb52d63fedaecb2252643caaf474",
"assets/assets/images/todo3.png": "3723f33e0279cdda0adc075812fd630f",
"assets/assets/images/instagram5.png": "d5d6a3df8114238abafde742704f82ce",
"assets/assets/images/crypto4.png": "38486f8b20154f4782c0de7e1ff05772",
"assets/assets/images/crypto5.png": "9dd18ce4ed4077d24afb0e12a13bc534",
"assets/assets/images/instagram4.png": "eab7f0c9ae03af568a751162d53a3091",
"assets/assets/images/todo2.png": "e85e429741af74809cd7e23cc502cbb5",
"assets/assets/images/mg-base.png": "deba0329701a59c12f8904235539de19",
"assets/assets/images/todo0.png": "07183ff5c23f97c99a13d9d89e75484b",
"assets/assets/images/instagram6.png": "639b68c96c6b3e7e0018d5b8982ff58d",
"assets/assets/images/button-start-hover.png": "39d7ee03962ad766b66be34336343e75",
"assets/assets/images/fg-light-receive.png": "9981f29fa2d3814768cbf9695eb7b861",
"assets/assets/images/crypto7.png": "98fce4342b937e7889d180352f649bfc",
"assets/assets/images/crypto6.png": "1df65689c9d713f3dbf4845bb687cc82",
"assets/assets/images/instagram7.png": "9d18b0e70d7d71f061a94ee9422d00c2",
"assets/assets/images/todo1.png": "d1ef14376f9ccd19c56eb38defca386d",
"assets/assets/images/todo5.png": "0ffdf24905bce71eda38d1c89608b83f",
"assets/assets/images/instagram3.png": "07c36c47efae056544ca1f5209f72690",
"assets/assets/images/crypto2.png": "250dbfad8882f9121d16f2800bae471d",
"assets/assets/images/crypto3.png": "3d3fd315c13b8b075ee35d85f8c650d0",
"assets/assets/images/fg-base.png": "9742f524c248f9795e59132bda584982",
"assets/assets/images/instagram2.png": "93b58622edb1102a7c51e8a65a74ddf9",
"assets/assets/images/todo4.png": "5c8ff41f28c465987b93d2a7a6c73473",
"assets/assets/images/instagram0.png": "33b6b3b3a7c63586612c456ceb2b9409",
"assets/assets/images/crypto1.png": "b8c04db7a487ee98b52c9f45a549c2b7",
"assets/assets/images/crypto0.png": "d07509ff906533fa1d216c1d4c89195c",
"assets/assets/images/instagram1.png": "0bb6405b131f5d3be2c221cfe6391cb7",
"assets/assets/images/shop8.png": "4bd412321369c78e8f8d2d7142f2bac3",
"assets/assets/images/shop9.png": "4e71651b73a52b46ab34425aeda75c03",
"assets/assets/images/select-right.png": "a6c979b3eae49cde6c7d5797dc357034",
"assets/assets/images/mg-light-receive.png": "6e0e1018b6cf20f4747f5c4ef3e6f58d",
"assets/assets/images/instagram13.png": "faffae31696e4ba953615d690c40a722",
"assets/assets/images/crypto12.png": "0c9bc350164b80e6272253bf6e1b2958",
"assets/assets/images/instagram12.png": "8745042d6b092d30a7611b127fd0a196",
"assets/assets/images/fg-light-emit.png": "d398c8fab13becd0da8995be2a3c7799",
"assets/assets/images/instagram10.png": "b1c1f2b95e962cb2e46d7793c9740fd3",
"assets/assets/images/crypto11.png": "026ec08b25e8ca44f544be3ac3138dd5",
"assets/assets/images/crypto10.png": "85c833b66680b089c8eea4e6f4c7e48d",
"assets/assets/images/instagram11.png": "28ade6a9adb4a4cc184e3484daf54aa9",
"assets/assets/images/shop1.png": "29ca529a7c0caa0a6f2d36b039e4e428",
"assets/assets/images/bg-base.jpg": "3c258b33e7a71dee7ae8e3c4e83dd04f",
"assets/assets/images/shop2.png": "e47142d04eaf72bb51c1675795689853",
"assets/assets/images/shop3.png": "c7a7de6e6bb01644135e122bbe682c9d",
"assets/assets/images/shop7.png": "7708e1f81dc13dd9a11663eec308cef7",
"assets/assets/images/shop6.png": "d5f0944cf4a955714a082c4616d0c5d3",
"assets/assets/images/bg-light-receive.png": "2f6ba99f8eea020027e10b9778b666ad",
"assets/assets/images/shop4.png": "cc07fdaab3a07a6d7f9b0b9e6e5395aa",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/shop5.png": "2d38694ae2b9f3c50b59388931b8ff81",
"assets/assets/images/shop12.png": "df2612745b79d9dbcdcfb3ef5af449b3",
"assets/assets/images/shop10.png": "298af13de044ce2979737c7de36bba1b",
"assets/assets/images/button-start.png": "748701e42abc14ebc65963234d9a7b6a",
"assets/assets/images/shop11.png": "ca9ff36efa66411c4e094d5d4ba70387",
"assets/assets/images/particle-wave.png": "d6b73c1346b8ffd48de351cfab3daaad",
"assets/assets/images/mg-light-emit.png": "076ed5490a67d7d300832d86778adfc0",
"assets/assets/images/github_icon.jpg": "40b2ff5a0672196bc4122a948ed00830",
"assets/assets/images/instagram9.png": "07dd764c408eecac908a0542394a5d5e",
"assets/assets/images/select-left.png": "b3fbaf9a7b1b72c26880c5bdfde6e33c",
"assets/assets/images/crypto8.png": "f51e1be5d39ce5153b4991aa70aa1979",
"assets/assets/images/crypto9.png": "a8cc1672368b8cdb061e159202a0d058",
"assets/assets/images/instagram8.png": "9b24484c2197c2e12ee57a7b670463c9",
"assets/assets/shaders/orb_shader.frag": "7f53dc1f64cf4ef8e12c5171dcd7efc5",
"assets/assets/shaders/ui_glitch.frag": "97b58db3bd4a0fd72623cc29af45f190",
"assets/assets/fonts/Marhey-Bold.ttf": "744a937357e4bf9303e8eb44e3414f10",
"assets/assets/fonts/Exo-Medium.ttf": "822a35349a144a97433b82d94df61d1a",
"assets/assets/fonts/Marhey-Light.ttf": "1208b4dd59bd355bc54c557b5b949d7b",
"assets/assets/fonts/Exo-Bold.ttf": "a939d1d0769c88bde068c8570e5f3f22",
"assets/assets/fonts/Marhey-Regular.ttf": "9d728f8c903b93719e8983c38a7ecbfa",
"assets/assets/fonts/OFL.txt": "e542a680112942b035ac18d476288952",
"assets/assets/fonts/Marhey-SemiBold.ttf": "968b134f76a132f7fbbb4850f51a2a1f",
"assets/assets/fonts/Marhey-Medium.ttf": "1576c7e23f222087e4dc0c545bb757ab",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
