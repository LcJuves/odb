import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'book_item_widget.dart';
import 'bottom_text.dart';
import 'title_bar.dart';

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
      final responseBody = response.body;
      final items = jsonDecode(responseBody) as List;
      return items.map((e) => BookItem(e as String)).toList();
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
    fetchBookItems =
        widget.fetchBookItems("https://files.lcjuves.com/json/books.json");
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<BookItem>>(
      future: fetchBookItems,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          final fetchedBookItems = snapshot.data!;
          return SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: Center(
              child: Wrap(
                  spacing: 40,
                  runSpacing: 20,
                  children: fetchedBookItems
                      .map((e) => BookItemWidget(item: e))
                      .toList()),
            ),
          );
        } else if (snapshot.hasError) {
          return Text('${snapshot.error}');
        }

        return const Center(
          child: CircularProgressIndicator(
            color: Colors.white,
          ),
        );
      },
    );
  }
}
