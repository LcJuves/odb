#!/bin/sh

minify_js() {
    # bun build "$1" --minify-syntax --minify-whitespace --target browser --outfile "$1"
    esbuild --minify --loader=js <"$1" >"$1.out"
    mv "$1.out" "$1"
}

minify_css() {
    esbuild --minify --loader=css <"$1" >"$1.out"
    mv "$1.out" "$1"
}

minify_html() {
    bunx html-minifier --remove-comments --minify-js esbuild \
        --minify-css esbuild --minify-urls relateurl \
        --remove-optional-tags --remove-redundant-attributes \
        --remove-tag-whitespace --collapse-whitespace \
        --use-short-doctype --remove-script-type-attributes --remove-style-link-type-attributes \
        "$1" -o "$1"
}

minify_json() {
    bun repl -e "(async()=>await Bun.write(Bun.stdout,JSON.stringify(require('./$1'))))()" >"$1"
}

flutter clean
flutter build web --wasm --no-tree-shake-icons --no-native-null-assertions --no-web-resources-cdn --release
(
    cd build/web || exit

    (
        cd css || exit
        minify_css animation.css
        minify_css index.css
    )

    minify_js flutter_bootstrap.js
    minify_js flutter_service_worker.js
    minify_js flutter.js
    minify_html index.html
    minify_js main.dart.js
    minify_js main.dart.mjs
    minify_json manifest.json

    cd canvaskit || exit
    minify_js canvaskit.js
    minify_js skwasm.js
    minify_js skwasm.worker.js

    cd chromium || exit
    minify_js canvaskit.js
)
tar -cvJf web-artifacts.tar.xz build/web/**
