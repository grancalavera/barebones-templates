 /*jshint devel:true */
;(function () {
  'use strict';
  requirejs.config({
    baseUrl: '../src',
    paths: {
      tests: '../test/tests',
      jquery: '../lib/jquery'
    }
  });
  var tests = [
    'tests/{%= name %}-tests'
  ];
  requirejs(tests, function () {
    QUnit.start();
  });
})();
