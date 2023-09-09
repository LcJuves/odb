#!/bin/sh

flutter clean
flutter build web --web-renderer html --no-tree-shake-icons --no-web-resources-cdn --release
(
    cd build/web || exit

    (
        cd css || exit
        esbuild --minify --loader=css <animation.css >animation.out.css
        mv animation.out.css animation.css
        esbuild --minify --loader=css <index.css >index.out.css
        mv index.out.css index.css
    )

    esbuild --minify --loader=js <animation.js >animation.out.js
    mv animation.out.js animation.js
    esbuild --minify --loader=js <flutter_service_worker.js >flutter_service_worker.out.js
    mv flutter_service_worker.out.js flutter_service_worker.js
    esbuild --minify --loader=js <flutter.js >flutter.out.js
    mv flutter.out.js flutter.js
    esbuild --minify --loader=js <main.dart.js >main.dart.out.js
    mv main.dart.out.js main.dart.js

    cd canvaskit || exit
    esbuild --minify --loader=js <canvaskit.js >canvaskit.out.js
    mv canvaskit.out.js canvaskit.js
    esbuild --minify --loader=js <skwasm.js >skwasm.out.js
    mv skwasm.out.js skwasm.js
    esbuild --minify --loader=js <skwasm.worker.js >skwasm.worker.out.js
    mv skwasm.worker.out.js skwasm.worker.js

    cd chromium || exit
    esbuild --minify --loader=js <canvaskit.js >canvaskit.out.js
    mv canvaskit.out.js canvaskit.js
)
tar -cvJf odb-web.tar.xz build/web/**
