/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    baseUrl: '../src',
    paths: {
      tests: '../test/tests',
      jquery: '../lib/jquery'
    }
  });
  requirejs(['tests/{%= name %}-tests'], function () {
    QUnit.start();
  });
})();
