Safari Extension for force default Korean font
==============================================

This plugins replace commonly used custom user CSS file for Safari. Most of Korean web sites defines font to Windows' bundle font such as 'Gulim', or using broken CSS(legacy). So a lot of people using OS X defines graceful font to custom CSS. Most famous font in custom CSS is, 'Apple SD Gothic' and 'NanumGothic'. Both are bundled in OS X Mountain Lion.

But if you define font-family to these fonts in custom CSS without "!important" directive, unfortunately some texts are still shown as still "legacy" font because cascading order. And if declare "!important" directive in order to avoid cascading, ALL sites will shown as same font.

This extension resolve these issues.

## Feature

* Replace 'legacy' fonts via CSS3 @font-face directives.
* Replace the remaining legacy fonts from pre-defined host.

## Note

Any suggestion about this extension, for example adding host or changing font rulset, email me anytime.
