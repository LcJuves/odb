import 'package:web/web.dart' as web;

Future<void> webLoadAnimationAndLaunch(String url) async {
  var elem = web.document.querySelector(".content") as web.HTMLDivElement?;
  elem?.style.display = 'flex';
  web.window.location.replace(url);
  await Future.delayed(
      const Duration(seconds: 6), () => elem?.style.display = 'flex');
}
