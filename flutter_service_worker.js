"use strict";const MANIFEST="flutter-app-manifest",TEMP="flutter-temp-cache",CACHE_NAME="flutter-app-cache",RESOURCES={"version.json":"d830c2901218d3da79ad0d5cc5e8cd51","index.html":"618c2aadb4fd2478c9976a925c0b87f4","/":"618c2aadb4fd2478c9976a925c0b87f4","css/animation.css":"3cd0adaf6568e79fa236b225c8ae3a94","css/index.css":"a912f0e4bc2ec2ad1d46e0459d65f029","main.dart.js":"e1b88dd79fd660370f2f4b9f6b1ed37b","flutter.js":"6fef97aeca90b426343ba6c5c9dc5d4a","manifest.json":"9e1bcd4278aeb6ecef66ee7a47624657","assets/AssetManifest.json":"a5de999107c2e141942b410b1068ecf2","assets/NOTICES":"df0928e56121dd1748e8d7fe9d06ab13","assets/FontManifest.json":"7b2a36307916a9721811788013e65289","assets/shaders/ink_sparkle.frag":"f8b80e740d33eb157090be4e995febdf","assets/AssetManifest.bin":"f1cf79ceaefdb215caaf45575903b8ff","assets/fonts/MaterialIcons-Regular.otf":"e7069dfd19b331be16bed984668fe080","assets/assets/book_icon.svg":"b551a680f1b341879713c2b5dc28d9bd","assets/assets/book.svg":"51b7d7073a3b0509ccd1fe5c0c18ef7d","canvaskit/skwasm.js":"95f16c6690f955a45b2317496983dbe9","canvaskit/skwasm.wasm":"d1fde2560be92c0b07ad9cf9acb10d05","canvaskit/chromium/canvaskit.js":"ffb2bb6484d5689d91f393b60664d530","canvaskit/chromium/canvaskit.wasm":"393ec8fb05d94036734f8104fa550a67","canvaskit/canvaskit.js":"5caccb235fad20e9b72ea6da5a0094e6","canvaskit/canvaskit.wasm":"d9f69e0f428f695dc3d66b3a83a4aa8e","canvaskit/skwasm.worker.js":"51253d3321b11ddb8d73fa8aa87d3b15"},CORE=["main.dart.js","index.html","assets/AssetManifest.json","assets/FontManifest.json"];self.addEventListener("install",a=>(self.skipWaiting(),a.waitUntil(caches.open(TEMP).then(t=>t.addAll(CORE.map(e=>new Request(e,{cache:"reload"}))))))),self.addEventListener("activate",function(a){return a.waitUntil(async function(){try{var t=await caches.open(CACHE_NAME),e=await caches.open(TEMP),i=await caches.open(MANIFEST),r=await i.match("manifest");if(!r){await caches.delete(CACHE_NAME),t=await caches.open(CACHE_NAME);for(var s of await e.keys()){var c=await e.match(s);await t.put(s,c)}await caches.delete(TEMP),await i.put("manifest",new Response(JSON.stringify(RESOURCES))),self.clients.claim();return}var f=await r.json(),d=self.location.origin;for(var s of await t.keys()){var n=s.url.substring(d.length+1);n==""&&(n="/"),(!RESOURCES[n]||RESOURCES[n]!=f[n])&&await t.delete(s)}for(var s of await e.keys()){var c=await e.match(s);await t.put(s,c)}await caches.delete(TEMP),await i.put("manifest",new Response(JSON.stringify(RESOURCES))),self.clients.claim();return}catch(o){console.error("Failed to upgrade service worker: "+o),await caches.delete(CACHE_NAME),await caches.delete(TEMP),await caches.delete(MANIFEST)}}())}),self.addEventListener("fetch",a=>{if(a.request.method==="GET"){var t=self.location.origin,e=a.request.url.substring(t.length+1);if(e.indexOf("?v=")!=-1&&(e=e.split("?v=")[0]),(a.request.url==t||a.request.url.startsWith(t+"/#")||e=="")&&(e="/"),!!RESOURCES[e]){if(e=="/")return onlineFirst(a);a.respondWith(caches.open(CACHE_NAME).then(i=>i.match(a.request).then(r=>r||fetch(a.request).then(s=>(s&&s.ok&&i.put(a.request,s.clone()),s)))))}}}),self.addEventListener("message",a=>{if(a.data==="skipWaiting"){self.skipWaiting();return}if(a.data==="downloadOffline"){downloadOffline();return}});async function downloadOffline(){var a=[],t=await caches.open(CACHE_NAME),e={};for(var i of await t.keys()){var r=i.url.substring(origin.length+1);r==""&&(r="/"),e[r]=!0}for(var s of Object.keys(RESOURCES))e[s]||a.push(s);return t.addAll(a)}function onlineFirst(a){return a.respondWith(fetch(a.request).then(t=>caches.open(CACHE_NAME).then(e=>(e.put(a.request,t.clone()),t))).catch(t=>caches.open(CACHE_NAME).then(e=>e.match(a.request).then(i=>{if(i!=null)return i;throw t}))))}
