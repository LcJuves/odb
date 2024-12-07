import 'dart:core';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:url_launcher/url_launcher.dart';
// import 'package:web/web.dart' as web;

import 'book_item_flex_text.dart';
import '../page/client_preview_book_page.dart';
import '../page/windows_preview_book_page.dart';

class BookItem {
  final String name;
  const BookItem(this.name);
}

class BookItemWidget extends StatelessWidget {
  final BookItem item;
  static const double edgePadding = 2.5;
  const BookItemWidget({super.key, required this.item});

  @override
  Widget build(BuildContext context) {
    final bookName = item.name.split('.pdf')[0];
    return InkWell(
      hoverColor: Colors.white,
      borderRadius: BorderRadius.circular(5),
      overlayColor:
          WidgetStatePropertyAll(const Color(0xFF569CD6).withOpacity(0.1)),
      onTap: () async {
        const prefixUrl = "https://files.lcjuves.com";
        final url = "$prefixUrl/pdf/${item.name}";
        if (kIsWeb) {
          /* final elem = web.document.querySelector(".content");
          elem!.setAttribute("style", "display:flex;");
          web.window.location.href = url;
          await Future.delayed(const Duration(seconds: 6),
              () => elem.setAttribute("style", "display:none;")); */
        } else if (!Platform.isLinux && !Platform.isWindows) {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => ClientPreviewBookPage(previewUrl: url),
          ));
        } else if (!Platform.isLinux) {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => WindowsPreviewBookPage(previewUrl: url),
          ));
        } else {
          await launchUrl(Uri.parse(prefixUrl), mode: LaunchMode.inAppWebView);
        }
      },
      child: Padding(
        padding: const EdgeInsets.all(edgePadding),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox.fromSize(
              size: const Size.square(18),
              child: SvgPicture.asset("assets/book_icon.svg"),
            ),
            SizedBox.fromSize(size: const Size.square(edgePadding)),
            BookItemFlexText(bookName: bookName),
            SizedBox.fromSize(size: const Size.square(edgePadding)),
          ],
        ),
      ),
    );
  }
}
