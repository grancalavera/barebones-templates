 /*jshint devel:true */
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'bust=' + new Date().getTime(),
    baseUrl: '../src',
    paths: {
      tests: '../test/tests',
      jquery: '../lib/jquery'
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
