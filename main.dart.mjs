export const instantiate=async(p,u)=>{let _;function g(e){if(typeof dartPrint=="function"){dartPrint(e);return}if(typeof console=="object"&&typeof console.log<"u"){console.log(e);return}if(typeof print=="function"){print(e);return}throw"Unable to print message: "+js}function c(e,t){const n=_.exports,o=n.$listRead,r=n.$listLength(t),l=new e(r);for(let i=0;i<r;i++)l[i]=o(t,i);return l}const f=Symbol("JSWrappedDartFunction");function a(e,t){return t.dartFunction=e,t[f]=!0,t}const y={dart2wasm:{_1:(e,t,n)=>e.set(t,n),_2:(e,t,n)=>e.set(t,n),_6:e=>a(e,function(t){return _.exports._6(e,arguments.length,t)}),_7:e=>new window.FinalizationRegistry(e),_8:(e,t,n,o)=>e.register(t,n,o),_9:(e,t)=>e.unregister(t),_10:(e,t,n)=>e.slice(t,n),_11:(e,t)=>e.decode(t),_12:(e,t)=>e.segment(t),_13:()=>new TextDecoder,_14:e=>e.buffer,_15:e=>e.wasmMemory,_16:()=>globalThis.window._flutter_skwasmInstance,_17:e=>e.rasterStartMilliseconds,_18:e=>e.rasterEndMilliseconds,_19:e=>e.imageBitmaps,_167:e=>e.select(),_168:(e,t)=>e.append(t),_169:e=>e.remove(),_172:e=>e.unlock(),_177:e=>e.getReader(),_189:e=>new MutationObserver(e),_208:(e,t,n)=>e.addEventListener(t,n),_209:(e,t,n)=>e.removeEventListener(t,n),_212:e=>new ResizeObserver(e),_215:(e,t)=>new Intl.Segmenter(e,t),_216:e=>e.next(),_217:(e,t)=>new Intl.v8BreakIterator(e,t),_294:e=>e.close(),_295:(e,t,n,o,r)=>({type:e,data:t,premultiplyAlpha:n,colorSpaceConversion:o,preferAnimation:r}),_296:e=>new window.ImageDecoder(e),_297:e=>e.close(),_298:e=>({frameIndex:e}),_299:(e,t)=>e.decode(t),_302:e=>a(e,function(t){return _.exports._302(e,arguments.length,t)}),_303:e=>a(e,function(t){return _.exports._303(e,arguments.length,t)}),_304:(e,t)=>({addView:e,removeView:t}),_305:e=>a(e,function(t){return _.exports._305(e,arguments.length,t)}),_306:e=>a(e,function(){return _.exports._306(e,arguments.length)}),_307:(e,t)=>({initializeEngine:e,autoStart:t}),_308:e=>a(e,function(t){return _.exports._308(e,arguments.length,t)}),_309:e=>({runApp:e}),_310:e=>new Uint8Array(e),_312:e=>e.preventDefault(),_313:e=>e.stopPropagation(),_314:(e,t)=>e.addListener(t),_315:(e,t)=>e.removeListener(t),_316:(e,t)=>e.prepend(t),_317:e=>e.remove(),_318:e=>e.disconnect(),_319:(e,t)=>e.addListener(t),_320:(e,t)=>e.removeListener(t),_322:(e,t)=>e.append(t),_323:e=>e.remove(),_324:e=>e.stopPropagation(),_328:e=>e.preventDefault(),_329:(e,t)=>e.append(t),_330:e=>e.remove(),_331:e=>e.preventDefault(),_336:(e,t)=>e.appendChild(t),_337:(e,t,n)=>e.insertBefore(t,n),_338:(e,t)=>e.removeChild(t),_339:(e,t)=>e.appendChild(t),_340:(e,t)=>e.transferFromImageBitmap(t),_341:(e,t)=>e.append(t),_342:(e,t)=>e.append(t),_343:(e,t)=>e.append(t),_344:e=>e.remove(),_345:e=>e.remove(),_346:e=>e.remove(),_347:(e,t)=>e.appendChild(t),_348:(e,t)=>e.appendChild(t),_349:e=>e.remove(),_350:(e,t)=>e.append(t),_351:(e,t)=>e.append(t),_352:e=>e.remove(),_353:(e,t)=>e.append(t),_354:(e,t)=>e.append(t),_355:(e,t,n)=>e.insertBefore(t,n),_356:(e,t)=>e.append(t),_357:(e,t,n)=>e.insertBefore(t,n),_358:e=>e.remove(),_359:e=>e.remove(),_360:(e,t)=>e.append(t),_361:e=>e.remove(),_362:(e,t)=>e.append(t),_363:e=>e.remove(),_364:e=>e.remove(),_365:e=>e.getBoundingClientRect(),_366:e=>e.remove(),_367:e=>e.blur(),_368:e=>e.remove(),_369:e=>e.blur(),_370:e=>e.remove(),_383:(e,t)=>e.append(t),_384:e=>e.remove(),_385:(e,t)=>e.append(t),_386:(e,t,n)=>e.insertBefore(t,n),_387:e=>e.preventDefault(),_388:e=>e.preventDefault(),_389:e=>e.preventDefault(),_390:e=>e.preventDefault(),_391:e=>e.remove(),_392:(e,t)=>e.observe(t),_393:e=>e.disconnect(),_394:(e,t)=>e.appendChild(t),_395:(e,t)=>e.appendChild(t),_396:(e,t)=>e.appendChild(t),_397:(e,t)=>e.append(t),_398:e=>e.remove(),_399:(e,t)=>e.append(t),_401:(e,t)=>e.appendChild(t),_402:(e,t)=>e.append(t),_403:e=>e.remove(),_404:(e,t)=>e.append(t),_408:(e,t)=>e.appendChild(t),_409:e=>e.remove(),_969:()=>globalThis.window.flutterConfiguration,_970:e=>e.assetBase,_975:e=>e.debugShowSemanticsNodes,_976:e=>e.hostElement,_977:e=>e.multiViewEnabled,_978:e=>e.nonce,_980:e=>e.fontFallbackBaseUrl,_981:e=>e.useColorEmoji,_985:e=>e.console,_986:e=>e.devicePixelRatio,_987:e=>e.document,_988:e=>e.history,_989:e=>e.innerHeight,_990:e=>e.innerWidth,_991:e=>e.location,_992:e=>e.navigator,_993:e=>e.visualViewport,_994:e=>e.performance,_995:(e,t)=>e.fetch(t),_1000:(e,t)=>e.dispatchEvent(t),_1001:(e,t)=>e.matchMedia(t),_1002:(e,t)=>e.getComputedStyle(t),_1004:e=>e.screen,_1005:(e,t)=>e.requestAnimationFrame(t),_1006:e=>a(e,function(t){return _.exports._1006(e,arguments.length,t)}),_1010:(e,t)=>e.warn(t),_1013:()=>globalThis.window,_1014:()=>globalThis.Intl,_1015:()=>globalThis.Symbol,_1018:e=>e.clipboard,_1019:e=>e.maxTouchPoints,_1020:e=>e.vendor,_1021:e=>e.language,_1022:e=>e.platform,_1023:e=>e.userAgent,_1024:e=>e.languages,_1025:e=>e.documentElement,_1026:(e,t)=>e.querySelector(t),_1029:(e,t)=>e.createElement(t),_1031:(e,t)=>e.execCommand(t),_1035:(e,t)=>e.createTextNode(t),_1036:(e,t)=>e.createEvent(t),_1040:e=>e.head,_1041:e=>e.body,_1042:(e,t)=>e.title=t,_1045:e=>e.activeElement,_1047:e=>e.visibilityState,_1048:()=>globalThis.document,_1049:(e,t,n)=>e.addEventListener(t,n),_1050:(e,t,n,o)=>e.addEventListener(t,n,o),_1051:(e,t,n,o)=>e.addEventListener(t,n,o),_1052:(e,t,n)=>e.removeEventListener(t,n),_1055:e=>a(e,function(t){return _.exports._1055(e,arguments.length,t)}),_1056:e=>e.target,_1058:e=>e.timeStamp,_1059:e=>e.type,_1061:e=>e.preventDefault(),_1065:(e,t,n,o)=>e.initEvent(t,n,o),_1070:e=>e.firstChild,_1076:e=>e.parentElement,_1078:e=>e.parentNode,_1081:(e,t)=>e.removeChild(t),_1082:(e,t)=>e.removeChild(t),_1083:e=>e.isConnected,_1084:(e,t)=>e.textContent=t,_1087:(e,t)=>e.contains(t),_1092:e=>e.firstElementChild,_1094:e=>e.nextElementSibling,_1095:e=>e.clientHeight,_1096:e=>e.clientWidth,_1097:e=>e.offsetHeight,_1098:e=>e.offsetWidth,_1099:e=>e.id,_1100:(e,t)=>e.id=t,_1103:(e,t)=>e.spellcheck=t,_1104:e=>e.tagName,_1105:e=>e.style,_1107:(e,t)=>e.append(t),_1108:(e,t)=>e.getAttribute(t),_1109:e=>e.getBoundingClientRect(),_1112:(e,t)=>e.closest(t),_1114:(e,t)=>e.querySelectorAll(t),_1115:e=>e.remove(),_1116:(e,t,n)=>e.setAttribute(t,n),_1118:(e,t)=>e.removeAttribute(t),_1119:(e,t)=>e.tabIndex=t,_1121:(e,t)=>e.focus(t),_1122:e=>e.scrollTop,_1123:(e,t)=>e.scrollTop=t,_1124:e=>e.scrollLeft,_1125:(e,t)=>e.scrollLeft=t,_1126:e=>e.classList,_1127:(e,t)=>e.className=t,_1131:(e,t)=>e.getElementsByClassName(t),_1132:e=>e.click(),_1133:(e,t)=>e.hasAttribute(t),_1136:(e,t)=>e.attachShadow(t),_1140:(e,t)=>e.getPropertyValue(t),_1142:(e,t,n,o)=>e.setProperty(t,n,o),_1144:(e,t)=>e.removeProperty(t),_1146:e=>e.offsetLeft,_1147:e=>e.offsetTop,_1148:e=>e.offsetParent,_1150:(e,t)=>e.name=t,_1151:e=>e.content,_1152:(e,t)=>e.content=t,_1165:(e,t)=>e.nonce=t,_1170:e=>e.now(),_1172:(e,t)=>e.width=t,_1174:(e,t)=>e.height=t,_1178:(e,t)=>e.getContext(t),_1256:e=>e.status,_1258:e=>e.body,_1259:e=>e.arrayBuffer(),_1264:e=>e.read(),_1265:e=>e.value,_1266:e=>e.done,_1268:e=>e.name,_1269:e=>e.x,_1270:e=>e.y,_1273:e=>e.top,_1274:e=>e.right,_1275:e=>e.bottom,_1276:e=>e.left,_1285:e=>e.height,_1286:e=>e.width,_1287:(e,t)=>e.value=t,_1289:(e,t)=>e.placeholder=t,_1290:(e,t)=>e.name=t,_1291:e=>e.selectionDirection,_1292:e=>e.selectionStart,_1293:e=>e.selectionEnd,_1296:e=>e.value,_1298:(e,t,n)=>e.setSelectionRange(t,n),_1303:e=>e.readText(),_1304:(e,t)=>e.writeText(t),_1305:e=>e.altKey,_1306:e=>e.code,_1307:e=>e.ctrlKey,_1308:e=>e.key,_1309:e=>e.keyCode,_1310:e=>e.location,_1311:e=>e.metaKey,_1312:e=>e.repeat,_1313:e=>e.shiftKey,_1314:e=>e.isComposing,_1315:(e,t)=>e.getModifierState(t),_1316:e=>e.state,_1319:(e,t)=>e.go(t),_1320:(e,t,n,o)=>e.pushState(t,n,o),_1321:(e,t,n,o)=>e.replaceState(t,n,o),_1322:e=>e.pathname,_1323:e=>e.search,_1324:e=>e.hash,_1327:e=>e.state,_1333:e=>a(e,function(t,n){return _.exports._1333(e,arguments.length,t,n)}),_1335:(e,t,n)=>e.observe(t,n),_1338:e=>e.attributeName,_1339:e=>e.type,_1340:e=>e.matches,_1344:e=>e.matches,_1345:e=>e.relatedTarget,_1346:e=>e.clientX,_1347:e=>e.clientY,_1348:e=>e.offsetX,_1349:e=>e.offsetY,_1352:e=>e.button,_1353:e=>e.buttons,_1354:e=>e.ctrlKey,_1355:(e,t)=>e.getModifierState(t),_1356:e=>e.pointerId,_1357:e=>e.pointerType,_1358:e=>e.pressure,_1359:e=>e.tiltX,_1360:e=>e.tiltY,_1361:e=>e.getCoalescedEvents(),_1362:e=>e.deltaX,_1363:e=>e.deltaY,_1364:e=>e.wheelDeltaX,_1365:e=>e.wheelDeltaY,_1366:e=>e.deltaMode,_1371:e=>e.changedTouches,_1373:e=>e.clientX,_1374:e=>e.clientY,_1375:e=>e.data,_1376:(e,t)=>e.type=t,_1377:(e,t)=>e.max=t,_1378:(e,t)=>e.min=t,_1379:(e,t)=>e.value=t,_1380:e=>e.value,_1381:e=>e.disabled,_1382:(e,t)=>e.disabled=t,_1383:(e,t)=>e.placeholder=t,_1384:(e,t)=>e.name=t,_1385:(e,t)=>e.autocomplete=t,_1386:e=>e.selectionDirection,_1387:e=>e.selectionStart,_1388:e=>e.selectionEnd,_1392:(e,t,n)=>e.setSelectionRange(t,n),_1399:(e,t)=>e.add(t),_1402:(e,t)=>e.noValidate=t,_1403:(e,t)=>e.method=t,_1404:(e,t)=>e.action=t,_1431:e=>e.orientation,_1432:e=>e.width,_1433:e=>e.height,_1434:(e,t)=>e.lock(t),_1451:e=>a(e,function(t,n){return _.exports._1451(e,arguments.length,t,n)}),_1461:e=>e.length,_1462:(e,t)=>e.item(t),_1463:e=>e.length,_1464:(e,t)=>e.item(t),_1465:e=>e.iterator,_1466:e=>e.Segmenter,_1467:e=>e.v8BreakIterator,_1470:e=>e.done,_1471:e=>e.value,_1472:e=>e.index,_1476:(e,t)=>e.adoptText(t),_1478:e=>e.first(),_1479:e=>e.next(),_1480:e=>e.current(),_1493:e=>e.hostElement,_1494:e=>e.viewConstraints,_1496:e=>e.maxHeight,_1497:e=>e.maxWidth,_1498:e=>e.minHeight,_1499:e=>e.minWidth,_1500:e=>e.loader,_1501:()=>globalThis._flutter,_1502:(e,t)=>e.didCreateEngineInitializer(t),_1503:(e,t,n)=>e.call(t,n),_1504:()=>globalThis.Promise,_1505:e=>a(e,function(t,n){return _.exports._1505(e,arguments.length,t,n)}),_1508:e=>e.length,_1511:e=>e.tracks,_1515:e=>e.image,_1520:e=>e.codedWidth,_1521:e=>e.codedHeight,_1524:e=>e.duration,_1528:e=>e.ready,_1529:e=>e.selectedTrack,_1530:e=>e.repetitionCount,_1531:e=>e.frameCount,_1595:(e,t)=>e.createElement(t),_1637:e=>new Array(e),_1671:(e,t)=>e.decode(t),_1672:()=>new TextDecoder("utf-8",{fatal:!0}),_1673:()=>new TextDecoder("utf-8",{fatal:!1}),_1674:e=>e.toString(),_1675:(e,t)=>e.toFixed(t),_1679:e=>new WeakRef(e),_1680:e=>e.deref(),_1686:Date.now,_1688:e=>new Date(e*1e3).getTimezoneOffset()*60,_1689:e=>/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(e)?parseFloat(e):NaN,_1690:()=>{let t=new Error().stack.toString().split(`
`),n=2;return t[0]==="Error"&&(n+=1),t.slice(n).join(`
`)},_1691:()=>typeof dartUseDateNowForTicks<"u",_1692:()=>1e3*performance.now(),_1693:()=>Date.now(),_1696:()=>new WeakMap,_1697:(e,t)=>e.get(t),_1698:(e,t,n)=>e.set(t,n),_1699:()=>globalThis.WeakRef,_1710:e=>JSON.stringify(e),_1711:e=>g(e),_1712:e=>e.join(""),_1713:(e,t,n)=>e.replace(t,n),_1715:(e,t)=>e.split(t),_1716:e=>e.toLowerCase(),_1717:e=>e.toUpperCase(),_1718:e=>e.trim(),_1719:e=>e.trimLeft(),_1720:e=>e.trimRight(),_1722:(e,t,n)=>e.indexOf(t,n),_1723:(e,t,n)=>e.lastIndexOf(t,n),_1724:e=>e.replace(/\$/g,"$$$$"),_1725:Object.is,_1726:e=>e.toUpperCase(),_1727:e=>e.toLowerCase(),_1728:(e,t)=>e.push(t),_1732:e=>e.pop(),_1733:(e,t)=>e.splice(t,1),_1735:(e,t)=>e.join(t),_1736:(e,t,n)=>e.slice(t,n),_1739:e=>e.length,_1741:(e,t)=>e[t],_1742:(e,t,n)=>e[t]=n,_1744:(e,t,n)=>{var o=new ArrayBuffer(n);return new Uint8Array(o).set(new Uint8Array(e,t,n)),new DataView(o)},_1745:(e,t,n)=>new Uint8Array(e.buffer,e.byteOffset+t,n),_1746:(e,t,n)=>new Int8Array(e.buffer,e.byteOffset+t,n),_1747:(e,t,n)=>new Uint8ClampedArray(e.buffer,e.byteOffset+t,n),_1748:(e,t,n)=>new Uint16Array(e.buffer,e.byteOffset+t,n),_1749:(e,t,n)=>new Int16Array(e.buffer,e.byteOffset+t,n),_1750:(e,t,n)=>new Uint32Array(e.buffer,e.byteOffset+t,n),_1751:(e,t,n)=>new Int32Array(e.buffer,e.byteOffset+t,n),_1753:(e,t,n)=>new BigInt64Array(e.buffer,e.byteOffset+t,n),_1754:(e,t,n)=>new Float32Array(e.buffer,e.byteOffset+t,n),_1755:(e,t,n)=>new Float64Array(e.buffer,e.byteOffset+t,n),_1756:(e,t)=>e.set(t),_1758:e=>new DataView(e.buffer,e.byteOffset,e.byteLength),_1760:e=>e.buffer,_1761:e=>e.byteOffset,_1762:Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype,"byteLength").get),_1763:(e,t)=>new DataView(e,t),_1764:(e,t,n)=>new DataView(e,t,n),_1765:Function.prototype.call.bind(DataView.prototype.getUint8),_1766:Function.prototype.call.bind(DataView.prototype.setUint8),_1767:Function.prototype.call.bind(DataView.prototype.getInt8),_1768:Function.prototype.call.bind(DataView.prototype.setInt8),_1769:Function.prototype.call.bind(DataView.prototype.getUint16),_1770:Function.prototype.call.bind(DataView.prototype.setUint16),_1771:Function.prototype.call.bind(DataView.prototype.getInt16),_1772:Function.prototype.call.bind(DataView.prototype.setInt16),_1773:Function.prototype.call.bind(DataView.prototype.getUint32),_1774:Function.prototype.call.bind(DataView.prototype.setUint32),_1775:Function.prototype.call.bind(DataView.prototype.getInt32),_1776:Function.prototype.call.bind(DataView.prototype.setInt32),_1779:Function.prototype.call.bind(DataView.prototype.getBigInt64),_1780:Function.prototype.call.bind(DataView.prototype.setBigInt64),_1781:Function.prototype.call.bind(DataView.prototype.getFloat32),_1782:Function.prototype.call.bind(DataView.prototype.setFloat32),_1783:Function.prototype.call.bind(DataView.prototype.getFloat64),_1784:Function.prototype.call.bind(DataView.prototype.setFloat64),_1798:(e,t)=>e instanceof t,_1800:e=>a(e,function(t){return _.exports._1800(e,arguments.length,t)}),_1801:e=>a(e,function(t){return _.exports._1801(e,arguments.length,t)}),_1802:e=>Object.keys(e),_1803:(e,t)=>setTimeout(()=>_.exports.$invokeCallback(t),e),_1804:e=>clearTimeout(e),_1805:(e,t)=>setInterval(()=>_.exports.$invokeCallback(t),e),_1806:e=>clearInterval(e),_1807:e=>queueMicrotask(()=>_.exports.$invokeCallback(e)),_1808:()=>Date.now(),_1889:(e,t)=>e.querySelector(t),_1890:(e,t)=>e.appendChild(t),_1906:(e,t)=>{try{return new RegExp(e,t)}catch(n){return String(n)}},_1907:(e,t)=>e.exec(t),_1908:(e,t)=>e.test(t),_1909:(e,t)=>e.exec(t),_1910:(e,t)=>e.exec(t),_1911:e=>e.pop(),_1915:(e,t,n)=>e[t]=n,_1917:e=>e===void 0,_1918:e=>typeof e=="boolean",_1919:e=>typeof e=="number",_1921:e=>typeof e=="string",_1924:e=>e instanceof Int8Array,_1925:e=>e instanceof Uint8Array,_1926:e=>e instanceof Uint8ClampedArray,_1927:e=>e instanceof Int16Array,_1928:e=>e instanceof Uint16Array,_1929:e=>e instanceof Int32Array,_1930:e=>e instanceof Uint32Array,_1931:e=>e instanceof Float32Array,_1932:e=>e instanceof Float64Array,_1933:e=>e instanceof ArrayBuffer,_1934:e=>e instanceof DataView,_1935:e=>e instanceof Array,_1936:e=>typeof e=="function"&&e[f]===!0,_1938:e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},_1939:e=>e instanceof RegExp,_1940:(e,t)=>e===t,_1941:e=>e,_1942:e=>e,_1943:e=>e,_1944:e=>!!e,_1945:e=>e.length,_1948:(e,t)=>e[t],_1949:e=>e.dartFunction,_1950:e=>c(Int8Array,e),_1951:(e,t)=>{const n=new Uint8Array(t),o=_.exports.$uint8ListGet;for(let r=0;r<t;r++)n[r]=o(e,r);return n},_1952:e=>c(Uint8ClampedArray,e),_1953:e=>c(Int16Array,e),_1954:e=>c(Uint16Array,e),_1955:e=>c(Int32Array,e),_1956:e=>c(Uint32Array,e),_1957:e=>c(Float32Array,e),_1958:e=>c(Float64Array,e),_1959:(e,t)=>{const n=_.exports.$byteDataGetUint8,o=new DataView(new ArrayBuffer(t));for(let r=0;r<t;r++)o.setUint8(r,n(e,r));return o},_1960:e=>c(Array,e),_1961:(e,t)=>{if(t==0)return"";const n=_.exports.$stringRead1;let o="",r=0;const l=Math.min(t-r,500);let i=new Array(l);for(;r<t;){const d=Math.min(t-r,500);for(let s=0;s<d;s++)i[s]=n(e,r++);d<l&&(i=i.slice(0,d)),o+=String.fromCharCode(...i)}return o},_1962:(e,t)=>{if(t==0)return"";const n=_.exports.$stringRead2;let o="",r=0;const l=Math.min(t-r,500);let i=new Array(l);for(;r<t;){const d=Math.min(t-r,500);for(let s=0;s<d;s++)i[s]=n(e,r++);d<l&&(i=i.slice(0,d)),o+=String.fromCharCode(...i)}return o},_1963:e=>{let t=e.length,n=0;for(let r=0;r<t;r++)n|=e.codePointAt(r);const o=_.exports;if(n<256){if(t<=10){if(t==1)return o.$stringAllocate1_1(e.codePointAt(0));if(t==2)return o.$stringAllocate1_2(e.codePointAt(0),e.codePointAt(1));if(t==3)return o.$stringAllocate1_3(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2));if(t==4)return o.$stringAllocate1_4(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3));if(t==5)return o.$stringAllocate1_5(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4));if(t==6)return o.$stringAllocate1_6(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5));if(t==7)return o.$stringAllocate1_7(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6));if(t==8)return o.$stringAllocate1_8(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7));if(t==9)return o.$stringAllocate1_9(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7),e.codePointAt(8));if(t==10)return o.$stringAllocate1_10(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7),e.codePointAt(8),e.codePointAt(9))}const r=o.$stringAllocate1(t),l=o.$stringWrite1;for(let i=0;i<t;i++)l(r,i,e.codePointAt(i));return r}else{const r=o.$stringAllocate2(t),l=o.$stringWrite2;for(let i=0;i<t;i++)l(r,i,e.charCodeAt(i));return r}},_1964:()=>({}),_1965:()=>[],_1966:e=>new Array(e),_1967:()=>globalThis,_1968:(e,t)=>{const n=e.bind.apply(e,[null,...t]);return new n},_1969:(e,t)=>t in e,_1970:(e,t)=>e[t],_1971:(e,t,n)=>e[t]=n,_1972:(e,t,n)=>e[t].apply(e,n),_1974:e=>String(e),_1975:(e,t,n)=>e.then(t,n),_1976:e=>(/[[\]{}()*+?.\\^$|]/.test(e)&&(e=e.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")),e),_1979:e=>e.index,_1981:e=>e.length,_1983:(e,t)=>e[t],_1984:(e,t)=>e.exec(t),_1986:e=>e.flags,_1987:e=>e.multiline,_1988:e=>e.ignoreCase,_1989:e=>e.unicode,_1990:e=>e.dotAll,_1991:(e,t)=>e.lastIndex=t,_2181:e=>e.style,_2693:(e,t)=>e.src=t,_2695:(e,t)=>e.type=t,_3913:()=>globalThis.window,_3978:e=>e.navigator,_4369:e=>e.userAgent,_6695:()=>globalThis.document,_6788:e=>e.body,_11685:(e,t)=>e.display=t,_11849:(e,t)=>e.height=t,_11905:(e,t)=>e.left=t,_12077:(e,t)=>e.overflow=t,_12175:(e,t)=>e.position=t,_12467:(e,t)=>e.top=t,_12471:(e,t)=>e.transform=t,_12539:(e,t)=>e.width=t},Math,Date,Object,Array,Reflect},m={charCodeAt:(e,t)=>e.charCodeAt(t),compare:(e,t)=>e<t?-1:e>t?1:0,concat:(e,t)=>e+t,equals:(e,t)=>e===t,fromCharCode:e=>String.fromCharCode(e),length:e=>e.length,substring:(e,t,n)=>e.substring(t,n)};return _=await WebAssembly.instantiate(await p,{...y,...await u,"wasm:js-string":m}),_},invoke=(p,...u)=>{p.exports.$invokeMain(u)};