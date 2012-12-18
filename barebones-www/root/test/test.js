/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: '../www/js/lib',
    paths: {
      app: '../app',
      tests: '../../../test/tests'
    }
  });
  QUnit.config.autostart = false;
  var allTests = [
    'tests/{%= name %}-tests'
    // add more tests here...
  ];
  requirejs(allTests, function () {
    QUnit.start();
  });
})();
