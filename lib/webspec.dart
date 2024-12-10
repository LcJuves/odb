import 'package:web/web.dart';

Future<void> webLoadAnimationAndLaunch(String url) async {
  var elem = document.querySelector(".content") as HTMLDivElement?;
  final embed = document.createElement("embed") as HTMLEmbedElement;
  elem?.style.display = 'flex';
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
  await Future.delayed(const Duration(seconds: 6), () {
    embed.style.display = 'block';
    elem?.style.display = 'none';
  });
}
