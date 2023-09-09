import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class BottomText extends StatelessWidget {
  const BottomText({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.fromLTRB(10, 10, 10, (!kIsWeb && Platform.isIOS) ? 0 : 10),
      child: Text(
        "访问者可将本网站提供的内容或服务用于个人学习、研究或欣赏，以及其他非商业性或非盈利性用途，但同时应遵守著作权法及其他相关法律的规定，不得侵犯本网站及相关权利人的合法权利。",
        style: TextStyle(
          color: Colors.white.withOpacity(0.4),
          fontSize: 12,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
