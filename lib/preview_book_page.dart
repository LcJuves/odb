import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter_platform_interface/webview_flutter_platform_interface.dart';
import 'package:webview_flutter_web/webview_flutter_web.dart';

// ignore: must_be_immutable
class PreviewBookPage extends StatelessWidget {
  final String previewUrl;
  late PlatformWebViewController _controller;
  PreviewBookPage({super.key, required this.previewUrl}) {
    if (kIsWeb) {
      WebViewPlatform.instance = WebWebViewPlatform();
    }
    _controller = PlatformWebViewController(
      const PlatformWebViewControllerCreationParams(),
    )..loadRequest(
        LoadRequestParams(
          uri: Uri.parse(previewUrl),
        ),
      );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: PlatformWebViewWidget(
      PlatformWebViewWidgetCreationParams(controller: _controller),
    ).build(context));
  }
}
