import 'package:flutter/material.dart';

class BookItemFlexText extends StatelessWidget {
  final String bookName;
  const BookItemFlexText({super.key, required this.bookName});

  @override
  Widget build(BuildContext context) {
    return Flexible(
        child: SizedBox(
      width: 235,
      child: Text(
        "《$bookName》",
        style: const TextStyle(
            color: Color(0xFF569CD6),
            fontSize: 15,
            overflow: TextOverflow.ellipsis),
        maxLines: 1,
      ),
    ));
  }
}
