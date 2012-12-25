/*jshint devel:true */
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'bust=' + new Date().getTime(),
    baseUrl: '../www/js/lib',
    paths: {
      app: '../app',
      tests: '../../../test/tests'
    }
  });
  var allTests = [
    'tests/{%= name %}-tests'
    // add more tests here...
  ];
  requirejs(allTests, function () {
    QUnit.start();
  });
})();
