import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class TitleBar extends StatelessWidget {
  const TitleBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 5),
          child: SizedBox.fromSize(
            size: const Size.square(25),
            child: SvgPicture.asset('assets/book.svg'),
          ),
        ),
        SizedBox.fromSize(
          size: const Size.square(30 * 0.618),
        ),
        const Flexible(
            child: Text(
          'Open Developer Books',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 20,
          ),
        ))
      ],
    );
  }
}
