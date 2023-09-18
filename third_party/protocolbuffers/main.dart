import 'dart:convert';

import './lib/books.pb.dart';
import 'dart:io';

Future main(List<String> args) async {
  final booksJson = await File('../files/json/books.json').readAsString();
  final bookNameList = List<String>.from(jsonDecode(booksJson));
  final books = Books(bookNameList: bookNameList);
  final booksPB = File('../../books.pb');
  await booksPB.writeAsBytes(books.writeToBuffer(), flush: true);
}
