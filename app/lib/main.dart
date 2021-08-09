import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';

const primaryColor = Color(0xFF323751);

void main() {
  if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView();

  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarBrightness: Brightness.dark,
    ),
  );

  runApp(App());
}

class App extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'OSB Alpha',
      theme: ThemeData(
        brightness: Brightness.dark,
        platform: TargetPlatform.iOS,
      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        return CupertinoPageRoute(
          builder: (context) => Home(),
        );
      },
    );
  }
}

class Home extends StatefulWidget {
  Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  // Replace with your application url
  final _initialUrl = 'https://www.google.com/';
  WebViewController? _controller;

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(context),
      child: Scaffold(
        body: Container(
          color: primaryColor,
          child: SafeArea(
            child: WebView(
              initialUrl: _initialUrl,
              javascriptMode: JavascriptMode.unrestricted,
              gestureNavigationEnabled: true,
              onWebViewCreated: (controller) {
                _controller = controller;
                _controller?.clearCache();
              },
            ),
          ),
        ),
      ),
    );
  }

  Future<bool> _onWillPop(BuildContext context) async {
    final canGoBack = await _controller?.canGoBack() ?? false;
    if (canGoBack) {
      await _controller?.goBack();
      return false;
    }

    final willPop = await showDialog(
      context: context,
      builder: (context) {
        final buttonStyle = Theme.of(context).textTheme.button?.copyWith(
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.white
                  : primaryColor,
            );

        return AlertDialog(
          title: Text('Sair do app'),
          content: Text('Deseja mesmo sair do app?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(false);
              },
              child: Text('NÃO', style: buttonStyle),
            ),
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(true);
              },
              child: Text('SIM', style: buttonStyle),
            )
          ],
        );
      },
    );

    return willPop ?? false;
  }
}
