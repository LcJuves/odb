function A(){let c=[0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,23,1,14,119,97,115,109,58,106,115,45,115,116,114,105,110,103,4,99,97,115,116,0,0];return WebAssembly.validate(new Uint8Array(c),{builtins:["js-string"]})}export async function compileStreaming(c){const l=A()?{builtins:["js-string"]}:{};return new g(await WebAssembly.compileStreaming(c,l),l)}export async function compile(c){const l=A()?{builtins:["js-string"]}:{};return new g(await WebAssembly.compile(c,l),l)}export async function instantiate(c,l){var p=await c;return p instanceof g||(p=new g(p)),(await p.instantiate(await l)).instantiatedModule}export const invoke=(c,...l)=>{c.exports.$invokeMain(l)};class g{constructor(l,p){this.module=l,this.builtins=p}async instantiate(l,{loadDeferredWasm:p}={}){let a;function h(e){if(typeof dartPrint=="function"){dartPrint(e);return}if(typeof console=="object"&&typeof console.log<"u"){console.log(e);return}if(typeof print=="function"){print(e);return}throw"Unable to print message: "+js}function d(e,t){const n=a.exports,o=n.$listRead,i=n.$listLength(t),_=new e(i);for(let r=0;r<i;r++)_[r]=o(t,r);return _}const y=Symbol("JSWrappedDartFunction");function s(e,t){return t.dartFunction=e,t[y]=!0,t}const m={dart2wasm:{_1:(e,t,n)=>e.set(t,n),_2:(e,t,n)=>e.set(t,n),_6:e=>s(e,function(t){return a.exports._6(e,arguments.length,t)}),_7:e=>new window.FinalizationRegistry(e),_8:(e,t,n,o)=>e.register(t,n,o),_9:(e,t)=>e.unregister(t),_10:(e,t,n)=>e.slice(t,n),_11:(e,t)=>e.decode(t),_12:(e,t)=>e.segment(t),_13:()=>new TextDecoder,_14:e=>e.buffer,_15:e=>e.wasmMemory,_16:()=>globalThis.window._flutter_skwasmInstance,_17:e=>e.rasterStartMilliseconds,_18:e=>e.rasterEndMilliseconds,_19:e=>e.imageBitmaps,_192:e=>e.select(),_193:(e,t)=>e.append(t),_194:e=>e.remove(),_197:e=>e.unlock(),_202:e=>e.getReader(),_211:e=>new MutationObserver(e),_222:(e,t,n)=>e.addEventListener(t,n),_223:(e,t,n)=>e.removeEventListener(t,n),_226:e=>new ResizeObserver(e),_229:(e,t)=>new Intl.Segmenter(e,t),_230:e=>e.next(),_231:(e,t)=>new Intl.v8BreakIterator(e,t),_308:e=>e.close(),_309:(e,t,n,o,i)=>({type:e,data:t,premultiplyAlpha:n,colorSpaceConversion:o,preferAnimation:i}),_310:e=>new window.ImageDecoder(e),_311:e=>e.close(),_312:e=>({frameIndex:e}),_313:(e,t)=>e.decode(t),_316:e=>s(e,function(t){return a.exports._316(e,arguments.length,t)}),_317:e=>s(e,function(t){return a.exports._317(e,arguments.length,t)}),_318:(e,t)=>({addView:e,removeView:t}),_319:e=>s(e,function(t){return a.exports._319(e,arguments.length,t)}),_320:e=>s(e,function(){return a.exports._320(e,arguments.length)}),_321:(e,t)=>({initializeEngine:e,autoStart:t}),_322:e=>s(e,function(t){return a.exports._322(e,arguments.length,t)}),_323:e=>({runApp:e}),_324:e=>new Uint8Array(e),_326:e=>e.preventDefault(),_327:e=>e.stopPropagation(),_328:(e,t)=>e.addListener(t),_329:(e,t)=>e.removeListener(t),_330:(e,t)=>e.prepend(t),_331:e=>e.remove(),_332:e=>e.disconnect(),_333:(e,t)=>e.addListener(t),_334:(e,t)=>e.removeListener(t),_336:(e,t)=>e.append(t),_337:e=>e.remove(),_338:e=>e.stopPropagation(),_342:e=>e.preventDefault(),_343:(e,t)=>e.append(t),_344:e=>e.remove(),_345:e=>e.preventDefault(),_350:(e,t)=>e.removeChild(t),_351:(e,t)=>e.appendChild(t),_352:(e,t,n)=>e.insertBefore(t,n),_353:(e,t)=>e.appendChild(t),_354:(e,t)=>e.transferFromImageBitmap(t),_356:(e,t)=>e.append(t),_357:(e,t)=>e.append(t),_358:(e,t)=>e.append(t),_359:e=>e.remove(),_360:e=>e.remove(),_361:e=>e.remove(),_362:(e,t)=>e.appendChild(t),_363:(e,t)=>e.appendChild(t),_364:e=>e.remove(),_365:(e,t)=>e.append(t),_366:(e,t)=>e.append(t),_367:e=>e.remove(),_368:(e,t)=>e.append(t),_369:(e,t)=>e.append(t),_370:(e,t,n)=>e.insertBefore(t,n),_371:(e,t)=>e.append(t),_372:(e,t,n)=>e.insertBefore(t,n),_373:e=>e.remove(),_374:e=>e.remove(),_375:(e,t)=>e.append(t),_376:e=>e.remove(),_377:(e,t)=>e.append(t),_378:e=>e.remove(),_379:e=>e.remove(),_380:e=>e.getBoundingClientRect(),_381:e=>e.remove(),_394:(e,t)=>e.append(t),_395:e=>e.remove(),_396:(e,t)=>e.append(t),_397:(e,t,n)=>e.insertBefore(t,n),_398:e=>e.preventDefault(),_399:e=>e.preventDefault(),_400:e=>e.preventDefault(),_401:e=>e.preventDefault(),_402:e=>e.remove(),_403:(e,t)=>e.observe(t),_404:e=>e.disconnect(),_405:(e,t)=>e.appendChild(t),_406:(e,t)=>e.appendChild(t),_407:(e,t)=>e.appendChild(t),_408:(e,t)=>e.append(t),_409:e=>e.remove(),_410:(e,t)=>e.append(t),_412:(e,t)=>e.appendChild(t),_413:(e,t)=>e.append(t),_414:e=>e.remove(),_415:(e,t)=>e.append(t),_419:(e,t)=>e.appendChild(t),_420:e=>e.remove(),_976:()=>globalThis.window.flutterConfiguration,_977:e=>e.assetBase,_982:e=>e.debugShowSemanticsNodes,_983:e=>e.hostElement,_984:e=>e.multiViewEnabled,_985:e=>e.nonce,_987:e=>e.fontFallbackBaseUrl,_988:e=>e.useColorEmoji,_992:e=>e.console,_993:e=>e.devicePixelRatio,_994:e=>e.document,_995:e=>e.history,_996:e=>e.innerHeight,_997:e=>e.innerWidth,_998:e=>e.location,_999:e=>e.navigator,_1000:e=>e.visualViewport,_1001:e=>e.performance,_1004:(e,t)=>e.dispatchEvent(t),_1005:(e,t)=>e.matchMedia(t),_1007:(e,t)=>e.getComputedStyle(t),_1008:e=>e.screen,_1009:(e,t)=>e.requestAnimationFrame(t),_1010:e=>s(e,function(t){return a.exports._1010(e,arguments.length,t)}),_1014:(e,t)=>e.warn(t),_1017:()=>globalThis.window,_1018:()=>globalThis.Intl,_1019:()=>globalThis.Symbol,_1022:e=>e.clipboard,_1023:e=>e.maxTouchPoints,_1024:e=>e.vendor,_1025:e=>e.language,_1026:e=>e.platform,_1027:e=>e.userAgent,_1028:e=>e.languages,_1029:e=>e.documentElement,_1030:(e,t)=>e.querySelector(t),_1034:(e,t)=>e.createElement(t),_1035:(e,t)=>e.execCommand(t),_1039:(e,t)=>e.createTextNode(t),_1040:(e,t)=>e.createEvent(t),_1044:e=>e.head,_1045:e=>e.body,_1046:(e,t)=>e.title=t,_1049:e=>e.activeElement,_1052:e=>e.visibilityState,_1053:e=>e.hasFocus(),_1054:()=>globalThis.document,_1055:(e,t,n,o)=>e.addEventListener(t,n,o),_1057:(e,t,n,o)=>e.addEventListener(t,n,o),_1060:e=>s(e,function(t){return a.exports._1060(e,arguments.length,t)}),_1061:e=>e.target,_1063:e=>e.timeStamp,_1064:e=>e.type,_1066:e=>e.preventDefault(),_1068:(e,t,n,o)=>e.initEvent(t,n,o),_1075:e=>e.firstChild,_1080:e=>e.parentElement,_1082:e=>e.parentNode,_1085:(e,t)=>e.removeChild(t),_1086:(e,t)=>e.removeChild(t),_1087:e=>e.isConnected,_1088:(e,t)=>e.textContent=t,_1090:(e,t)=>e.contains(t),_1095:e=>e.firstElementChild,_1097:e=>e.nextElementSibling,_1098:e=>e.clientHeight,_1099:e=>e.clientWidth,_1100:e=>e.offsetHeight,_1101:e=>e.offsetWidth,_1102:e=>e.id,_1103:(e,t)=>e.id=t,_1106:(e,t)=>e.spellcheck=t,_1107:e=>e.tagName,_1108:e=>e.style,_1109:(e,t)=>e.append(t),_1110:(e,t)=>e.getAttribute(t),_1111:e=>e.getBoundingClientRect(),_1116:(e,t)=>e.closest(t),_1119:(e,t)=>e.querySelectorAll(t),_1121:e=>e.remove(),_1122:(e,t,n)=>e.setAttribute(t,n),_1123:(e,t)=>e.removeAttribute(t),_1124:(e,t)=>e.tabIndex=t,_1126:(e,t)=>e.focus(t),_1127:e=>e.scrollTop,_1128:(e,t)=>e.scrollTop=t,_1129:e=>e.scrollLeft,_1130:(e,t)=>e.scrollLeft=t,_1131:e=>e.classList,_1132:(e,t)=>e.className=t,_1139:(e,t)=>e.getElementsByClassName(t),_1141:e=>e.click(),_1143:(e,t)=>e.hasAttribute(t),_1146:(e,t)=>e.attachShadow(t),_1151:(e,t)=>e.getPropertyValue(t),_1153:(e,t,n,o)=>e.setProperty(t,n,o),_1155:(e,t)=>e.removeProperty(t),_1157:e=>e.offsetLeft,_1158:e=>e.offsetTop,_1159:e=>e.offsetParent,_1161:(e,t)=>e.name=t,_1162:e=>e.content,_1163:(e,t)=>e.content=t,_1177:(e,t)=>e.nonce=t,_1183:e=>e.now(),_1185:(e,t)=>e.width=t,_1187:(e,t)=>e.height=t,_1191:(e,t)=>e.getContext(t),_1267:(e,t)=>e.fetch(t),_1268:e=>e.status,_1270:e=>e.body,_1271:e=>e.arrayBuffer(),_1277:e=>e.read(),_1278:e=>e.value,_1279:e=>e.done,_1281:e=>e.name,_1282:e=>e.x,_1283:e=>e.y,_1286:e=>e.top,_1287:e=>e.right,_1288:e=>e.bottom,_1289:e=>e.left,_1299:e=>e.height,_1300:e=>e.width,_1301:(e,t)=>e.value=t,_1303:(e,t)=>e.placeholder=t,_1304:(e,t)=>e.name=t,_1305:e=>e.selectionDirection,_1306:e=>e.selectionStart,_1307:e=>e.selectionEnd,_1310:e=>e.value,_1312:(e,t,n)=>e.setSelectionRange(t,n),_1315:e=>e.readText(),_1316:(e,t)=>e.writeText(t),_1317:e=>e.altKey,_1318:e=>e.code,_1319:e=>e.ctrlKey,_1320:e=>e.key,_1321:e=>e.keyCode,_1322:e=>e.location,_1323:e=>e.metaKey,_1324:e=>e.repeat,_1325:e=>e.shiftKey,_1326:e=>e.isComposing,_1327:(e,t)=>e.getModifierState(t),_1329:e=>e.state,_1330:(e,t)=>e.go(t),_1333:(e,t,n,o)=>e.pushState(t,n,o),_1334:(e,t,n,o)=>e.replaceState(t,n,o),_1335:e=>e.pathname,_1336:e=>e.search,_1337:e=>e.hash,_1341:e=>e.state,_1347:e=>s(e,function(t,n){return a.exports._1347(e,arguments.length,t,n)}),_1350:(e,t,n)=>e.observe(t,n),_1353:e=>e.attributeName,_1354:e=>e.type,_1355:e=>e.matches,_1358:e=>e.matches,_1360:e=>e.relatedTarget,_1361:e=>e.clientX,_1362:e=>e.clientY,_1363:e=>e.offsetX,_1364:e=>e.offsetY,_1367:e=>e.button,_1368:e=>e.buttons,_1369:e=>e.ctrlKey,_1370:(e,t)=>e.getModifierState(t),_1373:e=>e.pointerId,_1374:e=>e.pointerType,_1375:e=>e.pressure,_1376:e=>e.tiltX,_1377:e=>e.tiltY,_1378:e=>e.getCoalescedEvents(),_1380:e=>e.deltaX,_1381:e=>e.deltaY,_1382:e=>e.wheelDeltaX,_1383:e=>e.wheelDeltaY,_1384:e=>e.deltaMode,_1390:e=>e.changedTouches,_1392:e=>e.clientX,_1393:e=>e.clientY,_1395:e=>e.data,_1398:(e,t)=>e.disabled=t,_1399:(e,t)=>e.type=t,_1400:(e,t)=>e.max=t,_1401:(e,t)=>e.min=t,_1402:(e,t)=>e.value=t,_1403:e=>e.value,_1404:e=>e.disabled,_1405:(e,t)=>e.disabled=t,_1406:(e,t)=>e.placeholder=t,_1407:(e,t)=>e.name=t,_1408:(e,t)=>e.autocomplete=t,_1409:e=>e.selectionDirection,_1410:e=>e.selectionStart,_1411:e=>e.selectionEnd,_1415:(e,t,n)=>e.setSelectionRange(t,n),_1420:(e,t)=>e.add(t),_1423:(e,t)=>e.noValidate=t,_1424:(e,t)=>e.method=t,_1425:(e,t)=>e.action=t,_1450:e=>e.orientation,_1451:e=>e.width,_1452:e=>e.height,_1453:(e,t)=>e.lock(t),_1471:e=>s(e,function(t,n){return a.exports._1471(e,arguments.length,t,n)}),_1482:e=>e.length,_1483:(e,t)=>e.item(t),_1484:e=>e.length,_1485:(e,t)=>e.item(t),_1486:e=>e.iterator,_1487:e=>e.Segmenter,_1488:e=>e.v8BreakIterator,_1492:e=>e.done,_1493:e=>e.value,_1494:e=>e.index,_1498:(e,t)=>e.adoptText(t),_1499:e=>e.first(),_1500:e=>e.next(),_1501:e=>e.current(),_1512:e=>e.hostElement,_1513:e=>e.viewConstraints,_1515:e=>e.maxHeight,_1516:e=>e.maxWidth,_1517:e=>e.minHeight,_1518:e=>e.minWidth,_1519:e=>e.loader,_1520:()=>globalThis._flutter,_1521:(e,t)=>e.didCreateEngineInitializer(t),_1522:(e,t,n)=>e.call(t,n),_1523:()=>globalThis.Promise,_1524:e=>s(e,function(t,n){return a.exports._1524(e,arguments.length,t,n)}),_1527:e=>e.length,_1530:e=>e.tracks,_1534:e=>e.image,_1539:e=>e.codedWidth,_1540:e=>e.codedHeight,_1543:e=>e.duration,_1547:e=>e.ready,_1548:e=>e.selectedTrack,_1549:e=>e.repetitionCount,_1550:e=>e.frameCount,_1614:(e,t)=>e.createElement(t),_1626:e=>({scale:e}),_1628:e=>({alpha:e}),_1629:(e,t,n)=>e.getContext(t,n),_1635:(e,t)=>e.toBlob(t),_1636:(e,t)=>e.getViewport(t),_1637:(e,t,n,o)=>({scale:e,offsetX:t,offsetY:n,dontFlip:o}),_1638:(e,t)=>e.getViewport(t),_1639:(e,t,n,o,i)=>e.fillRect(t,n,o,i),_1640:(e,t,n)=>({canvasContext:e,viewport:t,enableWebGL:n}),_1641:(e,t)=>e.render(t),_1642:e=>e.arrayBuffer(),_1643:e=>s(e,function(t){return a.exports._1643(e,arguments.length,t)}),_1655:e=>new Array(e),_1657:e=>e.length,_1659:(e,t)=>e[t],_1660:(e,t,n)=>e[t]=n,_1663:(e,t,n)=>new DataView(e,t,n),_1665:e=>new Int8Array(e),_1666:(e,t,n)=>new Uint8Array(e,t,n),_1667:e=>new Uint8Array(e),_1673:e=>new Uint16Array(e),_1675:e=>new Int32Array(e),_1677:e=>new Uint32Array(e),_1679:e=>new Float32Array(e),_1681:e=>new Float64Array(e),_1687:e=>s(e,function(t){return a.exports._1687(e,arguments.length,t)}),_1688:e=>s(e,function(t){return a.exports._1688(e,arguments.length,t)}),_1714:(e,t)=>e.decode(t),_1715:()=>new TextDecoder("utf-8",{fatal:!0}),_1716:()=>new TextDecoder("utf-8",{fatal:!1}),_1717:e=>new WeakRef(e),_1718:e=>e.deref(),_1724:Date.now,_1726:e=>new Date(e*1e3).getTimezoneOffset()*60,_1727:e=>/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(e)?parseFloat(e):NaN,_1728:()=>{let t=new Error().stack.toString().split(`
`),n=2;return t[0]==="Error"&&(n+=1),t.slice(n).join(`
`)},_1729:()=>typeof dartUseDateNowForTicks<"u",_1730:()=>1e3*performance.now(),_1731:()=>Date.now(),_1734:()=>new WeakMap,_1735:(e,t)=>e.get(t),_1736:(e,t,n)=>e.set(t,n),_1737:()=>globalThis.WeakRef,_1747:e=>JSON.stringify(e),_1748:e=>h(e),_1749:e=>e.join(""),_1750:(e,t,n)=>e.replace(t,n),_1752:(e,t)=>e.split(t),_1753:e=>e.toLowerCase(),_1754:e=>e.toUpperCase(),_1755:e=>e.trim(),_1756:e=>e.trimLeft(),_1757:e=>e.trimRight(),_1759:(e,t,n)=>e.indexOf(t,n),_1760:(e,t,n)=>e.lastIndexOf(t,n),_1761:e=>e.replace(/\$/g,"$$$$"),_1762:Object.is,_1763:e=>e.toUpperCase(),_1764:e=>e.toLowerCase(),_1765:(e,t)=>e.push(t),_1769:e=>e.pop(),_1770:(e,t)=>e.splice(t,1),_1772:(e,t)=>e.join(t),_1773:(e,t,n)=>e.slice(t,n),_1776:e=>e.length,_1778:(e,t)=>e[t],_1779:(e,t,n)=>e[t]=n,_1781:(e,t,n)=>{var o=new ArrayBuffer(n);return new Uint8Array(o).set(new Uint8Array(e,t,n)),new DataView(o)},_1782:(e,t,n)=>new Uint8Array(e.buffer,e.byteOffset+t,n),_1783:(e,t,n)=>new Int8Array(e.buffer,e.byteOffset+t,n),_1784:(e,t,n)=>new Uint8ClampedArray(e.buffer,e.byteOffset+t,n),_1785:(e,t,n)=>new Uint16Array(e.buffer,e.byteOffset+t,n),_1786:(e,t,n)=>new Int16Array(e.buffer,e.byteOffset+t,n),_1787:(e,t,n)=>new Uint32Array(e.buffer,e.byteOffset+t,n),_1788:(e,t,n)=>new Int32Array(e.buffer,e.byteOffset+t,n),_1790:(e,t,n)=>new BigInt64Array(e.buffer,e.byteOffset+t,n),_1791:(e,t,n)=>new Float32Array(e.buffer,e.byteOffset+t,n),_1792:(e,t,n)=>new Float64Array(e.buffer,e.byteOffset+t,n),_1793:(e,t)=>e.set(t),_1794:e=>new DataView(new ArrayBuffer(e)),_1795:e=>new DataView(e.buffer,e.byteOffset,e.byteLength),_1797:e=>e.buffer,_1798:e=>e.byteOffset,_1799:Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype,"byteLength").get),_1800:(e,t)=>new DataView(e,t),_1801:(e,t,n)=>new DataView(e,t,n),_1802:Function.prototype.call.bind(DataView.prototype.getUint8),_1803:Function.prototype.call.bind(DataView.prototype.setUint8),_1804:Function.prototype.call.bind(DataView.prototype.getInt8),_1805:Function.prototype.call.bind(DataView.prototype.setInt8),_1806:Function.prototype.call.bind(DataView.prototype.getUint16),_1807:Function.prototype.call.bind(DataView.prototype.setUint16),_1808:Function.prototype.call.bind(DataView.prototype.getInt16),_1809:Function.prototype.call.bind(DataView.prototype.setInt16),_1810:Function.prototype.call.bind(DataView.prototype.getUint32),_1811:Function.prototype.call.bind(DataView.prototype.setUint32),_1812:Function.prototype.call.bind(DataView.prototype.getInt32),_1813:Function.prototype.call.bind(DataView.prototype.setInt32),_1816:Function.prototype.call.bind(DataView.prototype.getBigInt64),_1817:Function.prototype.call.bind(DataView.prototype.setBigInt64),_1818:Function.prototype.call.bind(DataView.prototype.getFloat32),_1819:Function.prototype.call.bind(DataView.prototype.setFloat32),_1820:Function.prototype.call.bind(DataView.prototype.getFloat64),_1821:Function.prototype.call.bind(DataView.prototype.setFloat64),_1834:(e,t)=>e instanceof t,_1836:e=>s(e,function(t){return a.exports._1836(e,arguments.length,t)}),_1837:e=>s(e,function(t){return a.exports._1837(e,arguments.length,t)}),_1838:e=>Object.keys(e),_1839:(e,t)=>setTimeout(()=>a.exports.$invokeCallback(t),e),_1840:e=>clearTimeout(e),_1841:(e,t)=>setInterval(()=>a.exports.$invokeCallback(t),e),_1842:e=>clearInterval(e),_1843:e=>queueMicrotask(()=>a.exports.$invokeCallback(e)),_1844:()=>Date.now(),_1860:()=>globalThis.pdfjsLib,_1861:()=>globalThis.pdfRenderOptions,_1862:(e,t)=>e.getDocument(t),_1863:e=>e.promise,_1865:(e,t,n,o)=>({cMapUrl:e,cMapPacked:t,data:n,password:o}),_1866:(e,t)=>({cMapUrl:e,cMapPacked:t}),_1867:e=>e.cMapUrl,_1868:e=>e.cMapPacked,_1869:(e,t)=>e.getPage(t),_1870:e=>e.numPages,_1872:(e,t)=>e.getViewport(t),_1874:e=>e.pageNumber,_1899:e=>e.width,_1901:e=>e.height,_1924:e=>e.promise,_1925:(e,t)=>e.querySelector(t),_1926:(e,t)=>e.appendChild(t),_1927:(e,t)=>e.replace(t),_1928:(e,t)=>e.querySelector(t),_1929:e=>e.remove(),_1944:(e,t)=>{try{return new RegExp(e,t)}catch(n){return String(n)}},_1945:(e,t)=>e.exec(t),_1946:(e,t)=>e.test(t),_1947:(e,t)=>e.exec(t),_1948:(e,t)=>e.exec(t),_1949:e=>e.pop(),_1951:e=>e===void 0,_1970:e=>typeof e=="function"&&e[y]===!0,_1972:e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},_1973:e=>e instanceof RegExp,_1974:(e,t)=>e===t,_1975:e=>e,_1976:e=>e,_1977:e=>e,_1978:e=>!!e,_1979:e=>e.length,_1982:(e,t)=>e[t],_1983:e=>e.dartFunction,_1984:e=>d(Int8Array,e),_1985:e=>d(Uint8Array,e),_1986:e=>d(Uint8ClampedArray,e),_1987:e=>d(Int16Array,e),_1988:e=>d(Uint16Array,e),_1989:e=>d(Int32Array,e),_1990:e=>d(Uint32Array,e),_1991:e=>d(Float32Array,e),_1992:e=>d(Float64Array,e),_1993:e=>new ArrayBuffer(e),_1994:(e,t)=>{const n=a.exports.$byteDataGetUint8,o=new DataView(new ArrayBuffer(t));for(let i=0;i<t;i++)o.setUint8(i,n(e,i));return o},_1995:e=>d(Array,e),_1996:(e,t)=>{if(t==0)return"";const n=a.exports.$stringRead1;let o="",i=0;const _=Math.min(t-i,500);let r=new Array(_);for(;i<t;){const u=Math.min(t-i,500);for(let f=0;f<u;f++)r[f]=n(e,i++);u<_&&(r=r.slice(0,u)),o+=String.fromCharCode(...r)}return o},_1997:(e,t)=>{if(t==0)return"";const n=a.exports.$stringRead2;let o="",i=0;const _=Math.min(t-i,500);let r=new Array(_);for(;i<t;){const u=Math.min(t-i,500);for(let f=0;f<u;f++)r[f]=n(e,i++);u<_&&(r=r.slice(0,u)),o+=String.fromCharCode(...r)}return o},_1998:e=>{let t=e.length,n=0;for(let i=0;i<t;i++)n|=e.codePointAt(i);const o=a.exports;if(n<256){if(t<=10){if(t==1)return o.$stringAllocate1_1(e.codePointAt(0));if(t==2)return o.$stringAllocate1_2(e.codePointAt(0),e.codePointAt(1));if(t==3)return o.$stringAllocate1_3(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2));if(t==4)return o.$stringAllocate1_4(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3));if(t==5)return o.$stringAllocate1_5(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4));if(t==6)return o.$stringAllocate1_6(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5));if(t==7)return o.$stringAllocate1_7(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6));if(t==8)return o.$stringAllocate1_8(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7));if(t==9)return o.$stringAllocate1_9(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7),e.codePointAt(8));if(t==10)return o.$stringAllocate1_10(e.codePointAt(0),e.codePointAt(1),e.codePointAt(2),e.codePointAt(3),e.codePointAt(4),e.codePointAt(5),e.codePointAt(6),e.codePointAt(7),e.codePointAt(8),e.codePointAt(9))}const i=o.$stringAllocate1(t),_=o.$stringWrite1;for(let r=0;r<t;r++)_(i,r,e.codePointAt(r));return i}else{const i=o.$stringAllocate2(t),_=o.$stringWrite2;for(let r=0;r<t;r++)_(i,r,e.charCodeAt(r));return i}},_1999:()=>({}),_2000:()=>[],_2001:e=>new Array(e),_2002:()=>globalThis,_2003:(e,t)=>{const n=e.bind.apply(e,[null,...t]);return new n},_2004:(e,t)=>t in e,_2005:(e,t)=>e[t],_2006:(e,t,n)=>e[t]=n,_2007:(e,t,n)=>e[t].apply(e,n),_2009:e=>String(e),_2010:(e,t,n)=>e.then(t,n),_2011:e=>{if(e===void 0)return 1;var t=typeof e;if(t==="boolean")return 2;if(t==="number")return 3;if(t==="string")return 4;if(e instanceof Array)return 5;if(ArrayBuffer.isView(e)){if(e instanceof Int8Array)return 6;if(e instanceof Uint8Array)return 7;if(e instanceof Uint8ClampedArray)return 8;if(e instanceof Int16Array)return 9;if(e instanceof Uint16Array)return 10;if(e instanceof Int32Array)return 11;if(e instanceof Uint32Array)return 12;if(e instanceof Float32Array)return 13;if(e instanceof Float64Array)return 14;if(e instanceof DataView)return 15}return e instanceof ArrayBuffer?16:17},_2012:(e,t,n,o,i)=>{const _=a.exports.$wasmI8ArrayGet;for(let r=0;r<i;r++)e[t+r]=_(n,o+r)},_2013:(e,t,n,o,i)=>{const _=a.exports.$wasmI8ArraySet;for(let r=0;r<i;r++)_(n,o+r,e[t+r])},_2014:(e,t,n,o,i)=>{const _=a.exports.$wasmI16ArrayGet;for(let r=0;r<i;r++)e[t+r]=_(n,o+r)},_2015:(e,t,n,o,i)=>{const _=a.exports.$wasmI16ArraySet;for(let r=0;r<i;r++)_(n,o+r,e[t+r])},_2016:(e,t,n,o,i)=>{const _=a.exports.$wasmI32ArrayGet;for(let r=0;r<i;r++)e[t+r]=_(n,o+r)},_2017:(e,t,n,o,i)=>{const _=a.exports.$wasmI32ArraySet;for(let r=0;r<i;r++)_(n,o+r,e[t+r])},_2018:(e,t,n,o,i)=>{const _=a.exports.$wasmF32ArrayGet;for(let r=0;r<i;r++)e[t+r]=_(n,o+r)},_2019:(e,t,n,o,i)=>{const _=a.exports.$wasmF32ArraySet;for(let r=0;r<i;r++)_(n,o+r,e[t+r])},_2020:(e,t,n,o,i)=>{const _=a.exports.$wasmF64ArrayGet;for(let r=0;r<i;r++)e[t+r]=_(n,o+r)},_2021:(e,t,n,o,i)=>{const _=a.exports.$wasmF64ArraySet;for(let r=0;r<i;r++)_(n,o+r,e[t+r])},_2022:e=>(/[[\]{}()*+?.\\^$|]/.test(e)&&(e=e.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")),e),_2025:e=>e.index,_2029:(e,t)=>e.exec(t),_2031:e=>e.flags,_2032:e=>e.multiline,_2033:e=>e.ignoreCase,_2034:e=>e.unicode,_2035:e=>e.dotAll,_2036:(e,t)=>e.lastIndex=t,_2039:(e,t,n)=>e[t]=n,_2041:e=>e.toString(),_2042:(e,t)=>e.toFixed(t),_2046:(e,t,n,o)=>({id:e,width:t,height:n,data:o}),_2051:e=>e.random(),_2052:e=>e.random(),_2053:(e,t)=>e.getRandomValues(t),_2054:()=>globalThis.crypto,_2056:()=>globalThis.Math,_2243:e=>e.style,_2755:(e,t)=>e.src=t,_2757:(e,t)=>e.type=t,_3535:(e,t)=>e.width=t,_3537:(e,t)=>e.height=t,_3608:(e,t)=>e.fillStyle=t,_3975:()=>globalThis.window,_4021:e=>e.location,_4040:e=>e.navigator,_4431:e=>e.userAgent,_6757:()=>globalThis.document,_6850:e=>e.body,_11747:(e,t)=>e.display=t,_11911:(e,t)=>e.height=t,_12139:(e,t)=>e.overflow=t,_12237:(e,t)=>e.position=t,_12601:(e,t)=>e.width=t},Math,Date,Object,Array,Reflect},w={charCodeAt:(e,t)=>e.charCodeAt(t),compare:(e,t)=>e<t?-1:e>t?1:0,concat:(e,t)=>e+t,equals:(e,t)=>e===t,fromCharCode:e=>String.fromCharCode(e),length:e=>e.length,substring:(e,t,n)=>e.substring(t,n)},b={loadModule:async e=>{if(!p)throw"No implementation of loadDeferredWasm provided.";const t=await Promise.resolve(p(e)),n=await(t instanceof Response?WebAssembly.compileStreaming(t,this.builtins):WebAssembly.compile(t,this.builtins));return await WebAssembly.instantiate(n,{...m,...l,"wasm:js-string":w,module0:a.exports})}};return a=await WebAssembly.instantiate(this.module,{...m,...l,deferredLibraryHelper:b,"wasm:js-string":w}),new v(this,a)}}class v{constructor(l,p){this.compiledApp=l,this.instantiatedModule=p}invokeMain(...l){this.instantiatedModule.exports.$invokeMain(l)}}