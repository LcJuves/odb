import 'package:flutter/material.dart';
import 'package:internet_file/internet_file.dart';
import 'package:odb/constants.dart';
import 'package:pdfx/pdfx.dart';

// ignore: must_be_immutable
class ClientPreviewBookPage extends StatefulWidget {
  final String previewUrl;
  late String _title;
  ClientPreviewBookPage({Key? key, required this.previewUrl})
      : super(key: key) {
    final pdfName = previewUrl.split("/").last;
    _title = pdfName.substring(0, pdfName.lastIndexOf("."));
  }

  @override
  State<ClientPreviewBookPage> createState() => _ClientPreviewBookPageState();
}

class _ClientPreviewBookPageState extends State<ClientPreviewBookPage> {
  late PdfControllerPinch _pdfController;
  late Widget _loadingProgressBar;

  @override
  void initState() {
    super.initState();
    _pdfController = PdfControllerPinch(
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
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
            onPressed: () async => await Navigator.maybePop(context),
            icon: const Icon(Icons.arrow_back_rounded)),
        systemOverlayStyle: Constants.defaultSystemUiOverlayStyle.copyWith(
          statusBarIconBrightness: Brightness.dark,
          systemNavigationBarColor: Colors.white,
          systemNavigationBarIconBrightness: Brightness.light,
        ),
        title: Text(
          widget._title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
        ),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.navigate_before_rounded),
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
            icon: const Icon(Icons.navigate_next_rounded),
            onPressed: () {
              _pdfController.nextPage(
                curve: Curves.ease,
                duration: const Duration(milliseconds: 100),
              );
            },
          ),
        ],
      ),
      body: PdfViewPinch(
        builders: PdfViewPinchBuilders<DefaultBuilderOptions>(
          options: const DefaultBuilderOptions(),
          documentLoaderBuilder: (_) => _loadingProgressBar,
          pageLoaderBuilder: (_) => _loadingProgressBar,
        ),
        controller: _pdfController,
      ),
    );
  }
}
