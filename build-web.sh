#!/bin/sh

minify_js() {
    # bun build --minify -l .js:js "$1" --outfile "$1"
    esbuild --minify --loader=js <"$1" >"$1.out"
    mv "$1.out" "$1"
}

minify_css() {
    esbuild --minify --loader=css <"$1" >"$1.out"
    mv "$1.out" "$1"
}

flutter clean
flutter build web --web-renderer html --no-tree-shake-icons --no-web-resources-cdn --release
(
    cd build/web || exit

    (
        cd css || exit
        minify_css animation.css
        minify_css index.css
    )

    minify_js animation.js
    minify_js flutter_service_worker.js
    minify_js flutter.js
    minify_js main.dart.js

    cd canvaskit || exit
    minify_js canvaskit.js
    minify_js skwasm.js
    minify_js skwasm.worker.js

    cd chromium || exit
    minify_js canvaskit.js
)
tar -cvJf odb-web.tar.xz build/web/**
