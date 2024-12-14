import 'package:web/web.dart';

Future<void> webLoadAnimationAndLaunch(String url) async {
  final ua = window.navigator.userAgent.toLowerCase();
  final isAndroidWebViewOrBrowser = ua.contains("android");
  final isIOSWebViewOrBrowser = RegExp(r'iphone|ipad|ipod|ios').hasMatch(ua);

  final content = document.querySelector(".content") as HTMLDivElement?;
  content?.style.display = 'flex';
  final embed = document.createElement("embed") as HTMLEmbedElement;
  if (!(isAndroidWebViewOrBrowser || isIOSWebViewOrBrowser)) {
    embed.type = "application/pdf";
    embed.src = url;
    embed.style.position = "absolute";
    embed.style.width = "100%";
    embed.style.height = "100%";
    embed.style.overflow = "hidden";
    embed.style.display = "none";
    // TODO: Cancel to hidden embed pdf
    // window.history.pushState(null, "", url);
    document.body!.appendChild(embed);
  }

  if (isAndroidWebViewOrBrowser || isIOSWebViewOrBrowser) {
    window.location.replace(url);
    return;
  }
  await Future.delayed(const Duration(seconds: 6), () {
    if (!(isAndroidWebViewOrBrowser || isIOSWebViewOrBrowser)) {
      final flutterView =
          document.querySelector("flutter-view") as HTMLDivElement?;
      flutterView?.remove();
    }
    content?.style.display = 'none';
    if (!(isAndroidWebViewOrBrowser || isIOSWebViewOrBrowser)) {
      embed.style.display = 'block';
    }
  });
}
