'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "bdc5657a570bd56ac1c4e5d16c02b346",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a6e3d04cf34967a343f44806d6a0bb12",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/master": "1d1e0f884eb61aee667d28ff88906e59",
".git/objects/01/f106c2f85e533ca7ed8663a0398b0b02413270": "acfba56535f409703c855e428e8da153",
".git/objects/06/fc2c692eebce14cede7369b621c7d7b04b6caf": "67fc359350e6ebc6535b2bb2498fdc46",
".git/objects/0e/8912b9311ac39718df0d3f38a586eab4ae7996": "7a5866d93a80763fd75f3fd0a6664275",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/26/c64b5440509718e6e8a080eaa99c2f21430eb1": "5915d5a23fe99f8afaeb0a9d619883cc",
".git/objects/29/a82a722d65c2bb46af115e77dd02b79ef7d733": "caf51fd303e5151d23a11432b4e09f01",
".git/objects/2f/36c552eeec47d95d34181cb3c152d14db772d7": "7238cdd88d8a182033a9a260e329194e",
".git/objects/2f/95dda486ca2fdd95f8d5d210b3f519f788bf37": "4ba1ea65eb2eea592e238bbe104a91b3",
".git/objects/36/15c7649173b5fb8ee0fe40a75002b370d998fe": "9d8ae0b801da4210d49e59ab8e751d42",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/cc3351023d7a134c47ff73bbfb2428a2e578ae": "936b9ed6b7cbc576bc6b79ca0ceff658",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/48c8c1db77b0c9f6f986e690149dc71495502c": "2f687e7b6c0d4d78e004984d5575044f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/f8ab77a83240fbc4684aade7f7869bfccb94dd": "62f41ff47e5d5b8a51df2ffe5d05584a",
".git/objects/69/fbfa7296ed866d8851b9fd1a2d0cc1b3a3cf9a": "3f3310ebd3cfdbf431bcd705d0be7d41",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/1598293a5154f754004935a8cd0973eb70ba6c": "b28c4bfef62e29add1eb20f417163d34",
".git/objects/81/5efd9f64cd0b1c6015b5738b0df48b7a64be68": "b907572d176dd16aa57551580eada7ea",
".git/objects/87/fedfba290e4e4b6da4cba7e3a2cffe2f78f302": "43beef27f16295ff96e025baf33b154c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3425e636813e83008ac5a344c52acde4f161ab": "e36c1dde3e859c98361ea6f839309d34",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2f7c5bd7f10585db9151fbf3da7bc82d0979b9": "e5618ea163ba614222128bce51dff5ff",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/c6524087e03df1655c34b929cad81924aafdea": "206e89742183f8632398a4597742c2c7",
".git/objects/b5/c6d17e78b5848fc609d907b07cdfa081cf9d04": "ddcf655c63199072917a128b802010f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/07e84736150baabebbcab7a3a55ba39cd433e4": "89206539e3aadc025f90dd978b793b4d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/cc7de0583810a46e276e50333d6985f5a5350a": "0e0402aefba14816da4c2c9263747f72",
".git/objects/c6/7abb5fbcaff756d18c18b3e1875df198fa86a2": "49f644e4e71344494a9e3b807e2693b4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/2d65daef6ed0615d4550ee8bcaa9114846906b": "8095ee4711261baf3aca1a3ed0ea16d1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/remotes/origin/master": "b302862808a156d44452fc245416a71a",
"assets/AssetManifest.json": "f799a2b66e5c4392a942a59bb756416e",
"assets/FontManifest.json": "424f49068ab75f5e7e75fd81b7f8285b",
"assets/fonts/Gotham-Black.ttf": "1eade7fc3f28ebb187ef3f296ee02a3c",
"assets/fonts/Gotham-Bold.ttf": "c4ae957126764824d354faf04f788c34",
"assets/fonts/Gotham-Thin.ttf": "8fbcda7e5a6732d986b845c417fd60c0",
"assets/fonts/Gotham-Ultra.ttf": "75f2a48108a17ba4c53132ab5481faf3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Mont-Black.otf": "dbcb2f8542b0ecbdb5309d71b8d66c40",
"assets/fonts/Mont-Bold.otf": "482e37260cd688576287f1976e958e0b",
"assets/NOTICES": "3e2e638e5876d15cbe300dd5213824ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/src/tutorial/obs.png": "1092464b75f3e4275ff33aa80140aabc",
"assets/src/tutorial/obs_2.png": "1648228e9c6b6ed7e9a2f58128800805",
"assets/src/tutorial/obs_3.png": "1c31d2f2cf9fc461c37764f4d8c08ebc",
"assets/src/tutorial/obs_4.png": "6bfda79ffa93404bfe482b8d04d687f6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86d8f88a06aeb2db4e9982cc2483a235",
"/": "86d8f88a06aeb2db4e9982cc2483a235",
"main.dart.js": "66c8bf974acbf3fe4c5514b9020d1cce",
"manifest.json": "7805aa3344ecd6ab1e84a65f602cdd50",
"version.json": "bb8ec5b1644bf9bdbdfbc97efb565eaf"
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
