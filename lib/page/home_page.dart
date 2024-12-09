import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:protobuffers/books.pb.dart';

import '../widget/book_item_widget.dart';
import '../widget/bottom_text.dart';
import '../widget/title_bar.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: const TitleBar(),
      ),
      backgroundColor: const Color.fromARGB(255, 30, 30, 30),
      body: const BooksContainer(),
      bottomNavigationBar: const SafeArea(child: BottomText()),
    );
  }
}

class BooksContainer extends StatefulWidget {
  const BooksContainer({super.key});

  Future<List<BookItem>> fetchBookItems(String url) async {
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final books = Books.fromBuffer(response.bodyBytes);
      return books.bookNameList.map((name) => BookItem(name)).toList();
    } else {
      throw Exception('Failed to load book items');
    }
  }

  @override
  State<BooksContainer> createState() => _BooksContainerState();
}

class _BooksContainerState extends State<BooksContainer> {
  late Future<List<BookItem>> fetchBookItems;

  @override
  void initState() {
    super.initState();
    fetchBookItems = widget.fetchBookItems("https://odb.lcjuves.com/books.pb");
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<BookItem>>(
      future: fetchBookItems,
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Text('${snapshot.error}');
        }

        if (snapshot.hasData) {
          final fetchedBookItems = snapshot.data!;
          const goodSpacing = (40 * 0.618) / 1.2;
          return SingleChildScrollView(
            padding: const EdgeInsets.all(goodSpacing),
            child: Center(
              child: Wrap(
                  spacing: 40,
                  runSpacing: goodSpacing,
                  children: fetchedBookItems
                      .map((e) => BookItemWidget(item: e))
                      .toList()),
            ),
          );
        }

        return const Center(
          child: SizedBox.square(
            dimension: 60,
            child: CircularProgressIndicator(
              color: Colors.white,
            ),
          ),
        );
      },
    );
  }
}
