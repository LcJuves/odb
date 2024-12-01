#!/bin/sh

(
    cd build/web || exit
    dhttpd # '--headers=Cross-Origin-Embedder-Policy=credentialless;Cross-Origin-Opener-Policy=same-origin'
)
