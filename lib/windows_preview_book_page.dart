import 'package:flutter/material.dart';
import 'package:internet_file/internet_file.dart';
import 'package:pdfx/pdfx.dart';

// ignore: must_be_immutable
class WindowsPreviewBookPage extends StatefulWidget {
  final String previewUrl;
  late String _title;
  WindowsPreviewBookPage({super.key, required this.previewUrl}) {
    final pdfName = previewUrl.split("/").last;
    _title = pdfName.substring(0, pdfName.lastIndexOf("."));
  }

  @override
  State<WindowsPreviewBookPage> createState() => _WindowsPreviewBookPageState();
}

class _WindowsPreviewBookPageState extends State<WindowsPreviewBookPage> {
  late PdfController _pdfController;
  late Widget _loadingProgressBar;

  @override
  void initState() {
    super.initState();
    _pdfController = PdfController(
      document: PdfDocument.openData(InternetFile.get(widget.previewUrl)),
    );
    _loadingProgressBar = const Center(
        child: CircularProgressIndicator(
      color: Colors.white,
    ));
  }

  @override
  void dispose() {
    _pdfController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey,
      appBar: AppBar(
        title: Text(
          widget._title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
        ),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.navigate_before),
            onPressed: () {
              _pdfController.previousPage(
                curve: Curves.ease,
                duration: const Duration(milliseconds: 100),
              );
            },
          ),
          PdfPageNumber(
            controller: _pdfController,
            builder: (_, loadingState, page, pagesCount) => Container(
              alignment: Alignment.center,
              child: Text(
                '$page/${pagesCount ?? 0}',
                style: const TextStyle(fontSize: 22),
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.navigate_next),
            onPressed: () {
              _pdfController.nextPage(
                curve: Curves.ease,
                duration: const Duration(milliseconds: 100),
              );
            },
          ),
        ],
      ),
      body: PdfView(
        builders: PdfViewBuilders<DefaultBuilderOptions>(
          options: const DefaultBuilderOptions(),
          documentLoaderBuilder: (_) => _loadingProgressBar,
          pageLoaderBuilder: (_) => _loadingProgressBar,
          pageBuilder: _pageBuilder,
        ),
        controller: _pdfController,
      ),
    );
  }

  PhotoViewGalleryPageOptions _pageBuilder(
    BuildContext context,
    Future<PdfPageImage> pageImage,
    int index,
    PdfDocument document,
  ) {
    return PhotoViewGalleryPageOptions(
      imageProvider: PdfPageImageProvider(
        pageImage,
        index,
        document.id,
      ),
      minScale: PhotoViewComputedScale.contained * 1,
      maxScale: PhotoViewComputedScale.contained * 2,
      initialScale: PhotoViewComputedScale.contained * 1.0,
      heroAttributes: PhotoViewHeroAttributes(tag: '${document.id}-$index'),
    );
  }
}
