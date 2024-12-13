import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

abstract final class Constants {
  static const Color themeColor = Color(0xFF1E1E1E);
  static const SystemUiOverlayStyle defaultSystemUiOverlayStyle =
      SystemUiOverlayStyle(
          statusBarColor: Colors.transparent,
          statusBarIconBrightness: Brightness.light,
          statusBarBrightness: Brightness.light,
          systemNavigationBarColor: Constants.themeColor,
          systemNavigationBarContrastEnforced: false,
          systemNavigationBarIconBrightness: Brightness.light,
          systemStatusBarContrastEnforced: false);
}
