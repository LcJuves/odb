"use strict";const MANIFEST="flutter-app-manifest",TEMP="flutter-temp-cache",CACHE_NAME="flutter-app-cache",RESOURCES={"flutter_bootstrap.js":"7092b3bbacfa9950d44e641991918c41","version.json":"d830c2901218d3da79ad0d5cc5e8cd51","index.html":"3cdc8e7a8a98648138f7ef6552c568ff","/":"3cdc8e7a8a98648138f7ef6552c568ff","css/animation.css":"159a0761add6a04bb5648ebd6534a792","css/index.css":"a912f0e4bc2ec2ad1d46e0459d65f029","main.dart.js":"a52fdc3e01aaaa292f58176cd275fb6e","flutter.js":"f393d3c16b631f36852323de8e583132","main.dart.mjs":"78f147d9c59f8e2a0efc5b470e3b0dbe","manifest.json":"9e1bcd4278aeb6ecef66ee7a47624657","main.dart.wasm":"10d7d160d61676647f68ab7f10d16a86","assets/AssetManifest.json":"a5de999107c2e141942b410b1068ecf2","assets/NOTICES":"aadbba9496103baf3952f3366ac152d7","assets/FontManifest.json":"7b2a36307916a9721811788013e65289","assets/AssetManifest.bin.json":"22aebc980b667aa3138afa6232bf11ad","assets/shaders/ink_sparkle.frag":"ecc85a2e95f5e9f53123dcaf8cb9b6ce","assets/AssetManifest.bin":"f1cf79ceaefdb215caaf45575903b8ff","assets/fonts/MaterialIcons-Regular.otf":"e7069dfd19b331be16bed984668fe080","assets/assets/book_icon.svg":"b551a680f1b341879713c2b5dc28d9bd","assets/assets/book.svg":"51b7d7073a3b0509ccd1fe5c0c18ef7d","canvaskit/skwasm.js":"694fda5704053957c2594de355805228","canvaskit/skwasm.js.symbols":"262f4827a1317abb59d71d6c587a93e2","canvaskit/canvaskit.js.symbols":"48c83a2ce573d9692e8d970e288d75f7","canvaskit/skwasm.wasm":"9f0c0c02b82a910d12ce0543ec130e60","canvaskit/chromium/canvaskit.js.symbols":"a012ed99ccba193cf96bb2643003f6fc","canvaskit/chromium/canvaskit.js":"671c6b4f8fcc199dcc551c7bb125f239","canvaskit/chromium/canvaskit.wasm":"b1ac05b29c127d86df4bcfbf50dd902a","canvaskit/canvaskit.js":"66177750aff65a66cb07bb44b8c6422b","canvaskit/canvaskit.wasm":"1f237a213d7370cf95f443d896176460","canvaskit/skwasm.worker.js":"89990e8c92bcb123999aa81f7e203b1c"},CORE=["main.dart.js","main.dart.wasm","main.dart.mjs","index.html","flutter_bootstrap.js","assets/AssetManifest.bin.json","assets/FontManifest.json"];self.addEventListener("install",a=>(self.skipWaiting(),a.waitUntil(caches.open(TEMP).then(s=>s.addAll(CORE.map(e=>new Request(e,{cache:"reload"}))))))),self.addEventListener("activate",function(a){return a.waitUntil(async function(){try{var s=await caches.open(CACHE_NAME),e=await caches.open(TEMP),c=await caches.open(MANIFEST),i=await c.match("manifest");if(!i){await caches.delete(CACHE_NAME),s=await caches.open(CACHE_NAME);for(var t of await e.keys()){var r=await e.match(t);await s.put(t,r)}await caches.delete(TEMP),await c.put("manifest",new Response(JSON.stringify(RESOURCES))),self.clients.claim();return}var f=await i.json(),d=self.location.origin;for(var t of await s.keys()){var n=t.url.substring(d.length+1);n==""&&(n="/"),(!RESOURCES[n]||RESOURCES[n]!=f[n])&&await s.delete(t)}for(var t of await e.keys()){var r=await e.match(t);await s.put(t,r)}await caches.delete(TEMP),await c.put("manifest",new Response(JSON.stringify(RESOURCES))),self.clients.claim();return}catch(o){console.error("Failed to upgrade service worker: "+o),await caches.delete(CACHE_NAME),await caches.delete(TEMP),await caches.delete(MANIFEST)}}())}),self.addEventListener("fetch",a=>{if(a.request.method==="GET"){var s=self.location.origin,e=a.request.url.substring(s.length+1);if(e.indexOf("?v=")!=-1&&(e=e.split("?v=")[0]),(a.request.url==s||a.request.url.startsWith(s+"/#")||e=="")&&(e="/"),!!RESOURCES[e]){if(e=="/")return onlineFirst(a);a.respondWith(caches.open(CACHE_NAME).then(c=>c.match(a.request).then(i=>i||fetch(a.request).then(t=>(t&&t.ok&&c.put(a.request,t.clone()),t)))))}}}),self.addEventListener("message",a=>{if(a.data==="skipWaiting"){self.skipWaiting();return}if(a.data==="downloadOffline"){downloadOffline();return}});async function downloadOffline(){var a=[],s=await caches.open(CACHE_NAME),e={};for(var c of await s.keys()){var i=c.url.substring(origin.length+1);i==""&&(i="/"),e[i]=!0}for(var t of Object.keys(RESOURCES))e[t]||a.push(t);return s.addAll(a)}function onlineFirst(a){return a.respondWith(fetch(a.request).then(s=>caches.open(CACHE_NAME).then(e=>(e.put(a.request,s.clone()),s))).catch(s=>caches.open(CACHE_NAME).then(e=>e.match(a.request).then(c=>{if(c!=null)return c;throw s}))))}
