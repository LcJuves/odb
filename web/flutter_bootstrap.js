{{flutter_js}}
{{flutter_build_config}}

const useCanvasKit = true;
_flutter.loader.load({
  config: { renderer: useCanvasKit ? "canvaskit" : "skwasm" },
});
